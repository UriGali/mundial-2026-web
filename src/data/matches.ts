export type Match = {
  id: string; utc: string;
  e1: string; f1: string;
  e2: string; f2: string;
  fase: string; sedeSlug: string;
};

export const MATCHES: Match[] = [
  // ── JORNADA 1 ────────────────────────────────────────────────────────────────
  // Jun 11
  { id:'g01', utc:'2026-06-11T18:00:00Z', e1:'México',               f1:'🇲🇽', e2:'Sudáfrica',            f2:'🇿🇦', fase:'Grupo A · J1', sedeSlug:'ciudad-de-mexico' },
  { id:'g02', utc:'2026-06-11T22:00:00Z', e1:'Corea del Sur',        f1:'🇰🇷', e2:'Chequia',               f2:'🇨🇿', fase:'Grupo A · J1', sedeSlug:'dallas'           },
  // Jun 12
  { id:'g03', utc:'2026-06-12T18:00:00Z', e1:'Canadá',               f1:'🇨🇦', e2:'Bosnia y Herzegovina', f2:'🇧🇦', fase:'Grupo B · J1', sedeSlug:'toronto'          },
  { id:'g04', utc:'2026-06-12T22:00:00Z', e1:'USA',                  f1:'🇺🇸', e2:'Paraguay',              f2:'🇵🇾', fase:'Grupo D · J1', sedeSlug:'los-angeles'      },
  // Jun 13
  { id:'g05', utc:'2026-06-13T15:00:00Z', e1:'Qatar',                f1:'🇶🇦', e2:'Suiza',                 f2:'🇨🇭', fase:'Grupo B · J1', sedeSlug:'boston'           },
  { id:'g06', utc:'2026-06-13T18:00:00Z', e1:'Brasil',               f1:'🇧🇷', e2:'Marruecos',             f2:'🇲🇦', fase:'Grupo C · J1', sedeSlug:'nueva-york'       },
  { id:'g07', utc:'2026-06-13T21:00:00Z', e1:'Haití',                f1:'🇭🇹', e2:'Escocia',               f2:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', fase:'Grupo C · J1', sedeSlug:'miami'            },
  { id:'g08', utc:'2026-06-13T23:00:00Z', e1:'Australia',            f1:'🇦🇺', e2:'Turquía',               f2:'🇹🇷', fase:'Grupo D · J1', sedeSlug:'seattle'          },
  // Jun 14
  { id:'g09', utc:'2026-06-14T15:00:00Z', e1:'Alemania',             f1:'🇩🇪', e2:'Curazao',               f2:'🇨🇼', fase:'Grupo E · J1', sedeSlug:'houston'          },
  { id:'g10', utc:'2026-06-14T18:00:00Z', e1:'Países Bajos',         f1:'🇳🇱', e2:'Japón',                 f2:'🇯🇵', fase:'Grupo F · J1', sedeSlug:'dallas'           },
  { id:'g11', utc:'2026-06-14T21:00:00Z', e1:'Costa de Marfil',      f1:'🇨🇮', e2:'Ecuador',               f2:'🇪🇨', fase:'Grupo E · J1', sedeSlug:'filadelfia'       },
  { id:'g12', utc:'2026-06-14T23:00:00Z', e1:'Suecia',               f1:'🇸🇪', e2:'Túnez',                 f2:'🇹🇳', fase:'Grupo F · J1', sedeSlug:'kansas-city'      },
  // Jun 15
  { id:'g13', utc:'2026-06-15T15:00:00Z', e1:'Bélgica',              f1:'🇧🇪', e2:'Egipto',                f2:'🇪🇬', fase:'Grupo G · J1', sedeSlug:'seattle'          },
  { id:'g14', utc:'2026-06-15T18:00:00Z', e1:'Irán',                 f1:'🇮🇷', e2:'Nueva Zelanda',         f2:'🇳🇿', fase:'Grupo G · J1', sedeSlug:'san-francisco'    },
  { id:'g15', utc:'2026-06-15T21:00:00Z', e1:'España',               f1:'🇪🇸', e2:'Cabo Verde',            f2:'🇨🇻', fase:'Grupo H · J1', sedeSlug:'atlanta'          },
  { id:'g16', utc:'2026-06-15T23:00:00Z', e1:'Arabia Saudí',         f1:'🇸🇦', e2:'Uruguay',               f2:'🇺🇾', fase:'Grupo H · J1', sedeSlug:'miami'            },
  // Jun 16
  { id:'g17', utc:'2026-06-16T15:00:00Z', e1:'Francia',              f1:'🇫🇷', e2:'Senegal',               f2:'🇸🇳', fase:'Grupo I · J1', sedeSlug:'nueva-york'       },
  { id:'g18', utc:'2026-06-16T18:00:00Z', e1:'Irak',                 f1:'🇮🇶', e2:'Noruega',               f2:'🇳🇴', fase:'Grupo I · J1', sedeSlug:'kansas-city'      },
  { id:'g19', utc:'2026-06-16T21:00:00Z', e1:'Argentina',            f1:'🇦🇷', e2:'Argelia',               f2:'🇩🇿', fase:'Grupo J · J1', sedeSlug:'dallas'           },
  { id:'g20', utc:'2026-06-16T23:00:00Z', e1:'Austria',              f1:'🇦🇹', e2:'Jordania',              f2:'🇯🇴', fase:'Grupo J · J1', sedeSlug:'houston'          },
  // Jun 17
  { id:'g21', utc:'2026-06-17T15:00:00Z', e1:'Portugal',             f1:'🇵🇹', e2:'RD Congo',              f2:'🇨🇩', fase:'Grupo K · J1', sedeSlug:'filadelfia'       },
  { id:'g22', utc:'2026-06-17T18:00:00Z', e1:'Uzbekistán',           f1:'🇺🇿', e2:'Colombia',              f2:'🇨🇴', fase:'Grupo K · J1', sedeSlug:'los-angeles'      },
  { id:'g23', utc:'2026-06-17T21:00:00Z', e1:'Inglaterra',           f1:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', e2:'Ghana',         f2:'🇬🇭', fase:'Grupo L · J1', sedeSlug:'atlanta'          },
  { id:'g24', utc:'2026-06-17T23:00:00Z', e1:'Croacia',              f1:'🇭🇷', e2:'Panamá',                f2:'🇵🇦', fase:'Grupo L · J1', sedeSlug:'boston'           },
  // ── JORNADA 2 ────────────────────────────────────────────────────────────────
  // Jun 18
  { id:'g25', utc:'2026-06-18T15:00:00Z', e1:'Chequia',              f1:'🇨🇿', e2:'Sudáfrica',             f2:'🇿🇦', fase:'Grupo A · J2', sedeSlug:'nueva-york'       },
  { id:'g26', utc:'2026-06-18T18:00:00Z', e1:'México',               f1:'🇲🇽', e2:'Corea del Sur',         f2:'🇰🇷', fase:'Grupo A · J2', sedeSlug:'guadalajara'      },
  { id:'g27', utc:'2026-06-18T21:00:00Z', e1:'Suiza',                f1:'🇨🇭', e2:'Bosnia y Herzegovina', f2:'🇧🇦', fase:'Grupo B · J2', sedeSlug:'los-angeles'      },
  { id:'g28', utc:'2026-06-18T23:00:00Z', e1:'Canadá',               f1:'🇨🇦', e2:'Qatar',                 f2:'🇶🇦', fase:'Grupo B · J2', sedeSlug:'vancouver'        },
  // Jun 19
  { id:'g29', utc:'2026-06-19T15:00:00Z', e1:'Escocia',              f1:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', e2:'Marruecos',  f2:'🇲🇦', fase:'Grupo C · J2', sedeSlug:'boston'           },
  { id:'g30', utc:'2026-06-19T18:00:00Z', e1:'Brasil',               f1:'🇧🇷', e2:'Haití',                 f2:'🇭🇹', fase:'Grupo C · J2', sedeSlug:'filadelfia'       },
  { id:'g31', utc:'2026-06-19T21:00:00Z', e1:'Paraguay',             f1:'🇵🇾', e2:'Turquía',               f2:'🇹🇷', fase:'Grupo D · J2', sedeSlug:'miami'            },
  { id:'g32', utc:'2026-06-19T23:00:00Z', e1:'USA',                  f1:'🇺🇸', e2:'Australia',             f2:'🇦🇺', fase:'Grupo D · J2', sedeSlug:'dallas'           },
  // Jun 20
  { id:'g33', utc:'2026-06-20T15:00:00Z', e1:'Alemania',             f1:'🇩🇪', e2:'Costa de Marfil',      f2:'🇨🇮', fase:'Grupo E · J2', sedeSlug:'houston'          },
  { id:'g34', utc:'2026-06-20T18:00:00Z', e1:'Ecuador',              f1:'🇪🇨', e2:'Curazao',               f2:'🇨🇼', fase:'Grupo E · J2', sedeSlug:'atlanta'          },
  { id:'g35', utc:'2026-06-20T21:00:00Z', e1:'Países Bajos',         f1:'🇳🇱', e2:'Suecia',                f2:'🇸🇪', fase:'Grupo F · J2', sedeSlug:'nueva-york'       },
  { id:'g36', utc:'2026-06-20T23:00:00Z', e1:'Japón',                f1:'🇯🇵', e2:'Túnez',                 f2:'🇹🇳', fase:'Grupo F · J2', sedeSlug:'kansas-city'      },
  // Jun 21
  { id:'g37', utc:'2026-06-21T15:00:00Z', e1:'Bélgica',              f1:'🇧🇪', e2:'Irán',                  f2:'🇮🇷', fase:'Grupo G · J2', sedeSlug:'seattle'          },
  { id:'g38', utc:'2026-06-21T18:00:00Z', e1:'Nueva Zelanda',        f1:'🇳🇿', e2:'Egipto',                f2:'🇪🇬', fase:'Grupo G · J2', sedeSlug:'san-francisco'    },
  { id:'g39', utc:'2026-06-21T21:00:00Z', e1:'España',               f1:'🇪🇸', e2:'Arabia Saudí',          f2:'🇸🇦', fase:'Grupo H · J2', sedeSlug:'miami'            },
  { id:'g40', utc:'2026-06-21T23:00:00Z', e1:'Uruguay',              f1:'🇺🇾', e2:'Cabo Verde',            f2:'🇨🇻', fase:'Grupo H · J2', sedeSlug:'atlanta'          },
  // Jun 22
  { id:'g41', utc:'2026-06-22T15:00:00Z', e1:'Francia',              f1:'🇫🇷', e2:'Irak',                  f2:'🇮🇶', fase:'Grupo I · J2', sedeSlug:'dallas'           },
  { id:'g42', utc:'2026-06-22T18:00:00Z', e1:'Noruega',              f1:'🇳🇴', e2:'Senegal',               f2:'🇸🇳', fase:'Grupo I · J2', sedeSlug:'houston'          },
  { id:'g43', utc:'2026-06-22T21:00:00Z', e1:'Argentina',            f1:'🇦🇷', e2:'Austria',               f2:'🇦🇹', fase:'Grupo J · J2', sedeSlug:'kansas-city'      },
  { id:'g44', utc:'2026-06-22T23:00:00Z', e1:'Jordania',             f1:'🇯🇴', e2:'Argelia',               f2:'🇩🇿', fase:'Grupo J · J2', sedeSlug:'nueva-york'       },
  // Jun 23
  { id:'g45', utc:'2026-06-23T15:00:00Z', e1:'Portugal',             f1:'🇵🇹', e2:'Uzbekistán',            f2:'🇺🇿', fase:'Grupo K · J2', sedeSlug:'boston'           },
  { id:'g46', utc:'2026-06-23T18:00:00Z', e1:'Colombia',             f1:'🇨🇴', e2:'RD Congo',              f2:'🇨🇩', fase:'Grupo K · J2', sedeSlug:'los-angeles'      },
  { id:'g47', utc:'2026-06-23T21:00:00Z', e1:'Inglaterra',           f1:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', e2:'Panamá',        f2:'🇵🇦', fase:'Grupo L · J2', sedeSlug:'filadelfia'       },
  { id:'g48', utc:'2026-06-23T23:00:00Z', e1:'Croacia',              f1:'🇭🇷', e2:'Ghana',                 f2:'🇬🇭', fase:'Grupo L · J2', sedeSlug:'atlanta'          },
  // ── JORNADA 3 (simultánea por grupo) ─────────────────────────────────────────
  // Jun 24 — Grupos A, B, C
  { id:'g49', utc:'2026-06-24T17:00:00Z', e1:'Chequia',              f1:'🇨🇿', e2:'México',                f2:'🇲🇽', fase:'Grupo A · J3', sedeSlug:'monterrey'        },
  { id:'g50', utc:'2026-06-24T17:00:00Z', e1:'Sudáfrica',            f1:'🇿🇦', e2:'Corea del Sur',         f2:'🇰🇷', fase:'Grupo A · J3', sedeSlug:'los-angeles'      },
  { id:'g51', utc:'2026-06-24T20:00:00Z', e1:'Suiza',                f1:'🇨🇭', e2:'Canadá',                f2:'🇨🇦', fase:'Grupo B · J3', sedeSlug:'nueva-york'       },
  { id:'g52', utc:'2026-06-24T20:00:00Z', e1:'Bosnia y Herzegovina', f1:'🇧🇦', e2:'Qatar',                 f2:'🇶🇦', fase:'Grupo B · J3', sedeSlug:'dallas'           },
  { id:'g53', utc:'2026-06-24T23:00:00Z', e1:'Escocia',              f1:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', e2:'Brasil',   f2:'🇧🇷', fase:'Grupo C · J3', sedeSlug:'miami'            },
  { id:'g54', utc:'2026-06-24T23:00:00Z', e1:'Marruecos',            f1:'🇲🇦', e2:'Haití',                 f2:'🇭🇹', fase:'Grupo C · J3', sedeSlug:'houston'          },
  // Jun 25 — Grupos D, E, F
  { id:'g55', utc:'2026-06-25T17:00:00Z', e1:'Turquía',              f1:'🇹🇷', e2:'USA',                   f2:'🇺🇸', fase:'Grupo D · J3', sedeSlug:'seattle'          },
  { id:'g56', utc:'2026-06-25T17:00:00Z', e1:'Australia',            f1:'🇦🇺', e2:'Paraguay',              f2:'🇵🇾', fase:'Grupo D · J3', sedeSlug:'kansas-city'      },
  { id:'g57', utc:'2026-06-25T20:00:00Z', e1:'Curazao',              f1:'🇨🇼', e2:'Costa de Marfil',      f2:'🇨🇮', fase:'Grupo E · J3', sedeSlug:'filadelfia'       },
  { id:'g58', utc:'2026-06-25T20:00:00Z', e1:'Ecuador',              f1:'🇪🇨', e2:'Alemania',              f2:'🇩🇪', fase:'Grupo E · J3', sedeSlug:'boston'           },
  { id:'g59', utc:'2026-06-25T23:00:00Z', e1:'Japón',                f1:'🇯🇵', e2:'Suecia',                f2:'🇸🇪', fase:'Grupo F · J3', sedeSlug:'los-angeles'      },
  { id:'g60', utc:'2026-06-25T23:00:00Z', e1:'Túnez',                f1:'🇹🇳', e2:'Países Bajos',          f2:'🇳🇱', fase:'Grupo F · J3', sedeSlug:'atlanta'          },
  // Jun 26 — Grupos G, H, I
  { id:'g61', utc:'2026-06-26T17:00:00Z', e1:'Egipto',               f1:'🇪🇬', e2:'Irán',                  f2:'🇮🇷', fase:'Grupo G · J3', sedeSlug:'dallas'           },
  { id:'g62', utc:'2026-06-26T17:00:00Z', e1:'Nueva Zelanda',        f1:'🇳🇿', e2:'Bélgica',               f2:'🇧🇪', fase:'Grupo G · J3', sedeSlug:'san-francisco'    },
  { id:'g63', utc:'2026-06-26T20:00:00Z', e1:'Cabo Verde',           f1:'🇨🇻', e2:'Arabia Saudí',          f2:'🇸🇦', fase:'Grupo H · J3', sedeSlug:'nueva-york'       },
  { id:'g64', utc:'2026-06-26T20:00:00Z', e1:'Uruguay',              f1:'🇺🇾', e2:'España',                f2:'🇪🇸', fase:'Grupo H · J3', sedeSlug:'miami'            },
  { id:'g65', utc:'2026-06-26T23:00:00Z', e1:'Noruega',              f1:'🇳🇴', e2:'Francia',               f2:'🇫🇷', fase:'Grupo I · J3', sedeSlug:'houston'          },
  { id:'g66', utc:'2026-06-26T23:00:00Z', e1:'Senegal',              f1:'🇸🇳', e2:'Irak',                  f2:'🇮🇶', fase:'Grupo I · J3', sedeSlug:'kansas-city'      },
  // Jun 27 — Grupos J, K, L
  { id:'g67', utc:'2026-06-27T17:00:00Z', e1:'Argelia',              f1:'🇩🇿', e2:'Austria',               f2:'🇦🇹', fase:'Grupo J · J3', sedeSlug:'boston'           },
  { id:'g68', utc:'2026-06-27T17:00:00Z', e1:'Jordania',             f1:'🇯🇴', e2:'Argentina',             f2:'🇦🇷', fase:'Grupo J · J3', sedeSlug:'dallas'           },
  { id:'g69', utc:'2026-06-27T20:00:00Z', e1:'Colombia',             f1:'🇨🇴', e2:'Portugal',              f2:'🇵🇹', fase:'Grupo K · J3', sedeSlug:'atlanta'          },
  { id:'g70', utc:'2026-06-27T20:00:00Z', e1:'RD Congo',             f1:'🇨🇩', e2:'Uzbekistán',            f2:'🇺🇿', fase:'Grupo K · J3', sedeSlug:'seattle'          },
  { id:'g71', utc:'2026-06-27T23:00:00Z', e1:'Panamá',               f1:'🇵🇦', e2:'Ghana',                 f2:'🇬🇭', fase:'Grupo L · J3', sedeSlug:'los-angeles'      },
  { id:'g72', utc:'2026-06-27T23:00:00Z', e1:'Croacia',              f1:'🇭🇷', e2:'Inglaterra',            f2:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', fase:'Grupo L · J3', sedeSlug:'filadelfia'       },
  // ── Fase eliminatoria ─────────────────────────────────────────────────────────
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
