package com.cwm.exam.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cwm.exam.dao.RoleRepository;
import com.cwm.exam.dao.UserRepository;
import com.cwm.exam.model.Role;
import com.cwm.exam.model.User;
import com.cwm.exam.model.UserRole;
import com.cwm.exam.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService , UserDetailsService{

	private UserRepository userRepo;

	private RoleRepository roleRepo;
	
	private BCryptPasswordEncoder passwordEncoder;

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
			// Encrypt the user entered password
			user.setPassword(this.passwordEncoder.encode(user.getPassword()));
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

	@Override
	public List<User> getAllUsers() {
		List<User> users= this.userRepo.findAll();
		return users;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = this.getUserByUsername(username);
//		return new org.springframework.security.core.userdetails.User(username, user.getPassword(),
//				user.getRole().stream().map(role -> new SimpleGrantedAuthority(role)).collect(Collectors.toList()));
	
		user.getUserRoles().stream().forEach(role->System.out.println(role.getRole()));
	return new org.springframework.security.core.userdetails.User(username, user.getPassword(), 
			user.getUserRoles().stream().map(role-> new SimpleGrantedAuthority(role.getRole().getRoleName())).collect(Collectors.toList()));
	}

}
