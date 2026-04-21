import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

const stats = [
  { value: 200, suffix: "+", label: "молодожёнов доверили нам свой день" },
  { value: 9, suffix: " лет", label: "на рынке свадебного декора" },
  { value: 4, prefix: "до ", label: "свадеб в месяц — не конвейер" },
  { value: 100, suffix: "%", label: "договор с детализированной сметой" }
];

const partners = [
  "Усадьба «Середниково»",
  "Ресторан «Белый Кролик»",
  "Загородный клуб «Ривьера»",
  "Soluxe Club",
  "Barvikha Luxury Village",
  "Tehnikum"
];

export function SocialProof() {
  return (
    <section aria-label="Достижения студии" className="section-pad-sm bg-brand-background">
      <div className="container-content">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08} className="text-center md:text-left">
              <p className="type-numeric text-[clamp(3rem,5vw,4.5rem)] text-brand-primary leading-none">
                <CountUp to={stat.value} suffix={stat.suffix ?? ""} prefix={stat.prefix ?? ""} />
              </p>
              <p className="mt-3 text-sm leading-6 text-brand-muted max-w-[220px] mx-auto md:mx-0">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 border-t border-brand-border pt-10">
          <p className="type-eyebrow text-center">Работали на площадках</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-serif text-lg italic text-brand-muted/80 tracking-tight"
              >
                {partner}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
