package com.cwm.exam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cwm.exam.model.Question;

public interface QuestionRepository  extends JpaRepository<Question, Integer>{

	List<Question> findByQuizQid(int id);
}
