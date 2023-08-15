import brewReview from '../assets/brewReview.png';
import weather from '../assets/weather.png';
import petFacts from '../assets/petFacts.png';
import passwordGen from '../assets/passwordGen.png';
import scheduler from '../assets/scheduler.png';

export default function Blog() {
    return (
      <div>
        <h1>Portfolio</h1>
        <a href="https://michaelarb.github.io/pet-facts/"><img src={petFacts}></img></a>
        <a href="https://brewreview-c780e18c5286.herokuapp.com/"><img src={brewReview}></img></a>
        <a href="https://michaelarb.github.io/weather-dashboard/"><img src={weather}></img></a>
        <a href="https://michaelarb.github.io/daily-schedule/"><img src={scheduler}></img></a>
        <a href="https://michaelarb.github.io/password-generator/"><img src={passwordGen}></img></a>


        <a href="https://github.com/MichaelaRB/weather-dashboard"></a>
        <a href="https://github.com/MichaelaRB/pet-facts"></a>
        <a href= "https://github.com/JohnDallasMoore/BrewReview"></a>
        <a href= "https://github.com/MichaelaRB/daily-schedule"></a>
        <a href= "https://github.com/MichaelaRB/password-generator"></a>
      </div>
    );
  }
  