export class DateUtils {

    public static getDay(date: Date): string {
        return date.getDay().toString();
    }

    public static getMonth(date: Date): string {
        return date.toLocaleString('en-GB', { month: 'long' });
    }

    public static getYear(date: Date): string {
        return date.getFullYear().toString();
    }
}