export type Match = {
  id: string; utc: string;
  e1: string; f1: string;
  e2: string; f2: string;
  fase: string; sedeSlug: string;
};

export const MATCHES: Match[] = [
  { id:'g01', utc:'2026-06-11T19:00:00Z', e1:'México',       f1:'🇲🇽', e2:'Ecuador',      f2:'🇪🇨', fase:'Grupo A · J1',  sedeSlug:'ciudad-de-mexico' },
  { id:'g02', utc:'2026-06-12T19:00:00Z', e1:'Argentina',    f1:'🇦🇷', e2:'Marruecos',    f2:'🇲🇦', fase:'Grupo B · J1',  sedeSlug:'nueva-york'       },
  { id:'g03', utc:'2026-06-12T22:00:00Z', e1:'España',       f1:'🇪🇸', e2:'Croacia',      f2:'🇭🇷', fase:'Grupo C · J1',  sedeSlug:'los-angeles'      },
  { id:'g04', utc:'2026-06-13T19:00:00Z', e1:'Colombia',     f1:'🇨🇴', e2:'Túnez',        f2:'🇹🇳', fase:'Grupo D · J1',  sedeSlug:'miami'            },
  { id:'g05', utc:'2026-06-13T22:00:00Z', e1:'Brasil',       f1:'🇧🇷', e2:'Alemania',     f2:'🇩🇪', fase:'Grupo E · J1',  sedeSlug:'dallas'           },
  { id:'g06', utc:'2026-06-14T01:00:00Z', e1:'USA',          f1:'🇺🇸', e2:'Ghana',        f2:'🇬🇭', fase:'Grupo F · J1',  sedeSlug:'kansas-city'      },
  { id:'g07', utc:'2026-06-14T19:00:00Z', e1:'Francia',      f1:'🇫🇷', e2:'Portugal',     f2:'🇵🇹', fase:'Grupo G · J1',  sedeSlug:'seattle'          },
  { id:'g08', utc:'2026-06-14T22:00:00Z', e1:'Canadá',       f1:'🇨🇦', e2:'Senegal',      f2:'🇸🇳', fase:'Grupo H · J1',  sedeSlug:'vancouver'        },
  { id:'g09', utc:'2026-06-15T22:00:00Z', e1:'Países Bajos', f1:'🇳🇱', e2:'Polonia',      f2:'🇵🇱', fase:'Grupo I · J1',  sedeSlug:'filadelfia'       },
  { id:'g10', utc:'2026-06-16T22:00:00Z', e1:'México',       f1:'🇲🇽', e2:'Polonia',      f2:'🇵🇱', fase:'Grupo A · J2',  sedeSlug:'guadalajara'      },
  { id:'g11', utc:'2026-06-17T22:00:00Z', e1:'Argentina',    f1:'🇦🇷', e2:'España',       f2:'🇪🇸', fase:'Grupo B · J2',  sedeSlug:'nueva-york'       },
  { id:'g12', utc:'2026-06-18T19:00:00Z', e1:'Colombia',     f1:'🇨🇴', e2:'Brasil',       f2:'🇧🇷', fase:'Grupo D · J2',  sedeSlug:'houston'          },
  { id:'g13', utc:'2026-06-20T22:00:00Z', e1:'USA',          f1:'🇺🇸', e2:'Portugal',     f2:'🇵🇹', fase:'Grupo F · J2',  sedeSlug:'boston'           },
  { id:'g14', utc:'2026-06-21T22:00:00Z', e1:'Francia',      f1:'🇫🇷', e2:'Suiza',        f2:'🇨🇭', fase:'Grupo G · J2',  sedeSlug:'atlanta'          },
  { id:'g15', utc:'2026-06-27T19:00:00Z', e1:'México',       f1:'🇲🇽', e2:'Argentina',    f2:'🇦🇷', fase:'Grupo A · J3',  sedeSlug:'monterrey'        },
  { id:'g16', utc:'2026-06-28T22:00:00Z', e1:'España',       f1:'🇪🇸', e2:'Colombia',     f2:'🇨🇴', fase:'Grupo C · J3',  sedeSlug:'san-francisco'    },
  { id:'g17', utc:'2026-06-30T01:00:00Z', e1:'USA',          f1:'🇺🇸', e2:'Francia',      f2:'🇫🇷', fase:'Grupo F · J3',  sedeSlug:'atlanta'          },
  { id:'g18', utc:'2026-07-01T19:00:00Z', e1:'Brasil',       f1:'🇧🇷', e2:'Países Bajos', f2:'🇳🇱', fase:'Grupo E · J3',  sedeSlug:'dallas'           },
  // ── Fase eliminatoria: los equipos se desconocen hasta que termine la fase de grupos ──
  { id:'r01', utc:'2026-07-04T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Ronda de 32', sedeSlug:'filadelfia'       },
  { id:'r02', utc:'2026-07-05T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Ronda de 32', sedeSlug:'miami'            },
  { id:'r03', utc:'2026-07-06T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Ronda de 32', sedeSlug:'dallas'           },
  { id:'r04', utc:'2026-07-07T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Ronda de 32', sedeSlug:'nueva-york'       },
  { id:'o01', utc:'2026-07-09T01:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Octavos',     sedeSlug:'los-angeles'      },
  { id:'o02', utc:'2026-07-10T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Octavos',     sedeSlug:'dallas'           },
  { id:'o03', utc:'2026-07-11T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Octavos',     sedeSlug:'houston'          },
  { id:'o04', utc:'2026-07-12T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Octavos',     sedeSlug:'boston'           },
  { id:'q01', utc:'2026-07-13T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Cuartos',     sedeSlug:'ciudad-de-mexico' },
  { id:'q02', utc:'2026-07-14T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Cuartos',     sedeSlug:'seattle'          },
  { id:'s01', utc:'2026-07-16T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Semifinal',   sedeSlug:'los-angeles'      },
  { id:'s02', utc:'2026-07-17T22:00:00Z', e1:'Por definir', f1:'⚽', e2:'Por definir', f2:'⚽', fase:'Semifinal',   sedeSlug:'nueva-york'       },
  { id:'f01', utc:'2026-07-19T22:00:00Z', e1:'Por definir', f1:'🏆', e2:'Por definir', f2:'🏆', fase:'GRAN FINAL',  sedeSlug:'nueva-york'       },
];
