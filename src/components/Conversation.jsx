import { useState, useEffect } from 'react'
import User1 from './User1'
import User2 from './User2'

import './Conversation.css'

const Conversation = () => {
  const [chat, setChat] = useState(() => {
    const saved = localStorage.getItem('conversation')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })
  const [name, setName] = useState({ name1: 'Benjamin', name2: 'Alphonse' })

  useEffect(() => {
    localStorage.setItem('conversation', JSON.stringify(chat))
  }, [chat])

  return (
    <div className='conversation'>
      <User1 setChat={setChat} chat={chat} name={name} setName={setName} />
      <User2 setChat={setChat} chat={chat} name={name} setName={setName} />
    </div>
  )
}

export default Conversation
