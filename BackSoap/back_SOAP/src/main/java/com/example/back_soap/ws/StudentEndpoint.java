package com.example.back_soap.ws;

import com.example.back_soap.model.StudentCrudRequest;
import com.example.back_soap.model.StudentCrudResponse;
import com.example.back_soap.model.Student;
import com.example.back_soap.model.StudentInfo;
import com.example.back_soap.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class StudentEndpoint {
    private static final String NAMESPACE_URI = "/student";

    @Autowired
    private StudentRepository studentRepository;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "studentCrudRequest")
    @ResponsePayload
    public StudentCrudResponse studentCrud(@RequestPayload StudentCrudRequest request) {
        StudentCrudResponse response = new StudentCrudResponse();

        String operation = request.getOperation();

        if ("get".equals(operation)) {
            Long studentId = request.getStudentId();
            Student student = studentRepository.findById(studentId).orElse(null);

            if (student != null) {
                response.setStudentInfo(mapStudentToStudentInfo(student));
            }
        } else if ("create".equals(operation)) {
            Student newStudent = new Student();
            newStudent.setName(request.getName());
            newStudent.setClassName(request.getClassName());
            newStudent.setAbs(request.getAbs());
            newStudent.setPresent(request.getPresent());
            newStudent.setMoy(request.getMoy()

            );
            studentRepository.save(newStudent);

            response.setStudentInfo(mapStudentToStudentInfo(newStudent));
        } else if ("update".equals(operation)) {
            Long studentId = request.getStudentId();
            Student existingStudent = studentRepository.findById(studentId).orElse(null);

            if (existingStudent != null) {
                existingStudent.setName(request.getName());
                existingStudent.setClassName(request.getClassName());
                existingStudent.setAbs(request.getAbs());
                existingStudent.setPresent(request.getPresent());
                existingStudent.setMoy(request.getMoy()
                );
                studentRepository.save(existingStudent);
                response.setStudentInfo(mapStudentToStudentInfo(existingStudent));
            }
        } else if ("delete".equals(operation)) {
            Long studentId = request.getStudentId();

            if (studentRepository.existsById(studentId)) {
                studentRepository.deleteById(studentId);
                response.setSuccess(true);
            } else {
                response.setSuccess(false);
            }
        } else {
            // Handle unknown operation or provide an error response
        }

        return response;
    }
    private StudentInfo mapStudentToStudentInfo(Student student) {
        StudentInfo studentInfo = new StudentInfo();
        studentInfo.setId(student.getId());
        studentInfo.setName(student.getName());
        studentInfo.setAbs(student.getAbs());
        studentInfo.setPresent(student.getPresent());
        studentInfo.setMoy(student.getMoy());


        return studentInfo;
    }
}




