import './OpenMenu.css'

const OpenMenu = props => {
  //Function to change username

  const modifyName1 = () => {
    props.setPreviousName(container => {
      return { ...container, name1: [...container.name1, props.name.name1] }
    })
    props.setName(container => {
      return { ...container, name1: Math.random().toString() }
    })
    props.handleOpen()
  }
  const modifyName2 = () => {
    props.setPreviousName(container => {
      return { ...container, name2: [...container.name2, props.name.name2] }
    })
    props.setName(container => {
      return { ...container, name2: Math.random().toString() }
    })
    props.handleOpen()
  }
  console.log(props.previousName)
  //Function to clear the chat for both users (delete both chat states and localstorage)
  const clearStorage = () => {
    localStorage.removeItem('conversation')
    props.setChat('')
    props.handleOpen()
  }

  //Function to display numbers from 1 to 100 in chat
  const Fizzbuzz = e => {
    e.preventDefault()
    props.setChat(container => [
      ...container,
      {
        [`${props.left ? props.name.name1 : props.name.name2}`]: [
          ...Array(101).keys()
        ]
          .slice(1)
          .map(num =>
            num % 3 == 0 && num % 5 == 0
              ? '(FizzBuzz)'
              : num % 3 === 0
              ? '(Fizz)'
              : num % 5 === 0
              ? '(Buzz)'
              : num
          )
          .join(' ')
      }
    ])
    props.handleOpen()
  }

  return (
    <div className='open-menu'>
      <div className='open-menu-settings'>
        <p style={{ margin: '0' }}>Settings</p>
      </div>
      <div className='open-menu-container'>
        <button
          className='open-menu-button nick'
          onClick={props.left ? modifyName1 : modifyName2}
        >
          Change Name
        </button>
        <button className='open-menu-button' onClick={clearStorage}>
          Clear Chat
        </button>
        <button className='open-menu-button' onClick={Fizzbuzz}>
          Fizzbuzz
        </button>
      </div>
    </div>
  )
}

export default OpenMenu
