package main.java.com.epapyrus.gayeong.charset;

import com.mysql.cj.log.LogFactory;
import com.sun.org.slf4j.internal.Logger;

import java.io.*;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

public class CharacterEncoder {

//    private static final Logger log = LogFactory.getLogger(CharacterEncoder.class);
    private static final String FILEPATH = "./src/main/java/com/epapyrus/gayeong/charset/";
    private static final String ATTACHEDFILE = "utf-8.contents.txt";

    //인코딩 변환
    public static void convert(String readingCharset, String writingCharset, String fileName) {
        try (
                BufferedReader bufferedReader = new BufferedReader(
                        new InputStreamReader(
                                new FileInputStream(FILEPATH + ATTACHEDFILE), readingCharset));
                BufferedWriter bufferedWriter = new BufferedWriter(
                        new OutputStreamWriter(
                                new FileOutputStream(FILEPATH + fileName), writingCharset));
        ) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                bufferedWriter.write(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    //파일 복원
    public static void restore(String readingCharset, String writingCharset, String fileName) {
        try (
                BufferedReader bufferedReader = new BufferedReader(
                        new InputStreamReader(
                                new FileInputStream(FILEPATH + fileName), readingCharset));
//                BufferedWriter bufferedWriter = new BufferedWriter(
//                        new OutputStreamWriter(
//                                new FileOutputStream(FILEPATH + fileName), writingCharset));
        ) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println("line_"+line);
                byte[] raw = line.getBytes(StandardCharsets.ISO_8859_1);
                String correctedText = new String(raw, StandardCharsets.UTF_8);
                System.out.println(URLDecoder.decode(correctedText));
                //bufferedWriter.write(URLDecoder.decode(line, writingCharset));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    //3.
    public static void main(String[] args) {
        //1-1. euc-kr
        //       convert("utf-8", "euc-kr", "euc-kr.txt");
        //1-2. iso-8859-1
        //     convert("utf-8", "iso-8859-1", "iso-8859-1.txt");
        //2. broken-iso-8859-1

        //convert("iso-8859-1", "utf-8", "broken-iso-8859-1.txt");
        //4. broken-euc-kr
        //      convert("euc-kr", "utf-8", "broken-euc-kr.txt");
        restore("iso-8859-1", "utf-8", "broken-iso-8859-1.txt");

    }
}
