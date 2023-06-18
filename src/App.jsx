import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>William McPhail - Dog Walker EUS!</h1>
      <h2>Text 914-806-1544 to book!</h2>
      <p>I am a senior at Hunter College studying Computer Science. </p>
      <p>I have hosted dogs on Rover for 6 months and have a stellar record.</p>
      <Calendar />
    </div>
  )
}

export default App