import { useState } from 'react';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';
import HomeContestCard from '../HomeContestCard/HomeContestCard';

const SearchComponent = () => {
    const [searchResultContainer, setSearchResultContainer] = useState(false);
    const [searchText, setSearchText] = useState(null);
    const [searchData, setSearchData] = useState([]);

    const publicBaseUrl = useAxiosPublic();

    const handleSearch = async (event) => {
        setSearchResultContainer(true);
        event.preventDefault();
        const searchText = event.target.searchBox.value;

        setSearchText(searchText);

        const contestCategoryData = await publicBaseUrl.get(
            `/search-contests?search=${searchText}`
        );

        setSearchData(contestCategoryData.data);
    };

    return (
        <>
            <div className="">
                <form
                    onSubmit={handleSearch}
                    className="flex items-center mx-auto lg:mx-0 border-primaryColor rounded-full border w-fit overflow-hidden bg-white relative z-[3]">
                    <input
                        placeholder="Search Contest"
                        type="text"
                        id="searchBoxId"
                        name="searchBox"
                        className="ml-2 h-[2.8rem] sm:w-[18rem] w-full outline-none font-medium pl-3 "
                    />
                    <button
                        className="bg-primaryColor text-white py-2
                             px-6 group overflow-hidden hover:bg-primaryColor/80 duration-200">
                        <span className="text-3xl ">
                            <IoSearch className="" />
                        </span>
                    </button>
                </form>
            </div>

            {/* search result show component */}
            <div
                className={`${
                    searchResultContainer
                        ? 'w-screen lg:min-h-[55rem] min-h-[45rem] opacity-100 scale-100'
                        : 'w-0 h-0 opacity-0 scale-0'
                } fixed top-20 left-0   border-red-400 bg-gradient-to-b from-[#c8fcff] to-white z-20 duration-300`}>
                <div className="relative">
                    <div className="container mx-auto px-2 sm:px-0 ">
                        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold py-8 text-left">
                            Search results for:{' '}
                            <span className="text-primaryColor">
                                {searchText}
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-6">
                            {searchData.map((searchContest) => {
                                return (
                                    <div
                                        key={searchContest?._id}
                                        className="w-[19.5rem]">
                                        <HomeContestCard
                                            contestCardData={searchContest}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <button
                        onClick={() => setSearchResultContainer(false)}
                        className="absolute top-2 right-6 bg-red-500 text-white p-2 text-3xl">
                        <IoCloseSharp
                            className={`${
                                searchResultContainer
                                    ? 'rotate-180 duration-1000'
                                    : ''
                            }`}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchComponent;
