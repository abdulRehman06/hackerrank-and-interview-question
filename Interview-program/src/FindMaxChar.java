public class FindMaxChar {
    public static  void  maxCharCount(String str){

        int count = 1 , max = 0 ;
        char value = '\0';
        char previous = str.charAt( 0 );
        for (int i = 1; i < str.length()  ; i++) {
            if(str.charAt( i ) ==  previous){
                count++;

                if( count > max){
                    value = previous;
                    max = count;
                }
            }
            else {
                previous =  str.charAt( i );
                count = 1;
            }
        }
        System.out.println( "value = " + value + " max ="  + max  );

    }
    }
