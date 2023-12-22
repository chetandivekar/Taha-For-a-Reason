import React from "react";

const Hero = () => {
  return (
    <div>
      <div className=" absolute top-[231px] left-[216px] font-salsa text-darkslateblue inline-block w-[849px]">
        The Website That Determines If a Word Is Worthy of the Title "Thala for
        a Reason"
      </div>
      <div className="absolute top-[157px] left-[422px] text-45xl text-darkslateblue text-left">
        Thala-Meter
      </div>
      <div className="absolute top-[383px] left-[258px] w-[710px] h-[226px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro box-border w-[710px] h-24 border-[5px] border-solid border-darkslateblue" />
        <div className="absolute top-[130px] left-[0px] rounded-xl bg-darkslateblue w-[710px] h-24" />
        <div className="absolute top-[36px] left-[28px] inline-block w-[272px] h-[23px]">
          Enter the word
        </div>
      </div>
    </div>
  );
};

export default Hero;
