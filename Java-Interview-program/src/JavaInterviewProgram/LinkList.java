package JavaInterviewProgram;

public class LinkList {
    public Node head = null;

    public class Node {
        private String value = "";
        Node nextNode = null;
        Node preNode = null;

        public Node(String inValue) {
            this.value = inValue;
        }
    }

    public void insert(String inValue) {
        Node tempNode = new Node( inValue );
        if (this.head != null) {
            tempNode.nextNode = head;
            head.preNode = tempNode;
            head = tempNode;
        } else {
            this.head = tempNode;
        }
    }


    public void delete(String inValue) {
        Node temp = head;
        while (temp.value == inValue) {
            Node tempNode = temp.preNode;
            tempNode.nextNode = temp.nextNode;
            System.out.println( "inValue has deleted " );
        }
    }

    public void print() {
        Node temp = head;
        Node rev = null;
        while (temp != null) {
            System.out.print( temp.value + " " );
            rev = temp;
            temp = temp.nextNode;
        }

        System.out.println( "print inreverse order" );
        while (rev != null) {
            System.out.print( rev.value + " " );
//            rev = temp ;
            rev = rev.preNode;
        }
    }

    public LinkList reverse() {
        Node temp = head;
//        Node rev = null;
        LinkList newList = new LinkList();
        while (temp != null) {
            newList.insert( temp.value );
            temp = temp.nextNode;
        }
        return newList;
    }
}


