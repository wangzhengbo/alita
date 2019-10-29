import React, { h } from "@areslabs/wx-react"
import { View, Text } from "@areslabs/wx-react-native"
export default class HelloRN extends React.Component {
    render() {
        return h(
            "block",
            {
                style: this.props.style,
                original: "View",
                diuu: "DIUU00001",
                tempName: "ITNP00003"
            },
            h(
                "view",
                {
                    style: this.props.textStyle,
                    onPress: () => {
                        console.log("HelloRN: ", this.props.name, " !")
                        this.props.textPress && this.props.textPress()
                    },
                    original: "OuterText",
                    diuu: "DIUU00002"
                },
                "HelloRN: ",
                h("template", {
                    datakey: "CTDK00001",
                    tempVnode: this.props.name
                }),
                "!"
            )
        )
    }
}
