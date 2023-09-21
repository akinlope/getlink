import grayStar from "../../images/whiteStar.png";
import lady from "../../images/lady.png";
import { PurpleFlare } from "../General/flares";

const Section3 = () => {
  return (
    <div className="relative border-b border-gray-700">
      <div className="absolute left-48 top-14">{PurpleFlare}</div>
      <div className="flex mx-16 ">
        {/* writeup */}
        <div className="mt-56 ml-20 ">
          <div className="flex ">
            <div className=" text-[32px] font-bold text-white">
              Rules and <br /> <span className=" text-purp">Guidelines</span>
            </div>
            <div className="ml-20 -mt-5 ">
              <img
                className=""
                width={26}
                height={32}
                src={grayStar}
                alt="graystar"
              />
            </div>
          </div>
          <div className=" w-[535px] h-[165px]">
            <p className=" text-[14px] font-normal text-white">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as <br />
              clear as day: to shape the future. Whether you're a coding genius,
              a <br />
              design maverick, or a concept wizard, you'll have the chance to
              transform <br />
              your ideas into reality. Solving real-world problems, pushing the
              boundaries <br />
              of technology, and creating solutions that can change the world,{" "}
              <br />
              that's what we're all about!
            </p>
          </div>
          <div className="relative ">
            <img
              className="absolute right-10"
              width={26}
              height={32}
              src={grayStar}
              alt="strat"
            />
          </div>
        </div>

        {/* img */}
        <div className=" w-[664px] h-[664px]">
          <img src={lady} alt="lady" />
        </div>
      </div>
      <div className="absolute right-32 bottom-28">{PurpleFlare}</div>
    </div>
  );
};

export default Section3;
