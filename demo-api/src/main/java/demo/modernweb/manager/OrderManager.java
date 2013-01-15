package demo.modernweb.manager;

import org.springframework.stereotype.Repository;
import demo.modernweb.domain.Order;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class OrderManager {

    private List<Order> orders = new ArrayList<>();
    private int orderId;

    @PostConstruct
    protected void setupOrders() {
        orders.add(new Order(++orderId, "Anna Svensson", 100));
        orders.add(new Order(++orderId, "Jonas Karlsson", 150));
    }

    public List<Order> listOrders() {
        return orders;
    }

    public Order getOrder(Integer orderId) {
        for (Order order : orders) {
            if (order.getId().equals(orderId)) {
                return order;
            }
        }
        return null;
    }

    public Order createOrder(Order order) {
        order.setId(++orderId);
        orders.add(order);
        return order;
    }

    public Order updateOrder(Integer orderId, Order updatedOrder) {
        Order order = getOrder(orderId);
        if (order != null) {
            order.setCustomer(updatedOrder.getCustomer());
            order.setQuantity(updatedOrder.getQuantity());
        }
        return order;
    }

    public void deleteOrder(Integer orderId) {
        Order order = getOrder(orderId);
        orders.remove(order);
    }
}
