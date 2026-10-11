import React from 'react'

const NavigateButton = (prop) => {
    return (
        <>
            <button className="bg-red-100 text-gray-950 w-35 sm:w-50 py-3 rounded-3xl flex justify-center items-center hover:translate-y-[-5px]  duration-100">
                {prop.text}
                <i className="fa-solid fa-arrow-right-long px-2"></i>
            </button>
        </>
    )
}

export default NavigateButton
