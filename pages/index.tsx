import Navigation from '../components/navigation'
import TextWithImage from '../components/TextWithImage'
import Hero from '../components/hero'
import Footer from '../components/footer'
import React from 'react'
import Popup from '../components/popup'

export default function IndexPage() {
  const paragraphClass =
    'mb-4'

  const buttonClass =
    'border-black border min-w-[150px] text-center text-black p-2 hover:bg-black hover:text-white transition-colors duration-300 mr-2'

  return (
    <main>
      <Navigation />
      <Popup />
      <Hero
        backgroundImage="/hero.jpg"
        button={{
          text: 'Book a Consultation',
          link: 'https://calendly.com/alicerealtor',
        }}
      />
      <section className="bg-[#f4f4f4] text-black flex items-center justify-center h-48">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">
            I am looking
            to
          </h2>
          <div className="flex items-center mt-4">
            <a
              className={
                buttonClass
              }
              href="/list"
            >
              List a Home
            </a>
            <a
              className={
                buttonClass
              }
              href="/buy"
            >
              Buy a Home
            </a>
          </div>
        </div>
      </section>
      <TextWithImage
        title="About Alice Wu"
        image="/alice.jpg"
        alt="Alice Wu"
      >
        <>
          <p
            className={
              paragraphClass
            }
          >
            Coming from
            an
            entrepreneurship
            and marketing
            background,
            as well as
            having worked
            at multiple
            global luxury
            brands and
            startups for
            over 8 years.
            Alice decided
            to go all in
            on her true
            passion for
            real estate.
            Bringing in
            her expertise
            from past
            endeavors,
            she brings to
            her clients a
            unique and
            personal
            experience in
            helping them
            make the best
            decision in
            their best
            interest.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Alice loves
            the Bay Area
            and went to
            school in
            Cupertino and
            got her
            bachelor's at
            UC Berkeley.
            Though she
            started as an
            international
            student from
            Taiwan, Alice
            and her
            husband lived
            across the
            Bay Area and
            finally
            settled in
            the
            Tri-Valley.
            In her free
            time, she
            enjoys
            showing
            friends and
            clients alike
            her favorite
            food spots on
            YouTube.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            She speaks
            fluent
            Mandarin,
            Cantonese,
            Taiwanese,
            English, and
            some
            Japanese.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Alice is a
            member of the
            National
            Board of
            Realtors, the
            California
            Association
            of Realtors,
            and the Bay
            East
            Association
            of Realtors.
          </p>
        </>
      </TextWithImage>
      <Footer />
    </main>
  )
}
