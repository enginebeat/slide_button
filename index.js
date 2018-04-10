var switch3= document.getElementById('myonoffswitch3');
var switch5= document.getElementById('myonoffswitch5');
var switch7= document.getElementById('myonoffswitch7');
var switch8= document.getElementById('myonoffswitch8');
var switch10= document.getElementById('myonoffswitch10');
var switch11= document.getElementById('myonoffswitch11');
var switch12= document.getElementById('myonoffswitch12');
var switch13= document.getElementById('myonoffswitch13');
var switch15= document.getElementById('myonoffswitch15');
var switch16= document.getElementById('myonoffswitch16');
var switch18= document.getElementById('myonoffswitch18');
var switch19= document.getElementById('myonoffswitch19');
var switch21= document.getElementById('myonoffswitch21');
var switch22= document.getElementById('myonoffswitch22');
var switch23= document.getElementById('myonoffswitch23');
var switch24= document.getElementById('myonoffswitch24');
var switch26= document.getElementById('myonoffswitch26');
var switch29= document.getElementById('myonoffswitch29');
var switch31= document.getElementById('myonoffswitch31');
var switch32= document.getElementById('myonoffswitch32');
var switch33= document.getElementById('myonoffswitch33');
var switch35= document.getElementById('myonoffswitch35');
var switch36= document.getElementById('myonoffswitch36');
var switch37= document.getElementById('myonoffswitch37');
var switch38= document.getElementById('myonoffswitch38');
var switch40= document.getElementById('myonoffswitch40');




switch3.addEventListener('click', ()=>{
    switchChanged(switch3);
});

switch5.addEventListener('click', ()=>{
    switchChanged(switch5);
});
switch7.addEventListener('click', ()=>{
    switchChanged(switch7);
});
switch8.addEventListener('click', ()=>{
    switchChanged(switch8);
});
switch10.addEventListener('click', ()=>{
    switchChanged(switch10);
});
switch11.addEventListener('click', ()=>{
    switchChanged(switch11);
});
switch12.addEventListener('click', ()=>{
    switchChanged(switch12);
});
switch13.addEventListener('click', ()=>{
    switchChanged(switch13);
});
switch15.addEventListener('click', ()=>{
    switchChanged(switch15);
});
switch16.addEventListener('click', ()=>{
    switchChanged(switch16);
});
switch18.addEventListener('click', ()=>{
    switchChanged(switch18);
});
switch19.addEventListener('click', ()=>{
    switchChanged(switch19);
});
switch21.addEventListener('click', ()=>{
    switchChanged(switch21);
});
switch22.addEventListener('click', ()=>{
    switchChanged(switch22);
});
switch23.addEventListener('click', ()=>{
    switchChanged(switch23);
});
switch24.addEventListener('click', ()=>{
    switchChanged(switch24);
});
switch26.addEventListener('click', ()=>{
    switchChanged(switch26);
});
switch29.addEventListener('click', ()=>{
    switchChanged(switch29);
});
switch31.addEventListener('click', ()=>{
    switchChanged(switch31);
});
switch32.addEventListener('click', ()=>{
    switchChanged(switch32);
});
switch33.addEventListener('click', ()=>{
    switchChanged(switch33);
});
switch35.addEventListener('click', ()=>{
    switchChanged(switch35);
});
switch36.addEventListener('click', ()=>{
    switchChanged(switch36);
});
switch37.addEventListener('click', ()=>{
    switchChanged(switch37);
});
switch38.addEventListener('click', ()=>{
    switchChanged(switch38);
});
switch40.addEventListener('click', ()=>{
    switchChanged(switch40);
});

function switchChanged(switchName){
    
    switchInfo = {
        number: switchName.id.slice(13),
        state: switchName.checked
    }
    console.log(switchInfo.number);
    console.log(switchInfo.state);
}