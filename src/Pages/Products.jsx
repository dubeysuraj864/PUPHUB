import { useEffect, useState } from "react";
import BuyNowCard from "../Components/BuyNowCard";

function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:5000/products");
        const data = await result.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="products  flex justify-center md:mx-40 space-x-3 items-start space-y-2 flex-wrap">
        <>
          {products &&
            products.flatMap((item, id) => {
              return (
                <BuyNowCard
                  key={id}
                  image={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  price={item.price}

                />
              );
            })}
        </>
      </div>
    </>
  );
}

export default Products;
