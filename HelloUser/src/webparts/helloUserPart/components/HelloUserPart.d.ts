import * as React from 'react';
import { IHelloUserPartProps } from './IHelloUserPartProps';
import { IHelloUserPartState } from './IHelloUserPartState';
export default class HelloUserPart extends React.Component<IHelloUserPartProps, IHelloUserPartState> {
    constructor(props: IHelloUserPartProps);
    render(): React.ReactElement<IHelloUserPartProps>;
    componentDidMount(): void;
}
