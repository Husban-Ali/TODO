// function addtodo(){
//     let textt = document.getElementById("todooo")
//     var todotask=todooo.value;
//      let createli=document.createElement("li")
//       createli.innerHTML=todotask
//       createli.style.color= '#F0FFFF'
//       console.log(createli)
// }



function addTask() {
  let taskinput = document.getElementById("taskinput");
  let taskinputValue = taskinput.value;

  if (taskinputValue.trim()) {
    let createLi = document.createElement("li");
    createLi.innerText = taskinputValue;
    let edtbtn = document.createElement("button");
    edtbtn.innerText = "Edit";
    edtbtn.style.marginLeft = "40px";
    createLi.appendChild(edtbtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    createLi.appendChild(deleteBtn);
    tl.appendChild(createLi);
    dltallbtn
.style.display = "inline-block";

    deleteBtn.addEventListener("click", function () {
      createLi.remove();
      if (tl.children.length === 0) {
        dltallbtn
    .style.display = "none";
      }
    });
    edtbtn.addEventListener("click", function () {
      let forEditText = createLi.childNodes[0].nodeValue;
      taskinput.value = forEditText;
      saveBtn.style.display = "inline-block";
      addBtn.style.display = "none";
      editedLI = createLi;
    });
    saveBtn.addEventListener("click", function () {
      saveBtn.style.display = "none";
      addBtn.style.display = "inline-block";
      editedLI.childNodes[0].nodeValue = taskinput.value;
    });
  } else {
    alert("Please Insert your task");
  }

  taskinput.value = "";
}

function dltall() {
  console.log(tl.children.length);
  if (tl.children.length > 0) {
    tl.innerHTML = null;
  }
  dltallbtn
.style.display = "none";
}
let addBtn = document.getElementById("addBtn");
let saveBtn = document.getElementById("saveBtn");
let todoList = document.getElementById("tl");
let dltallbtn = document.getElementById("dltallbtn");
let editedLI = null;

saveBtn.style.display = "none";
dltallbtn.style.display = "none";