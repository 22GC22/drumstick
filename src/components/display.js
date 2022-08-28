function Display(props){
    if(Object.keys(props).length === 0){
        props = "Play";
    }
    else{
        document.getElementById("text").innerHTML = props;
        console.log(props);
    }
    return (<div className="display">
        <h1 id="text">{props}</h1>
    </div>);
}

export default Display;