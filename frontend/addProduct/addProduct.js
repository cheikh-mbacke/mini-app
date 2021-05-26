let form = document.getElementById('formSubmit');

form.addEventListener('submit', (e) =>{

    e.preventDefault();
    const newProduct = {
        name: form.elements.productName.value,
        description: form.elements.productDscription.value,
        imgAdress: form.elements.productImg.value,
        price:  form.elements.productPrice.value
    }
    
    fetch("http://10.31.8.23:3000/api/appreils", {

        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({newProduct})
        
          
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))


})
// body: JSON.stringify({newProduct})
// document.location.href=confirmation.html?idCommande=${response.orderId}&pseudo=${form.elements.firstName.value}