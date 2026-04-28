export default function Navbar() {
  return (
    <nav className="sticky top-0 backdrop-blur-xl bg-white/5 border-b border-white/10 z-50">
      
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="w-10" />
          <span className="font-bold">NORIN GROUP</span>
        </div>

        {/* ПРАВАЯ КНОПКА */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-2 rounded-xl shadow-lg shadow-blue-500/30 hover:scale-105 transition"
        >
          Напишите нам
        </a>

      </div>
    </nav>
  );
}