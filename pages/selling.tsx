import Consultation from '../components/consultation';
import Image from 'next/image';

export default function Buying() {
  const stats = [
    {
      title: '54%',
      text: 'The percentage of homebuyers willing to pay more for hardwood floors',
    },
    {
      title: '$400',
      text: 'The potential return of every $100 you invest in staging your home',
    },
    {
      title: '53%',
      text: "The percentage of seller's agents who say staging decreases a property's time on",
    },
  ];

  const services = [
    "Floor repair",
    "Carpet cleaning & replacement",
    "Staging",
    "Deep-cleaning",
    "Decluttering",
    "Cosmetic renovations",
    "Landscaping",
    "Interior & exterior painting",
    "HVAC",
    "Roofing repair",
    "Moving & Storage",
    "Pest Control",
    "Custom closet work",
    "Fencing",
    "Electrical work",
    "Seller-side inspections & evaluations",
    "Kitchen improvements",
    "Bathroom improvements",
    "Pool & tennis court services",
    "Water heating & plumbing repair",
    "Sewer lateral inspections & remediation",
    "More than 100 other home improvement services"
  ];


  return (
    <div>
      <div className='flex flex-col lg:flex-row p-8 justify-between align-end text-2xl container mx-auto'>
        <Image width="300" height="80" className='max-w-md mb-4 md:mr-8 lg:mb-0' src='/compass-concierge.png' alt='Compass Concierge' />
        <p className='flex items-end'>
          Get fronted for
          the cost of
          home
          improvement
          services with
          no interest -
          ever.
        </p>
      </div>
      {/* <div className='p-8 container mx-auto'>
        <div>
          add other image
        </div>
        <p>
          Compass
          Concierge is
          the hassal-free
          way to sell
          your home
          faster and for
          a higher price
          with services
          like staging,
          flooring,
          painting, and
          more.
        </p>
      </div> */}
      <div className="selling-page__stats-container p-8 container mx-auto">
        <div className="selling-page__stats flex flex-col md:flex-row justify-center">
          {stats.map(
            (s, i) => {
              const border = i === 1 ? 'md:border-r-4 md:border-l-4' : ''
              return (
                <div className={`flex flex-col ${border} items-center justify-center pb-4 pt-4 md:p-4 text-center`}>
                  <h3 className='text-6xl mb-2 md:mb-8'>
                    {
                      s.title
                    }
                  </h3>
                  <p>
                    {
                      s.text
                    }
                  </p>
                </div>
              )
            }
          )}
        </div>
        <p className='text-right mt-4'>
          Source:
          National
          Association of
          Realtors, 2019
        </p>
      </div>
      <div className='bg-[#f4f4f4] p-8'>
        <div className='container mx-auto'>
          <h2 className='text-6xl mb-4'>Covered Services</h2>
          <div>
            <ul className='columns-2 md:columns-3 list-disc'>{services.map(s => {
              return <li className='text-xl'>{s}</li>
            })}</ul>
          </div>
        </div>
      </div>
      <div className='container mx-auto flex flex-col justify-center p-8'>
        <h2 className='text-6xl mb-4 mx-auto'>How it Works</h2>
        <div className='flex flex-col md:flex-row'>
          <Image width="384" height="489" className='w-96 mr-8 mx-auto mb-8' src='/dining-room.jpg' alt='dining room' />
          <div className='grid grid-cols-2 grid-rows-2 gap-4'>
            <div>
              <h4 className='text-3xl mb-2'>Step 1</h4>
              <p>Work with Alice to decide which services can increase your home's value the most and set an estimated budget for the work.</p>
            </div>
            <div>
              <h4 className='text-3xl'>Step 2</h4>
              <p>When you are ready to start, Alice will be by your side as you engage vendors and commission work.</p>
            </div>
            <div>
              <h4 className='text-3xl'>Step 3</h4>
              <p>Once the transformation is complete, your home will go on the market.</p>
            </div>
            <div>
              <h4 className='text-3xl'>Step 4</h4>
              <p>You'll pay for the services when one of the following happens - your home sells, you terminate your listing agreement with Compass, or 12 months pass from your Concierge start date.</p>
            </div>

          </div>
        </div>
      </div>
      <Consultation />
    </div>
  )
}
