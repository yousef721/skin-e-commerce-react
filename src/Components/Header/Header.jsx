import css from './header.module.css'
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'
import { VscThreeBars } from 'react-icons/vsc'
import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu)
  }

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="logo" />
        <span>amazon</span>
      </div>
      <div className={css.bars} onClick={() => toggleMenu()}>
        <VscThreeBars />
      </div>
      <div
        className={css.right}
        style={{ display: showMenu ? 'inherit' : null }}>
        <ul
          className={css.menu}
          style={{ display: showMenu ? 'inherit' : null }}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type="text" className={css.search} placeholder="search" />
        <CgShoppingBag
          className={css.cart}
          style={{ display: showMenu ? 'inherit' : null }}
        />
      </div>
    </div>
  )
}
export default Header
