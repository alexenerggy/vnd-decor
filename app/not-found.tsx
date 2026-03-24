import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-4xl">Страница не найдена</h1>
        <p className="mt-4 text-brand-muted">Проверьте адрес или вернитесь на главную.</p>
        <Link href="/" className="mt-6 inline-block text-brand-primary">
          Перейти на главную
        </Link>
      </Container>
    </section>
  );
}
