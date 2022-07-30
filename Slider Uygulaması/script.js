var models= [
    {
        name : 'HONDA',
        image : 'img/HONDA.jpg',
        link : 'https://tr.wikipedia.org/wiki/Honda'
    },
    {
        name : 'MASERATİ',
        image : 'img/MASERATİ.jpg',
        link : 'https://tr.wikipedia.org/wiki/Maserati'
    },
    {
        name : 'MERCEDES',
        image : 'img/MERCEDES.jpg',
        link : 'https://tr.wikipedia.org/wiki/Mercedes-Benz'
    },
    {
        name : 'RENAULT',
        image : 'img/RENAULT.jpg',
        link : 'https://tr.wikipedia.org/wiki/Renault'
    }, 
    {
        name : 'VOLVO',
        image : 'img/VOLVO.jpg',
        link : 'https://tr.wikipedia.org/wiki/Volvo'
    },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings ={
    duration : '2000',
    random : false
};

init(settings);

document.querySelector(".fa-solid.fa-circle-arrow-left").addEventListener("click",function(){
     index--;
     showSlide(index);
     console.log(index);
});


document.querySelector(".fa-solid.fa-circle-arrow-right").addEventListener("click",function(){
     index++;
     showSlide(index);
     console.log(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
})


function init(settings){
    var prev;
    interval = setInterval(function(){
    if(settings.random){
        do{
            index = Math.floor(Math.random()*slaytCount);
        }while(index == prev)
        prev=index; 
    }else{
        if(slaytCount==index+1){
            index=-1;
        }
        showSlide(index);
        index++;
    }  
    },settings.duration)

}


function showSlide(i){

    index =i;

    if (i<0){
        index = slaytCount-1;
    }
    if (i >= slaytCount){
        index = 0;
    }
    secili(index);
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".card-link").setAttribute("href",models[index].link);
}


function secili(index){
    console.log('index', index);
    console.log('index -1:', index -1);
    document.querySelector("#sec").children[index].style.color = "red";
    if(index -1 < 0){
        document.querySelector("#sec").children[slaytCount-1].style.color = "grey";
        return;
    }
    document.querySelector("#sec").children[index-1].style.color = "grey";
    
     
}