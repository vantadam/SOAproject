package com.example.back_soap.model;

public class StudentCrudRequest {
    private String operation;
    private Long studentId ;
    private String name ;
    private String className ;
    private int abs;
    private int present;
    private double moy;
        public StudentCrudRequest() {
        }
    public String getOperation() {
        return operation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public int getAbs() {
        return abs;
    }

    public void setAbs(int abs) {
        this.abs = abs;
    }

    public int getPresent() {
        return present;
    }

    public void setPresent(int present) {
        this.present = present;
    }

    public double getMoy() {
        return moy;
    }

    public void setMoy(double moy) {
        this.moy = moy;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }


    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }
}
