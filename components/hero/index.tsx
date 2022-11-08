export interface HeroButton {
  text: string
  link: string
}

export interface HeroProps {
  backgroundImage: string
  button: HeroButton
}

export default function Hero({
  backgroundImage,
  button,
}: HeroProps): JSX.Element {
  return (
    <>
      <div
        className="flex justify-center items-center columns-1 h-96 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <a
          className="border-white border min-w-[150px] text-center text-white p-2 hover:bg-black transition-colors duration-300"
          href={
            button.link
          }
        >
          {button.text}
        </a>
      </div>
      <div className="bg-black h-48 flex items-center justify-center">
        <div className="container columns-2 h-3/4 flex justify-center items-center">
          <div className="bg-black border-r-2 border-white flex flex-col text-white text-center justify-center h-full w-1/2">
            <h2 className="text-3xl">
              Alice Wu
            </h2>
            <p>
              California
              Bay Area
              Realtor
            </p>
          </div>
          <div className="bg-black border-l-2 border-white flex flex-col text-white text-center justify-center items-center h-full w-1/2">
            <img
              className="w-48"
              src="/compass.png"
              alt="compass"
            />
            <p>
              Mony Nop
              Team
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
