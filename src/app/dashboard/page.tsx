import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession()

  if(!session)redirect("/")


  return (
    <>
      <h1>Olá, {session?.user?.name}</h1>
      <div>DashBoard</div>
    </>
  )
}

export default Page
