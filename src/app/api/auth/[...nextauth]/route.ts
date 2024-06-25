import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

const handler = NextAuth({
  pages: {
    signIn: "/src/app/login/page.tsx"
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { email: "Username", type: "email",},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if(!credentials){
          return null;
        }

        if(credentials.email === "everton@gmail.com" && credentials.password === "123456"){
          return {
            id:"1",
            name: "everton",
            email: "everton@gmail.com"
          }
        }

        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }
