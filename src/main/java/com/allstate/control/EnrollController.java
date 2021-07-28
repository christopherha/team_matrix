package com.allstate.control;

import com.allstate.service.EnrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class EnrollController {

    @Autowired
    private EnrollService service;

    private static final String GROUP_QUAL = "enroll/";

    //TODO: Add methods here for enrolling students into courses

}
