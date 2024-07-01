package com.cwm.exam.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cwm.exam.dao.QuizRepository;
import com.cwm.exam.model.Quiz;
import com.cwm.exam.service.QuizService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class QuizServiceImpl implements QuizService {

	private QuizRepository quizRepo;
	
	@Override
	public Quiz createQuiz(Quiz quiz) {
		Quiz newQuiz= this.quizRepo.save(quiz);
		return newQuiz;
	}

	@Override
	public List<Quiz> allQuiz() {
		List<Quiz> quizs= this.quizRepo.findAll();
		return quizs;
	}

	@Override
	public Quiz getQuizById(int id) {
		Quiz quiz= this.quizRepo.findById(id).get();
		return quiz;
		}

	@Override
	public String deleteQuiz(int id) {
		Quiz quiz= this.getQuizById(id);
		this.quizRepo.delete(quiz);
		return "Quiz Removed Successfully!";
	}



}
