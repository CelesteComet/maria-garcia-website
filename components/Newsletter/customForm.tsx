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
        <div>
            <label htmlFor="name">Name: </label>
            <input 
                id="name"
                type='text'
                className="border border-black p-1 px-4 text-center rounded-md mr-4"
                required
                ref={node => (name = node)} />
            <label htmlFor="email">Email: </label>
            <input 
                id="email"
                className="border border-black p-1 px-4 text-center rounded-md mr-4"
                type='email'
                required
                ref={node => (email = node)} />    
            <button className={buttonClass} onClick={submit}>Subscribe</button>
            {status === 'error' && <p>An error occurred, please try again later.</p>}
            {status === 'sending' && <p>Sending...</p>}
            {status === 'success' && <p>Thank you for subscribing!</p>}
        </div>

    )
  };