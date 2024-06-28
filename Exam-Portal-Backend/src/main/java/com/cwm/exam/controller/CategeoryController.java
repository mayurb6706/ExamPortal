package com.cwm.exam.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cwm.exam.model.Categeory;
import com.cwm.exam.service.impl.CategeoryServiceImpl;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/categeory")
@AllArgsConstructor
@CrossOrigin("*")
public class CategeoryController {

	private CategeoryServiceImpl categeoryService;
	
	//Create a new Categeory
	//TODO Admin access
	@PostMapping("/create")
	public ResponseEntity<Categeory> addNewCategeory(@RequestBody Categeory categeory){
		return new ResponseEntity<Categeory>(this.categeoryService.addCategeory(categeory),HttpStatus.CREATED);
	}
	
	//Get all Categeory
	@GetMapping("/all")
	public ResponseEntity<List<Categeory>> getAllCategeory(){
		return ResponseEntity.ok(this.categeoryService.getAllCategeory());
		
	}
	
	//get categeory by id
	@GetMapping("/id")
	public ResponseEntity<Categeory> getCategeoryById(@RequestParam int id){
		return ResponseEntity.ok(this.categeoryService.getById(id));
	}
	
	//delete the categeory
	@DeleteMapping("/id")
	//TODO Admin access
	public ResponseEntity<String> removeCategeory(@RequestParam int id){
		return ResponseEntity.ok(this.categeoryService.deleteCategeory(id));
	}
}
