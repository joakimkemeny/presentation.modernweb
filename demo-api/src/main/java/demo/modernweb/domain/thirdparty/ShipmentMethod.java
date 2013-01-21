package demo.modernweb.domain.thirdparty;

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
        BY_AIR, BY_TRAIN
    }

    public Price getPrice() {
        return price;
    }

    public Method getMethod() {
        return method;
    }
}
