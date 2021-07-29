package com.allstate.service;

import com.allstate.data.CourseRepository;
import com.allstate.domain.Course;
import com.allstate.exception.CourseValueException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.junit.jupiter.api.Assertions.assertThrows;


@ExtendWith(MockitoExtension.class)
public class CourseServiceTest {

    @Mock
    CourseRepository courseRepository;

    @InjectMocks
    CourseServiceImpl courseService;

    @Test
    public void testAddCourseWithValidData(){
        Course c = new Course();
        c.setId(1L);
        c.setAbreviatedName("abv");
        c.setInstructor("inst");
        c.setName("name");
        courseService.addCourse(c);
        verify(courseRepository).save(eq(c));
    }

    @Test
    public void testAddCourseWithInvalidData(){
        Course c = new Course();
        assertThrows(CourseValueException.class, () -> courseService.addCourse(c));
    }
}
