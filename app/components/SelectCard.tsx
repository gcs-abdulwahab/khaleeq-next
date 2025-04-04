import React from 'react'
import Image from 'next/image'
const SelectCard = () => {
  return (
    <div
				id="containerbox"
				className="bg-red-300 w-80 h-80 content-center relative "
			>
				<Image
					src="/images/book.svg"
					alt="Book"
					className="mx-auto my-4"
					width={150}
					height={150}
				/>
				<div
					id="topbox"
					className="absolute bg-green-300 inline-block size-8 content-center text-center
                    top-0 right-0 text-2xl font-bold text-black
                "
                >
                    X
                    </div>
					
                <div id="bottombox" className="absolute bg-blue-300 bottom-0 left-0 size-8"></div>
                    
			</div>
  )
}

export default SelectCard