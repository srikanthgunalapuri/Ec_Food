import React, { useEffect, useState } from 'react';

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date for the timer
    const targetDate = new Date("2025-01-26T00:00:00");
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval); // Stop the timer when the target time is reached
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <>
    <div className="d-flex justify-content-center" style={{ padding: "50px 0px 20px 0px" }}>
        <h1>
        Deal Of The <span className="text-success">Day</span>
        </h1>
      </div>
      <div
      className="deal-section my-2"
      style={{ background: 'url(./images/product.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}

    >
     
      <div className="container">
      
        <div className="row align-items-center py-3">
          <div className="col-md-6 col-12 text-center text-md-start">
            <h1 className="mb-3">Deal Of The Day</h1>
            <p>
            Celebrate Republic Day with unbeatable deals! This patriotic season, enjoy exclusive discounts and offers on your favorite products. Don't miss out on amazing savings, just in time for the celebrations of unity and freedom. Shop now and make this Republic Day even more special with fantastic deals! Happy shopping and Happy Republic Day!

</p>
            <div className="d-flex justify-content-between justify-content-md-start gap-3 flex-wrap">
              <div className="timer-box">
                <div id="days" className="fs-4">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="timer-label">Day</div>
              </div>
              <div className="timer-box">
                <div id="hours" className="fs-4">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="timer-label">Hour</div>
              </div>
              <div className="timer-box">
                <div id="minutes" className="fs-4">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="timer-label">Minute</div>
              </div>
              <div className="timer-box">
                <div id="seconds" className="fs-4">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="timer-label">Second</div>
              </div>
            </div>
            <button className="check-deal-btn px-4 py-2 mt-4 bg-success text-white rounded-0" style={{border:"none"}}>Check The Deal</button>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default DealOfTheDay;