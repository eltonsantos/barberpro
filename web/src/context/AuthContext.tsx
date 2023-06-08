import { createContext, ReactNode, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import Router from 'next/router'

import { api } from '../services/apiClient'

interface AuthContextData {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  endereco: string | null;
  subscriptions?: SubscriptionProps | null;
}

interface SubscriptionProps {
  id: string;
  status: string;
}

type AuthProviderProps = {
  children: ReactNode;
} 

interface SignInProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
  console.log("ERROR LOGOUT");
  try{
    destroyCookie(null, '@barber.token', { path: '/' })
    Router.push('/login');

  }catch(err){
    console.log("Error ao sair")
  }
}

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps){
    try{
      const response = await api.post("/session", {
        email,
        password,
      })

      const { id, name, token, subscriptions, endereco} = response.data;

      setCookie(undefined, '@barber.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mês
        path: '/'
      })

      setUser({
        id,
        name,
        email,
        endereco,
        subscriptions
      })

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      Router.push('/dashboard')

    }catch(err){
      console.log("ERRO AO ENTRAR", err)
    }
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}