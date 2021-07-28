package com.allstate.control;

import com.allstate.domain.Student;
import com.allstate.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService service;

    private static final String GROUP_QUAL = "student/";

    @GetMapping(GROUP_QUAL + "findAll")
    public List<Student> findAllStudents() {
        return service.findAllCourses();
    }

    @GetMapping(GROUP_QUAL + "findById")
    public Student findById(Long id) {
        return service.findById(id);
    }

    @GetMapping(GROUP_QUAL + "findByMajor")
    public List<Student> findByMajor(Long id) {
        return service.findAllCourses();
    }

    @PostMapping(GROUP_QUAL + "addStudent")
    public Student addCourse(Student student) {
        return service.addStudent(student);
    }
}
