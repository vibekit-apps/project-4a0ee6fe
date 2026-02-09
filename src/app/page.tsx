export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
        
        {/* Main content card */}
        <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 shadow-2xl">
          <div className="text-center space-y-6">
            {/* Logo/Icon placeholder */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <svg 
                className="w-10 h-10 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            
            {/* Main heading */}
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
              Welcome to
            </h1>
            
            {/* VibeKit text with special styling */}
            <div className="relative">
              <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 leading-tight tracking-tight">
                VibeKit
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl text-white/80 max-w-md mx-auto leading-relaxed">
              Create amazing experiences with beautiful, modern web applications
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center space-x-2 pt-8">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-ping" style={{top: '10%', left: '10%'}}></div>
        <div className="absolute top-0 right-0 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-ping" style={{top: '20%', right: '15%', animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60 animate-ping" style={{bottom: '15%', left: '20%', animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-ping" style={{bottom: '25%', right: '10%', animationDelay: '1.5s'}}></div>
      </div>
    </div>
  )
}