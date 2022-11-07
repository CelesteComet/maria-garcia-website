import Link from 'next/link'
import Navigation from '../components/navigation'
import TextWithImage from '../components/TextWithImage'
import Hero from '../components/hero'

export default function IndexPage() {
  return (
    <main>
      <Navigation />
      <Hero
        backgroundImage="/hero.jpg"
        button={{
          text: 'Book a Consultation',
          link: '/book',
        }}
      />
      <TextWithImage
        text="Coming from an entrepreneurship and marketing background, as well as having worked at multiple global luxury brands and startups for over 8 years. Alice decided to go all in on her true passion for real estate. Bringing in her expertise from past endeavors, she brings to her clients a unique and personal experience in helping them make the best decision in their best interest.

Alice loves the Bay Area and went to school in Cupertino and got her bachelor's at UC Berkeley. Though she started as an international student from Taiwan, Alice and her husband lived across the Bay Area and finally settled in the Tri-Valley. In her free time, she enjoys showing friends and clients alike her favorite food spots on YouTube.

She speaks fluent Mandarin, Cantonese, Taiwanese, English, and some Japanese.

Alice is a member of the National Board of Realtors, the California Association of Realtors, and the Bay East Association of Realtors."
        image="/alice.jpg"
        alt="Alice Wu"
      />
    </main>
  )
}
