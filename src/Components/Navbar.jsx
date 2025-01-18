import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import Profile from '../assets/Profile.jpg';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const list = ["Home", "Education", "Skills", "Projects",];
  
  return (
    <>
      <div className="bg-white max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-lg px-6 py-3 fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 justify-center items-center">
            <img
              className="h-10 w-10 rounded-full border"
              src={Profile}
            />
            <h1 className="text-lg font-semibold">
              Subhadip
              <p className="text-xs">MERN Developer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden md:flex space-x-6">
              {list.map((item, index) => (
                <li key={index} className="cursor-pointer active:text-blue-500 hover:scale-110">
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}>
                  {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* using in mobile view */}
            <div>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="md:hidden"
              >
                {showMenu ? <MdClose className="text-2xl"/> : <HiMenuAlt3 className="text-2xl"/>}
              </button>
            </div>
          </div>
        </div>

        {/* For mobile */}
        <div className="md:hidden flex flex-col justify-center items-center space-y-2 p-2 rounded">
          {
            showMenu && (
              <ul>
                {list.map((item, index) => (
                  <li key={index} className="cursor-pointer active:text-blue-500 hover:scale-110">
                    <Link
                    to={item}
                    smooth={true}
                    duration={500}>
                  {item}
                  </Link>
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
