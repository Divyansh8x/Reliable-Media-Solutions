import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:mx-20 mt-36">
      <ScrollTrigger
        onEnter={() => {
          setCounterState(true);
        }}
        onExit={() => {
          setCounterState(false);
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center font-Barlow">
          <CounterItem
            counterState={counterState}
            endValue={1200}
            label="Posts"
          />
          <CounterItem
            counterState={counterState}
            endValue={200}
            label="Google ADs"
          />
          <CounterItem
            counterState={counterState}
            endValue={750}
            label="Reels & Shorts"
          />
          <CounterItem
            counterState={counterState}
            endValue={350}
            label="Campaigns"
          />
          <CounterItem
            counterState={counterState}
            endValue={8000}
            label="Stories"
          />
          <CounterItem
            counterState={counterState}
            endValue={1300}
            label="Graphics & Videos"
          />
        </div>
      </ScrollTrigger>
    </div>
  );
};

const CounterItem = ({ counterState, endValue, label }) => (
  <div>
    <h2 className="text-4xl font-bold text-black">
      {counterState && (
        <CountUp start={0} end={endValue} duration={2.75}></CountUp>
      )}
      +
    </h2>{" "}
    <p className="py-2 text-gray-600 font-semibold text-xl sm:text-2xl">
      {label}
    </p>
  </div>
);

export default Counter;
