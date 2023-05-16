import { useState } from 'react';

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

const FaqCard = ({ answer, question }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  console.log(answer, question);
  return (
    <div className="mt-4">
      <div className="border-2 p-7  rounded-[14px]">
        <span className="flex justify-between items-center">
          <span className="text-[22px] font-[800] leading-[22px] text-black">
            {question}
          </span>
          <span
            onClick={handleToggle}
            className={`text-[60px] rounded-full h-[50px] w-[50px] flex justify-center items-center shadow-md p-3 ${
              toggle ? 'bg-purple' : 'bg-white'
            } ${toggle ? 'text-white' : 'text-purple'}`}
          >
            {toggle ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
          </span>
        </span>
        <div className={`${toggle ? 'visible' : 'hidden'}`}>
          <p className="text-[14px] w-[636px]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
