export function Statistics({ title, stats }) {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(element => (
          <li key={element.id}>
            <h3>{element.total}</h3>
            <p>{element.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
