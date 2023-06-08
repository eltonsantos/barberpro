import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import '../styles/global.css';

const colors = {
  barber: {
    900: "#12131b",
    400: "#1b1c29",
    200: "#c6c6c6"
  },
  button: {
    cta: "#fba931",
    default: "#fff",
    gray: "#dfdfdf",
    danger: "#ff4040"

  },
  orange: {
    900: "#fba931"
  }
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
