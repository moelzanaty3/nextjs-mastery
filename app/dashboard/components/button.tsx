export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  )
}
