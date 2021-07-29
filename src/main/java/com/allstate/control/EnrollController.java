package com.allstate.control;

import com.allstate.service.EnrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/enroll")
public class EnrollController {

    @Autowired
    private EnrollService service;

    //TODO: Add methods here for enrolling students into courses

}
