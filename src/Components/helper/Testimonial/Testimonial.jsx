import css from './testimonial.module.css'

const Testimonial = (props) => {
  return (
    <div className={css.testimonial}>
      <img src={props.image} alt="" />
      <span>{props.comment}</span>
      <hr />
      <span>{props.name}</span>
    </div>
  )
}
export default Testimonial
