const imgs=document.querySelectorAll('.img a');
let imgId=1;
const imgdiv=document.querySelectorAll('.img');
imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imgId=img.dataset.id;
        
        imgdiv.forEach((img)=>{
            img.classList.remove('active');
        });
        img.parentElement.classList.add('active');

        moveImage();
    });
});

function moveImage(){
    const imgWidth=document.querySelector('.show-img img:first-child ').clientWidth;
    let Width=(imgId-1)*imgWidth;
    document.querySelector('.show-img').style.transform=`translateX(${-Width}px)`;


}

const minsbtn=document.querySelector('.minsbtn');
const addbtn=document.querySelector('.addbtn');
const qtyText=document.querySelector('#qty');

minsbtn.addEventListener('click',()=>{
    let qty=parseInt(qtyText.value);
    if(qty>0){
        qty--;
    }
    qtyText.innerText=qty;
});

addbtn.addEventListener('click',()=>{
    let qty=parseInt(qtyText.value);
    if(qty>0 && qty<5){
        qty++;
    }
    qtyText.innerText=qty;
});