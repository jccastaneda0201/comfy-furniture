import { BsCart3, BsMoon, BsSun } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';

import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

// import { useDispatch, useSelector } from 'react-redux';
// import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
  //   const dispatch = useDispatch();

  //   const handleTheme = () => {
  //     dispatch(toggleTheme());
  //   };

  //   const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-white">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex text-3xl items-center font-mono font-bold text-blue-900"
          >
            Comfy
            <span className="font-san text-yellow-600">Furniture</span>
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base text-blue-950 font-roboto font-semibold">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" />
            {/* sun icon*/}
            <BsSun className="swap-on h-7 w-7 fill-amber-500" />
            {/* moon icon*/}
            <BsMoon className="swap-off h-7 w-7 fill-gray-600" />
          </label>

          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-7 w-7 fill-blue-950" />
              <span className=" indicator-item w-4 h-4 rounded-full bg-sky-800 items-center justify-center text-white text-xs font-semibold">
                1
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
