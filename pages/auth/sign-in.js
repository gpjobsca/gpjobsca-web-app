import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAuth } from '../../lib/auth.js';
import Layout from '../../components/layout';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const { auth, isAuthenticated } = useAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    await auth.signin(data.email, data.password);
    router.push('/manage/jobs');
  };

  return (
    <Layout>
      <Head>
        <title>Sign In - gpjobs.ca</title>
      </Head>
      <div>
        <div className="p-6 bg-white max-w-xl mx-auto rounded shadow border">
          <h1 className="text-2xl text-gray-700 mb-8">Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="email"
              className="mt-4 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
              ref={register({ required: true })}
            />
            {errors.email && (
              <p className="my-2 text-red-500 bold text-sm">
                Email Address is Required
              </p>
            )}
            <label
              htmlFor="password"
              className="mt-4 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
              ref={register({ required: true })}
            />
            {errors.password && (
              <p className="my-2 text-red-500 bold text-sm">
                Password is required
              </p>
            )}
            <div className="flex justify-between items-center mt-4">
              <input
                type="submit"
                className="px-4 py-2 cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold rounded-full text-white transition-colors transition-75"
              />
              <Link href="/auth/forgot-password">
                <a className="text-sm text-gray-500 hover:text-gray-800">
                  Forgot Password
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
