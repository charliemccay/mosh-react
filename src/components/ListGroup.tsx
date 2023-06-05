function ListGroup() {
    const items = ["new york", "London", "Paris", "Berlin"];

    return (
        <>
            <h1>The heading</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </>);
}
export default ListGroup