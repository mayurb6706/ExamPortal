package com.cwm.exam.service.impl;

import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.cwm.exam.dao.RoleRepository;
import com.cwm.exam.dao.UserRepository;
import com.cwm.exam.model.User;
import com.cwm.exam.model.UserRole;
import com.cwm.exam.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	private UserRepository userRepo;

	private RoleRepository roleRepo;

	@Override
	public User createUser(User user, Set<UserRole> roles) throws Exception {

		// Check the user is already exist or not
		User localUser = this.userRepo.findByUsername(user.getUsername());
		if (localUser != null) {
			throw new Exception("User is already present!");
		} else {
			// create a new User
			for (UserRole role : roles) {
				this.roleRepo.save(role.getRole());
			}
			user.getUserRoles().addAll(roles);
			localUser = this.userRepo.save(user);
		}
		return localUser;
	}

	@Override
	public User getUserByUsername(String username) {
		User user = this.userRepo.findByUsername(username);
		return user;
	}

	@Override
	public String deleteUser(int id) {
		User user = this.userRepo.findById(id).get();
		this.userRepo.delete(user);
		return "User deleted sucessfully!";
	}

}
