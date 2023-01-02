import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Training() {
  const { slug } = useParams<{ slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={ slug } /> 
          : <div className="flex-1 flex justify-center items-center text-black">
              <span className="text-[2.5rem] flex">Selecione uma aula</span>  
            </div>
        }
        <Sidebar />
      </main>
    </div>
  ) 
}