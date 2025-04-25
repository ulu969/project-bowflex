import { drizzle } from 'drizzle-orm/node-postgres'
import { lifts, sessions, exercises, users } from '@drizzle/schema'
import { eq, desc, asc } from 'drizzle-orm'
import { workoutsObj } from './assets/bowflex';

export const db = drizzle(import.meta.env.POSTGRES_URL!)

interface User {
  user_id: number
  user_name: string
  user_dob: string
}
interface Exercise {
  exer_id: number
  exer_name: string
  exer_page: number
  exer_musclegroup: string
}

interface Session {
  session_id: number
  session_date: string
  user_name: string | null
}

interface Lift {
  lift_id: number
  session_id: number
  user_name: string,
  session_date: string
  exer_name: string
  weight: number
  reps: number
  comments: string
}

export async function fetchUsers(): Promise<User[]> {
  try {
    const result = await db
      .select({
        user_id: users.userId,
        user_name: users.userName,
        user_dob: users.userDob,

      })
      .from(users)
    // .leftJoin(categories, eq(tasks.categoryId, categories.id))
    // .orderBy(desc(tasks.createdAt))
    return result as User[]


  } catch (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
}
export async function fetchExercises(): Promise<Exercise[]> {
  try {
    //for pagination
    const pageSize = 35
    const currentPage = 2
    const result = await db
      .select({
        exer_id: exercises.exerId,
        exer_name: exercises.exerName,
        exer_page: exercises.exerPage,
        exer_musclegroup: exercises.exerMusclegroup,

      })
      .from(exercises)
      // .leftJoin(categories, eq(tasks.categoryId, categories.id))
      // .limit(pageSize)
      // .offset((currentPage - 1) * pageSize)
      .orderBy(asc(exercises.exerPage))
    return result as Exercise[]


  } catch (error) {
    console.error('Error fetching exercises:', error)
    return []
  }
}
export async function fetchSessions(): Promise<Session[]> {
  try {
    const result = await db
      .select({
        session_id: sessions.sessionId,
        session_date: sessions.sessionDate,
        user_name: users.userName,
      })
      .from(sessions)
      .leftJoin(users, eq(sessions.userId, users.userId))

    return result as Session[]


  } catch (err) {
    console.error('Error fetching sessions: ', err)
    return []
  }
}

export async function fetchLifts(): Promise<Lift[]> {
  try {
    const result = await db
      .select({
        lift_id: lifts.liftId,
        session_id: lifts.sessionId,
        session_date: sessions.sessionDate,
        user_name: users.userName,
        exer_name: exercises.exerName,
        weight: lifts.weight,
        reps: lifts.reps,
        comments: lifts.comments
      })
      .from(lifts)
      .leftJoin(exercises, eq(lifts.exerId, exercises.exerId))
      .leftJoin(sessions, eq(lifts.sessionId, sessions.sessionId))
      .leftJoin(users, eq(sessions.sessionId, users.userId))
      .orderBy(desc(sessions.sessionDate))

    return result as Lift[]
  } catch (err) {
    console.error('Error fetching lifts: ', err)
    return [];
  }
}
export async function addSession(sessDate: string, sessUser: number) {
  try {
    await db.insert(sessions).values({
      sessionDate: sessDate,
      userId: sessUser,

    })

  } catch (err) {
    console.error(err)
  }
}

export async function addExercise(name: string, group: string, page: number) {
  try {
    await db.insert(exercises).values({
      exerName: name,
      exerMusclegroup: group,
      exerPage: page,
    })
  } catch (err: any) {
    console.error('Error adding exercises to database: ', err.message)
  }

}


//seed exercises with this 
export async function seedExercises() {

  console.log(workoutsObj[0]);
  for (const workout of workoutsObj) {
    //console.log('GROUP', workout.group);

    //console.log('Exercise', workout.exers[0].name);
    for (let i = 0; i < workout.exers.length; i++) {
      const group = workout.group;
      const name = workout.exers[i].name;
      const page = workout.exers[i].page;

      console.log(name, group, page);
      addExercise(name, group, page);
    }
  }
}