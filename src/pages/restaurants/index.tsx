import React from "react";
import ProductCard from "~/components/product/ProductCard";
import { PRODUCTS_DATA } from "~/data/productsData";

export default function ResturantsPage() {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
      {PRODUCTS_DATA.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          picture={product.picture}
          price={product.price}
          description={product.description}
          quantity={1}
        />
      ))}
    </section>
  );
}
