package com.employeeapi.app;

import com.employeeapi.app.entity.Employee;
import com.employeeapi.app.repository.EmployeeRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class ApiEmployeeTestApplication implements CommandLineRunner {

	EmployeeRepo employeeRepo;

	public ApiEmployeeTestApplication(EmployeeRepo employeeRepo) {
		this.employeeRepo = employeeRepo;
	}

	public static void main(String[] args) {
		SpringApplication.run(ApiEmployeeTestApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		saveEmployeeInDB();
	}

	public void saveEmployeeInDB(){
		Employee employee1 = new Employee("Jhon","Smith", 45, LocalDate.of(1980,10,19),"accounting");
		Employee employee2 = new Employee("Bruce","Jack", 30, LocalDate.of(1980,10,19),"finance");
		Employee employee3 = new Employee("Naveen","Kumar", 35, LocalDate.of(1980,10,19),"finance");
		Employee employee4 = new Employee("Mike","Sam", 25, null,"finance");
		Employee employee5 = new Employee("Suresh","Raj", 25, null,"finance");

		List<Employee> list = Arrays.asList(employee1,employee2,employee3,employee4,employee5);
		list.forEach(employeeRepo::save);
	}


}
