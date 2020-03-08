package JavaInterviewProgram;

import java.util.Arrays;

public class MurgeSort {


    public static int[] sort(int[] inArr) {
        if (inArr.length <= 1)
            return inArr;
        else {
            int l = 0;
            int r = inArr.length;
            int middle = inArr.length / 2;

            int[] temp1 = Arrays.copyOfRange( inArr, 0, middle );
            int[] temp2 = Arrays.copyOfRange( inArr, middle, r );
            return murge( sort( temp1 ), sort( temp2 ) );
        }
    }

    public static int[] murge(int[] iArrLeft, int[] iArrRight) {
        int l = 0, r = 0, nextPosPointer = 0;

        int[] tempArr = new int[iArrLeft.length + iArrRight.length];
        while (l < iArrLeft.length && r < iArrRight.length) {
            if (iArrLeft[l] < iArrRight[r]) {
                tempArr[nextPosPointer] = iArrLeft[l];
                l += 1;
                nextPosPointer += 1;
            } else {
                tempArr[nextPosPointer] = iArrRight[r];
                r += 1;
                nextPosPointer += 1;
            }
        }

        // copy remaining values
        while (l < iArrLeft.length) {
            tempArr[nextPosPointer] = iArrLeft[l];
            nextPosPointer += 1;
            l += 1;
        }
        while (r < iArrRight.length) {
            tempArr[nextPosPointer] = iArrRight[r];
            r += 1;

            nextPosPointer += 1;
        }

        return tempArr;
    }



}
