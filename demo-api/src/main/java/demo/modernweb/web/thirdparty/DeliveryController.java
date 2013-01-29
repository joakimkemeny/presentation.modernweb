package demo.modernweb.web.thirdparty;

import demo.modernweb.domain.thirdparty.DeliveryOption;
import demo.modernweb.manager.thirdparty.DeliveryManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @johnwilander
 */

@Controller
@RequestMapping(produces = "application/json")
public class DeliveryController {

    @Autowired
    private DeliveryManager deliveryManager;
    private static final String CORS_ALLOW_HEADER = "Access-Control-Allow-Origin";

    @RequestMapping(value = "/api/deliveryOption", method = RequestMethod.GET)
    public ResponseEntity<List<DeliveryOption>> listDeliveryOptions(HttpEntity<byte[]> requestEntity) {
        String originHeader = requestEntity.getHeaders().getFirst("Origin");
        System.out.println(originHeader);

        ResponseEntity<List<DeliveryOption>> responseEntity;

        if (AllowedCorsOrigin.contains(originHeader)) {
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.set(CORS_ALLOW_HEADER, originHeader);
            responseEntity = new ResponseEntity<List<DeliveryOption>>(deliveryManager.listDeliveryOptions(), responseHeaders, HttpStatus.OK);
            System.out.println(responseEntity);
        } else {
            List<DeliveryOption> emptyOptionsList = Collections.emptyList();
            responseEntity = new ResponseEntity<List<DeliveryOption>>(emptyOptionsList, new HttpHeaders(), HttpStatus.UNAUTHORIZED);
        }
        return responseEntity;
    }

    @RequestMapping(value = "/api/deliveryOption/{id}", method = RequestMethod.GET)
    @ResponseBody
    public DeliveryOption getCustomer(@PathVariable Integer id) {
        return deliveryManager.getOption(id);
    }

    private enum AllowedCorsOrigin {
        LOCAL_COMMUNITYHACK("http://local.communityhack.org"), SELF("http://3rd-party.info:8080");

        private final String origin;
        private AllowedCorsOrigin(String origin) {
            this.origin = origin;
        }

        public static boolean contains(String origin) {
            for (AllowedCorsOrigin allowedOrigin : AllowedCorsOrigin.values()) {
                if (allowedOrigin.origin.equals(origin)) {
                    return true;
                }
            }
            return false;
        }
    }
}
