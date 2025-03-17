import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { Button } from 'src/components/ui/Button'
import Link from 'next/link'

import * as S from './styled'
export interface Projects {
  list: Array<{
    name: string
    shortDescription: string
    description: string
    tags: string[]
    link: string
    github: string
  }>
}
export const CustomSwiper = ({ list }: Projects) => {
  return (
    <S.WrapperSwiper>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {list.map((item) => (
          <SwiperSlide key={item.name}>
            <S.WrapperText>
              <S.Presentation>
                <h2>{item.name}</h2>
                <p>{item.shortDescription}</p>
              </S.Presentation>
              <S.WrapperList>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </S.WrapperList>
            </S.WrapperText>
            <S.Slider>
              <Link href={item.link} target="_blank" />
              <iframe
                src={item.link}
                width="100%"
                height="200"
                scrolling="no"
              />
            </S.Slider>
            <S.WrapperButton>
              <Button
                label="Check out the code on GitHub"
                onClick={() => window.open(item.github, '_blank')}
              />
            </S.WrapperButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.WrapperSwiper>
  )
}
