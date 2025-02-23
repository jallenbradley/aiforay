import React, { useState } from 'react';

function TextEditor() {
  const [text, setText] = useState(''); // State to hold the text input

  const handleChange = (event) => {
    setText(event.target.value); // Update state when user types
  };

  return (
    <div className="text-editor">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
      />
    </div>
  );
}

export default TextEditor;