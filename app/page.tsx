"use client"
import { TypeAnimation } from "react-type-animation"
import { AnimatedCircle } from "../components/round/AnimatedCircle"
import { AnimatedRedCircle } from "@/components/round/AnimatedRedCircle"
import { WeeklyJournalList } from "@/components/weekly-journal/WeeklyJournalList"
import { weeklyActivityList } from "@/components/weekly-journal/weeklyActivitylList"
import { eventActivityList } from "@/components/weekly-journal/eventActivityList"
import { emotionsActivityList } from "@/components/weekly-journal/emotionsActivityList"

export default function Home() {
     return (
          <main className='text-white scroll-smooth'>
               <div className='fixed top-0'>
                    <AnimatedCircle translateX={50} translateY={300} />
               </div>
               <div className='fixed bottom-0 right-0'>
                    <AnimatedRedCircle translateX={-50} translateY={-300} />
               </div>
               <div className='flex min-h-screen flex-col items-center justify-between p-2 bg-gradient-to-r from-[#373b44] to-[#4286f4] -z-11'>
                    <div className='fixed border-2 border-gray-400 rounded-ful p-2 px-4 top-8 flex gap-4 backdrop-blur-md rounded-full z-50'>
                         <div className='rounded border-gray-400 hover:bg-white/20 hover:backdrop-invert p-1 px-2 cursor-pointer backdrop-opacity-10'>
                              <a href='#home'>Headline</a>
                         </div>
                         <div className='rounded border-gray-400 hover:bg-white/20 hover:backdrop-invert p-1 px-2 cursor-pointer backdrop-opacity-10'>
                              <a href='#weekly'>Weekly</a>
                         </div>
                         <div className='rounded border-gray-400 hover:bg-white/20 hover:backdrop-invert p-1 px-2 cursor-pointer backdrop-opacity-10'>
                              <a href='#event'>Event</a>
                         </div>
                         <div className='rounded border-gray-400 hover:bg-white/20 hover:backdrop-invert p-1 px-2 cursor-pointer backdrop-opacity-10 '>
                              <a href='#emotions'>Emotions</a>
                         </div>
                    </div>
                    <div id='home' className='min-h-screen flex justify-center items-center'>
                         <div className='w-[150px]'>
                              <TypeAnimation
                                   sequence={[
                                        "Welcome",
                                        1000,
                                        "Bienvenido",
                                        1000,
                                        "Bienvenue",
                                        1000,
                                        "Benvenuto",
                                        1000,
                                        "Willkommen",
                                        1000,
                                   ]}
                                   cursor
                                   repeat={Infinity}
                                   className='text-3xl font-bold z-20 relative'
                              />
                              <h1 className='z-20 relative'>Fernando's Journal</h1>
                         </div>
                    </div>
                    <div
                         id='weekly'
                         className='min-h-screen z-10 pt-32 w-[90%] max-w-[1400px]'
                    >
                         <h2 className='text-2xl font-bold text-center mb-4'>
                              Weekly Journal
                         </h2>
                         <WeeklyJournalList weeklyActivities={weeklyActivityList} />
                    </div>
                    <div id='event' className='min-h-screen pt-32 z-10 w-[90%] max-w-[1400px]'>
                         <h2 className='text-2xl font-bold text-center mb-4'>Event Journal</h2>
                         <WeeklyJournalList weeklyActivities={eventActivityList} />
                    </div>
                    <div
                         id='emotions'
                         className='min-h-screen pt-32 z-10 w-[90%] max-w-[1400px]'
                    >
                         <h2 className='text-2xl font-bold text-center mb-4'>
                              Emotions Journal
                         </h2>
                         <WeeklyJournalList weeklyActivities={emotionsActivityList} />
                    </div>
                    <div className='min-h-screen pt-32 z-10 w-[90%] max-w-[1400px] flex justify-center items-center'>
                         <TypeAnimation
                              sequence={[
                                   "End.",
                                   1000,
                                   "Fin.",
                                   1000,
                                   "Fine.",
                                   1000,
                                   "Ende.",
                                   1000,
                              ]}
                              cursor
                              repeat={Infinity}
                              className='text-3xl font-bold z-20 relative'
                         />
                    </div>
               </div>
          </main>
     )
}
