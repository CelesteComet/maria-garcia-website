import Link from 'next/link'
import Navigation from '../components/navigation'

export default function IndexPage() {
  const headerItems = [
    'communities',
    'concierge',
    'buy',
    'sell',
    'market update',
    'contact',
  ]
  return (
    <main>
      <Navigation />
      <div className="about container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <section className="col-10 col-sm-8 col-lg-6">
            <h2>
              About Alice
              Wu
            </h2>
            <p>
              Coming from
              an
              entrepreneurship
              and
              marketing
              background,
              as well as
              having
              worked at
              multiple
              global
              luxury
              brands and
              startups
              for over 8
              years.
              Alice
              decided to
              go all in
              on her true
              passion for
              real
              estate.
              Bringing in
              her
              expertise
              from past
              endeavors,
              she brings
              to her
              clients a
              unique and
              personal
              experience
              in helping
              them make
              the best
              decision in
              their best
              interest.{' '}
            </p>
            <p>
              Alice loves
              the Bay
              Area and
              went to
              school in
              Cupertino
              and got her
              bachelor's
              at UC
              Berkeley.
              Though she
              started as
              an
              international
              student
              from
              Taiwan,
              Alice and
              her husband
              lived
              across the
              Bay Area
              and finally
              settled in
              the
              Tri-Valley.
              In her free
              time, she
              enjoys
              showing
              friends and
              clients
              alike her
              favorite
              food spots
              on YouTube.{' '}
            </p>
            <p>
              She speaks
              fluent
              Mandarin,
              Cantonese,
              Taiwanese,
              English,
              and some
              Japanese.
            </p>
            <p>
              Alice is a
              member of
              the
              National
              Board of
              Realtors,
              the
              California
              Association
              of
              Realtors,
              and the Bay
              East
              Association
              of
              Realtors.{' '}
            </p>
          </section>
          <section className="col-lg-6">
            <img
              className="d-block mx-lg-auto img-fluid"
              src="/alice.jpg"
              alt="Alice Wu"
            />
          </section>
        </div>
      </div>

      <section className="cta-section">
        <div className="cta-section-content">
          <h2>
            I am looking
            to
          </h2>
          <div>
            <a
              className="btn btn-outline-light"
              href="/list"
            >
              list your
              home
            </a>
            <a
              className="btn btn-outline-light"
              href="/buy"
            >
              buy a home
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <ul>
            <li>
              Get in
              touch
            </li>
            <li>
              900 Main
              Street
              <br />
              Pleasanton,
              CA 94566
            </li>
            <li>
              Livermore
              Office
              <br />
              144 South K
              Street
              Livermore,
              CA 94550
            </li>
            <li>
              Tel:
              (669)-265-5083
              <br />
              Email:
              alicewu@compass.com
              <br />
              Social:
              @alicewurealtor
            </li>
            <li>
              <ul className="footer-social">
                <li>
                  facebook
                </li>
                <li>
                  youtube
                </li>
                <li>
                  instagram
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  )
}
