class ConfigurationUtils {

    getBaseUrl() {
        return process.env.NODE_ENV === 'production' ? "" : "http://localhost:8080";
    }

    getWebsocketUrl() {
        return this.getBaseUrl() + "/websocket";
    }

    getUrlParam(param) {
        const search = window.location.search;
        const searchParams = new URLSearchParams(search);
        return searchParams.get(param);
    }

}

export default new ConfigurationUtils();
