export default function PageTitle({
  text,
}: {
  text: string
}) {
  return (
    <div className="text-4xl text-center align-middle p-4">
      {text}
    </div>
  )
}
