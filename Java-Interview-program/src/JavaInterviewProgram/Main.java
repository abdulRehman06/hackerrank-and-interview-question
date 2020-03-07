package JavaInterviewProgram;

class A {
    //    protected static final A INSTANCE = new A();
    static boolean   flag = false;
    private static  A  instance ;

    private A() {
    }

    public static A getInstance() {
        if (flag == false )
        {
            flag = true ;
            instance = new A() ;
            return instance ;
        }
        return  instance ;
    }
    public  int  prin(int a ){
        System.out.println(a);
        return  a ;
    }
    public  String  prin(String a ){
        System.out.println(a);
        return  "";
    }
}



public class Main {
    private static void permutation(String prefix, String str) {
        int n = str.length();
        if (n == 0) System.out.println(prefix);
        else {
            for (int i = 0; i < n; i++)
                permutation(prefix + str.charAt(i), str.substring(0, i) + str.substring(i+1, n));
        }
    }
//    public  static  void permutation(String  prefix   ,  String   inStrig){
//
//        if(inStrig.length()  ==  0 ){
//            System.out.println(prefix);
//            return;
//        }
//        else {
//            for (int i = 0; i < inStrig.length() ; i++) {
//                prefix = prefix + inStrig.charAt( i );
//                permutation( prefix  , inStrig.substring( 0 + i ) +  );
//            }
//        }
//    }


    public static void main(String[] args) {
//
//        A a1 = A.getInstance();
//        A a2 = A.getInstance();
//        System.out.println( a1 == a2 );
        permutation("" , "ABC") ;

    }
}
