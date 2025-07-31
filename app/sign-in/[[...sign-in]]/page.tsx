import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to TaskFlow</h1>
          <p className="text-gray-600">Organize your tasks and projects efficiently</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignIn />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a 
                href="/sign-up"
                className="text-purple-600 hover:text-purple-500 font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
