import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

const testimonials = [
  {
    initials: "АД",
    names: "Анна и Дмитрий",
    date: "12 июня 2024",
    venue: "Усадьба «Середниково»",
    text: "Боялись, что получим стандартную арку с белыми розами, как у всех подруг. Девочки сделали композицию из полевых цветов и сухоцветов — точно под нашу историю знакомства в Крыму. Гости до сих пор вспоминают президиум."
  },
  {
    initials: "МА",
    names: "Мария и Артём",
    date: "3 августа 2024",
    venue: "Ресторан «Белый Кролик»",
    text: "Смета не выросла ни на рубль от того, что подписали в договоре. Для свадьбы это редкость. Отдельное спасибо за план рассадки в подарок — спасло нас от семейной драмы за столом."
  },
  {
    initials: "ЕП",
    names: "Екатерина и Павел",
    date: "21 сентября 2024",
    venue: "Загородный клуб «Ривьера»",
    text: "Заказали декор под ключ — от приглашений до номерков. Всё в одной эстетике dusty pink и золота. Наш фотограф сказал, что такой целостной свадьбы он давно не снимал."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="section-pad bg-brand-background">
      <div className="container-content">
        <Reveal className="max-w-3xl">
          <p className="type-eyebrow">Отзывы</p>
          <h2 id="testimonials-heading" className="type-h2 mt-4">
            Что говорят пары
          </h2>
          <p className="type-lead mt-5">
            Отзывы после реальных свадеб, которые мы оформили в 2024 году.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5">
          {testimonials.map(({ initials, names, date, venue, text }, idx) => (
            <Reveal
              key={names}
              delay={idx * 0.08}
              className="card-surface p-7 sm:p-8 flex flex-col"
            >
              <Quote className="h-6 w-6 text-brand-accent" strokeWidth={1.5} />
              <p className="mt-5 flex-1 text-[0.95rem] leading-7 text-brand-text">{text}</p>
              <div className="mt-7 flex items-center gap-4 border-t border-brand-border pt-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white font-serif text-sm font-semibold">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-text">{names}</p>
                  <p className="mt-0.5 text-xs text-brand-muted">
                    {date} · {venue}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
