import "@/src/styles/index.scss";
import { useEffect, useState } from "react";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Loading = () => {
  return (
    <div className="__loader_screen">
      <img src="/favicon.svg" alt="" />
      <small>Carregando..</small>
    </div>
  )
}

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true)

  const checkSession = async () => {
    try {
      const response = await fetch('https://brasilatuarial.com.br/oldold/checkSession')
      const data = await response.json()
      
      if(data.redirect) {
        window.location.href = 'https://brasilatuarial.com.br/grupo'
      } else {
        setLoading(false)
      }
    } catch (err) {}
  }

  useEffect(() => {
    checkSession()
  }, [checkSession])
  return loading ? <Loading /> : <Component {...pageProps} />;
}
