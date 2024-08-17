
function change_mode(){
    var checkBox=document.getElementById("darkmode-toggle");
    var body=document.getElementsByTagName('body')[0];
    var r=document.querySelector(':root');
    if(checkBox.checked==true){
        r.style.setProperty('--color1','#242424')
    }
    else{
        // body.classList.remove('dark-mode-body');
        // body.classList.add('light-mode-body');
        r.style.setProperty('--color1','#e5e5e5')

    }
}