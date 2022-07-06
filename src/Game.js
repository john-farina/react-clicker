import { useState } from 'react';
import './index.css';

function ClickCounter({ count, style }) {
    return (
        <h1 style={style} className="mainCounter">
            {count}
        </h1>
    );
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
    const [storeStyle, changeStoreStyle] = useState({
        display: 'none',
        backgroundColor: 'red',
        color: 'blue',
    });
    const [storeScreenOpen, changeScreenOpen] = useState(false);

    console.log(storeStyle.style);
    const hideOrShow = (hideShow) => {
        if (hideShow === 'hide') {
            changeStoreStyle({ display: 'none' });
        } else if (hideShow === 'show') {
            changeStoreStyle({ display: 'flex' });
        } else {
            console.log('ERROR');
            return;
        }
    };

    const storeButtonLogic = () => {
        if (storeScreenOpen === false) {
            changeScreenOpen(true);
            hideOrShow('show');
        } else if (storeScreenOpen === true) {
            changeScreenOpen(false);
            hideOrShow('hide');
        }
    };

    const clickMath = () => {
        if (level === 0) {
            changeCount(count + 1);
        }
    };

    return (
        <>
            <div id="gameContainer">
                <ClickCounter style={storeStyle} count={count} />
                <MainButton onClick={clickMath} />
                <button
                    onClick={() => {
                        changeLevel(level + 1);
                    }}
                >
                    LEVEL
                </button>
                <button onClick={storeButtonLogic}>STORE</button>
            </div>
        </>
    );
}

export default Game;
