import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="surface-card overflow-hidden p-8 text-center sm:p-12">
          <p className="type-kicker mb-3">Консультация</p>
          <h2 className="type-h2 mb-4">Обсудим декор вашего события</h2>
          <p className="type-body-lead mx-auto mb-7 max-w-2xl text-sm sm:text-base">
            Подскажем по стилистике, бюджету и оптимальному составу оформления для вашей площадки.
          </p>
          <ButtonLink href="/contacts" size="lg">
            Оставить заявку
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
