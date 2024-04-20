import { Link } from 'react-router-dom';
import banner from '../assets/mainbanner.jpeg';

const Hero = () => {
  return (
    <div
      className="w-full py-44 hero min-h-96 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: '',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="w-full  text-neutral-content fade-in-fwd">
        <div className="w-1/2 px-5">
          <h1 className="text-4xl font-bold max-md:text-2xl text-[#f5eded]">
            Black Nana, Providing the quality brand!
          </h1>
          <p className="py-6 text-2xl max-md:text-lg text-[#f5eded]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/shop">
            <button
              className="button-27"
              role="button">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
