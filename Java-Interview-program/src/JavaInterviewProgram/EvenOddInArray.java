package JavaInterviewProgram;

import java.util.Arrays;

public class EvenOddInArray {


    public static int[] evenOddSegrate(int[] data) {
       int left = 0 , right = data.length -1 ;
       while ( right >= left   ){
           if( data[left] %  2 != 0 &&  data[right] % 2 == 0 ){
               swappEvenOdd(data , left , right);
               right--;
               left++;
           }
           if( data[left] %  2 == 0){
               left++;
           }
           if( data[right] %  2 == 1){
               right--;
           }


       }
//        Arrays.stream(data).forEach((valie) -> System.out.print(valie));
       return   data ;
    }

    private static void swappEvenOdd(int []data , int left, int right) {
        // swapping even and odd numbers
        int temp = data[left];
        data[left] = data[right];
        data[right] = temp;
    }
}
