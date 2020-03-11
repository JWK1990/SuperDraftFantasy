class ConfigurationUtils {

    getBaseUrl() {
        return process.env.NODE_ENV === 'production' ? "" : "http://localhost:8080";
    }

    getWebsocketUrl() {
        return this.getBaseUrl() + "/websocket";
    }

}

export default new ConfigurationUtils();
