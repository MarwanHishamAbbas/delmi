/* eslint-disable @typescript-eslint/require-await */
import { requireAuth } from "~/utils/requireAuth";

export default function Order() {
  return <div>Order</div>;
}

export const getServerSideProps = requireAuth(async () => {
  return { props: {} };
});
