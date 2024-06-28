package com.cwm.exam.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Getter
@Setter
@Entity
@Table
public class Quiz {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int qid;
	private String title;
	private boolean active = false;
	private int noOfQuestion;

	@ManyToOne
	@JoinColumn(name = "cat_id", nullable = false)
	private Categeory categeory;

	@OneToMany(mappedBy = "quiz")
	private Set<Question> question = new HashSet<>();
}
