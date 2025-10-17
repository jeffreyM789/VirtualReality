
window.addEventListener("DOMContentLoaded",function() {
    scene = this.document.querySelector("a-scene");
    Car = this.document.querySelector("#car")
    Rockett = this.document.querySelector("#rocket")

    Car.A = 1;
    Car.Aa = .1;
    
    loop()

})

function loop(){
  Car.A += Car.Aa;
  Car.setAttribute("position",{x:Car.A, y:0, z:0});
  window.requestAnimationFrame(loop);
}

