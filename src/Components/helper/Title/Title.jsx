import css from "./title.module.css"

const Title = (props) => {
  return (
    <span className={css.title}>{props.title}</span>
  )
}
export default Title