import M from '../assets/M2.jpg'
import Logo from '../assets/logo2.png'
import Roro from '../assets/roro.jpg'

import './Header.css'

const Header = props => {
  return (
    <div className='header'>
      <div className='header-user-container'>
        {props.left && (
          <img className='header-avatar' src={Roro} alt='avatar' />
        )}
        {props.right && <img className='header-avatar' src={M} alt='avatar' />}

        <p className='header-username'>
          {props.left ? props.name.name2 : props.name.name1}
          <br />
          <span style={{ fontSize: '0.6em' }}>is </span>
          <span style={{ fontSize: '0.7em', color: 'green' }}>Online</span>
        </p>
      </div>
      <div className='header-logo-container'>
        <img className='header-logo' src={Logo} alt='logo' />
      </div>
    </div>
  )
}

export default Header
