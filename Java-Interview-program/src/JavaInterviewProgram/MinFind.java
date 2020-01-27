public class MinFind {
    public  static  void minFind(int[] inArr){
        int length = inArr.length-2;
       int min = Integer.MAX_VALUE;
       int tempValue = inArr[0] ;//{3,5,8,4,68,2,2}
        for (int i = 0; i < length ; i++) {
            if (min > inArr[i]) {
                min = inArr[i];
                continue;
            }

        }
        System.out.print(min  + " = min " );
    }
}
