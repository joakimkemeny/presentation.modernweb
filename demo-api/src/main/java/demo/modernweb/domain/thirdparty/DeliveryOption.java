package demo.modernweb.domain.thirdparty;

/**
 * @johnwilander
 */
public class DeliveryOption {

    private ShipmentMethod shipmentMethod;
    private ServiceLevel serviceLevel;
    private Price price;

    public DeliveryOption(ShipmentMethod shipmentMethod, ServiceLevel serviceLevel) {
        this.shipmentMethod = shipmentMethod;
        this.serviceLevel = serviceLevel;
        this.price = shipmentMethod.price.add(serviceLevel.price);
    }

    public ShipmentMethod getShipmentMethod() {
        return shipmentMethod;
    }

    public ServiceLevel getServiceLevel() {
        return serviceLevel;
    }

    public Price getPrice() {
        return price;
    }
}
