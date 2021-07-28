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



}
