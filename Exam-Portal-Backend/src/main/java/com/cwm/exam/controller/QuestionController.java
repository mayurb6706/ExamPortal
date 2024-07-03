package com.cwm.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.cwm.exam.model.Question;
import com.cwm.exam.service.impl.QuestionServiceImpl;

@RestController
@RequestMapping("/api/question")
@CrossOrigin("*")
public class QuestionController {

	@Autowired
	private QuestionServiceImpl questionService;

	//Add new question
	@PostMapping("/create")
	public ResponseEntity<Question> addNewQuestion(@RequestBody Question question) {
		return new ResponseEntity<Question>(this.questionService.addNewQuestion(question), HttpStatus.CREATED);
	}
	
	// Get the question By id
	@GetMapping("/id")
	public ResponseEntity<Question> getSingleQuestion(@RequestParam int id){
		return new ResponseEntity<Question>(this.questionService.getSingleQuestion(id),HttpStatus.OK);
	}
	
	
	//get All Questions
	@GetMapping("/question")
	public ResponseEntity<List<Question>> getAllQuestion(){
		return ResponseEntity.ok(this.questionService.getAllQuestion());
	}
	
	@GetMapping("/quiz")
	public ResponseEntity<List<Question>> getByQuizId(@RequestParam("id") int id){
		return ResponseEntity.ok(this.questionService.getByQuiz(id));
	}
	
	//Delete a question by id
	@DeleteMapping("/id")
	public ResponseEntity<String> removeQuestion(@RequestParam int id){
		return ResponseEntity.ok(this.questionService.removeQuestion(id));
	}
}
