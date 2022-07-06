function ClickCounter({ count, style }) {
    return (
        <h1 style={style} className="mainCounter">
            {count}
        </h1>
    );
}

export default ClickCounter;
