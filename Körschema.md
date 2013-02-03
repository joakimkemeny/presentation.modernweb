# Presentation – Introduktion
# Presentation – Hur bygger man webbapplikationer (JW)

# Demo – Rest API (JW)
Visa vårt Rest API och vad det kan göra.
Beskriv hur vi har gjort med Apache.

# Demo – Kom igång (JK)
Prata om vad Yeoman (yeoman.io) är och varför vi kommer använda den under dagen. Skapa sedan ett nytt projekt.

* yeoman init
* yeoman server

Prata lite kort om respektive projekt som den tar med.

* HTML5 Boilerplate
* Twitter Bootstrap
* Font Awesome

Gå igenom strukturen för projektet. Kopiera in Font Awesome så att det fungerar. Justera även main.scss och _font-awesome.scss.

Visa att man kan redigera filerna direkt utan att man behöver göra någon refresh av webbläsaren. Ändra i HTML, CSS och JavaScript. Justera byggfilen så att den laddar om templates.

Justera index.html så att den är ren och vi kan börja jobba med den.

Vi återkommer till Yeoman senare och vad den kan göra för oss.

*Koden ska nu vara i läget web 1*

# Presentation – Hur hanterar man beroenden (JW)
# Presentation – Templates (JW)

# Demo – Lägg till Underscore med Require (JW)
Visa hur man kan hantera componenter med Yeoman och Bower och installera Underscore.

* yeoman search underscore
* yeoman install underscore

Anpassa main.js så att man importerar underscore och jquery. Prata även om strict.

Gör om index.html så att man tar bort jQuery importen. Lägg även in en div med ett id som man kan använda senare.

Använd jQuery för att lägga till text i #content i app.js.

Visa att require har plugins och installera requirejs-text.

* yeoman install requirejs-text

Skapa en enkel template. Använd jQuery, underscore och require-text för att hämta den och lägga in den som innehåll på i sidan. Visa vad man kan göra med en template.

Visa att det är ganska många filer som laddas men man kan bygga ihop det till en klump.

* yeoman build
* yeoman server:dist

*Koden ska nu vara i läget web 2*

# Presentation – JavaScript MVC och Backbone (JK)

# Demo – Lägg till Backbone (JK)
Installera Backbone och se till att den är importerad med require.

* yeoman install backbone

Ta bort det som gjordes i förra demon.

Ändra i app.js och main.js så att sen anropar start och skriver ut någonting.

Skapa lite templates för Backbone, använd yeoman.

* yeoman init backbone:model ProductModel
* yeoman init backbone:collection ProductCollection
* yeoman init backbone:view ProductsView
* yeoman init backbone:router ApplicationRouter

Vi använder ju AMD och require så det hjälper oss inte så mycket.
Skapa nya filer och fixa till dem.

Implementera en ren router som skriver ut alla routes.

*Koden ska nu vara i läget web 3*

Fixa index.html så att den har tre sektioner.
Skapa Products.html
Implementera ProductsView så att den visar Products.html.
Implementera ProductsModel och ProductsCollection.
Implementera ApplicationRouter så att den skickar med collectionen.
Implementera ProductsView och Products.html så att den listar produkterna.
Skapa ProductsItemView och ProductsItem.html
Kopiera in bilderna och lägg in regel i CSS:en.
Implementera ProductsItemView så att den hanterar events.

Skapa framework och kopiera in Model, Object och Util dit.
Skapa även ModernWeb och förklara varför.
Implementera ProductsItemView och ApplicationRouter så att de visar en produkt.
Fixa så att produkter visas även vid refresh.

*Koden ska nu vara i läget web 4*

Kopiera in CartModel, CartItemModel och CartItemCollection.
Förklara hur de är implementerade.
Kopiera in Model och lägg till i ModernWeb.

Hur får vi in en global varukorg? Vi lägger den i ModernWeb, init i ApplicationRouter.
Lägg till saker till varukorgen.

Kopiera och fixa ProductsView —>  CartView
Kopiera och fixa Products.html —> Cart.html
Kopiera och fixa ProductsItemView —> CartItemView
Kopiera och fixa ProductsItem.html —> CartItem.html
Lyssna på produktändringar.

*Koden ska nu vara i läget web 5*

Byt över till step 6.
Visa vad som har ändrats.

* DeliveryAddressModel
* DeliveryOptionCollection / DeliveryOptionModel / PriceModel
* CartModel lagt på adress, shipment och även implementereat emptyCart.
* DeliveryAddressView + template
* DeliveryOptionsView + template
* ConfirmView + template
* index.html även lite styling

*Koden ska nu vara i läget web 6*

# Presentation – CORS (JW)

# Demo – Implementera CORS (JW)
Implementera DeliveryController.
Ändra i DeliveryOptionCollection och DeliveryOptionModel så att de har url:er igen.
Ta bort den statiska listan med options i DeliveryOptionCollection och använd fetch.

*Koden ska nu vara i läget web 7*

# Presentation – Hantera externt material (JW)

# Demo – Lägg till en iframe (JW)
Lägg till en iframe och visa hur olika typer av sandboxing påverkar.

*Koden ska nu vara i läget web 8*

# Presentation – CSS och SASS (JK)

# Demo – Implementera CSS med SASS på sidan (JK)
Lägg till _variables.scss och implementera den.
Lägg till bakgrund och box sizing i main.
Lägg till _product.scss.

Implementera _product.scss, lägg till transitions sist.

Kopiera in _cart.scss och även border.png och berätta om border-image.

Modifiera main.scss så att vyerna animeras in.

*Koden ska nu vara i läget web 9*

# Presentation – Microramverk (JW)

# Demo – Gridutvärdering (JW)

# Presentation – WebSockets (JK)

# Demo – Uppdatera lagersaldot automatiskt (JK)
Skapa WebSocketHandlerServlet och imlementera den.
Skapa WebSocketClient och implementera den.
Använd WebSocketManager för att skicka ett meddelande i ProductManager.
Implementera WebSocketCommand.
Registrera WebSocketHandlerServlet.

Kopiera in WebSocket.js och förklara den.
Anslut till server i app.js.
Lägg till lyssnare i ProductsItemView.

*Koden ska nu vara i läget web 10*

Snabb visning av ProConX.

# Frågestund
