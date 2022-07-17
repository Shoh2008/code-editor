let el = document.getElementById("el")
let r1 = document.getElementById("r1")
let r2 = document.getElementById("r2")
let r3 = document.getElementById("r3")
let r4 = document.getElementById("r4")
let r5 = document.getElementById("r5")
let r6 = document.getElementById("r6")
let r7 = document.getElementById("r7")
let r8 = document.getElementById("r8")
let r9 = document.getElementById("r9")
let r10 = document.getElementById("r10")
let r11 = document.getElementById("r11")
let r12_1 = document.getElementById("r12-1")
let r12_2 = document.getElementById("r12-2")
let r12_3 = document.getElementById("r12-3")
let r12_4 = document.getElementById("r12-4")
let r12_5 = document.getElementById("r12-5")
let r12_6 = document.getElementById("r12-6")

let inPxHeight = document.getElementById("inPxHeight");
let inPxWidth = document.getElementById("inPxWidth");
let inPxBRadius = document.getElementById("inPxBRadius");
let inPxBgColor = document.getElementById("inPxBgColor");
let inPxTLR = document.getElementById("inPxTLR");
let inPxTRR = document.getElementById("inPxTRR");
let inPxBLR = document.getElementById("inPxBLR");
let inPxBRR = document.getElementById("inPxBRR");
let inPxBpx = document.getElementById("inPxBpx");
let inPxStyle = document.getElementById("inPxStyle");
let inPxBColor = document.getElementById("inPxBColor");
let inBpxS = document.getElementById("inBpxS");
let inBpx1 = document.getElementById("inBpx1");
let inBpx2 = document.getElementById("inBpx2");
let inBpx3 = document.getElementById("inBpx3");
let inBpx4 = document.getElementById("inBpx4");
let inBC = document.getElementById("inBC");

let i1 = document.getElementById("i1")
let i2 = document.getElementById("i2")
let i3 = document.getElementById("i3")
let i4 = document.getElementById("i4")
let i5 = document.getElementById("i5")
let i6 = document.getElementById("i6")
let i7 = document.getElementById("i7")
let i8 = document.getElementById("i8")
let i9 = document.getElementById("i9")
let i12 = document.getElementById("i12")

r1.addEventListener("input" ,function(e){
    var rng=document.getElementById('r1');
    var p=document.getElementById('one');
    p.innerHTML=rng.value;
    el.style.height=`${rng.value}`+'px'
    inPxHeight.innerHTML=`${rng.value}`
    i1.style.display="block"
})

r2.addEventListener("input" ,function(e){
    var rng=document.getElementById('r2');
    var p=document.getElementById('two');
    p.innerHTML=rng.value;
    el.style.width=`${rng.value}`+'px'
    inPxWidth.innerHTML=`${rng.value}`
    i2.style.display="block"
})

r3.addEventListener("input" ,function(e){
    var rng=document.getElementById('r3');
    var p=document.getElementById('tree');
    p.innerHTML=rng.value;
    el.style.borderRadius=`${rng.value}`+'px'
    inPxBRadius.innerHTML=`${rng.value}`
    
    var r5=document.getElementById('r5');
    var r6=document.getElementById('r6');
    var r7=document.getElementById('r7');
    var r8=document.getElementById('r8');
    r5.value=`${rng.value}`
    r6.value=`${rng.value}`
    r7.value=`${rng.value}`
    r8.value=`${rng.value}`

    var p=document.getElementById('eight');
    p.innerHTML=rng.value;
    el.style.borderBottomRightRadius = `${rng.value}`+'px'
    inPxBRR.innerHTML=`${rng.value}`

    var p=document.getElementById('seven');
    p.innerHTML=rng.value;
    el.style.borderBottomLeftRadius = `${rng.value}`+'px'
    inPxBLR.innerHTML=`${rng.value}`

    var p=document.getElementById('six');
    p.innerHTML=rng.value;
    el.style.borderTopRightRadius = `${rng.value}`+'px'
    inPxTRR.innerHTML=`${rng.value}`

    var p=document.getElementById('five');
    p.innerHTML=rng.value;
    el.style.borderTopLeftRadius = `${rng.value}`+'px'
    inPxTLR.innerHTML=`${rng.value}`
 
    i3.style.display="block"
})

r4.addEventListener("input" ,function(e){
    var rng=document.getElementById('r4');
    var p=document.getElementById('four');
    p.innerHTML=rng.value;
    el.style.background=`${rng.value}`
    inPxBgColor.innerHTML=`${rng.value}`
    i4.style.display="block"
})

r5.addEventListener("input" ,function(e){
    var rng=document.getElementById('r5');
    var p=document.getElementById('five');
    p.innerHTML=rng.value;
    el.style.borderTopLeftRadius = `${rng.value}`+'px'
    inPxTLR.innerHTML=`${rng.value}`
    i5.style.display="block"
})

r6.addEventListener("input" ,function(e){
    var rng=document.getElementById('r6');
    var p=document.getElementById('six');
    p.innerHTML=rng.value;
    el.style.borderTopRightRadius = `${rng.value}`+'px'
    inPxTRR.innerHTML=`${rng.value}`
    i6.style.display="block"
})

r7.addEventListener("input" ,function(e){
    var rng=document.getElementById('r7');
    var p=document.getElementById('seven');
    p.innerHTML=rng.value;
    el.style.borderBottomLeftRadius = `${rng.value}`+'px'
    inPxBLR.innerHTML=`${rng.value}`
    i7.style.display="block"
})



r8.addEventListener("input" ,function(e){
    var rng=document.getElementById('r8');
    var p=document.getElementById('eight');
    p.innerHTML=rng.value;
    el.style.borderBottomRightRadius = `${rng.value}`+'px'
    inPxBRR.innerHTML=`${rng.value}`
    i8.style.display="block"
})

r9.addEventListener("input" ,function(e){
    var rng=document.getElementById('r9');
    var p=document.getElementById('nine');
    p.innerHTML=rng.value;
    el.style.border = `${rng.value}`+'px'
    inPxBpx.innerHTML=`${rng.value}`
    i9.style.display="block"
})
r10.addEventListener("input" ,function(e){
    var rngS=document.getElementById('r10');
    var p=document.getElementById('ten');
    p.innerHTML=rngS.value;
    el.style.borderStyle=`${rngS.value}`
    inPxStyle.innerHTML=`${rngS.value}`
})
r11.addEventListener("input" ,function(e){
    var rngC=document.getElementById('r11');
    var p=document.getElementById('eleven');
    p.innerHTML=rngC.value;
    el.style.borderColor=`${rngC.value}`
    inPxBColor.innerHTML=`${rngC.value}`
})