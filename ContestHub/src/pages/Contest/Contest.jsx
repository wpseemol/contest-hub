import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { GrNext } from 'react-icons/gr';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ContestCard from '../../components/ContestCard/ContestCard';
import ContestCardHeader from '../../components/ContestCardHeader/ContestCardHeader';
import ContestCardContainer from '../../components/ContestCardContainer/ContestCardContainer';
import { Helmet } from 'react-helmet-async';

const Contest = () => {
    return (
        <>
            <Helmet>
                <title>ContestHub | Contest</title>
            </Helmet>
            <div className="bg-[#f2f2f2] py-10 min-h-[32.5rem]">
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
                                <Tab>Title 1</Tab>
                                <Tab>Title 2</Tab>
                            </TabList>

                            <TabPanel>
                                <ContestCardContainer>
                                    <ContestCardHeader />
                                    <ContestCard />
                                    <ContestCard />
                                    <ContestCard />
                                </ContestCardContainer>
                            </TabPanel>
                            <TabPanel>
                                <ContestCardContainer>
                                    <ContestCardHeader />
                                    <ContestCard />
                                    <ContestCard />
                                </ContestCardContainer>
                            </TabPanel>
                        </Tabs>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Contest;
