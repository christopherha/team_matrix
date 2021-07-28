package com.allstate.control;

import com.allstate.domain.Course;
import com.allstate.domain.Student;
import com.allstate.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("student/findAll")
    public List<Student> findAllStudents() {
        return service.findAllCourses();
    }

    @GetMapping("course/findById")
    public List<Student> findAllCourses(Long id) {
        return service.findAllCourses();
    }

    @GetMapping("course/findByMajor")
    public List<Student> findByMajor(Long id) {
        return service.findAllCourses();
    }
}
