declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
  const svg: any;
  export default svg;
}

declare module '*.png' {
  const png: any;
  export default png;
}
