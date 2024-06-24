package com.cwm.exam;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cwm.exam.model.Role;
import com.cwm.exam.model.User;
import com.cwm.exam.model.UserRole;
import com.cwm.exam.service.impl.UserServiceImpl;

@SpringBootApplication
public class ExamPortalApplication implements CommandLineRunner {

	@Autowired
	private UserServiceImpl userService;

	public static void main(String[] args) {
		SpringApplication.run(ExamPortalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Application Started!");

		User user= new User();
		user.setFirstname("Mayur");
		user.setLastname("Bhosale");
		user.setContact(123456789L);
		user.setEmail("mayur@test.com");
		
		// TODO Encrypt the user password
		user.setPassword("password");
		user.setUsername("username");
		Role role = new Role();
		role.setRoleId(1);
		role.setRoleName("ADMIN");

		System.out.println(user);
		System.out.println(role);
		
		Set<UserRole> userRoles = new HashSet<>();
		
		UserRole userRole = new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);

		
		userRoles.add(userRole);
		
		 User newUser = this.userService.createUser(user, userRoles);

		System.out.println(newUser.getUsername());
	}

}
