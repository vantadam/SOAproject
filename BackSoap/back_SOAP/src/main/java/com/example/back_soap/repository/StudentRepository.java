package com.example.back_soap.repository;

import com.example.back_soap.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {

}

