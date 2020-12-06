class ConfigurationUtils {

    // TODO: Could create an exported const and move variable to /src/constants.index.js.
    // For example export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';.
    getBaseUrl() {
        console.log("Base URL: ", process.env.REACT_APP_API_BASE_URL);
        return process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_SERVER : "http://localhost:8080/api";
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
