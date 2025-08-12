import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
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
    <nav className="bg-gradient-to-r from-[#f9f5f0] to-[#f1e8dd] shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* NAVBAR START */}
        <div className="navbar-start">
          {/* LOGO / TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex text-3xl font-extrabold tracking-wide text-[#0e4b8b] hover:text-[#4da6e7] transition-colors duration-300"
          >
            🛋 Comfy Furniture
          </NavLink>

          {/* DROPDOWN MENU MOBILE */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6 text-[#0e4b8b]" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white/90 backdrop-blur-md rounded-xl w-56 border border-gray-200"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* NAVBAR CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 text-lg font-medium">
            <NavLinks />
          </ul>
        </div>

        {/* NAVBAR END */}
        <div className="navbar-end flex items-center gap-4">
          {/* THEME TOGGLE */}
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" className="theme-controller" value="luxury" />
            <BsSunFill className="swap-on h-5 w-5 text-yellow-500" />
            <BsMoonFill className="swap-off h-5 w-5 text-gray-700" />
          </label>

          {/* CART LINK */}
          <NavLink
            to="/cart"
            className="btn btn-ghost btn-circle relative hover:bg-[#4da6e7]/10 transition-all"
          >
            <div className="indicator">
              <BsCart3 className="h-6 w-6 text-[#0e4b8b]" />
              <span className="badge badge-sm bg-[#4da6e7] border-none indicator-item"></span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
