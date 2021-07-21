import fetchClient from "src/providers/fetchClient";

import { AxiosResponse } from "axios";

import { encodeQueryData } from "src/utils";

export interface MusicParams {
  (track: string, page?: number, page_size?: number): Promise<
    AxiosResponse<any>
  >;
}

export const getTracks: MusicParams = (track, pageSize) =>
  fetchClient.get(
    "track.search?" + encodeQueryData({ q_track: track, page_size: pageSize })
  );
