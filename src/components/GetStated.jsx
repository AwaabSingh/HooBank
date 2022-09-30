import styles from '../style';
import { arrowUp } from '../assets';

const GetStated = () => (
  <div
    className={`${styles.flexCenter} group w-[140px] 
    h-[140px] rounded-full bg-blue-gradient 
    p-[2px] cursor-pointer `}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full 
      transition-all duration-200 group-hover:animate-bounce `}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-popins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>

        <img
          src={arrowUp}
          className='w-[23px] h-[23px] object-contain'
          alt='hero'
        />
      </div>
      <p className='font-popins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
);

export default GetStated;
