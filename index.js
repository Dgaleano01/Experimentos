let cat = document.getElementById("cat-dancing");
let boo = document.getElementById("asustar-btn");
let catHidden = false;

asustarGato=()=>{
    catHidden?cat.style.display="none":cat.style.display="block";
    catHidden = !catHidden;
}
