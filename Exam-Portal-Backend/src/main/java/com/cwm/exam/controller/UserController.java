package com.cwm.exam.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cwm.exam.model.Role;
import com.cwm.exam.model.User;
import com.cwm.exam.model.UserRole;
import com.cwm.exam.service.impl.UserServiceImpl;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	@PostMapping("/register")
	public ResponseEntity<User> createUser(@RequestBody User user) throws Exception {
		Set<UserRole> userRoles = new HashSet<>();
		UserRole userRole = new UserRole();
		
		Role role = new Role();
		role.setRoleId(2);
		role.setRoleName("NORMAL");
		
		userRole.setUser(user);
		userRole.setRole(role);
		
		userRoles.add(userRole);
		User newUser = this.userService.createUser(user, userRoles);
		return new ResponseEntity<>(newUser, HttpStatus.CREATED);
	}
}
