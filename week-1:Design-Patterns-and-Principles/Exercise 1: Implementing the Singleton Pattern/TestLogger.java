public class TestLogger {
    public static void main(String[] args) {
        Logger l1 = Logger.getInstance();
        Logger l2= Logger.getInstance();
        l1.log("First log message");
        l2.log("Second log message");
        if (l1 == l2) {
            System.out.println("Both logger instances that are created are same.");
        } else {
            System.out.println("Found Different logger instances.");
        }
    }
}
