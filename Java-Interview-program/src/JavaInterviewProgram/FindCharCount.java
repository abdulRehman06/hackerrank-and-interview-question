package JavaInterviewProgram;

import java.util.HashMap;
import java.util.HashSet;

public class FindCharCount {
    public static void maxCharCount(String str) {


        HashMap<Character , Integer>  oHas = new HashMap<>(  );
        for (int i = 0; i < str.length() ; i++) {
            if(oHas.get( ((Character) str.charAt( i ))  )  !=  null){
                oHas.put(   ((Character) str.charAt( i ))  , oHas.get( ((Character) str.charAt( i )) ) + 1 );
            }
            else{
                oHas.put( ((Character) str.charAt( i ))  , 1   );
            }
        }
        System.out.println(oHas );

    }
}
