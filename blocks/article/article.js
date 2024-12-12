export default function decorate(block) {
    const rows =  [...block.children];
    rows.forEach((row) => {
        const rowContent = row.children;
        const picture = rowContent[0].querySelector("picture");
        const h3 = row.querySelector("h3");
        if (picture) {
            const imageUrl = picture.querySelector("img").src;
            const link = rowContent[1].querySelector("a");
            const title = link.innerText;
            const linkUrl = link.href;
            const description = rowContent[1].querySelector("p:nth-of-type(2)").innerText;

            const card = document.createElement("div");
            card.className = "article-card";

            card.innerHTML = `
                <a href=${linkUrl}>
                <div class="article-image" style="background-image: url('${imageUrl}')"></div>
                <h4 class="article-header">${title}</h4>
                <p class="article-content">${description}</p>
            `;

            row.replaceWith(card);
        }
    })
}