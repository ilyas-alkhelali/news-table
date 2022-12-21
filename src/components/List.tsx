import React, { FC } from "react";
interface ListPropTypes<T> {
  items: T[] | undefined;
  renderItem: (item: T) => JSX.Element;
}

export default function List<T>(props: ListPropTypes<T>) {
  return <>{props.items?.map(props.renderItem)}</>;
}
