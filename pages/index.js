import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="sticky top-0 bg-white z-50 flex justify-between items-center px-6 py-4 border-b shadow-sm">
        <h1 className="text-lg font-bold tracking-tight">PORTFOLIO</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">Domů</Link>
          <Link href="/portfolio" className="hover:underline">Moje Práce</Link>
          <Link href="/about" className="hover:underline">O mně</Link>
          <Link href="/contact" className="hover:underline">Kontakt</Link>
        <a href="https://www.dropbox.com/scl/fi/fxjtek12abgl749mmiale/_portfolio-2025.paper?rlkey=0g0p84pgb6p81ppb9hx2knidb&st=07xr5wl8&dl=0" target="_blank" rel="noopener noreferrer" className="hover:underline">PDF Portfolio</a></nav>
      </header>

      <main className="min-h-screen flex flex-col justify-center items-center text-center p-4 space-y-6">
        <h2 className="text-5xl font-bold">Vizuální design, který rezonuje.</h2>
        <p className="text-sm text-gray-600 max-w-xl">
          Tvořím loga, weby a identity, které nezapadnou.  
          Prozkoumej moje práce nebo mě rovnou kontaktuj.
        </p>
        <div className="flex space-x-4">
          <Link href="/portfolio" className="px-6 py-2 border rounded hover:bg-black hover:text-white transition-all duration-200 text-sm shadow-sm">Portfolio</Link>
          <Link href="/contact" className="px-6 py-2 border rounded hover:bg-black hover:text-white transition-all duration-200 text-sm shadow-sm">Kontaktuj mě</Link>
        </div>
      </main>

      <section className="bg-black text-white text-center py-12 mt-12 px-4">
        <h3 className="text-2xl font-semibold mb-2">Připraven začít?</h3>
        <p className="text-sm mb-4">Ozvi se a vytvoříme spolu něco výjimečného.</p>
        <Link href="/contact" className="inline-block px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition">Kontakt</Link>
      </section>
    </>
  )
}