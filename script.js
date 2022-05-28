const form = document.querySelector("#animal-form");
form.addEventListener("submit", (ev)=>{
    ev.preventDefault()
    const animal = {
        name:ev.target.name.value,
        imgURL:ev.target.image_url.value,
        description:ev.target.description.value,
        donation: 0
    }
    createAnimal(animal)
        .then(newAnimal=>{
            console.log("Success", newAnimal);
        })
})