
let btn_add = document.getElementById("btn-add")

let title_img = document.getElementById("title-image")
let image_img = document.getElementById("image-c")



btn_add.addEventListener("click", () => {
    fetch('https://66e7e69bb17821a9d9da6eb2.mockapi.io/ZeldaMonster', {
        method: 'POST',
        body: JSON.stringify({
            title: title_img.value,
            image: image_img.value,
        }),
        action:"index.html",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())

})

fetch('https://66e7e69bb17821a9d9da6eb2.mockapi.io/ZeldaMonster')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    
    data.map(item => {
        let div_content = document.createElement("div")
        let container = document.getElementById("container-2")
        div_content.setAttribute("class","div-card card col-lg-2 col-md-3")
        let name = document.createElement("h5")
        let image_mo = document.createElement("img")


        name.textContent = item.title
        image_mo.src = item.image


        container.appendChild(div_content)
        div_content.appendChild(name)
        div_content.appendChild(image_mo)

    })

})



