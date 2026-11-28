import logo from '../assets/img/CubosMayanos.png'

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 py-4 px-5 bg-primario border-b-4 border-primario-claro md:flex-row md:justify-between md:px-8">
      <img className="h-12 w-auto" src={logo} alt="Cubos Mayanos" />
      <nav className="flex flex-wrap justify-center gap-6">
        <a className="font-bold uppercase text-texto hover:text-niebla focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-niebla hover:text-secundario-claro" href="#desarrollo">Development update</a>
        <a className="font-bold uppercase text-texto hover:text-niebla focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-niebla hover:text-secundario-claro" href="#equipo">About us</a>
      </nav>
      <button type="button" className="py-3 px-5 bg-primario-suave text-primario font-bold rounded-md cursor-pointer shadow-primario-claro shadow-b duration-150 hover:translate-y-0.5 hover:shadow-b-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secundario-claro">Add to wishlist!</button>
    </header>
  )
}