import React from 'react'
import Card from '../Card/Card'
import NavigationFilter from '../NavigationFilter/NavigationFilter'

export default function Home() {
    return (
        <div>
            <div className="pl-4 pb-2 pt-10">
                <NavigationFilter />
            </div>
            <div>
                <Card />
            </div>

        </div>
    )
}
