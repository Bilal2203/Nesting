import './App.css';
import NestingExample from './example';
import { Home } from "./example";
import { Topics } from "./example";
import { Topic } from "./example";
import { Contacts } from "./example";

function App() {
  return (
    <div className="App">
      <NestingExample/>
      <Home/>
      <Topics/>
      <Topic/>
      <Contacts/>
    </div>
  );
}

export default App;
