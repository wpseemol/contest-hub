import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { GrNext } from 'react-icons/gr';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ContestCard from '../../components/ContestCard/ContestCard';
import ContestCardHeader from '../../components/ContestCardHeader/ContestCardHeader';
import ContestCardContainer from '../../components/ContestCardContainer/ContestCardContainer';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ContestLoading from '../../components/ContestLoading/ContestLoading';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';

const Contest = () => {
    const [contestCategory, setContestCategory] = useState('gaming');
    const [count, setCount] = useState({});
    const [clickButton, setClickButton] = useState(0);

    const publicBaseUrl = useAxiosPublic();

    useEffect(() => {
        publicBaseUrl.get(`/contests/${contestCategory}`).then((res) => {
            setCount(res.data);
        });
    }, [contestCategory, publicBaseUrl]);

    const { contestCount } = count;

    const {
        data = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: [contestCategory],

        queryFn: async () => {
            const contestCategoryData = await publicBaseUrl.get(
                `/contests-category?category=${contestCategory}&pageNumber=${clickButton}`
            );

            return contestCategoryData.data;
        },
    });

    useEffect(() => {
        refetch();
    }, [refetch, contestCategory, clickButton]);

    const itemParPage = 10;

    const pageNumber = Math.ceil(contestCount ? contestCount : 0 / itemParPage);

    const pages = [...Array(pageNumber).keys()];

    // const pages = [0, 1, 2, 3, 4];

    return (
        <>
            <Helmet>
                <title>ontestHub | Contest</title>
            </Helmet>
            <div className="bg-[#f2f2f2] py-10 min-h-[38rem]">
                <Container>
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-3 text-xl font-semibold py-6">
                        <Link to="/" className="text-primaryColor">
                            ContestHub
                        </Link>
                        <GrNext />
                        <Link to="/contest">Contest</Link>
                    </div>
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab
                                    onClick={() =>
                                        setContestCategory('gaming')
                                    }>
                                    Gaming
                                </Tab>
                                <Tab
                                    onClick={() =>
                                        setContestCategory('article-writing')
                                    }>
                                    Article Writing
                                </Tab>
                                <Tab
                                    onClick={() =>
                                        setContestCategory('medical-contest')
                                    }>
                                    Medical Contest
                                </Tab>
                                <Tab
                                    onClick={() =>
                                        setContestCategory('business-contest')
                                    }>
                                    Business Contest
                                </Tab>
                            </TabList>

                            <TabPanel>
                                {isLoading ? (
                                    <ContestLoading />
                                ) : data?.length <= 0 ? (
                                    <>
                                        <div className="text-2xl font-semibold text-center">
                                            <p>No data found</p>
                                        </div>
                                    </>
                                ) : (
                                    <ContestCardContainer>
                                        <ContestCardHeader />
                                        {data?.map((contest) => {
                                            return (
                                                <div key={contest?._id}>
                                                    <ContestCard
                                                        contest={
                                                            contest
                                                                ? contest
                                                                : {}
                                                        }
                                                    />
                                                </div>
                                            );
                                        })}
                                    </ContestCardContainer>
                                )}

                                {/* pagination style */}

                                <div className="w-fit mx-auto flex items-center justify-center gap-3 my-6">
                                    <button
                                        disabled={!clickButton}
                                        onClick={() => {
                                            clickButton &&
                                                setClickButton(clickButton - 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Previous
                                    </button>
                                    {pages?.map((element, inx) => {
                                        return (
                                            <button
                                                key={inx}
                                                onClick={() => {
                                                    setClickButton(element);
                                                }}
                                                className={`${
                                                    clickButton === element
                                                        ? 'bg-primaryColor/50 text-white'
                                                        : 'bg-white text-neutral-700'
                                                } p-2 border font-bold rounded-md
                                                hover:bg-primaryColor/50 hover:text-white duration-300`}>
                                                {element + 1}
                                            </button>
                                        );
                                    })}
                                    <button
                                        disabled={
                                            !(clickButton < pages?.length - 1)
                                        }
                                        onClick={() => {
                                            clickButton < pages?.length - 1 &&
                                                setClickButton(clickButton + 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Next
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {isLoading ? (
                                    <ContestLoading />
                                ) : data?.length <= 0 ? (
                                    <>
                                        <div className="text-2xl font-semibold text-center">
                                            <p>No data found</p>
                                        </div>
                                    </>
                                ) : (
                                    <ContestCardContainer>
                                        <ContestCardHeader />
                                        {data?.map((contest) => {
                                            return (
                                                <div key={contest?._id}>
                                                    <ContestCard
                                                        contest={
                                                            contest
                                                                ? contest
                                                                : {}
                                                        }
                                                    />
                                                </div>
                                            );
                                        })}
                                    </ContestCardContainer>
                                )}
                                {/* pagination style */}

                                <div className="w-fit mx-auto flex items-center justify-center gap-3 my-6">
                                    <button
                                        disabled={!clickButton}
                                        onClick={() => {
                                            clickButton &&
                                                setClickButton(clickButton - 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Previous
                                    </button>
                                    {pages?.map((element, inx) => {
                                        return (
                                            <button
                                                key={inx}
                                                onClick={() => {
                                                    setClickButton(element);
                                                }}
                                                className={`${
                                                    clickButton === element
                                                        ? 'bg-primaryColor/50 text-white'
                                                        : 'bg-white text-neutral-700'
                                                } p-2 border font-bold rounded-md
                                                hover:bg-primaryColor/50 hover:text-white duration-300`}>
                                                {element + 1}
                                            </button>
                                        );
                                    })}
                                    <button
                                        disabled={
                                            !(clickButton < pages?.length - 1)
                                        }
                                        onClick={() => {
                                            clickButton < pages?.length - 1 &&
                                                setClickButton(clickButton + 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Next
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {isLoading ? (
                                    <ContestLoading />
                                ) : data?.length <= 0 ? (
                                    <>
                                        <div className="text-2xl font-semibold text-center">
                                            <p>No data found</p>
                                        </div>
                                    </>
                                ) : (
                                    <ContestCardContainer>
                                        <ContestCardHeader />
                                        {data?.map((contest) => {
                                            return (
                                                <div key={contest?._id}>
                                                    <ContestCard
                                                        contest={
                                                            contest
                                                                ? contest
                                                                : {}
                                                        }
                                                    />
                                                </div>
                                            );
                                        })}
                                    </ContestCardContainer>
                                )}
                                {/* pagination style */}

                                <div className="w-fit mx-auto flex items-center justify-center gap-3 my-6">
                                    <button
                                        disabled={!clickButton}
                                        onClick={() => {
                                            clickButton &&
                                                setClickButton(clickButton - 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Previous
                                    </button>
                                    {pages?.map((element, inx) => {
                                        return (
                                            <button
                                                key={inx}
                                                onClick={() => {
                                                    setClickButton(element);
                                                }}
                                                className={`${
                                                    clickButton === element
                                                        ? 'bg-primaryColor/50 text-white'
                                                        : 'bg-white text-neutral-700'
                                                } p-2 border font-bold rounded-md
                                                hover:bg-primaryColor/50 hover:text-white duration-300`}>
                                                {element + 1}
                                            </button>
                                        );
                                    })}
                                    <button
                                        disabled={
                                            !(clickButton < pages?.length - 1)
                                        }
                                        onClick={() => {
                                            clickButton < pages?.length - 1 &&
                                                setClickButton(clickButton + 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Next
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {isLoading ? (
                                    <ContestLoading />
                                ) : data?.length <= 0 ? (
                                    <>
                                        <div className="text-2xl font-semibold text-center">
                                            <p>No data found</p>
                                        </div>
                                    </>
                                ) : (
                                    <ContestCardContainer>
                                        <ContestCardHeader />
                                        {data?.map((contest) => {
                                            return (
                                                <div key={contest?._id}>
                                                    <ContestCard
                                                        contest={
                                                            contest
                                                                ? contest
                                                                : {}
                                                        }
                                                    />
                                                </div>
                                            );
                                        })}
                                    </ContestCardContainer>
                                )}
                                {/* pagination style */}

                                <div className="w-fit mx-auto flex items-center justify-center gap-3 my-6">
                                    <button
                                        disabled={!clickButton}
                                        onClick={() => {
                                            clickButton &&
                                                setClickButton(clickButton - 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Previous
                                    </button>
                                    {pages?.map((element, inx) => {
                                        return (
                                            <button
                                                key={inx}
                                                onClick={() => {
                                                    setClickButton(element);
                                                }}
                                                className={`${
                                                    clickButton === element
                                                        ? 'bg-primaryColor/50 text-white'
                                                        : 'bg-white text-neutral-700'
                                                } p-2 border font-bold rounded-md
                                                hover:bg-primaryColor/50 hover:text-white duration-300`}>
                                                {element + 1}
                                            </button>
                                        );
                                    })}
                                    <button
                                        disabled={
                                            !(clickButton < pages?.length - 1)
                                        }
                                        onClick={() => {
                                            clickButton < pages?.length - 1 &&
                                                setClickButton(clickButton + 1);
                                        }}
                                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-slate-400/50">
                                        Next
                                    </button>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Contest;
