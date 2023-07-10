import { Html } from "@react-email/html";
import { Markdown } from "@react-email/markdown";
import { readFileSync } from "node:fs";
import * as React from "react";

import { PreprocessedMarkdown } from "./PreprocessedMarkdown";

export type MarkdownEmailProps = { template: string } | { path: string };

export function MarkdownEmail() {
  const [, rootDir, templateName] = __filename.match(
    /(.*).react-email\/.*\/emails_(.*)_tsx.js/
  )!;

  const template = readFileSync(`${rootDir}/emails/${templateName}.md`, "utf8");

  return (
    <Html lang="en" dir="ltr">
      <PreprocessedMarkdown markdown={template} />
    </Html>
  );
}
