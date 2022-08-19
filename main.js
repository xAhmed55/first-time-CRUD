

var ProdactName=document.getElementById("ProdactName");
var ProdactPrice=document.getElementById("ProdactPrice");
var ProdactCategory=document.getElementById("ProdactCategory");
var ProdactDesc=document.getElementById("ProdactDesc");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName("form-control")
var products=[];
if(JSON.parse (localStorage.getItem("productsList"))!=null){

    products= JSON.parse(localStorage.getItem("productsList"))
    desplay()

}


addBtn.onclick=function()
{
    addproduct()
    desplay()
    clearInputs()
}
function addproduct(){
    var product={
        name:ProdactName.value,
        price:ProdactPrice.value,
        category:ProdactCategory.value,
        desc:ProdactDesc.value
    }
    products.push(product);
    localStorage.setItem("productsList",JSON.stringify(products))
}
function desplay(){
    var cartona='';
    for(var i=0;i<products.length;i++){
        cartona+=`<tr>
        <td>${i+1}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick=deleteProdact(${i}) class="btn btn-danger">Delete</button>
        <td><button onclick=updateProdact(${i}) class="btn btn-warning">Update</button>
        </tr>`
    }
    document.getElementById("tablebody").innerHTML=cartona;
}
function clearInputs(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}
function deleteProdact(index){
    products.splice(index,1)
    desplay();
    localStorage.setItem("productsList",JSON.stringify(products))  

}
function search(val){

    var cartona='';
    for(var i=0;i<products.length;i++){
        if (products[i].name.toLowerCase().includes(val.toLowerCase()) ) {
            cartona+=`<tr>
        <td>${i+1}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick=deleteProdact(${i}) class="btn btn-danger">Delete</button>
        <td><button onclick=updateProdact(${i}) class="btn btn-warning">Update</button>
        </tr>`
            
        }

        
    }
    document.getElementById("tablebody").innerHTML=cartona;

}







