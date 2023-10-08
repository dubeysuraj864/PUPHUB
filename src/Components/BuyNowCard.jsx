import Base from "../Images/BuyNowBase.png";
import Product from "../Images/BuyNowProduct.png";
function BuyNowCard() {
  return (
    <>
      <div className="BuyNowCard w-[250px] space-y-2 m-6 border p-2 ">
        <div className="bnc-top relative flex flex-col">
          <img src={Product} className="z-10 w-[180px]" alt="" />
          <img
            src={Base}
            className="absolute -bottom-10 -left-[10%] z-0 w-[250px]"
            alt=""
          />
        </div>
        <div className="bottom pt-8 space-y-2">
          <h2 className="text-2xl ">Drools | 3KG</h2>
          <p>
            Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog
            Food
          </p>
          <button className="border border-[#124C5F] px-6 py-1 rounded-md">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default BuyNowCard;
