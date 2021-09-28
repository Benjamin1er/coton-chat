import { useState } from 'react'

import './User1.css'

const User1 = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.setChat1(container => [...container, { text1: message }])
    setMessage('')
  }
  const handleChange = e => {
    setMessage(e.target.value)
  }

  return (
    <div className='user1'>
      {props.chat1 &&
        props.chat1.map(a =>
          Object.entries(a).map((b, i) => (
            <li className={b[0]} key={i}>
              {b[1]}
            </li>
          ))
        )}
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Message'
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
