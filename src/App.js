import './App.css';
import { Greeting } from './Component/Greeting';
import { Message } from './Component/Message';
import { Button } from './Component/Button';
function App({greet}) {
  const ButtonClick = () => {
    console.log("Кнопка натиснута");
  };
  return (
    <div className="App">
      <Greeting name={greet}/>
      <Message text='Це - текст.'/>
      <Button onClick={ButtonClick}/>
    </div>
  );
}

export default App;
