import './App.css';
import data from './constant/data';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <h1>Personal Digital Assitants</h1>
      <div className='digitalAssistant'>
        {data.map((item) => {
          return (<ProfileCard {...item} />)
        })}
      </div>
    </div>
  );
}

export default App;
