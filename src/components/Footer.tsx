import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full py-2 px-6 flex items-center justify-between bg-blue-600 border-">
      <div className="flex items-center gap-16">
      <Logo width="112" height="38"/>
      <span className="text-gray-400">Eagle - Todos os direitos reservados</span>
      </div>
      
      <span className="text-gray-400">Políticas de privacidade</span>
    </footer>
  )
}