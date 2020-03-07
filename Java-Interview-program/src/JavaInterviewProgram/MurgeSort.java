package JavaInterviewProgram;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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


    // murge sort using ArrayList
  /*  public static List<Integer> sort(List<Integer> inArr) {
        if (inArr.size() <= 1) {
            return inArr;
        } else {
            List<Integer> temp1 = new ArrayList<>();
            List<Integer> temp2 = new ArrayList<>();
            int left = 0;
            ;
            int middle = inArr.size() / 2;
            int right = inArr.size();
            for (int i = 0; i < middle; i++) {
                temp1.add( inArr.get( i ) );
            }
            for (int i = middle  ; i < right ; i++) {
                temp2.add( inArr.get( i ) );
            }

            return murge(sort( temp1 ) , sort( temp2 ));
        }
    }

    public static List<Integer> murge(List<Integer> inArrL, List<Integer> inArrR) {
        int l = 0, r = 0;
        List<Integer> tempArr = new ArrayList<>();
        while (l < inArrL.size() && r < inArrR.size()) {
            if (inArrL.get( l ) <= inArrR.get( r )) {
                tempArr.add( inArrL.get( l ) );
                l += 1;
            } else {
                tempArr.add( inArrR.get( r ) );
                r += 1;
            }
        }
        // adding remaining values
        while (r < inArrR.size()) {
            tempArr.add( inArrR.get( r ) );
            r += 1;
        }
        while (l < inArrL.size()) {
            tempArr.add( inArrL.get( l ) );
            l += 1;
        }


//        System.out.println( "new Arr :" + tempArr );

        return tempArr;
    } */

}
