function changeHandler(timer, searchIcon, loadingIcon) {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        loadingIcon.style.display = "block";
        searchIcon.style.display = "none";
        setTimeout(() => {
            loadingIcon.style.display = "none";
            searchIcon.style.display = "block";
        }, 1000);
    }, 300);
}

export default function decorate(block) {
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("search-input-wrapper");
    const searchIcon = document.createElement("span");
    searchIcon.classList.add("wknd-icon-search");
    inputWrapper.appendChild(searchIcon);
    const loadingIcon = document.createElement("span");
    loadingIcon.classList.add("search__loading-indicator");
    inputWrapper.appendChild(loadingIcon);
    const input = document.createElement("input");
    input.type = "text"
    input.classList.add("input");
    inputWrapper.appendChild(input);
    block.replaceWith(inputWrapper);
    const timer = null;
    input.addEventListener("input", () => {
        changeHandler(timer, searchIcon, loadingIcon);
    })
}