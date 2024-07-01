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

import com.cwm.exam.model.Quiz;
import com.cwm.exam.service.impl.QuizServiceImpl;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin("*")
@AllArgsConstructor
public class QuizController {

	private QuizServiceImpl quizService;

	// Create Quiz
	@PostMapping("/create")
	public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz) {
		System.out.println(quiz);
		Quiz newQuiz = this.quizService.createQuiz(quiz);
		return new ResponseEntity<Quiz>(newQuiz, HttpStatus.CREATED);

	}

	// Get all Quiz
	@GetMapping("/all")
	public ResponseEntity<List<Quiz>> getAllQuiz() {
		return ResponseEntity.ok(this.quizService.allQuiz());
	}

	// Get the quiz by id
	@GetMapping("/id")
	public ResponseEntity<Quiz> getSingleQuiz(@RequestParam int id) {
		return ResponseEntity.ok(this.quizService.getQuizById(id));
	}

	// Delete quiz
	@DeleteMapping("/id")
	public ResponseEntity<String> removeQuiz(@RequestParam int id) {
		return ResponseEntity.ok(this.quizService.deleteQuiz(id));
	}
}
