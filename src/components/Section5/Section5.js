import manThinking from "../../images/manThinking.png"
import purplestar from "../../images/purplestart.png"

const Section5 = () => {
    return (
        <div>
            <div className=" flex justify-between mt-10 mx-10">
                {/* writeups */}
                <div className=" ml-20 mt-10">
                    <div>
                        <img width={26} height={32} src={purplestar} alt="purple star" />
                    </div>
                    <div className=" mt-10">
                        <div className=" w-[253px] h-[86px] text-white text-[32px] font-bold">Frequently Ask <span className=" text-pinnk">Question</span></div>
                    </div>
                    <div className=" mt-5 w-[342px] h-[55px] text-white text-[14px] font-normal">
                        We got answers to the questions that you might <br />
                        want to ask about getlinked Hackathon 1.0
                    </div>

                    <div className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-10 flex justify-between items-center">
                        Can I work on a project I started before the hackathon? <span className=" text-[20px] font-normal text-pinnk ">+</span>
                    </div>
                    <div className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center">
                        What happens if I need help during the hackathon? <span className=" text-[20px] font-normal text-pinnk ">+</span>
                    </div>
                    <div className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center">
                        What happens if I don't have an idea for a project?<span className=" text-[20px] font-normal text-pinnk ">+</span>
                    </div>
                    <div className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center">
                        Can I join a team or do I have to come with one?<span className=" text-[20px] font-normal text-pinnk ">+</span>
                    </div>
                    <div className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center">
                        What happens after the hackathon ends<span className=" text-[20px] font-normal text-pinnk ">+</span>
                    </div>
                    <div className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center">
                        Can I work on a project I started before the hackathon?<span className=" text-[20px] font-normal text-pinnk ">+</span>
                    </div>

                </div>
                {/* image */}
                <div className=" w-[741px] h-[741px]">
                    <img width={741} height={741} src={manThinking} alt="man thinking" />
                </div>
            </div>
        </div>
    );
}

export default Section5;