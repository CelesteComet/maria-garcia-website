export default function Footer(): JSX.Element {
  const footerItemClass =
    'p-2'
  const footerSocialIconClass =
    'flex justify-center items-center w-16 h-16'
  return (
    <footer id="footer" className="bg-black text-white justify-center text-center pt-4 pb-4">
      <h3 className="text-3xl text-center">
        Let's Connect!
      </h3>
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
      <div className="grid grid-cols-1 md:pt-4 container justify-center mx-auto">
        <div className="pb-4">
          <b>Tel</b>
          :&nbsp;(669)-265-5083&nbsp;
          <b>Email</b>
          :&nbsp;
          alicewu@compass.com
        </div>
        <div>
          South Bay |
          Tri-Valley |
          East Bay |
          Peninsula |
          California Bay
          Area{' '}
        </div>
        <div className="pb-4">
          900 Main
          Street,
          Pleasanton, CA
          94566 / 144
          South K Street,
          Livermore, CA
          94550
        </div>
        <div className="pb-4">
          Compass DRE
          #01527235 | DRE
          #02194535 |
          Licenced as
          Kang-Ling Wu
          (Alice Wu)
        </div>
        <div className="text-sm">
          Copyright ©
          2022 Alice Wu
          Realtor.
        </div>
        <div className="text-xs">
          {' '}
          All Rights
          Reserved.
          Compass is a
          real estate
          broker licensed
          by the State of
          California and
          abides by Equal
          Housing
          Opportunity
          laws. All
          material
          presented
          herein is
          intended for
          informational
          purposes only
          and is compiled
          from sources
          deemed reliable
          but has not
          been verified.
          Changes in
          price,
          condition, sale
          or withdrawal
          may be made
          without notice.
          No statement is
          made as to
          accuracy of any
          description.
          All
          measurements
          and square
          footage are
          approximate.{' '}
        </div>
      </div>
    </footer>
  )
}
