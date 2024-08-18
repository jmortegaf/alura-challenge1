const light_mode_bg1="#e5e5e5";
const light_mode_bg2="#ffffff";
const light_mode_btn1_color="#0a3871";
const light_mode_btn2_color="#d8dfe8";
const light_mode_text1_color="#0a3871";
const light_mode_text2_color="#e5e5e5";

const dark_mode_bg1="#1a1a1a";
const dark_mode_bg2="#242424";
const dark_mode_btn1_color="";
const dark_mode_btn2_color="";
const dark_mode_text1_color="gray";
const dark_mode_text2_color="";




const input_text_area=document.getElementById('input-text');
const output_text_area=document.getElementById('output-text');
const empty_output_section=document.getElementById('empty-output-section');
const output_section=document.getElementById('output-section');
const encript_label=document.getElementById('function1-label');
const decript_label=document.getElementById('function2-label');
const function_checkBox=document.getElementById('toggle-function');
const toastBox=document.getElementById('toastBox')
var pasting_flag=false;

function encript_char(current_char){
    var encripted_char=''
    switch(current_char){
        case 'a':
            encripted_char='ai'
            break;
        case 'e':
            encripted_char='enter';
            break;
        case 'i':
            encripted_char='imes';
            break;
        case 'o':
            encripted_char='ober';
            break;
        case 'u':
            encripted_char='ufat';
            break
        default:
            encripted_char=current_char;
            break;
    }
    return encripted_char;
}
function encript_text(text){
    var encripted_text='';
    for(let i=0;i<text.length;i++)encripted_text+=encript_char(text.charAt(i));
    output_text_area.value=encripted_text;
}

function decript_text(text){
    console.log('hi');
    var decripted_text='';
    let error_flag=false
    let i=0;
    while(i<text.length && !error_flag){
        console.log(text.charAt(i))
        switch(text.charAt(i)){
            case 'a':
                if((i+1)>=text.length)error_flag=true;
                else if(text.charAt(i+1)!='i')error_flag=true;
                else i+=2;
                decripted_text+='a';
                break;
            case 'e':
                if((i+4)>=text.length)error_flag=true;
                else if(text.charAt(i+1)!='n' || text.charAt(i+2)!='t' || text.charAt(i+3)!='e' || text.charAt(i+4)!='r')error_flag=true;
                else i+=5;
                decripted_text+='e';
                break;
            case 'i':
                if((i+3)>=text.length)error_flag=true;
                else if(text.charAt(i+1)!='m' || text.charAt(i+2)!='e' || text.charAt(i+3)!='s')error_flag=true;
                else i+=4;
                decripted_text+='i';
                break;
            case 'o':
                if((i+3)>=text.length)error_flag=true;
                else if(text.charAt(i+1)!='b' || text.charAt(i+2)!='e' || text.charAt(i+3)!='r')error_flag=true;
                else i+=4;
                decripted_text+='o';
                break;
            case 'u':
                if((i+3)>=text.length)error_flag=true;
                else if(text.charAt(i+1)!='f' || text.charAt(i+2)!='a' || text.charAt(i+3)!='t')error_flag=true;
                else i+=4;
                decripted_text+='u';
                break;
            default:
                decripted_text+=text.charAt(i);
                i++;
                break
        }
        if(error_flag)decripted_text='Error: formato invalido';
    }
    output_text_area.value=decripted_text;
}


input_text_area.addEventListener('input',()=>{
    if(input_text_area.value==''){
        empty_output_section.style.display="flex";
        output_section.style.display="none";
        output_text_area.value=''
    }
    else{
        empty_output_section.style.display="none";
        output_section.style.display="flex";
        if(function_checkBox.checked==true)encript_text(input_text_area.value);
        else decript_text(input_text_area.value);
    }
})

input_text_area.addEventListener('paste',()=>{
    pasting_flag=true;
})


function set_dark_mode(){
    var r=document.querySelector(':root');
    r.style.setProperty('--primary-bg-color',dark_mode_bg1);
    r.style.setProperty('--secondary-bg-color',dark_mode_bg2);
    r.style.setProperty('--primary-text-color',dark_mode_text1_color);

}
function set_light_mode(){
    var r=document.querySelector(':root');
    r.style.setProperty('--primary-bg-color',light_mode_bg1);
    r.style.setProperty('--secondary-bg-color',light_mode_bg2);
    r.style.setProperty('--primary-text-color',light_mode_text1_color);
}
function change_mode(){
    var checkBox=document.getElementById("darkmode-toggle");
    if(checkBox.checked==true)set_dark_mode();
    else set_light_mode()
}

function change_function(){
    if(function_checkBox.checked==true){
        encript_label.style.backgroundColor="var(--primary-btn-color)";
        decript_label.style.backgroundColor="var(--primary-bg-color)";
        encript_text(input_text_area.value);
    }
    else{
        encript_label.style.backgroundColor="var(--primary-bg-color)";
        decript_label.style.backgroundColor="var(--primary-btn-color)"
        decript_text(input_text_area.value);
    }

}

function copy_text(){
    navigator.clipboard.writeText(output_text_area.value);
    show_copy_toast();
}

function encriptar(){
    output_text_area.value=input_text_area.value;
}
async function paste_text(){
    const text=await navigator.clipboard.readText();

    if(text!=''){
        empty_output_section.style.display="none";
        output_section.style.display="flex";
        input_text_area.value=text;
        if(function_checkBox.checked)encript_text(text);
        else decript_text(text);
    }
    else{
        if(input_text_area.value==''){
            empty_output_section.style.display="flex";
            output_section.style.display="none";        
        }
    }
}
function clear_input(){
    input_text_area.value='';
    output_text_area.value=''
    empty_output_section.style.display="flex";
    output_section.style.display="none";

}

function show_copy_toast(){
    let toast=document.createElement('div')
    toast.classList.add('toast');
    toast.innerHTML='Texto Copiado';
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },400);
}
