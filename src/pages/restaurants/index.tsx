import React from "react";
import { MetaHeader } from "~/components/meta/MetaHeader";
import ProductCard from "~/components/product/ProductCard";
import { PRODUCTS_DATA } from "~/data/productsData";

export default function ResturantsPage() {
  return (
    <>
      <MetaHeader title="Delmi | Resturants" />
      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            picture={product.picture}
            price={product.price}
            description={product.description}
          />
        ))}
      </section>
    </>
  );
}
