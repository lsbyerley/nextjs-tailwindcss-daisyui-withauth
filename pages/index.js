import Head from 'next/head';
import { useSession, signIn, signOut, getProviders } from 'next-auth/react';

export default function Home({ providers }) {
  const { data: session } = useSession();

  console.log('LOG: session client', session);

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
                <button className='mb-4 btn' onClick={() => signIn()}>
                  Sign In
                </button>
              )}
              {!session &&
                Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button className='btn' onClick={() => signIn(provider.id)}>
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
