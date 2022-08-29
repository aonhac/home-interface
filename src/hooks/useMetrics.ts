import axios from "axios"
import { useEffect, useState } from "react"

const METRICS = 'https://soy-finance.deta.dev/soy_metrics'

export const useMetrics = () => {
    const [metricsData, setMetricsData] = useState({
        "runtime": 0.0,
        "block_number": 0,
        "result": {
            "Users": 0,
            "Trades": 0,
            "Volume": 0
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            axios.get(METRICS).then(response => {
                if(response.data) {
                    setMetricsData(response.data);
                }
            })
            .catch((err) => {
                console.error(err)
            })
        }
        fetchData()
    }, [])

    return metricsData
}
