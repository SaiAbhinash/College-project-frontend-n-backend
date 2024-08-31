package com.javaguides.springbootbackend.controller;

import com.javaguides.springbootbackend.exception.ResourceNotFoundException;
import com.javaguides.springbootbackend.model.Faculty;
import com.javaguides.springbootbackend.repository.FacultyRepository;
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
public class FacultyController {

    @Autowired
    FacultyRepository facultyRepository;

    @GetMapping(path = "/faculties")
    public List<Faculty> getFaculties() {
        return facultyRepository.findAll();
    }

    @PostMapping(path = "/faculties")
    public Faculty addFaculty(@RequestBody Faculty faculty) {
        return facultyRepository.save(faculty);
    }

    @GetMapping(path = "/faculties/{id}")
    public ResponseEntity<Faculty> getFacultyById(@PathVariable Long id) {
        return ResponseEntity.ok(
        		facultyRepository.findById(id)
                        .orElseThrow(
                                () -> new ResourceNotFoundException("Faculty does not exist for id: " + id)
                        ));
    }

    @PutMapping(path = "/faculties/{id}")
    public ResponseEntity<Faculty> updateFaculty(
            @RequestBody Faculty faculty, @PathVariable Long id) {
    	Faculty facul = facultyRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Faculty not found for id: " + id));
    	facul.setFirstName(faculty.getFirstName());
    	facul.setLastName(faculty.getLastName());
    	facul.setEmail(faculty.getEmail());
        return ResponseEntity.ok(facultyRepository.save(facul));
    }

    @DeleteMapping(path = "/faculties/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteFaculty(@PathVariable Long id) {
    	Faculty faculty = facultyRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Faculty does not exist to delete"));
        facultyRepository.delete(faculty);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
