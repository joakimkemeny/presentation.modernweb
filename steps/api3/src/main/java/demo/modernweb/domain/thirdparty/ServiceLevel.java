package demo.modernweb.domain.thirdparty;

import org.codehaus.jackson.annotate.JsonValue;

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
        TO_DOOR("Till dörren"), TO_DELIVERY_CENTRAL("Till fraktcentral");

        private final String str;
        private Level(String str) {
            this.str = str;
        }

        @JsonValue
        @Override
        public String toString() {
            return str;
        }
    }

    public Price getPrice() {
        return price;
    }

    public Level getLevel() {
        return level;
    }
}
