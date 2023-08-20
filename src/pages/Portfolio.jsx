import brewReview from '../assets/brewReview.png';
import weather from '../assets/weather.png';
import petFacts from '../assets/petFacts.png';
import passwordGen from '../assets/passwordGen.png';
import scheduler from '../assets/scheduler.png';
import git from '../assets/github-mark-white.png';
import globe from '../assets/globe.png';

export default function Blog() {
    return (
      <div>
        <h1>Portfolio</h1>
      <div class="container w-50 d-flex flex-wrap">
        <div class="card text-bg-dark mt-5">
          <img src={petFacts} class="card-img-top" alt="The deployed Pet Facts website."/>
            <div class="card-footer d-flex justify-content-around">
              <a href="https://michaelarb.github.io/pet-facts/"><img src={globe} alt="A white globe. Links to the deployed website."></img></a>
              <a href="https://github.com/MichaelaRB/pet-facts"><img src={git} alt="The GitHub logo. Links to the repository."></img></a>
          </div>
        </div>
        <div class="card text-bg-dark mt-5">
          <img src={brewReview} class="card-img-top" alt="The deployed Brew Review website."/>
            <div class="card-footer d-flex justify-content-around">
            <a href= "https://brewreview-c780e18c5286.herokuapp.com/"><img src={globe} alt="A white globe. Links to the deployed website."></img></a>
              <a href="https://github.com/JohnDallasMoore/BrewReview"><img src={git} alt="The GitHub logo. Links to the repository."></img></a>
            </div>
        </div>
        <div class="card text-bg-dark mt-5">
          <img src={scheduler} class="card-img-top" alt="The deployed Work Scheduler website."/>
            <div class="card-footer d-flex justify-content-around">
              <a href="https://michaelarb.github.io/daily-schedule/"><img src={globe} alt="A white globe. Links to the deployed website."></img></a>
              <a href="https://github.com/MichaelaRB/daily-schedule"><img src={git} alt="The GitHub logo. Links to the repository."></img></a>
          </div>
        </div>
        <div class="card text-bg-dark mt-5">
          <img src={passwordGen} class="card-img-top" alt="The deployed Password Generator website."/>
            <div class="card-footer d-flex justify-content-around">
              <a href="https://michaelarb.github.io/password-generator/"><img src={globe} alt="A white globe. Links to the deployed website."></img></a>
              <a href="https://github.com/MichaelaRB/password-generator"><img src={git} alt="The GitHub logo. Links to the repository."></img></a>
          </div>
        </div>
        <div class="card text-bg-dark mt-5">
          <img src={weather} class="card-img-top" alt="The deployed Weather Dashboard website."/>
            <div class="card-footer d-flex justify-content-around">
              <a href="https://michaelarb.github.io/weather-dashboard/"><img src={globe} alt="A white globe. Links to the deployed website."></img></a>
              <a href="https://github.com/MichaelaRB/weather-dashboard"><img src={git} alt="The GitHub logo. Links to the repository."></img></a>
          </div>
        </div>
        </div>
      </div>
    );
  }
  