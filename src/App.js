import Header from './components/Header';
import GoalsList from './components/GoalsList';
import Weather from './components/Weather';
import Quote from './components/Quote'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <div className="left">
          <GoalsList />
        </div>
        <div className="right">
          <div className="top">
            <Weather />
          </div>
          <div className="bottom">
            <Quote />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
