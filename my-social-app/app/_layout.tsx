import { AuthProvider, useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/superbase";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

const MainLayout = () => {
  const { setAuth } = useAuth()
  const router = useRouter()
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("user Session: ....", session?.user)

      if (session) {

        //set auth
        setAuth(session?.user)
        //move to home screen
        router.replace("/home")

      } else {
        //set auth as null
        setAuth(null)
        //move to welcome screen
        router.replace("/welcome")

      }

    })
  }, [])


  return <Stack screenOptions={{ headerShown: false }} />;
}