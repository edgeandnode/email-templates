import { Img, Section, SectionProps, Text } from '@react-email/components'
import * as React from 'react'

export function EmailHeader(props: SectionProps) {
  return (
    <Section {...props}>
      <Img src="https://assets.thegraph.com/email-header.png" />
      <span style={{ fontSize: '16px', fontWeight: 600 }}>The Graph Account</span>
      <br />
      <span style={{ fontSize: '16px' }}>{`{{ walletAddress }}`}</span>
    </Section>
  )
}
