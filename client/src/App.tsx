import { useEffect } from "react"
import CriptoSearch from "./components/CriptoSearch"
import { useCryptoStore } from "./store"


function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  useEffect(() => {
    fetchCryptos()
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearch />
        </div>
      </div>
    </>
  )
}

export default App
