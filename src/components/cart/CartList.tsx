import { useAppSelector } from "~/hooks/redux-hooks";
import type { RootState } from "~/store";

import CartCard from "./CartCard";

export default function CartList() {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  return (
    <section className="flex-1">
      <div className="grid gap-5 px-5">
        {cartItems.map((item, idx) => (
          <CartCard
            key={idx}
            name={item.name}
            description={item.description}
            price={item.price}
            picture={item.picture}
            quantity={item.quantity}
          />
        ))}
      </div>
    </section>
  );
}
