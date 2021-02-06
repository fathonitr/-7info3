const inputText = document.querySelector(".input-bar");
const addBtn= document.querySelector(".add-btn");
const table= document.querySelector(".table");
const checkbox=document.querySelector(".checked");



//console.log("test")

const toggleDone=(checkbox,id)=> {
  let xhr = new XMLHttpRequest();
  const action = checkbox.checked ? "done" : "reset";
  xhr.open("GET", `/api/todos/${id}/${action}`, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          console.log (xhr.responseText);
          document.getElementById("xhr_status").innerHTML = "XHR Response: "+xhr.responseText;
      }
  }
  xhr.send ();
}

const userInput = () => {
    inputText.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        addItem(inputText.value);
        inputText.value = ""; //Clear input bar
      }
    });
    addBtn.addEventListener("click", () => {
      addItem(inputText.value);
      inputText.value = ""; //Clear input bar
    });
  
    checkbox.addEventListener("click", (e)=>{
      toggleDone()
    })
  };

const addItem=(text)=>{
    const itemlist=`<tr>
    <td>${text}</td>
    <td><input type="checkbox"></td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", itemlist);
}
//console.log(table)
userInput();
export default userInput;