import { buttonClass } from "../../pages";

export const CustomForm = ({ status, message, onValidated }) => {
    let email, name;

    const submit = () => {
        onValidated({
          EMAIL: email.value,
          NAME: name.value
        });               
    }

    if (status === 'success') {
        return <p>Thank you for subscribing!</p>
    }

    return (
        <div className='flex-col md:flex-row'>
            <fieldset className="flex flex-col md:inline md:mt-0">
            <label htmlFor="name">Name: </label>
            <input 
                id="name"
                type='text'
                className="border border-black p-1 px-4 text-center rounded-md md:mr-4 mr-0 "
                required
                ref={node => (name = node)} />
                </fieldset>
                <fieldset className="flex flex-col md:inline  mt-4 md:mt-0">
            <label htmlFor="email">Email: </label>
            <input 
                id="email"
                className="border border-black p-1 px-4 text-center rounded-md md:mr-4 mr-0"
                type='email'
                required
                ref={node => (email = node)} />    
                </fieldset>
            <button className={`${buttonClass} mt-4 md:mt-0`} onClick={submit}>Subscribe</button>
            {status === 'error' && <p>An error occurred, please try again later.</p>}
            {status === 'sending' && <p>Sending...</p>}
            {status === 'success' && <p>Thank you for subscribing!</p>}
        </div>

    )
  };