package com.javaguides.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javaguides.springbootbackend.model.Login;
import com.javaguides.springbootbackend.repository.LoginRepository;

@RestController
@ComponentScan
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {
	
	@Autowired
	LoginRepository lRepo;
	
	@PostMapping("/adminLogin")
	public Login adminLogin(@RequestBody Login l) {
		return lRepo.save(l);
	}
		
		@GetMapping("/getLogin/{userName}/{password}")
		public Login getLogin(@PathVariable String userName,@PathVariable String password) {
			return lRepo.findByUserNameAndPassword(userName, password);
		}
	

}
