import * as t from 'io-ts';

// declare interface DMServer {
//   title: string
//   address: string
//   category: "dm" | "pistoldm" | "execute" | "retake" | "surf" | "surf_flow"
//   map: string
//   players: number
//   maxplayers: number
//   image?: string
// }

export const DmServer = t.intersection([
  t.type({
    title: t.string,
    address: t.string,
    category: t.string,
    // map: t.string,
    // players: t.number,
    // maxplayers: t.number,
  }),
  t.partial({ image: t.string })
]);

export type DmServer = t.TypeOf<typeof DmServer>;
// export const DmServerResponse = t.intersection([
//   t.type({
//     server_dms: t.array(DmServer),
//   }),
//   t.partial({
//     a: t.string
//   })
// ])

export const DmServerResponse = t.type({
  server_dms: t.array(DmServer)
});

export type DmServerResponse = t.TypeOf<typeof DmServerResponse>;