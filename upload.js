const form = document.getElementById("form")
const parentDiv = document.getElementById("result")

form.addEventListener('submit', function(event){
    event.preventDefault()
    let reader = new FileReader()
    let name = document.getElementById("image").files[0].name
    reader.addEventListener('load', function(){
        if (this.result && localStorage){
            window.localStorage.setItem(name, this.result)
            alert("IMAGE STORED IN LOCAL STORAGE")
            parentDiv.innerHTML = ''
            showImages()
        }else{
            alert("NOT STORED")
        }
    })
    reader.readAsDataURL(document.getElementById('image').files[0])
    console.log(name)
})

const showImages = () => {

    for (let i = 0; i < window.localStorage.length; i++){
        let res = window.localStorage.getItem(window.localStorage.key(i))
        let image = new Image()
        image.src = res;
        parentDiv.appendChild(image)
    }
}
showImages()
