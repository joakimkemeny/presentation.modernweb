package demo.modernweb.web.thirdparty;

import demo.modernweb.domain.thirdparty.DeliveryOption;
import demo.modernweb.manager.thirdparty.DeliveryManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @johnwilander
 */

@Controller
@RequestMapping(produces = "application/json")
public class DeliveryController {

    @Autowired
    private DeliveryManager deliveryManager;

    @RequestMapping(value = "/api/deliveryOptions", method = RequestMethod.GET)
    @ResponseBody
    public List<DeliveryOption> listDeliveryOptions() {
        return deliveryManager.listDeliveryOptions();
    }

}
