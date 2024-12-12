export default function decorate(block) {

    const featuredArticle = document.createElement('div');
    featuredArticle.className = 'featured-article';
    [...block.children].forEach((row) => {
        const picture = row.children[0].querySelector("picture");
        if (picture) {
            const content = row.children[1];
            const paraContents = content.querySelectorAll("p");
            const articleData = {
                image: picture.querySelector("img").src,
                title: paraContents[0].innerHTML,
                heading: content.querySelector("h2").innerHTML,
                description: paraContents[1].innerHTML,
                button: paraContents[2]
            };
            featuredArticle.innerHTML = `
                <img src="${articleData.image}" alt="${articleData.title}">
                <div class="article-content">
                    <div class="featured-label">${articleData.title}</div>
                    <h2>${articleData.heading}</h2>
                    <p>${articleData.description}</p>
                </div>`;
            featuredArticle.querySelector(".article-content").appendChild(articleData.button);
        }
        row.replaceWith(featuredArticle);
    });
}