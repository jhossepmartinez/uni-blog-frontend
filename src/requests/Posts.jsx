import { useState, useEffect } from "react";

function getPosts(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url]);
    
    return { data, error };
}

function createPost(url) {
    return "xd"
}

export { getPosts }
