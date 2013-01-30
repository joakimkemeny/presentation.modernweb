package demo.modernweb.websocket;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

@Component
public class WebSocketManager {

    private Set<WebSocketClient> clients = new CopyOnWriteArraySet<WebSocketClient>();

    private static final ObjectMapper MAPPER = new ObjectMapper();

    void registerClient(WebSocketClient client) {
        clients.add(client);
    }

    void deregisterClient(WebSocketClient client) {
        clients.remove(client);
    }

    public void broadcast(String command, Object data) {
        try {
            WebSocketCommand webSocketCommand = new WebSocketCommand(command, data);
            String message = webSocketCommand.toString();

            for (WebSocketClient c : clients) {
                c.sendMessage(message);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
