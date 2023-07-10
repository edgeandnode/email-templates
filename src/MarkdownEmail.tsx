import { Html } from '@react-email/html'
import { readFileSync } from 'fs'
import * as React from 'react'

import { PreprocessedMarkdown } from './PreprocessedMarkdown'
import { EmailHeader } from './EmailHeader'
import { Body, Head } from '@react-email/components'

export type MarkdownEmailProps = { template: string } | { path: string }

export function MarkdownEmail({ filename }: { filename: string }) {
  const [, rootDir, templateName] = filename.match(
    filename.endsWith('_tsx.js') ? /(.*).react-email\/.*\/emails_(.*)_tsx\.js$/ : /(.*)\/out\/(.*)\.js$/
  )!

  const template = readFileSync(`${rootDir}/emails/${templateName}.md`, 'utf8')

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body { 
              font-family: system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
              padding: 24px;
              white-space: pre-line;
              background: white;
              line-height: 1.5;
              max-width: 820px;
              margin: 0 auto;
            }
            img {
              max-width: 100%;
            }
          `,
          }}
        />
      </Head>
      <Body>
        <EmailHeader style={{ marginBottom: '32px' }} />
        <PreprocessedMarkdown markdown={template} />
      </Body>
    </Html>
  )
}
