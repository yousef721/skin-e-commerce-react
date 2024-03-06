import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { SliderProducts } from '../../data/products'
import Product from '../helper/Product/Product'

// Import Swiper Style
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slider.css'

const Slider = () => {

  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          767: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        pagination={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}>
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <Product
              name={slide.name}
              detail={slide.detail}
              price={slide.price}
              img={slide.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Slider
