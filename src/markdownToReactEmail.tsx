/* eslint-disable jsx-a11y/heading-has-content */
import * as React from 'react'
import rehypeRaw from 'rehype-raw'
import rehype2react from 'rehype-react'
import type { ComponentsWithoutNodeOptions } from 'rehype-react/lib/complex-types'
import markdown from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export function markdownToReactEmail(
  markdownText: string,
  options: { markdownStyles?: MarkdownStyles; components?: ComponentsWithoutNodeOptions['components'] }
): React.ReactNode {
  const { markdownStyles } = options

  const components: ComponentsWithoutNodeOptions['components'] = {
    ...defaultComponents(markdownStyles || {}),
    ...options.components,
  }

  const processor = unified()
    .use(markdown)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      passNode: false,
      components,
    })

  return processor.processSync(markdownText).result
}

function createHeading(Level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', markdownStyles: MarkdownStyles) {
  return (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <Level
      data-id="react-email-heading"
      {...props}
      style={{
        ...props.style,
        ...markdownStyles[Level],
      }}
    />
  )
}

export function defaultComponents(markdownStyles: MarkdownStyles): ComponentsWithoutNodeOptions['components'] {
  return {
    h1: createHeading('h1', markdownStyles),
    h2: createHeading('h2', markdownStyles),
    h3: createHeading('h3', markdownStyles),
    h4: createHeading('h4', markdownStyles),
    h5: createHeading('h5', markdownStyles),
    h6: createHeading('h6', markdownStyles),
    blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
      <blockquote
        data-id="react-email-blockquote"
        {...props}
        style={{
          ...props.style,
          ...markdownStyles.blockquote,
        }}
      />
    ),
    p: (props: React.ComponentPropsWithoutRef<'p'>) => (
      <p
        {...props}
        style={{
          ...props.style,
          ...markdownStyles.p,
        }}
      />
    ),
    // bold?: React.CSSProperties
    strong: (props: React.ComponentPropsWithoutRef<'strong'>) => (
      <strong
        {...props}
        data-id="react-email-text"
        style={{
          ...props.style,
          ...markdownStyles.bold,
        }}
      />
    ),
    em: (props: React.ComponentPropsWithoutRef<'em'>) => (
      <em
        {...props}
        data-id="react-email-text"
        style={{
          ...props.style,
          ...markdownStyles.italic,
        }}
      />
    ),
    pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
      <pre
        {...props}
        data-id="react-email-text"
        style={{
          ...props.style,
          ...markdownStyles.codeBlock,
        }}
      />
    ),
    code: (props: React.ComponentPropsWithoutRef<'code'>) => <code {...props} />,
    hr: (props: React.ComponentPropsWithoutRef<'hr'>) => (
      <hr
        {...props}
        data-id="react-email-hr"
        style={{
          ...props.style,
          ...markdownStyles.hr,
        }}
      />
    ),
  }
}

export interface MarkdownStyles {
  h1?: React.CSSProperties
  h2?: React.CSSProperties
  h3?: React.CSSProperties
  h4?: React.CSSProperties
  h5?: React.CSSProperties
  h6?: React.CSSProperties
  blockquote?: React.CSSProperties
  bold?: React.CSSProperties
  italic?: React.CSSProperties
  link?: React.CSSProperties
  codeBlock?: React.CSSProperties
  codeInline?: React.CSSProperties
  p?: React.CSSProperties
  li?: React.CSSProperties
  ul?: React.CSSProperties
  image?: React.CSSProperties
  br?: React.CSSProperties
  hr?: React.CSSProperties
  table?: React.CSSProperties
  thead?: React.CSSProperties
  tbody?: React.CSSProperties
  tr?: React.CSSProperties
  th?: React.CSSProperties
  td?: React.CSSProperties
  strikethrough?: React.CSSProperties
}
