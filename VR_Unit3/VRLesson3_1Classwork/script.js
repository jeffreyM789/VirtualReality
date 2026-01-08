window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  let myCylinder = document.getElementById("#Cylinder");
  myCylinder.t = 0;
  myCylinder.Dt = 1;
  myCylinder.addEventListener("mouseenter", function(){
	myCylinder.setAttribute("opacity", 0)
  })
  myCylinder.addEventListener("mouseleave", function(){
   myCylinder.setAttribute("opacity", 1)
  })
  function changeOpacity(){
    myCylinder.t += myCylinder.Dt;
    myCylinder.setAttribute
  }
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML


  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox

  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero
})
