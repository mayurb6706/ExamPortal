package com.cwm.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cwm.exam.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

}
