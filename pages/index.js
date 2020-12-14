import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="bg-white shadow-sm mx-auto rounded border border-gray-300">
        <a
          href="/"
          className="group block p-8 border-b border-gray-300 border-solid last:border-b-0 rounded-sm hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <h2 className="text-2xl text-gray-700">Field Administrator</h2>
              <h3 className="text-gray-400">Sinopec Canada</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="mx-4 text-gray-500">7d</span>
                <a
                  href="/"
                  className="flex hidden group-hover:block border border-gray-300 rounded-full px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors transition-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <span className="inline-block ml-2">Apply Now</span>
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          className="group block p-8 border-b border-gray-300 border-solid last:border-b-0 rounded-sm hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <h2 className="text-2xl text-gray-700">Field Administrator</h2>
              <h3 className="text-gray-400">Sinopec Canada</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="mx-4 text-gray-500">7d</span>
                <a
                  href="/"
                  className="hidden group-hover:block border border-gray-300 rounded-full px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors transition-75"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          className="group block p-8 border-b border-gray-300 border-solid last:border-b-0 rounded-sm hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <h2 className="text-2xl text-gray-700">Field Administrator</h2>
              <h3 className="text-gray-400">Sinopec Canada</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="mx-4 text-gray-500">7d</span>
                <a
                  href="/"
                  className="hidden group-hover:block border border-gray-300 rounded-full px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors transition-75"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="pt-12 flex items-center justify-center sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
          <div>
            <nav
              className="relative z-0 inline-flex shadow-sm rounded-full -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}
