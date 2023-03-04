import { useRouter } from "next/router";
import UserDetail from "@/components/UserDetail";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const person = await prisma.users.findUnique({
    where: {
      id: String(params?.id),
    }
  });
  return {
    props: { person },
  };
};

export type PersonProps = {
  id: string
  name: string
  function: string
}

const User: React.FC<{ person: PersonProps}> = (props) => {

    return (
      <UserDetail person={props.person}/>
    )
}

export default User
