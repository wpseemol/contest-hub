import { useForm } from 'react-hook-form';
import Title from '../../components/Title/Title';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';

const AddContest = () => {
    const publicBaseUrl = useAxiosPublic();
    const { user } = useAuthProvider();

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const handelAddContest = (data) => {
        const author = {
            email: user?.email,
            photo: user?.photoURL,
            name: user?.displayName,
        };

        publicBaseUrl
            .post('/contests', { ...data, postBy: author })
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Contest add Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    return (
        <>
            <div className="mt-10 ">
                <Title>Contest created</Title>
            </div>
            <div className="mb-10 -mt-4">
                <form
                    onSubmit={handleSubmit(handelAddContest)}
                    className="w-fit mx-auto">
                    <div
                        className="grid gap-x-3 gap-y-2 md:grid-cols-2 grid-cols-1 dark:border-[#313335] border-[#2c3658]
                    dark:bg-neutral-800 bg-white p-5 rounded dark:border shadow 
                    ">
                        <div className="mt-2">
                            <label
                                htmlFor="contestName"
                                className="text-base font-medium ">
                                Contest name:
                            </label>
                            <br />
                            <input
                                type="text"
                                {...register('contestName')}
                                id="contestName"
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full "
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="contestPrice"
                                className="text-base font-medium ">
                                Contest price:
                            </label>
                            <br />

                            <input
                                type="number"
                                {...register('contestPrice')}
                                id="contestPrice"
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full"
                            />
                        </div>
                        <div className="md:col-span-2 mt-2">
                            <label
                                htmlFor="contestImage"
                                className="text-base font-medium ">
                                Contest image:
                            </label>
                            <br />

                            <input
                                type="text"
                                {...register('contestImage')}
                                id="contestImage"
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="prizeMoney"
                                className="text-base font-medium ">
                                Prize money:
                            </label>
                            <br />
                            <input
                                type="number"
                                {...register('prizeMoney')}
                                id="prizeMoney"
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full"
                            />
                        </div>

                        <div className="mt-2">
                            <label
                                htmlFor="contestType"
                                className="text-base font-medium ">
                                Contest type:
                            </label>
                            <br />
                            <select
                                {...register('contestType')}
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full">
                                <option value="">Select...</option>
                                <option value="business-contest">
                                    Business Contest
                                </option>
                                <option value="medical-contest">
                                    Medical Contest
                                </option>
                                <option value="article-writing">
                                    Article Writing
                                </option>
                                <option value="gaming">Gaming</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 mt-1">
                            <label
                                htmlFor="contestDeadline"
                                className="text-base font-medium ">
                                Contest deadline:
                            </label>
                            <br />
                            <input
                                type="date"
                                {...register('contestDeadline')}
                                id="contestDeadline"
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full"
                            />
                        </div>
                        <div className="md:col-span-2 mt-2">
                            <label
                                htmlFor="contestDescription"
                                className="text-base font-medium ">
                                Contest description:
                            </label>
                            <br />
                            <textarea
                                {...register('contestDescription')}
                                id="contestDescription"
                                cols="80"
                                rows="5"
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full"></textarea>
                        </div>
                        <div className="md:col-span-2 mt-2">
                            <label
                                htmlFor="taskSubmissionInstruction"
                                className="text-base font-medium ">
                                Task submission instruction:
                            </label>
                            <br />
                            <textarea
                                {...register('taskSubmissionInstruction')}
                                id="taskSubmissionInstruction"
                                cols="80"
                                rows="5"
                                required
                                className="bg-neutral-800/5 dark:border-[#313335] rounded pl-3 round p-2 outline-none text-base font-normal border w-full"></textarea>
                        </div>

                        <div className="mt-2">
                            <input
                                type="submit"
                                value="Add Contest"
                                className="py-2 px-6 rounded bg-primaryColor text-white text-lg font-semibold"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddContest;
