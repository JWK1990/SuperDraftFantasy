/*
package au.superdraftfantasy.api.user

private String obtainAccessToken(String username, String password) throws Exception {

    MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
    params.add("grant_type", "password");
    params.add("client_id", "fooClientIdPassword");
    params.add("username", username);
    params.add("password", password);

    ResultActions result
            = mockMvc.perform(post("/oauth/token")
            .params(params)
            .with(httpBasic("fooClientIdPassword","secret"))
            .accept("application/json;charset=UTF-8"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json;charset=UTF-8"));

    String resultString = result.andReturn().getResponse().getContentAsString();

    JacksonJsonParser jsonParser = new JacksonJsonParser();
    return jsonParser.parseMap(resultString).get("access_token").toString();
}
*/