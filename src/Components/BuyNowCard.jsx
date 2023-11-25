import Base from "../Images/BuyNowBase.png";
function BuyNowCard(props) {
  return (
    <>
      <div className="BuyNowCard w-[250px] space-y-2 m-6 border p-2 ">
        <div className="bnc-top relative flex flex-col justify-center items-center">
          <img
            src={props.image}
            className="z-10 w-[180px] h-[200px] object-cover"
            alt=""
          />
          <img
            src={Base}
            className="absolute -bottom-10 left-[0%] z-0 w-[250px]"
            alt=""
          />
        </div>
        <div className="bottom pt-8 space-y-2">
          <h2 className="text-2xl ">{props.title}</h2>
          <p>{props.description}</p>
          <span className="text-3xl ">${props.price}</span> <br />
          <button className="border border-[#124C5F] px-6 py-1 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default BuyNowCard;
