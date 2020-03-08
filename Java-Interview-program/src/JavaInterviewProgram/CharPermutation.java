package JavaInterviewProgram;

public class CharPermutation {

    public static void charPermutation(String inString, String stream) {
        if (inString.length() <= 0) {
            System.out.print(stream + " ");
            //            return stream;
        }
        for (int i = 0; i < inString.length(); i++) {
            charPermutation(inString.substring(0, i) + inString.substring(i + 1, inString.length()), stream + inString.charAt(i));
        }

    }
}
