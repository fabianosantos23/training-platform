import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.avaliableAt);
  const availableDateFormatted = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug == props.slug


  return (
    <Link to={`/training/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div 
        className={classNames(
          'rounded-2xl p-4 mt-2 group-hover:border-green-500',
          { 'bg-blue-600': isActiveLesson,
            'bg-gray-50': !isActiveLesson
          }
        )}
      
      >
        <header className="flex items-center justify-between">

          {isLessonAvailable ? (
            <span
            className={classNames(
              'text-sm font-medium flex items-center gap-2',{ 
                'text-white': isActiveLesson,
                'text-orange-500': !isActiveLesson
              }
            )}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20} />
            Em breve
          </span>
          )}

          <span 
            className={classNames(
              'text-xs rounded py-[2px] px-2 border font-bold',{ 
                'border-white text-white': isActiveLesson,
                'border-orange-500 text-orange-500': !isActiveLesson
              }
            )}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames(
          'mt-5 block',{ 
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson
          }
        )}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}