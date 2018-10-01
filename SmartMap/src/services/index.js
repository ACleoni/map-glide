import { Platform } from 'react-native';

class Service {
    // Allows partial components to inherit different prop styles
    // passed down from parent based on the screen being rendered
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

    // Passes certain prop styles based on the type of platform
    getPlatformValue(os, value, defaultValue) {
        if (Platform.OS === os) {
            return value;
        }
        return defaultValue;
    }
};

module.exports = (new Service());