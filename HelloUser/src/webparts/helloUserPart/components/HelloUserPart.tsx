import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import styles from './HelloUserPart.module.scss';
import { IHelloUserPartProps } from './IHelloUserPartProps';
import { IHelloUserPartState } from './IHelloUserPartState';

export default class HelloUserPart extends React.Component<IHelloUserPartProps, IHelloUserPartState> {

  constructor(props: IHelloUserPartProps) {
      super(props);
      this.state = { data: null, isValid: false };
  }

  public render(): React.ReactElement<IHelloUserPartProps> {

    if (this.state.isValid) {
      return <div>Welcome, {this.state.data}!</div>
    }
    else {
        return <div>{this.props.busyMessage}</div>;
    }

  }

  public componentDidMount(): void {

          fetch(
              '../_api/web/currentuser',
              {
                  method: 'GET',
                  credentials: 'same-origin',
                  headers: {
                      'accept': 'application/json'
                  }
              }
          ).then(response => {
              return response.json();
          }).then(json => {
              console.log(json);
              this.setState({ data: json.Title, isValid: true });
          }).catch(e => {
              console.log(e);
          });

  }

}
