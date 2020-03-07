package JavaInterviewProgram;

public class LongesRepetedString {
    public static void longgestRepetedString(String inStr) {
        int iMax = 0, tempCount = 1;
//        char preChar =  inStr.charAt( 0 );
        for (int i = 0; i < inStr.length() - 1; i++) {
            if (inStr.charAt( i ) == inStr.charAt( i + 1 )) {
                tempCount += 1;
                if(tempCount > iMax)  iMax = tempCount;
            } else {
                tempCount = 1;
            }


        }

        System.out.println("max : " + iMax );
    }
}
