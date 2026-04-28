export default function Contacts() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 mt-32">
      <h2 className="text-3xl mb-6">Контакты</h2>

      <div className="grid md:grid-cols-2 gap-6">
        
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.69607180609!2d71.3981898!3d51.11406749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585d2a282a8a9%3A0x764a3edead1f377!2z0L_RgNC-0YHQvy4g0KLRg9GA0LDQvSA1NSwg0JDRgdGC0LDQvdCwIDAyMDAwMA!5e0!3m2!1sru!2skz!4v1777373049855!5m2!1sru!2skz"
  className="w-full h-[300px] rounded-xl"
  loading="lazy"
/>

        <div className="space-y-4">
          <p>📞 +7 701 999 7473</p>

  <a href="https://wa.me/77019997473" target="_blank"
 className="block bg-green-500 hover:bg-green-600 p-3 rounded-xl transition">
 WhatsApp — Написать
</a>

  <a href="https://instagram.com/norin_group" target="_blank"
 className="block bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl transition">
 Instagram
</a>
        </div>

      </div>
    </section>
  );
}