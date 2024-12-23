import React, { useEffect, useRef, useState } from "react";
import "../Style/home.css";
import "../Style/home.res.css";
import { FaBars } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
const Home = () => {
  const lenageRef = useRef(null);
  const [inView, SetInView] = useState(false);
  const [bar, Setbar] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            SetInView(true);
          } else {
            SetInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (lenageRef.current) {
      observer.observe(lenageRef.current);
    }

    return () => {
      if (lenageRef.current) {
        observer.unobserve(lenageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const projectBoxes = document.querySelectorAll(".project-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    projectBoxes.forEach((box) => observer.observe(box));

    return () => {
      projectBoxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  const sidbar = () => {
    Setbar((prev) => !prev);
    console.log(bar);
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            SetInView(true);
          } else {
            SetInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        observer.unobserve(section1Ref.current);
      }
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    const photoUrl =
      "https://drive.google.com/uc?export=download&id=1vWW1Yo0P2HxZ97mYv-ypJLO_IUMBts4g";
    const link = document.createElement("a");
    link.href = photoUrl;
    link.setAttribute("download", "photo.jpg"); // Customize the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the link after download
  };

  return (
    <div>
      <nav>
        <div className="nav-head-box">
          <div className="nav-box">
            <div className="logo">
              <div className="img-logo">
                <img
                  src="https://i.pinimg.com/474x/b1/2d/9b/b12d9b6bedd2b57ab06f80b0b1e91a5d.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="bar-icons" onClick={sidbar}>
              <FaBars />
            </div>
            <div
              className="nav-links"
              style={{ right: bar ? "0" : "-100%" }}
              onClick={sidbar}
            >
              <a href="#About" onClick={() => scrollToSection(section1Ref)}>
                <li>About</li>
              </a>

              <a href="#Skills" onClick={() => scrollToSection(section2Ref)}>
                <li>Skills</li>
              </a>

              <a href="#Projects" onClick={() => scrollToSection(section3Ref)}>
                <li>Projects</li>
              </a>

              <a href="#Resume" onClick={handleDownload}>
                <li>Resume</li>
              </a>

              <a href="#Contact" onClick={() => scrollToSection(section4Ref)}>
                <li>Contact</li>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="about-box" ref={section1Ref}>
          <div className="profile-box">
            <div className="profile-image">
              <img
                src="https://masai-resume-builder-user-data.s3.ap-south-1.amazonaws.com/test/profile-image/65a537d3ff141f2712beaf26/Kk7S.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="name-box">
            <h1>
              Hi, <span> I am Lokesh Kumawat</span>
            </h1>
            <p>Full Stack Web Developer</p>

            <div className="summery-box-about">
              <span>
                A passionate programmer with a curious mind who loves solving
                problems. I have an experience of building Web applications with
                JavaScript / Reactjs / HTML / CSS etc. I'm currently actively
                looking for new opportunities
              </span>
            </div>

            <div className="about-logo">
              <div className="midiya-logo">
                <a href="https://github.com/LokeshKumawat2003">
                  {" "}
                  <FaGithub />
                </a>
                <a href="www.linkedin.com/in/lokesh-kumawat-6b7984305" target="_blanck">
                  <FaLinkedinIn />
                </a>
                <a href="mailto:lokeshkumawat288g@gmail.com">
                  <BiLogoGmail />
                </a>
              </div>
            </div>
            <div className="addres-box">
              <li>
                <FaLocationDot /> Rajasthan, India
              </li>
              <li>
                <IoIosPhonePortrait /> (+91) 9549809524
              </li>
            </div>

            <div className="resume-box">
              <a href="#">
                <button className="hover-button" onClick={handleDownload}>
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          ref={section2Ref}
          className={`skill-and-tool ${inView ? "in-view" : ""}`}
        >
          <div className="header">
            <h1>Skills And Tools</h1>
          </div>
          <div className="lenage">
            <div ref={lenageRef} className="lenage-box">
              <div className="lenage-name">
                <img
                  src="https://th.bing.com/th/id/OIP.ZNgBDR2Q1oaKnn07xaNG4wAAAA?pid=ImgDet&w=100&h=102&rs=1"
                  alt=""
                />
                <p>HTML5</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=100&h=100&rs=1"
                  alt=""
                />
                <p>CSS3</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=90&h=100&rs=1"
                  alt=""
                />
                <p>JAVASCRIPT</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg"
                  alt=""
                />
                <p>REACT</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://th.bing.com/th/id/OIP.yvi6B33dh1qkOz22drdl5wHaHe?pid=ImgDet&w=100&h=100&rs=1"
                  alt=""
                />
                <p>REDUX</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://th.bing.com/th/id/OIP.RW-y02a3rajC1QzQLKXAuwAAAA?pid=ImgDet&w=100&h=100&rs=1"
                  alt=""
                />
                <p>NODE JS</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://th.bing.com/th/id/OIP.1uP8wuxZmaKxVYrq1GpXeAAAAA?pid=ImgDet&w=100&h=100&rs=1"
                  alt=""
                />
                <p>MONGO DB</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://avatars0.githubusercontent.com/u/5658226?s=280&v=4"
                  alt=""
                />
                <p>EXPRESS</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://th.bing.com/th/id/OIP.PisgvQ7qnar--dmr6mCDUQHaHa?pid=ImgDet&w=100&h=100&rs=1"
                  alt=""
                />
                <p>GITHUB</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://yt3.ggpht.com/a/AGF-l791ySSDFwSHTYVjI0BMuuyqlFmiMutGcvcYcA=s900-c-k-c0xffffffff-no-rj-mo"
                  alt=""
                />
                <p>Postman</p>
              </div>

              <div className="lenage-name">
                <img
                  src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png"
                  alt=""
                />
                <p>Netlify</p>
              </div>

              <div className="lenage-name">
                <img
                  className="npm"
                  src="https://andrejgajdos.com/wp-content/uploads/2019/11/npm-logo.png?x24361"
                  alt=""
                />
                <p>NPM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="projects" ref={section3Ref}>
          <div className="project-header">
            <h1>PROJECTS</h1>
          </div>
          <div className="all-project">
            <div className="project-box">
              <div className="project-image">
                <img
                  src="https://yashuvaishnav.github.io/static/media/swiftPay.9ea4ed6e54417e4c79df.png"
                  alt=""
                />
              </div>
              <div className="project-info">
                <div className="prohect-name">
                  <h1>pharmEasy App</h1>
                </div>
                <div className="project-summery">
                  <p>
                  this is a pharmEasy web it is purchasing medicines for the this website I have done admin page with this application
                  </p>
                </div>
                <div className="demo-info">
                  <button className="hover-button2 hover-button">
                   
                    <a href="https://poetic-lebkuchen-6cf716.netlify.app/"> View Demo</a>
                  </button>
                  <button className="hover-button2 hover-button">
                    <a href="https://github.com/LokeshKumawat2003/pharmEasyServer"> View Source</a>
                   
                  </button>
                  <div className="project-leng">
                    <img
                      src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-box">
              <div className="project-image">
                <img
                  src="https://yashuvaishnav.github.io/static/media/swiftPay.9ea4ed6e54417e4c79df.png"
                  alt=""
                />
              </div>
              <div className="project-info">
                <div className="prohect-name">
                  <h1>Pokemon App</h1>
                </div>
                <div className="project-summery">
                  <p>
                  this is a Pokemon website it has infinite scrolling and filtering functionality
                  </p>
                </div>
                <div className="demo-info">
                  <button className="hover-button2 hover-button">
                    <a href="https://adorable-shortbread-c648ef.netlify.app/"> View Demo</a>
                  </button>
                  <button className="hover-button2 hover-button">
                    <a href="https://github.com/LokeshKumawat2003/Pivot"> View Source</a>
                   
                  </button>
                  <div className="project-leng">
                    <img
                      src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-box">
              <div className="project-image">
                <img
                  src="https://yashuvaishnav.github.io/static/media/swiftPay.9ea4ed6e54417e4c79df.png"
                  alt=""
                />
              </div>
              <div className="project-info">
                <div className="prohect-name">
                  <h1>multimart App</h1>
                </div>
                <div className="project-summery">
                  <p>
                  this is a multimart E-commerce website purchase your items
                  </p>
                </div>
                <div className="demo-info">
                  <button className="hover-button2 hover-button">
                    <a href="https://incomparable-gelato-605962.netlify.app/">  View Demo</a>
                  
                  </button>
                  <button className="hover-button2 hover-button">
                    <a href="https://github.com/LokeshKumawat2003">  View Source</a>
                  
                  </button>
                  <div className="project-leng">
                    <img
                      src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-box">
              <div className="project-image">
                <img
                  src="https://yashuvaishnav.github.io/static/media/swiftPay.9ea4ed6e54417e4c79df.png"
                  alt=""
                />
              </div>
              <div className="project-info">
                <div className="prohect-name">
                  <h1>swiftPay App</h1>
                </div>
                <div className="project-summery">
                  <p>
                    swiftPay is your all-in-one, secure payment application
                    designed to simplify your financial transactions and elevate
                    your money management experience. With a user-friendly
                    interface and cutting-edge security features, swiftPay
                    ensures hassle-free and worry-free payments. This was a
                    group project which was built by me and my team in span of
                    5-days using React, Redux, Styled component, CSS and
                    Recharts.
                  </p>
                </div>
                <div className="demo-info">
                  <button className="hover-button2 hover-button">
                    View Demo
                  </button>
                  <button className="hover-button2 hover-button">
                    View Source
                  </button>
                  <div className="project-leng">
                    <img
                      src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                    <img
                      src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>

        <div className="github">
          <div className="github-info">
            <div className="headr-git1">
              <h1>My Statistics</h1>
            </div>
            <div className="git1-image">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lokeshkumawat2003"
                alt=""
              />
              <br />
              <img
                src="https://github-readme-stats.vercel.app/api?username=Lokeshkumawat2003&show_icons=true&locale=en"
                alt=""
              />
              <br />
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Lokeshkumawat2003&"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="github2">
          <div className="github-info2">
            <div className="headr-git2">
              <h1>My Github Calender</h1>
            </div>
            <div className="git2-image">
              <img src="https://ghchart.rshah.org/Lokeshkumawat2003" alt="" />
              <br />
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Lokeshkumawat2003&theme=github_dark"
                alt=""
              />
              <br />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer" ref={section4Ref}>
        <div className="footer-content">
          <div className="midiya-logo">
            <FaGithub />
            <FaLinkedinIn />
            <BiLogoGmail />
          </div>
          <p>Rajasthan, India</p>
          <p>
            <a href="mailto:lokeshkumawat288g@gmail.com">
              lokeshkumawat288g@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+919549809524">(+91) 9549809524</a>
          </p>
          <p>©️ 2023, Lokesh Kumawat</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
