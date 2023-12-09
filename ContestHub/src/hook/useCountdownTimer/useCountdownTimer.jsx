import { useEffect, useState } from 'react';

const useCountdownTimer = (date = '2020-12-31') => {
    const [countdown, setCountdown] = useState('Calculating...');

    useEffect(() => {
        // Set the target date (December 6, 2023)
        const targetDate = new Date(`${date}`).getTime();

        // Update the countdown every second
        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const timeDifference = targetDate - currentDate;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor(
                    (timeDifference % (1000 * 60)) / 1000
                );

                setCountdown({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
                setCountdown({ massage: 'Contest participate time end' });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [date]);

    return { countdown };
};

export default useCountdownTimer;
