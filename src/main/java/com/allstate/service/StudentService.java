package com.allstate.service;

import com.allstate.domain.Student;

import java.util.List;

public interface StudentService {

    List<Student> findAllCourses();

    Student findById(Long id);

    Student addStudent(Student student);

    Student updateStudent(Student student);

    public Student addCourseToStudent(Long courseId, Long studentId);
}
