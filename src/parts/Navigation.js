export default function Navigation({ catalog }) {
  return (
    <aside>
      {catalog.map((item) => {
        return (
          <section className="catalog" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <img src={item.image} alt={item.title} />
          </section>
        );
      })}
    </aside>
  );
}
