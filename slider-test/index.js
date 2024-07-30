// const slider = document.querySelector('.container')
// const cards = document.querySelector('.cards')
// let isPressed = false;
// let cursorX;



// slider.addEventListener("mousedown", (e) => {
//     isPressed = true;
//     cursorX = e.offsetX - cards.offsetLeft;
//     slider.style.cursor = "grabbing";
//     console.log(e.offsetX, cards.offsetLeft)
// });


// slider.addEventListener("mousemove", (e) => {
//     if (!isPressed) return;
//     e.preventDefault();
//     console.log(e.offsetX , cursorX)
//     cards.style.left = `${e.offsetX - cursorX}px`;
//  });

//  window.addEventListener("mouseup", () => {
//     isPressed = false;
// });

// function boundSlides() {
//     const containerRect = slider.getBoundingClientRect();
//     const cardsRect = cards.getBoundingClientRect();
//   console.log(cardsRect)
//     if (parseInt(cards.style.left) > 0) {
//       cards.style.left = 0;
//     } else if (cardsRect.right < containerRect.right) {
//       cards.style.left = `-${cardsRect.width - containerRect.width}px`;
//     }
//   }