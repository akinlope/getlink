import chain from "../../images/chain.png"
import man from "../../images/man.png"
import globe from "../../images/globe.png"
import RegistrationBtn from "../RegistrationBtn/RegistrationBtn";

const Section1 = () => {
    return (
        <div className=" border-b border-gray-600">
            <div className=" flex">
                {/* write-ups */}
                <div className=" ml-16 pt-20 mt-10">
                    <div className=" text-white text-[80px] font-bold">getlinked Tech</div>
                    <div className=" -mt-5 flex text-white text-[80px] font-bold">Hackathon <span className=" text-pinnk">1.0</span> <img className=" ml-2" src={chain} alt="chain" width={84} height={84} /></div>
                    <div className=" text-white text-[20px] font-normal">Participate in getlinked tech Hackathon 2023 stand <br />
                        a chance to win a Big prize</div>
                    <div className=" mt-10">
                        <RegistrationBtn text="Register" />
                    </div>

                    <div className=" flex mt-20 text-white">
                        <div className=" text-[64px] font-normal">00<span className=" text-[14px] mr-2">H</span></div>
                        <div className=" text-[64px] font-normal">00<span className=" text-[14px] mr-2">M</span></div>
                        <div className=" text-[64px] font-normal">00<span className=" text-[14px]">S</span></div>
                    </div>

                </div>


                {/* image */}
                <div  className=" w-[828px] h-[715px] mt-6">
                    <div className=" text-white text-[36px] font-bold italic">Igniting a Revolution in HR Innovation</div>
                    <div className=" mt-5">
                        <img className=" pt-1 " src={man} alt="" />
                        {/* <img className=" " src={globe} alt="" /> */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Section1;