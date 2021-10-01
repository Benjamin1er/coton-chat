import { useState, useEffect } from 'react'

import LeftScreen from './LeftScreen'
import RightScreen from './RightScreen'

import './GlobalPage.css'

const GlobalPage = () => {
  // State declarations passed to props
  const [chat, setChat] = useState(() => {
    const saved = localStorage.getItem('conversation')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem('username')
    const initialValue = JSON.parse(saved)
    return initialValue || { name1: 'Benjamin', name2: 'Alphonse' }
  })
  const [previousName, setPreviousName] = useState({ name1: [], name2: [] })
  //Set props in a variable
  const props = {
    chat: chat,
    name: name,
    previousName: previousName,
    setChat: setChat,
    setName: setName,
    setPreviousName: setPreviousName
  }

  //useEffect to put users inputs into local storage
  useEffect(() => {
    localStorage.setItem('conversation', JSON.stringify(chat))
  }, [chat])

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(name))
  }, [name])

  return (
    <div className='global-page'>
      <LeftScreen {...props} />
      <RightScreen {...props} />
    </div>
  )
}

export default GlobalPage
