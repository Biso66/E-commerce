// to make global array have data
var product = [];
// catsh class of div to push data to html
let item = document.getElementsByClassName("products");
// fetching data from api and make it array of object
async function funcName(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    // push data from local scope to global scope
    for (var i = 0; i < data.products.length; i++) {
      product.push(data.products[i]);
    }
    callProduct();
  } catch (error) {
    console.error(error);
    // handle error here, e.g. show an error message to the user
  }
}

funcName("https://dummyjson.com/products");

//////////////////////////////////////////////////////////////////////////////////////
//Looping to get items
function callProduct() {
  //  loop for make data in html
  for (let i = 0; i < product.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = product[i].description;
      let product_title = product[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${
            product[i].thumbnail
          }" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${product[i].category}</h4>
          <h4 class="product-brand">brand: ${product[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${product[i].price} $</h4>
          <h4 class="product-rating"> ${
            product[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            product[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}
// make array to add data Product to email cart then set it to localstorage
let SignIn = JSON.parse(localStorage.getItem("SignIn"));
let AllUsers = JSON.parse(localStorage.getItem("userData"));
function addToCart(i) {
  //want to get email index then push product[i] as array of object
  pro = product[i];
  let addProducts = JSON.parse(localStorage.getItem("products")) || [];
  for (let i = 0; i < AllUsers.length; i++) {
    if (AllUsers[i].email == SignIn) {
      for (let x = 0; x <= AllUsers[i].products.length; x++) {
        if (!AllUsers[i].products.find((p) => p.id === pro.id)) {
          AllUsers[i].products.push(pro);
        } else {
          // console.log("already added");
        }
      }
    }
  }
  localStorage.setItem("userData", JSON.stringify(AllUsers));
}

function goCart() {
  location.assign("addtocart.html");
}
//  for search bar
function searchName() {
  clear();
  let search = document.getElementById("searchInput").value.toLowerCase();
  let y = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].title.toLowerCase().includes(search)) {
      y.push(product[i]);
    } else {
    }
  }
  for (let i = 0; i < y.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = y[i].description;
      let product_title = y[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${y[i].thumbnail}" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${y[i].category}</h4>
          <h4 class="product-brand">brand: ${y[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${y[i].price} $</h4>
          <h4 class="product-rating"> ${
            y[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            y[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}

// for make filter by category
function lap() {
  clear();
  let a = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].category == "laptops") {
      a.push(product[i]);
      console.log(a);
    } else {
    }
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = a[i].description;
      let product_title = a[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${a[i].thumbnail}" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${a[i].category}</h4>
          <h4 class="product-brand">brand: ${a[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${a[i].price} $</h4>
          <h4 class="product-rating"> ${
            a[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            a[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}
/////////////////////////////////////////////////////////////////
function phone() {
  clear();
  let b = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].category == "smartphones") {
      b.push(product[i]);
      console.log(b);
    } else {
    }
  }
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = b[i].description;
      let product_title = b[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${b[i].thumbnail}" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${b[i].category}</h4>
          <h4 class="product-brand">brand: ${b[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${b[i].price} $</h4>
          <h4 class="product-rating"> ${
            b[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            b[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}
/////////////////////////////////////////////////////////////////
function fragrances() {
  clear();
  let c = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].category == "fragrances") {
      c.push(product[i]);
      console.log(c);
    } else {
    }
  }
  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = c[i].description;
      let product_title = c[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${c[i].thumbnail}" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${c[i].category}</h4>
          <h4 class="product-brand">brand: ${c[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${c[i].price} $</h4>
          <h4 class="product-rating"> ${
            c[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            c[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}
/////////////////////////////////////////////////////////////////
function skin() {
  clear();
  let d = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].category == "skincare") {
      d.push(product[i]);
      console.log(d);
    } else {
    }
  }
  for (let i = 0; i < d.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = d[i].description;
      let product_title = d[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${d[i].thumbnail}" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${d[i].category}</h4>
          <h4 class="product-brand">brand: ${d[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${d[i].price} $</h4>
          <h4 class="product-rating"> ${
            d[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            d[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}
/////////////////////////////////////////////////////////////////
function groceries() {
  clear();
  let e = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].category == "groceries") {
      e.push(product[i]);
      console.log(e);
    } else {
    }
  }
  for (let i = 0; i < e.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = e[i].description;
      let product_title = e[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${e[i].thumbnail}" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${e[i].category}</h4>
          <h4 class="product-brand">brand: ${e[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${e[i].price} $</h4>
          <h4 class="product-rating"> ${
            e[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            e[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}
/////////////////////////////////////////////////////////////////
function home() {
  clear();
  let f = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].category == "home-decoration") {
      f.push(product[i]);
      console.log(f);
    } else {
    }
  }
  for (let i = 0; i < f.length; i++) {
    for (let j = 0; j < item.length; j++) {
      let description = f[i].description;
      let product_title = f[i].title;
      item[j].innerHTML += `
        <div class="product">
          <img src="${f[i].thumbnail}" alt="" srcset="" class="product-img" />
          <h2 class="product-title">${
            product_title.length > 15
              ? product_title.substring(0, 15).concat(" ..")
              : product_title
          }</h2>
          <h4 class="product-category">Category: ${f[i].category}</h4>
          <h4 class="product-brand">brand: ${f[i].brand}</h4>
          <p class="product-description">${
            description.length > 54
              ? description.substring(0, 54).concat(" ...more")
              : description
          }</p>
          <h4 class="product-price">Price: ${f[i].price} $</h4>
          <h4 class="product-rating"> ${
            f[i].rating
          }<i class="fas fa-star"></i></h4><br>
          <a href="#!" dataProductId="${
            f[i].id
          }" onclick="addToCart(${i})" class="add-to-cart"><i class="fas fa-cart-arrow-down fa-lg" style="color: #ba1212;"></i></a>
          </div>`;
    }
  }
}
/////////////////////////////////////////////////////////////////
function clear() {
  for (let j = 0; j < item.length; j++) {
    item[j].innerHTML = "";
  }
}
