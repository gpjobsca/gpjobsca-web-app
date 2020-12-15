import Head from 'next/head';
import Header from './header.js';

export const siteTitle = 'gpjobs.ca - Job Openings in Grande Prairie, Alberta';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen px-4 flex flex-col bg-gray-50">
      <div className="container mx-auto max-w-5xl min-h-screen flex flex-col">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <meta
            name="description"
            content="Job Openings in Grande Prairie, Alberta"
          />
        </Head>

        <Header />

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
    </div>
  );
}
