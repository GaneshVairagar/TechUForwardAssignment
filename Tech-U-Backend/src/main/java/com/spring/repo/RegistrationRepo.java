package com.spring.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.model.RegistrationEntity;

@Repository
public interface RegistrationRepo extends JpaRepository<RegistrationRepo, Integer>{

	RegistrationEntity save(RegistrationEntity cm);

}
