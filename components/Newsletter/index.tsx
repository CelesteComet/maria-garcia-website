export default function Newsletter(): JSX.Element {
  const buttonClass =
    'border-black border w-[150px] text-center text-black p-2 hover:bg-black hover:text-white transition-colors duration-300 mr-2'
  return (
    <div className='flex flex-col justify-center items-center p-8 bg-[#F8F6F1]'>
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
      <form
        action="https://gmail.us17.list-manage.com/subscribe/post" method="POST"
        className="flex flex-col lg:flex-row justify-center items-end"
      >
        <fieldset className='flex flex-col lg:flex-row mb-4 lg:mb-0'>
          <input type="hidden" name="u" value="449d52c33ea813b64ddb5f24f" />
          <input type="hidden" name="id" value="562c9df0d0" />
          <div className='flex flex-col'>
            <label htmlFor="b_name">Name</label>
            <input
              className="border border-black p-1 px-4 text-center rounded-md mr-4 mb-4 lg:mb-0"
              type="text"
              name="b_name"
              id="b_name"
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="b_email">Email</label>
            <input
              className="border border-black p-1 px-4 text-center rounded-md mr-4 min-w-[500px]"
              type="text"
              name="b_email"
              id="b_email"
            />
          </div>
        </fieldset>
        <button
          className={`${buttonClass}`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}