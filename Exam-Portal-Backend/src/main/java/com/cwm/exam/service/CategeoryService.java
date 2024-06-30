package com.cwm.exam.service;

import java.util.List;

import com.cwm.exam.model.Categeory;

public interface CategeoryService {

	Categeory addCategeory(Categeory categeory);

	List<Categeory> getAllCategeory();

	String deleteCategeory(int id);
	
	Categeory getById(int id);
	
	Categeory updateCategeory(int id, Categeory categeory);
}
