import BlurText from './Animations/BlurText';
import clock from '../assets/time.png';
const Home=()=>{
    return(
        <div>
        <BlurText
          text="Wanna create cool Portfolios?!"
          delay={150}
          animateBy="words"
          direction="top"
          className="infblur"
        />
        </div>
    );
}
export default Home;