package com.study.assignment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

public class CharacterEncoder {

    private static final Logger log = LoggerFactory.getLogger(CharacterEncoder.class);

    private static final String FILEPATH = "./src/main/java/com/java/assignment/";
    private static final String ATTACHEDFILE = "utf-8.contents.txt";

    //인코딩 변환
    public static void convert(String readingCharset, String writingCharset, String fileName) throws IOException {
        try (
                BufferedReader bufferedReader = new BufferedReader(
                        new InputStreamReader(
                                new FileInputStream(FILEPATH + ATTACHEDFILE), readingCharset));
                BufferedWriter bufferedWriter = new BufferedWriter(
                        new OutputStreamWriter(
                                new FileOutputStream(FILEPATH + fileName), writingCharset));
        ) {
            bufferedWriter.write(bufferedReader.readLine());
        } 
    }


    //파일 복원
    public static void restore(String fileName) throws IOException {
        BufferedReader bufferedReader = null;
        FileWriter fileWriter = null;

        try {
            bufferedReader = new BufferedReader(
                    new FileReader(FILEPATH + fileName));
            String content = new String(bufferedReader.readLine().getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);

            fileWriter = new FileWriter(FILEPATH + fileName, false);
            fileWriter.write(URLDecoder.decode(content, "utf-8"));
        } finally {
            if (fileWriter != null) fileWriter.close();
            if (bufferedReader != null) bufferedReader.close();
        }
    }

    public static void main(String[] args) throws IOException {
//        //1-1. euc-kr
//        convert("utf-8", "euc-kr", "euc-kr.txt");
//        //1-2. iso-8859-1
//        convert("utf-8", "iso-8859-1", "iso-8859-1.txt");
//        //2. broken-iso-8859-1
//        convert("iso-8859-1", "utf-8", "broken-iso-8859-1.txt");
//        //3. broken-iso-8859-1 복원
//        restore("broken-iso-8859-1.txt");
//        4. broken-euc-kr
//        convert("euc-kr", "utf-8", "broken-euc-kr.txt");

    }
}

