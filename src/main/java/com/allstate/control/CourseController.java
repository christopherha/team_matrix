package com.allstate.control;

import com.allstate.domain.Course;
import com.allstate.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseService service;

    @GetMapping("/findAll")
    public List<Course> findAllCourses() {
        return service.findAllCourses();
    }

    @GetMapping("/findById")
    public Course findById(Long id) {
        return service.findById(id);
    }

    @GetMapping("/findByStudentId")
    public List<Course> findByStudentId(Long id) {
        return service.findAllCourses();
    }

    @PostMapping("/addCourse")
    public Course addCourse(Course course) {
        return service.addCourse(course);
    }
}
