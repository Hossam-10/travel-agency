export { };

declare global {
  type Maybe<T> = T | null | undefined;
  type LinkItem = {
    label?: string;
    labelKey?: string;
    to: string | RouteLocationRaw;
  }
}
