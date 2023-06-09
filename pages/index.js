import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import data from "../data.json"
import SmallCard from "../components/SmallCard"
import MediumCard from '@/components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import Map from '../components/Map'


export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>CAM AirBnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header placeholder="Search Homes" />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some Data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.exploreData?.map((item) => (
            <SmallCard
            key={item.img} 
            img={item.img} 
            distance={item.distance} 
            location={item.location}
            />
          ))}
          </div>

          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {data.cardsData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title}/>
            ))}
            </div>

            
          </section>

        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj" 
          title="The Greatest Outdoors" 
          description="Wishlists curated by Cameron." 
          buttonText="Get Inspired" 
        />

      </main>

      <Footer />
      
    </div>
  )
}

/* export async function getStaticProps() {
  const session = await getSession(context)
  if (!session) {
    return 
  }
  return {
    props: {
      session,
    }
  }
}

*/