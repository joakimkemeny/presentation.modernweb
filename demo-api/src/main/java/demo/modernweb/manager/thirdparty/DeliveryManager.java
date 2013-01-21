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

    @PostConstruct
    protected void setupDeliveryOptions() {
        deliveryOptions.add(new DeliveryOption(
                new ShipmentMethod(
                        new Price(100000, Price.Currency.SEK_ORE),
                        ShipmentMethod.Method.BY_TRAIN),
                new ServiceLevel(
                        new Price(100000, Price.Currency.SEK_ORE),
                        ServiceLevel.Level.TO_DELIVERY_CENTRAL)
        ));
    }

    public List<DeliveryOption> listDeliveryOptions() {
        return deliveryOptions;  // TODO: Should return a clone? Deep clone even?
    }
}
