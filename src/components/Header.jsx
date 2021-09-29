import './Header.css'
import Dots from '../assets/dots.png'
import M from '../assets/M2.jpg'
import Logo from '../assets/logo2.png'

const Header = props => {
  return (
    <div className='header'>
      <div className='header-user-container'>
        <img className='header-avatar' src={M} alt='avatar' />
        <p className='header-username'>
          {props.left ? props.name.name2 : props.name.name1}
        </p>
      </div>
      <div className='header-logo-container'>
        <img className='header-logo' src={Logo} alt='logo' />
      </div>
    </div>
  )
}

export default Header
