package demo.modernweb.domain.thirdparty;

/**
 * @johnwilander
 */
public class DeliveryOption {

    private int id;
    private ShipmentMethod shipmentMethod;
    private ServiceLevel serviceLevel;
    private Price price;

    public DeliveryOption(int id, ShipmentMethod shipmentMethod, ServiceLevel serviceLevel) {
        this.id = id;
        this.shipmentMethod = shipmentMethod;
        this.serviceLevel = serviceLevel;
        this.price = shipmentMethod.price.add(serviceLevel.price);
    }

    public int getId() {
        return id;
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
