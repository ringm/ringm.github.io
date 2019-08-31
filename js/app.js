
var textOverImages = document.getElementsByClassName("project");
var previousTextOverImage;

for (var i = 0; i < textOverImages.length; i++) {
    textOverImages[i].onmouseover = function() {
    var children = this.children;
    var txtClasses = children[0].classList;
    var imgClasses = children[1].firstElementChild.classList;
    var current = i;
    if (txtClasses.contains("visible") && current != i) {
      txtClasses.remove("visible");
      imgClasses.remove("scale");
    } else {
      if (previousTextOverImage != null)
      previousTextOverImage.classList.remove("visible");
      previousTextOverImage = this;
      txtClasses.add("visible");
      imgClasses.add("scale");
    }
  }
}

for (var i = 0; i < textOverImages.length; i++) {
    textOverImages[i].onmouseout = function() {
    var children = this.children;
    var txtClasses = children[0].classList;
    var imgClasses = children[1].firstElementChild.classList;
    txtClasses.remove("visible");
    imgClasses.remove("scale");
    } 
  }

function stopPropagation(event){
  event.stopPropagation();
}
