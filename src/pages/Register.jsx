import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="h-screen grid place-items-center bg-base-100">
      <Form method="POST" className="card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl text-primary font-openSans font-semibold uppercase tracking-widest">
          Register
        </h4>
        <FormInput type="text" label="Username" name="username" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4 capitalize">
          <SubmitBtn text="Create account" />
        </div>
        <p className="text-center text-primary">
          Already a member?
          <Link
            to="/login"
            className="ml-2  link link-hover text-secondary font-bold text-xs uppercase underline"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
