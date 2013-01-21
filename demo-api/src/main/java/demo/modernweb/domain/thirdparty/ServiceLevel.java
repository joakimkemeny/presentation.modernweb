package demo.modernweb.domain.thirdparty;

/**
 * @johnwilander
 */
public class ServiceLevel {
    final Price price;
    final Level level;

    public ServiceLevel (Price price, Level level) {
        this.price = price;
        this.level = level;
    }

    public enum Level {
        TO_DOOR, TO_DELIVERY_CENTRAL
    }

    public Price getPrice() {
        return price;
    }

    public Level getLevel() {
        return level;
    }
}
