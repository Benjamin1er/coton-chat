import { useState } from 'react'

import Header from './Header'
import Chat from './Chat'
import Form from './Form'

const RightScreen = props => {
  //State Declaration for user input
  const [message, setMessage] = useState('')

  //States declaration to determine wether form is for right user or left user
  const [isRight] = useState(true)

  //Add props to pass to childrens
  props = { ...props, message: message, setMessage: setMessage, right: isRight }

  return (
    <div className='screen'>
      <Header {...props} />
      <Chat {...props} />
      <Form {...props} />
    </div>
  )
}

export default RightScreen
