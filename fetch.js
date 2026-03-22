let res = window.fetch("https://fakestoreapi.com/products") // returns promise
console.log(res);

let res1 = res.then(val => console.log(val)) // response Object

let r = res.then(val =>val.json()) // response Object to (actual data) readable format

let sec = document.querySelector("section")
r.then(val =>{
    console.log(val)
    val.map(product => {
        sec.innerHTML += `<div class="card">
                            <div class = "image">
                                <img src = "${product.image}" height = "80" width = "80">
                            </div> 
                            <p><b>Product :</b> ${product.title} <br> 
                               <b>Rating : </b> ${product.rating.rate} <br> 
                               <b>Price : </b> &dollar; ${product.price} <br>
                               <b>Category :</b> ${product.category}
                            </p>
                          </div>`        
    })
})

