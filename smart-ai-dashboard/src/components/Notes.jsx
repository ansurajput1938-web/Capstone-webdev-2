import { useState } from 'react'

function Notes() {
  const [note, setNote] = useState('')

  return (
    <div className="card">
      <h2>Quick Notes</h2>

      <textarea
        rows="6"
        placeholder="Write notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
    </div>
  )
}

export default Notes