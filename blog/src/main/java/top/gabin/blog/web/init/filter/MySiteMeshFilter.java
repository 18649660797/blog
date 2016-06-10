/**
 * Copyright (c) 2016 云智盛世
 * Created with ConfigurableSiteMeshFilter.
 */
package top.gabin.blog.web.init.filter;

import org.sitemesh.builder.SiteMeshFilterBuilder;
import org.sitemesh.config.ConfigurableSiteMeshFilter;

/**
 * Class description
 *
 * @author linjiabin on  16/5/9
 */
public class MySiteMeshFilter extends ConfigurableSiteMeshFilter {

    @Override
    protected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {
        builder.addDecoratorPath("/*", "/WEB-INF/layouts/fullPageLayout.ftl")
                .addExcludedPath("/static/*");
    }

}
