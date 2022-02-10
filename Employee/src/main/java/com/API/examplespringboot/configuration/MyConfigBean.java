package com.API.examplespringboot.configuration;

import com.API.examplespringboot.bean.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfigBean {
    @Bean
    public MyBean beanOperation(){
        return new MyBeanImplement();
    }

    @Bean
    public MyOperation beanMyOperation(){
        return new MyOperationImplement();
    }

    @Bean
    public MyBeanWithDependency beanMyOperationWithDependency(MyOperation myOperation){
        return new MyBeanWithDependencyImplement(myOperation);
    }
}
