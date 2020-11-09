class FormUtils {

    getFieldValue = (fields, fieldId) => {
        const fieldProperties = fields.find(field => field.properties.id === fieldId).properties;
        let value = fieldProperties.value;
        if(fieldProperties.type === "number") {
            value = parseInt(value);
        }
        return value;
    }

}

export default new FormUtils();
