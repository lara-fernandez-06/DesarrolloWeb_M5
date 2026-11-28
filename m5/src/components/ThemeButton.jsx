// Al cargar, usa la preferencia del sistema
document.documentElement.classList.toggle(
  'dark',
  window.matchMedia('(prefers-color-scheme: dark)').matches
)

export default function BotonTema() {
  return (
    <button
      type="button"
      onClick={() => document.documentElement.classList.toggle('dark')}
      className="cursor-pointer rounded-md border-2 border-primario-claro px-3 py-2 font-bold text-texto"
    >
      <span className="dark:hidden">Modo oscuro</span>
      <span className="hidden dark:inline">Modo claro</span>
    </button>
  )
}