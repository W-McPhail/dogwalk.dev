import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>William McPhail - Dog Walker EUS!</h1>
      <h2>Text 914-806-1544 to book!</h2>
      <p>I am a senior at Hunter College studying Computer Science. </p>
      <p>I have hosted dogs on Rover for 6 months and have a stellar record.</p>
      <p>I walk on Wag as well, but am attempting to move away from that platform.</p>
      <Calendar />
    </div>
  )
}

export default App