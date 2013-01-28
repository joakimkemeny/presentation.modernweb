package demo.modernweb.domain;

public class Product {

    private Integer id;
    private String name;
    private String info;
    private String image;
    private Integer stockStatus;
    private Integer quantity;
    private Integer price;

    public Product() {
    }

    public Product(Integer id, String name, String info, String image, Integer stockStatus, Integer quantity, Integer price) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.image = image;
        this.stockStatus = stockStatus;
        this.quantity = quantity;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getStockStatus() {
        return stockStatus;
    }

    public void setStockStatus(Integer stockStatus) {
        this.stockStatus = stockStatus;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
