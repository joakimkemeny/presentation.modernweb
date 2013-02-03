package demo.modernweb.manager.thirdparty;

import demo.modernweb.domain.thirdparty.DeliveryOption;
import demo.modernweb.domain.thirdparty.Price;
import demo.modernweb.domain.thirdparty.ServiceLevel;
import demo.modernweb.domain.thirdparty.ShipmentMethod;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * @johnwilander
 */

@Repository
public class DeliveryManager {

    private List<DeliveryOption> deliveryOptions = new ArrayList<>();
    private int deliveryOptionId;

    @PostConstruct
    protected void setupDeliveryOptions() {
        deliveryOptions.add(new DeliveryOption(
                ++deliveryOptionId,
                new ShipmentMethod(
                        new Price(4000, Price.Currency.SEK_ORE),
                        ShipmentMethod.Method.BUSSGODS),
                new ServiceLevel(
                        new Price(4000, Price.Currency.SEK_ORE),
                        ServiceLevel.Level.TO_DELIVERY_CENTRAL)
        ));
        deliveryOptions.add(new DeliveryOption(
                ++deliveryOptionId,
                new ShipmentMethod(
                        new Price(8000, Price.Currency.SEK_ORE),
                        ShipmentMethod.Method.UPS),
                new ServiceLevel(
                        new Price(6000, Price.Currency.SEK_ORE),
                        ServiceLevel.Level.TO_DOOR)
        ));
    }

    public List<DeliveryOption> listDeliveryOptions() {
        return deliveryOptions;  // TODO: Should return a clone? Deep clone even?
    }

    public DeliveryOption getOption(int id) throws IllegalArgumentException {
        for (DeliveryOption deliveryOption : deliveryOptions) {
            if (deliveryOption.getId() == id) {
                return deliveryOption;
            }
        }
        throw new IllegalArgumentException("No delivery option with id " + id);
    }
}
