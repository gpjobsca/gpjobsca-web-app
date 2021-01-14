import Head from 'next/head';
import Layout from '../../components/layout';

const forgotPassword = () => (
  <Layout>
    <Head>
      <title>Forgot Password - gpjobs.ca</title>
    </Head>
    <div>
      <div className="p-6 bg-white max-w-xl mx-auto rounded shadow border">
        <h1 className="text-2xl text-gray-700 mb-8">Reset Password</h1>
        <form>
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
          />
          <p className="my-2 text-red-500 bold text-sm">
            Email Address is Required
          </p>
          <input
            type="submit"
            value="Email Reset Instructions"
            className="mt-4 px-4 py-2 cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold rounded-full text-white transition-colors transition-75"
          />
        </form>
      </div>
    </div>
  </Layout>
);

export default forgotPassword;
