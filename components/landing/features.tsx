import Image from "next/image";
import { Crown, Heart, Flower, Camera, Sparkles, FileText } from "lucide-react";
import { Reveal } from "./reveal";

const features = [
  {
    Icon: Crown,
    title: "Декор президиума",
    price: "от 20 000 ₽",
    text: "Композиция за молодожёнами: арка, ширма, флористика, текстиль, свет.",
    image: "/images/legacy/portfolio/1.jpg.webp"
  },
  {
    Icon: Heart,
    title: "Выездная регистрация",
    price: "от 18 000 ₽",
    text: "Арка церемонии, стойка регистратора, проходная дорожка, стулья.",
    image: "/images/legacy/portfolio/4.jpg.webp"
  },
  {
    Icon: Flower,
    title: "Свадебная флористика",
    price: "от 2 500 ₽",
    text: "Букет невесты, бутоньерки, композиции на столы, автомобильные украшения.",
    image: "/images/legacy/portfolio/8.jpg.webp"
  },
  {
    Icon: Camera,
    title: "Фотозона",
    price: "от 15 000 ₽",
    text: "Отдельная зона для гостевой съёмки с авторским оформлением.",
    image: "/images/legacy/portfolio/12.jpg.webp"
  },
  {
    Icon: Sparkles,
    title: "Оформление шарами",
    price: "от 150 ₽/шт",
    text: "Гирлянды, арки, композиции из латексных и фольгированных шаров.",
    image: "/images/legacy/portfolio/16.jpg.webp"
  },
  {
    Icon: FileText,
    title: "Аксессуары и полиграфия",
    price: "от 80 ₽",
    text: "Приглашения, рассадка, номерки столов, план рассадки, книга пожеланий.",
    image: "/images/legacy/portfolio/20.jpg.webp"
  }
];

export function Features() {
  return (
    <section id="services" aria-labelledby="features-heading" className="section-pad bg-brand-soft/60">
      <div className="container-content">
        <Reveal className="max-w-3xl">
          <p className="type-eyebrow">Услуги</p>
          <h2 id="features-heading" className="type-h2 mt-4">
            Что мы оформляем
          </h2>
          <p className="type-lead mt-5">
            Берём на себя всю визуальную часть вашей свадьбы — от арки до номерков столов.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, price, text, image }, idx) => (
            <Reveal key={title} delay={idx * 0.06}>
              <article className="card-surface overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-lg font-semibold text-brand-primary whitespace-nowrap">
                      {price}
                    </span>
                  </div>
                  <h3 className="type-h3 mt-5 text-brand-text">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
