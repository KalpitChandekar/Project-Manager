import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import dbConnect from './mongodb';
import User from './models/UserSchema';

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export async function getAuthUser(): Promise<AuthUser | null> {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) {
      return null;
    }
    
    const decoded = verify(token, JWT_SECRET) as { userId: string; email: string };
    
    await dbConnect();
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return null;
    }
    
    return {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
    };
    
  } catch (error) {
    console.error('Auth error:', error);
    return null;
  }
} 
