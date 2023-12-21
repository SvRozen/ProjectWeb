const softs = [
    {
      "id": "1",
      "title": "Bitcoin-wallet",
      "vendor_code": "111",
      "description": "Услуга разработки",
      "price": 2500,
      "img": "./images/bitcoin-wallet.jpg"
    },
    {
      "id": "2",
      "title": "Smart-contract",
      "vendor_code": "222",
      "description": "Услуга разработки",
      "price": 5000,
      "img": "./images/smart-contract.jpg"
    },
    {
      "id": "3",
      "title": "Token",
      "vendor_code": "333",
      "description": "Услуга разработки",
      "price": 7500,
      "img": "./images/token.jpg"
    },
    {
      "id": "1",
      "title": "Bitcoin-wallet",
      "vendor_code": "111",
      "description": "Услуга разработки",
      "price": 2500,
      "img": "./images/bitcoin-wallet.jpg"
    },
    {
      "id": "2",
      "title": "Smart-contract",
      "vendor_code": "222",
      "description": "Услуга разработки",
      "price": 5000,
      "img": "./images/smart-contract.jpg"
    },
    {
      "id": "3",
      "title": "Token",
      "vendor_code": "333",
      "description": "Услуга разработки",
      "price": 7500,
      "img": "./images/token.jpg"
    }
]

async function getResponce() {
    const content = softs;
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text">${content[key].description}. Цена <p class="card-text font-weight-bold price">${content[key].price}</p> р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" min="0" max="3" name="amount" value="0"></p>
        </li>
                     `
    }


}
getResponce()
