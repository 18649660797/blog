/**
 * Copyright (c) 2016 云智盛世
 * Created with IndexController.
 */
package top.gabin.blog.web.index.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import top.gabin.core.utils.http.RenderUtils;

/**
 * 索引页控制
 *
 * @author linjiabin on  16/6/10
 */
@Controller
@RequestMapping("")
public class IndexController {
    @RequestMapping({"/", "/index"})
    public ModelAndView viewIndex() {
        return RenderUtils.initModelAndView("index");
    }
}
