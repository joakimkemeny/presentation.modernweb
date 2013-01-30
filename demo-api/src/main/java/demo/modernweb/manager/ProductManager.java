package demo.modernweb.manager;

import demo.modernweb.domain.Product;
import demo.modernweb.websocket.WebSocketManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductManager {

    private List<Product> products = new ArrayList<>();
    private int productId;

    @Autowired
    private WebSocketManager webSocketManager;

    @PostConstruct
    protected void setupProducts() {
        products.add(new Product(++productId,
                "Ristretto",
                "A blend of South American and East African Arabicas, with a touch of Robusta, roasted separately to create the subtle fruity note of this full-bodied, intense espresso.",
                "ristretto.png",
                1000, 50, 2));
        products.add(new Product(++productId,
                "Dulsão do Brasil",
                "A pure Arabica coffee, Dulsão do Brasil is a delicate blend of red and yellow Bourbon beans with a distinctive note of toasted grain. The beans are treated semi-dry to allow the mucillage sugars to infuse the bean with a mellow flavour, then separately roasted to reveal an elegantly balanced satiny sweet flavour with a note of toasted grain.",
                "dulsao.png",
                1000, 50, 3));
        products.add(new Product(++productId,
                "Dulsão do Brasil",
                "A pure Arabica coffee, Dulsão do Brasil is a delicate blend of red and yellow Bourbon beans with a distinctive note of toasted grain. The beans are treated semi-dry to allow the mucillage sugars to infuse the bean with a mellow flavour, then separately roasted to reveal an elegantly balanced satiny sweet flavour with a note of toasted grain.",
                "dulsao.png",
                1000, 50, 3));
        products.add(new Product(++productId,
                "Dulsão do Brasil",
                "A pure Arabica coffee, Dulsão do Brasil is a delicate blend of red and yellow Bourbon beans with a distinctive note of toasted grain. The beans are treated semi-dry to allow the mucillage sugars to infuse the bean with a mellow flavour, then separately roasted to reveal an elegantly balanced satiny sweet flavour with a note of toasted grain.",
                "dulsao.png",
                1000, 50, 3));
        products.add(new Product(++productId,
                "Dulsão do Brasil",
                "A pure Arabica coffee, Dulsão do Brasil is a delicate blend of red and yellow Bourbon beans with a distinctive note of toasted grain. The beans are treated semi-dry to allow the mucillage sugars to infuse the bean with a mellow flavour, then separately roasted to reveal an elegantly balanced satiny sweet flavour with a note of toasted grain.",
                "dulsao.png",
                1000, 50, 3));
        products.add(new Product(++productId,
                "Dulsão do Brasil",
                "A pure Arabica coffee, Dulsão do Brasil is a delicate blend of red and yellow Bourbon beans with a distinctive note of toasted grain. The beans are treated semi-dry to allow the mucillage sugars to infuse the bean with a mellow flavour, then separately roasted to reveal an elegantly balanced satiny sweet flavour with a note of toasted grain.",
                "dulsao.png",
                1000, 50, 3));
        products.add(new Product(++productId,
                "Dulsão do Brasil",
                "A pure Arabica coffee, Dulsão do Brasil is a delicate blend of red and yellow Bourbon beans with a distinctive note of toasted grain. The beans are treated semi-dry to allow the mucillage sugars to infuse the bean with a mellow flavour, then separately roasted to reveal an elegantly balanced satiny sweet flavour with a note of toasted grain.",
                "dulsao.png",
                1000, 50, 3));
    }

    public List<Product> listProducts() {
        return products;
    }

    public Product getProduct(Integer productId) {
        for (Product product : products) {
            if (product.getId().equals(productId)) {
                return product;
            }
        }
        return null;
    }

    public Product createProduct(Product product) {
        product.setId(++productId);
        products.add(product);
        return product;
    }

    public Product updateProduct(Integer productId, Product updatedProduct) {
        Product product = getProduct(productId);
        if (product != null) {
            product.setName(updatedProduct.getName());
            product.setInfo(updatedProduct.getInfo());
            product.setImage(updatedProduct.getImage());
            product.setStockStatus(updatedProduct.getStockStatus());
        }
        return product;
    }

    public void deleteProduct(Integer productId) {
        Product product = getProduct(productId);
        products.remove(product);
    }

    public void updateStockStatus(Integer productId, Integer quantity) {
        Product product = getProduct(productId);
        product.setStockStatus(product.getStockStatus() - quantity);

        webSocketManager.broadcast("stockStatusUpdated", product);
    }
}
