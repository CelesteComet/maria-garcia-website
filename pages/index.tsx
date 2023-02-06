import TextWithImage from '../components/TextWithImage'
import Hero from '../components/hero'
import Footer from '../components/footer'
import React from 'react'
import Popup from '../components/popup'
import Newsletter from '../components/Newsletter'

export const buttonClass =
'border-black border min-w-[150px] text-center text-black p-2 hover:bg-black hover:text-white transition-colors duration-300 mr-2'

export default function IndexPage() {
  const paragraphClass =
    'mb-4'

  return (
    <main>
      {/* <Popup /> */}
      <Hero
        backgroundImage="/hero.jpg"
        button={{
          text: 'Book a Consultation / Reserva tu consulta',
          link: process.env.calendly
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
              href="/selling"
            >
              List a Home
            </a>
            <a
              className={
                buttonClass
              }
              href="/buying"
            >
              Buy a Home
            </a>
          </div>
        </div>

      </section>
      <iframe src={process.env.publicCollection} width="100%" height="1500"></iframe>
      <TextWithImage
        title={`About ${process.env.name}`}
        image="/maria.jpg"
        alt={process.env.name}
      >
        <>
          <p
            className={
              paragraphClass
            }
          >Originally from Sonora, Mexico, Maria was brought to the Central Valley when she was a toddler. As a bilingual woman, this savvy realtor takes great pride in her Mexican heritage and her extensive knowledge of the Central Valley region as well.
            </p>
            <p className={paragraphClass}>Maria is inspired by helping her community members attain the American Dream of owning their own home. She is determined to provide her clients with first-class customer service as she guides them through the process. Clients are ensured of a clear understanding every step of the way.
</p><p className={paragraphClass}>Ms. Garcia possesses grit and the devotion needed to assist with her client’s needs and help them to realize their dreams and successfully attain them. She is consistently up for a challenge and the art of negotiation helps flex her homebuying or selling muscles. Maria enjoys working with like-minded clients who share the same respectful values in each transaction. 
</p><p className={paragraphClass}>Her charisma and loyalty are the two characteristics attributing to her success. Ms. Garcia is humbled that her business is mostly referral-based, and that her passion for helping others is what has turned a considerable number of clients into long-term friends. 
</p><p className={paragraphClass}>Clients describe Maria as friendly, unassuming, patient and a delight to work with. </p><p className={paragraphClass}>In what spare time Maria might have, she enjoys good food and being surrounded by family and friends.</p>

        </>

      </TextWithImage>
      <Newsletter />
    </main>
  )
}
