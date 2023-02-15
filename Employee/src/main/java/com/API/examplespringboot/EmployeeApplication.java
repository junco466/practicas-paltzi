package com.API.examplespringboot;

import com.API.examplespringboot.bean.MyBean;
import com.API.examplespringboot.bean.MyBeanWithDependency;
import com.API.examplespringboot.bean.MyBeanWithProperties;
import com.API.examplespringboot.component.ComponentDependency;
import com.API.examplespringboot.entity.User;
import com.API.examplespringboot.pojo.UserPojo;
import com.API.examplespringboot.repository.UserRepository;
import com.API.examplespringboot.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class EmployeeApplication implements CommandLineRunner {

	private final Log LOGGER = LogFactory.getLog(EmployeeApplication.class);

	private ComponentDependency componentDependency;
	private MyBean myBean;
	private MyBeanWithDependency myBeanWithDependency;
	private UserPojo userPojo;
	private UserRepository userRepository;
	private MyBeanWithProperties myBeanWithProperties;
	private UserService userService;

	public EmployeeApplication (@Qualifier("componentTwoImplement") ComponentDependency componentDependency, MyBean myBean, MyBeanWithDependency myBeanWithDependency, UserPojo userPojo, UserRepository userRepository, MyBeanWithProperties myBeanWithProperties,UserService userService){
		this.componentDependency = componentDependency;
		this.myBean = myBean;
		this.myBeanWithDependency = myBeanWithDependency;
		this.userPojo = userPojo;
		this.userRepository = userRepository;
		this.myBeanWithProperties = myBeanWithProperties;
		this.userService = userService;

	}

	public static void main(String[] args) {
		SpringApplication.run(EmployeeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//ejemplosAnteriores();
		saveUsersInDB();
		getInformationJpqlFromUser();
		saveWithErrorTRansactional();

	}

	private void saveWithErrorTRansactional(){
		User test1 = new User("test1Transactional","test1Transactional@domain.com", LocalDate.now());
		User test2 = new User("test2Transactional","test2Transactional@domain.com", LocalDate.now());
		User test3 = new User("test3Transactional","test3Transactional@domain.com", LocalDate.now());
		User test4 = new User("test4Transactional","test4Transactional@domain.com", LocalDate.now());

		List<User> users = Arrays.asList(test1,test2,test3,test4);
		userService.saveTRansactional(users);
		userService.getAllUsers().stream()
				.forEach(user -> LOGGER.info("Este es el metodo usuario detro del metodo transactional " + user));

	}

	private void getInformationJpqlFromUser(){
		LOGGER.info("Usuario con el metodo findByUserEmail" +
				userRepository.findByEmail("yes@domain.com")
						.orElseThrow(()-> new RuntimeException("No se encontro el usuario")));

		userRepository.findAndSort("user", Sort.by("id").descending())
				.stream()
				.forEach(user -> LOGGER.info("usuario con metodo sort " + user));

		userRepository.findByName("Andres")
				.stream()
				.forEach(user -> LOGGER.info("usuario con query method " + user));

	}

	private void saveUsersInDB(){
		User user1 = new User("camilo","juan@domain.com", LocalDate.of(1996,06,04));
		User user2 = new User("Andres","andres@domain.com", LocalDate.of(1996,02,04));
		User user3 = new User("Andres","asd@domain.com", LocalDate.of(1996,01,04));
		User user4 = new User("Valeria","valeria@domain.com", LocalDate.of(1998,06,04));
		User user5 = new User("Yese","yes@domain.com", LocalDate.of(1996,05,04));
		User user6 = new User("Julieta","juli@domain.com", LocalDate.of(1996,06,25));
		User user7 = new User("user7","piru@dom.com", LocalDate.of(1996,06,14));
		User user8 = new User("user8","gono@dom.com", LocalDate.of(1996,06,13));
		User user9 = new User("user9","el@dom.com", LocalDate.of(1995,12,04));
		User user10 = new User("Pablo","blopa@dom.com", LocalDate.of(2000,06,04));
		List<User> list = Arrays.asList(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
		list.stream().forEach(userRepository::save);
	}

	private void ejemplosAnteriores(){
		componentDependency.saludar();
		myBean.print();
		myBeanWithDependency.printWithDependency();
		System.out.println(myBeanWithProperties.function());
		System.out.println(userPojo.getEmail() + " - " + userPojo.getPassword());
		try{
			int value = 10/0;
			LOGGER.debug("mi valor: " + value);
		}catch (Exception e){
			LOGGER.error("Esto es un error al dividir por cero " + e.getMessage());
		}
	}
}
