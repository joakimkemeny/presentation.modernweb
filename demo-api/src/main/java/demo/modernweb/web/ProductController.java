package demo.modernweb.web;

import demo.modernweb.domain.Customer;
import demo.modernweb.domain.Product;
import demo.modernweb.manager.ProductManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(produces = "application/json")
public class ProductController {

    @Autowired
    private ProductManager productManager;

    @RequestMapping(value = "/api/product", method = RequestMethod.GET)
    @ResponseBody
    public List<Product> listProducts() {
        return productManager.listProducts();
    }

    @RequestMapping(value = "/api/product/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Product getProduct(@PathVariable Integer id) {
        return productManager.getProduct(id);
    }


    @RequestMapping(value = "/api/product", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public Product createProduct(@RequestBody Product product) {
        return productManager.createProduct(product);
    }

    @RequestMapping(value = "/api/product/{id}", method = RequestMethod.PUT, consumes = "application/json")
    @ResponseBody
    public Product updateProduct(@PathVariable Integer id, @RequestBody Product product) {
        return productManager.updateProduct(id, product);
    }

    @RequestMapping(value = "/api/product/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteProduct(@PathVariable Integer id) {
        productManager.deleteProduct(id);
    }
}
