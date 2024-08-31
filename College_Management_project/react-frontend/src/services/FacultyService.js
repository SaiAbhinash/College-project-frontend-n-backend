import axios from 'axios'

class FacultyService {

  getAllFaculties() {
    return axios.get('http://localhost:8080/api/v1/faculties')
  }

  addFaculty(faculty) {
    return axios.post('http://localhost:8080/api/v1/faculties', faculty)
  }

  getFacultyById(facultyId) {
    return axios.get('http://localhost:8080/api/v1/faculties/' + facultyId)
  }

  updateFaculty(faculty, id) {
    return axios.put('http://localhost:8080/api/v1/faculties/' + id, faculty)
  }

  deleteFaculty(facultyId) {
    return axios.delete('http://localhost:8080/api/v1/faculties/' + facultyId)
  }
}

export default new FacultyService();