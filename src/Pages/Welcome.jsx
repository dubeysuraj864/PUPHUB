import Bg from "../Images/hero-bg.png";
import Button from "../Components/Button";
import Dog from "../Images/Dog.png";
import Paw1 from "../Images/Group-1.png";
import Paw2 from "../Images/Group.png";
import Paw from "../Images/Group-2.png";
import Paw3 from "../Images/Group-9.png";
import Dog1 from "../Images/Dog-1.png";
import Dog2 from "../Images/Dog-2.png";
import Dog3 from "../Images/Dog-3.png";
import Grooming from "../Images/Grooming.png";
import DayCare from "../Images/DayCare.png";
import HealthCare from "../Images/HealthCare.png";
import Training from "../Images/Training.png";
import Hyginic from "../Images/Hyginic.png";

import TransparentBg from "../Images/transparent-bg.png";

function Welcome() {
  return (
    <>
      <div className="welcome relative flex flex-col-reverse justify-around items-center md:flex-row">
        <img
          src={Bg}
          className="object-fit absolute w-[100vw] h-[90vh] -z-10"
          alt="bg"
        />
        <div className="welcome-left space-y-5">
          <h1 className="text-4xl font-bold break-words">
            Taking Care For <br /> Your Smart Dogg!
          </h1>
          <p>
            Human–canine bonding is the relationship <br /> between dogs and
            humans.
          </p>
          <Button text="Explore More" />
        </div>
        <div className="welcome-right relative flex flex-col justify-center p-10">
          <img
            src={Paw1}
            className="w-[50px] absolute z-10 top-[80px] left-[40px]"
            alt="dog"
          />
          <img
            src={Paw2}
            className="w-[50px] absolute z-10 bottom-[50%] -right-[20px]"
            alt="dog"
          />
          <img
            src={Paw3}
            className="w-[50px] absolute z-10 bottom-[0px] left-[100px]"
            alt="dog"
          />
          <div className="dog-yellow-bg m-3 w-[350px] relative overflow-hidden bg-[#F1C21B]">
            <img
              src={TransparentBg}
              className="absolute object-content w-[300px]"
              alt="dog"
            />
            <img
              src={Paw}
              className="absolute object-content w-[60px]  top-[20px] right-[30%]"
              alt="dog"
            />

            <img src={Dog} className="w-[300px]" alt="dog" />
          </div>
          <img
            src={Dog1}
            className="w-[50px] absolute z-10 top-[0px] right-[30%]"
            alt="dog"
          />
          <img
            src={Dog2}
            className="w-[50px] absolute z-10 bottom-[10%] right-[15px]"
            alt="dog"
          />
          <img
            src={Dog3}
            className="w-[50px] absolute z-10 bottom-[100px] left-[0%]"
            alt="dog"
          />
        </div>
      </div>
      <div className="services p-4 my-10">
        <h1 className="ml-[10%] border-b-2 w-max pb-1 border-black font-bold text-xl">Service Category</h1>
        <div className="services ml-8 space-y-2 grid grid-cols-2 grid-rows-2 md:flex justify-center items-center mt-5 flex-wrap space-x-0 md:space-x-16">
            <div className="grooming bg-gradient-to-b from-[#98F2E1] to-transparent flex flex-wrap flex-col justify-center items-center border border-[#98F2E1] p-4 rounded-md w-[150px] h-[180px]">
                <img src={Grooming} className="w-[70px]" alt="grooming" />
                <span>Grooming</span>
            </div>
            <div className="HealthCare bg-gradient-to-b from-[#FFEE94] to-transparent flex flex-col justify-center items-center border border-[#FFEE94] p-4 rounded-md w-[150px] h-[180px]">
                <img src={HealthCare} className="w-[50px] h-[70px] object-contain" alt="HealthCare" />
                <span>Healthcare</span>
            </div>
            <div className="DayCare bg-gradient-to-b from-[#98F2E1] to-transparent flex flex-col justify-center items-center border border-[#98F2E1] p-4 rounded-md w-[150px] h-[180px]">
                <img src={DayCare} className="w-[70px] h-[70px] object-contain" alt="DayCare" />
                <span>Daycare</span>
            </div>
            <div className="Training bg-gradient-to-b from-[#FFEE94] to-transparent flex flex-col justify-center items-center border border-[#FFEE94] p-4 rounded-md w-[150px] h-[180px]">
                <img src={Training} className="w-[70px] h-[70px] object-contain" alt="Training" />
                <span>Training</span>
            </div>
            <div className="Hyginic  bg-gradient-to-b from-[#98F2E1] to-transparent flex flex-col justify-center items-center border border-[#98F2E1] p-4 rounded-md w-[150px] h-[180px]">
                <img src={Hyginic} className="w-[70px] h-[70px] object-contain" alt="Hyginic" />
                <span>Hyginic care</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
