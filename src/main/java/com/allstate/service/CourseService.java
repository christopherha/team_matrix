package com.allstate.service;

import com.allstate.domain.Course;

import java.util.List;

public interface CourseService {

    List<Course> findAllCourses();

    Course findById(Long id);

    Course addCourse(Course course);
}
