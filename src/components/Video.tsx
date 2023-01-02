import { Player, DefaultUi, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string
}

export function Video( props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
      variables: {
        slug: props.lessonSlug
      }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  console.log(data)

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-black">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-black leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6 ">
                <img 
                  className="h-16 2-16 rounded-full border-2 border-orange-600"
                  src={data.lesson.teacher.avatarURL} alt="" 
                />
                <div className="leading-relaxed">
                  <strong className="font-blue text-2xl block text-black">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-black text-sm block">
                  {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="" className="p-4 text-sm border border-orange-600 text-orange-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-600 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
      
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="" className="bg-orange-400 rounded overflow-hidden flex items-stretch gap-6 hover:bg-orange-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl text-white">Material Complementar</strong>
              <p className="text-sm text-white mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="bg-orange-400 rounded overflow-hidden flex items-stretch gap-6 hover:bg-orange-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl text-white">Wallpapers exclusivos</strong>
              <p className="text-sm text-white mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}