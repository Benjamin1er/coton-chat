import { useState } from 'react'

import Header from './Header'
import Chat from './Chat'
import Form from './Form'

const LeftScreen = props => {
  //State Declaration for user input
  const [message, setMessage] = useState('')

  //States declaration to determine wether form is for left user or right user
  const [isLeft] = useState(true)

  //Add props to pass to childrens
  props = {
    ...props,
    message: message,
    setMessage: setMessage,
    left: isLeft
  }

  return (
    <div className='screen'>
      <Header {...props} />
      <Chat {...props} />
      <Form {...props} />
    </div>
  )
}

export default LeftScreen
