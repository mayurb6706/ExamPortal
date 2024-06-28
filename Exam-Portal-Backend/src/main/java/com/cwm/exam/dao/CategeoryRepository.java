package com.cwm.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cwm.exam.model.Categeory;

public interface CategeoryRepository extends JpaRepository<Categeory, Integer> {

}
