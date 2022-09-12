function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    background(110, 160, 229);
    stroke(255);

    //ESTRELLAS
    //estrellas1
    push();
    let y = 150;
      for(let i = 0; i < width; i += 30){
       let x = i;
       y = y + (random(-80, 80)); 
       strokeWeight(3);
       point(x, y);
      }
    pop();

    
     //estrellas2
     push();
     let ye = 150;
       for(let i = 0; i < width; i += 30){
        let x = i;
        y = y + (random(-60, 60)); 
        strokeWeight(3);
        point(x, y);
       }
     pop();
     
    //CAPAS 
    //capa 1
    let col1 = color(171, 196, 230, 60);
    let y1 = 0;
    let a = 0.0;
    let y2 = 5;

     for (i = 0; i < width; i++){
      a += 0.001;
      let noiseVal = noise(a);
      let x = i;
      y1 = noiseVal * 100 + y2 + random(-0, 0);
      stroke(col1);
      line(x, y1, x, height);
     }

    //capa 2
    let col = color(204, 220, 242, 60);
    let z1 = 0;
    let b = 0.0;
    let z2 = 55;
  
     for (i = 0; i < width; i++){
      b += 0.001;
      let noiseVal = noise(b);
      let x = i;
      z1 = noiseVal * 100 + z2 + random(-0, 0);
      stroke(col);
      line(x, z1, x, height);
     }

    //capa 3
     let col3 = color(230, 210, 230, 60);
     let x1 = 0;
     let c = 0.0;
     let x2 = 105;
   
     for (i = 0; i < width; i++){
      c += 0.001;
      let noiseVal = noise(c);
      let x = i;
      x1 = noiseVal * 100 + x2 + random(-0, 0);
      stroke(col3);
      line(x, x1, x, height);
     }

    //capa 4
     let col4 = color(230, 210, 230, 60);
     let n1 = 0;
     let d = 0.0;
     let n2 = 155;
   
     for (i = 0; i < width; i++){
      d += 0.001;
      let noiseVal = noise(d);
      let x = i;
      n1 = noiseVal * 100 + n2 + random(-0, 0);
      stroke(col4);
      line(x, n1, x, height);
     }

    //capa 5
     let col5 = color(240, 187, 146, 80);
     let m1 = 0;
     let e = 0.0;
     let m2 = 205;
   
     for (i = 0; i < width; i++){
      e += 0.001;
      let noiseVal = noise(e);
      let x = i;
      m1 = noiseVal * 100 + m2 + random(-0, 0);
      stroke(col5);
      line(x, m1, x, height);
     }

    //capa 6
     let col6 = color(237, 121, 39, 80);
     let o1 = 0;
     let f = 0.0;
     let o2 = 255;
   
     for (i = 0; i < width; i++){
      f += 0.001;
      let noiseVal = noise(f);
      let x = i;
      o1 = noiseVal * 100 + o2 + random(-0, 0);
      stroke(col6);
      line(x, o1, x, height);
     }

    //capa 7
    let col7 = color(255, 0, 0, 40);
    let p1 = 0;
    let g = 0.0;
    let p2 = 305;
  
    for (i = 0; i < width; i++){
     g += 0.001;
     let noiseVal = noise(g);
     let x = i;
     p1 = noiseVal * 100 + p2 + random(-0, 0);
     stroke(col7);
     line(x, p1, x, height);
    }

    //capa 8
     let col8 = color(173, 29, 62, 40);
     let q1 = 0;
     let h = 0.0;
     let q2 = 355;
   
     for (i = 0; i < width; i++){
      h += 0.001;
      let noiseVal = noise(h);
      let x = i;
      q1 = noiseVal * 100 + q2 + random(-0, 0);
      stroke(col8);
      line(x, q1, x, height);
     }

    //capa 9
      let col9 = color(81, 14, 116, 100);
      let r1 = 0;
      let j = 0.0;
      let r2 = 405;
    
      for (i = 0; i < width; i++){
       j += 0.001;
       let noiseVal = noise(j);
       let x = i;
       r1 = noiseVal * 100 + r2 + random(-0, 0);
       stroke(col9);
       line(x, r1, x, height);
      }


    //capa 10
      let col10 = color(76, 74, 77, 200);
      let s1 = 0;
      let k = 0.0;
      let s2 = 455;
    
      for (i = 0; i < width; i++){
       k += 0.001;
       let noiseVal = noise(k);
       let x = i;
       s1 = noiseVal * 100 + s2 + random(-0, 0);
       stroke(col10);
       line(x, s1, x, height);
      }


    //edificios
     stroke(255, 255, 255, 150);
     strokeWeight(1);
      for (let i = 0; i < width; i += random(50, 100)) {
       for (let j = random(400, 900); j < height; j += 12) {
        let x = i;
        let y = j;
        fill(20, 20, 20);
        rect(x, y, 120, 10);
        fill(250, 249, 184, 90);
        rect(x, y, random(100), 10);
        fill(20, 20, 20);
        rect(x, y, random(20), 10);
        push();
        fill(250, 249, 184, 15);
        noStroke();
        triangle(x, y, 1, 70, 1, 75);
        pop();
       }
      }

   
   //piso
    let col2 = color(0);
    let y3 = random(780, 800);
     for (i = 0; i < width; i++) {
      let x = i;
      let y4 = random(-1, 1);
      y3 += y4;
      stroke(col2);
      strokeWeight(1.3);
      line(x, y3, x, height);
     }
  
}


function draw(){
    // sol
     fill(250, 249, 184, 7);
     noStroke();
     ellipse(1100, 150, 215, 215);
     fill(220, 230, 219);
     noStroke();
     ellipse(1100, 150, 200, 200);
}