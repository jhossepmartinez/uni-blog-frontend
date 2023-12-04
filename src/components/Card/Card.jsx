import React from 'react'

export default function Card() {
    return (
        <div>
            <a href="#" className="flex h-36 flex-row items-center bg-white border-t border-b">
                <div className="flex flex-col max-h-[150px] pl-4 justify-between pr-[20px]">
                    <h5 className="mb-2 font-bold text-gray-900">Mi experiencia realizando 3 ayudantias en la USM</h5>
                    <p className="hidden mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <div className="">
                    <img className="pr-4 max-w-[150px] max-h-[150px]" src="https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8fDA%3D" alt="Dog" />
                </div>
            </a>
        </div>
    )
}
