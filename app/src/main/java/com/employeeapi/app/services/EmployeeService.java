package com.employeeapi.app.services;

import com.employeeapi.app.entity.Employee;
import com.employeeapi.app.repository.EmployeeRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private EmployeeRepo employeeRepo;

    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public List<Employee> findByBirthDateIsNotNull() {
        return employeeRepo.findByBirthDateIsNotNull();
    }

    public List<Employee> findBydepartmentOrderByname(String department){
        return employeeRepo.findByDepartmentOrderByFirstName(department);
    }
    /*public List<Employee> findAll() {
        return employeeRepo.findAll();
    }*/
}
