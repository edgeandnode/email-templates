import { Markdown } from "@react-email/markdown";
import * as React from "react";

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
const componentSubstitutions = {
  "email-cta":
    "padding: 8px; background: #6148E0; color: #fff; border-radius: 4px; text-decoration: none; font-weight: 500;",
};

function preprocessMarkdown(markdown: string) {
  for (const [componentName, componentStyle] of Object.entries(
    componentSubstitutions
  )) {
    markdown = markdown.replace(
      new RegExp(`\\b${componentName}\\b`, "g"),
      `style="${componentStyle}"`
    );
  }

  return markdown;
}
