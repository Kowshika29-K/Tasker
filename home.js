var popone=document.getElementById("pop1")
var ca1=document.getElementById("c1")
var de1=document.getElementById("d1")
var taskone=document.getElementById("task-1")

function pop(){
    popone.style.display="block"   
}

ca1.onclick=function(){
    popone.style.display="none"
}

de1.onclick=function(){
    taskone.remove()
    popone.style.display="none"
}

var poptwo=document.getElementById("pop2")
var ca2=document.getElementById("c2")
var de2=document.getElementById("d2")
var tasktwo=document.getElementById("task-2")

function popOne(){
    poptwo.style.display="block"   
}

ca2.onclick=function(){
    poptwo.style.display="none"
}

de2.onclick=function(){
    tasktwo.remove()
    poptwo.style.display="none"
}

var popthree=document.getElementById("pop3")
var ca3=document.getElementById("c3")
var de3=document.getElementById("d3")
var taskthree=document.getElementById("task-3")

function popTwo(){
    popthree.style.display="block"   
}

ca3.onclick=function(){
    popthree.style.display="none"
}

de3.onclick=function(){
    taskthree.remove()
    popthree.style.display="none"
}

var checkOne=document.getElementById("onone")
var checkTwo=document.getElementById("ontwo")
var checkThree=document.getElementById("onthree")

var exOne=document.getElementById("ex-1")
var exTwo=document.getElementById("ex-2")
var exThree=document.getElementById("ex-3")

onone.style.display="none"
ontwo.style.display="none"
onthree.style.display="none"

document.getElementById("radioone").onclick=function(){
    if(checkOne.style.display==="none"){
        checkOne.style.display="block"
        exOne.style.textDecoration="line-through"
        exOne.style.color="gray"
    }
    else if(checkOne.style.display==="block"){
        checkOne.style.display="none"
        exOne.style.textDecoration="none"
        exOne.style.color="black"
    }
}


document.getElementById("radiotwo").onclick=function(){
    if(checkTwo.style.display==="none"){
        checkTwo.style.display="block"
        exTwo.style.textDecoration="line-through"
        exTwo.style.color="gray"
    }
    else if(checkTwo.style.display==="block"){
        checkTwo.style.display="none"
        exTwo.style.textDecoration="none"
        exTwo.style.color="black"
    }
}


document.getElementById("radiothree").onclick=function(){
    if(checkThree.style.display==="none"){
        checkThree.style.display="block"
        exThree.style.textDecoration="line-through"
        exThree.style.color="gray"
    }
    else if(checkThree.style.display==="block"){
        checkThree.style.display="none"
        exThree.style.textDecoration="none"
        exThree.style.color="black"
    }
}

document.getElementById("addone").style.display="none"

function addtask(){
    document.getElementById("addone").style.display="block"
}
    
document.getElementById("can").onclick=function(){
    document.getElementById("addone").style.display="none"
}



