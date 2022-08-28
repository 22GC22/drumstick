import "./key.css";
import Display from "./display";
function Key(props){
    function sound(){
    var a = document.getElementById("sound");
    // ROW1
    if(props.name==="Q"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';
        // console.log(a);
        a.play();
        Display("Heater-1");
    }

    if(props.name==="W"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3';
        a.play();
        Display("Heater-2");
    }

    if(props.name==="E"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3';
        a.play();
        Display("Heater-3");
    }

    // ROW 2
    if(props.name==="A"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3';
        a.play();
        Display("Heater-4");
    }
    if(props.name==="S"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3';
        a.play();
        Display("Clap");
    }
    if(props.name==="D"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3';
        a.play();
        Display("Open HH");
    }

    // ROW 3
    if(props.name==="Z"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3';
        a.play();
        Display("Kick n Hat");
    }
    if(props.name==="X"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3';
        a.play();
        Display("Kick");
    }
    if(props.name==="C"){
        a.src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3';
        a.play();
        Display("Closed HH");
    }



    }
    return(<div className="key" onClick={sound}>
        <h1>{props.name}</h1>
        <audio id="sound" src=""></audio>
    </div>);
};

export default Key;