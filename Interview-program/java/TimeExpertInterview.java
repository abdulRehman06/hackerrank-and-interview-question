import java.util.LinkedList;

class A {
    public void printValue() {
        System.out.println( "CLass_A" );
    }
}

class B extends  A {
    public void printValue() {
        System.out.println( "CLass_B" );
    }
}

public class TimeExpertInterview {
    public static void main(String[] args) {
    /*    Question _ 1.1
        B oB = new A();
        Quet : kia print ho ga
        //  Ans child class may parrent class ka object initialize nahi kara saktay (error )..?
//        oB.printValue()

*/

       /*  Question _ 1.2
        B oB = (A)new A();
        Quet : kia print ho ga
        // child class may  parent class ka object initialize nahi kar saktay (error)?


       //downcasting
	  A oB = new B(); // what will print
      ((B)oB).PrintCLassB(); // CLass_B


       /*  Question _ 1.4
        A oA = new B(); // this will generate compile time error
        oA.printValue(); // this will call class b fn
        */

//        oB.printValue()
//**      @Question==============02
        LinkedList<Character> ll = new LinkedList<>();
        ll.add('a' );
        ll.add( 'b' );
        ll.add( 'c' );
        int a = -5;
        System.out.println( ll  + " " + a);
        fn(ll, a);
//        ll = null;
        System.out.println( ll  + " " + a);

    }
    public static  void fn( LinkedList<Character>  ll , int value ){

        ll.remove();
        System.out.println( ll  + " inside " + value);
        value = 10;
    }

}
