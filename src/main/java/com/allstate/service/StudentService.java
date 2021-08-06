package com.allstate.service;

import com.allstate.domain.Student;

import java.util.List;
import java.util.Map;

public interface StudentService {

    List<Student> findAllCourses();

    Student findById(Long id);

    Student addStudent(Student student);

    Student updateStudent(Student student);

    public Student addCourseToStudent(Long courseId, Long studentId);

    public Student removeCourseFromStudent(Long courseId, Long studentId);

    public Map<String,String> deleteStudent(Long id);
}
