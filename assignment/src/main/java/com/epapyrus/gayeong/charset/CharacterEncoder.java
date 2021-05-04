package com.epapyrus.gayeong.charset;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;

public class CharacterEncoder {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    private final String currentCharset;
    private final String currentfilePath;

    public CharacterEncoder(String currentCharset, String currentFilePath) {
        this.currentCharset = currentCharset;
        this.currentfilePath = currentFilePath;
    }

    //
    public void changeEncoding(String changedCharset, String changedFilePath) {
        InputStreamReader inputStreamReader = null;
        FileInputStream fileInputStream = null;
        File currentFile = new File(currentfilePath);
        StringBuilder content = new StringBuilder();

        int temp = 0;
        File changedFile = new File(changedFilePath);

        if (!changedFile.exists()) {
            try {
                changedFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        try {
            fileInputStream = new FileInputStream(currentFile);
            inputStreamReader = new InputStreamReader(fileInputStream);
            OutputStreamWriter outputStreamWriter = new OutputStreamWriter(new FileOutputStream(changedFile), changedCharset);

            while ((temp = inputStreamReader.read()) != -1) {
                System.out.println(temp);
                outputStreamWriter.write(temp);
                outputStreamWriter.flush();
            }

            String[] charSet = {"utf-8", "euc-kr", "iso-8859-1"};

            log.info("content :: {}" , content);
            log.info("utf-8 :: {}", new String(content.toString().getBytes("UTF-8")));
            log.info("iso_8859_1 :: {}", new String(content.toString().getBytes("ISO-8859-1")));
            log.info("EUC-KR :: {}", new String(content.toString().getBytes("EUC-KR")));


        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (inputStreamReader != null) {
                    inputStreamReader.close();
                }
                if (fileInputStream != null) {
                    fileInputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

    public static void main(String[] args) {
        new CharacterEncoder("utf-8", "./src/Asignment/utf-8.txt")
                .changeEncoding("euc-kr", "./src/Asignment/euc-kr.txt");
    }
}
