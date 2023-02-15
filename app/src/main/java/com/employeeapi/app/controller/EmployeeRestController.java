package com.employeeapi.app.controller;

import com.employeeapi.app.components.Req;
import com.employeeapi.app.entity.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {
    private Req req;

    public EmployeeRestController(Req req) {
        this.req = req;
    }

    //FULL HTTP URL: http://localhost:8082/employee/api/dob
    @GetMapping("/dob")
    ResponseEntity<List<Employee>> get(){
        return new ResponseEntity<>(req.dob(), HttpStatus.OK);
    }
    /*List<Employee> get(){return dobNotNull.dob();}*/

    //FULL HTTP URL: http://localhost:8082/employee/api/fiance or http://localhost:8082/employee/api/accounting
    @GetMapping("/{department}")
    ResponseEntity<List<Employee>> getDepartment(@PathVariable String department){
        return new ResponseEntity<>(req.departmentReq(department),HttpStatus.OK);
    }

    /*@GetMapping("/all")
    List<Employee> getAll(){return dobNotNull.getAll();}*/
}
