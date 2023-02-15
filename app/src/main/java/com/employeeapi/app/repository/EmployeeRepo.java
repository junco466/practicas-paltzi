package com.employeeapi.app.repository;

import com.employeeapi.app.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    List<Employee> findByBirthDateIsNotNull();

    List<Employee> findByDepartmentOrderByFirstName(String department);
}
