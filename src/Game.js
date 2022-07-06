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

    return (
        <>
            <ClickCounter count={count} />
            <MainButton onClick={clickMath} />
            <button
                onClick={() => {
                    changeLevel(level + 1);
                }}
            >
                LEVEL
            </button>
        </>
    );
}

export default Game;
