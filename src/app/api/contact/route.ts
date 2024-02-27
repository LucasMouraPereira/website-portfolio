import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from 'src/components/EmailTemplate'

const resend = new Resend(process.env.NEXT_EMAIL_API_KEY)

export async function POST() {
  try {
    const emailContent = EmailTemplate({ firstName: 'Lucas Moura' })
    const data = await resend.emails.send({
      from: `${process.env.NEXT_EMAIL_FROM_NAME} < ${process.env.NEXT_EMAIL_FROM_EMAIL} >`,
      to: [`${process.env.NEXT_EMAIL_FROM_EMAIL}`],
      subject: 'Hello world',
      text: 'Your text content here',
      react: emailContent,
    })

    return NextResponse.json(data)
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message || e.toString() })
    } else {
      return NextResponse.json({ error: 'Unknown error occurred' })
    }
  }
}
