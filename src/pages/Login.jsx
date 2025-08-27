import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

export const Login = () => {
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
        <button type="button" className="btn btn-block btn-primary capitalize ">
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
