import { useState, useEffect } from "react";

function getPosts(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        console.log("effect getposts running!");
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
    
    return { data, error }
}

function createPost(url, newPost) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            });

            const result = await response.json();
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
}

export { getPosts, createPost }
