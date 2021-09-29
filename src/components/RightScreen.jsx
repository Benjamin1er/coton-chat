import { useState } from 'react'

import Form from './Form'
import Chat from './Chat'

const RightScreen = props => {
  //State Declaration for user input
  const [message, setMessage] = useState('')

  //States declaration to determine wether form is for right user or left user
  const [isRight] = useState(true)

  //Add props to pass to childrens
  props = { ...props, message: message, setMessage: setMessage, right: isRight }

  return (
    <div className='screen'>
      <div className='header'>
        <p>{props.name.name1}</p>
      </div>
      <Chat {...props} />

      <Form {...props} />
    </div>
  )
}

export default RightScreen
