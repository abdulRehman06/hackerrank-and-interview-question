import java.lang.reflect.Array;
import java.util.LinkedList;

class Dog {
    public String getType() {
        System.out.println( "NormalDog" );
        return "NormalDog";
    }
}

/**
 * Pet Dog has an extra method dogName()
 */
class PetDog extends Dog {
    public String getType() {
        System.out.println( "PetDog" );
        return "PetDog";
    }

    public String dogName() {
        System.out.println( "I don't have Name !!" );
        return "NO Name";
    }
}

/**
 * Police Dog has an extra method secretId()
 */
class PoliceDog extends PetDog {

    public String secretId() {
        System.out.println( " secretId ID" );
        return "ID";
    }

    public String getType() {
        System.out.println( "I am a Police Dog" );
        return "Police Dog";
    }
}

public class TimeExpertInterview {
    public static void main(String[] args) {
        Dog obj1 = new Dog();
         /**
         *  Object of Pet Dog is created with Dog Reference since
         *  Upcasting is done automatically for us we don't have to worry about it
         *
         */
        Dog obj2 = new PetDog();
         /**
         *  Object of Police Dog is created with Dog Reference since
         *  Upcasting is done automatically for us we don't have to worry
         *  about it here even though we are extending PoliceDog with PetDog
         *  since PetDog is extending Dog Java automatically upcast for us
         */
        Dog obj3 = new PoliceDog();

        //up casting
        obj1.getType(); //Prints Normal Dog
        obj2.getType(); //Prints Pet Dog
        obj3.getType(); //Prints Police Dog


        //downcasting
        System.out.println("Downcasting ");
        ((PoliceDog)obj3).secretId();

    }


}
