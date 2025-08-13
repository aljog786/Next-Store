import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from './mongodb';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<{ id: string; name: string; email: string; role: 'user' | 'admin' } | null> {
        if (!credentials?.email || !credentials?.password) return null;
        await connectDB();
        const user = await User.findOne({ email: credentials.email }).lean();
        if (!user) return null;
        const isValid = await bcrypt.compare(credentials.password, (user as any).password);
        if (!isValid) return null;
        return { id: String((user as any)._id), name: (user as any).name, email: (user as any).email, role: (user as any).role ?? 'user' };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as { id: string; role?: 'user' | 'admin' };
        (token as any).id = u.id;
        (token as any).role = u.role ?? 'user';
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = (token as any).id as string;
        (session.user as any).role = (token as any).role as 'user' | 'admin';
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};
