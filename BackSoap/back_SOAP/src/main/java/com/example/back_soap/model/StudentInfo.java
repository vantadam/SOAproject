package com.example.back_soap.model;

public class StudentInfo {

        private Long id;
        private String name;
        private String className;
        private int abs;
        private int present;
        private double moy;
        public StudentInfo() {
        }
        public StudentInfo(Long id, String name, String className, int abs, int present, double moy) {
            this.id = id;
            this.name = name;
            this.className = className;
            this.abs = abs;
            this.present = present;
            this.moy = moy;
        }
        public Long getId() {
            return id;
        }
        public void setId(Long id) {
            this.id = id;
        }
        public String getName() {
            return name;
        }
        public String getClassName() {
            return className;
        }
        public void setClassName(String className) {
            this.className = className;
        }
        public void setName(String name) {
            this.name = name;
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

}
