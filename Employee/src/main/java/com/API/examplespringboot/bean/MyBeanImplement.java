package com.API.examplespringboot.bean;

public class MyBeanImplement implements MyBean{
    @Override
    public void print() {
        System.out.println("accion desde mi implementacion del bean");
    }
}
