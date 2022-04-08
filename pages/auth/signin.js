import { getProviders, signIn } from 'next-auth/react';

export default function SignIn({ providers }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex items-center justify-center px-8 py-8 mt-4 rounded bg-content bg-base-200'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className='btn' onClick={() => signIn(provider.id)}>
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
