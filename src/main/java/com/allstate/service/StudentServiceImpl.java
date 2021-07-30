package com.allstate.service;

import com.allstate.data.StudentRepository;
import com.allstate.domain.Course;
import com.allstate.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository repository;

    @Autowired
    private CourseService courseService;

    public List<Student> findAllCourses() {
        return repository.findAll();
    }

    public Student findById(Long id) {
        return repository.findById(id).get();
    }

    public Student addStudent(Student student) {
        repository.save(student);
        return student;
    }

    @Override
    public Student addCourseToStudent(Long courseId, Long studentId) {
        Course course = courseService.findById(courseId);
        Student student = repository.findById(studentId).get();


        List<Course> courses = student.getCourses();
        if(courses == null){
            courses = new ArrayList<>();
        }
        courses.add(course);
        repository.save(student);

        return student;
    }

    @Override
    public Map<String,String> deleteStudent(Long id) {
        repository.deleteById(id);
        Map<String,String> responseMap = new HashMap<>();
        responseMap.put("Status", "Success Student ID " + id + " was deleted");
        return responseMap;
    }

    public Student updateStudent(Student student) {
        repository.save(student);
        return student;
    }
}
