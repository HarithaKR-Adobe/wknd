export default function decorate(block) {
    const authorImg = block.querySelector("img");
    const authorName = block.querySelector("h2");
    const authorTitle = block.querySelector("p");


    const socialIcons = block.querySelectorAll("a");
    const buttonCont = document.createElement("div");
        buttonCont.classList.add("social-links");
        socialIcons.forEach((button) => {
            button.querySelector("img").remove();
            buttonCont.appendChild(button);
        });
    
    block.innerHTML = "";
    block.appendChild(authorImg);
    const authorDetail = document.createElement("div");
    authorDetail.classList.add("detail");
    authorDetail.appendChild(authorName);
    authorDetail.appendChild(authorTitle);
    block.appendChild(authorDetail);
    block.appendChild(buttonCont);
}