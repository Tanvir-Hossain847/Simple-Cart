const addToCart = () => {
    const cartContainer = document.getElementById("Cart");
    cartContainer.innerHTML = "";
    
        const Items = document.createElement('div');
        Items.className = 'Items';
    Items.innerHTML = `
    <div class="card bg-emerald-600/40 w-96 shadow-sm mx-auto">
  <div class="card-body">
    <div class="card-actions justify-end">
      <button class="btn btn-square btn-sm">
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
  </div>
</div>
    `

    cartContainer.append(Items);
}
    
    