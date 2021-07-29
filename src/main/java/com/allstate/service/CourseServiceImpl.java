package com.allstate.service;

import com.allstate.data.CourseRepository;
import com.allstate.domain.Course;
import com.allstate.domain.Student;
import com.allstate.exception.CourseValueException;
import org.h2.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

        courseFieldValidation(course);
        repository.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
        courseFieldValidation(course);
        return repository.save(course);
    }

    @Override
    public Map<String,String> deleteCourse(Long id) {
        Map<String,String> responseMap = new HashMap<>();
        responseMap.put("Status", "Success " + id + " was deleted");
        repository.deleteById(id);
        return responseMap;
    }

    @Override
    public List<Course> retrieveByInstructor(String instructor) {
        return repository.findAllByInstructor(instructor);
    }

    @Override
    public List<Student> retrieveAllStudents(Long id) {
        Optional<Course> course =  repository.findById(id);
        if(course.isPresent()){
            return course.get().getStudents();
        }
        return new ArrayList<>();

    }

    private void courseFieldValidation(Course course){
        final String courseName = course.getName();
        final String courseInstructor = course.getInstructor();
        final String courseAbvName = course.getAbreviatedName();

        if(StringUtils.isNullOrEmpty(courseName) || StringUtils.isNullOrEmpty(courseInstructor) ||
                StringUtils.isNullOrEmpty(courseAbvName)){
            throw new CourseValueException("Course fields may not be blank!");
        }
    }
}
