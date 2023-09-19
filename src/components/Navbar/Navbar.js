import RegistrationBtn from "../RegistrationBtn/RegistrationBtn";

const Navbar = () => {
    return (
        <div>
            <div className=" flex justify-between mx-16 mt-10">
                <div className=" text-[36px] font-bold">
                    {/* logo */}
                    <span className=" text-white">get<span className=" text-purp">linked</span></span>
                </div>

                {/* links */}
                <div className=" flex justify-between gap-24 items-center">
                    <div className=" cursor-pointer text-base font-normal">Timeline</div>
                    <div className=" cursor-pointer text-base font-normal">Overview</div>
                    <div className=" cursor-pointer text-base font-normal">FAQs</div>
                    <div className=" cursor-pointer text-base font-normal">Contact</div>
                    <div className=" cursor-pointer">
                        <RegistrationBtn text="Register" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;