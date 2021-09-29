import { useState } from 'react'

import Form from './Form'
import Chat from './Chat'

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
      <div className='header'>
        <p>{props.name.name2}</p>
      </div>
      <Chat {...props} />
      <Form {...props} />
    </div>
  )
}

export default LeftScreen
