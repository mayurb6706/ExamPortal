package com.cwm.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cwm.exam.model.Quiz;

public interface QuizRepository  extends JpaRepository<Quiz, Integer>{

}
