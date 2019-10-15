public class FindStringInString {

    public static int subStringIndex(String str, String substr) {
        int substrlen = substr.length();
        int strlen = str.length();
        int j = 0;
        int index = -1;

        if (substrlen < 1) {
            return index;
        } else {
//            "o o  r e doo hello";
//            "     r e doo";
//            index = 0 J=1
            for (int i = 0; i < strlen; i++) {              // iterate through main string
                if (str.charAt( i ) == substr.charAt( j )) {    // check substring
                    index = i - j;   //2                           // remember index
                    j++;                                    // iterate
                    if (j == substrlen) {                   // when to stop
                        return index;
                    }
                } else {
                    j = 0;
                    index = -1;
                }
            }
        }
        return index;
    }



}
