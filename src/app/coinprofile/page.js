"use client";
import React from "react";
import Stat from "./components/Stat";
import GaugeComponent from "react-gauge-component";
const CoinProfile = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <div className="header flex items-center justify-between bg-yellow-300">
        <img
          alt="coinlogo"
          className="bg-blue-500 w-64 h-64"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fbitcoin-symbol-circle-flat-design-vector-illustration_37706581.htm&psig=AOvVaw0-mgJPtmEJ5a__FLG2sVaK&ust=1740864243294000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjllOmm54sDFQAAAAAdAAAAABAE"
        />
        <h1 className="text-8xl">Bitcoin</h1>
        <span className="w-64 h-64 bg-green-500">
          <GaugeComponent
            type="radial"
            value={90} // Current value
            minValue={0} // Min value of the gauge
            maxValue={100} // Max value of the gauge
            labels={{
              tickLabels: {
                type: "outer",
                defaultTickValueConfig: {
                  formatTextValue: (value) => {
                    if (value === 0) return "NOT A SCAM";
                    if (value === 100) return "SCAM";
                    value + "ºC";
                  },
                  style: { fontSize: 10, fill: "black" },
                },
                ticks: [{ value: 0 }, { value: 50 }, { value: 100 }],
              },
            }}
          />
        </span>
      </div>
      <div className="statistic mt-12 flex flex-col items-center">
        <Stat />
      </div>
    </div>
  );
};

export default CoinProfile;
