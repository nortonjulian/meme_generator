const form = document.querySelector('form');

form.addEventListener('submit', Submit)

function Submit(e){
    if(e){
        e.preventDefault();
    }

    let imageURL_element = document.querySelector("#imageURL").value;
    let topText = document.querySelector("#topText").value;
    let bottomText = document.querySelector("#bottomText").value;

    addMeme(imageURL_element, topText, bottomText);

    if(e){
        e.target.reset();
    }
}

function addMeme(imageURL_element, topText, bottomText){
    let newDiv = document.createElement('div');
    newDiv.classList.add('meme');

    // let img = document.createElement('img');
    // img.src = imageURL_element;
    // newDiv.appendChild(img);

    newDiv.style.backgroundImage = `url(${imageURL_element})`

    let top = document.createElement('p');
    top.innerText = topText;
    newDiv.classList.add('top');
    newDiv.appendChild(top);

    let bottom = document.createElement('p');
    bottom.innerText = bottomText;
    newDiv.appendChild(bottom);
    newDiv.classList.add('bottom');
    document.getElementById('memes').appendChild(newDiv);

    newDiv.addEventListener('click', Remove)
}

function Remove(e){
    e.target.parentElement.remove();
}



//User clicks on submit button
    //Retrieve all values user puts in the form

    //create a meme div

    //Create element content such as image tag, paragraph tag
    //That will be added inside of the meme div

    //Append the meme div
