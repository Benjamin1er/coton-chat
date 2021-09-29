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

  const clearStorage = () => {
    localStorage.removeItem('conversation')
    props.setChat('')
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
      <div className='header'>
        <p>{props.name.name2}</p>
      </div>
      <div className='chat'>
        {!props.chat && <p className='text'>Send a message to your friend</p>}
        {props.chat &&
          props.chat.map(obj =>
            Object.entries(obj).map((userText, index) => (
              <ul
                className='textBlock'
                ref={messagesEndRef}
                style={{
                  // textAlign:
                  //   userText[0] !== props.name.name1 ? 'right' : 'left',
                  borderRadius:
                    userText[0] !== props.name.name1
                      ? '40px 40px 0 40px'
                      : '30px 30px 30px 0',
                  marginLeft: userText[0] == props.name.name2 ? '120px' : null
                }}
                key={index}
              >
                <li className='user'>{userText[0]}</li>
                <li className='text'>{userText[1]}</li>
              </ul>
            ))
          )}
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input
            className='input'
            placeholder={[`Say Hello to ${props.name.name2} `]}
            type='text'
            name='message'
            value={message}
            onChange={handleChange}
          ></input>
        </form>
        <div className='buttons'>
          <button className='button'>Change nickname</button>
          <button className='button' onClick={clearStorage}>
            Clear chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default User1
