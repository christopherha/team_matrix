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

    private static final String GROUP_QUAL = "course/";

    @GetMapping(GROUP_QUAL + "findAll")
    public List<Course> findAllCourses() {
        return service.findAllCourses();
    }

    @GetMapping(GROUP_QUAL + "findById")
    public Course findById(Long id) {
        return service.findById(id);
    }

    @GetMapping(GROUP_QUAL + "findByStudentId")
    public List<Course> findByStudentId(Long id) {
        return service.findAllCourses();
    }

    @PostMapping(GROUP_QUAL + "addCourse")
    public Course addCourse(Course course) {
        return service.addCourse(course);
    }
}
