import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import PromoCards from "~/components/common/PromoCards";
import { MetaHeader } from "~/components/meta/MetaHeader";

const Home: NextPage = () => {
  const { data } = useSession();
  console.log(data?.user);
  return (
    <>
      <MetaHeader
        title="Delmi | A Modern Food Ordering Platform"
        description="Delmi is an innovative online website that revolutionizes the way you order food. Built using the powerful T3-Stack, which combines the capabilities of Typescript, Tailwind, Trpc, and Prisma, Delmi offers a seamless and user-friendly experience for both customers and restaurant owners."
      />

      <PromoCards />
    </>
  );
};

export default Home;
