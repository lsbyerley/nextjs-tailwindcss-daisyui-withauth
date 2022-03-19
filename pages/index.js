import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>NextJs, Tailwind, DaisyUI, with auth starter</title>
      </Head>

      <main>
        <div className='hero min-h-[400px] bg-base-200'>
          <div className='text-center hero-content'>
            <div className='max-w-md'>
              <h1 className='text-5xl font-bold'>Hello there</h1>
              <p className='py-6'>
                This starter pack is bootstrapped with NextJS, TailwindCSS, and
                DaisyUI
              </p>
              {session && (
                <>
                  <p>Signed in as {session.user.email}</p>
                  <button className='btn btn-primary' onClick={() => signOut()}>
                    Sign Out
                  </button>
                </>
              )}
              {!session && (
                <button className='btn btn-primary' onClick={() => signIn()}>
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className='flex items-center justify-center py-8 bg-base-100'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Cool Footer Bro{' '}
        </a>
      </footer>
    </div>
  );
}
