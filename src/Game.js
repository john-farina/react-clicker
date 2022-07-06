import { useState } from 'react';
import './game.css';

function ClickCounter({ count }) {
    return <h1>{count}</h1>;
}
function MainButton({ onClick }) {
    return <button onClick={onClick}>CLICK ME</button>;
}

function Game() {
    const [count, changeCount] = useState(0);
    const [level, changeLevel] = useState(0);

    const clickMath = () => {
        if (level === 0) {
            changeCount(count + 1);
        }
    };

    return (
        <>
            <ClickCounter count={count} />
            <MainButton onClick={clickMath} />
        </>
    );
}

export default Game;
