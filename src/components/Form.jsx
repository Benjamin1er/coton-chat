import { useState } from 'react'

import OpenMenu from './OpenMenu'

import Dots from '../assets/dots.png'

import './Form.css'

const Form = props => {
  // Function and state declaration to determine wether the menu is open or not
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)
  const handleClose = () => setIsOpen(false)

  //Functions to put users input into states
  const handleSubmit = e => {
    e.preventDefault()
    props.setChat(container => [
      ...container,
      {
        [`${props.left ? props.name.name1 : props.name.name2}`]: props.message
      }
    ])
    props.setMessage('')
  }
  const handleChange = e => {
    props.setMessage(e.target.value)
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          placeholder={[
            `Say Hello to ${props.left ? props.name.name2 : props.name.name1} `
          ]}
          type='text'
          name='message'
          value={props.message}
          onChange={handleChange}
          onClick={handleClose}
        ></input>
      </form>
      <div className='dots-container'>
        <img
          style={{ transform: isOpen && 'rotate(90deg)' }}
          className='dots'
          onClick={handleOpen}
          src={Dots}
          alt='dots'
        />
      </div>
      {isOpen && <OpenMenu {...props} handleOpen={handleOpen} />}
    </div>
  )
}

export default Form
