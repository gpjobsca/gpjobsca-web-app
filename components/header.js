import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <div className="flex items-center justify-between h-24 md:h-16">
            <div className="flex items-start flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <img
                      src="/img/gpjobsca_logo.png"
                      alt="gpjobs.ca Logo"
                      className="w-32"
                    />
                  </a>
                </Link>
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
  );
}
