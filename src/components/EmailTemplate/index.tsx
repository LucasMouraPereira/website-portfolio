import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface EmailTemplateProps {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
}

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
}

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
}

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
}

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Email de proposta de trabalho</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>O assunto desse email é {subject}:</Text>

        <Section style={section}>
          <Text style={text}>
            <strong>Lucas Moura Pereira</strong>!
          </Text>
          <Text style={text}>{message}</Text>
          <Hr />
          <Text style={text}>
            <ul>
              <li>
                <strong>Nome do contratante: </strong>
                {fullName}
              </li>
              <li>
                <strong>email: </strong>
                {email}
              </li>
              <li>
                <strong>Telefone: </strong>
                {phone}
              </li>
            </ul>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)
