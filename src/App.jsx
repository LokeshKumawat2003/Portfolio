// import About from "./Components/about/About"
// import Footer from "./Components/Footer/Footer"
// import Github from "./Components/github/Github"
// import Home from "./Components/Home/Home"
// import Navbar from "./Components/navbar/Navbar"
// import Project from "./Components/project/Project"
// import Skill from "./Components/skill/Skill"

// function App() {


//   return (
//     <div style={{maxWidth:"1300px" ,margin:"auto"}}>

//       <Navbar/>
//       <Home/>
//       <About/>
//       <Skill/>
//       <Project/>
//       <Github/>
//       <Footer/>
//     </div>
//   )
// }

// export default App
import './app.css'
import Navbar from './Components/navbar/Navbar';
import Github from './Components/github/Github';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import Skill from './Components/skill/Skill';
import Project from './Components/project/Project';
import Footer from './Components/footer/Footer';
function App() {
  return (
    <div style={{ maxWidth: "1300px", margin: "auto", scrollBehavior: "smooth" }}>
      <Navbar />
      <div id="home" ><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skill /></div>
      <div id="projects"><Project /></div>
      <div id="Github"><Github /></div>
      <div id="contact"><Footer /></div>

    </div>
  );
}

export default App;
