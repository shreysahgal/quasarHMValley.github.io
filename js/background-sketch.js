var al = 100;
var ovalY = 375;

var a1 = 64;
var a2 = 10;
var a3 = -30;

var a1change = 1;
var a2change = -2;
var a3change = 0.5;

var scroll;
var scrollLimit;

var titlePos;

var blablabla, x, y;

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}

function updateAlpha() {
    al = map(scroll, 0, scrollLimit, 100, -300);
    if (al < 0) {
        al = 0
    }
}

// check if page has loaded (to make sure "body" isn't null)
function pageLoaded() {
    return document.readyState === "complete";
}

function setup() {

    if (pageLoaded) {
        scrollLimit = Math.max(document.body.scrollHeight,
            document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        
        blablabla = document.querySelector("#blablabla");
    }

    canvas = createCanvas(windowWidth, scrollLimit);
    canvas.style('z-index', '-1'); // put canvas in background
    canvas.position(0, 0);

    ellipseMode(CENTER);

    scroll = window.scrollY;
}

// when window is resized
function windowResized() {
    scrollLimit = Math.max(document.body.scrollHeight,
        document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    if (pageLoaded()) {
        blablabla = document.getElementById("blablabla");
//        console.log(rect.top, rect.left)
    }
    titlePos = document.getElementsByClassName("main").scrollTop;
    // console.log(titlePos);
    background(239, 239, 239);

    noStroke();

    // orange oval
    fill(255, 156, 0, al);
    push();
    translate(windowWidth / 2, ovalY)
    rotate(radians(a1));
    ellipse(0, 0, 650, 200);
    pop();

    // purple oval
    fill(207, 209, 255, al + 10);
    push();
    translate(windowWidth / 2, ovalY)
    rotate(radians(a2));
    ellipse(0, 0, 650, 200);
    pop();

    // pink oval
    fill(255, 185, 187, al);
    push();
    translate(windowWidth / 2, ovalY)
    rotate(radians(a3));
    ellipse(0, 0, 650, 200);
    pop();

    fill(0);
    textSize(30);

    // things that change (should be last)

    a1 += a1change;
    a2 -= a2change;
    a3 += a3change;

    scroll = window.scrollY; // update scroll loc.

    updateAlpha();
    
//    console.log(map(scroll, 0, scrollLimit, 1, 0));
    document.getElementById("fadescrollMain").style.opacity = map(scroll, 0, scrollLimit, 1, -5).toString();
    document.getElementById("fadescrollSub").style.opacity = map(scroll, 0, scrollLimit, 1, -5).toString();
}
