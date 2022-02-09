function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    
    //BACKGROUND

    background(208, 240, 192);
    
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
  
    fill(173,216,230);
    stroke(173,216,230);
    triangle(p1.x, p1.y, 0, windowHeight, p9.x, p9.y)
    beginShape();
    curveVertex(p1.x,p1.y);
    curveVertex(p1.x,p1.y);
    curveVertex(p2.x,p2.y);
    curveVertex(p3.x,p3.y);
    curveVertex(p4.x,p4.y);
    curveVertex(p5.x,p5.y);
    curveVertex(p6.x,p6.y);
    curveVertex(p7.x,p7.y);
    curveVertex(p8.x,p8.y);
    curveVertex(p9.x,p9.y);
    curveVertex(p9.x,p9.y);
    endShape();


    //DUCK

    xcoor = 50;
    ycoor = 55;
  
    strokeWeight(1);
    stroke(254, 226, 39);
    //body
    line(xcoor-25, ycoor, xcoor+25, ycoor);
    fill(254, 226, 39);
    arc(xcoor, ycoor, 50, 50, 0, PI);
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
    //beak
    stroke(255, 165, 0);
    fill(255, 165, 0);
    strokeJoin(ROUND);
    beginShape();
    vertex(xcoor+36, ycoor-25);
    vertex(xcoor+42, ycoor-22);
    vertex(xcoor+32, ycoor-19);
    endShape();
    
  }