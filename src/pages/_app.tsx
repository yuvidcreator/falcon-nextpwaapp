import { useState, useEffect } from 'react'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools'
import Layout from '../components/common/layout'


const queryClient = new QueryClient()



export default function App({ Component, pageProps }: AppProps) {

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer 
            theme="dark" 
            position="bottom-center"
          />
        </Hydrate>
      </QueryClientProvider>
    )
  }
}
