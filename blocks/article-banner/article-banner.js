export default function decorate(block) {
    const img = block.querySelector("picture img");
    block.innerHTML = "";
    img.classList.add("article-banner-image");
    block.appendChild(img);
}