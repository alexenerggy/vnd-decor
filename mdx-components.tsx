import type { MDXComponents } from "mdx/types";

import { mdxComponents } from "@/components/ui/rich-text-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components
  };
}
