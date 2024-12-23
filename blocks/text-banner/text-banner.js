export default function decorate(block) {
    const quote = block.children[0].querySelector("p");
    const author = block.children[1].querySelector("p");
    block.innerHTML = `
        <blockquote class="quote">${quote.innerText}</blockquote>
        <p class="author">${author.innerText}</p>
    `;
}