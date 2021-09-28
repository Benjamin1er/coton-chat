import { useState } from 'react'
import User1 from './User1'
import User2 from './User2'

import './Conversation.css'

const Conversation = () => {
  const [chat, setChat] = useState('')
  const [name] = useState({ name1: 'Benjamin', name2: 'Alphonse' })

  return (
    <div className='conversation'>
      <User1 setChat={setChat} chat={chat} name={name} />
      <User2 setChat={setChat} chat={chat} name={name} />
    </div>
  )
}

export default Conversation
