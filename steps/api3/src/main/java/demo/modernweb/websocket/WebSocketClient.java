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
    public void onClose(int i, String s) {
        webSocketManager.deregisterClient(this);
    }

    @Override
    public void onMessage(String s) {

    }

    public void sendMessage(String message) throws IOException {
        connection.sendMessage(message);
    }
}
