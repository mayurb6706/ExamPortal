package com.cwm.exam.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.cwm.exam.dao.QuestionRepository;
import com.cwm.exam.model.Question;
import com.cwm.exam.service.QuestionService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class QuestionServiceImpl implements QuestionService {

	private QuestionRepository questionRepo;
	
	
	@Override
	public Question addNewQuestion(Question question) {
		Question newQuestion= this.questionRepo.save(question);
		return newQuestion;
	}

	@Override
	public List<Question> getAllQuestion() {
		List<Question> questions= this.questionRepo.findAll();
		return questions;
	}

	@Override
	public Question getSingleQuestion(int id) {
		Question question= this.questionRepo.findById(id).get();
		return question;
	}

	@Override
	public Question updateQuestion(int id, Question question) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String removeQuestion(int id) {
		Question question= this.getSingleQuestion(id);
		this.questionRepo.delete(question);
		return "Question removed successfully!";
	}

	@Override
	public List<Question> getByQuiz(int quiz_id) {
		List<Question> questions= this.questionRepo.findByQuizQid(quiz_id);
		return questions;
	}

}
