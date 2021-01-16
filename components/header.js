import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth.js';

export default function Header() {
  const { auth } = useAuth();
  const router = useRouter();

  return (
    <>
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
              {auth.user ? (
                <>
                  <a
                    onClick={async () => {
                      await auth.signout();
                      router.push('/');
                    }}
                    className="font-bold text-gray-600 hover:text-gray-900"
                  >
                    Sign Out
                  </a>
                  <Link href="/manage/jobs/new">
                    <a className="bg-blue-500 hover:bg-blue-700 px-4 py-2 font-bold rounded-full text-white transition-colors transition-75">
                      Post Job
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/auth/sign-in">
                    <a className="font-bold text-gray-600 hover:text-gray-900">
                      Sign In
                    </a>
                  </Link>
                  <Link href="/auth/sign-in">
                    <a className="bg-blue-500 hover:bg-blue-700 px-4 py-2 font-bold rounded-full text-white transition-colors transition-75">
                      Post Job
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
