import { drizzle } from 'drizzle-orm/node-postgres'
import { lifts, sessions, exercises, users } from '@drizzle/schema'
import { eq, desc } from 'drizzle-orm'
import Users from './pages/app/users.astro'
import { decodeBase64 } from 'hono/utils/encode'

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
    const result = await db
      .select({
        exer_id: exercises.exerId,
        exer_name: exercises.exerName,
        exer_page: exercises.exerPage,
        exer_musclegroup: exercises.exerMusclegroup,

      })
      .from(exercises)
    // .leftJoin(categories, eq(tasks.categoryId, categories.id))
    // .orderBy(desc(tasks.createdAt))
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