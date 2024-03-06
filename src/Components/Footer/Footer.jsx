import css from './footer.module.css'
import Logo from '../../assets/logo.png'
import FooterDetails from '../helper/FooterDetails/FooterDetails'
import {
  InboxIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightOnRectangleIcon,
  UsersIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'
import Title from '../helper/Title/Title'

const Footer = () => {
  return (
    <div className={css.footer_wrapper}>
      <hr />
      <div className={css.footer}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.footer_details}>
            <Title title="Contact Us" />
            <FooterDetails
              icon={<MapPinIcon />}
              desc="111 north avenue Orlando, FL 32801"
            />
            <FooterDetails icon={<PhoneIcon />} desc="352-306-4415" />
            <FooterDetails icon={<InboxIcon />} desc="support@amazon.com" />
          </div>
        </div>
        <div className={css.block}>
          <div className={css.footer_details}>
            <Title title="Account" />
            <FooterDetails
              icon={<ArrowRightOnRectangleIcon />}
              desc="Sign In"
            />
          </div>
        </div>
        <div className={css.block}>
          <div className={css.footer_details}>
            <Title title="Company" />
            <FooterDetails icon={<UsersIcon />} desc="About us" />
          </div>
        </div>
        <div className={css.block}>
          <div className={css.footer_details}>
            <Title title="Resources" />
            <FooterDetails icon={<LinkIcon />} desc="Safety Privacy & Terms" />
          </div>
        </div>
      </div>
      <div className={css.copy_right}>
        <span>Copyright ©2022 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  )
}
export default Footer
