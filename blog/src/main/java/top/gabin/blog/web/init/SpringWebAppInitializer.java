/**
 * Copyright (c) 2016 云智盛世
 * Created with SpringWebAppInitializer.
 */
package top.gabin.blog.web.init;

import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import top.gabin.blog.web.init.config.AppConfig;
import top.gabin.blog.web.init.config.PersistenceConfig;
import top.gabin.blog.web.init.config.SecurityConfig;
import top.gabin.blog.web.init.config.WebMvcConfig;
import top.gabin.blog.web.init.filter.MySiteMeshFilter;

import javax.servlet.Filter;

public class SpringWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class[] getRootConfigClasses() {
        return new Class[]{AppConfig.class, SecurityConfig.class, PersistenceConfig.class};
    }

    @Override
    protected Class[] getServletConfigClasses() {
        return new Class[]{WebMvcConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/", "/"};
    }

    @Override
    protected Filter[] getServletFilters() {
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
        characterEncodingFilter.setEncoding("UTF-8");
        Filter mySiteMeshFilter = new MySiteMeshFilter();
        return new Filter[]{
                new OpenEntityManagerInViewFilter(),
                characterEncodingFilter,
                mySiteMeshFilter
        };
    }

}
