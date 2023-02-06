import Mailchimp from 'react-mailchimp-form';
import styles from './styles.module.scss';
import { CustomForm } from './customForm';
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Newsletter(): JSX.Element {
  const buttonClass =
    'border-black border w-[150px] text-center text-black p-2 hover:bg-black hover:text-white transition-colors duration-300 mr-2'
  const url = "https://gmail.us17.list-manage.com/subscribe/post?u=449d52c33ea813b64ddb5f24f&amp;id=562c9df0d0&amp;f_id=00ca65e0f0";

  return (
    <div className={`flex flex-col justify-center items-center p-8 bg-[#F8F6F1] ${styles.newsletter}`}>
      <h1 className="text-3xl mt-8">
        Join The
        Exclusive
        List!
      </h1>
      <p className="mb-8">
        Receive
        Newsletters
        of
        Exclusive
        listings,
        Market
        Updates &
        More!
      </p>
      <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />      
      {/* <Mailchimp 
        action=""
        className=''
        fields={[
          {name: "EMAIL", placeholder: 'email', type: 'email', required: true},
          {name: "FNAME", placeholder: 'name', type: 'text', required: true},
        ]} />
      <form
        action='' method="POST"
        className="flex flex-col lg:flex-row justify-center items-center md:items-end"
      >
        <fieldset className='flex flex-col lg:flex-row mb-4 lg:mb-0'>
          <input type="hidden" name="u" value="449d52c33ea813b64ddb5f24f" />
          <input type="hidden" name="id" value="562c9df0d0" />
          <div className='flex flex-col'>
            <label htmlFor="b_name">Name</label>
            <input
              className="border border-black p-1 px-4 text-center rounded-md mr-4 mb-4 lg:mb-0"
              type="text"
              name="FNAME"
              id="mce-FNAME"
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="b_email">Email</label>
            <input
              className="border border-black p-1 px-4 text-center rounded-md mr-4"
              type="text"
              name="EMAIL"
              id="mce-EMAIL"
            />
          </div>
        </fieldset>
        <button
          className={`${buttonClass}`}
          type="submit"
        >
          Submit
        </button>
      </form> */}
    </div>
  )
}