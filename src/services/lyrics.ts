import fetchClient from "src/providers/fetchClient";
import { AxiosResponse } from "axios";

import { encodeQueryData } from "src/utils";

interface IdParams {
  (id: number): Promise<AxiosResponse<any>>;
}

export const getLyrics: IdParams = (id) =>
  fetchClient.get("track.lyrics.get?" + encodeQueryData({ track_id: id }));
