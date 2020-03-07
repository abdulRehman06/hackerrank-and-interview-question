package JavaInterviewProgram;

import java.lang.reflect.Array;
import java.util.Arrays;

public class FinMatchinWords {
    public static void findfirstCommanString(String[] inArrStr) {
        StringBuilder newStr = new StringBuilder();
        Arrays.sort( inArrStr );
        String lastWord = inArrStr[inArrStr.length - 1];
        String firstWord = inArrStr[0];
        for (int i = 0; i < firstWord.length(); i++) {
            if (firstWord.charAt( i ) !=lastWord.charAt( i ))
                break;
            else {
                newStr.append( firstWord.charAt( i ) );
            }
        }
        System.out.println( newStr );

    }

}
