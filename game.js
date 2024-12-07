
let usercount=0;
let compcount=0;
let choese=document.querySelectorAll(".choese");
let mag=document.querySelector("#mag");
let userpoint=document.querySelector("#userpoint");
let comppoint=document.querySelector("#comppoint");
let reset=document.querySelector("#reset");
let Userc=document.querySelector("#Userc");
let Compc=document.querySelector("#Compc");

reset.addEventListener("click",function(){
    compcount=0;
    comppoint.innerHTML=compcount;
    usercount=0;
    userpoint.innerHTML=usercount;

});

function gencompchoese(){
    let array=["rock","paper","scissors"];
    let comp=Math.floor(Math.random()*3);
    return(array[comp]);
};

function playwinner(win){
    if(win===true){
        mag.innerHTML="Winner Computer !";
        mag.style.backgroundColor="red";
        compcount++;
        comppoint.innerHTML=compcount;
    }else{
        mag.innerHTML="Winner User !";
        mag.style.backgroundColor="green";
        usercount++;
        userpoint.innerHTML=usercount;
    }
};

function gamedrop(){
    mag.innerHTML="Game is Drop Try agian !";
    mag.style.backgroundColor="darkviolet";
};

function Winner(compchoes,Userchoes){
    if(Userchoes===compchoes){
        gamedrop();
    }else{
        let win=true;
        if(Userchoes==="rock"){
             win=compchoes==="paper"?false:true;
        }else
            if(Userchoes==="paper"){
                win=compchoes==="scissors"?false:true;
            }else
                win=compchoes==="rock"?false:true; 
                Compc.innerHTML=compchoes;
                Userc.innerHTML=Userchoes;
                playwinner(win);
    }
};

function compchoese(){
    let compchoese=gencompchoese();
    return(compchoese);
};



choese.forEach((choese)=>{
    choese.addEventListener("click",function(){
        let Userchoes=choese.getAttribute("Id");
          let compchoes=compchoese();
          Winner(compchoes,Userchoes);
    });
});
    
