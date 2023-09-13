let currentPlayer = Math.floor(Math.random() * 2) + 1; 
        let scores = [0, 0];
        let gameOver = false;
        document.getElementById('player').innerHTML = `Player ${currentPlayer} to play`;
        setButtonColors(); 
        console.log(currentPlayer)
        function rollDice(player) {
            if (gameOver || player !== currentPlayer) return;

            const diceResult = Math.floor(Math.random() * 6) + 1;
            const currentScore = parseInt(document.getElementById(`score${player}`).textContent);
            scores[player - 1] += diceResult;
            document.getElementById(`score${player}`).textContent = scores[player - 1];
            document.getElementById('dice-image').src = `die${diceResult}.PNG`;
            if (scores[player - 1] >= 30) {
                document.getElementById(`player${player}`).textContent = `Player ${player} wins!`;
                gameOver = true;
                document.getElementById('roll-btn1').disabled = true;
                document.getElementById('roll-btn2').disabled = true;
                document.getElementById('reset-btn').style.display = 'block';
            } else {
                console.log(currentPlayer)
                currentPlayer = currentPlayer === 1 ? 2 : 1; 
                document.getElementById(`roll-btn1`).disabled = !currentPlayer === 1;
                document.getElementById(`roll-btn2`).disabled = !currentPlayer === 2;
                document.getElementById(`roll-btn1`).textContent = `Roll Dice (Player 1)`;
                document.getElementById(`roll-btn2`).textContent = `Roll Dice (Player 2)`;
                document.getElementById('player').innerHTML = `Player ${currentPlayer} to play`;
                setButtonColors(); 
            }
        }

        function resetGame() {
            currentPlayer = Math.floor(Math.random() * 2) + 1;
            scores = [0, 0];
            gameOver = false;
            document.getElementById(`player1`).textContent = 'Player 1';
            document.getElementById(`player2`).textContent = 'Player 2';
            document.getElementById(`score1`).textContent = '0';
            document.getElementById(`score2`).textContent = '0';
            document.getElementById('roll-btn1').textContent = `Roll Dice `;
            document.getElementById('roll-btn2').textContent = `Roll Dice `;
            document.getElementById(`roll-btn1`).disabled = !currentPlayer === 1;
            document.getElementById(`roll-btn2`).disabled = !currentPlayer === 2;
            document.getElementById('reset-btn').style.display = 'none';
            document.getElementById('player').innerHTML = `Player ${currentPlayer} to play`;
            setButtonColors(); 
        }

        function setButtonColors() {
            if (currentPlayer === 1) {
                document.getElementById('roll-btn1').style.backgroundColor = 'green';
                document.getElementById('roll-btn2').style.backgroundColor = 'grey';
            } else {
                document.getElementById('roll-btn1').style.backgroundColor = 'grey';
                document.getElementById('roll-btn2').style.backgroundColor = 'green';
            }
        }