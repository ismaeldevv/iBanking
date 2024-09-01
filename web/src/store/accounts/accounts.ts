import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import { queryClient } from "../../main";
import { fetchNui } from "../../utils/fetchNui";

const [accountsDataAtom] = atomsWithQuery<{
  numberOfPages: number;
  accounts: any;
}>(
  () => ({
    queryKey: ["accounts"],
    queryFn: async () => {
      const accounts = await fetchNui("getAccounts", null, {
        data: [
          {
            id: "license:xxx",
            balance: 132032,
            label: "My Account",
            isDefault: true,
            owner: "Some owner",
            type: "personal",
            role: "owner",
          },
        ],
      });

      const defaultAccount = accounts.find((account) => account.isDefault)!;

      return {
        accounts: [
          defaultAccount,
          ...accounts.filter((account) => !account.isDefault),
        ],
        numberOfPages: Math.ceil((accounts.length + 1) / 4),
      };
    },
  }),
  () => queryClient
);

const activeAccountAtom = atom<any | null>(null);
