window.addEventListener('load',init);

function init(){
    document.getElementById('one').innerText = '';
    document.getElementById('two').innerText = '';
    document.getElementById('three').innerText = '';
    document.getElementById('four').innerText = '';
    document.getElementById('five').innerText = '';
    document.getElementById('six').innerText = '';
    document.getElementById('seven').innerText = '';
    document.getElementById('eight').innerText = '';
    document.getElementById('nine').innerText = '';
}

var flag = true;
function doXorZero(){
    if(this.innerText==''){
        if(flag==true){
            this.innerText='X';
        }else{
            this.innerText='0';
        }
        winOrLoose();
        flag = !flag;
    }
}

function winOrLoose(){
    //123,456,789,147,258,369,159,357
    console.log('check');
    if(document.getElementById('one').innerText==document.getElementById('two').innerText 
    && document.getElementById('one').innerText==document.getElementById('three').innerText){
        console.log("Win");
        //clearAll()
    }
}

function clearAll(){
    document.getElementById('one').innerText = '';
    document.getElementById('two').innerText = '';
    document.getElementById('three').innerText = '';
    document.getElementById('four').innerText = '';
    document.getElementById('five').innerText = '';
    document.getElementById('six').innerText = '';
    document.getElementById('seven').innerText = '';
    document.getElementById('eight').innerText = '';
    document.getElementById('nine').innerText = '';
}
