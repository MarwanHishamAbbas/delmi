/* eslint-disable @typescript-eslint/require-await */
import { Fragment } from "react";
import { MetaHeader } from "~/components/meta/MetaHeader";
import { requireAuth } from "~/utils/requireAuth";

export default function Order() {
  return (
    <Fragment>
      <MetaHeader
        title="Order Confirmation"
        description="Please review the details of your order, including the items purchased, shipping address, and payment information. "
      />
      <h1>Order Confirmation</h1>
    </Fragment>
  );
}

export const getServerSideProps = requireAuth(async () => {
  return { props: {} };
});
