const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

form.addEventListener("submit", function (e) {
  // qayta yuklanish hodisasini o'chiradi
  e.preventDefault();

  // Agar user faqat space (bo'sh joylar) dan foydalangan bo'lsa form ishlamasligi kerak
  if (!input.value.trim()) {
    return;
  }
  
  // input.value - input ichidagi qiymatni olish

  const list_item = document.createElement("div");
  //   classlist - html elementlariga class qo'shish
  list_item.classList.add("list_item");
  //   innerHTML - js o'zgaruvchilari ichiga HTML kod qo'shadi
  list_item.innerHTML = `
        <div class="item_info">
            <input type="checkbox" class="checkbox">
            <p class="todo_item">${input.value}</p>
        </div>
        <button class="delete">
            <img src="./image/trash.svg" width="50" height="50"  alt="trash-img">
        </button>
    `;

  const checkbox = list_item.querySelector(".checkbox");
  const todo_item = list_item.querySelector(".todo_item");
  const remove_btn = list_item.querySelector(".delete");

  checkbox.addEventListener("change", () => {
    todo_item.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  remove_btn.addEventListener("click", () => {
    list_item.remove();
  });

  list.appendChild(list_item);
  input.value = "";
});
