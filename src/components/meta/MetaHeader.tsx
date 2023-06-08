import Head from "next/head";
import type { FC } from "react";
import type { MetaDataProps } from "~/types/meta";

export const MetaHeader: FC<MetaDataProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
