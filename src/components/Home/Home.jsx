import React from 'react'
import Card from '../Card/Card'
import NavigationFilter from '../NavigationFilter/NavigationFilter'

import { getPosts, createPost } from '../../requests/Posts';

export default function Home() {
    const api_url = "http://localhost:3000/api/posts"
    const { data } = getPosts(api_url);

    const handleCreatePost = async () => {
        const newPost = {
            title: "Nuevo titlo",
            summary: "Resumen epico",
            content: "Contenido aceptable"
        }
        try {
            const result = await createPost(api_url, newPost);
            console.log("Post created succesfully", result)
        } catch (error) {
            console.log("Error creating post:", error.message);
        }
    }

    return (
        <div className="flex justify-center">
            <div className="flex-col">

                <div className="pl-4 pb-2 pt-10">
                    <NavigationFilter />
                </div>
                <div>
                    {data.map((post) => (
                        <Card
                            key={post.id}
                            title={post.title}
                            summary={post.summary}
                            image={`https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1)) + 1}/150/100`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
