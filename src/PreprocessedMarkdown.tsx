import { Markdown } from "@react-email/markdown";
import * as React from "react";

import { subscriptionsFooter } from "./subscriptions-footer";

export function PreprocessedMarkdown({ markdown }: { markdown: string }) {
  return (
    <Markdown
      markdownCustomStyles={{
        bold: {
          display: "inline",
          fontWeight: "bold",
        },
      }}
      markdownContainerStyles={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
        padding: "24px",
        whiteSpace: "pre-line",
        background: "white",
        lineHeight: 1.5,
      }}
    >
      {preprocessMarkdown(markdown)}
    </Markdown>
  );
}

/**
 * I had an idea to use MDX for this, but it would be HUGE overengineering,
 * and we'll be more than fine with String.prototype.replace and inline styles
 * at least until AI takes our jobs.
 */
const componentSubstitutions = [
  [
    "email-cta",
    'style="padding: 8px; background: #6148E0; color: #fff; border-radius: 4px; text-decoration: none; font-weight: 500;"',
  ],
  subscriptionsFooter,
];

function preprocessMarkdown(markdown: string) {
  for (const [pattern, substitution] of componentSubstitutions) {
    markdown = markdown.replace(
      typeof pattern === "string"
        ? new RegExp(`\\b${pattern}\\b`, "g")
        : pattern,
      substitution
    );
  }

  return markdown;
}
