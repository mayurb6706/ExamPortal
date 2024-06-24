package com.cwm.exam.service;

import java.util.Set;

import com.cwm.exam.model.User;
import com.cwm.exam.model.UserRole;

public interface UserService {

	public User createUser(User user, Set<UserRole> roles) throws Exception;
}
