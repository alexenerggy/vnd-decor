import { Check, Star } from "lucide-react";
import { Reveal } from "./reveal";

const plans = [
  {
    name: "Лайт",
    price: "от 45 000 ₽",
    audience: "Для камерной свадьбы до 30 гостей",
    features: [
      "Декор президиума",
      "Букет невесты + 2 бутоньерки",
      "Композиции на 3 стола",
      "Базовая полиграфия (рассадка + номерки)"
    ],
    cta: "Обсудить",
    preset: "Пакет «Лайт»",
    featured: false
  },
  {
    name: "Классика",
    price: "от 120 000 ₽",
    audience: "Для свадьбы до 60 гостей под ключ",
    features: [
      "Всё из пакета «Лайт»",
      "Выездная регистрация с аркой",
      "Фотозона",
      "Оформление проходов и входной группы",
      "Полный комплект полиграфии",
      "План рассадки в подарок"
    ],
    cta: "Выбрать пакет",
    preset: "Пакет «Классика»",
    featured: true
  },
  {
    name: "Авторская",
    price: "от 250 000 ₽",
    audience: "Для свадьбы 80+ гостей с уникальной концепцией",
    features: [
      "Всё из пакета «Классика»",
      "Индивидуальные декорации по скетчам",
      "Световое оформление",
      "Оформление шарами и инсталляциями",
      "Кастомная полиграфия с иллюстрациями пары",
      "Менеджер-координатор на день свадьбы"
    ],
    cta: "Обсудить",
    preset: "Пакет «Авторская»",
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="section-pad bg-brand-soft/60">
      <div className="container-content">
        <Reveal className="max-w-3xl">
          <p className="type-eyebrow">Пакеты</p>
          <h2 id="pricing-heading" className="type-h2 mt-4">
            Пакеты оформления
          </h2>
          <p className="type-lead mt-5">
            Гибко. Каждый пакет адаптируем под вашу площадку и бюджет.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, idx) => (
            <Reveal
              key={plan.name}
              delay={idx * 0.08}
              className={plan.featured ? "lg:-my-4" : undefined}
            >
              <article
                className={`h-full flex flex-col rounded-2xl border p-7 sm:p-8 transition-all duration-300 ${
                  plan.featured
                    ? "bg-brand-primary text-white border-brand-primary shadow-[0_24px_60px_rgba(61,26,46,0.2)] lg:scale-[1.04]"
                    : "bg-white border-brand-border hover:shadow-card"
                }`}
              >
                {plan.featured ? (
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-brand-accent/90 text-brand-bgDark px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                    <Star className="h-3 w-3 fill-brand-bgDark" strokeWidth={0} />
                    Популярный
                  </span>
                ) : null}

                <h3
                  className={`font-serif text-3xl font-semibold mt-${plan.featured ? "5" : "0"} ${
                    plan.featured ? "text-white" : "text-brand-text"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-5 font-serif text-[2.25rem] font-semibold leading-none ${
                    plan.featured ? "text-brand-accent" : "text-brand-primary"
                  }`}
                >
                  {plan.price}
                </p>

                <p className={`mt-3 text-sm ${plan.featured ? "text-white/75" : "text-brand-muted"}`}>
                  {plan.audience}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`h-4 w-4 shrink-0 mt-1 ${
                          plan.featured ? "text-brand-accent" : "text-brand-primary"
                        }`}
                        strokeWidth={2}
                      />
                      <span
                        className={
                          plan.featured ? "text-white/90 leading-6" : "text-brand-text leading-6"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#final-cta"
                  data-plan={plan.preset}
                  className={`mt-8 ${
                    plan.featured
                      ? "btn-primary !bg-brand-accent !text-brand-bgDark hover:!bg-white"
                      : "btn-outline"
                  } w-full`}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-10 text-center">
          <p className="text-sm text-brand-muted">
            Не нашли подходящий формат?{" "}
            <a href="#final-cta" className="text-brand-primary font-medium underline underline-offset-4 hover:text-brand-text">
              Соберём пакет под ваш запрос →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
