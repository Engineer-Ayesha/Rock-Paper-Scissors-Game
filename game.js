let userChoice;
let computerChoice;
let randomNumber;
let yourUpdation=0;
let computerUpdation=0;
let message=document.querySelector("#messageBox");
let yourScore=document.querySelector("#your-score");
let computerScore=document.querySelector("#computer-score");
let options=["rock","paper","scissor"];
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
rock.addEventListener("click",()=>{
    userChoice="rock";
    randomNumber=Math.floor(Math.random()*options.length);
    computerChoice=options[randomNumber];
    if(userChoice===computerChoice){
        message.innerHTML="<h2>It was draw</h2>"
        message.style.backgroundColor="black";
        message.style.width="200px";
        message.style.height="40px";
    }else if(userChoice==="rock" && computerChoice==="scissor" ||userChoice==="scissor" && computerChoice==="paper" ||userChoice==="paper" && computerChoice==="rock"){
        message.innerHTML="<h2>Congratulations! You won</h2>";
        message.style.backgroundColor="green";
        message.style.width="250px";
        message.style.height="60px";
        yourUpdation++;
        yourScore.innerText=yourUpdation;
    }else{
        message.innerHTML="<h2>OOps! you lost try again</h2>";
        message.style.backgroundColor="red";
        message.style.width="250px";
        message.style.height="60px";
        computerUpdation++;
        computerScore.innerText=computerUpdation;

    }
});
paper.addEventListener("click",()=>{
    userChoice="paper";
    randomNumber=Math.floor(Math.random()*options.length);
    computerChoice=options[randomNumber];
    if(userChoice===computerChoice){
        message.innerHTML="<h2>It was draw</h2>";
        message.style.backgroundColor="black";
        message.style.width="200px";
        message.style.height="40px";
    }else if(userChoice==="rock" && computerChoice==="scissor" ||userChoice==="scissor" && computerChoice==="paper" ||userChoice==="paper" && computerChoice==="rock"){
        message.innerHTML="<h2>Congratulations! You won</h2>";
        message.style.backgroundColor="green";
        message.style.width="250px";
        message.style.height="60px";
        yourUpdation++;
        yourScore.innerText=yourUpdation;
    }else{
        message.innerHTML="<h2>OOps! you lost try again</h2>";
        message.style.backgroundColor="red";
        message.style.width="250px";
        message.style.height="60px";
        computerUpdation++;
        computerScore.innerText=computerUpdation;

    }
});
scissor.addEventListener("click",()=>{
    userChoice="scissor";
    randomNumber=Math.floor(Math.random()*options.length);
    computerChoice=options[randomNumber];
    if(userChoice===computerChoice){
        message.innerHTML="<h2>It was draw</h2>";
        message.style.backgroundColor="black";
        message.style.width="200px";
        message.style.height="40px";
    }else if(userChoice==="rock" && computerChoice==="scissor" ||userChoice==="scissor" && computerChoice==="paper" ||userChoice==="paper" && computerChoice==="rock"){
        message.innerHTML="<h2>Congratulations! You won</h2>";
        message.style.backgroundColor="green";
        message.style.width="250px";
        message.style.height="60px";
        yourUpdation++;
        yourScore.innerText=yourUpdation;
    }else{
        message.innerHTML="<h2>OOps! you lost try again</h2>";
        message.style.backgroundColor="red";
        message.style.width="250px";
        message.style.height="60px";
        computerUpdation++;
        computerScore.innerText=computerUpdation;

    }
});