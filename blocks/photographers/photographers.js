export default async function decorate(block) {
    const dataUrl = block.querySelector("a").href;
    const respData = await fetch(dataUrl);
    const resp = await respData.json();
    block.innerHTML = "";

    if (!resp || resp.total === 0) {
        const segment = document.createElement("div");
        segment.classList.add("no-data");
        segment.innerText="No Results";
        block.appendChild(segment);
    } else {
        resp.data.forEach((item) => {
            const segment = document.createElement("div");
            segment.classList.add("photographers__section");
            const works = item.works.split(",");
            segment.innerHTML = `
                <h4 class="photographer__name">${item.name}  ${item.yearsActive}</h4>
                <img class="photographer__image" src="${item.imgUrl}" alt="${item.name}" />
                <p class="photographer__desc">${item.description}</p>
                <div class="photographer__works">
                    ${works.map((work) => `<img src=${work} />`).join("")}
                </div>
            `;
            block.appendChild(segment);
        })
    }
}