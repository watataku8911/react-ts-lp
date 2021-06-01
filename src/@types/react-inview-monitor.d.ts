declare module 'react-inview-monitor' {
  export default function InViewMonitor(
    children?: any,
    classNameNotInView?: string,
    classNameInView?: string,
    classNameAboveView?: string,
    intoViewMargin?: string,
    onInView?: Function,
    onNotInView?: Function
  ): JSX.Element
}