import { useState, useRef, useEffect } from 'react'

import './User1.css'

const User1 = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.setChat(container => [
      ...container,
      { [`${props.name.name1}`]: message }
    ])
    setMessage('')
  }
  const handleChange = e => {
    setMessage(e.target.value)
  }

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [message])

  return (
    <div className='user1'>
      <div className='chat'>
        {props.chat &&
          props.chat.map(obj =>
            Object.entries(obj).map((userText, index) => (
              <ul
                ref={messagesEndRef}
                style={{
                  textAlign: userText[0] !== props.name.name1 ? 'right' : 'left'
                }}
                key={index}
              >
                <li className='user'>{userText[0]}</li>
                <li className='text'>{userText[1]}</li>
              </ul>
            ))
          )}
      </div>

      <form className='form' onSubmit={handleSubmit}>
        <input
          className='input'
          placeholder={[`Say Hello to ${props.name.name2} `]}
          type='text'
          name='message'
          value={message}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  )
}

export default User1
