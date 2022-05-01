import logo from './logo.svg';
import WorkCard from './components/work-card';
import { StyleGuide } from './theme/StyleGuide';
import NavBar from './components/nav-bar';
import './App.css';
import ContentContainer from './components/content-container';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <div className="App">
      <NavBar/>

    <ContentContainer>
      <WorkCard/>
    </ContentContainer>
  
    </div>
  );
}

export default App;
