import MainNavigation from "@/components/MainNavigation"
import Head from "next/head"
import UserItem from "@/components/Users"

const Users = () => {
    return (
        <>
            <Head>
                <MainNavigation/>
            </Head>
            <UserItem/>
        </>
    )
   }
   
   export default Users