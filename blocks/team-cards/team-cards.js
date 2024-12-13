export default function decorate(block) {
    const rows = [...block.children];
    const title = rows.splice(0, 1);
    const subTitle = rows.splice(0, 1);
    block.innerHTML = "";

    const headerEl = document.createElement("div");
    headerEl.classList.add("team-cards__header");
    headerEl.innerHTML = `
        <h1>${title[0].innerText.trim()}</h1>
        <p>${subTitle[0].innerText.trim()}</p>
    `;
    block.appendChild(headerEl);

    const teamCards = document.createElement("div");
    teamCards.classList.add("team-cards__section");
    block.appendChild(teamCards);

    rows.forEach((row) => {
        const secondChild = row.children[1];
        const cardData = {
            cardImage: row.children[0].querySelector("picture img"),
            cardName: secondChild.querySelector("h3"),
            cardTitle: secondChild.querySelector("h5"),
            buttons: secondChild.querySelectorAll("a")
        };
        cardData.cardName.classList.add("card-name");
        cardData.cardTitle.classList.add("card-title");
        const card = document.createElement("div");
        card.classList.add("team-cards__card");
        card.appendChild(cardData.cardImage);
        card.appendChild(cardData.cardName);
        card.appendChild(cardData.cardTitle);
        const buttonCont = document.createElement("div");
        buttonCont.classList.add("social-links");
        cardData.buttons.forEach((button) => {
            button.querySelector("img").remove();
            buttonCont.appendChild(button);
        });
        card.appendChild(buttonCont);
        teamCards.appendChild(card)
    });


}