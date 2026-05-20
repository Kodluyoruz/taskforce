import React from 'react'

import { Paragraph, Button } from 'sharkui'
import 'sharkui/dist/index.css'

const App = () => {
  return (
    <>
      <Paragraph text='Merhaba' />
      <Button text='Click' onClick={() => alert('asdasd')} />
    </>
  )
}

export default App
