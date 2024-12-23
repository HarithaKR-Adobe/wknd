export default function decorate(block) {
    const breadcrumbItems = [...block.children];
    block.innerHTML = "";
    breadcrumbItems.forEach((row) => {
        const link = row.querySelector("a");
        const item = document.createElement("div");
        item.classList.add("breadcrumb-item");
        if (link) {
            link.classList.remove("button");
            item.appendChild(link);
        } else {
            const p = row.querySelector("p");
            item.appendChild(p);
        }
        block.appendChild(item);
    })
}