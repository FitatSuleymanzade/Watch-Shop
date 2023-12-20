const div = document.getElementById('apidiv')
const btn = document.getElementById('btn')
let page = 1
let limit = 3

async function getproducts() {
    let skip = (page = 1) * limit;
    try {
        const response = await axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}&skip=${skip}`)
        const data = response.data;
        db = response.data
        data.forEach(item => {
            const box = document.createElement('div')
            box.className = 'boxDiv'
            box.innerHTML = `
<img style="width:150px" src='${item.image}' alt="">
<p class='title' style="width:200px">${item.name}</p>
<p class='title' style="width:150px">${item.text}</p>
<button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>

`
            div.appendChild(box)
        })
        page++;
    }
    catch (error) {
        console.error('Error fetching products:', error)
    }
}






const butn = document.getElementById('butn')
const inpp = document.getElementById('inpp')
const list = document.querySelector('.list')
const srch = document.getElementById('srch')
const srchh = document.getElementById('srchh')





function findByName() {
    console.log("basildi");
    srch.style.display = "none";
    srchh.style.display = "block";
    axios
      .get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
      .then((res) => {
        db = res.data;
        console.log(db);
        let filteredData = db.filter(item => item.name.toLowerCase().startsWith(inpp.value))
        console.log(filteredData);

        filteredData.map((item) => {
          let myDiv = document.createElement("div");
          myDiv.className = "myDiv col-xl-12 col-lg-12 col-md-12 col-sm-12";
          myDiv.innerHTML = `
          <p>${item.name}</p>
         
          `;
          srchh.appendChild(myDiv);
        });
      });
  }

butn.addEventListener('click', findByName)






    btn.addEventListener('click',getproducts) 
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(db.find(item=>item.id==id))
    localStorage.setItem('cart',JSON.stringify(cart))
}
window.onload = ()=>{
    getproducts()
}








btn.addEventListener('click', getproducts)
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
window.onload = () => {
    getproducts()
}


const submit = document.getElementById('myFORM');
const girisugurluDiv = document.querySelector('.girisugurlu');

function axiosPost(event) {
    event.preventDefault();
    axios.post("https://northwind.vercel.app/api/customers", {
        ad: nameinput.value,
        phone: phoneinput.value,
        email: emailinput.value
    }).then(res => {
        console.log(res);

    });
}

myFORM.addEventListener('submit', axiosPost);

{

    const formControls = document.querySelectorAll('.form-control');


    const bosVarMi = Array.from(formControls).some(control => control.value === "");


    if (!bosVarMi) {
        girisugurluDiv.style.display = 'block';
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);

    }

}

