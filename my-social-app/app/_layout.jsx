import { AuthProvider, useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/superbase";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { getUserData } from "@/services/userService"

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

const MainLayout = () => {
  const { setAuth, setUserData } = useAuth()
  const router = useRouter()
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      // console.log("user Session: ....", session?.user)

      if (session) {

        //set auth
        setAuth(session?.user)

        updateUserData(session?.user, session?.user?.email)


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


  const updateUserData = async (user, email) => {
    let res = await getUserData(user?.id)
    if (res.success) {
      setUserData(...res.data, email)
    }
  }


  return <Stack screenOptions={{ headerShown: false }} />;
}