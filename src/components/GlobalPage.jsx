import { useState, useEffect } from 'react'
import RightScreen from './RightScreen'
import LeftScreen from './LeftScreen'

import './GlobalPage.css'

const GlobalPage = () => {
  // State declarations passed to props
  const [chat, setChat] = useState(() => {
    const saved = localStorage.getItem('conversation')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })
  const [name, setName] = useState({ name1: 'Benjamin', name2: 'Alphonse' })

  //Set props in a variable
  const props = {
    chat: chat,
    name: name,
    setChat: setChat,
    setName: setName
  }

  //useEffect to put users inputs into local storage
  useEffect(() => {
    localStorage.setItem('conversation', JSON.stringify(chat))
  }, [chat])

  return (
    <div className='conversation'>
      <LeftScreen {...props} />
      <RightScreen {...props} />
    </div>
  )
}

export default GlobalPage
