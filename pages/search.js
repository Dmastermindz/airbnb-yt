import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

function Search() {
    const router = useRouter()
    const { location, startDate, endDate, noOfGuests} = router.query //ES6 Destructuring

    //Date Processing
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(startDate), "dd MMMM yy")
    const range = `${formattedStartDate} to ${formattedEndDate}`

    console.log(location)

  return (
    <div className="">
        <Header placeholder="{`${location}`}" />
        
        <main className="flex end border-2 border-blue-500">
            <section className="border-2 border-green-500">
                <p className="text-xs ml-4 mt-[25px] font-semibold text-slate-500">300+ Stays - {range} - for {noOfGuests} guests</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6 ml-4">Stays in {location}</h1>

                <div className="hidden sm:flex gap-6 flex-grow ml-3 lg:ml-6 min-width-[300px] border-2 border-red-500">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of Place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms & Beds</p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search