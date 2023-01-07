import { Logo } from "./Logo";

export function Header() {
  

  return (
    <header className="w-full py-2 flex items-center justify-center bg-orange-600 border-b bg-gradient-to-r from-orange-600 to-orange-200">
      <Logo width="164" height="54"/>
    </header>
  )
}