//! 09-dinamic-dom
//? "You have a variety of products with name, price and if it's on sale:\

//? const products = [
//?     { name: "Camisa", price: 25, onsale: true },
//?     { name: "Pantalón", price: 40, onsale: false },
//?     { name: "Zapatos", price: 60, onsale: true }
//? ];
//? Create a function that loops through that array and renders HTML cards like this inside a < div id = "products" >:
//? Each card should include: name, price, and a "On sale 🎉" text if the sale is true.
//? Use only pure JS and createElement, appendChild, etc. (no innerHTML).
//? Apply a.card class to each card(you can style it with CSS if you want).
//*-----------------------------------------------------------------
const products = [
    { name: "Camisa", price: 25, onsale: true },
    { name: "Pantalón", price: 40, onsale: false },
    { name: "Zapatos", price: 60, onsale: true }
];

const renderProducts = (products) => {
    const container = document.querySelector("#products");

    products.forEach((product) => {
        // Card creation
        const card = document.createElement("div");
        card.classList.add("card");

        // Name
        const name = document.createElement("h3");
        name.textContent = product.name;

        // Price
        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        // Onsale
        if (product.onsale) {
            const sale = document.createElement("p");
            sale.textContent = "On sale";
            sale.style.color = "green";
            card.appendChild(sale);
        }

        // Add elements to a card
        card.appendChild(name);
        card.appendChild(price);

        // Add card content to a container
        container.appendChild(card);
    });
};

renderProducts(products);
//*-----------------------------------------------------------------

const renderProductsShort = (products) => {
    const container = document.querySelector("#products");

    products.forEach(({ name, price, onsale }) => {
        const card = document.createElement("div");
        card.className = "card";

        // Literal string
        card.innerHTML = `
          <h3>${name}</h3>
          <p>Price: $${price}</p>
          ${onsale ? `<p style="color:green;">On sale </p>` : ""}
        `;

        container.appendChild(card);
    });
};

renderProductsShort(products);