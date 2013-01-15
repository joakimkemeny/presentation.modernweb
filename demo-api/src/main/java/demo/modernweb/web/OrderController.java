package demo.modernweb.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import demo.modernweb.domain.Order;
import demo.modernweb.manager.OrderManager;

import javax.annotation.PostConstruct;
import java.util.List;

@Controller
@RequestMapping(produces = "application/json")
public class OrderController {

    @Autowired
    private OrderManager orderManager;

    @RequestMapping(value = "/api/order", method = RequestMethod.GET)
    @ResponseBody
    public List<Order> listOrders() {
        return orderManager.listOrders();
    }

    @RequestMapping(value = "/api/order/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Order getOrder(@PathVariable Integer id) {
        return orderManager.getOrder(id);
    }


    @RequestMapping(value = "/api/order", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public Order createOrder(@RequestBody Order order) {
        return orderManager.createOrder(order);
    }

    @RequestMapping(value = "/api/order/{id}", method = RequestMethod.PUT, consumes = "application/json")
    @ResponseBody
    public Order updateOrder(@PathVariable Integer id, @RequestBody Order order) {
        return orderManager.updateOrder(id, order);
    }

    @RequestMapping(value = "/api/order/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteOrder(@PathVariable Integer id) {
        orderManager.deleteOrder(id);
    }
}
