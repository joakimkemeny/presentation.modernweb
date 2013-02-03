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

    @PostConstruct
    protected void setupProducts() {
        products.add(new Product(++productId,
                "Fortissio Lungo",
                "Fortissio Lungo består av Arabicabönor från Central- och Sydamerika med bara en aning Robusta. Det är en intensiv och fyllig blandning med en viss beska och med toner av mörkrostade bönor.",
                "fortissiolungo.png",
                7, 1000, 50, 4));
        products.add(new Product(++productId,
                "Dulsão do Brasil",
                "Kombinationen av röda och gula Bourbonbönor från Brasilien ger Dulsão do Brasil en sammetslen och elegant balanserad smak med milda toner av korn.",
                "dulsao.png",
                4, 1000, 50, 5));
        products.add(new Product(++productId,
                "Rosabaya de Colombia",
                "Denna blandning av individuellt rostade Colombianska Arabicabönor, utvecklar en fin syrlighet med typiska toner av röda frukter och vin.",
                "rozabaya.png",
                6, 1000, 50, 5));
        products.add(new Product(++productId,
                "Indriya from India",
                "Indriya är en fullständig blandning av Arabicabönor och en aning Robusta från södra Indien. En intensiv fyllig Espresso, som har en tydlig karaktär med kryddiga toner.",
                "indriya.png",
                10, 1000, 50, 5));
        products.add(new Product(++productId,
                "Ristretto",
                "Ristretto är en typisk italiensk Espresso. Den serveras som en kort Espresso och kännetecknas av sin fyllighet och intensiva smak som följs av en behaglig eftersmak.",
                "ristretto.png",
                10, 1000, 50, 4));
        products.add(new Product(++productId,
                "Arpeggio",
                "Arpeggio är medelhavsblandningen framför andra. Mörkrostat med stark karaktär, rostade toner, intensiv fyllighet och en lång, utsökt eftersmak. Dess kakaotoner och fylliga, tjocka crema finns kvar till sista droppen.",
                "arpeggio.png",
                9, 1000, 50, 4));
        products.add(new Product(++productId,
                "Roma",
                "Roma är med sin sötma och sina toner av trä det perfekta valet för en kort Espresso som inte är för stark.",
                "roma.png",
                8, 1000, 50, 4));
        products.add(new Product(++productId,
                "Decaffeinato Intenso",
                "Mörkrostat med subtila toner av kakao och korn tillsammans med en intensiv fyllighet – detta koffeinfria kaffe har alla goda egenskaper hos en stark Espresso.",
                "decaffeinatointenso.png",
                7, 1000, 50, 4));
        products.add(new Product(++productId,
                "Livanto",
                "Livanto är en rund och välbalanserad Espresso med en rostad karamelliserad ton.",
                "livanto.png",
                6, 1000, 50, 4));
        products.add(new Product(++productId,
                "Capriccio",
                "Capriccio, en blandning av sydamerikanska Arabicabönor och en aning Robusta, är en Espresso med en rik smak, där en typisk ton av korn dominerar.",
                "capriccio.png",
                5, 1000, 50, 4));
        products.add(new Product(++productId,
                "Volluto",
                "Volluto, en ljusrostad ren sydamerikansk Arabica, uppvisar milda kexliknande toner, förstärkta av en aning syrlighet och en fruktig ton. Volluto är sammansatt till 100 % av kaffebönor från vårt AAA Sustainable Quality® program*, ett initiativ i samarbete med Rainforest Alliance för att stödja producenterna.",
                "volluto.png",
                4, 1000, 50, 4));
        products.add(new Product(++productId,
                "Cosi",
                "Cosi, en ren ljusrostad Arabica från Östafrika, Central- och Sydamerika, uppvisar uppfriskande toner av citron med lätt fyllighet.",
                "cosi.png",
                3, 1000, 50, 4));
        products.add(new Product(++productId,
                "Decaffeinato",
                "Denna koffeinfria  blandning av syd-amerikanska Arabicabönor, förstärkt med en liten aning Robusta är ljusrostad för att ta fram en arom av röda frukter. Decaffeinatos crema särskiljer sig genom den hasselnöts-bruna färgen och konsistensen i munnen.\n",
                "decaffeinato.png",
                2, 1000, 50, 4));
        products.add(new Product(++productId,
                "Vivalto Lungo",
                "Vivalto Lungo, en komplex blandning av sydamerikanska och östafrikanska Arabicabönor, som rostats separat, är ett välbalanserat kaffe som förenar rostade toner med subtila blommiga toner.\n",
                "vivaltolungo.png",
                4, 1000, 50, 4));
        products.add(new Product(++productId,
                "Decaffeinato Lungo",
                "Decaffeinato Lungo, en koffeinfri blandning av Arabica från Sydamerika och en aning Robusta, har rostats långsamt vilket ger kaffet en rostad kornnot med len fyllighet.",
                "decaffeinatolungo.png",
                3, 1000, 50, 4));
        products.add(new Product(++productId,
                "Finezzo Lungo",
                "Finezzo Lungo är en väldigt aromatisk kaffe med milda noter av jasmin och består av en blandning av Arabicabönor från Östafrika, Centralamerika och Sydamerika som har blivit lättrostade.",
                "finezzolungo.png",
                3, 1000, 50, 4));
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

    @Autowired
    private WebSocketManager webSocketManager;

    public void updateStockStatus(Integer productId, Integer quantity) {
        Product product = getProduct(productId);
        product.setStockStatus(product.getStockStatus() - quantity);

        webSocketManager.broadcast("stockStatusUpdated", product);
    }
}
