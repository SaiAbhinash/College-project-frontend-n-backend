import axios from 'axios'

class StudentService {

  getAllStudents() {
    return axios.get('http://localhost:8080/api/v1/students')
  }

  addStudent(student) {
    return axios.post('http://localhost:8080/api/v1/students', student)
  }

  getStudentById(studentId) {
    return axios.get('http://localhost:8080/api/v1/students/' + studentId)
  }

  updateStudent(student, id) {
    return axios.put('http://localhost:8080/api/v1/students/' + id, student)
  }

  deleteStudent(studentId) {
    return axios.delete('http://localhost:8080/api/v1/students/' + studentId)
  }
}

export default new StudentService();