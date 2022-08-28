import Key from "./keypad";
import './key.css';

function Keypad(props){
    return(<div>
    <div className="keypad">
        <div className="keyrow" >
            <Key name = "Q"  />
            <Key name = "A"  />
            <Key name = "Z"  />
        </div>
        <div className="keyrow" >
            <Key name = "W"  />
            <Key name = "S"  />
            <Key name = "X"  />
        </div>
        <div className="keyrow" >
            <Key name = "E"  />
            <Key name = "D"  />
            <Key name = "C"  />
        </div>

    </div>
    </div>);
};

export default Keypad;