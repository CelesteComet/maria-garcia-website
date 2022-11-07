export default function Footer(): JSX.Element {
  const footerItemClass =
    'p-2'
  const footerSocialIconClass =
    'flex justify-center items-center w-16 h-16'
  return (
    <footer className="bg-black text-white justify-center text-center md:text-left pt-4 pb-4">
      <h3 className="text-3xl text-center">
        Get in Touch
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 md:pt-4 container justify-center mx-auto">
        <div
          className={
            footerItemClass
          }
        >
          <div className="text-bold">
            <span className="font-bold">
              Main Office
            </span>
          </div>
          <div>
            <span>
              900 Main
              Street
              <br />
              Pleasanton,
              CA
              <br />
              94566
            </span>
          </div>
        </div>
        <div
          className={
            footerItemClass
          }
        >
          <div className="text-bold">
            <span className="font-bold">
              Livermore
              Office
            </span>
          </div>
          <div>
            <span>
              144 South K
              Street
              <br />
              Livermore,
              CA
              <br />
              94550
            </span>
          </div>
        </div>
        <div
          className={
            footerItemClass
          }
        >
          <b>Tel</b>:
          (669)-265-5083
          <br />
          <b>Email</b>
          :
          alicewu@compass.com
          <br />
          <b>Social</b>:
          @alicewurealtor
        </div>
        <div
          className={
            footerItemClass
          }
        >
          <b>
            Compass DRE
          </b>
          # 01527235
          <br />
          <b>DRE </b>
          #02194535
          <br />
          Licenced as
          Kang-Ling Wu
          <br />
          (Alice Wu)
        </div>
        <div
          className={
            footerItemClass +
            ' flex justify-center sm:justify-left'
          }
        >
          <a
            className={
              footerSocialIconClass
            }
            href="#"
          >
            <img
              className="w-full h-full"
              src="/youtube.png"
              alt="youtube"
            />
          </a>
          <a
            className={
              footerSocialIconClass
            }
            href="https://www.instagram.com/alicewurealtor"
          >
            <img
              className="w-full h-full"
              src="/instagram.png"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
