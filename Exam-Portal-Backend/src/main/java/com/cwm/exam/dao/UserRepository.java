package com.cwm.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cwm.exam.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsername(String username);
}
