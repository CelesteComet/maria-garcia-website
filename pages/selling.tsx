import PageTitle from '../components/PageTitle'

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
  ]
  return (
    <div className="container mx-auto">
      <div>
        <div>
          add image
        </div>
        <p>
          Get fronted for
          the cost of
          home
          improvement
          services with
          no interest -
          ever.
        </p>
      </div>
      <div>
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
      </div>
      <div className="selling-page__stats-container">
        <div className="selling-page__stats">
          {stats.map(
            (s) => {
              return (
                <div>
                  <h3>
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
        <p>
          Source:
          National
          Association of
          Realtors, 2019
        </p>
      </div>
      <div>
          <h2>Covered Services</h2>
          <ul></ul>
          <ul></ul>
          
      </div>
    </div>
  )
}
