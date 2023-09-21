import chain from "../../images/chain.png";
import man from "../../images/man.png";
import globe from "../../images/globe.png";
import flare from "../../images/flare.png";
import whiteStar from "../../images/whiteStar.png";
import creative from "../../images/creative.png";
import RegistrationBtn from "../RegistrationBtn/RegistrationBtn";
import { HrLine } from "../General/icons";
import { BlueFlare, PurpleFlare } from "../General/flares";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  blink,
  fadeIn,
  globeRotate,
  slideIn,
  timer,
} from "../../utils/variants";

const Section1 = () => {
  const [typeEffect] = useTypewriter({
    words: ["HR Innovation"],
    typeSpeed: 100,
    loop: 5,
  });

  return (
    <div className="pl-24 border-b w-full border-gray-600 border-opacity-50 flex min-h-[500px]">
      {/* write-ups */}
      <div className="pt-[130px] relative w-1/2">
        <div className="absolute top-0 left-32">{PurpleFlare}</div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.4}
          className="absolute top-14 left-16"
        >
          <img src={whiteStar} alt="whiteStar" width={20} height={20} />
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.3}
          className="relative"
        >
          <img
            className="absolute -top-4 right-48"
            src={creative}
            alt="creative"
            width={35}
            height={35}
          />
          <p className="text-white text-[70px] font-bold font-clashDisplay">
            getlinked Tech
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.5}
          className="relative"
        >
          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={1.5}
            className="absolute right-0 opacity-50 -top-28"
          >
            <img src={whiteStar} alt="whiteStar" width={20} height={20} />
          </motion.div>

          <p className="-mt-5 text-white text-[70px] font-bold font-clashDisplay">
            Hackathon <span className=" text-pinnk">1.0</span>
          </p>
          <img
            className="absolute right-28 top-8"
            src={chain}
            alt="chain"
            width={60}
            height={60}
          />
          <img
            className="absolute right-16 top-12"
            src={flare}
            alt="flare"
            width={40}
            height={40}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.6}
          className=" text-white text-[18px] font-normal "
        >
          Participate in getlinked tech Hackathon 2023 stand <br />a chance to
          win a Big prize
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.8}
          className="mt-10 "
        >
          <RegistrationBtn text="Register" />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={1}
          className="absolute opacity-50 bottom-44 right-44"
        >
          <img src={whiteStar} alt="whiteStar" width={20} height={20} />
        </motion.div>

        <motion.div
          variants={timer}
          initial="initial"
          animate="animate"
          className="relative flex space-x-5 text-white mt-14"
        >
          <div className=" text-[60px] font-normal font-uniOne">
            00<span className=" text-[14px] mr-2">H</span>
          </div>
          <div className=" text-[60px] font-normal font-uniOne">
            00<span className=" text-[14px] mr-2">M</span>
          </div>
          <div className=" text-[60px] font-normal font-uniOne">
            00<span className=" text-[14px]">S</span>
          </div>
        </motion.div>
      </div>

      {/* image */}
      <div className="relative w-1/2 mt-6">
        <motion.div
          variants={fadeIn()}
          initial="initial"
          animate="animate"
          custom={0.5}
          className="absolute right-14"
        >
          <p className=" text-white text-[30px] font-bold italic">
            Igniting a Revolution in <span>{typeEffect}</span>
          </p>
          <p className="absolute w-[200px] right-0">{HrLine}</p>
        </motion.div>

        <motion.div
          variants={slideIn("right", "spring")}
          initial="initial"
          animate="animate"
          className="relative mt-20"
        >
          <div className="absolute z-10 left-36 top-16">{BlueFlare}</div>
          <img className="max-w-full saturate-0" src={man} alt="" />
          <motion.div
            variants={globeRotate}
            animate="animate"
            className="absolute top-0 left-0 z-20"
          >
            <img className="max-w-[80%]" src={globe} alt="globe" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
