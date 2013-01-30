package demo.modernweb.websocket;

import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;

public class WebSocketCommand {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private String command;
    private Object data;

    public WebSocketCommand(String command, Object data) {
        this.command = command;
        this.data = data;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        try {
            return MAPPER.writeValueAsString(this);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
