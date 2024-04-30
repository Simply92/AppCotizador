import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

const CryptoPriceDisplay = () => {
    const { result, loading } = useCryptoStore()
    const hasResult = useMemo(() => result && Object.keys(result).length > 0, [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen de la crypto moneda"
                        />
                        <div>
                            <p>El precio es de: {result.PRICE}</p>
                            <p>Precio mas alto del día: {result.HIGHDAY}</p>
                            <p>Precio mas bajo del día: {result.LOWDAY}</p>
                            <p>Variación últimas 24 horas: {result.CHANGEPCT24HOUR}</p>
                            <p>Ultima actualización: {result.LASTUPDATE}</p>
                        </div>

                    </div>
                </>
            )}

        </div>
    )
}

export default CryptoPriceDisplay
