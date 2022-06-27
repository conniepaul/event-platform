import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export default function Lesson(props: LessonProps) {

const isLessonAvailable = isPast(props.availableAt);
const availableDateFormatted = format(props.availableAt, "EEEE' • 'MMMM d', 'k'h'mm")

  return (
    <a href="#">
      <span className="text-brandAccentBlue m-2 text-sm">  {availableDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 m-2">
        <header className="flex items-center justify-between">

          {isLessonAvailable ? ( <span className="font-medium text-sm text-brandPink flex items-center gap-2">
            <CheckCircle size={20}></CheckCircle>
            Content Available
          </span>) : ( <span className="font-medium text-sm text-brandOrange flex items-center gap-2">
            <Lock size={20}/>
            Soon
          </span>) }

         
          <span className=" text-xs rounded px-2 py-[0.125rem] text-brandWhite border border-brandPink font-bold">
            {props.type === 'live' ? 'LIVESTREAM' : 'PRE-REC'}
          </span>
        </header>
        <strong className="text-brandWhite mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}
