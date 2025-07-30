'use client';

import React, { useState, useRef, useCallback } from 'react';
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
  X
} from 'lucide-react';

// Import gif.js for real GIF generation
import GIF from 'gif.js';

interface GifConverterProps {
  onConversionComplete?: (gifUrl: string) => void;
}

export default function GifConverter({ onConversionComplete }: GifConverterProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedGif, setConvertedGif] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(5);
  const [quality, setQuality] = useState<number>(0.8);
  const [fps, setFps] = useState<number>(10);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
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
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
      setConvertedGif(null);
      setError(null);
    } else {
      setError('Please drop a valid video file');
    }
  };

  const convertToGif = useCallback(async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setError(null);
    setProgress(0);

    try {
      // Create video element
      const video = document.createElement('video');
      video.src = URL.createObjectURL(selectedFile);
      video.crossOrigin = 'anonymous';

      await new Promise((resolve, reject) => {
        video.onloadedmetadata = resolve;
        video.onerror = reject;
      });

      // Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Could not get canvas context');
      }

      // Set canvas dimensions
      const maxWidth = 480;
      const scale = Math.min(maxWidth / video.videoWidth, 1);
      canvas.width = video.videoWidth * scale;
      canvas.height = video.videoHeight * scale;

      // Initialize GIF encoder
      const gif = new GIF({
        workers: 2,
        quality: Math.round((1 - quality) * 20), // Convert quality to gif.js format
        width: canvas.width,
        height: canvas.height,
        workerScript: '/gif.worker.js' // We'll need to add this to public folder
      });

      const totalFrames = Math.min(duration * fps, 100); // Limit frames for performance
      const frameDelay = 1000 / fps;

      // Capture frames and add to GIF
      for (let i = 0; i < totalFrames; i++) {
        const time = (i / totalFrames) * Math.min(duration, video.duration);
        video.currentTime = time;

        await new Promise(resolve => {
          video.onseeked = resolve;
        });

        // Draw frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Add frame to GIF
        gif.addFrame(canvas, { delay: frameDelay, copy: true });

        setProgress((i / totalFrames) * 80); // 80% for frame capture
      }

      // Render GIF
      const gifBlob = await new Promise<Blob>((resolve, reject) => {
        gif.on('finished', resolve);
        gif.on('progress', (progress) => {
          setProgress(80 + progress * 20); // 20% for rendering
        });
        gif.render();
      });

      const gifUrl = URL.createObjectURL(gifBlob);
      setConvertedGif(gifUrl);
      onConversionComplete?.(gifUrl);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
    } finally {
      setIsConverting(false);
      setProgress(100);
    }
  }, [selectedFile, duration, quality, fps, onConversionComplete]);



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
        {!selectedFile ? (
          <div
            className="text-center cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Drop your MP4 file for MP4 to GIF conversion</h3>
            <p className="text-gray-600 mb-4">Upload MP4 to start MP4 to GIF process</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              onClick={(e) => {
                e.stopPropagation(); // Prevent double trigger
                fileInputRef.current?.click();
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full"
            >
              Choose MP4 File for MP4 to GIF
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Max file size: 100MB | MP4 to GIF converter supports: MP4, MOV, AVI, WebM
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileVideo className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold">{selectedFile.name}</p>
                  <p className="text-sm text-gray-600">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={reset}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Settings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Duration (seconds)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Quality</label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="0.6">Medium</option>
                  <option value="0.8">High</option>
                  <option value="1.0">Maximum</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Frame Rate (FPS)</label>
                <select
                  value={fps}
                  onChange={(e) => setFps(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
              <div className="text-center py-8">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-lg font-semibold mb-2">MP4 to GIF conversion in progress...</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{Math.round(progress)}% complete</p>
              </div>
            ) : convertedGif ? (
              <div className="space-y-4">
                <div className="text-center">
                  <Image 
                    src={convertedGif} 
                    alt="Converted GIF" 
                    width={480}
                    height={270}
                    className="max-w-full h-auto rounded-lg mx-auto border border-gray-200"
                    unoptimized
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleDownload}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Animation
                  </Button>
                  <Button 
                    onClick={reset}
                    variant="outline"
                  >
                    Convert Another
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                onClick={convertToGif}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Start MP4 to GIF Conversion
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}