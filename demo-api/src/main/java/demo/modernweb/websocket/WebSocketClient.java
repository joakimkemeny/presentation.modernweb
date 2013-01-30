package demo.modernweb.websocket;

import org.eclipse.jetty.websocket.WebSocket;

import java.io.IOException;

public class WebSocketClient implements WebSocket.OnTextMessage {

    private WebSocketManager webSocketManager;
    private Connection connection;

    public WebSocketClient(WebSocketManager webSocketManager) {
        this.webSocketManager = webSocketManager;
    }

    @Override
    public void onOpen(Connection connection) {
        this.connection = connection;
        webSocketManager.registerClient(this);
    }

    @Override
    public void onClose(int closeCode, String message) {
        webSocketManager.deregisterClient(this);
    }

    @Override
    public void onMessage(String message) {
        // Do nothing
    }

    public void sendMessage(String message) throws IOException {
        connection.sendMessage(message);
    }
}
