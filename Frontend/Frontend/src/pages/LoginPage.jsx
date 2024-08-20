import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
        <form action="" onSubmit={loginUser}>
            <input type="text" name="username" placeholder='Enter your name' />
            <input type="password" name="password" placeholder='Enter your password' />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default LoginPage