function setEvents(block) {
    const slide = block.querySelector('.carousel-item-wrapper');
    const items = block.querySelectorAll('.carousel-item');
    const leftArrow = block.querySelector('.arrow.left');
    const rightArrow = block.querySelector('.arrow.right');
    const indicators = block.querySelectorAll('.indicator');

    let currentIndex = 0;

    function updateCarousel() {
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });

    indicators.forEach((indicator) => {
      indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel();
      });
    });

    updateCarousel();
}

export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    const carouselItemWrapper = document.createElement("div");
    carouselItemWrapper.classList.add("carousel-item-wrapper");
    block.appendChild(carouselItemWrapper);
    // setup image columns
    [...block.children].forEach((row) => {
        const picture = row.children[0].querySelector("picture");
        if (picture) {
            const content = row.children[1];
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");

            const image = picture.querySelector('img');
            carouselItem.appendChild(image);
            content.classList.add("carousel-content");
            carouselItem.appendChild(content);
            row.replaceWith(carouselItem);
            carouselItemWrapper.appendChild(carouselItem);
        }
    });

    const leftArrow = document.createElement("button");
    leftArrow.classList.add("arrow", "left");
    leftArrow.innerHTML = "&#xe912;";

    const rightArrow = document.createElement("button");
    rightArrow.classList.add("arrow", "right");
    rightArrow.innerHTML = "&#xe911;";
    
    const indicators = document.createElement("div");
    indicators.classList.add("indicators");
    indicators.innerHTML = `
      <div class="indicator active" data-index="0"></div>
      <div class="indicator" data-index="1"></div>
      <div class="indicator" data-index="2"></div>
    `;

    block.appendChild(leftArrow);
    block.appendChild(rightArrow);
    block.appendChild(indicators);

    setEvents(block);
}