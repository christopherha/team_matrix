package com.allstate.control;

import com.allstate.domain.Course;
import com.allstate.service.CourseService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class CourseControllerTest {

    @Mock
    private CourseService mockCourseService;
    @InjectMocks
    private CourseController courseController;

    @Test
    public void testFindAll() {
        when(mockCourseService.findAllCourses()).thenReturn(new ArrayList<>());
        courseController.findAllCourses();
        verify(mockCourseService).findAllCourses();
    }

    @Test
    public void testFindById() {
        when(mockCourseService.findById(anyLong())).thenReturn(new Course());
        courseController.findById(1L);
        verify(mockCourseService).findById(eq(1L));
    }
}
