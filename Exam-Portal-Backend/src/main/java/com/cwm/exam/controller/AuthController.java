package com.cwm.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cwm.exam.entity.AuthRequest;
import com.cwm.exam.entity.AuthResponse;
import com.cwm.exam.jjwt.JwtUtils;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private JwtUtils jwtUtil;

	@PostMapping("/login")
	public ResponseEntity<AuthResponse> doLogin(@RequestBody AuthRequest request) {
		String token = this.jwtUtil.gernerateToke(request.getUsername());
		AuthResponse response = AuthResponse.builder().token(token).message("Token created Sucessfully").build();

		return ResponseEntity.ok(response);
	}
}
