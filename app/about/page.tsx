import type { Metadata } from 'next';
import { gameConfig } from '@/config/game.config';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/MobileNav';
import { 
  GamepadIcon, 
  Users, 
  Target, 
  Zap, 
  Trophy, 
  Smartphone, 
  Globe, 
  Heart,
  Star,
  Play,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: `About ${gameConfig.site.name} | ${gameConfig.game.tagline}`,
  description: `Learn about ${gameConfig.site.name} - a fast-paced 3v3 third-person soccer showdown where skill and style rule the pitch. Discover game features, modes, and what makes our soccer game unique.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header showFullNavigation={true} />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-apple-blue/5 to-apple-purple/5">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-apple-blue" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-apple-gray-900">About {gameConfig.site.name}</h1>
            </div>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              Discover the ultimate 3v3 soccer experience where skill meets style and ego meets ego on the pitch.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 bg-gradient-to-br from-apple-gray-50 to-white">
        <div className="container-custom max-w-6xl">
          
          {/* What is Unmatched Ego */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                  <GamepadIcon className="h-6 w-6 text-apple-blue" />
                </div>
                <h2 className="text-2xl font-bold text-apple-gray-900">What is {gameConfig.site.name}?</h2>
              </div>
              <div className="space-y-4 text-apple-gray-700">
                <p className="text-lg">
                  {gameConfig.site.name} is a fast-paced 3v3 third-person soccer showdown where skill and style rule the pitch. 
                  Unlike traditional soccer games, {gameConfig.site.name} transforms players into action heroes on the field, 
                  where "this isn't your average soccer game — this is ego vs ego."
                </p>
                <p>
                  In {gameConfig.site.name}, players dive into quick-fire matches where sharp dribbling, smart positioning, 
                  and perfectly timed shots take center stage. Unlike traditional soccer games, {gameConfig.site.name} turns 
                  each player into an independent action character. You are no longer the coach sitting on the sidelines, 
                  but the one who directly controls every step, every cross, every tackle.
                </p>
              </div>
            </div>
          </section>

          {/* Game Features */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-apple-blue" />
                </div>
                <h2 className="text-2xl font-bold text-apple-gray-900">Game Features</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-apple-gray-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-apple-blue" />
                    Core Gameplay
                  </h3>
                  <ul className="space-y-3 text-apple-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-apple-blue mt-2 flex-shrink-0"></div>
                      <span><strong>3v3 Multiplayer Battles:</strong> Compete online in quick, high-energy matches or train offline against AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-apple-blue mt-2 flex-shrink-0"></div>
                      <span><strong>High Skill Ceiling:</strong> Master precise dribbles, tactical tackles, flashy skill moves, and beautiful curved shots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-apple-blue mt-2 flex-shrink-0"></div>
                      <span><strong>Smart AI Bots:</strong> Challenge yourself against offline bots for practice and skill development</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-apple-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-apple-purple" />
                    Unique Features
                  </h3>
                  <ul className="space-y-3 text-apple-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-apple-purple mt-2 flex-shrink-0"></div>
                      <span><strong>Third-Person Perspective:</strong> Experience soccer from a completely new angle with direct character control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-apple-purple mt-2 flex-shrink-0"></div>
                      <span><strong>Skill-Based Action:</strong> Fast-paced, skill-based action where every dribble, shot, and tackle counts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-apple-purple mt-2 flex-shrink-0"></div>
                      <span><strong>Customization:</strong> Customize your soccer legend with unique looks and celebrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-apple-purple mt-2 flex-shrink-0"></div>
                      <span><strong>Simple Controls:</strong> All you have to do is tap on the dribbling, shooting, and tackling buttons to gain possession of the ball</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Game Modes */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-apple-orange/10 flex items-center justify-center">
                  <Play className="h-6 w-6 text-apple-orange" />
                </div>
                <h2 className="text-2xl font-bold text-apple-gray-900">Game Modes</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-apple-blue/5 rounded-xl">
                  <h3 className="text-xl font-semibold text-apple-gray-900 mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-apple-blue" />
                    Online Multiplayer
                  </h3>
                  <p className="text-apple-gray-700">
                    Whether you're playing online against real players or offline versus bots, {gameConfig.site.name} delivers 
                    fast-paced, skill-based action. Test your skills against players from around the world in competitive 3v3 matches.
                  </p>
                </div>
                
                <div className="p-6 bg-apple-blue/5 rounded-xl">
                  <h3 className="text-xl font-semibold text-apple-gray-900 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-apple-blue" />
                    Offline Practice
                  </h3>
                  <p className="text-apple-gray-700">
                    Perfect your technique against AI opponents. Players can jump into online matches against others or practice 
                    offline with AI bots, working on things like accurate dribbles, smart tackles, and those impressive curved shots 
                    that can change the game.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Developer & Inspiration */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-apple-indigo/10 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-apple-indigo" />
                  </div>
                  <h2 className="text-2xl font-bold text-apple-gray-900">Developer</h2>
                </div>
                <p className="text-apple-gray-700">
                  {gameConfig.site.name} is developed by <strong>1Car2Wills</strong>, a game development studio focused on creating
                  innovative sports gaming experiences. {gameConfig.site.name}, developed by 1Car2Wills Games, is a strange mix
                  of sports, action, and freestyle.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-apple-purple/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-apple-purple" />
                  </div>
                  <h2 className="text-2xl font-bold text-apple-gray-900">Inspiration</h2>
                </div>
                <p className="text-apple-gray-700">
                  {gameConfig.site.name} — A <strong>Blue Lock-Inspired</strong> 3v3 Soccer Game draws inspiration from the popular
                  anime series Blue Lock, bringing its intense, individualistic approach to soccer into an interactive gaming format.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Availability */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-apple-blue" />
                </div>
                <h2 className="text-2xl font-bold text-apple-gray-900">Platform Availability</h2>
              </div>
              <p className="text-apple-gray-700 mb-6">
                {gameConfig.site.name} is available across multiple platforms:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-apple-blue/5 rounded-xl">
                  <Smartphone className="h-6 w-6 text-apple-blue" />
                  <div>
                    <h3 className="font-semibold text-apple-gray-900">Mobile</h3>
                    <p className="text-sm text-apple-gray-600">Android and iOS devices</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-apple-blue/5 rounded-xl">
                  <Globe className="h-6 w-6 text-apple-blue" />
                  <div>
                    <h3 className="font-semibold text-apple-gray-900">Web</h3>
                    <p className="text-sm text-apple-gray-600">Playable on <Link href="/" className="text-apple-blue hover:underline">Our Website</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community & Updates */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-apple-orange/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-apple-orange" />
                </div>
                <h2 className="text-2xl font-bold text-apple-gray-900">Community & Updates</h2>
              </div>
              <p className="text-apple-gray-700">
                The game features an active community with regular updates and promotional codes. {gameConfig.site.name} codes
                are special passwords from the game's developer, 1Car2Wills, that give you extra coins to spend on celebrations
                and accessories for your soccer star.
              </p>
            </div>
          </section>

          {/* Why Play */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-apple-blue/5 to-apple-purple/5 rounded-2xl p-8 border border-apple-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-apple-blue/20 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-apple-blue" />
                </div>
                <h2 className="text-2xl font-bold text-apple-gray-900">Why Play {gameConfig.site.name}?</h2>
              </div>
              <div className="space-y-4 text-apple-gray-700">
                <p>
                  {gameConfig.site.name} offers a revolutionary take on soccer gaming by combining the strategic elements of team
                  sports with the excitement of action games. You can even create your own moves and plays to try to score as many
                  times as possible during each match.
                </p>
                <p>
                  Whether you're a casual player looking for quick matches or a competitive gamer seeking to master advanced techniques,
                  {gameConfig.site.name} provides an engaging experience that challenges both your reflexes and tactical thinking.
                </p>
                <p className="font-semibold text-apple-blue">
                  The game's emphasis on individual skill and direct character control makes every match feel personal and intense,
                  living up to its name as the ultimate test of soccer ego versus ego.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link href="/#game">
                  <Button size="lg" className="bg-gradient-to-r from-apple-blue to-apple-indigo hover:from-apple-blue/90 hover:to-apple-indigo/90">
                    <Play className="h-5 w-5 mr-2" />
                    Play Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
