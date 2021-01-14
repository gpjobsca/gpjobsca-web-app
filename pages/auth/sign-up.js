import Head from 'next/head';
import Layout from '../../components/layout';

const signUp = () => (
  <Layout>
    <Head>
      <title>Sign Up - gpjobs.ca</title>
    </Head>
    <div>
      <div className="p-6 bg-white max-w-xl mx-auto rounded shadow border">
        <h1 className="text-2xl text-gray-700 mb-8">Sign Up</h1>

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
          <p className="my-2 text-red-500 bold text-sm hidden">
            Email Address is Required
          </p>
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
          />
          <p className="my-2 text-red-500 bold text-sm hidden">
            Password is required
          </p>
          <label
            htmlFor="confirmPassword"
            className="mt-4 block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
          />
          <p className="my-2 text-red-500 bold text-sm hidden">
            Passwords must match
          </p>
          <label
            htmlFor="orgName"
            className="mt-4 block text-sm font-medium text-gray-700"
          >
            Organization Name
          </label>
          <input
            id="orgName"
            type="text"
            name="orgName"
            className="mt-1 py-2 px-3 w-full block border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
          />
          <label
            htmlFor="orgLocal"
            className="mt-4 block text-sm font-medium text-gray-700"
          >
            Organization Location
          </label>
          <select
            id="orgLocal"
            name="orgLocal"
            className="mt-1 block w-full py-2 pl-2 pr-4 border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
          >
            <option value="Grande Prairie">Grande Prairie</option>
            <option value="County of Grande Prairie">
              County of Grande Prairie
            </option>
            <option value="MD of Greenview No. 16">
              MD of Greenview No 16
            </option>
          </select>
          <input
            type="submit"
            className="mt-4 px-4 py-2 cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold rounded-full text-white transition-colors transition-75"
          />
        </form>
      </div>
    </div>
  </Layout>
);

export default signUp;
