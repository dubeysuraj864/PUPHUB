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
import SpeaksBg from "../Images/speaks-bg.png";
import SpeaksDog from "../Images/speaks-dog.png";
import Food from "../Images/food.png";
import Bone from "../Images/bone.png";
import SpeaksPaw from "../Images/speaks-paw.png";
import BorderPaw from "../Images/paw-border.png";
import ManDog from "../Images/man-dog.png";

import TransparentBg from "../Images/transparent-bg.png";
import { Link } from "react-router-dom";
import Products from "./Products";

function Welcome() {
  return (
    <>
      <div className="welcome relative flex flex-col-reverse justify-around items-center md:flex-row overflow-hidden">
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
        <div className="welcome-right relative flex flex-col justify-center p-5 md:p-10">
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
      {/* services */}
      <div className="services p-4 my-10">
        <h1 className="ml-3 md:ml-[10%] border-b-2 w-max pb-1 border-black font-bold text-xl">
          Service Category
        </h1>
        <div className="services ml-3 md:ml-8 space-y-2 grid grid-cols-2 grid-rows-2 md:flex justify-center items-center mt-5 flex-wrap space-x-0 md:space-x-16">
          <div className="grooming bg-gradient-to-b from-[#98F2E1] to-transparent flex flex-wrap flex-col justify-center items-center border border-[#98F2E1] p-4 rounded-md w-[150px] h-[180px]">
            <img src={Grooming} className="w-[70px]" alt="grooming" />
            <span>Grooming</span>
          </div>
          <div className="HealthCare bg-gradient-to-b from-[#FFEE94] to-transparent flex flex-col justify-center items-center border border-[#FFEE94] p-4 rounded-md w-[150px] h-[180px]">
            <img
              src={HealthCare}
              className="w-[50px] h-[70px] object-contain"
              alt="HealthCare"
            />
            <span>Healthcare</span>
          </div>
          <div className="DayCare bg-gradient-to-b from-[#98F2E1] to-transparent flex flex-col justify-center items-center border border-[#98F2E1] p-4 rounded-md w-[150px] h-[180px]">
            <img
              src={DayCare}
              className="w-[70px] h-[70px] object-contain"
              alt="DayCare"
            />
            <span>Daycare</span>
          </div>
          <div className="Training bg-gradient-to-b from-[#FFEE94] to-transparent flex flex-col justify-center items-center border border-[#FFEE94] p-4 rounded-md w-[150px] h-[180px]">
            <img
              src={Training}
              className="w-[70px] h-[70px] object-contain"
              alt="Training"
            />
            <span>Training</span>
          </div>
          <div className="Hyginic  bg-gradient-to-b from-[#98F2E1] to-transparent flex flex-col justify-center items-center border border-[#98F2E1] p-4 rounded-md w-[150px] h-[180px]">
            <img
              src={Hyginic}
              className="w-[70px] h-[70px] object-contain"
              alt="Hyginic"
            />
            <span>Hyginic care</span>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="dogs-do-speaks h-[110vh] md:h-[90vh] py-10 flex flex-col md:flex-row justify-around items-center relative">
        <img
          src={BorderPaw}
          className="w-[70px]  absolute top-[30px] right-[10px]"
          alt="paw"
        />
        <div className="speaks-lef relative">
          <img
            src={Food}
            className="w-[60px] z-10 absolute -bottom-[20px] right-[90px]"
            alt="dog"
          />
          <img
            src={Bone}
            className="w-[40px] z-10 absolute top-[160px] left-[50px]"
            alt="dog"
          />
          <img
            src={SpeaksPaw}
            className="w-[40px] z-10 absolute top-[60px] left-[50px]"
            alt="dog"
          />
          <img
            src={SpeaksPaw}
            className="w-[40px] z-10 absolute -top-[30px] left-[150px]"
            alt="dog"
          />
          <img
            src={SpeaksPaw}
            className="w-[40px] z-10 absolute top-[60px] right-[90px]"
            alt="dog"
          />
          <div className="bg-dog relative ">
            <img
              src={SpeaksBg}
              className="w-[400px] absolute -z-10 top-0"
              alt="dog"
            />
            <img src={SpeaksDog} className="w-[420px] h-[420px] object-contain z-10" alt="dog" />
          </div>
        </div>
        <div className="speaks-right flex flex-col justify-start space-y-6 p-6 md:p-0">
          <h1 className="text-3xl font-bold break-words">
            Dogs do speak, but only to those <br /> who know how to listen.
          </h1>
          <p className="max-w-[520px]">
            Sweet roll ice cream powder candy canes ice cream donut pudding
            biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
            fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding
            biscuit caramels topb
          </p>
          <Button text="Explore More" />
        </div>
      </div>
      {/* --------------------- */}

      <div className="food my-10">
        <h1 className="ml-[10%] border-b-2 w-max pb-1 border-black font-bold text-xl">
          Dog Nutrients & Food
        </h1>
        <div className="flex justify-between items-center mx-[10%] my-10">
          <span className="font-bold text-xl">25 % OFF all Products </span>
          <Link to="/products">
            <Button text="Explore More" />
          </Link>
        </div>
        <div className="products  flex flex-wrap justify-around items-start">
          <Products />
        </div>
      </div>
      {/* ---------- */}
      <div className="dogs-do-speaks bg-gradient-to-b from-[#98f2e175] to-transparent h-[110vh] md:h-[120vh] py-10 flex flex-col md:flex-row-reverse justify-around items-center relative overflow-hidden">
        <img
          src={BorderPaw}
          className="w-[70px] absolute top-[30px] left-[100px]"
          alt="paw"
        />
        <div className="speaks-lef relative">
          <img
            src={Food}
            className="w-[60px] z-10 absolute -bottom-[60px] right-[90px]"
            alt="dog"
          />
          <img
            src={Bone}
            className="w-[40px] z-10 absolute top-[160px] left-[50px]"
            alt="dog"
          />
          <img
            src={SpeaksPaw}
            className="w-[40px] z-10 absolute top-[60px] left-[50px]"
            alt="dog"
          />
          <img
            src={SpeaksPaw}
            className="w-[40px] z-10 absolute -top-[30px] left-[150px]"
            alt="dog"
          />
          <img
            src={SpeaksPaw}
            className="w-[40px] z-10 absolute top-[60px] right-[90px]"
            alt="dog"
          />
          <div className="bg-dog relative ">
            <img
              src={SpeaksBg}
              className="w-[400px] absolute -z-10 -top-20"
              alt="dog"
            />
            <img src={ManDog} className="md:h-[500px] h-[300px] z-10" alt="dog" />
          </div>
        </div>
        <div className="speaks-right flex flex-col justify-start space-y-6 p-6 md:p-0">
          <h1 className="text-3xl font-bold break-words">
            No one appreciates the very <br /> special genius of your <br />{" "}
            conversation as the dog does.
          </h1>
          <p className="max-w-[520px]">
            No one appreciates the very special genius of your <br />{" "}
            conversation as the dog does.
          </p>
          <Button text="Explore More" />
        </div>
      </div>
      {/* ----------- */}
    </>
  );
}

export default Welcome;
