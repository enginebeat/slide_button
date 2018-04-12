//Make connection

//get the server IP Address for this socket
var serverIPAddress = location.hostname;
var serverPort = location.port
console.log(serverIPAddress);
console.log(serverPort);
var socket = io.connect('http://' + serverIPAddress + ':' + serverPort);

/* adds the global event handler 
it will return the class of the owner of the event, in
this case any of the switches. logic needs to be added 
to check if it is a switch thart got changed.
*/
function addGlobalEventHandler(){
    document.body.addEventListener("change", (event) => {        
        switchChanged(event.target.className);
    });
}

window.onload = initPage;

/* called when any of the switches is toggled */
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
    
}

socket.on('GPIOStatus', (data)=>{
    console.log(data);
    for (var gpioN in data){
        let switchN = `onoffswitch${gpioN.slice(6)}`;
        let state = data[gpioN];
        console.log(switchN);
        console.log(state);
        document.getElementById('my' + switchN).checked = state;   
    };
});

socket.on('disconnect', ()=>{
    console.log('Not Connected To The Server!');
    var sConnLabel = document.getElementById('s_connection_c');
    sConnLabel.id = "s_connection_d";
    sConnLabel.innerHTML = 'Not Connected To The Server!';
    //document.getElementById('s_connection').innerHTML = 'Not Connected To The Server!'

});

socket.on('connect', ()=>{
    console.log('Connected To The Server!');
    var sConnLabel = document.getElementById('s_connection_d');
    sConnLabel.id = "s_connection_c";
    sConnLabel.innerHTML = 'Connected To The Server!';
    //document.getElementById('s_connection').innerHTML = 'Connected To The Server!';
    requestGPIOStatus();
});