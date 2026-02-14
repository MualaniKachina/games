// Example script for dynamic game directory
document.addEventListener("DOMContentLoaded", () => {
    const gameList = [
        { name: "Game 1", genre: "Action", description: "Fast-paced action game." },
        { name: "Game 2", genre: "Strategy", description: "Mind-bending strategy game." }
    ];

    const directory = document.querySelector('#game-directory');

    gameList.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <h3>${game.name}</h3>
            <p>Genre: ${game.genre}</p>
            <p>${game.description}</p>
        `;
        directory.appendChild(gameItem);
    });
});
