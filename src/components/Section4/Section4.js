import purplestar from "../../images/purplestart.png"
import manWoman from "../../images/manWoman.png"
import whiteStar from "../../images/whiteStar.png"


const Section4 = () => {
    return (
        <div>
            <div className=" flex mx-16">
                {/* image */}
                <div className=" pt-20">
                    <img className=" ml-36" width={30} height={36} src={purplestar} alt="star" />
                    <img className=" pt-10" width={710} height={587} src={manWoman} alt="man and woman" />
                    <img className="" width={30} height={32} src={whiteStar} alt="white star" />
                </div>

                {/* writeup */}
                <div>

                </div>
            </div>
        </div>
    );
}

export default Section4;