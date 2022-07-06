import { useState } from 'react';
import './index.css';

function ClickCounter({ count }) {
    return <h1 className="mainCounter">{count}</h1>;
}
function MainButton({ onClick }) {
    return (
        <button className="mainButton" onClick={onClick}>
            CLICK ME
        </button>
    );
}

function Game() {
    const [count, changeCount] = useState(0);
    const [level, changeLevel] = useState(0);

    const clickMath = () => {
        if (level === 0) {
            changeCount(count + 1);
        }
    };
    const levelUp = (num) => {
        changeLevel(num);
    };
    levelUp(0);

    return (
        <>
            <ClickCounter count={count} />
            <MainButton onClick={clickMath} />
        </>
    );
}

export default Game;
