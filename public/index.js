//Make connection

//get the server IP Address for this socket
var serverIPAddress = location.hostname;
var serverPort = location.port
console.log(serverIPAddress);
console.log(serverPort);
var socket = io.connect('http://' + serverIPAddress + ':' + serverPort);

function addGlobalEventHandler(){
    document.body.addEventListener("change", (event) => {        
        switchChanged(event.target.className);
    });
}

window.onload = initPage;


function switchChanged(cName){
    searchPosition = cName.search('-');
    let switchName = cName.slice(0,searchPosition);
    let switchNumber = (switchName.length == 13? switchName.slice(searchPosition - 2) : switchName.slice(searchPosition - 1));
    switchInfo = {
        number: switchNumber,
        state: document.getElementById('my' + switchName).checked
    }
    socket.emit('switchChanged', switchInfo);
    console.log(switchInfo.number);
    console.log(switchInfo.state);
}

function requestGPIOStatus(){
    socket.emit('GPIORequest', {});
}


function initPage(){
    addGlobalEventHandler();
    requestGPIOStatus();
}

socket.on('GPIOStatus', (data)=>{
    console.log(data);
});