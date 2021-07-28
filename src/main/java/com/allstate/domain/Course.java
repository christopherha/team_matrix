package com.allstate.domain;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String abreviatedName;
    private String instructor;
    @ManyToMany
    private List<Student> students;

    public Course(){}

    public Course(Long id, String name, String abreviatedName, String instructor, List<Student> students) {
        this.id = id;
        this.name = name;
        this.abreviatedName = abreviatedName;
        this.instructor = instructor;
        this.students = students;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbreviatedName() {
        return abreviatedName;
    }

    public void setAbreviatedName(String abreviatedName) {
        this.abreviatedName = abreviatedName;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return Objects.equals(id, course.id) && Objects.equals(name, course.name) && Objects.equals(abreviatedName, course.abreviatedName) && Objects.equals(instructor, course.instructor) && Objects.equals(students, course.students);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, abreviatedName, instructor, students);
    }

    @Override
    public String toString() {
        return "com.allstate.model.Course{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", abreviatedName='" + abreviatedName + '\'' +
                ", instructor='" + instructor + '\'' +
                ", students=" + students +
                '}';
    }
}
