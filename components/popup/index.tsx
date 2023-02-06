import Modal from 'react-modal'
import { useState } from 'react'
import Image from 'next/image'

export default function Popup(): JSX.Element {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight:
        '-50%',
      transform:
        'translate(-50%, -50%)',
      background:
        'black',
      color: 'white',
    },
  }
  const [
    isModalOpen,
    setIsModalOpen,
  ] =
    useState<boolean>(
      true
    )

  const [
    isThankYou,
    setIsThankYou,
  ] =
    useState<boolean>(
      false
    )

  const [
    inputText,
    setInputText,
  ] =
    useState<string>('')

  const closeModal =
    () => {
      setIsModalOpen(
        false
      )
    }

  const setInputTextFromForm =
    (
      e: React.FormEvent<HTMLInputElement>
    ) => {
      e.preventDefault()
      setInputText(
        (e.target as any)
          .value
      )
    }

  const saveEmailToBackend =
    (e: any) => {
      // e.preventDefault()
      console.log(
        (e.target as any)
          .email.value
      )
      setIsThankYou(true)
    }

  return (
    <Modal
      isOpen={
        isModalOpen
      }
      onRequestClose={
        closeModal
      }
      style={
        customStyles
      }
      contentLabel="Example Modal"
    >
      <div>
        <button
          className="ml-auto w-full"
          onClick={
            closeModal
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={
              1.5
            }
            stroke="currentColor"
            className="w-6 h-6 ml-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Image
          width="112"
          height="112"
          className="mx-auto"
          src="/logo.png"
          alt={`${process.env.name} logo`}
        />

        {isThankYou && (
          <div>
            <h1 className="text-3xl mt-8">
              Thank you
              for
              joining!
            </h1>
          </div>
        )}

        {!isThankYou && (
          <>
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
              action="https://gmail.us17.list-manage.com/subscribe/post?u=449d52c33ea813b64ddb5f24f&amp;id=562c9df0d0&amp;f_id=00ca65e0f0"
              className="flex flex-row"
              onSubmit={
                saveEmailToBackend
              }
            >
              <fieldset>
                {/* <label
              className="mr-4"
              htmlFor="email"
            >
              Email:
            </label> */}
                <input
                  className="border-2 border-white p-1 px-4 text-center  rounded-md mr-4"
                  type="text"
                  name="email"
                  id="mce-EMAIL"
                  value={
                    inputText
                  }
                  placeholder="Email"
                  onChange={
                    setInputTextFromForm
                  }
                />
              </fieldset>
              <button
                className="border-white border-2 p-1 px-4 rounded-md text-white hover:text-black hover:bg-white transition-colors duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  )
}
