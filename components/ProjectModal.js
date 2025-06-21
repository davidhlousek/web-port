import Image from 'next/image'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-4xl w-full rounded shadow-lg overflow-y-auto max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()} // zabrání zavření při kliknutí dovnitř
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-black font-bold text-xl px-3 z-10">
          &times;
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-700 mb-4">{project.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <img key={i} src={img} alt={project.title + ' ' + i} className="rounded border" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}