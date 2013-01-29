package demo.modernweb.domain.thirdparty;

import org.codehaus.jackson.annotate.JsonValue;

/**
 * @johnwilander
 */
public class ShipmentMethod {
    final Price price;
    final Method method;

    public ShipmentMethod(Price price, Method method) {
        this.price = price;
        this.method = method;
    }

    public enum Method {
        BUSSGODS("Bussgods"), UPS("UPS");

        private final String str;
        private Method(String str) {
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

    public Method getMethod() {
        return method;
    }
}
