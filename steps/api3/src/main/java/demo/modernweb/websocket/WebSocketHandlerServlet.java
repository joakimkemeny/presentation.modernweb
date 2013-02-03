package demo.modernweb.websocket;

import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocketServlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class WebSocketHandlerServlet extends WebSocketServlet {

    private static WebSocketManager webSocketManager;

    @Autowired
    public void setApplicationContext(ApplicationContext ctx) {
        webSocketManager = ctx.getBean(WebSocketManager.class);
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        getServletContext().getNamedDispatcher("default").forward(request, response);
    }

    @Override
    public WebSocket doWebSocketConnect(HttpServletRequest httpServletRequest, String s) {
        if (webSocketManager == null) {
            return null;
        } else {
            return new WebSocketClient(webSocketManager);
        }
    }
}
