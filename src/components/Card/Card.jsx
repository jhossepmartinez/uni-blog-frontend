import React from 'react'

export default function Card({ title, summary, image}) {
    return (
        <div>
            <a href="#" className="flex flex-row justify-between mx-4 gap-6 border-t-2 pt-10 pb-10">
                <div className="">
                    <h5 className="mb-2 font-bold text-gray-900">{title}</h5>
                    <p className="hidden mb-3 font-normal text-gray-700">{summary}</p>
                </div>
                <div className="flex">
                    <img className="max-h-[100px] max-w-[150px]" src={image} alt="Dog" />
                </div>
            </a>
        </div>
    )
}
