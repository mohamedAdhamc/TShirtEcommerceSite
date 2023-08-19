import {Link} from 'react-router-dom';
import navButton0 from '../assets/ic_menu_24px.svg';
import navButton from '../assets/ic_work_24px.svg';
import searchButton from '../assets/ic_search_24px.svg';

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className=" bg-white fixed top-0 z-10 border-b border-black w-11/12 mx-auto">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex min-w-100">
                <div className="flex hove:bg-black">
                <img
                    className="w-5 h-5 mr-10"
                    src= {navButton0}
                    alt="Icon"
                  />
                </div>
                <div className="flex">
                <img
                    className="w-5 h-5 mr-10"
                    src= {navButton}
                    alt="Icon"
                  />
                </div>
                <div className="flex">
                <img
                    className="w-5 h-5"
                    src= {searchButton}
                    alt="Icon"
                  />
                </div>
            </div>
            <div className="hidden md:block flex-grow">
              <div className=" mx-auto flex justify-center pr-16 items-baseline space-x-8">
                <Link to="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                <Link to="/cart" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Offers</Link>
                <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sales Now</Link>
                <Link to="/contact" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Esssentials</Link>
              </div>
            </div>
            <div className="flex min-w-100 justify-end">
                <div className="flex justify-end">
                <img
                    className="w-8 h-8 mr-2"
                    src="https://cdn-icons-png.flaticon.com/512/6007/6007783.png"
                    alt="Icon"
                  />
                </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
