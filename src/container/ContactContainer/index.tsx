import { useForm, SubmitHandler } from 'react-hook-form'
import { Section } from 'src/components/ui/Section'
import { Card } from 'src/components/ui/Card'

import * as S from './styled'

type Inputs = {
  fullName: string
  email: string
  phone: number
  subject: string
  message: string
}

export const ContactContainer = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  console.log(watch('fullName'))
  console.log(watch('email'))
  console.log(watch('phone'))
  console.log(watch('subject'))

  return (
    <Section id={id}>
      <Card>
        <S.PageContainer>
          <div>
            <h1>Vamos Conversar:</h1>
            <h2>Fale mais sobre seus projetos</h2>
          </div>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('fullName', { required: true })} />
            {errors.fullName && <span>This field is required</span>}

            <input
              type="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              {...register('email', {
                required: 'Endereço de email é necessário',
              })}
            />
            {errors.email && <span>This field is required</span>}

            <input
              type="tel"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              {...register('phone', { required: true })}
            />
            {errors.phone && <span>This field is required</span>}

            <input type="text" {...register('subject', { required: true })} />
            {errors.subject && <span>This field is required</span>}

            <textarea {...register('message', { required: true })} />
            <input type="submit" />
          </S.Form>
        </S.PageContainer>
      </Card>
    </Section>
  )
}
