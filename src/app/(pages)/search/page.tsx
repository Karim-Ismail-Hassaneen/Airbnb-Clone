import Navbar from '@/components/Header/Navbar'
import ListingCard from '@/components/ListingCard/ListingCard'
import Footer from '@/components/Main/Footer/Footer'
import { SearchParams, SearchResultData } from '@/types/dataTypes'
import { getSearchResult } from '@/utils/api'
import { format } from 'date-fns'
import React from 'react'

const SearchResult = async ({
    searchParams: { location, startDate, endDate, numOfGuests },
}: { searchParams: SearchParams }) => {
    let formatedStartDate;
    let formatedEndDate;
    if (startDate && endDate) {
        formatedStartDate = format(new Date(startDate), "dd MMM yy")
        formatedEndDate = format(new Date(endDate), "dd MMM yy")
    }
    const range = `${formatedStartDate} - ${formatedEndDate}`
    const filters = [
        'Cancellation Flexibility',
        'Type of Place',
        'Price',
        'Rooms and Beds',
        'More filters',];
    const searchResultData: SearchResultData = await getSearchResult()
    console.log(searchResultData)
    return (
        <>
            <Navbar placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
            <main>
                <section>
                    <div className='container flex'>
                        <div className='pt-14 pr-4'>
                            <p className='text-xs'>
                                300+ Stays - {range} - for {numOfGuests} guests
                            </p>
                            <h1 className='text-3xl font-semibold mt-2 mb-6 '>
                                Stays in {location}
                            </h1>
                            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                                {filters.map((filter) => (
                                    <button type='button' className='filter-btn' key={filter}>
                                        {filter}
                                    </button>
                                ))}
                            </div>
                            <div>
                                {searchResultData.map(item => (
                                    <div key={item.title}>
                                        <ListingCard
                                            img={item.img}
                                            title={item.title}
                                            location={item.location}
                                            description={item.description}
                                            price={item.price}
                                            total={item.total}
                                            star={item.star}
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SearchResult