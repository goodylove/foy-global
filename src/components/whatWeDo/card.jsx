import React from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';
import { servicesSvg } from '../icons/svg';

const ServiceCard = ({ title, details }) => {
  return (
    <div className="flex justify-center  w-[337px] p-6  shadow-lg rounded-md">
      <div>
        {servicesSvg.service()}
        <h3 className="text-purple font-[800] text-[24px]">{title}</h3>
        <p>{details}</p>
        <span className="flex items-center text-purple text-[20px] ">
          <span className="pr-2">ReadMore</span> <MdOutlineArrowForward />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
