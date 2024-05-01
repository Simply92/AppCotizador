import { useEffect } from "react"
import CryptoSearch from "./components/CryptoSearch"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"


function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  useEffect(() => {
    fetchCryptos()
  }, [])
  return (
    <div className="todo">
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CryptoSearch />
          <CryptoPriceDisplay />
        </div>
      </div>
    </div>
  )
}

export default App
