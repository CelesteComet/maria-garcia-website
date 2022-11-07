export default function Navigation(): JSX.Element {
  const headerItems = [
    'communities',
    'concierge',
    'buy',
    'sell',
    'market update',
    'contact',
  ]
  return (
    <>
      <nav className="bg-black">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-black text-white mx-auto">
          <img
            className="w-28"
            src="/logo.png"
            alt="Alice Wu Logo"
          />
          <ul className="flex flex-col md:flex-row">
            {headerItems.map(
              (
                headerItem
              ) => {
                return (
                  <a
                    key={
                      headerItem
                    }
                    className="p-4"
                    href={`/${headerItem}`}
                  >
                    {
                      headerItem
                    }
                  </a>
                )
              }
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}
