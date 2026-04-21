import { AlertCircle, Wallet, Eye } from "lucide-react";
import { Reveal } from "./reveal";

const problems = [
  {
    Icon: Wallet,
    title: "Смета растёт как снежный ком",
    text: "Декоратор обещает одну цену, а в день свадьбы присылает счёт в 1,5–2 раза больше из-за «непредвиденных» расходов на цветы, транспорт, монтаж."
  },
  {
    Icon: Eye,
    title: "Картинки с Pinterest ≠ реальность",
    text: "На согласовании показывают красивые мудборды, а по факту получаете банальные композиции из базового ассортимента флориста."
  },
  {
    Icon: AlertCircle,
    title: "Стиль разваливается на части",
    text: "Приглашения от одного подрядчика, арка от второго, президиум от третьего — и всё выглядит как бы из разных свадеб."
  }
];

export function Problem() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="section-pad bg-brand-soft/60"
    >
      <div className="container-content">
        <Reveal className="max-w-3xl">
          <p className="type-eyebrow">Боли</p>
          <h2 id="problem-heading" className="type-h2 mt-4">
            Почему оформление свадьбы превращается в стресс
          </h2>
          <p className="type-lead mt-5">
            Три проблемы, с которыми сталкивается почти каждая пара перед свадьбой.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5">
          {problems.map(({ Icon, title, text }, idx) => (
            <Reveal key={title} delay={idx * 0.08} className="card-surface p-7 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/20 text-brand-primary">
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
