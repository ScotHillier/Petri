import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IHelloUserPartWebPartProps } from './IHelloUserPartWebPartProps';
export default class HelloUserPartWebPart extends BaseClientSideWebPart<IHelloUserPartWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
