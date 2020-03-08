package JavaInterviewProgram;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateDifference {

    public static void dateDiff(Date d1 , Date  d2  ) throws ParseException {

//        SimpleDateFormat sdf = new SimpleDateFormat( "yyyy:MM:dd hh:mm:ss" );
//        Date d1  = sdf.parse( sdf.format( oCal.getTime())  ) ;
//
//        Date oDate = new Date();
//
//        Date d1 = null;
//        Date d2 = null;
//        String sDate1 = "20210306 04:28:54";
//        String sDate2 = "20200306 04:28:54";
//
//        SimpleDateFormat dFormat = new SimpleDateFormat( "yyyyMMdd hh:mm:ss" );
//        String temp = dFormat.format( oDate );
//        System.out.print( temp + " temp, " );

        try {
//            d1 = dFormat.parse( sDate1 );
////            d2 = dFormat.parse( temp );
//      d2 = dFormat.parse( sDate2 );

            long diff = d1.getTime() - d2.getTime();

            System.out.println( "timeDiff=" + diff );
            long diffSeconds = diff / 1000 % 60;
            long diffMinutes = diff / (1000 * 60) % 60;
            long diffHours = diff / (1000 * 60 * 60) % 24;
            long diffDays = diff / (1000 * 60 * 60 * 24);
            long leepDays = diffDays / 1460;
            diffDays = (leepDays > 0) ? diffDays - leepDays : diffDays;

            System.out.println("diffDays " + diffDays +" diffHours " + diffHours +" diffMinutes " + diffMinutes +" diffSeconds " + diffSeconds ) ;
//
//            System.out.print( diffDays + " days, " );
//            System.out.print( diffHours + " hours, " );
//            System.out.print( diffMinutes + " minutes, " );
//            System.out.print( diffSeconds + " seconds." );
        } catch (Exception e) {
            System.out.println( "Parsing error" + e );
        }


    }
}
