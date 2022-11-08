import Image from 'next/image'
export interface TextWithImageProps {
  title?: string
  image: string
  alt: string
  children: JSX.Element
}

export default function TextWithImage({
  title,
  image,
  alt,
  children,
}: TextWithImageProps): JSX.Element {
  return (
    <div className="container flex-col-reverse md:flex-row flex p-8 mx-auto">
      <div className="w-full md:w-1/2 mr-8">
        {title && (
          <h2 className="text-3xl mb-8">
            {title}
          </h2>
        )}
        {children}
      </div>
      <div className="w-full md:w-1/2">
        <Image
          width={286 * 2}
          height={
            325 * 2
          }
          className="w-1/2 pb-8 md:pb-0 md:w-full"
          src={image}
          alt={alt}
        />
      </div>
    </div>
  )
}
