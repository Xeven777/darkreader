import { m } from "malevic";

import type { ViewProps } from "../../../definitions";
import { CheckButton } from "../../controls";

export function FetchNews(props: ViewProps): Malevic.Child {
  function onFetchNewsChange(checked: boolean) {
    // News fetching is disabled
  }

  return (
    <CheckButton
      checked={false}
      label="Notify of news"
      description="News notifications are disabled"
      onChange={onFetchNewsChange}
    />
  );
}
