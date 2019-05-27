class Carousel {
    constructor(element) {
      this.element = element;
  
     
      this.rightButton = document.querySelector(".right-button");
      this.leftButton = document.querySelector(".left-button");
      this.images = document.querySelectorAll(".carousel img");
  
      this.rightButton.addEventListener("click", () => this.rightClick());
      this.leftButton.addEventListener("click", () => this.leftClick());
  
      this.images[0].style.display = "block";
      this.currentIndex = 0;
  
      this.images.forEach((image, index) =>
        image.setAttribute("data-index", index)
      );
  
      this.length = this.images.length - 1;
    }
  
    // Methods
    rightClick() {
      if (this.currentIndex < this.length) {
        this.currentIndex += 1;
  
        let newImage = document.querySelector(
          `.carousel img[data-index="${this.currentIndex}"]`
        );
        let previousImage = document.querySelector(
          `.carousel img[data-index="${this.currentIndex - 1}"]`
        );
  
        newImage.style.display = "block";
        previousImage.style.display = "none";
      }
    }
  
    leftClick() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
  
        let newImage = document.querySelector(
          `.carousel img[data-index="${this.currentIndex}"]`
        );
        let previousImage = document.querySelector(
          `.carousel img[data-index="${this.currentIndex + 1}"]`
        );
  
        newImage.style.display = "block";
        
        previousImage.style.display = "none";
      }
    }
  }
  
  let carousel = document.querySelector(".carousel");
  carousel = new Carousel(carousel);
  