import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TbLockAccess } from 'react-icons/tb';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/useAuth'; // Import the useAuth hook
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the useAuth hook

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9_]+$/,
          'Username can only contain alphanumeric characters and underscores'
        )
        .required('Username is required'),
      password: Yup.string()
        .min(4, 'Password must be at least 4 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const userData = {
        username: values.username,
        password: values.password,
      };
      const loginSuccess = await login(userData);
      setIsLoading(false);
      // console.log('loginSuccess', loginSuccess);
      // console.log('loginSuccess', userData);
      

      if (loginSuccess) {
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error('Login failed. Please try again.');
      }
    },
  });
 

  return (
    <div className="py-20">
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className=" w-full grid place-items-center">
        <div className="lg:w-4/12 max-md:w-full max-sm:w-full grid p-4  border-2 shadow-2xl ">
          <div className="flex justify-end pb-10">
            <span className="text-[#716acd] cursor-pointer">
              <Link to={'/'}>
                {' '}
                <IoMdCloseCircle className="text-3xl" />
              </Link>
            </span>
          </div>
          <div className="bg-[#716acd] w-full flex cursor-pointer items-center justify-center gap-2 text-white py-4">
            <h2 className="text-4xl font-bold tracking-tight ">Sign In</h2>
            <span>
              <TbLockAccess className="text-5xl text-gray-600 hover:text-white transition-all duration-300" />
            </span>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="form-control w-full grid place-items-center py-4">
            <div className="w-full flex flex-col gap-3">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="enter your username here"
                  className="input input-bordered w-full"
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  className="input input-bordered w-full"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="current-password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="transition-all duration-200 bg-[#716acd] btn w-full my-4 hover:bg-[#8d98d9] text-white font-bold"
              disabled={!formik.isValid || isLoading}>
              {isLoading ? (
                <div className="">
                  <span className="loading loading-dots loading-lg text-[#716acd]"></span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          <Link
            to={'/signup'}
            className="w-full text-center capitalize  text-sm text-gray-500 font-mono cursor-pointer
            py-6">
            <h3>
              do you have an account?
              <span className=" uppercase border-b-2 border-t-2 border-[#716acd] cursor-pointer">
                sign up
              </span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
