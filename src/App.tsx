import { useState } from 'react';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

export default function AnimatedLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-zinc-950 overflow-hidden">
      {/* 左侧：四个卡通人物 */}
      <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-12 text-white flex flex-col relative">
        <div className="flex items-center gap-3 mb-12 z-10">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
            <Sparkles className="w-7 h-7" />
          </div>
          <span className="text-4xl font-bold">YourBrand</span>
        </div>

        <div className="flex-1 flex items-end justify-center relative">
          <div className="relative w-[620px] h-[540px]">

            {/* Purple Character */}
            <div className="absolute bottom-0 left-12 w-44 h-[410px] bg-[#6C3FF5] rounded-t-3xl shadow-2xl" />

            {/* Black Character */}
            <div className="absolute bottom-0 left-[230px] w-32 h-[290px] bg-zinc-900 rounded-t-2xl shadow-2xl" />

            {/* Orange Character */}
            <div className="absolute bottom-0 left-6 w-[210px] h-[195px] bg-orange-400 rounded-t-[100px] shadow-2xl" />

            {/* Yellow Character */}
            <div className="absolute bottom-0 left-[325px] w-[155px] h-[225px] bg-yellow-400 rounded-t-[70px] shadow-2xl" />
          </div>
        </div>

        <div className="text-center text-white/70 text-sm z-10">
          四个可爱的小怪兽已就位<br />把窗口拉大试试看
        </div>
      </div>

      {/* 右侧登录表单 */}
      <div className="flex items-center justify-center p-8 bg-zinc-950">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">欢迎回来</h1>
            <p className="text-zinc-400">输入密码，看小怪兽的反应！</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-zinc-300 mb-2 text-sm">邮箱地址</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full h-12 bg-zinc-900 border border-zinc-700 rounded-xl px-5 text-white focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-2 text-sm">密码</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full h-12 bg-zinc-900 border border-zinc-700 rounded-xl px-5 text-white focus:outline-none focus:border-violet-500 pr-12"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <button className="w-full h-12 bg-violet-600 hover:bg-violet-700 rounded-xl text-white font-medium text-lg transition-colors">
              立即登录
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}