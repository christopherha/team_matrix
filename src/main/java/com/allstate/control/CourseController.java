package com.allstate.control;

import com.allstate.domain.Course;
import com.allstate.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CourseController {

    @Autowired
    private CourseService service;

    @GetMapping("course/findAll")
    public List<Course> findAllCourses() {
        return service.findAllCourses();
    }

    @GetMapping("course/findById")
    public List<Course> findById(Long id) {
        return service.findAllCourses();
    }

    @GetMapping("course/findByStudentId")
    public List<Course> findByStudentId(Long id) {
        return service.findAllCourses();
    }


    @PostMapping("course/addCourse")
    public List<Course> addCourse(Course course) {

    }
}
