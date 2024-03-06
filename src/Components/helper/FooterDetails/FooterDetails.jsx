import css from './footerDetails.module.css'


const FooterDetails = (props) => {
  return (
    <div className={css.png_line}>
      <>{props.icon}</>
      <span>{props.desc}</span>
    </div>
  )
}
export default FooterDetails
