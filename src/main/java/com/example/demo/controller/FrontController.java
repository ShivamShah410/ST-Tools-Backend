package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FrontController {

	@RequestMapping("/")
	public String getUI() {
		return "index.html";
	}
	
}
