import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Link } from 'react-router'
import AuthBackgroundShape from '@/assets/svg/auth-background-shape'
import LoginForm from '@/users/components/login-form'


export const LoginPage = () => {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <div className='absolute'>
        <AuthBackgroundShape />
      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
        <CardHeader className='gap-6'>
          <div>
            <CardTitle className='mb-1.5 text-2xl'>Login</CardTitle>
            <CardDescription className='text-base'>Ship Faster and Focus on Growth.</CardDescription>
          </div>
        </CardHeader>

        <CardContent>


          {/* Login Form */}
          <div className='space-y-4'>
            <LoginForm />

            <p className='text-muted-foreground text-center mt-4'>
              Don't have an account?{' '}
              <Link to='/auth/register' className='text-card-foreground hover:underline font-medium'>
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
