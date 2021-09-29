import './Form.css'

const Form = props => {
  //Functions to put users input into states
  const handleSubmit = e => {
    e.preventDefault()
    props.setChat(container => [
      ...container,
      { [`${props.left ? props.name.name1 : props.name.name2}`]: props.message }
    ])
    props.setMessage('')
  }
  const handleChange = e => {
    props.setMessage(e.target.value)
  }

  //Function to clear the chat for both users (delete both chat states and localstorage)
  const clearStorage = () => {
    localStorage.removeItem('conversation')
    props.setChat('')
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          placeholder={[
            `Say Hello to ${props.left ? props.name.name1 : props.name.name2} `
          ]}
          type='text'
          name='message'
          value={props.message}
          onChange={handleChange}
        ></input>
      </form>
      <div className='buttons'>
        <button className='button'>Change nickname</button>
        <button className='button' onClick={clearStorage}>
          Clear chat
        </button>
      </div>
    </div>
  )
}

export default Form
