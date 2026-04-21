import { FileCheck, Palette, Layers } from "lucide-react";
import { Reveal } from "./reveal";

const solutions = [
  {
    Icon: FileCheck,
    title: "Фиксированная смета в договоре",
    text: "Согласовываем каждую позицию: цветы, конструкции, монтаж, демонтаж. Итоговая сумма = сумме в договоре. Всегда."
  },
  {
    Icon: Palette,
    title: "Авторский эскиз под вашу пару",
    text: "До договора присылаем 3 концепции со скетчами и мудбордами именно под ваш стиль, площадку и историю — не шаблоны из каталога."
  },
  {
    Icon: Layers,
    title: "Единый стиль от приглашений до кадра",
    text: "Берём всю визуальную часть: полиграфия, флористика, зонирование, фотозона, номерки столов. Одна команда — одна эстетика."
  }
];

export function Solution() {
  return (
    <section aria-labelledby="solution-heading" className="section-pad bg-brand-background">
      <div className="container-content">
        <Reveal className="max-w-3xl">
          <p className="type-eyebrow">Решение</p>
          <h2 id="solution-heading" className="type-h2 mt-4">
            Как мы делаем по-другому
          </h2>
          <p className="type-lead mt-5">
            Авторский подход, прозрачность и единая эстетика от первой встречи до последнего кадра.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5">
          {solutions.map(({ Icon, title, text }, idx) => (
            <Reveal key={title} delay={idx * 0.08} className="card-surface p-7 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="type-h3 mt-6 text-brand-text">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-brand-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
