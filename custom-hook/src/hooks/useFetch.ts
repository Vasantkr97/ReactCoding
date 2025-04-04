import { useEffect, useState } from "react";


const useFetch = (Url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const ans = await fetch(Url);
            const json = await ans.json();
            setData(json)
            setLoading(false)
        }
        fetchData()
    }, [Url])

    return {data, loading}

};

export default useFetch;