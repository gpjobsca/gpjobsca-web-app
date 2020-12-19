import Head from 'next/head';
import Layout from '../../../components/layout';
import PageHeading from '../../../components/page-heading';

export default function NewJob() {
  return (
    <Layout>
      <Head>
        <title>New Job - gpjobs.ca</title>
      </Head>

      <PageHeading text="New Job" />

      <div className="bg-white shadow-sm mx-auto rounded border border-gray-300">
        <div className="p-8">
          <form action="/">
            <div className="w-full md:w-2/3">
              <label
                htmlFor="jobTitle"
                className="mt-4 block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
              />
              {/* <p className="my-2 text-red-500 bold text-sm">
                Job Title is Required
              </p> */}
            </div>
            <div className="w-full">
              <label
                htmlFor="jobDescription"
                className="mt-4 block text-sm font-medium text-gray-700"
              >
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
              />
              {/* <p className="my-2 text-red-500 bold text-sm">
                Job Title is Required
              </p> */}
            </div>
            <div className="w-full md:w-2/3">
              <label
                htmlFor="applyHref"
                className="mt-4 block text-sm font-medium text-gray-700"
              >
                Apply Link
              </label>
              <input
                type="url"
                id="jobHref"
                name="jobHref"
                placeholder="https://"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm rounded-md text-sm"
              />
            </div>
            <input
              type="submit"
              className="mt-4 px-4 py-2 cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold rounded-full text-white transition-colors transition-75"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
