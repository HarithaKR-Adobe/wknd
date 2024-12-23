export default function decorate(block) {
    const title = block.children[0].querySelector("h2");
    const content = block.children[1].querySelector("p");
    content.setAttribute("class", "content");
    const imgBlock = block.children[2];

    block.innerHTML = `
        <h2 class="title">${title.innerText}</h2>
        <p class="content">${content.innerText}</p>
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
    
    
    block.querySelector(".content").replaceWith(content);
}