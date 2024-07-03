package com.cwm.exam.service;

import java.util.List;

import com.cwm.exam.model.Question;

public interface QuestionService {

 Question addNewQuestion(Question question);
 
 List<Question> getAllQuestion();
 
 Question getSingleQuestion(int id);
 
 Question updateQuestion(int id, Question question);
 
 String removeQuestion(int id); 
 
 List<Question> getByQuiz(int quiz_id);
 
}
