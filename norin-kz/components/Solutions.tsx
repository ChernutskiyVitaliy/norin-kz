"use client";
import { motion } from "framer-motion";

const items = [
  {
    title: "Системы видеонаблюдения",
    desc: "Системы видеонаблюдения обеспечивают круглосуточный контроль за объектом. Включают камеры, регистраторы и удалённый доступ для просмотра в реальном времени и записи архива",
    img: "/camera.png",
  },
  {
    title: "Системы контроля доступа",
    desc: "Системы контроля доступа Позволяют ограничить и контролировать вход на территорию или в помещения. Используются карты, ключи, коды или биометрия для идентификации пользователей.",
    img: "/access.png",
  },
  {
    title: "Аудио и видеодомофоны",
    desc: "Аудио и видеодомофоны обеспечивают связь с посетителями и контроль входа. Позволяют видеть и слышать гостя, а также открывать дверь дистанционно.",
    img: "/intercom.png",
  },
  {
    title: "Охранно-пожарные системы",
    desc: "Охранно-пожарные системы - комплекс решений для защиты от несанкционированного доступа и пожара. Включает датчики движения, дыма, сигнализацию и систему оповещения.",
    img: "/fire.png",
  },
  {
    title: "Структурированные кабельные системы",
    desc: "Структурированные кабельные системы (СКС) - основа для передачи данных в здании. Объединяют интернет, телефонию и другие сети в единую инфраструктуру.",
    img: "/cable.png",
  },
    {
    title: "Кондиционирование и вентиляция",
    desc: "Кондиционирование и вентиляция создают комфортный микроклимат в помещении. Обеспечивают охлаждение, обогрев и приток свежего воздуха.",
    img: "/vent.png",
  },
  {
    title: "Отопление",
    desc: "Система поддержания комфортной температуры в холодное время года. Включает котлы, радиаторы, трубы и автоматику управления.",
    img: "/otoplenie.png",
  },
  {
    title: "Водопровод",
    desc: "Система подачи и распределения воды в здании. Обеспечивает стабильное водоснабжение для бытовых и технических нужд.",
    img: "/water.png",
  },
    {
    title: "Электрика",
    desc: "Комплекс электромонтажных работ: прокладка проводки, установка щитов, розеток, освещения и систем безопасности.",
    img: "/elec.png",
  },
];

export default function Solutions() {
  return (
    <section className="bg-[#010614] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Отраслевые решения</h2>
          <p className="text-gray-400 max-w-xl">
            Мы предлагаем полный спектр систем безопасности для вашего бизнеса и дома
          </p>
        </div>

        {/* Используем Flexbox для управления рядами как на макете */}
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, i) => (
<motion.div
  key={i}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ y: -5 }}
  className="relative bg-[#050B18] border border-white/5 p-8 rounded-3xl w-full md:w-[31%] min-h-[380px] group cursor-pointer overflow-hidden"
>
  {/* ОСНОВНОЙ КОНТЕНТ */}
  <div className="
    flex flex-col justify-between h-full
    transition-all duration-300
    group-hover:opacity-0 
    group-hover:scale-95
  ">
    <div>
      <div className="h-40 flex items-center justify-center mb-6">
        <img 
          src={item.img} 
          alt={item.title} 
          className="max-h-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold mb-3 leading-tight">
        {item.title}
      </h3>
    </div>

    <div className="mt-6">
      <span className="text-blue-500 text-xl inline-block">
        →
      </span>
    </div>
  </div>

  {/* HOVER КОНТЕНТ */}
  <div className="
    absolute inset-0 
    flex items-center justify-center
    text-center p-8

    opacity-0 
    group-hover:opacity-100

    transition-all duration-300
  ">
    <p className="text-gray-300 text-sm leading-relaxed">
      {item.desc}
    </p>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}