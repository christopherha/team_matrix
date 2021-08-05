package com.allstate.control;

import com.allstate.domain.Student;
import com.allstate.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/findAll")
    public List<Student> findAllStudents() {
        return service.findAllCourses();
    }

    @GetMapping("/findById")
    public Student findById(@RequestParam(name = "id") Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/deleteStudent")
    public Map<String,String> deleteStudent(@RequestParam("id") Long id){
        return service.deleteStudent(id);
    }

    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @PostMapping("/addCourseToStudent")
    public Student addCourseToStudent(@RequestParam("studentId") Long studentId,
                                      @RequestParam("courseId") Long courseId) {
        return service.addCourseToStudent(courseId, studentId);
    }

    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        return service.updateStudent(student);
    }
}
