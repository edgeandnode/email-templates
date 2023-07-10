import { Markdown } from '@react-email/markdown'
import * as React from 'react'

import { subscriptionsFooter } from './subscriptions-footer'
import { emailCta } from './email-cta'

export function PreprocessedMarkdown({ markdown }: { markdown: string }) {
  return (
    <Markdown
      markdownCustomStyles={{
        bold: { display: 'inline', fontWeight: 600 },
        link: { textDecoration: 'underline' },
      }}
    >
      {preprocessMarkdown(markdown)}
    </Markdown>
  )
}

/**
 * I had an idea to use MDX for this, but it would be HUGE overengineering,
 * and we'll be more than fine with String.prototype.replace and inline styles
 * at least until AI takes our jobs.
 */
const componentSubstitutions: (readonly [RegExp, string])[] = [emailCta, subscriptionsFooter]

function preprocessMarkdown(markdown: string) {
  for (const [pattern, substitution] of componentSubstitutions) {
    markdown = markdown.replace(pattern, substitution)
  }

  return markdown
}
