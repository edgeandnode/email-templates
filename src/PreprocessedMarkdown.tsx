import * as React from 'react'

import { emailCta } from './email-cta'
import { markdownToReactEmail } from './markdownToReactEmail'
import { subscriptionsFooter } from './subscriptions-footer'

export function PreprocessedMarkdown({ markdown }: { markdown: string }) {
  return (
    <div>
      {markdownToReactEmail(preprocessMarkdown(markdown), {
        markdownStyles: {
          bold: { display: 'inline', fontWeight: 600 },
          link: { textDecoration: 'underline' },
          h1: {
            fontSize: '1.4em',
            margin: 0,
          },
          hr: {
            border: 'none',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          },
        },
        // TODO: Remove componentSubstitutions in favor of this
        components: {},
      })}
    </div>
  )
}

/**
 * I had an idea to use MDX for this, but it would be HUGE overengineering,
 * and we'll be more than fine with String.prototype.replace and inline styles
 * at least until AI takes our jobs.
 */
const componentSubstitutions: (readonly [RegExp, string])[] = [
  emailCta,
  subscriptionsFooter,
  // trim extra whitespace after the heading
  [/# (.*?)\n\n/, '# $1\n'],
]

function preprocessMarkdown(markdown: string) {
  for (const [pattern, substitution] of componentSubstitutions) {
    markdown = markdown.replace(pattern, substitution)
  }

  return markdown
}
