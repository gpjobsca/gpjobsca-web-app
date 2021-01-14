import Head from 'next/head';
import Link from 'next/link';
import { formatDistanceToNowStrict } from 'date-fns';
import Layout, { siteTitle } from '../components/layout';
import api from '../lib/api';

export default function Home({ jobs }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="bg-white shadow-sm mx-auto rounded border border-gray-300">
        {jobs.map((job) => (
          <Link href={`/job/${job.id}`} key={job.id}>
            <a className="group block p-8 border-b border-gray-300 border-solid last:border-b-0 rounded-sm hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="mr-8">
                  <h2 className="text-2xl text-gray-700">{job.title}</h2>
                  <h3 className="text-gray-400">{job.user.company_name}</h3>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex items-center">
                    <span className="mx-4 text-gray-500">
                      {formatDistanceToNowStrict(Date.parse(job.created_at), {
                        addSuffix: true,
                      })}
                    </span>
                    <div className="hidden group-hover:block border border-gray-300 rounded-full px-4 py-2 text-gray-800 hover:flex hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors transition-75">
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
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await api().get('/jobs');
  const jobs = res.data;

  return {
    props: { jobs },
  };
}
