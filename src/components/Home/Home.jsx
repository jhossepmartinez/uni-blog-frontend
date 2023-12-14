import React from 'react'
import Card from '../Card/Card'
import NavigationFilter from '../NavigationFilter/NavigationFilter'

import { getPosts } from '../../requests/Posts';

export default function Home() {
    const { data, error } = getPosts("http://localhost:3000/api/posts");
    return (
        <div>
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
    )
}
