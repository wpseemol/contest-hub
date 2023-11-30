import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { GrNext } from 'react-icons/gr';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ContestCard from '../../components/ContestCard/ContestCard';
import ContestCardHeader from '../../components/ContestCardHeader/ContestCardHeader';
import ContestCardContainer from '../../components/ContestCardContainer/ContestCardContainer';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ContestLoading from '../../components/ContestLoading/ContestLoading';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';

const Contest = () => {
    const [contestCategory, setContestCategory] = useState('gaming');

    const publicBaseUrl = useAxiosPublic();

    const {
        data = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: [contestCategory],

        queryFn: async () => {
            const contestCategoryData = await publicBaseUrl.get(
                `/contests/${contestCategory}`
            );
            return contestCategoryData.data;
        },
    });

    return (
        <>
            <Helmet>
                <title>ontestHub | Contest</title>
            </Helmet>
            <div className="bg-[#f2f2f2] py-10 min-h-[38rem]">
                <Container>
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-3 my- text-xl font-semibold">
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
                            </TabPanel>
                        </Tabs>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Contest;
