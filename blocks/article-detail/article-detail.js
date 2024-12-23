export default function decorate(block) {
    const heading = block.children[0].querySelector("h2");
    const subHeading = block.children[0].querySelector("h4");
    const content = block.children[1].querySelector("p");
    const imgBlock = block.children[2];

    block.innerHTML = `
        <div class="article-heading">
            <h2>${heading.innerText}</h2>
            <h4>${subHeading.innerText}</h4>
        </div>
        <div class="article-content">
            ${content.innerText}
        </div>
        <figure></figure>
    `;

    const figure = block.querySelector("figure");

    if (imgBlock) {
        const img = imgBlock.querySelector("img");
        const caption = imgBlock.querySelector("p");

        if (img) {
            figure.appendChild(img);
        }
        if (caption) {
            const figCaption = document.createElement("figcaption");
            figCaption.innerHTML = caption.innerText;
            figure.appendChild(figCaption);
        }

    } else {
        figure.remove();
    }

}