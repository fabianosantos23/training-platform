import { Logo } from "../components/Logo";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Login() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    
    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/training')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex justify-between flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-white text-[2.5rem] leading-tight">
            Faça seu treinamento <strong className="text-gray-500">EAGLE</strong> 
          </h1>
          <p className="mt-4 text-white leading-relaxed">
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias.
          </p>
        </div>

        <div className="min-w-[390px] p-8 bg-white border border-white rounded">
          <strong className="text-2xl mb-6 block text-orange-400">Faça Login</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-white border border-orange-600 text-black rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome Completo" 
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-white border border-orange-600 text-black rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <button 
              type="submit"
              disabled={loading}
              className="mt-4 text-white bg-orange-400 uppercase py-4 rounded font-bold text-sm hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              Entrar na plataforma
            </button>
          </form>
        </div>
      </div>
      <img src="./src/assets/code-mockup.png" className="mt-20 max-w-[850px]" alt="" />
    </div>
  )
}