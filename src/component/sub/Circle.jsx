import React from 'react'
import "../Nav.css"
function Circle({number,name,width,heigth}) {
  return (
    <>
    <div className='w-full'>
      <div className='sm:hidden   '>
        <svg width={90} height={80} viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg" id="cardsvg">
          <g filter="url(#filter0_d_23_173)">
            <path d="M109 0V210C51.0025 210 4 162.997 4 105C4 47.0026 51.0025 0 109 0Z" fill="#EA4435"/>
            <path d="M214 105C214 162.997 166.997 210 109 210V0C166.997 0 214 47.0026 214 105Z" fill="#547DBF"/>
            <path d="M214 105C214 162.997 166.997 210 109 210C51.0025 210 4 162.997 4 105H214Z" fill="#33A852"/>
            <path d="M214 105C214 162.997 166.998 210 109 210V105H214Z" fill="#F9BC15"/>
          </g>
          <ellipse cx="108.525" cy="104.525" rx="89.0835" ry="89.0836" fill="white"/>
          <text x="50%" y="60%" text-anchor="middle" font-size="70" font-weight="bold" fill="#5f5f5f" >
            {number}
          </text>
          <defs>
            <filter id="filter0_d_23_173" x="0" y="0" width="218" height="218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_173"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_173" result="shape"/>
            </filter>
          </defs>
        </svg>
    
        <h1 className='  flex justify-center py-2  font-medium text-xl max-sm:text-sm ' id='cardtext'>{name}</h1>
      </div>
      <div className='max-sm:hidden'>
        <svg width={width} height={heigth} viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_23_173)">
            <path d="M109 0V210C51.0025 210 4 162.997 4 105C4 47.0026 51.0025 0 109 0Z" fill="#EA4435"/>
            <path d="M214 105C214 162.997 166.997 210 109 210V0C166.997 0 214 47.0026 214 105Z" fill="#547DBF"/>
            <path d="M214 105C214 162.997 166.997 210 109 210C51.0025 210 4 162.997 4 105H214Z" fill="#33A852"/>
            <path d="M214 105C214 162.997 166.998 210 109 210V105H214Z" fill="#F9BC15"/>
          </g>
          <ellipse cx="108.525" cy="104.525" rx="89.0835" ry="89.0836" fill="white"/>
          <text x="50%" y="60%" text-anchor="middle" font-size="70" font-weight="bold" fill="#5f5f5f" >
            {number}
          </text>
          <defs>
            <filter id="filter0_d_23_173" x="0" y="0" width="218" height="218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_173"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_173" result="shape"/>
            </filter>
          </defs>
        </svg>
    
        <h1 className='  flex justify-center py-2 text-[#353535] dark:text-white font-medium text-xl max-sm:text-sm '>{name}</h1>
      </div>
      </div>
    </>
  )
}

export default Circle