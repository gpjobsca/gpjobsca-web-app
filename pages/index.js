import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="shadow-lg max-w-5xl mx-auto rounded">
        <a
          href="/"
          className="block p-8 border-b-2 border-gray-100 border-solid last:border-b-none rounded-sm hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <h2 className="text-2xl text-gray-700">Field Administrator</h2>
              <h3 className="text-gray-400">Sinopec Canada</h3>
            </div>
            <div className="flex-shrink-0">
              <div>
                <span className="mx-4 text-gray-500">7d</span>
                <a
                  href="/"
                  className="border-2 rounded-full px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors transition-75"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          className="block p-8 border-b-2 border-gray-100 border-solid last:border-b-none rounded-sm hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <h2 className="text-2xl text-gray-700">Field Administrator</h2>
              <h3 className="text-gray-400">Sinopec Canada</h3>
            </div>
            <div className="flex-shrink-0">
              <div>
                <span className="mx-4 text-gray-500">7d</span>
                <a
                  href="/"
                  className="border-2 rounded-full px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors transition-75"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          className="block p-8 border-b-2 border-gray-100 border-solid last:border-0 hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <h2 className="text-2xl text-gray-700">Field Administrator</h2>
              <h3 className="text-gray-400">Sinopec Canada</h3>
            </div>
            <div className="flex-shrink-0">
              <div>
                <span className="mx-4 text-gray-500">7d</span>
                <a
                  href="/"
                  className="border-2 rounded-full px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors transition-75"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </Layout>
  );
}
