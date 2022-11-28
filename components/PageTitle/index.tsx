export default function PageTitle({
  text,
}: {
  text: string
}) {
  return (
    <div className="bg-[#f4f4f4] flex justify-center items-center text-4xl h-48 p-8">
      {text}
    </div>
  )
}
