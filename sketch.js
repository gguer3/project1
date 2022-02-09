function setup() {
    createCanvas(windowWidth, windowHeight);
  }

numDuck = 1;    //counter for number of ducks
let history = [];   //array to store history of data where the mouse has been
//splice array ?
oscillate = 0;  //variable for y coordinates of pond
by = 1;  //increment for variable above
  
function draw() {
    
    /*========================================================
        BACKGROUND */
    //LAND
    background(208, 240, 192);
    
    row = windowWidth/8;
    col = windowHeight/8;

    //grass
    noFill();
    stroke(79,166,79);
    strokeWeight(2);
    strokeJoin(BEVEL);

    beginShape();
    vertex(row-10, col-10);
    vertex(row, col);
    vertex(row+10, col-10);
    endShape();
    beginShape();
    vertex((4*row)-10, col-10);
    vertex((4*row), col);
    vertex((4*row)+10, col-10);
    endShape();
    beginShape();
    vertex((3*row)-10, (2*col)-10);
    vertex((3*row), (2*col));
    vertex((3*row)+10, (2*col)-10);
    endShape();
    beginShape();
    vertex((6*row)-10, (2*col)-10);
    vertex((6*row), (2*col));
    vertex((6*row)+10, (2*col)-10);
    endShape();
    beginShape();
    vertex((4*row)-10, (4*col)-10);
    vertex((4*row), (4*col));
    vertex((4*row)+10, (4*col)-10);
    endShape();
    beginShape();
    vertex((6*row)-10, (5*col)-10);
    vertex((6*row), (5*col));
    vertex((6*row)+10, (5*col)-10);
    endShape();
    beginShape();
    vertex((7*row)-10, (7*col)-10);
    vertex((7*row), (7*col));
    vertex((7*row)+10, (7*col)-10);
    endShape();
    beginShape();
    vertex((7*row)-10, (4*col)-10);
    vertex((7*row), (4*col));
    vertex((7*row)+10, (4*col)-10);
    endShape();
    beginShape();
    vertex((7*row)-10, col-10);
    vertex((7*row), col);
    vertex((7*row)+10, col-10);
    endShape();

    //POND
    // Define the curve points as JavaScript objects
    let p1 = { x: 0, y: (2*windowHeight)/8 };
    let p2 = { x: windowWidth/12, y:(2*windowHeight)/8 };
    let p3 = { x: (3*windowWidth)/12, y: (4*windowHeight)/8 };
    let p4 = { x: (4*windowWidth)/12, y: (3*windowHeight)/8 };
    let p5 = { x: (5*windowWidth)/12, y: (6*windowHeight)/8 };
    let p6 = { x: (7*windowWidth)/12, y: (6*windowHeight)/8 };
    let p7 = { x: (8*windowWidth)/12, y: (7*windowHeight)/8 };
    let p8 = { x: (9*windowWidth)/12, y: (9*windowHeight)/8};
    let p9 = { x: (7*windowWidth)/12, y: windowHeight };

    //shoreline
    fill(223,247,250);
    stroke(223,247,250);
    beginShape();
    curveVertex(p1.x,p1.y);
    curveVertex(p1.x,p1.y);
    curveVertex(p2.x,p2.y-10+oscillate);
    curveVertex(p3.x,p3.y-10+oscillate);
    curveVertex(p4.x,p4.y-10+oscillate);
    curveVertex(p5.x,p5.y-10+oscillate);
    curveVertex(p6.x,p6.y-10+oscillate);
    curveVertex(p7.x,p7.y-10+oscillate);
    curveVertex(p8.x,p8.y-10+oscillate);
    curveVertex(p9.x,p9.y-10+oscillate);
    curveVertex(p9.x,p9.y-10+oscillate);
    endShape();

    //water
    fill(173,216,230);
    stroke(173,216,230);
    triangle(p1.x, p1.y, 0, windowHeight, p9.x, p9.y);
    beginShape();
    curveVertex(p1.x,p1.y);
    curveVertex(p1.x,p1.y);
    curveVertex(p2.x,p2.y+oscillate);
    curveVertex(p3.x,p3.y+oscillate);
    curveVertex(p4.x,p4.y+oscillate);
    curveVertex(p5.x,p5.y+oscillate);
    curveVertex(p6.x,p6.y+oscillate);
    curveVertex(p7.x,p7.y+oscillate);
    curveVertex(p8.x,p8.y+oscillate);
    curveVertex(p9.x,p9.y+oscillate);
    curveVertex(p9.x,p9.y+oscillate);
    endShape();

    //wave motion
    if (oscillate == 50 || oscillate < 0){
        by = -by;
      }
      oscillate += by;
      console.log(oscillate);
    
    
    /*===========================================================
        DRAW DUCKS */
    //add data to the history array
    var v = createVector(mouseX, mouseY);
    history.push(v);

    //for loop for drawing ducks
    for (let i = 1; i <= numDuck; i++) {
      
      //mama duck
      if (i == 1) {
        
        xcoor = v.x;
        ycoor = v.y;
        
        //body
        strokeWeight(1);
        stroke(254, 226, 39);
        line(xcoor-25, ycoor, xcoor+25, ycoor);
        fill(254, 226, 39);
        arc(xcoor, ycoor, 50, 50, 0, PI);
        stroke(249, 166, 2);
        arc(xcoor, ycoor+12, 28, 12, 0, PI + QUARTER_PI, OPEN);
  
        //leg
        strokeWeight(3);
        stroke(255, 165, 0);
        line(xcoor, ycoor+25, xcoor, ycoor+37);
        fill(255, 165, 0);
        triangle(xcoor, ycoor+33, xcoor, ycoor+37, xcoor+6, ycoor+37);
  
        //neck
        strokeWeight(3);
        stroke(254, 226, 39);
        noFill();
        arc(xcoor+25, ycoor-5, 12, 10, 3 * PI / 2, PI / 2, OPEN);
        arc(xcoor+25, ycoor-15, 12, 10, PI / 2, 3 * PI / 2, OPEN);
  
        //head
        strokeWeight(1);
        stroke(254, 226, 39);
        fill(254, 226, 39);
        circle(xcoor+30, ycoor-25, 12);
        strokeWeight(2);
        stroke(0);
        point(xcoor+33, ycoor-28);
  
        //beak
        strokeWeight(1);
        stroke(255, 165, 0);
        fill(255, 165, 0);
        strokeJoin(ROUND);
        beginShape();
        vertex(xcoor+36, ycoor-25);
        vertex(xcoor+42, ycoor-22);
        vertex(xcoor+32, ycoor-19);
        endShape();
        stroke(0);
        curve(xcoor+36, ycoor-25, xcoor+42, ycoor-22, xcoor+34, ycoor-22, xcoor+36, ycoor-25);
      }

      //baby ducks
      else {
        
        pos = history[history.length-(10*i)];
        nextx = pos.x;
        nexty = pos.y;
        
        //body
        strokeWeight(0);
        stroke(254, 226, 39);
        line(nextx-10, nexty, nextx+10, nexty);
        fill(254, 226, 39);
        arc(nextx, nexty, 20, 20, 0, PI);
        strokeWeight(1);
        stroke(249, 166, 2);
        arc(nextx, nexty+5, 10, 4, 0, PI + QUARTER_PI, OPEN);
  
        //leg
        strokeWeight(2);
        stroke(255, 165, 0);
        line(nextx, nexty+10, nextx, nexty+16);
        fill(255, 165, 0);
        triangle(nextx, nexty+14, nextx, nexty+16, nextx+3, nexty+16);
  
        //neck
        strokeWeight(2);
        stroke(254, 226, 39);
        noFill();
        arc(nextx+10, nexty-2, 6, 4, 3 * PI / 2, PI / 2, OPEN);
        arc(nextx+10, nexty-6, 6, 4, PI / 2, 3 * PI / 2, OPEN);
  
        //head
        strokeWeight(0);
        stroke(254, 226, 39);
        fill(254, 226, 39);
        circle(nextx+12, nexty-10, 6);
        strokeWeight(1);
        stroke(0);
        point(nextx+13, nexty-11);
  
        //beak
        strokeWeight(0);
        stroke(255, 165, 0);
        fill(255, 165, 0);
        strokeJoin(ROUND);
        beginShape();
        vertex(nextx+15, nexty-10);
        vertex(nextx+18, nexty-8.5);
        vertex(nextx+13, nexty-7);
        endShape();
        stroke(0);
        curve(nextx+15, nexty-10, nextx+18, nexty-8.5, nextx+14, nexty-9 , nextx+15, nexty-10)
      }
  
    }
    
    
}
  
function mouseClicked() {
    numDuck = numDuck + 1;
}