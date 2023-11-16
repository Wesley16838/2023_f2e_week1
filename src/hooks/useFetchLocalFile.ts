import { useState, useEffect } from "react";
import { promises as fs } from 'fs';

const useFetchLocalFile = (url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const file = await fs.readFile(process.cwd() + url, 'utf8');
            return JSON.parse(file);
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

export default useFetchLocalFile