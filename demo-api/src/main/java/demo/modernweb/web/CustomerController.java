package demo.modernweb.web;

import demo.modernweb.domain.Customer;
import demo.modernweb.manager.CustomerManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(produces = "application/json")
public class CustomerController {

    @Autowired
    private CustomerManager customerManager;

    @RequestMapping(value = "/api/customer", method = RequestMethod.GET)
    @ResponseBody
    public List<Customer> listCustomers() {
        return customerManager.listCustomers();
    }

    @RequestMapping(value = "/api/customer/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Customer getCustomer(@PathVariable Integer id) {
        return customerManager.getCustomer(id);
    }


    @RequestMapping(value = "/api/customer", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerManager.createCustomer(customer);
    }

    @RequestMapping(value = "/api/customer/{id}", method = RequestMethod.PUT, consumes = "application/json")
    @ResponseBody
    public Customer updateCustomer(@PathVariable Integer id, @RequestBody Customer customer) {
        return customerManager.updateCustomer(id, customer);
    }

    @RequestMapping(value = "/api/customer/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteCustomer(@PathVariable Integer id) {
        customerManager.deleteCustomer(id);
    }
}
