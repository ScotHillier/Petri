import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'helloUserPartStrings';
import HelloUserPart from './components/HelloUserPart';
import { IHelloUserPartProps } from './components/IHelloUserPartProps';
import { IHelloUserPartWebPartProps } from './IHelloUserPartWebPartProps';

export default class HelloUserPartWebPart extends BaseClientSideWebPart<IHelloUserPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloUserPartProps > = React.createElement(
      HelloUserPart,
      {
        busyMessage: "Working on it..."
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: []
    };
  }
}
