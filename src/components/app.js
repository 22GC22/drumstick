import Keypad from "./key";
import Display from "./display";
function App() {
    return(<div className="main">
    <h1>Drum Pad!</h1>
    <div className="drumpad">
        
        <Keypad />
        <Display />
    </div>
    </div>);
}

export default App;