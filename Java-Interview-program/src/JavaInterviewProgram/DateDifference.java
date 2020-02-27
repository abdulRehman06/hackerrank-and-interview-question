package JavaInterviewProgram;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateDifference {

    public static void dateDiff() throws ParseException {
        Date oDate = new Date();

        Date d1 = null;
        Date d2 = null;
        String sDate1 = "2019:08:27 08:15:58";
        String sDate2 = "2025:08:27 08:15:58";

        SimpleDateFormat dFormat = new SimpleDateFormat( "yyyy:MM:dd HH:mm:ss" );
        String temp = dFormat.format( oDate );
        System.out.print( temp + " temp, " );

        try {
            d1 = dFormat.parse( sDate1 );
            d2 = dFormat.parse( temp );
//      d2 = dFormat.parse( sDate2 );

            long diff = d2.getTime() - d1.getTime();

            System.out.println( "timeDiff=" + diff );
            long diffSeconds = diff / 1000 % 60;
            long diffMinutes = diff / (1000 * 60) % 60;
            long diffHours = diff / (1000 * 60 * 60) % 24;
            long diffDays = diff / (1000 * 60 * 60 * 24);
            long leepDays = diffDays / 1460;
            diffDays = (leepDays > 0) ? diffDays - leepDays : diffDays;


            System.out.print( diffDays + " days, " );
            System.out.print( diffHours + " hours, " );
            System.out.print( diffMinutes + " minutes, " );
            System.out.print( diffSeconds + " seconds." );
        } catch (Exception e) {
            System.out.println( "Parsing error" + e );
        }


    }
}
