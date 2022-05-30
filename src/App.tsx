import { useState } from 'react'

import { GridContainer, Heads, FunControls } from './components'

import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <FunControls />
      <GridContainer>
        <Heads count={count} />
      </GridContainer>
    </>
  )
}

export default App
