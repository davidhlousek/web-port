
import { useState } from 'react'
export default function Lightbox({ images }) {
  const [selected, setSelected] = useState(null)
  return (
    <>
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <img src={selected} className="max-w-full max-h-full" />
          <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white text-2xl">✕</button>
        </div>
      )}
    </>
  )
}
