
let inputt=document.querySelector('#input1');
let list=document.querySelector("#list-cont");
var inp=document.getElementById('input1');
var lisstt=document.getElementById('list-cont');
function addTask(){
    if(inp.value==''|inp.value==" "){
        alert("plese enter something")
    }else{
        let li=document.createElement('li');
        li.innerHTML=`${inp.value}<i></i>`;
        li.addEventListener("click",function(e){
            e.target.classList.toggle('done');
    })
    li.querySelector('i').addEventListener("click",function(){
        li.remove();
    })
    lisstt.appendChild(li);
    }
    inp.value='';
}
inputt.addEventListener("keyup" ,function (event){
    if(event.key=="Enter"){
        if (inputt.value==''){
            alert("plese enter something");
        }
        else{
            addItem(this.value);
            this.value='';
        }
    }
});
let addItem=(inputt) => {
    let listItem=document.createElement('li');
    listItem.innerHTML=`${inputt}<i></i>`;
    lisstt.addEventListener("click",function(e){
        e.target.classList.toggle('done');
    })
    listItem.querySelector('i').addEventListener("click",function(){
        listItem.remove();
    })
    lisstt.appendChild(listItem);
};
function deleteAll(){
    lisstt.remove();
}