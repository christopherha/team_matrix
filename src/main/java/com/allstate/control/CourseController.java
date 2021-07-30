package com.allstate.control;

import com.allstate.domain.Course;
import com.allstate.domain.Student;
import com.allstate.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @GetMapping("/findByInstructor")
    public List<Course> findByInstructor(@RequestParam("instructor") String instructor) {
        return service.retrieveByInstructor(instructor);
    }

    @GetMapping("/findById")
    public Course findById(@RequestParam("id") Long id) {
        return service.findById(id);
    }

    @PostMapping("/addCourse")
    public Course addCourse(@RequestBody Course course) {
        return service.addCourse(course);
    }

    @PostMapping("/updateCourse")
    public Course updateCourse(@RequestBody Course course) {
        return service.updateCourse(course);
    }

    @DeleteMapping("/deleteCourse")
    public Map<String,String> deleteCourse(@RequestParam("id") Long id) {
        return service.deleteCourse(id);
    }

}
