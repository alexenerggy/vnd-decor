import Link from "next/link";
import type { ReactNode } from "react";

function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    const [, label, href] = match;

    if (href.startsWith("/")) {
      return (
        <Link key={`${href}-${index}`} href={href}>
          {label}
        </Link>
      );
    }

    return (
      <a key={`${href}-${index}`} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  });
}

type RichTextProps = {
  source: string;
};

export function RichText({ source }: RichTextProps) {
  const lines = source.split("\n");
  const nodes: ReactNode[] = [];
  let listBuffer: string[] = [];
  let orderedListBuffer: string[] = [];

  function flushList() {
    if (listBuffer.length === 0) {
      return;
    }

    nodes.push(
      <ul key={`list-${nodes.length}`}>
        {listBuffer.map((item, idx) => (
          <li key={`${item}-${idx}`}>{renderInlineLinks(item)}</li>
        ))}
      </ul>
    );
    listBuffer = [];
  }

  function flushOrderedList() {
    if (orderedListBuffer.length === 0) {
      return;
    }

    nodes.push(
      <ol key={`olist-${nodes.length}`}>
        {orderedListBuffer.map((item, idx) => (
          <li key={`${item}-${idx}`}>{renderInlineLinks(item)}</li>
        ))}
      </ol>
    );
    orderedListBuffer = [];
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      flushOrderedList();
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushOrderedList();
      listBuffer.push(trimmed.slice(2).trim());
      return;
    }

    if (/^\\d+\\.\\s+/.test(trimmed)) {
      flushList();
      orderedListBuffer.push(trimmed.replace(/^\\d+\\.\\s+/, "").trim());
      return;
    }

    flushList();
    flushOrderedList();

    if (trimmed.startsWith("> ")) {
      nodes.push(<blockquote key={`blockquote-${index}`}>{renderInlineLinks(trimmed.slice(2))}</blockquote>);
      return;
    }

    if (trimmed.startsWith("## ")) {
      nodes.push(<h2 key={`h2-${index}`}>{trimmed.slice(3)}</h2>);
      return;
    }

    if (trimmed.startsWith("### ")) {
      nodes.push(<h3 key={`h3-${index}`}>{trimmed.slice(4)}</h3>);
      return;
    }

    nodes.push(<p key={`p-${index}`}>{renderInlineLinks(trimmed)}</p>);
  });

  flushList();
  flushOrderedList();

  return <div className="prose-brand editorial-stack">{nodes}</div>;
}
