package demo.modernweb.manager;

import demo.modernweb.domain.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import demo.modernweb.domain.Order;

import java.util.ArrayList;
import java.util.List;

@Repository
public class OrderManager {

    @Autowired
    private ProductManager productManager;

    private List<Order> orders = new ArrayList<>();
    private int orderId;

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

        for (OrderItem product : order.getItems()) {
            productManager.updateStockStatus(product.getId(), product.getQuantity());
        }

        return order;
    }
}
