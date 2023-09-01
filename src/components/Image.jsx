
import color from "../assets/images/color.svg";
// src/assets/Vector 1.png

const Image = () => {
    return ( 
        <div className="img-con">
            <marquee behavior="right, " direction="">
             <img src={color} alt="" />    
            </marquee>
           
        {/* <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div> */}
        </div>
     );
}
 
export default Image;