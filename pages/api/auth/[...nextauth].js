import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  // TODO: taking this out for now, the user is not redirected back to home page with this enabled
  /* pages: {
    signIn: '/auth/signin',
  }, */
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  debug: process.env.NEXTAUTH_DEBUG,
});
