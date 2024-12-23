export default function decorate(block) {
    const heading = block.querySelector("h2");
    const subHeading = block.querySelector("h4");
    const content = block.querySelector("p");
    block.innerHTML = `
        <div class="article-heading">
            <h2>${heading.innerText}</h2>
            <h4>${subHeading.innerText}</h4>
        </div>
        <div class="article-content">
            ${content.innerText}
        </div>
    `;
}