let price = 100;
    let quantity = 1;


    const sum = () =>{
      const total = document.getElementById("total");
      let gather = price * quantity;
      total.innerText = `
      ${gather};
      ` 
    }

const addToCart = () => {
    const cartContainer = document.getElementById("Cart");
    cartContainer.innerHTML = "";
    
        const Items = document.createElement('div');
        Items.className = 'Items';
    Items.innerHTML = `
    <div id="card" class="card bg-emerald-600/40 w-96 shadow-sm mx-auto">
  <div class="card-body">
    <div class="card-actions justify-end">
      <button onclick="deleteItem()" class="btn btn-square btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <h1 class="primary text-lg text-white">Cart Title</h1>
    <p class="text-white">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="flex justify-between">
    <p class="secondery text-xl text-white">${price}$ x <span id="amount">${quantity}</span></p>
    <div class="text-2xl text-white">
    <button onclick="addOne()"><i class="fa-solid fa-circle-plus"></i></button>
    <button onclick="deleteOne()"><i class="fa-solid fa-circle-minus"></i></button>
    </div>
    </div>
    <h1 class="text-white text-xl w-full secondery">Total : <span id="total">0</span></h1>
  </div>
</div>
    `

    cartContainer.append(Items);
}
    
const addOne = () => {
  let total = quantity += 1;
  const amount = document.getElementById("amount")
  amount.innerText = total;
  sum();
}

const deleteOne = () => {
  let total = quantity -= 1;
  const amount = document.getElementById("amount")
  amount.innerHTML = total;
  sum();
}

const dynamic = () => {
  const dynamic = document.querySelectorAll(".card")
  dynamic.forEach(btn =>{
    btn.addEventListener("click", () =>{
      addToCart()
    })
  })
}


const deleteItem = () =>{
  const del = document.getElementById("Cart");
  del.innerHTML = ""
}