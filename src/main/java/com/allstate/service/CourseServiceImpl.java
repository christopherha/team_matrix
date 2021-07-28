package com.allstate.service;

import com.allstate.data.CourseRepository;
import com.allstate.domain.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository repository;

    public List<Course> findAllCourses() {
        return repository.findAll();
    }

    public Course findById(Long id) {
        return repository.findById(id).get();
    }

    public Course addCourse(Course course) {
        repository.save(course);
        return course;
    }
}
