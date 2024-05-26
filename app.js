let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let tes = true;
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let msd = document.querySelector("#msg");

const winPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(tes){
            box.innerHTML = "X"
            tes = false
        }
        else{
            box.innerHTML = "O"
            tes = true
        }
        box.disabled = true;
        checkwinner()
    })
})
const resetgame = ()=>{
    tes = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratultions ${winner} you are the winner`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner= ()=>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log ("winner",pos1val)
                showWinner(pos1val)
            }
        }
    }
};

newGameBtn.addEventListener("click",resetgame)
btn.addEventListener("click",resetgame);