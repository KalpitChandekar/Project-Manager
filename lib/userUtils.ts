import dbConnect from './mongodb';
import User from './models/UserSchema';

export async function getUserByClerkId(clerkUserId: string) {
  try {
    await dbConnect();
    const user = await User.findOne({ clerkUserId });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export async function createOrUpdateUser(clerkUserId: string, emailAddress: string) {
  try {
    await dbConnect();
    const user = await User.findOneAndUpdate(
      { clerkUserId },
      { clerkUserId, emailAddress },
      { new: true, upsert: true }
    );
    return user;
  } catch (error) {
    console.error('Error creating/updating user:', error);
    return null;
  }
}

export async function deleteUser(clerkUserId: string) {
  try {
    await dbConnect();
    await User.findOneAndDelete({ clerkUserId });
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
} 
