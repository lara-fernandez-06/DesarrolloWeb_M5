import explora from '../assets/img/explora.jpeg'
import resuelve from '../assets/img/resuelve.jpeg'
import descubre from '../assets/img/descubre.jpeg'

const tarjetas = [
  { titulo: 'Explora', imagen:  explora},
  { titulo: 'Resuelve', imagen: resuelve},
  { titulo: 'Descubre', imagen: descubre },
]

export default function Info(){

    return(
        
        <section className="px-5 py-16 md:px-8">
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
                <h1 className="drop-shadow-b drop-shadow-primario">
                    {/*lo que hacemos es el degradado y lo clipeamos a las letras*/}
                    <span className="bg-linear-to-b from-titulo-arriba to-titulo-abajo bg-clip-text text-4xl font-black uppercase tracking-widest text-transparent sm:text-6xl md:text-7xl">
                    Cubos Mayanos
                    </span>
                </h1>
                <div aria-hidden="true" className="h-1 w-40 rounded-full bg-primario-claro"></div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {tarjetas.map((tarjeta) => (
                <article key={tarjeta.titulo} className="overflow-hidden rounded-md border-b-4 border-primario-claro bg-primario">
                    <img className="aspect-video w-full object-cover" src={tarjeta.imagen} alt="" />
                    <h3 className="p-4 text-center text-xl font-bold uppercase text-blanco">{tarjeta.titulo}</h3>
                </article>
                ))}
            </div>
            <div className="mx-auto mb-12 flex max-w-2xl flex-col gap-4 px-5 py-9 text-justify text-texto">
                <p className="text-lg leading-relaxed md:text-xl">
                    Entra en las ruinas de este templo perdido en el tiempo y descubre una reliquia maya caída en el olvido.
                    Pero no será tan fácil, pues el templo está repleto de secretos, puzles y trampas que solo los más ágiles y astutos serán capaces de superar.
                </p>
                <p className="text-xl font-bold md:text-2xl">
                    ¿Qué tesoros se esconderán en este lugar histórico? ¿Te atreves a averiguarlo?
                </p>
            </div>
        </section>
    )

}