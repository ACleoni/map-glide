import { Platform } from 'react-native';

class Service {
    getStyleFromProps(propStyleKeys=[], props={}) {
        let style ={};
        propStyleKeys.map((propStyleKey) => {
            const propStyleValue = props[propStyleKey];
            if (propStyleValue !== undefined && propStyleValue !== null && propStyleValue !== false) {
                style = {
                    ...style,
                    [propStyleKey] : propStyleValue
                }
            }
            return propStyleKey;
        });
        if (props.style) {
            style = {
                ...style,
                ...props.style
            }
        }
        return style;
    }

    getPlatformValue(os, value, defaultValue) {
        if (Platform.OS === os) {
            return value;
        }
        return defaultValue;
    }
};

module.exports = new Service()