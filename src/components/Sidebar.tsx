import React from 'react'
import Lesson from './Lesson'
import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: "live" | "class"
  }[]
}

export default function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY) 
  console.log(data)
  return (
    <aside className="w-[348px] bg-brandDarkBlue p-6 border-l border-brandLightBlue" >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-brandLightBlue block"> Lesson Timetable</span>
      <div className="flex flex-col gap-8">

      {data?.lessons.map(lesson => {
        return (
          <Lesson 
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        )
      })}


       
        
      </div>
    </aside>
    
  )
}
