fonts = {
    'آبی':'Abi-Dot2-Regular.woff2',
    'علی بابا':'Alibaba-Regular.woff2',
    'کلمه ':'KalamehWebFaNum-Regular.woff2',
    'ایران یکان ':'iranyekanwebregular.woff2', 
    'پلاک ': 'PelakFA-Regular.woff2',
    'سمیم':'samim-bold.woff', 
    'لاله زار': 'LalezarRegular.ttf',
    'آوینی': 'aviny.ttf',
    'یکان بخ': 'YekanBakh-Regular.ttf',
    'هفتاد': 'Haftad.ttf',
    'پیکو پیک': 'picoopic-Regular.woff',
    'ایران سنس ':'IRANSANSWEB.TTF',
    'صاد ':'Saad.ttf',
    'باکری':'Bakeri.woff',
    'هد هد (نقطه گرد)':'Hodhod-Circle-Dots.ttf',
    'مربا':'Morabba-Regular.ttf',
    'پتک ':'Potk.ttf',
    'آریا ':'AriaWebFaNum-Regular.woff',
    'بهمن':'Bahman2.ttf',
    'استعداد ':'Estedad-Medium.ttf',
    'گلپایگانی':'SD-Golpayegani-Grunge.woff',
    // 'هیوا  ':'Hiva.ttf',
    'سرباز':'Sarbaz-Black.otf',
    ' کولاک    ':'ColakFAnum.ttf',

    'میرزا': 'Mirza-medium.ttf'
}
console.log("┌───────────────────────────────────────────────┐\
\n│   دنبال چه می گردی؟ اون رفته از این شهر    \n\
└───────────────────────────────────────────────┘");

var checkStatus;
var indicator = document.querySelector('#devtool-status');

var element = new Image();
Object.defineProperty(element, 'id', {
  get: function() {
    checkStatus='on';
    throw new Error("Dev tools checker");
  }
});

requestAnimationFrame(function check() {
  checkStatus = 'off';
  console.dir(element);
  indicator.className  = checkStatus;
  requestAnimationFrame(check);
});

Object.keys(fonts).forEach(function(key) {
    var value = fonts[key];
    // console.log(key + ": " + value);
    addStuff(key, value);
});

function addStuff(key, value) {
    
    let yourFontName = value.split("." )[0];
    let yourFontURL = "font/"+value;
    let yourFontFormat = value.split(".")[1];
    if (yourFontFormat.toLowerCase() == "ttf"){
        yourFontFormat="truetype";
    }else if(yourFontFormat = "otf") {
         yourFontFormat =  "opentype" ;      
    }
    var newStyle = document.createElement('style');
    
    newStyle.appendChild(document.createTextNode("\
    @font-face {\
        font-family: " + yourFontName + ";\
        src: url('" + yourFontURL + "') format('"+yourFontFormat +"');\
    }\
\
    ."+yourFontName+"{\
        font-family: '"+ yourFontName + "';\
    }\
    "));
    
    let elem = document.createElement("div");
    elem.classList.add("fontCard");
    elem.classList.add(yourFontName);
    elem.innerHTML = "\
            <p>قلم: <span class='fname'>"+ key +"</span></p>\
            <p class='demotext'>پیرزنی رفت به گردش</p>\
    ";
    document.getElementsByClassName("fontsprev")[0].appendChild(elem);
    
    document.head.appendChild(newStyle);
}


function grow() {
    // Convert the HTMLCollection to an array
    const elements = Array.from(document.getElementsByClassName("fontCard"));

    // Use forEach to increase font size
    elements.forEach((elem) => {
        var fontSize = window.getComputedStyle(elem).getPropertyValue("font-size");

        // Parse the font size to a number (removing "px" if present) and add 4
        var newSize = parseInt(fontSize, 10) + 2;
        
        // Apply the new font size
      
        if (newSize < 40){

            elem.style.fontSize = newSize + "px";
        }
    });
}


function shrink() {
    // Convert the HTMLCollection to an array
    const elements = Array.from(document.getElementsByClassName("fontCard"));

    // Use forEach to increase font size
    elements.forEach((elem) => {
        var fontSize = window.getComputedStyle(elem).getPropertyValue("font-size");

        // Parse the font size to a number (removing "px" if present) and add 4
        var newSize = parseInt(fontSize, 10) - 2;
        
        // Apply the new font size
        
        if (newSize > 10) {
            elem.style.fontSize = newSize + "px";

        }
        
    });
}



function changed(){
    let text = document.getElementsByClassName("text" )[0].value;

    let demos = document.getElementsByClassName("demotext");
    Array.from( demos    ).forEach((demo)=>{
        demo.innerHTML = text;
    }); 
    
}

