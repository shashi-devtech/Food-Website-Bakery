var barnew = document.querySelector('#baricon');
var crossbtn = document.querySelector('#closebtn');

// var newmenu = document.querySelector('#rightMenu');

// console.log(barnew)

barnew.addEventListener(
    "click",
    function(){
        document.body.classList.add('open');
        barnew.style.display="none";
    }
)

crossbtn.addEventListener(
    "click",
    function(){
        document.body.classList.remove('open');
        barnew.style.display="";
    }
)

window.addEventListener(
    "scroll",
    function (e){
        if(window.scrollY >= 42){
            document.body.classList.add("sticky-nav");
        }
            else{
                document.body.classList.remove("sticky-nav");
            }
        }
)



var revSlider = document.querySelectorAll('.people-review-left');
console.log(revSlider)
count=0;

function nextChange(){
    if(revSlider.length-2==count) return
    count++
    for(content of revSlider){
        content.style.transform = `translateX(-${count*100}%)`;
    }
}

function prevChange(){
    if(count==0) return
    count--
    for(content of revSlider){
        content.style.transform = `translateX(-${count*100}%)`;
    }
}



var revSliderAbout = document.querySelectorAll('.people-review-left-about');
console.log(revSliderAbout)
count=0;

function nextChangeabout(){
    if(revSliderAbout.length-2==count) return
    count++
    for(content of revSliderAbout){
        content.style.transform = `translateX(-${count*100}%)`;
    }
}

function prevChangeabout(){
    if(count==0) return
    count--
    for(content of revSliderAbout){
        content.style.transform = `translateX(-${count*100}%)`;
    }
}


var allHeadings = document.querySelectorAll('.heading');
var allContents = document.querySelectorAll('.tab1');

console.log(allHeadings,"i")


allHeadings.forEach(
    function(head,index){
        head.addEventListener(
            'click',
            function(){
                allHeadings.forEach(
                    function(newHead, i){
                        if(i==index){
                            allContents[i].classList.add('opencontent');
                            console.log( allContents[i])
                        } else {
                            allContents[i].classList.remove('opencontent');
                        }
                    }
                )
            }
        )
    }
)