import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"
import { Footer } from "../components/Footer"

export function Training() {
  const { slug } = useParams<{ slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={ slug } /> 
          : <div className="flex-1 relative flex flex-col justify-center pb-28 items-center text-black">
              <span className="text-[2.5rem] flex">Selecione uma aula</span>
              <div className="w-full absolute bottom-0">
                <Footer />
              </div>
            </div>
        }
        <Sidebar />
      </main>
    </div>
  ) 
}