package JavaInterviewProgram;

public class FindStringInString {

    // inStr "asacasaan"    inSubStr =  "asaa"  o/p =  4 match
    // inStr "asacasaan"    inSubStr =  "fasaa"  o/p =  0 match
    public static int longestSubString(String inStr, String inSubStr) {

        int iMaxCount = 0, tempCount = 0, indexPointer = 0;
        for (int i = 0; i < inStr.length(); i++) {
            if (inStr.charAt( i ) == inSubStr.charAt( indexPointer )) {
                tempCount += 1;
                indexPointer += 1;
                if (tempCount >= iMaxCount) {
                    iMaxCount = tempCount;
                }
                if (indexPointer >= inSubStr.length()) {
                    return iMaxCount;
                }
            } else if (indexPointer > 0) {
                i -= indexPointer; // if mis match occur between search then go back
                tempCount = 0;
                indexPointer = 0;
            } else {
                tempCount = 0;
                indexPointer = 0;
            }
        }
        return iMaxCount;
    }
    // inStr "asacasaan"    inSubStr =  "fasaa"  o/p =  4 match

    public static int longestSubStringDynamic(String inStr, String inSubStr) {

        int iMaxCount = 0, tempCount = 0, indexPointer = 0;
        for (int i = 0; i < inStr.length(); i++) {
            if (inStr.charAt( i ) != inSubStr.charAt( indexPointer )) {
                tempCount = 0;
                indexPointer = 0;
                for (int j = 0; j < inSubStr.length(); j++) {
                    if (inStr.charAt( i ) == inSubStr.charAt( j )) {
                        indexPointer = j;
                        break;
                    }
                }
            }


            if (inStr.charAt( i ) == inSubStr.charAt( indexPointer )) {
                tempCount += 1;
                indexPointer += 1;
                if (tempCount >= iMaxCount) {
                    iMaxCount = tempCount;
                }
                if (indexPointer >= inSubStr.length()) {
                    return iMaxCount;
                }
            } else if (indexPointer > 0) {
                i -= indexPointer; // if mis match occur between search then go back
                tempCount = 0;
                indexPointer = 0;
            } else {
                tempCount = 0;
                indexPointer = 0;
            }
        }
        return iMaxCount;
    }


}
