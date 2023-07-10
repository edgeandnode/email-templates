import { Html } from "@react-email/html";
import { readFileSync } from "node:fs";
import * as React from "react";

import { PreprocessedMarkdown } from "./PreprocessedMarkdown";

export type MarkdownEmailProps = { template: string } | { path: string };

export function MarkdownEmail({ filename }: { filename: string }) {
  const template = readFileSync(
    filename.replace("file://", "").replace(".tsx", ".md"),
    "utf8"
  );

  return (
    <Html lang="en" dir="ltr">
      <PreprocessedMarkdown markdown={template} />
    </Html>
  );
}
