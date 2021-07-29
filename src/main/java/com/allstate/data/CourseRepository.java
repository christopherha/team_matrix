package com.allstate.data;

import com.allstate.domain.Course;
import com.allstate.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    List<Course> findAllByInstructor(String instructor);

}
