import Link from "next/link";

export default function IndexPage() {
  const headerItems = [
    "communities",
    "concierge",
    "buy",
    "sell",
    "market update",
    "contact",
  ];
  return (
    <div>
      <div>add logo</div>
      <nav>
        <ul>
          {headerItems.map((headerItem) => {
            return (
              <li>
                <a href={`/${headerItem}`}>{headerItem}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <section>
          <h2>About Alice Wu</h2>
          <p>Stuff</p>
          <p>Stuff</p>
          <p>Stuff</p>
          <p>Stuff</p>
        </section>
        <section>
          <img src="" alt="Alice Wu" />
        </section>
      </div>

      <section>
        <h2>I am looking to</h2>
        <div>
          <a type="button" href="/list">
            list your home
          </a>
          <a type="button" href="/buy">
            buy a home
          </a>
        </div>
      </section>
      <div></div>
    </div>
  );
}
