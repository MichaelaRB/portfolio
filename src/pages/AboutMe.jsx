import  photo  from "../assets/photo.jpg";

export default function About() {
    return (
      <div class="d-flex justify-content-center">
                  <div class="card mb-3 w-50 p-5">
                    <div class="row no-gutters">
                      <div class="col-md-4">
                        <img src={photo} class="card-img photo" alt="A poor quickly taken photo of Michaela"/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">About Me</h5>
                            <p class="card-text">          
                            Two years ago I graduated from Washburn University with a bachelors of science in actuarial science and a minor in computer science.
                      During my time at Washburn, I began to develop a love for programming. My original focus was on object oriented programming using Java,
                      but in recent years I have taken up web development. Consequently, in March of 2023, I enrolled in the Code Bootcamp at Kansas University, 
                      an intensive 24 week program to develop my skills as a web developer. Through this I have found a path that I love and am very passionate about.
                      While I prefer remote work, I am open to either hybrid or fully in person jobs if the right opportunity presents itself. 
                          </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  