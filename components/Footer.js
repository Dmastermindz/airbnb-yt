import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 justify-items-left md:grid-cols-4 gap-y-10 gap-x-10 px-32 py-14 bg-gray-100 text-gray-600 md:justify-items-center">
        <div className="space-y-4 text-xs text-gray-800 border-b-[2px] border-gray-300 pb-10 rounded">
            <h5 className="font-bold">ABOUT</h5>
            <p>How AirBnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800 border-b-[2px] border-gray-300 pb-10 rounded">
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>See More</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800 border-b-[2px] border-gray-300 pb-10 rounded">
            <h5 className="font-bold">HOST</h5>
            <p>How AirBnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800 border-b-[2px] border-gray-300 pb-10 rounded">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Say Hi to Airbnb</p>
            <p>Easter Eggs</p>
            <p>See More</p>
        </div>
    </div>
  )
}

export default Footer