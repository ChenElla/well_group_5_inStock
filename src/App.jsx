import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { myNewTheme } from './utils/myNewTheme'
import Header from './components/Header/Header.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider theme = {myNewTheme}>
      <div className="App">
        <Header/>
        
      </div>
    </ChakraProvider>
  )
}

export default App
