package com.javaguides.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaguides.springbootbackend.model.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {
	Login findByUserNameAndPassword(String userName,String password);

}
