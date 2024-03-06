import Rated from '../helper/Rated/Rated'
import Testimonial from '../helper/Testimonial/Testimonial'
import Hero from '../../assets/testimonialHero.png'
import css from './testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TestimonialsData } from '../../data/testimonials'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Seedily Say Has Suitable Disposal And Boy. Exercise Joy Man Children
            Rejoiced.
          </span>
        </div>
        <img src={Hero} alt="testimonial" />
        <Rated value="100k" details="Happy Customers" />
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          breakpoints={{
            981: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className={css.t_carousal}>
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <Testimonial
                image={testimonial.image}
                comment={testimonial.comment}
                name={testimonial.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
export default Testimonials
