async function fetchAndDisplayJson() {
    try {
        const response = await fetch('config.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

        const jsonContainer = document.getElementById('json-container');
        const adatok = jsonData.adatok;
    
        adatok.sort((a, b) => {
            if (a.id === "none" && b.id === "none") {
                return 0;
            } else if (a.id === "none") {
                return 1;
            } else if (b.id === "none") {
                return -1;
            } else {
                return parseInt(a.id) - parseInt(b.id);
            }
        });

        adatok.forEach(item => {
            const div = document.createElement('div');
            div.classList.add(`id-${item.id}`);
            div.innerHTML = `
                <a class="logo" target="_blank" href="${item.link}">
                <img class="icon" src="${item.image}">
                </a>
                <p class="logo-text">${item.text}</p>
            `;
            jsonContainer.appendChild(div);
        });

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

fetchAndDisplayJson();
