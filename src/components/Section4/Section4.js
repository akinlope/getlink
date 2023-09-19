import purplestar from "../../images/purplestart.png"
import manWoman from "../../images/manWoman.png"
import whiteStar from "../../images/whiteStar.png"
import RegistrationBtn from "../RegistrationBtn/RegistrationBtn";


const Section4 = () => {
    return (
        <div className=" border-b border-gray-600">
            <div className=" mx-16">
                <div className=" flex">
                    {/* image */}
                    <div className=" pt-20">
                        <img className=" ml-36" width={30} height={36} src={purplestar} alt="star" />
                        <img className=" pt-10" width={710} height={587} src={manWoman} alt="man and woman" />
                        <img className="" width={30} height={32} src={whiteStar} alt="white star" />
                    </div>

                    {/* writeup */}
                    <div className=" mt-20">
                        <div className=" text-[32px] font-bold text-white">Judging Criteria <br /><span className=" text-pinnk">Key attributes </span></div>
                        <div className=" text-white text-[14px] font-normal leading-[173.5%] mt-5">
                            <span className=" text-[#FF26B9] text-[16px] font-bold">Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the <br />
                            solution. Consider whether it addresses a real-world problem in a novel <br />
                            way or introduces innovative features.
                        </div>
                        <div className=" text-white text-[14px] font-normal leading-[173.5%] mt-5">
                            <span className=" text-[#FF26B9] text-[16px] font-bold">Functionality</span>: Assess how well the solution works. Does it perform its <br />
                            intended functions effectively and without major issues? Judges would <br />
                            consider the completeness and robustness of the solution.
                        </div>
                        <div className=" text-white text-[14px] font-normal leading-[173.5%] mt-5">
                            <span className=" text-[#FF26B9] text-[16px] font-bold">Impact and Relevance</span>: Determine the potential impact of the solution <br />
                            in the real world. Does it address a significant problem, and is it relevant <br />
                            to the target audience? Judges would assess the potential social, <br />
                            economic, or environmental benefits.
                        </div>
                        <div className=" text-white text-[14px] font-normal leading-[173.5%] mt-5">
                            <span className=" text-[#FF26B9] text-[16px] font-bold">Technical Complexity</span>: Evaluate the technical sophistication of the solution. <br />
                            Judges would consider the complexity of the code, the use of advanced <br />
                            technologies or algorithms, and the scalability of the solution.
                        </div>
                        <div className=" text-white text-[14px] font-normal leading-[173.5%] mt-5">
                            <span className=" text-[#FF26B9] text-[16px] font-bold">Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered <br />
                            to the rules and guidelines of the hackathon, including deadlines, use of <br />
                            specific technologies or APIs, and any other competition-specific requirements.
                        </div>

                        <div className=" mt-10">
                            <RegistrationBtn text="Read More" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Section4;