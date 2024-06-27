package com.cwm.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cwm.exam.entity.AuthRequest;
import com.cwm.exam.entity.AuthResponse;
import com.cwm.exam.jjwt.JwtUtils;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

	@Autowired
	private JwtUtils jwtUtil;
	
	@Autowired
	private AuthenticationManager authManger;

	@PostMapping("/login")
	public ResponseEntity<AuthResponse> doLogin(@RequestBody AuthRequest request) {
		System.out.println("User Request "+request);
		this.authManger.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		String token = this.jwtUtil.gernerateToke(request.getUsername());
		AuthResponse response = AuthResponse.builder().token(token).message("Token created Sucessfully").build();

		return ResponseEntity.ok(response);
	}
}
