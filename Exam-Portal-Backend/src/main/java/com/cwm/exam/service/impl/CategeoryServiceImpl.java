package com.cwm.exam.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cwm.exam.dao.CategeoryRepository;
import com.cwm.exam.model.Categeory;
import com.cwm.exam.service.CategeoryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CategeoryServiceImpl  implements CategeoryService{

	private CategeoryRepository categeoryRepo;
	
	@Override
	public Categeory addCategeory(Categeory categeory) {
		Categeory newCategeory= this.categeoryRepo.save(categeory);
		return newCategeory;
	}

	@Override
	public List<Categeory> getAllCategeory() {
		return this.categeoryRepo.findAll();
	}

	@Override
	public String deleteCategeory(int id) {
		Categeory categeory=this.getById(id);
		this.categeoryRepo.delete(categeory);
		return "Categeory removed Sucessfully";
	}

	@Override
	public Categeory getById(int id) {
		
		Categeory categeory= this.categeoryRepo.findById(id).get();
		return categeory;
	}

	@Override
	public Categeory updateCategeory(int id, Categeory categeory) {
		Categeory cat= this.getById(id);
		if(cat!=null) {
		cat.setDescription(categeory.getDescription());
		this.categeoryRepo.save(cat);
		}
		return cat;
	}

}
