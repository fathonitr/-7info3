const inputText = document.querySelector(".input-bar");
const addBtn= document.querySelector(".add-btn");
const table= document.querySelector(".table");



console.log("test")
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
  
  };

const addItem=(text)=>{
    const itemlist=`<tr>
    <td>${text}</td>
    <td><input type="checkbox"></td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", itemlist);
}
console.log(table)
userInput();
export default userInput;