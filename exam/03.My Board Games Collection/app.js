window.addEventListener('load', function () {
    const loadGamesBtn = document.getElementById('load-games');
    const addGameBtn = document.getElementById('add-game');
    const editGameBtn = document.getElementById('edit-game');
    const gameNameInput = document.getElementById('g-name');
    const gameTypeInput = document.getElementById('type');
    const maxPlayersInput = document.getElementById('players');
    const gamesListDiv = document.getElementById('games-list');
    let editingGame = null;

    loadGamesBtn.addEventListener('click', loadGames);

    addGameBtn.addEventListener('click', addGame);

    function addGame() {
        const gameData = {
            name: gameNameInput.value,
            type: gameTypeInput.value,
            players: maxPlayersInput.value,
        };

        fetch('http://localhost:3030/jsonstore/games', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameData),
        }).then(() => {
            gameNameInput.value = '';
            gameTypeInput.value = '';
            maxPlayersInput.value = '';
            loadGames();
        });
    }

    function loadGames() {
        fetch('http://localhost:3030/jsonstore/games')
            .then((response) => response.json())
            .then((games) => {
                gamesListDiv.innerHTML = '';
                Object.values(games).forEach((game) => {
                    const gameDiv = createGameDiv(game);
                    gamesListDiv.appendChild(gameDiv);
                });
                editGameBtn.disabled = true;
                addGameBtn.disabled = false;
            });
    }

    function createGameDiv(game) {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'board-game';
        gameDiv.innerHTML = `
        <div class="content">
          <p>${game.name}</p>
          <p>${game.type}</p>
          <p>${game.players}</p>
        </div>
        <div class="buttons-container">
          <button class="change-btn">Change</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

        gameDiv.querySelector('.change-btn').addEventListener('click', () => {
            gameNameInput.value = game.name;
            gameTypeInput.value = game.type;
            maxPlayersInput.value = game.players;
            editingGame = game;
            editGameBtn.disabled = false;
            addGameBtn.disabled = true;
        });

        gameDiv.querySelector('.delete-btn').addEventListener('click', () => {
            fetch(`http://localhost:3030/jsonstore/games/${game._id}`, {
                method: 'DELETE',
            }).then(() => {
                loadGames();
            });
        });

        return gameDiv;
    }

    editGameBtn.addEventListener('click', function () {
        if (editingGame) {
            const updatedGame = {
                name: gameNameInput.value,
                type: gameTypeInput.value,
                players: maxPlayersInput.value,
            };

            fetch(`http://localhost:3030/jsonstore/games/${editingGame._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedGame),
            })
                .then((response) => response.json())
                .then(() => {
                    gameNameInput.value = '';
                    gameTypeInput.value = '';
                    maxPlayersInput.value = '';
                    editingGame = null;
                    loadGames();
                });
        }
    });
});
