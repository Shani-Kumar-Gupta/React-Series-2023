import './App.css';
import data from './constant/data';
import ProfileCard from './components/ProfileCard';
import Header from './components/Header';

function App() {
  let title = 'Personal Digital Assitants';
  return (
    <div className="App">
      <Header className='text-3xl font-bold underline' title={title} />
      <div className='digitalAssistant'>
        {data.map((item) => {
          return (<ProfileCard {...item} />)
        })}
      </div>
    </div>
  );
}

export default App;
