class ConfigurationUtils {

    getBaseUrl() {
        return process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_SERVER + "/api" : "http://localhost:8080/api";
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
