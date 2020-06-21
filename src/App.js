import React from "react";
import ReactToPrint from "react-to-print";
import "./App.css";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <div className="resume" id="resume">
          <div
            className="left-content"
            style={{ backgroundColor: "rgb(229, 244, 243)" }}
          >
            <div className="name" style={{ color: "rgb(0, 150, 136)" }}>
              EJAZ BAIG MOGAL
            </div>
            <div className="contact" style={{ fontSize: "15px" }}>
              <div className="item">
                <p className="material-icons icon">location_on</p>
                <p className="text">Andhra Pradesh</p>
              </div>
              <div className="item">
                <p className="material-icons icon">phone</p>
                <p className="text">
                  <a href="tel:+917207504123">+917207504123</a>
                </p>
              </div>
              <div className="item">
                <p className="material-icons icon">email</p>
                <p className="text">
                  <a href="mailto:ebaig6@gmail.com">ebaig6@gmail.com</a>
                </p>
              </div>
              <div className="item">
                <i className="fab fa-linkedin icon"></i>
                <p className="text">
                  <a
                    href="https://www.linkedin.com/in/ebaig6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/ebaig6/
                  </a>
                </p>
              </div>
              <div className="item">
                <i className="fab fa-github icon"></i>
                <p className="text">
                  <a
                    href="https://www.github.com/Ejazbaig"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Ejazbaig
                  </a>
                </p>
              </div>
              <div className="item">
                <i className="material-icons icon">person</i>
                <p className="text">
                  <a
                    href="https://ejaz-portfolio.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ejaz-portfolio.netlify.app
                  </a>
                </p>
              </div>
            </div>
            <div className="skills">
              <p className="heading">
                <span className="material-icons">extension</span>Skills
              </p>
              <hr />
              <div className="skills-container">
                <div className="item">JavaScript</div>
                <div className="item">Java</div>
                <div className="item">C#</div>
                <div className="item">HTML5</div>
                <div className="item">CSS</div>
                <div className="item">SCSS</div>
                <div className="item">Bootstrap</div>
                <div className="item">React</div>
                <div className="item">Redux</div>
                <div className="item">Node.js</div>
                <div className="item">MySQL</div>
                <div className="item">MongoDB</div>
                <div className="item">OOPS</div>
                <div className="item">MVC</div>
                <div className="item">Git</div>
                <div className="item">Typescript</div>
                <div className="item">UI/UX Designing</div>
              </div>
            </div>
            <div className="languages">
              <p className="heading">
                <span className="material-icons">language</span>Languages
              </p>
              <hr />
              <div className="languages-container">
                <div className="item">
                  <div className="language">English</div>
                  <div className="level">
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                  </div>
                </div>
                <div className="item">
                  <div className="language">Hindi</div>
                  <div className="level">
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                  </div>
                </div>
                <div className="item">
                  <div className="language">Urdu</div>
                  <div className="level">
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                  </div>
                </div>
                <div className="item">
                  <div className="language">Telugu</div>
                  <div className="level">
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                  </div>
                </div>
                <div className="item">
                  <div className="language">Tamil</div>
                  <div className="level">
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star</div>
                    <div className="material-icons star">star_outline</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hobbies">
              <p className="heading">
                <span className="material-icons">extension</span>Hobbies
              </p>
              <hr />
              <div className="hobbies-container">
                <div>Playing Chess</div>
                <div>Travelling</div>
                <div>Solving Aptitude</div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="objective">
              <p className="heading">
                <span className="material-icons">assistant</span>Objective
              </p>
              <hr />
              <div className="item">
                Enthusiastic, Passionate Full Stack Developer and Designer with
                good communication and interpersonal skills with a focus on
                quality work and continuous improvement, looking for an
                opportunity to achieve long term career growth in Software
                Development.
              </div>
            </div>
            <div className="education">
              <p className="heading">
                <span className="material-icons">school</span>Education
              </p>
              <hr />
              <div className="row-table">
                <div className="left-column">
                  <p className="year">
                    <span className="fas fa-calendar-alt"></span>Jun 2015 - Jun
                    2019
                  </p>
                </div>
                <div className="right-column">
                  <p className="course">
                    B.Tech. (Computer Science &amp; Engineering)
                  </p>
                  <p className="institution">
                    B. S. A Crescent Institute Of Science And Technology
                  </p>
                  <p className="university"></p>
                </div>
              </div>
              <div className="row-table">
                <div className="left-column">
                  <p className="year">
                    <span className="fas fa-calendar-alt"></span>March 2013 -
                    March 2015
                  </p>
                </div>
                <div className="right-column">
                  <p className="course">12th (PCM)</p>
                  <p className="institution">Sri Gayatri Junior College</p>
                  <p className="university"></p>
                </div>
              </div>
              <div className="row-table">
                <div className="left-column">
                  <p className="year">
                    <span className="fas fa-calendar-alt"></span>March 2013
                  </p>
                </div>
                <div className="right-column">
                  <p className="course">10th / SSC</p>
                  <p className="institution">Nagarjuna Model School</p>
                  <p className="university"></p>
                </div>
              </div>
            </div>
            <div className="experience">
              <p className="heading">
                <span className="material-icons">business_center</span>
                Experience
              </p>
              <hr />
              <div className="row-table">
                <div className="left-column">
                  <p className="year">
                    <span className="fas fa-calendar-alt"></span>Jun 2019 - Jun
                    2020
                  </p>
                </div>
                <div className="right-column">
                  <p className="position">Graduate Engineer Trainee</p>
                  <p className="company">LTI</p>
                  <p className="description">
                    Worked on Client's Dashboard App using React, Redux,
                    JavaScript etc., JavaScript Programming, UI development,
                    Building Single Page Applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="certifications">
              <p className="heading">
                <span className="material-icons">card_membership</span>
                Certifications
              </p>
              <hr />
              <div className="row-table">
                <div className="left-column">
                  <p className="year">
                    <span className="fas fa-calendar-alt"></span>Jan 2019
                  </p>
                </div>
                <div className="right-column">
                  <p className="course">Business English Certification</p>
                  <p className="institution">Cambridge English</p>
                  <p className="description">
                    The certificate is based on the evaluation of English
                    Language conducted by Cambridge English.
                  </p>
                </div>
              </div>
              <div className="row-table">
                <div className="left-column">
                  <p className="year">
                    <span className="fas fa-calendar-alt"></span>Nov 2018
                  </p>
                </div>
                <div className="right-column">
                  <p className="course">Web Development</p>
                  <p className="institution">Udemy</p>
                  <p className="description">
                    The training program consisted of varoius Web Development
                    Technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="projects">
              <p className="heading">
                <span className="material-icons">integration_instructions</span>
                Personal Projects
              </p>
              <hr />
              <ul className="row-table">
                <li>
                  <span className="title">TODO App</span>
                  <span className="link">
                    <span className="fas fa-link"></span>
                    <a
                      href="https://ejaz-todo-app-react.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ejaz-todo-app-react.netlify.app/
                    </a>
                  </span>
                </li>
                <p className="description">
                  Todo App built using React, Redux with lots of
                  functionalities.
                </p>
              </ul>
              <ul className="row-table">
                <li>
                  <span className="title">Google Calendar Clone</span>
                  <span className="link">
                    <span className="fas fa-link"></span>
                    <a
                      href="https://ejaz-google-calendar.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ejaz-google-calendar.netlify.app/
                    </a>
                  </span>
                </li>
                <p className="description">A basic clone of Google Calendar.</p>
              </ul>
              <ul className="row-table">
                <li>
                  <span className="title">Dynamic Markdown Editor</span>
                  <span className="link">
                    <span className="fas fa-link"></span>
                    <a
                      href="https://ejaz-markdown-editor.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ejaz-markdown-editor.netlify.app/
                    </a>
                  </span>
                </li>
                <p className="description">
                  An Dynamic Markdown Editor with Bold and Italics Font.
                </p>
              </ul>
              <ul className="row-table">
                <li>
                  <span className="title">Rick and Morty Episode Search</span>
                  <span className="link">
                    <span className="fas fa-link"></span>
                    <a
                      href="https://rick-and-morty-episodes-api.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://rick-and-morty-episodes-api.netlify.app/
                    </a>
                  </span>
                </li>
                <p className="description">
                  Dynamic Search functionality while fetching data from an API.
                </p>
              </ul>
              <li className="repo_link">
                More projects on:<span className="fas fa-link"></span>
                <a
                  href="github.com/Ejazbaig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Ejazbaig
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#1">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default App;
