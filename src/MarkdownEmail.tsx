import { Html } from "@react-email/html";
import { readFileSync } from "fs";
import * as React from "react";

import { PreprocessedMarkdown } from "./PreprocessedMarkdown";

export type MarkdownEmailProps = { template: string } | { path: string };

export function MarkdownEmail({ filename }: { filename: string }) {
  const [, rootDir, templateName] = filename.match(
    filename.endsWith("_tsx.js")
      ? /(.*).react-email\/.*\/emails_(.*)_tsx\.js$/
      : /(.*)\/out\/(.*)\.js$/
  )!;

  const template = readFileSync(`${rootDir}/emails/${templateName}.md`, "utf8");

  return (
    <Html lang="en" dir="ltr">
      <PreprocessedMarkdown markdown={template} />
    </Html>
  );
}
