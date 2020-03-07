package com.company;

//import JavaInterviewProgram.FindMaxChar;

import JavaInterviewProgram.BracketMatch;
import JavaInterviewProgram.LongesRepetedString;

import java.lang.reflect.Array;
import java.text.ParseException;
import java.util.Arrays;


class A {
    public String name = "Abdul Rehman";
}

class Main {

    public static int[] evenOdd(int[] inArr) {
//

        int l = 0, r = inArr.length - 1;
        while (l < r) {
            if (inArr[l] % 2 != 0 && inArr[r] % 2 != 1) {
                int temp = inArr[l];
                inArr[l] = inArr[r];
                inArr[r] = temp;
            }
            if (inArr[l] % 2 == 0) ++l;
            if (inArr[r] % 2 == 1) --r;

        }
        Arrays.stream( inArr ).forEach( (temp) -> System.out.print( temp + " " ) );
        return inArr;

    }

    static void printDistinctPermutn(String str,
                                     String ans) {

        // If string is empty
        if (str.length() == 0) {

            // print ans
            System.out.print( ans + " " );
            return;
        }

        // Make a boolean array of size '26' which
        // stores false by default and make true
        // at the position which alphabet is being
        // used
        boolean alpha[] = new boolean[26];

        for (int i = 0; i < str.length(); i++) {

            // ith character of str
            char ch = str.charAt( i );

            // Rest of the string after excluding
            // the ith character
            String ros = str.substring( 0, i ) + str.substring( i + 1 );

            // If the character has not been used
            // then recursive call will take place.
            // Otherwise, there will be no recursive
            // call
            if (alpha[ch - 'a'] == false)
                printDistinctPermutn( ros, ans + ch );
            alpha[ch - 'a'] = true;
        }
    }



    public static void main(String[] args) throws ParseException {
        String s = "abc";
//        printDistinctPermutn( s, "" );
//        BracketMatch.bracketMatch("{[((()]}");
        LongesRepetedString.longgestRepetedString("AAAAHHHHHHCCCCC");

//
//      Arrays.stream(a).forEach( (temp ) ->   System.out.println( temp ));
////        Arrays.stream(a).forEach( (temp) ->   System.out.println( temp ));
//     Arrays.stream(evenOdd(a )).forEach( (temp) -> System.out.println(temp)  );
//        Arrays.stream(a).forEach( (temp ) ->   System.out.println( temp ));


    }
}


