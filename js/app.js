// Get the modal
var modal = $("#contactModal");

// Get the button that opens the modal
var btn = $("#openModalBtn");

// When the user clicks the button, open the modal
btn.on("click", function () {
  modal.modal("show");
});

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function () {
  modal.modal("hide");
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function (event) {
  if ($(event.target).is(modal)) {
    modal.modal("hide");
  }
});

$(document).ready(function () {
  $(".info-box").click(function () {
    // Remove the 'highlighted' class from all elements
    $(".info-box").removeClass("highlighted");

    // Add the 'highlighted' class to the clicked element
    $(this).addClass("highlighted");
  });
});

document.getElementById("1").addEventListener("click", function () {
  document.getElementById("image-display").src = "pictures/pro2.png";
});

document.getElementById("2").addEventListener("click", function () {
  document.getElementById("image-display").src = "pictures/pro1.jpg";
});
document.getElementById("3").addEventListener("click", function () {
  document.getElementById("image-display").src = "pictures/pro3.jpg";
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const serviceItems = document.querySelectorAll(".service-item");
  const dots = document.querySelectorAll(".indicator .dot");
  let activeIndex = dots.length - 1; // Start from the rightmost dot
  let dotInterval;

  function changeDot() {
    // Remove 'active' class from the current red dot
    dots[activeIndex].classList.remove("active");
    dots[activeIndex].src = "pictures/2.png";

    // Calculate the next index
    activeIndex = (activeIndex - 1 + dots.length) % dots.length;

    // Add 'active' class to the new red dot
    dots[activeIndex].classList.add("active");
    dots[activeIndex].src = "pictures/1.png";
  }

  function startDotAnimation() {
    dotInterval = setInterval(changeDot, 5000);
  }

  function stopDotAnimation() {
    clearInterval(dotInterval);
  }

  // Start the dot animation initially
  startDotAnimation();

  // Add hover event listeners to service items
  serviceItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      slider.classList.add("paused");
      stopDotAnimation();
    });

    item.addEventListener("mouseout", () => {
      slider.classList.remove("paused");
      startDotAnimation();
    });
  });
});

//text typing animation
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
  }

  setTimeout(function() {
      that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          var styles = ".typewrite > .wrap { border-right: 0.08em solid #fff; }";
          css.appendChild(document.createTextNode(styles));
          document.head.appendChild(css);
          
};




document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.value');
  const speed = 200;

  const animateCounter = counter => {
    const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText.replace(' +', '');
      const time = value / speed;
      
      if (data < value) {
        counter.innerText = Math.ceil(data + time) + ' +';
        setTimeout(animate, 1);
      } else {
        counter.innerText = value + ' +';
      }
    };
    animate();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});






