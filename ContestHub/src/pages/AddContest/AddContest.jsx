import { useFieldArray, useForm } from 'react-hook-form';
import Title from '../../components/Title/Title';

const AddContest = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handelAddContest = (data) => {
        console.log(data);
    };

    return (
        <>
            <div>
                <Title>Contest created</Title>
            </div>
            <div>
                <form onSubmit={handleSubmit(handelAddContest)}>
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div>
                            <input
                                type="text"
                                {...register('contestName')}
                                id="contestName"
                                required
                                className="bg-black/5"
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                {...register('contestPrice')}
                                id="contestPrice"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <input
                                type="text"
                                {...register('contestImage')}
                                id="contestImage"
                                required
                            />
                        </div>
                        <div className="">
                            <input
                                type="number"
                                {...register('prizeMoney')}
                                id="prizeMoney"
                                required
                            />
                        </div>

                        <div>
                            <select {...register('contestType')} required>
                                <option value="">Select...</option>
                                <option value="businessContest">
                                    Business Contest
                                </option>
                                <option value="medicalContest">
                                    Medical Contest
                                </option>
                                <option value="articleWriting">
                                    Article Writing
                                </option>
                                <option value="gaming">Gaming</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <input
                                type="date"
                                {...register('contestDeadline')}
                                id="contestDeadline"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <textarea
                                {...register('contestDescription')}
                                id="contestDescription"
                                cols="80"
                                rows="10"
                                required></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <textarea
                                {...register('taskSubmissionInstruction')}
                                id="taskSubmissionInstruction"
                                cols="80"
                                rows="10"
                                required></textarea>
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Add Contest"
                                className="py-3 px-8 rounded"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddContest;
