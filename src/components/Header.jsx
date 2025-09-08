import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <header className="bg-gray-200 py-1 text-gray-600 ">
      <div className="align-element flex justify-center sm:justify-end ">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center  ">
            <p className="text-xs sm:text-sm ">
              Hello,
              <span className="font-roboto font-bold text-base uppercase"> {user.username}</span>
            </p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-900 rounded-full group bg-gradient-to-br from-sky-400 via-sky-600 to-sky-800  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-sky-900">
              <span
                className="relative px-5 py-1 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:font-bold group-hover:scale-105"
                onClick={handleLogout}
              >
                Logout
              </span>
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm hover:font-bold transition-all ease-in duration-200"
            >
              Sign in / Guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm hover:font-bold transition-all ease-in duration-200"
            >
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
