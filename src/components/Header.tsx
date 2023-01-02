import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-orange-600 border-b border-orange-500">
      <Logo />
    </header>
  )
}