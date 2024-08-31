package com.javaguides.springbootbackend.controller;

import com.javaguides.springbootbackend.exception.ResourceNotFoundException;
import com.javaguides.springbootbackend.model.Student;
import com.javaguides.springbootbackend.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/v1/")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @GetMapping(path = "/students")
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @PostMapping(path = "/students")
    public Student addStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @GetMapping(path = "/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        return ResponseEntity.ok(
        		studentRepository.findById(id)
                        .orElseThrow(
                                () -> new ResourceNotFoundException("Student does not exist for id: " + id)
                        ));
    }

    @PutMapping(path = "/students/{id}")
    public ResponseEntity<Student> updateStudent(
            @RequestBody Student student, @PathVariable Long id) {
    	Student std = studentRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Student not found for id: " + id));
    	std.setFirstName(student.getFirstName());
    	std.setLastName(student.getLastName());
    	std.setPhoneNo(student.getPhoneNo());
    	std.setAddress(student.getAddress());
        return ResponseEntity.ok(studentRepository.save(std));
    }

    @DeleteMapping(path = "/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id) {
        Student student = studentRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Student does not exist to delete"));
        studentRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
