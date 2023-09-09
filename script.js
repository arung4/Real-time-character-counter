const textareaEl=document.querySelector("#textarea"); 

const totalLength=document.querySelector("#total-char"); 

const deleteBtn=document.querySelector("#delete"); 

const remainingChr=document.querySelector("#remaining"); 

deleteBtn.addEventListener("click",()=>{
    textareaEl.value="";
    totalLength.innerText="00";
    remainingChr.innerText=500;
})

textareaEl.addEventListener("keyup",()=>{
    updateCount();
})

function updateCount(){
    totalLength.innerText=textareaEl.value.length;
    remainingChr.innerText=textareaEl.getAttribute("maxLength")-textareaEl.value.length;
}