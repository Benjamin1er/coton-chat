import { useState } from 'react'

import './OpenMenu.css'

const OpenMenu = props => {
  //Function to change usernames
  const [newNick, setNewNick] = useState('')

  const handleChange = e => setNewNick(e.target.value)
  console.log(newNick)

  const modifyName1 = e => {
    e.preventDefault()
    props.setPreviousName(container => {
      return { ...container, name1: [...container.name1, props.name.name1] }
    })
    props.setName(container => {
      return { ...container, name1: newNick }
    })
    props.handleOpen()
    setNewNick('')
  }

  const modifyName2 = () => {
    props.setPreviousName(container => {
      return { ...container, name2: [...container.name2, props.name.name2] }
    })
    props.setName(container => {
      return { ...container, name2: newNick }
    })
    props.handleOpen()
  }

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
        <p
          style={{ margin: '0', cursor: 'default' }}
          className='open-menu-button'
        >
          Change Nick
        </p>
        <form onSubmit={props.left ? modifyName1 : modifyName2}>
          <input
            minLength='4'
            maxLength='16'
            type='text'
            className='open-menu-input'
            placeholder='New Nick'
            name='nick'
            onChange={handleChange}
            value={newNick}
          />
        </form>

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
