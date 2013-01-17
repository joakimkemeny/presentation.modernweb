package demo.modernweb.manager;

import demo.modernweb.domain.Customer;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CustomerManager {

    private List<Customer> customers = new ArrayList<>();
    private int customerId;

    @PostConstruct
    protected void setupCustomers() {
        customers.add(new Customer(++customerId, "Anna", "Svensson"));
        customers.add(new Customer(++customerId, "Jonas", "Karlsson"));
    }

    public List<Customer> listCustomers() {
        return customers;
    }

    public Customer getCustomer(Integer customerId) {
        for (Customer customer : customers) {
            if (customer.getId().equals(customerId)) {
                return customer;
            }
        }
        return null;
    }

    public Customer createCustomer(Customer customer) {
        customer.setId(++customerId);
        customers.add(customer);
        return customer;
    }

    public Customer updateCustomer(Integer customerId, Customer updatedCustomer) {
        Customer customer = getCustomer(customerId);
        if (customer != null) {
            customer.setFirstName(updatedCustomer.getFirstName());
            customer.setLastName(updatedCustomer.getLastName());
        }
        return customer;
    }

    public void deleteCustomer(Integer customerId) {
        Customer customer = getCustomer(customerId);
        customers.remove(customer);
    }
}
