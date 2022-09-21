const btn = document.querySelector("#button1");
const inpt = document.querySelector("#input1");
const ul = document.querySelector("#list");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = inpt.value;
  const del = document.createElement("button");
const copmlete = document.createElement('input')
copmlete.type= 'checkbox'

  del.textContent = "delete";
  del.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  copmlete.addEventListener("change",()=>{
if(copmlete.checked){li.style.textDecoration="line-through"}
else{li.style.textDecoration="none"}

  })
  li.prepend(copmlete)
  li.append(del);
  ul.append(li);
  inpt.value = "";
});
