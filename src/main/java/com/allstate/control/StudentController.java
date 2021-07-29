package com.allstate.control;

import com.allstate.domain.Student;
import com.allstate.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/findAll")
    public List<Student> findAllStudents() {
        return service.findAllCourses();
    }

    @GetMapping("/findById")
    public Student findById(Long id) {
        return service.findById(id);
    }

    @GetMapping("/findByMajor")
    public List<Student> findByMajor(Long id) {
        return service.findAllCourses();
    }

    @PostMapping("/addStudent")
    public Student addCourse(Student student) {
        return service.addStudent(student);
    }
}
