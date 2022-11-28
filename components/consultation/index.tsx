import Image from "next/image"

export default function Consultation(): JSX.Element {
    const buttonClass =
        'border-black border w-[150px] text-center text-black p-2 hover:bg-black hover:text-white transition-colors duration-300 mr-2'
    return (
        <div className='flex flex-col md:flex-row justify-center bg-[#f4f4f4] p-8 items-center'>
            <div><Image className='w-64 md:w-32 m-4' src='/round-alice.png' alt="Alice Wu" /></div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center md:text-left text-3xl pb-4'>Book a Free consultation with Alice!</h2>
                <a className={buttonClass} href='https://calendly.com/alicerealtor'>Book Now</a>
            </div>
        </div>
    )
}