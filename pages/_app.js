import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import UserContext from '../components/UserContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [authenticated, setAuthenticated] = useState(false)
  const state = {authenticated, setAuthenticated}

  return (
    <ChakraProvider>
      <UserContext.Provider value={state}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
