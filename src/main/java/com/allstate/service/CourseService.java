package com.allstate.service;

import com.allstate.domain.Course;
import com.allstate.domain.Student;

import java.util.List;
import java.util.Map;

public interface CourseService {

    List<Course> findAllCourses();

    Course findById(Long id);

    Course addCourse(Course course);

    Course updateCourse(Course course);

    Map<String,String> deleteCourse(Long id);

    List<Course> retrieveByInstructor(String instructor);

    List<Student> retrieveAllStudents(Long id);
}
