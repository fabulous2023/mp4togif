'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Upload,
  Download,
  Play,
  CheckCircle,
  Clock,
  AlertCircle,
  FileVideo,
  Settings,
  X,
  Loader2,
} from 'lucide-react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

interface GifConverterProps {
  onConversionComplete?: (gifUrl: string) => void;
}

export default function GifConverter({ onConversionComplete }: GifConverterProps) {
  const [ffmpeg, setFfmpeg] = useState<FFmpeg | null>(null);
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedGif, setConvertedGif] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(5);
  const [quality, setQuality] = useState<number>(10); // Corresponds to ffmpeg crf
  const [fps, setFps] = useState<number>(10);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadFfmpeg = useCallback(async () => {
    const ffmpegInstance = new FFmpeg();
    ffmpegInstance.on('log', ({ message }) => {
      console.log(message);
    });
    ffmpegInstance.on('progress', ({ progress }) => {
      setProgress(Math.round(progress * 100));
    });
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
    await ffmpegInstance.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    setFfmpeg(ffmpegInstance);
    setFfmpegLoaded(true);
  }, []);

  useEffect(() => {
    loadFfmpeg();
  }, [loadFfmpeg]);

  // Check if file is a supported video format
  const isValidVideoFile = (file: File): boolean => {
    // Check MIME type first
    if (file.type.startsWith('video/')) {
      return true;
    }
    
    // If MIME type check fails, check file extension
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    const supportedExtensions = ['mp4', '3gp', 'mkv', 'flv', 'avi', 'mov', 'ogv', 'webm', 'wmv'];
    return supportedExtensions.includes(extension);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isValidVideoFile(file)) {
      setSelectedFile(file);
      setConvertedGif(null);
      setError(null);
    } else {
      setError('Please select a valid video file');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && isValidVideoFile(file)) {
      setSelectedFile(file);
      setConvertedGif(null);
      setError(null);
    } else {
      setError('Please drop a valid video file');
    }
  };

  const convertToGif = useCallback(async () => {
    if (!ffmpeg || !selectedFile) return;

    setIsConverting(true);
    setError(null);
    setProgress(0);

    try {
      // 根据文件类型确定输入文件名
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase() || 'mp4';
      const inputFileName = `input.${fileExtension}`;
      const outputFileName = 'output.gif';
      
      await ffmpeg.writeFile(inputFileName, await fetchFile(selectedFile));

      // High quality: -crf 20, Medium: -crf 25, Low: -crf 30
      const crf = 35 - quality; // Simple mapping from our quality scale

      const command: [string, ...string[]] = [
        '-i', inputFileName,
        '-t', String(duration),
        '-vf', `fps=${fps},scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
        '-loop', '0',
        '-crf', String(crf),
        outputFileName
      ];

      await ffmpeg.exec(command);

      const data = await ffmpeg.readFile(outputFileName);
      const gifUrl = URL.createObjectURL(new Blob([data], { type: 'image/gif' }));
      setConvertedGif(gifUrl);
      onConversionComplete?.(gifUrl);

    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Conversion failed, please try another video format');
    } finally {
      setIsConverting(false);
    }
  }, [ffmpeg, selectedFile, duration, quality, fps, onConversionComplete]);



  const handleDownload = () => {
    if (!convertedGif) return;

    const link = document.createElement('a');
    link.href = convertedGif;
    link.download = selectedFile?.name.replace(/\.[^/.]+$/, '') + '.gif' || 'converted.gif';
    link.click();
  };

  const reset = () => {
    setSelectedFile(null);
    setConvertedGif(null);
    setError(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div 
        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {!ffmpegLoaded ? (
          <div className="text-center py-12">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-700">Loading Converter...</p>
            <p className="text-gray-500">Please wait, this may take a moment.</p>
          </div>
        ) : !selectedFile ? (
          <div
            className="text-center cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 sm:p-6"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 px-2">Drop your video file for Video to GIF conversion</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base px-2">Upload video to start Video to GIF process</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*,.mp4,.3gp,.mkv,.flv,.avi,.mov,.ogv,.webm,.wmv"
              onChange={handleFileSelect}
              className="hidden"
            />
              <Button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent double trigger
                  fileInputRef.current?.click();
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium"
              >
                Choose Video File for GIF
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 px-2 leading-relaxed">
                Max file size: 100MB | Supported formats: MP4, 3GP, MKV, FLV, AVI, MOV, OGV, WEBM, WMV
              </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <FileVideo className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base truncate">{selectedFile.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={reset}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0 p-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Settings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Duration (seconds)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-base"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Quality</label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-base"
                >
                  <option value="5">Low</option>
                  <option value="10">Medium</option>
                  <option value="15">High</option>
                </select>
              </div>
              
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="text-sm font-medium text-gray-700">Frame Rate (FPS)</label>
                <select
                  value={fps}
                  onChange={(e) => setFps(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-base"
                >
                  <option value="5">5 FPS</option>
                  <option value="10">10 FPS</option>
                  <option value="15">15 FPS</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            {isConverting ? (
              <div className="text-center py-6 sm:py-8 px-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-base sm:text-lg font-semibold mb-3">Video to GIF conversion in progress...</p>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-2 mx-auto max-w-sm overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 font-medium">{Math.round(progress)}% complete</p>
              </div>
            ) : convertedGif ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="relative inline-block max-w-full">
                    <Image 
                      src={convertedGif} 
                      alt="Converted GIF" 
                      width={480}
                      height={270}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg border border-gray-200 shadow-sm"
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                  <Button 
                    onClick={handleDownload}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 text-base font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Animation
                  </Button>
                  <Button 
                    onClick={reset}
                    variant="outline"
                    className="flex-1 sm:flex-none sm:px-6 py-3 text-base font-medium"
                  >
                    Convert Another
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                onClick={convertToGif}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 text-base sm:text-lg font-medium"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Start Video to GIF Conversion
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}