/**
 * Copyright (c) 2016 云智盛世
 * Created with XmlUtils.
 */
package top.gabin.core.utils.xml;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;

/**
 * xml解析
 *
 * @author linjiabin on  16/5/28
 */
public class XmlUtils {
    public static <T> T xml2Bean(Class<T> bean, String xmlStr) {
        T s = null;
        try {
            JAXBContext context = JAXBContext.newInstance(bean);
            Unmarshaller unmarshaller = context.createUnmarshaller();
            s = (T)unmarshaller.unmarshal(new StringReader(xmlStr));
        } catch (JAXBException e) {
            e.printStackTrace();
        }
        return s;
    }

    public static <T> String bean2Xml(T bean) {
        String xmlStr = null;
        StringWriter writer = null;
        try {
            JAXBContext context = JAXBContext.newInstance(bean.getClass());
            Marshaller marshaller = context.createMarshaller();
            writer = new StringWriter();
            marshaller.marshal(bean, writer);
            xmlStr = writer.toString();
        } catch (JAXBException e) {
            e.printStackTrace();
        } finally {
            if (null != writer) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return xmlStr;
    }

}
