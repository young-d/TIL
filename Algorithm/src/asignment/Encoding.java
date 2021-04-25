package asignment;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Encoding {

    private final Logger log = Logger.getGlobal();
    private String encoding = "utf-8";
    private final String filePath = "./src/Asignment/utf-8.txt";

//    public Encoding(String encoding, String filePath) {
//        this.encoding = encoding;
//        this.filePath = filePath;
//    }

    public void getEncoding() {

        BufferedReader bufferedReader = null;
        InputStreamReader inputStreamReader = null;
        FileInputStream fileInputStream = null;
        File file = new File(filePath);
        StringBuilder content = new StringBuilder();
        String line = "";
        String newFileName = "./src/Asignment/euc-kr.txt";
        String newEncoding = "euc-kr";
        int temp = 0;
        File file1 = new File(newFileName);

        if(!file1.exists()){
            try {
                file1.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

            try {
                fileInputStream = new FileInputStream(file);
                inputStreamReader = new InputStreamReader(fileInputStream);
                OutputStreamWriter outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file1), newEncoding);
//                BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file1), newEncoding));

                while ((temp = inputStreamReader.read())!=-1) {
                    System.out.println(temp);
                    outputStreamWriter.write(temp);
                    outputStreamWriter.flush();
                }

                String[] charSet = {"utf-8", "euc-kr", "iso-8859-1"};

                log.log(Level.INFO, "content :: " + content);
                log.log(Level.INFO, "utf-8 :: " + new String(content.toString().getBytes(StandardCharsets.UTF_8)));
                log.log(Level.INFO, "iso_8859_1 :: " + new String(content.toString().getBytes(StandardCharsets.ISO_8859_1)));
                log.log(Level.INFO, "EUC-KR :: " + new String(content.toString().getBytes("EUC-KR")));


            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    if (bufferedReader != null) {
                        bufferedReader.close();
                    }
                    if (bufferedReader != null) {
                        bufferedReader.close();
                    }
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
//        Encoding encoding = new Encoding("utf-8", "./src/Asignment/utf-8.txt");

        new Encoding().getEncoding();
    }

}
