package JavaInterviewProgram;

import java.util.Stack;

public class BracketMatch {
    public static void bracketMatch(String inString) {
        Stack<Character> tempStack = new Stack<>();
        System.out.println( "temp : " + tempStack );

        for (int i = 0; i < inString.length(); i++) {
            if ("{[(".contains( Character.toString( inString.charAt( i ) ) )) {
                tempStack.push( inString.charAt( i ) );
            } else if (("}])".contains( Character.toString( inString.charAt( i ) ) ))) {
                char ch = inString.charAt( i );
                if (tempStack.size() <= 0) {
                    break;
                } else {

                    char topBracket = tempStack.peek();


                    if ((topBracket == '[' && ch == ']') || (topBracket == '{' && ch == '}') || (topBracket == '(' && ch == ')')) {
                        tempStack.pop();
                    }
                }
            }
        }
        System.out.println( "temp : " + tempStack );
    }

}
