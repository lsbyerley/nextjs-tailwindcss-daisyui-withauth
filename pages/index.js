import Head from 'next/head';
import Link from 'next/link';
import { useSession, signIn, signOut, getProviders } from 'next-auth/react';

export default function Home({ providers }) {
  const { data: session, status: sessionStatus } = useSession();
  const sessionLoading = sessionStatus === 'loading';

  console.log('LOG: session client', session);

  // When rendering client side don't display anything until loading is complete
  // https://github.com/nextauthjs/next-auth-example/blob/main/pages/protected.tsx
  if (typeof window !== 'undefined' && sessionLoading) return null;

  return (
    <div className='bg-base-100'>
      <Head>
        <title>NextJs, Tailwind, DaisyUI, with NextAuth starter</title>
      </Head>

      <main>
        <div className='hero min-h-[400px]'>
          <div className='text-center hero-content'>
            <div className='max-w-md'>
              <h1 className='text-5xl font-bold'>Hello there</h1>
              <p className='py-6'>
                This starter pack is bootstrapped with NextJS, NextAuth,
                TailwindCSS, and DaisyUI
              </p>
              {session && (
                <>
                  <p>Signed in as {session.user.email}</p>
                  <button className='btn' onClick={() => signOut()}>
                    Sign Out
                  </button>
                </>
              )}
              {!session && (
                <Link href='/auth/signin'>
                  <a className='mb-4 btn'>Sign In</a>
                </Link>
              )}
              {!session &&
                Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button
                      className='mb-4 btn'
                      onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                    >
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <footer className='flex items-center justify-center py-8 bg-base-200'>
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

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
