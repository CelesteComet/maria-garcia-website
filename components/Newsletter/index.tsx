import Mailchimp from 'react-mailchimp-form';
import styles from './styles.module.scss';
import { CustomForm } from './customForm';
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Newsletter(): JSX.Element {
  const url = "https://compass.us17.list-manage.com/subscribe/post?u=986b8f91313c901555be760bf&amp;id=a5caea902c&amp;f_id=00ae57e0f0";

  return (
    <div className={`flex flex-col justify-center items-center p-8 bg-[#F8F6F1] ${styles.newsletter} text-center`}>
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
    </div>
  )
}