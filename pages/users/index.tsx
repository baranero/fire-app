import Users from "@/components/Users"
import Layout from "@/components/Layout"
import prisma from "@/lib/prisma";
import { GetStaticProps } from "next";
import { UserProps } from "@/components/UserItem";

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.users.findMany();
    return {
      props: { feed },
      revalidate: 10,
    };
  };
  
  type Props = {
    feed: UserProps[]
  }  

const UsersPage: React.FC<Props> = (props) => {
    return (
        <Layout>
            <Users feed={props.feed}/>
        </Layout>
    )
   }
   
   export default UsersPage