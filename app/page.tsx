'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      {/* Glass Navbar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-blur-lg rounded-full py-1.5 px-4 flex space-x-6 border border-white border-opacity-20 shadow-lg z-10">
        <a href="https://t.me/asynchrome" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-80 hover:text-opacity-100 text-sm font-medium transition-all">
          Telegram
        </a>
        <a href="https://discord.com/users/1182372959860576289" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-80 hover:text-opacity-100 text-sm font-medium transition-all">
          Discord
        </a>
        <a href="https://github.com/asynchromez" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-80 hover:text-opacity-100 text-sm font-medium transition-all">
          GitHub
        </a>
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-md bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800 mt-16">
        {/* Banner Section */}
        <div className="relative h-36 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <img 
            src="/porshe.gif" 
            alt="Banner"
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          
          {/* Avatar with adjusted positioning */}
          <div className="absolute left-6 -bottom-12">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-700 border-4 border-black overflow-hidden shadow-lg">
                <img 
                  src="/ava.png" 
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-6 pt-16 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-white">asynchrome</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
              className="flex-shrink-0"
            >
              <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
            </svg>
          </div>
          
          <p className="text-gray-400 text-sm mb-4">
            @asynchrome • next.js + react.js dev
          </p>
          
          <p className="text-gray-400 text-sm">
            Hi! 🌿 I'm asynchrome - 17 y.o fullstack developer, based in St.Peterburg, Russia
          </p>

          <p className="text-gray-400 text-sm">
            This site is <a 
              href="https://github.com/asynchromez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-gray-300 hover:underline hover:text-white transition-colors"
            >
              github
            </a> project for my portfolio. aka discord profile card.
          </p>
        </div>
      </div>
    </div>
  );
}
