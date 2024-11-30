let user=0;
let comp=0;
let choices=document.querySelectorAll(".choice");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-choice");
let comscore=document.querySelector("#comp-choice");
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
     const userchoice=choice.getAttribute("id");
     playgame(userchoice);
    }
    )
});
const computer=()=>
{
    let arr=["Rock","Paper","Scissors"];
    const idx=Math.floor(Math.random()*3);
    return arr[idx];
}
const playgame=(userchoice)=>
{
  const computerchoice=computer();
  
  if(userchoice===computerchoice)
  {
    draw();
  }else
  {
    let userwin=true;
    if(userchoice=== "Rock")
    {
    userwin=computerchoice=== "Paper"?false:true;
    }
    else if(userchoice==="Paper")
    {
    userwin=computerchoice=== "Scissors"?false:true;
    }
    else
    {
    userwin=computerchoice=== "Rock"?false:true;
    }
    showwinner(userwin,userchoice,computerchoice);
  }

}
const draw=()=>
{
  msg.innerText="It was Draw";
}
const showwinner=(userwin,userchoice,computerchoice)=>
{
 if(userwin)
 {
    user++;
    userscore.innerText=user;
    msg.innerText=`You Win! Your ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor="green";

 }else
 {
    comp++;
    comscore.innerText=comp;
    msg.innerText=`You Lost! ${computerchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor="red";
 }
}