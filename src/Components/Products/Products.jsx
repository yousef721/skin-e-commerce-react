import css from './products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useRef, useState } from 'react'
import Product from '../helper/Product/Product'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData)
  const parent = useRef(useAutoAnimate())

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type))
  }

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter('skin care')}>Skin Care</li>
          <li onClick={() => filter('conditioner')}>Conditioners</li>
          <li onClick={() => filter('foundation')}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {menuProducts.map((product, i) => (
            <div className={css.product} key={i}>
              <Product
                name={product.name}
                detail={product.detail}
                price={product.price}
                img={product.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
