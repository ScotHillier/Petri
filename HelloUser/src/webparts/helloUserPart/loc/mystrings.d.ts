declare interface IHelloUserPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloUserPartStrings' {
  const strings: IHelloUserPartStrings;
  export = strings;
}
