import './App.css';
import Button from './components/button/index';
import Footer from './components/footer/index';

function App() {
  return (
    <div className="App">
      <Button
        className="bg-purple text-[30px] p-3 xl:w-[300px] rounded"
        text={'apply now'}
      />
      <Footer />
    </div>
  );
}

export default App;
