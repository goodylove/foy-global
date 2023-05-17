import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import FoyLogo from '../../assets/logoa 1.png';
import Button from './../button/index';
import { Fade as Hamburger } from 'hamburger-react';

const Nav = () => {
  return (
    <nav className="flex bg-white p-3 absolute top-4 w-full justify-between items-center opacity-[0.8] left-0">
      <div className="w-[20%]">
        <img src={FoyLogo} alt="log" className="text-purple" />
      </div>
      <div className=" hidden md:flex justify-around  w-[80%]">
        <ul className="flex justify-around font-[400] text-[18px] leading-[24px] w-[45%] items-center cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li className="flex items-center">
            Service <MdOutlineKeyboardArrowDown />
          </li>
          <li>FAQ</li>
          <li>contact</li>
        </ul>
        <Button
          text="Apply now"
          className="bg-purple text-white w-[181px] h-[50px] rounded"
        />
      </div>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Nav;
