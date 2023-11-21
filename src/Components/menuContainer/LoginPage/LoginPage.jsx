import '../LoginPage/style.css';
import {useDispatch} from 'react-redux'
import {updateLogin,updatePassword,updateToken} from '../../../Redux/Reducers'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import {GET_TOKEN} from '../../Apollo/gql'



export default function LoginPage() {
  const dispatch = useDispatch()
  
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  
  const {data} = useQuery(GET_TOKEN, {
    variables: {login: login, password: password},
  });

  const handleLogin = (login,password,data) => {
    dispatch(updateLogin(login))
    dispatch(updatePassword(password))
    dispatch(updateToken(data?.login))
  }





  return (
    <div className='cons'>
      <div className='home'>
        <div className='login'>
          <input  type="email"  onChange = {(e) => {setLogin(e.target.value)}}  placeholder="login"/>
          <input  type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='password' />
          <button className='btnLogin' onClick={() => (handleLogin(login,password,data))}>Увійти</button>
        </div>
      </div>
    </div>
  )
}
