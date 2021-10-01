import './OpenMenu.css'

const OpenMenu = props => {
  //Function to clear the chat for both users (delete both chat states and localstorage)
  const clearStorage = () => {
    localStorage.removeItem('conversation')
    props.setChat('')
    props.handleOpen()
  }

  const modifyName = () => {
    props.setName(container => {
      container.name1 = 'Abdou'
    })
  }
  console.log(props.name)
  return (
    <div className='open-menu'>
      <div className='open-menu-settings'>
        <p style={{ margin: '0' }}>Settings</p>
      </div>
      <div className='open-menu-container'>
        <button className='open-menu-button nick' onClick={modifyName}>
          Change Name
        </button>
        <button className='open-menu-button' onClick={clearStorage}>
          Clear Chat
        </button>
        <button className='open-menu-button'>Fizzbuzz</button>
      </div>
    </div>
  )
}

export default OpenMenu
