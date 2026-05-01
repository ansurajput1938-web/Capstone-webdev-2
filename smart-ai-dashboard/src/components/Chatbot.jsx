import { useState } from 'react'

function Chatbot() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const generateAnswer = () => {
    if (question.toLowerCase().includes('hello')) {
      setAnswer('Hello! How can I help you today?')
    } else if (question.toLowerCase().includes('study')) {
      setAnswer('Study 2 hours daily and revise consistently.')
    } else {
      setAnswer('AI Assistant is thinking...')
    }
  }

  return (
    <div className="card chatbot">
      <h2>AI Assistant</h2>

      <input
        type="text"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={generateAnswer}>Ask AI</button>

      <p>{answer}</p>
    </div>
  )
}

export default Chatbot