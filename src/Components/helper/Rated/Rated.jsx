import css from "./rated.module.css"

const Rated = (props) => {
  return (
    <div className={css.parent}>
      <span>{props.value}</span>
      <span>{props.details}</span>
    </div>
  )
}
export default Rated