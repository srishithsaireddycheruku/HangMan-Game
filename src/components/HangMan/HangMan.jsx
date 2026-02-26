import level1 from "../../assets/1.png";
import level2 from "../../assets/2.png";
import level3 from "../../assets/3.png";
import level4 from "../../assets/4.png";
import level5 from "../../assets/5.png";
import level6 from "../../assets/6.png";
import level7 from "../../assets/7.png";
import level8 from "../../assets/GameOver.png";

function HangMan({step}){
    const images = [level1,level2,level3,level4,level5,level6,level7,level8];
    return(
        <div className="w-[300px] h-[300px]">
            <img src={step>= images.length ? images[images.length - 1] : images[step]}/>
        </div>
    )
}

export default HangMan;