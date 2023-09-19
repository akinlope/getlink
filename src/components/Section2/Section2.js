import bulb from "../../images/bulb.png";
import star from "../../images/purplestart.png";


const Section2 = () => {
    return (
        <div>
            <div className=" flex py-20 justify-evenly border-b border-gray-600">
                {/* image */}
                <div className=" flex" >
                    <div >
                        <img className=" pt-40 mr-5" width={21} height={25} src={star} alt="star" />
                    </div>
                    <div className=" w-[490px] h-[477px]">
                        <img src={bulb} alt="bulb" />
                    </div>
                </div>
                {/* writeup */}
                <div className=" pt-32">
                    <div className=" flex">
                        <div >
                            <div className=" text-[32px] font-bold text-white">Introduction to getlinked</div>
                            <div className=" text-[32px] font-bold text-purp">tech Hackathon 1.0</div>
                        </div>
                        <div className=" ml-20 flex items-center">
                            <img width={30} height={32} src={star} alt="start" />
                        </div>
                    </div>
                    <div className=" text-white text-[14px] font-normal w-[535px]">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as <br />
                        clear as day: to shape the future. Whether you're a coding genius, a <br />
                        design maverick, or a concept wizard, you'll have the chance to transform <br />
                        your ideas into reality. Solving real-world problems, pushing the boundaries <br />
                        of technology, and creating solutions that can change the world, <br />
                        that's what we're all about!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;