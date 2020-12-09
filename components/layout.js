import Head from 'next/head';
import Link from 'next/link';

const name = 'Todd Smith-Salter';
export const siteTitle = 'gpjobs.ca';

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto min-h-screen px-4 flex flex-col">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Job Openings in Grande Prairie, Alberta"
        />
      </Head>

      <header>
        <nav>
          <div className="">
            <div className="flex items-center justify-between h-24 md:h-16">
              <div className="flex items-start flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img
                      src="/img/gpjobsca_logo.png"
                      alt="gpjobs.ca Logo"
                      className="w-32"
                    />
                  </a>
                </div>
                <div className="text-xs md:text-base font-medium text-gray-400 md:ml-4">
                  Job Openings in Grande Prairie, Alberta
                </div>
              </div>
              <div className="flex items-center ml-4 space-x-4">
                <a
                  href="/manage/login"
                  className="font-bold text-gray-600 hover:text-gray-900"
                >
                  Login
                </a>
                <a
                  href="/manage/jobs/new"
                  className="bg-blue-500 hover:bg-blue-700 px-4 py-2 font-bold rounded-full text-white transition-colors transition-75"
                >
                  Post Job
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow py-8 lg:py-16">{children}</main>

      <footer>
        <div className="flex flex-col md:flex-row py-8">
          <nav className="flex-1 pb-8">
            <ul className="space-x-8">
              <li className="inline-block">
                <a href="/">All Jobs</a>
              </li>
              <li className="inline-block">
                <a href="/manage/jobs/new">Post Job</a>
              </li>
            </ul>
          </nav>
          <div className="flex-1 md:px-4 text-gray-600">
            <p>
              gpjobs.ca is a job board for Grande Prairie, Alberta and area
              businesses to connect with job seekers. This website is a free
              service provided courtesy of Precise Pixels.
            </p>
          </div>
        </div>
        <div className="py-4 text-sm text-gray-400">
          &copy;2020 gpjobs.ca and Precise Pixels. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
