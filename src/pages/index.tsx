import { type NextPage } from "next";

import Head from "next/head";

import { Button } from "~/components/ui/button";

const Home: NextPage = () => {
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
      <div className="container ">
        <h1 className="mb-10 text-4xl font-bold">Primary Buttons</h1>
        <Button size="lg">Order Now</Button>
      </div>
    </>
  );
};

export default Home;
