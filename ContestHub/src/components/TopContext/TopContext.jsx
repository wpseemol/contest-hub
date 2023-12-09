import { useQuery } from '@tanstack/react-query';
import Container from '../Container/Container';
import HomeContestCard from '../HomeContestCard/HomeContestCard';

import Title from '../Title/Title';
import TopContextBg from '../TopContextBg/TopContextBg';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';

const TopContext = () => {
    const publicBaseUrl = useAxiosPublic();

    const { data: topContest = [], isLoading } = useQuery({
        queryKey: ['top-participate'],
        queryFn: async () => {
            const contestCategoryData = await publicBaseUrl.get(
                `/top-participate`
            );
            return contestCategoryData.data;
        },
    });

    return (
        <div className="bg-gradient-to-b from-[#edfcff] to-white py-24 z-10 relative overflow-hidden">
            <Container>
                <Title>popular contest</Title>
                <div className="flex items-center justify-center flex-wrap gap-5">
                    {/* top contest  */}
                    {topContest.map((context) => {
                        return (
                            <div key={context?._id}>
                                <HomeContestCard contestCardData={context} />
                            </div>
                        );
                    })}
                </div>
            </Container>
            <TopContextBg />
        </div>
    );
};

export default TopContext;
