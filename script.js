const light_mode_bg1="#e5e5e5";
const light_mode_bg2="#ffffff";
const light_mode_btn1_color="#0a3871";
const light_mode_btn2_color="#d8dfe8";
const light_mode_text1_color="#0a3871";
const light_mode_text2_color="#e5e5e5";

const dark_mode_bg1="#1a1a1a";
const dark_mode_bg2="#242424";

const input_text_area=document.getElementById('input-text');
const output_text_area=document.getElementById('output-text');
const empty_output_section=document.getElementById('empty-output-section');
const output_section=document.getElementById('output-section');
const encript_label=document.getElementById('function1-label');
const decript_label=document.getElementById('function2-label');

input_text_area.addEventListener('input',()=>{
    if(input_text_area.value==''){
        empty_output_section.style.display="flex";
        output_section.style.display="none";
        output_text_area.value=''
    }
    else{
        empty_output_section.style.display="none";
        output_section.style.display="flex";
    }
})

function set_dark_mode(){
    var r=document.querySelector(':root');
    r.style.setProperty('--primary-bg-color',dark_mode_bg1);
    r.style.setProperty('--secondary-bg-color',dark_mode_bg2);
}
function set_light_mode(){
    var r=document.querySelector(':root');
    r.style.setProperty('--primary-bg-color',light_mode_bg1);
    r.style.setProperty('--secondary-bg-color',light_mode_bg1);
}
function change_mode(){
    var checkBox=document.getElementById("darkmode-toggle");
    if(checkBox.checked==true)set_dark_mode();
    else set_light_mode()
}

function change_function(){
    var checkBox=document.getElementById('toggle-function');
    if(checkBox.checked==true){
        encript_label.style.backgroundColor="var(--primary-btn-color)";
        decript_label.style.backgroundColor="var(--primary-bg-color)";
        
    }
    else{
        encript_label.style.backgroundColor="var(--primary-bg-color)";
        decript_label.style.backgroundColor="var(--primary-btn-color)"
    }

}

function copy_text(){
    navigator.clipboard.writeText(output_text_area.value);
}

function encriptar(){
    output_text_area.value=input_text_area.value;
}
