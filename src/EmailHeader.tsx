import { Img, Section, SectionProps } from '@react-email/components'
import * as React from 'react'

export function EmailHeader(props: SectionProps) {
  return (
    <Section {...props}>
      <Img
        src="https://assets.thegraph.com/email-header.jpg"
        style={{
          marginBottom: '4px',
          aspectRatio: '2000 / 951',
          // adding height here fixes the layout shift in the preview
          // but it breaks mobile gmail
        }}
      />
      <span style={{ fontWeight: 600 }}>The Graph Account</span>
      <br />
      <span>{`{{ walletAddress }}`}</span>
    </Section>
  )
}
