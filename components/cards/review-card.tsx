type ReviewCardProps = {
  text: string;
  author: string;
};

export function ReviewCard({ text, author }: ReviewCardProps) {
  return (
    <blockquote className="surface-card p-6 sm:p-7">
      <p className="mb-4 font-serif text-3xl leading-none text-brand-muted/45">“</p>
      <p className="text-[0.98rem] leading-8 text-brand-text">{text}</p>
      <footer className="mt-5 text-xs uppercase tracking-[0.16em] text-brand-muted">{author}</footer>
    </blockquote>
  );
}
