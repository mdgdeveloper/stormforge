import NextAuth, { User, type DefaultSession } from 'next-auth';

declare module "next-auth" {
  interface Session {
    id: string;
    accessToken: string;

  }

  interface User {
    id: string;
    accessToken: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    accessToken: string;
  }
}