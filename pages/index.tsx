import Head from 'next/head'
import MainNavigation from '@/components/MainNavigation'
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';


export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

export default function Home() {
  return (
    <>
    <Head>
    <title>Jakub</title>
    </Head>
    <MainNavigation />
    </>
  )
}

