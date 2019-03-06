import * as React from "react";

export const isNode = (new Function("try {return this===global;}catch(e){return false;}"))();

class PassThrough extends React.Component<{fallback: React.ReactNode, children: any}, any> {
    render() {
        return this.props.children;
    }
}

export const Suspense: React.ExoticComponent<React.SuspenseProps> = (() => {
    return isNode ? (PassThrough as any) : React.Suspense;
})()

