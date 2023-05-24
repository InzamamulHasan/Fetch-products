let cont=document.getElementById("container");
cont.innerHTML="<div>Hiiii</div>"

async function fetchData(){
    try {
        let res=await fetch("https://dummyjson.com/products")
        let data=await res.json();
        console.log(data.products);
        display(data.products);
    } catch (error) {
        console.error("Error",err)
    }
}
fetchData();
function display(arr){
    arr.forEach((el) => {
        console.log(el)
        let div1=document.createElement("div");
        div1.setAttribute("class","el")
        div1.innerHTML=`<img src=${el.thumbnail} alt=${el.title}/><div><h1>${el.title}</h1><h2>Brand :: ${el.brand}</h2>
        <p>Category :: ${el.category}</p><p>Price :: ${el.price}$</p><p>Discount :: ${el.discountPercentage}%</p><p>Rating :: ${el.rating}</p></div>`
        cont.append(div1);
    });
}