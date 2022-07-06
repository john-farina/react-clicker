function UpgradeGrid({ text }) {
    return (
        <div id="storeContainer">
            <div id="upgradesContainer">
                <div className="upgrade">
                    <div className="upgradePicture"></div>
                    <div className="upgradeDesc">
                        <p className="upgradeText">{text}</p>
                        <button className="upgradeButton"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StoreContainer({ style }) {
    return (
        <div style={style} id="storeContainer">
            <div id="upgradesContainer">
                <div className="upgrade">
                    <div className="upgradePicture"></div>
                    <div className="upgradeDesc">
                        <p className="upgradeText">
                            buy a pizza shop. <br />1 pizza a second
                        </p>
                        <button className="upgradeButton"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreContainer;
