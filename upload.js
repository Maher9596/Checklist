var form = document.getElementById("form")
var parentDiv = document.getElementById("result")
form.addEventListener('submit', function(event){
    event.preventDefault()
    var reader = new FileReader()
    var name = document.getElementById("image").files[0].name
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

function showImages() {
    for (let i = 0; i < window.localStorage.length; i++){
        let res = window.localStorage.getItem(window.localStorage.key(i))
        var image = new Image()
        image.src = res;
        parentDiv.appendChild(image)
    }
}
showImages()