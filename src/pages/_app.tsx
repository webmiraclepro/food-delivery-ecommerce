import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import AppLayout from '../components/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}
