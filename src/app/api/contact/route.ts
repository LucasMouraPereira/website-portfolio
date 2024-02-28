import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from 'src/components/EmailTemplate'

const resend = new Resend(process.env.NEXT_EMAIL_API_KEY)

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, subject, message } = await request.json()
    const emailContent = EmailTemplate({
      fullName: `${fullName}`,
      email: `${email}`,
      phone: `${phone}`,
      subject: `${subject}`,
      message: `${message}`,
    })
    const data = await resend.emails.send({
      from: `${process.env.NEXT_EMAIL_FROM_NAME} < ${process.env.NEXT_EMAIL_FROM_EMAIL} >`,
      to: [`${process.env.NEXT_EMAIL_TO_EMAIL}`],
      subject: `${subject}`,
      text: `${message}`,
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
