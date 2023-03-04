import Users from "@/components/Users"
import Layout from "@/components/Layout"
import prisma from "@/lib/prisma";
import { GetStaticProps } from "next";
import { UserProps } from "@/components/UserItem";

export const getStaticProps: GetStaticProps = async () => {
  const person = await prisma.users.findMany();
  return {
    props: { person },
    revalidate: 10,
  };
};

type Props = {
  person: UserProps[]
}

const UsersPage: React.FC<Props> = (props) => {

    return (
        <Layout>
            <Users user={props.person}/>
        </Layout>
    )
   }
   
   export default UsersPage