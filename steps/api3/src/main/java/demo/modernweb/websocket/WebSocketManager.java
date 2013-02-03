package demo.modernweb.websocket;

import demo.modernweb.domain.Product;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

@Component
public class WebSocketManager {

    private Set<WebSocketClient> clients = new CopyOnWriteArraySet<>();

    public void registerClient(WebSocketClient webSocketClient) {
        clients.add(webSocketClient);
    }

    public void deregisterClient(WebSocketClient webSocketClient) {
        clients.remove(webSocketClient);
    }

    public void broadcast(String command, Object data) {
        WebSocketCommand webSocketCommand = new WebSocketCommand(command, data);
        String message = webSocketCommand.toString();

        for (WebSocketClient client : clients) {
            try {
                client.sendMessage(message);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
