import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { GrNext } from 'react-icons/gr';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ContestCard from '../../components/ContestCard/ContestCard';

const Contest = () => {
    return (
        <>
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
                                <div className="bg-white rounded-xl p-6 w-fit mx-20">
                                    <div className="flex items-center gap-10 justify-center border-b pb-2 text-xl font-semibold">
                                        <div className="w-3/5">
                                            <h2>Contest info</h2>
                                        </div>
                                        <div className="flex items-center justify-evenly w-2/5">
                                            <div className=" mx-auto">
                                                <h2>Entries</h2>
                                            </div>
                                            <div className=" mx-auto">
                                                <h2>Package</h2>
                                            </div>
                                            <div className=" mx-auto">
                                                <h2>More details</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <ContestCard />
                                    <ContestCard />
                                    <ContestCard />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="bg-white rounded-xl p-6 w-fit mx-20">
                                    <div className="flex items-center gap-10 justify-center border-b pb-2 text-xl font-semibold">
                                        <div className="w-3/5">
                                            <h2>Contest info</h2>
                                        </div>
                                        <div className="flex items-center justify-evenly w-2/5">
                                            <div className=" mx-auto">
                                                <h2>Entries</h2>
                                            </div>
                                            <div className=" mx-auto">
                                                <h2>Package</h2>
                                            </div>
                                            <div className=" mx-auto">
                                                <h2>More details</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <ContestCard />
                                    <ContestCard />
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
