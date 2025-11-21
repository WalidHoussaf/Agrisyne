import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    name: string;
    role: 'farm_manager' | 'admin' | 'guest' | 'researcher';
    isVerified: boolean;
    isActive: boolean;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: 'farm_manager' | 'admin' | 'guest' | 'researcher';
      isVerified: boolean;
      isActive: boolean;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: 'farm_manager' | 'admin' | 'guest' | 'researcher';
    isVerified: boolean;
    isActive: boolean;
  }
}
