package com.cwm.exam.service;

import java.util.List;

import com.cwm.exam.model.Quiz;

public interface QuizService {
	
	Quiz createQuiz(Quiz quiz);
	
	List<Quiz> allQuiz();
	
	Quiz getQuizById(int id);
	
	String deleteQuiz(int id);
	

}
