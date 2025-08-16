import React, { useState } from 'react';
import { CTAButton } from './CTAButton';

export const Hero: React.FC = () => {
  const [isBookingDemo, setIsBookingDemo] = useState(false);
  const [isExploring, setIsExploring] = useState(false);

  const handleBookDemo = () => {
    setIsBookingDemo(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBookingDemo(false);
      alert('Demo booking request submitted! We will contact you soon.');
    }, 1000);
  };

  const handleExplore = () => {
    setIsExploring(true);
    // Simulate exploration process
    setTimeout(() => {
      setIsExploring(false);
      alert('Redirecting to team exploration page...');
    }, 1000);
  };

  return (
    <header className="bg-[rgba(78,142,127,1)] self-center z-10 flex min-h-[534px] w-full max-w-[1019px] flex-col items-stretch text-center justify-center px-[104px] py-[84px] rounded-[33px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch">
        <div className="flex w-full flex-col items-stretch text-white max-md:max-w-full">
          <h1 className="text-[39px] font-bold max-md:max-w-full">
            Bring Finsage to Your Workplace & make financial calm your
            company's new culture.
          </h1>
          <p className="text-[15px] font-medium leading-[26px] self-center mt-5 max-md:max-w-full">
            Think of it as every employee's personal CA, money mentor, and
            calm button — rolled into one.and gives HR a massive sigh of
            relief.
            <br />
          </p>
        </div>
        <div className="self-center flex w-[405px] max-w-full flex-col items-stretch text-xl text-black font-semibold mt-7 gap-[19px]">
          <CTAButton
            variant="primary"
            onClick={handleBookDemo}
            className="self-center w-[358px] max-w-full"
          >
            {isBookingDemo ? 'Booking...' : 'Book a free Discovery Call'}
          </CTAButton>
          <CTAButton
            variant="secondary"
            onClick={handleExplore}
          >
            {isExploring ? 'Loading...' : 'Explore finsage for your team'}
          </CTAButton>
        </div>
      </div>
    </header>
  );
};
