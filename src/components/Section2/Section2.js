import bulb from "../../images/bulb.png";
import star from "../../images/purplestart.png";
import pinkStar from "../../images/pinkStar.png";
import arrow from "../../images/arrow.png";
import { motion } from "framer-motion";
import { blink } from "../../utils/variants";

const Section2 = () => {
  return (
    <div className="flex w-full py-20 border-b border-gray-600 justify-evenly">
      {/* image */}
      <div className="relative flex w-1/2 pl-40">
        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.8}
          className="absolute left-40"
        >
          <img
            className=""
            width={30}
            height={30}
            src={pinkStar}
            alt="pinkStar"
          />
        </motion.div>

        <div className=" w-[490px] h-[477px] relative">
          <img src={bulb} alt="bulb" />
          <p className="absolute font-bold text-center text-white capitalize -translate-x-1/2 top-1/2 left-1/2">
            the big <br />
            ideal
          </p>
        </div>
        <img
          className="absolute bottom-0 right-0"
          width={50}
          height={50}
          src={arrow}
          alt="arrow"
        />
      </div>

      {/* writeup */}
      <div className="w-1/2 pt-32 pl-16 space-y-5">
        <div className="flex ">
          <div className="-space-y-2">
            <div className=" text-[32px] font-bold text-white">
              Introduction to getlinked
            </div>
            <div className=" text-[32px] font-bold text-pinnk">
              tech Hackathon 1.0
            </div>
          </div>

          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={1.7}
            className="flex items-center ml-20 "
          >
            <img width={30} height={32} src={star} alt="start" />
          </motion.div>
        </div>

        <div className=" text-white text-[14px] font-normal w-[535px] leading-loose">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as <br />
          clear as day: to shape the future. Whether you're a coding genius, a{" "}
          <br />
          design maverick, or a concept wizard, you'll have the chance to
          transform <br />
          your ideas into reality. Solving real-world problems, pushing the
          boundaries <br />
          of technology, and creating solutions that can change the world,{" "}
          <br />
          that's what we're all about!
        </div>
      </div>
    </div>
  );
};

export default Section2;
