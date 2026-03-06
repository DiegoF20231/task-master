import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'
import AuthBackgroundShape from '@/assets/svg/auth-background-shape'
import RegisterForm from '@/users/components/register-form'

export const RegisterPage = () => {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <div className='absolute'>
        <AuthBackgroundShape />
      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
        <CardHeader className='gap-6'>
          <div>
            <CardTitle className='mb-1.5 text-2xl'>Register</CardTitle>
            <CardDescription className='text-base'>Ship Faster and Focus on Growth.</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          {/* Register Form */}
          <div className='space-y-4'>
            <RegisterForm />

            <p className='text-muted-foreground text-center mt-4'>
              Already have an account?{' '}
              <Link to='/auth/login' className='text-card-foreground hover:underline font-medium'>
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


