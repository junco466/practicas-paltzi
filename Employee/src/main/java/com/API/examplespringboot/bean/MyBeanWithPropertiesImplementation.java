package com.API.examplespringboot.bean;

public class MyBeanWithPropertiesImplementation implements MyBeanWithProperties{
    private String nombre;
    private String apellido;

    public MyBeanWithPropertiesImplementation(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    @Override
    public String function() {
        return nombre + "-" + apellido;
    }
}
