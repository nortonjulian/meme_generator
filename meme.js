const image = document.querySelector("#image");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#text");

const submit = document.getElementById("button")

submit.addEventListener('click', function(e){
    // const upperText = document.getElementById('topText').value = "";
    const imageUrl = document.getElementById('image').value

    const img = document.createElement('img');

    img.src = imageUrl
    // const write = document.createElement('topText')
    // topText.classList.add("topText");
    // topText.innerHTML = document.getElementById('topText').value



    document.body.appendChild(img);

});

