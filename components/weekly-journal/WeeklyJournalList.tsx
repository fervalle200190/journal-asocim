import { FC } from "react"
import { WeeklyJournalItem } from "./WeeklyJournalItem"

export interface WeeklyActivity {
     weekDayName: string
     activities: string | string[]
}

export type WeeklyActivityList = WeeklyActivity[]

interface WeeklyJournalListProps {
     weeklyActivities: WeeklyActivityList
}

export const WeeklyJournalList: FC<WeeklyJournalListProps> = ({ weeklyActivities }) => {
     return (
          <div className='flex flex-col gap-4'>
               {weeklyActivities.map((activity, index) => (
                    <WeeklyJournalItem key={index} weeklyActivity={activity} />
               ))}
          </div>
     )
}
