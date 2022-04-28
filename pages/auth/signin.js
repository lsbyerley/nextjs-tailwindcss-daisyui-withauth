import { getProviders, signIn } from 'next-auth/react';

// TODO: not redirecting after signin
// https://github.com/nextauthjs/next-auth/discussions/4376
// https://github.com/nextauthjs/next-auth/discussions/4366

export default function SignIn({ providers }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex flex-col items-center justify-center px-8 py-8 mt-4 rounded bg-content bg-base-200'>
        {Object.values(providers).map((provider) => (
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
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
