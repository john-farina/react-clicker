import { useState } from 'react';
import './index.css';

import ClickCounter from './modules/ClickCounter';
import MainButton from './modules/MainButton';
import StoreContainer from './modules/StoreContainer';

function Game() {
    const [count, changeCount] = useState(0);
    const [level, changeLevel] = useState(1);
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
        changeCount(count + level);
    };

    return (
        <>
            <div id="gameContainer">
                <StoreContainer style={storeStyle} />
                <ClickCounter count={count} />

                <div id="buttonContainer">
                    <button
                        onClick={() => {
                            changeLevel(level + 1);
                        }}
                    >
                        LEVEL
                    </button>

                    <MainButton onClick={clickMath} />

                    <button style={{ zIndex: '4' }} onClick={storeButtonLogic}>
                        STORE
                    </button>
                </div>
            </div>
        </>
    );
}

export default Game;
