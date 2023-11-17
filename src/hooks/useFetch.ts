import { useState, useEffect } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            return jsonData;
        }
        setLoading(true);
        setData(null);
        setError(null);
        fetchData()
            .then(res => {
                setData(res)
                setLoading(false);
            })
            .catch(err => {
                setLoading(false)
                setError('An error occurred. Awkward..')
            })
            .finally(() => setLoading(false))

    }, [url])

    return { data, loading, error }
}

export default useFetch