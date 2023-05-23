import { Student, StudentsList } from 'types/student.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string) =>
  http.get<StudentsList>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
export const getStudent = (id: number | string) => http.get<Student>(`students/${id}`)

export const addStudent = (student: Omit<Student, 'id'>) => http.post<Student>('students', student)

export const updateStudent = (id: number | string, student: Student) => http.put<Student>(`students/${id}`, student)

export const deleteStudent = (id: number | string) => http.delete<{}>(`students/${id}`)
