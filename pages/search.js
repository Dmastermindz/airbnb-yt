import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import data from '../data.json'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

function Search() {
    const router = useRouter()
    let { location, startDate, endDate, noOfGuests} = router.query //ES6 Destructuring
    startDate? startDate : Date.now()
    endDate? endDate : Date.now()

    //Date Processing
    const formattedStartDate = format(new Date(startDate), "MMMM dd yyyy")
    const formattedEndDate = format(new Date(endDate), "MMMM dd yyyy")
    const range = `${formattedStartDate} to ${formattedEndDate}`

    console.log(location)

    //Initialize Data from Data.json file (Database)
    const searchResults = data.resultsData
    console.log(searchResults)

  return (
    <div className="">
        <Header className="sticky top-0" placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />
        
        <div className="flex">
            <main className="flex flex-col ">
                <section className="w-full">
                    <p className="text-xs ml-4 mt-[25px] font-semibold text-slate-500">300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6 ml-4">Stays in {location}</h1>

                    <div className="hidden sm:flex gap-6 flex-grow ml-3 lg:ml-6 min-width-[300px]">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms & Beds</p>
                    </div>
                </section>

                <section className="flex">
                    <div className="flex-col">
                        {searchResults.map((item) => {
                            
                            return (
                                <InfoCard
                                key={item.img} 
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                startDate={item.startDate}
                                price={item.price}
                                total={item.total}
                                star={item.star}
                                />
                            )
                        })}

                    </div> 

                </section>

            </main>
            

            <section className="sticky top-0 hidden xl:inline-flex h-screen w-[70%] ml-6">
                    <Map />
            </section>
            
        </div>
        

        <Footer className=""/>
    </div>
  )
}

export default Search

