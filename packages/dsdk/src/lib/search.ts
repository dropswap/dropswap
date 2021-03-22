export interface SearchParams {
  // full-text query assets by name, description (english-only)
  query?: string;

  // facet by collection id (currently, address)
  collection?: string;

  // filter by owner id (currently, address or ENS)
  owner?: string;

  // pagination
  // TODO: cursor?
  page?: number;
  size?: number;
}

export interface SearchDocument {
  id: string; // a CAIP-19
}

export interface SearchResponse {
  documents: SearchDocument[];
  totalCount: number;
}

const MOCK_DATA: SearchResponse[] = [
  {
    documents: [
      { id: 'eip155:1/erc1155:0x28959Cf125ccB051E70711D0924a62FB28EAF186/0' },
      { id: 'eip155:1/erc1155:0x28959Cf125ccB051E70711D0924a62FB28EAF186/1' },
      { id: 'eip155:1/erc1155:0x28959Cf125ccB051E70711D0924a62FB28EAF186/2' },
      { id: 'eip155:1/erc1155:0x28959Cf125ccB051E70711D0924a62FB28EAF186/3' },
      { id: 'eip155:137/erc1155:0x2E56C100FAe2e38C8447Ac225d34a486700EA994/1' },
      { id: 'eip155:137/erc1155:0x2E56C100FAe2e38C8447Ac225d34a486700EA994/2' },
    ],
    totalCount: 11,
  },
  {
    documents: [
      { id: 'eip155:137/erc1155:0x2E56C100FAe2e38C8447Ac225d34a486700EA994/3' },
      { id: 'eip155:137/erc1155:0x2E56C100FAe2e38C8447Ac225d34a486700EA994/4' },
      { id: 'eip155:137/erc1155:0x2E56C100FAe2e38C8447Ac225d34a486700EA994/5' },
      { id: 'eip155:137/erc1155:0x2E56C100FAe2e38C8447Ac225d34a486700EA994/6' },
      { id: 'eip155:137/erc1155:0x2E56C100FAe2e38C8447Ac225d34a486700EA994/131073' },
    ],
    totalCount: 11,
  },
];

export async function search(params: SearchParams): Promise<SearchResponse> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return MOCK_DATA[params.page ?? 0];
}
