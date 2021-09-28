import { useState } from 'react'
import User1 from './User1'
import User2 from './User2'

import './Conversation.css'

const Conversation = () => {
  const [chat1, setChat1] = useState('')

  return (
    <div className='conversation'>
      <User1 setChat1={setChat1} chat1={chat1} />
      <User2 setChat1={setChat1} chat1={chat1} />
    </div>
  )
}

export default Conversation
