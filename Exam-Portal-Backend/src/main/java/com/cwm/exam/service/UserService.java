package com.cwm.exam.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.cwm.exam.model.User;
import com.cwm.exam.model.UserRole;

public interface UserService {

	 User createUser(User user, Set<UserRole> roles) throws Exception;
	

	 User getUserByUsername(String username);
	 
	 String deleteUser(int id);
	 
	 List<User> getAllUsers();
}
