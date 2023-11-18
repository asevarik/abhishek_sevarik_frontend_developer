import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { ThemeProvider } from '../context/ThemeProvider'
import MainBanner from '../components/MainBanner';
import BackgroundVideo from '../components/BackgroundVideo';
import BacgroundImagewithContent from '../components/BacgroundImagewithContent';
import { rocketsData, GET_CAPSULES, debounce } from '../constants';
import GridContainer from '../components/GridContainer';
import { fetchData } from '../Networking/ApiManager';
import Modal from '../components/Modal';

const ITEMS_PER_PAGE = 5;

const LandingPage = () => {
    const { themeChange } = useContext(ThemeProvider);
    const [searchTerm, setSearchTerm] = useState('');
    const [capsulesData, setCapsulesData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    // Function to handle changes in the search term
    const handleSearchChange = debounce((value) => {
        setSearchTerm(value);
    }, 300);

    // Apply search term to the grid data
    const filteredData = capsulesData.filter((item) => {
        const { status, original_launch, type } = item;
        const lowerSearchTerm = searchTerm.toLowerCase();

        return (
            status.toLowerCase().includes(lowerSearchTerm) ||
            original_launch.toLowerCase().includes(lowerSearchTerm) ||
            type.toLowerCase().includes(lowerSearchTerm)
        );
    });
    // Paginate the filtered data
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(capsulesData.length / ITEMS_PER_PAGE);





    useEffect(() => {
        fetchData(GET_CAPSULES).then(data => {
            setCapsulesData(data)
        }).catch(err => {
            console.log("error", err);
        })
    }, [])
    return (
        <div data-theme={themeChange} className='bg-accent-content'>
            <BackgroundVideo>
                <NavBar />
                <MainBanner />
            </BackgroundVideo>
            {rocketsData.map((rocket, index) => {
                return <BacgroundImagewithContent key={`${rocket.name}-${index}`} image={rocket.image} title={rocket.name} description={rocket.description} />
            })}
            <div className='bg-base-300'>
                <h1 className='pt-10 ml-10 text-6xl font-bold'>Search Capsules</h1>
                <input type="text" placeholder="Search here..." onChange={(e) => handleSearchChange(e.target.value)} className="ml-10 mt-10 input input-bordered w-full max-w-xs" />
                <GridContainer data={paginatedData} />
                {/* Pagination controls */}
                <div className="flex justify-center items-center mt-5">
                    <button
                        className="btn btn-primary mr-2"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="text-lg font-semibold">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="btn btn-primary ml-2"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage