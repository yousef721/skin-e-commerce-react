import css from './product.module.css'
const Product = (props) => {
  return (
    <>
      <div className={css.left_s}>
        <div className={css.name}>
          <span>{props.name}</span>
          <span>{props.detail}</span>
        </div>
        <span>{props.price}$</span>
        <div>Shop Now</div>
      </div>
      <img src={props.img} alt="product" className={css.img_p} />
    </>
  )
}
export default Product
