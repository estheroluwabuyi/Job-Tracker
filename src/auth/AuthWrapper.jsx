import { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function AuthWrapper() {
  const [isLogin, setIsLogin] = useState(true)

  return isLogin ? (
    <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
  ) : (
    <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
  )
}

export default AuthWrapper