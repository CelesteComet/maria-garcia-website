import PageTitle from '../components/PageTitle'
export default function Buying() {
  const content = [
    {
      title:
        'Find An Agent',
      text: "It's Free for you as sellers are paying the commission, why not?",
    },
    {
      title:
        'Pre-Approval',
      text: 'Shop houses after you receive a pre-approval letter from your lender. Meet with a lender to determine the max loan amount you are approved for. Prelim documents required: W-2s, pay stub, bank statements & tax returns',
    },
    {
      title:
        'Find A Home',
      text: 'Communicate your wants & needs to your Realtor, so that they can show you homes that fit your current needs',
    },
    {
      title:
        'Make An Offer',
      text: 'Your lender will work on getting your loan approved, while your Realtor takes care of the rest. Prepare to read & sign many documents',
    },
    {
      title:
        'Open Escrow',
      text: 'our lender will work on getting your loan approved, while your Realtor takes care of the rest. Prepare to read & sign many documents',
    },
    {
      title:
        'Inspection',
      text: 'Home inspection will be conducted by a professional home inspector. You will receive a list of repairs that may or may not need to be addressed.',
    },
    {
      title: 'Appraisal',
      text: 'Professional home appraiser will determine the value of the home. This is important, as it can potentially affect your loan.',
    },
    {
      title:
        'Request for Repairs',
      text: 'Inspection may reveal repairs that incur more costs. You will have an opportunity to request that the seller either makes these repairs or covers the cost.',
    },
    {
      title:
        'Contingency Removal',
      text: 'All contingencies for this sale will be removed. Loan approval will be one of these contingencies, confirming that you are ready to close.',
    },
    {
      title:
        'Final Walk-Through',
      text: 'Walk through the property with your Realtor to ensure that It is in the same condition and repairs have been made',
    },
    {
      title:
        'Close of Escrow',
      text: 'You are officially a NEW homeowner and your Realtor will deliver you your keys!',
    },
  ]
  return (
    <div className="container mx-auto">
      <PageTitle text="The Home Buying Process" />
      <div className="text-center">
        {content.map(
          (c, i) => {
            const stepNumber =
              i + 1
            return (
              <div
                key={
                  c.title
                }
              >
                <h3 className="pb-1">
                  {
                    stepNumber
                  }
                  -
                  {
                    c.title
                  }
                </h3>
                <p className="pb-5">
                  {
                    c.text
                  }
                </p>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
