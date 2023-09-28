import { useContext, useEffect, useState } from 'react';
import useSWRImmutable from 'swr/immutable';
import { fetcher } from '@/utils/common';
import {Case} from '@/models/case';

export type Response = {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: Array<Case>;
};

export function useBanks() {
  const [banks, setBanks] = useState<Case[]>([]);

  const endpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&page=1&' +
    'structure={"date":"date","newCasesByPublishDate":"newCasesByPublishDate"}'
  );

  const data = useSWRImmutable<Response>(
      endpoint,
      fetcher
    ).data;

  useEffect(() => {
    if (!data) {
      return;
    }
    setBanks(data.data);
  }, [data, setBanks]);

  return banks;
}
