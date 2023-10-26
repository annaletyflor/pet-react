
import style from './Banner.module.css'; 
import banner1 from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className={style.banner}>
      <img src={banner1} alt='Banner' /> 
    </div>
  );
}

export default Banner;
