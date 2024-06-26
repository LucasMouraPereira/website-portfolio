import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Section } from 'src/components/ui/Section'
import { Card } from 'src/components/ui/Card'
import { Input } from 'src/components/ui/Input'
import { Textarea } from 'src/components/ui/Textarea'
import { Button } from 'src/components/ui/Button'

import axios from 'axios'
import {
  formatPhone,
  notifyLoading,
  notifySuccess,
  notifyFail,
  dismissAll,
} from 'src/utils/lib/helpers'

import { endpoints } from 'src/utils/enums/endpoints'
import type { Inputs } from 'src/utils/types/form.types'

import * as S from './styled'

export const ContactContainer = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const body = {
    fullName: watch('fullName'),
    email: watch('email'),
    phone: watch('phone'),
    subject: watch('subject'),
    message: watch('message'),
  }

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatPhone(e.target.value)
  }

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      notifyLoading()
      await axios.post(endpoints.sendEmail, body)
      dismissAll()
      notifySuccess()
      setTimeout(() => {
        dismissAll()
      }, 5000)
      return { ok: true }
    } catch (e: unknown) {
      notifyFail()
      setTimeout(() => {
        dismissAll()
      }, 5000)
      if (e) {
        return JSON.stringify(e)
      } else {
        return 'Unknown error occurred'
      }
    }
  }

  return (
    <Section id={id}>
      <Card>
        <S.PageContainer>
          <S.Text>
            <h1>Let`s chat?</h1>
            <h2>Tell me more about your projects!</h2>
            <Image
              src="/images/techny-receiving-a-letter-or-email.gif"
              width={400}
              height={400}
              alt="techny-receiving-a-letter-or-email"
            />
          </S.Text>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h4>We`ll write a message:</h4>
            <Input
              type="text"
              register={register}
              name="fullName"
              required={true}
              error={errors.fullName}
              placeholder="Full Name"
            />
            <Input
              type="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              register={register}
              name="email"
              required="Endereço de email é necessário"
              error={errors.email}
              placeholder="Email"
            />
            <Input
              type="tel"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              register={register}
              name="phone"
              required={true}
              error={errors.phone}
              placeholder="Phone"
              onChange={handleChangePhone}
            />
            <Input
              type="text"
              register={register}
              name="subject"
              required={true}
              error={errors.subject}
              placeholder="Subject"
            />
            <Textarea
              register={register}
              name="message"
              required={true}
              placeholder="Message"
            />
            <Button type="submit">
              <span>Send</span>
            </Button>
          </S.Form>
        </S.PageContainer>
      </Card>
    </Section>
  )
}
