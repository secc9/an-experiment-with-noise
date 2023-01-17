let xOff1 = 0;
let xOff2 = 0;
let xOff3 = 0;
// let wWidth = windowWidth;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(15);
   }
   
   
//    beginShape();
//    for (let k = 0; k < 15; k++) {
//      vertex(noise( k * j, i + f) * spc  - spc/2, noise( i, j *k + f ) * spc - spc/2);
//    }

    function draw() {

        background(205, 0, 100, 15);
        



        for(i = 0; i < windowWidth; i += 100){

            stroke(20*i, 200, 0);
                line(noise(xOff1), i*noise(xOff2*xOff1), i*noise(xOff3)+windowWidth,  i*noise(xOff3*xOff1));
                // line(noise(xOff1)+1000, noise(xOff2*xOff3), i*noise(xOff3),  1000+noise(xOff3)+windowHeight);


                // beginShape();
                // vertex(i * noise(xOff1) + 100, j *noise(xOff2)+ 300);
                // vertex(100*noise(xOff1 * 100), 100*noise(xOff3));
                
                // endShape();

                xOff1 = xOff1 + 0.0001;
                xOff2 = xOff2 + 0.0003;
                xOff3 = xOff3 + 0.0004;
        }


    }
    

    
function keyPressed(){
    save("image####.png")

}


