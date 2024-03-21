package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.model.RegistrationEntity;
import com.spring.service.RegistrationService;

@CrossOrigin("http://localhost:3000")
@RestController
public class RigistrationController {
	
	@Autowired
	RegistrationService service;
	
	@GetMapping("/getAllFormData")
	public List<RegistrationEntity> showData(){
		List<RegistrationEntity> lst = service.getAllFormData();
		System.out.println("List All Data");
		return lst;
	}
	
	@PostMapping("/addRegister")
	public RegistrationEntity addCustomer(@RequestBody RegistrationEntity cm) {
		System.out.println("Add register....!"+cm);
		return service.saveRegister(cm);
	}


}
