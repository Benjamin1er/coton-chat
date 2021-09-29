import { useEffect, useRef } from 'react'

import './Chat.css'

const Chat = props => {
  //Function to keep the scrollbar at downest possible point
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [props.message])

  return (
    <div className='chat'>
      {!props.chat && (
        <p className='chat-text'>Send a message to your friend</p>
      )}
      {props.chat &&
        props.chat.map(obj =>
          Object.entries(obj).map((userText, index) => (
            <ul
              className='chat-text-block'
              ref={messagesEndRef}
              style={{
                borderRadius:
                  (props.left && userText[0] == props.name.name1) ||
                  (props.right && userText[0] == props.name.name2)
                    ? '40px 40px 40px 0'
                    : '40px 40px 0 40px',
                marginLeft:
                  (props.left && userText[0] == props.name.name2) ||
                  (props.right && userText[0] == props.name.name1)
                    ? '120px'
                    : null
              }}
              key={index}
            >
              <li className='chat-username'>{userText[0]}</li>
              <li className='chat-text'>{userText[1]}</li>
            </ul>
          ))
        )}
    </div>
  )
}

export default Chat
