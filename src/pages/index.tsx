import { type NextPage } from "next";
import { useSession } from "next-auth/react";

import Head from "next/head";
import PromoCards from "~/components/common/PromoCards";

const Home: NextPage = () => {
  const { data } = useSession();
  console.log(data?.user);
  return (
    <>
      <Head>
        <title>Delmi | A Modern Food Ordering Platform</title>
        <meta
          name="description"
          content=" Delmi is an innovative online website that revolutionizes the way you order food. Built using the powerful T3-Stack, which combines the capabilities of Typescript, Tailwind, Trpc, and Prisma, Delmi offers a seamless and user-friendly experience for both customers and restaurant owners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PromoCards />
    </>
  );
};

export default Home;
