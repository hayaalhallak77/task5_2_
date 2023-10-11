fetch('https://dummyjson.com/products')
.then(function(result)
{
  return result.json();
}).then(function(result){
  display(result.products);
})

//
var image=[
    "./assets/img/phono-slider-1.webp",
    "./assets/img/phono-slider-2.webp",
    "./assets/img/phono-slider-3.webp"
  ];
  
  var i=0;
  function slide(){
    document.getElementById("img1").src=image[i];
    if(i<(image.length-1))
         i++;
      else
      i=0;
  }
  setInterval(slide,1000);
 
  

  //start cards

function display(arr){
arr.forEach(function(item){
const card=document.querySelector(".cards");
const div1=document.createElement("div");
div1.classList='col-lg-3 col-md-4 col-sm-12';

const div2=document.createElement("div");
div2.classList='card';

const img=document.createElement("img");
img.src=item.images[0];
img.classList='card-img-top';


const div3=document.createElement("div");
div3.classList='card-body';

const h1=document.createElement("h3");
h1.classList='card-title';
h1.innerHTML=item.title;


const p=document.createElement("p");
p.classList='card-text';
p.innerHTML=item.rating;

const p1=document.createElement("p");
p1.classList='card-text';
p1.innerHTML=item.price;


div2.append(img);

div3.append(h1);
div3.append(p);
div3.append(p1);

div2.append(div3);

div1.append(div2);

card.append(div1);


});
}
const datafromlocalstorge=localStorage.getItem('data');