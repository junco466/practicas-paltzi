package com.employeeapi.app.components;

import com.employeeapi.app.entity.Employee;
import com.employeeapi.app.services.EmployeeService;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class Req {
    private EmployeeService employeeService;

    public Req(EmployeeService employeeService) {
        this.employeeService = employeeService;

    }

    public List<Employee> dob(){
        return employeeService.findByBirthDateIsNotNull();
    }

    public List<Employee> departmentReq(String department) {
        return employeeService.findBydepartmentOrderByname(department);
    }

    /*public List<Employee> getAll() {
        return employeeService.findAll();
    }*/
}
