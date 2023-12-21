const sortAsc = () => {
    let softBusket = document.getElementById("node_for_insert");
    const products = Array.from(softBusket.getElementsByTagName("li"), (softCard) => {
        const title = softCard.querySelector(".card-title");
        return { title: title.textContent, element: softCard }
    });

    const sortedProducts = products.sort((a, b) => a.title > b.title ? 1 : -1);
    sortedProducts.forEach((product, i) => { product.element.style.order = i });
}

const filterPrice = (range) => {
    let softBusket = document.getElementById("node_for_insert");
    const products = Array.from(softBusket.getElementsByTagName("li"), (softCard) => {
        const price = softCard.querySelector(".price");
        return { price: +price.textContent, element: softCard }
    });

    const sortedProducts = products.sort((a, b) => {
        switch (range) {
            case "low":
                return a.price < b.price ? 1 : -1;
            case "high":
                return a.price > b.price ? 1 : -1;
        }
    });
    sortedProducts.forEach((product, i) => { product.element.style.order = i });
}