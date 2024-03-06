import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import css from './hero.module.css'
import Rated from '../helper/Rated/Rated'
import { motion } from 'framer-motion'

const Hero = () => {
  const transition = { duration: 3, type: 'spring' }
  return (
    <div className={css.container}>
      {/* Left Side */}
      <div className={css.h_side}>
        <span className={css.text1}>Skin Protection Cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>
      {/* Middle Side Hero Img */}
      <div className={css.wrapper}>
        {/* Circle Blue */}
        <motion.div
          className={css.blueCircle}
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0' }}
          transition={transition}></motion.div>
        {/* Hero Image */}
        <motion.img
          initial={{ bottom: '-2rem' }}
          whileInView={{ bottom: '0' }}
          transition={transition}
          src={HeroImg}
          alt="hero"
          width={600}
        />
        {/* Cart Div Animate */}
        <motion.div
          className={css.cart2}
          initial={{ right: '2%' }}
          whileInView={{ right: '5%' }}
          transition={transition}>
          <RiShoppingBagFill />
          <div className={css.signUp}>
            <span>Best SignUp Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Right Side */}
      <div className={css.h_side}>
        <Rated value="1.5m" details="Monthly traffic" />
        <Rated value="100k" details="Happy Customers" />
      </div>
    </div>
  )
}
export default Hero
