import fs from "node:fs/promises";
import path from "node:path";

const legalFiles = {
  consent: "content/legal/personal-data-consent.mdx",
  privacy: "content/legal/privacy-policy-placeholder.mdx"
} as const;

export type LegalDocumentKey = keyof typeof legalFiles;

export async function getLegalDocument(key: LegalDocumentKey): Promise<string> {
  const filePath = path.join(process.cwd(), legalFiles[key]);
  return fs.readFile(filePath, "utf-8");
}
