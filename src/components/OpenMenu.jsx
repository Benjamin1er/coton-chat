import './OpenMenu.css'

const OpenMenu = props => {
  //Function to clear the chat for both users (delete both chat states and localstorage)
  const clearStorage = () => {
    localStorage.removeItem('conversation')
    props.setChat('')
    props.handleOpen()
  }
  return (
    <div className='open-menu'>
      <div className='open-menu-settings'>
        <p style={{ margin: '0' }}>Settings</p>
      </div>
      <div className='open-menu-container'>
        <button className='open-menu-button nick'>Change Name</button>
        <button className='open-menu-button' onClick={clearStorage}>
          Clear Chat
        </button>
        <button className='open-menu-button'>Fizzbuzz</button>
      </div>
    </div>
  )
}

export default OpenMenu
