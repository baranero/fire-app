import MainNavigation from "@/components/MainNavigation"
import Head from "next/head"
import UserItem from "@/components/Users"

const Users = () => {
    return (
        <>
            <Head>
    <title>Jakub</title>
    </Head>
                <MainNavigation/>
                <UserItem/>
            
        </>
    )
   }
   
   export default Users