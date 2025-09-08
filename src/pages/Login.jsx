import { FormInput, SubmitBtn } from '../components';
import { Form, Link, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try again');
    }
  };
  return (
    <section className="h-screen grid place-items-center bg-base-100  ">
      <Form method="post" className="card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl text-primary font-openSans font-semibold uppercase tracking-widest">
          Login
        </h4>
        <FormInput type="email" label="Email" name="identifier" defaultValue="test@test.com" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4 capitalize">
          <SubmitBtn text="Sign in" />
        </div>
        <button
          type="button"
          className="btn btn-block btn-primary capitalize "
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center text-primary">
          Not a member yet?{' '}
          <Link
            to="/register"
            className="ml-2  link link-hover link-secondary font-bold text-xs uppercase underline"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
