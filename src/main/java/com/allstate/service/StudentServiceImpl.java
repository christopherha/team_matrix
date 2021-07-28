package com.allstate.service;

import com.allstate.data.StudentRepository;
import com.allstate.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> findAllCourses() {
        return repository.findAll();
    }
}
