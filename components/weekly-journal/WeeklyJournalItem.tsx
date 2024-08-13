import { FC } from "react"
import { WeeklyActivity } from "./WeeklyJournalList"

interface WeeklyJournalItemProps {
     weeklyActivity: WeeklyActivity
}

export const WeeklyJournalItem: FC<WeeklyJournalItemProps> = ({ weeklyActivity }) => {
     return (
          <div className='flex-1 backdrop-blur-2xl p-4 rounded-md border border-slate-300 shadow-sm'>
               <h5 className='font-bold text-lg'>{weeklyActivity.weekDayName}</h5>
               {typeof weeklyActivity.activities === "string" ? (
                    <p>{weeklyActivity.activities}</p>
               ) : (
                    <ul className='list-disc pl-8'>
                         {weeklyActivity.activities.map((activity, index) => (
                              <li key={index}>{activity}</li>
                         ))}
                    </ul>
               )}
          </div>
     )
}
