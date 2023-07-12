import { Img, Section, SectionProps } from '@react-email/components'
import * as React from 'react'

export function EmailHeader(props: SectionProps) {
  return (
    <Section {...props}>
      <Img
        src="https://assets.thegraph.com/email-header.jpg"
        width={2000}
        height={951}
        style={{
          marginBottom: '4px',
          aspectRatio: '2000 / 951',
          height: (390 / 820).toFixed(4) + '%',
        }}
      />
      <span style={{ fontWeight: 600 }}>The Graph Account</span>
      <br />
      <span>{`{{ walletAddress }}`}</span>
    </Section>
  )
}
