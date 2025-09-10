import { BsCart3, BsMoon, BsMoonFill, BsSun } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';

import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-transparent">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden text-primary lg:flex text-3xl items-center font-openSans font-bold "
          >
            Comfy
            <span className="font-openSans text-yellow-600">Furniture</span>
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
          <ul className="menu menu-horizontal text-base font-normal font-roboto  text-primary">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon*/}
            <BsSun className="swap-off h-7 w-7 fill-amber-500" />
            {/* moon icon*/}
            <BsMoonFill className="swap-on h-7 w-7 fill-gray-600" />
          </label>

          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              {/* Icono carrito */}
              <BsCart3 className="w-7 h-7 text-primary" />

              {/* Badge indicador */}
              <span className="indicator-item badge badge-sm bg-gray-400 text-white border-none shadow-md">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
