export interface SeedSite {
  domain: string;
  region: string[];
  contentType: string[];
  brand: string;
}

/**
 * Hardcoded seed database of known pirate streaming/download sites.
 * Each entry has a base domain, associated regions, content types, and brand name.
 * The brand is used for mirror searching (e.g. "egybest" may live at egybest.run, egybest.link, etc.)
 */
export const SEED_SITES: SeedSite[] = [
  // ===== ARABIC REGION =====
  { domain: "egybest.org", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "egybest" },
  { domain: "faselhdx.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "faselhd" },
  { domain: "cimaleek.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "cimaleek" },
  { domain: "mycima.ws", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "mycima" },
  { domain: "shahid4u.cam", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "shahid4u" },
  { domain: "arab48.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "arab48" },
  { domain: "cimanow.cc", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "cimanow" },
  { domain: "akwam.to", region: ["ae", "ma"], contentType: ["movies", "series", "software"], brand: "akwam" },
  { domain: "cima4u.cam", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "cima4u" },
  { domain: "egydead.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "egydead" },
  { domain: "fushaar.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "fushaar" },
  { domain: "aflaam.com", region: ["ae", "ma"], contentType: ["movies"], brand: "aflaam" },
  { domain: "arabseed.ink", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "arabseed" },
  { domain: "shahed4u.land", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "shahed4u" },
  { domain: "wecima.show", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "wecima" },
  { domain: "cimaclub.cam", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "cimaclub" },
  { domain: "movizland.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "movizland" },
  { domain: "cimalight.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "cimalight" },
  { domain: "witanime.com", region: ["ae", "ma"], contentType: ["series"], brand: "witanime" },
  { domain: "animelek.com", region: ["ae", "ma"], contentType: ["series"], brand: "animelek" },
  { domain: "yallashoot.cam", region: ["ae", "ma"], contentType: ["sports"], brand: "yallashoot" },
  { domain: "kooralive.com", region: ["ae", "ma"], contentType: ["sports"], brand: "kooralive" },
  { domain: "yallagoal.com", region: ["ae", "ma"], contentType: ["sports"], brand: "yallagoal" },
  { domain: "mazika2day.com", region: ["ae", "ma"], contentType: ["music"], brand: "mazika2day" },
  { domain: "egyramadan.me", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "egyramadan" },
  { domain: "tv.halabieh.com", region: ["ae", "ma"], contentType: ["movies", "series", "sports"], brand: "halabieh" },
  { domain: "topcinemaa.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "topcima" },
  { domain: "cfu.cam", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "cfu" },
  { domain: "topcima.online", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "topcima" },
  { domain: "shofha.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "shofha" },
  { domain: "moviz-time.co", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "moviztime" },
  { domain: "osnplus.com", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "osnplus" },
  { domain: "akoam.cam", region: ["ae", "ma"], contentType: ["movies", "series", "software"], brand: "akoam" },
  { domain: "faselhd.express", region: ["ae", "ma"], contentType: ["movies", "series"], brand: "faselhd" },

  // ===== UKRAINIAN REGION =====
  { domain: "uakino.club", region: ["ua"], contentType: ["movies", "series"], brand: "uakino" },
  { domain: "uaserials.pro", region: ["ua"], contentType: ["series"], brand: "uaserials" },
  { domain: "uafilm.pro", region: ["ua"], contentType: ["movies"], brand: "uafilm" },
  { domain: "rezka.ua", region: ["ua"], contentType: ["movies", "series"], brand: "rezka-ua" },
  { domain: "eneyida.ua", region: ["ua"], contentType: ["movies", "series"], brand: "eneyida" },
  { domain: "lavakino.com", region: ["ua"], contentType: ["movies", "series"], brand: "lavakino" },
  { domain: "kinogo.ua", region: ["ua"], contentType: ["movies"], brand: "kinogo-ua" },
  { domain: "ua-cinema.com", region: ["ua"], contentType: ["movies", "series"], brand: "ua-cinema" },
  { domain: "gidonline.io", region: ["ua", "ru"], contentType: ["movies", "series"], brand: "gidonline" },
  { domain: "anitube.in.ua", region: ["ua"], contentType: ["series"], brand: "anitube-ua" },
  { domain: "uakinoclub.net", region: ["ua"], contentType: ["movies", "series"], brand: "uakinoclub" },
  { domain: "uaserial.club", region: ["ua"], contentType: ["series"], brand: "uaserial" },
  { domain: "filmix.fm", region: ["ua", "ru"], contentType: ["movies", "series"], brand: "filmix" },

  // ===== RUSSIAN REGION =====
  { domain: "hdrezka.ag", region: ["ru"], contentType: ["movies", "series"], brand: "hdrezka" },
  { domain: "kinogo.film", region: ["ru"], contentType: ["movies"], brand: "kinogo" },
  { domain: "lordfilm.lu", region: ["ru"], contentType: ["movies", "series"], brand: "lordfilm" },
  { domain: "filmix.biz", region: ["ru"], contentType: ["movies", "series"], brand: "filmix" },
  { domain: "seasonvar.ru", region: ["ru"], contentType: ["series"], brand: "seasonvar" },
  { domain: "baskino.me", region: ["ru"], contentType: ["movies"], brand: "baskino" },
  { domain: "kinokong.org", region: ["ru"], contentType: ["movies", "series"], brand: "kinokong" },
  { domain: "hdkinoteatr.com", region: ["ru"], contentType: ["movies", "series"], brand: "hdkinoteatr" },
  { domain: "kinokrad.cc", region: ["ru"], contentType: ["movies"], brand: "kinokrad" },
  { domain: "kinotochka.co", region: ["ru"], contentType: ["movies", "series"], brand: "kinotochka" },
  { domain: "filmsonline.cc", region: ["ru"], contentType: ["movies", "series"], brand: "filmsonline" },
  { domain: "kinoprofi.vip", region: ["ru"], contentType: ["movies", "series"], brand: "kinoprofi" },
  { domain: "lordserial.tv", region: ["ru"], contentType: ["series"], brand: "lordserial" },
  { domain: "turbofilm.tv", region: ["ru"], contentType: ["movies", "series"], brand: "turbofilm" },
  { domain: "kinobar.vip", region: ["ru"], contentType: ["movies", "series"], brand: "kinobar" },
  { domain: "rutor.info", region: ["ru"], contentType: ["movies", "series", "software", "music"], brand: "rutor" },
  { domain: "nnmclub.to", region: ["ru"], contentType: ["movies", "series", "software", "music"], brand: "nnmclub" },
  { domain: "zaycev.net", region: ["ru"], contentType: ["music"], brand: "zaycev" },

  // ===== FRENCH REGION =====
  { domain: "papystreaming.com", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "papystreaming" },
  { domain: "french-stream.re", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "french-stream" },
  { domain: "voirfilms.ws", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "voirfilms" },
  { domain: "dpstream.com", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "dpstream" },
  { domain: "streamcomplet.me", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "streamcomplet" },
  { domain: "wiflix.voto", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "wiflix" },
  { domain: "voiranime.com", region: ["fr", "ma"], contentType: ["series"], brand: "voiranime" },
  { domain: "empire-streaming.co", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "empire-streaming" },
  { domain: "coflix.tv", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "coflix" },
  { domain: "hdss.to", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "hdss" },
  { domain: "filmstreamvk.com", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "filmstreamvk" },
  { domain: "cpasmieux.one", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "cpasmieux" },
  { domain: "zustream.com", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "zustream" },
  { domain: "tirexo.com", region: ["fr", "ma"], contentType: ["movies", "series", "software", "music"], brand: "tirexo" },
  { domain: "yggtorrent.do", region: ["fr", "ma"], contentType: ["movies", "series", "software", "music"], brand: "yggtorrent" },

  // ===== ENGLISH REGION (US/UK) =====
  { domain: "fmovies.ps", region: ["us", "uk"], contentType: ["movies", "series"], brand: "fmovies" },
  { domain: "123movies.ai", region: ["us", "uk"], contentType: ["movies", "series"], brand: "123movies" },
  { domain: "putlocker.vip", region: ["us", "uk"], contentType: ["movies", "series"], brand: "putlocker" },
  { domain: "solarmovie.pe", region: ["us", "uk"], contentType: ["movies", "series"], brand: "solarmovie" },
  { domain: "gomovies.sx", region: ["us", "uk"], contentType: ["movies", "series"], brand: "gomovies" },
  { domain: "soap2day.rs", region: ["us", "uk"], contentType: ["movies", "series"], brand: "soap2day" },
  { domain: "flixhq.to", region: ["us", "uk"], contentType: ["movies", "series"], brand: "flixhq" },
  { domain: "myflixer.pw", region: ["us", "uk"], contentType: ["movies", "series"], brand: "myflixer" },
  { domain: "bflixz.to", region: ["us", "uk"], contentType: ["movies", "series"], brand: "bflixz" },
  { domain: "yesmovies.ag", region: ["us", "uk"], contentType: ["movies", "series"], brand: "yesmovies" },
  { domain: "primewire.tf", region: ["us", "uk"], contentType: ["movies", "series"], brand: "primewire" },
  { domain: "hdtoday.tv", region: ["us", "uk"], contentType: ["movies", "series"], brand: "hdtoday" },
  { domain: "zoechip.cc", region: ["us", "uk"], contentType: ["movies", "series"], brand: "zoechip" },
  { domain: "watchserieshd.tv", region: ["us", "uk"], contentType: ["series"], brand: "watchserieshd" },
  { domain: "streameast.xyz", region: ["us", "uk"], contentType: ["sports"], brand: "streameast" },
  { domain: "crackstreams.biz", region: ["us", "uk"], contentType: ["sports"], brand: "crackstreams" },
  { domain: "sportsurge.net", region: ["us", "uk"], contentType: ["sports"], brand: "sportsurge" },
  { domain: "buffstreams.app", region: ["us", "uk"], contentType: ["sports"], brand: "buffstreams" },
  { domain: "1337x.to", region: ["us", "uk"], contentType: ["movies", "series", "software", "music"], brand: "1337x" },
  { domain: "yts.mx", region: ["us", "uk"], contentType: ["movies"], brand: "yts" },
  { domain: "eztv.re", region: ["us", "uk"], contentType: ["series"], brand: "eztv" },
  { domain: "fitgirl-repacks.site", region: ["us", "uk"], contentType: ["software"], brand: "fitgirl" },
  { domain: "9anime.to", region: ["us", "uk"], contentType: ["series"], brand: "9anime" },
  { domain: "gogoanime.run", region: ["us", "uk"], contentType: ["series"], brand: "gogoanime" },
  { domain: "aniwatch.to", region: ["us", "uk"], contentType: ["series"], brand: "aniwatch" },

  // ===== SPANISH REGION =====
  { domain: "cuevana.biz", region: ["es"], contentType: ["movies", "series"], brand: "cuevana" },
  { domain: "pelisplus.to", region: ["es"], contentType: ["movies", "series"], brand: "pelisplus" },
  { domain: "repelis.one", region: ["es"], contentType: ["movies", "series"], brand: "repelis" },
  { domain: "gnula.nu", region: ["es"], contentType: ["movies", "series"], brand: "gnula" },
  { domain: "cinecalidad.is", region: ["es"], contentType: ["movies", "series"], brand: "cinecalidad" },
  { domain: "pelispedia.run", region: ["es"], contentType: ["movies", "series"], brand: "pelispedia" },
  { domain: "seriesflix.video", region: ["es"], contentType: ["series"], brand: "seriesflix" },
  { domain: "cuevana3.me", region: ["es"], contentType: ["movies", "series"], brand: "cuevana3" },
  { domain: "pelicula-completa.com", region: ["es"], contentType: ["movies"], brand: "pelicula-completa" },
  { domain: "vepelis.com", region: ["es"], contentType: ["movies", "series"], brand: "vepelis" },
  { domain: "cliver.to", region: ["es"], contentType: ["movies", "series"], brand: "cliver" },
  { domain: "pelisgratis.nu", region: ["es"], contentType: ["movies", "series"], brand: "pelisgratis" },
  { domain: "roja-directa.me", region: ["es"], contentType: ["sports"], brand: "rojadirecta" },
  { domain: "tarjetaroja.eu", region: ["es"], contentType: ["sports"], brand: "tarjetaroja" },

  // ===== GERMAN REGION =====
  { domain: "kinox.to", region: ["de"], contentType: ["movies", "series"], brand: "kinox" },
  { domain: "movie4k.st", region: ["de"], contentType: ["movies", "series"], brand: "movie4k" },
  { domain: "streamkiste.tv", region: ["de"], contentType: ["movies", "series"], brand: "streamkiste" },
  { domain: "filmpalast.to", region: ["de"], contentType: ["movies", "series"], brand: "filmpalast" },
  { domain: "megakino.org", region: ["de"], contentType: ["movies", "series"], brand: "megakino" },
  { domain: "kkiste.ag", region: ["de"], contentType: ["movies", "series"], brand: "kkiste" },
  { domain: "hdfilme.cx", region: ["de"], contentType: ["movies", "series"], brand: "hdfilme" },
  { domain: "serienstream.to", region: ["de"], contentType: ["series"], brand: "serienstream" },
  { domain: "bs.to", region: ["de"], contentType: ["series"], brand: "burning-series" },
  { domain: "movietown.org", region: ["de"], contentType: ["movies", "series"], brand: "movietown" },
  { domain: "filmfriend.info", region: ["de"], contentType: ["movies"], brand: "filmfriend-pirate" },

  // ===== ITALIAN REGION =====
  { domain: "cb01.li", region: ["it"], contentType: ["movies", "series"], brand: "cb01" },
  { domain: "altadefinizione.wiki", region: ["it"], contentType: ["movies", "series"], brand: "altadefinizione" },
  { domain: "streamingcommunity.prof", region: ["it"], contentType: ["movies", "series"], brand: "streamingcommunity" },
  { domain: "filmpertutti.click", region: ["it"], contentType: ["movies", "series"], brand: "filmpertutti" },
  { domain: "guardaserie.meme", region: ["it"], contentType: ["series"], brand: "guardaserie" },
  { domain: "tantifilm.yachts", region: ["it"], contentType: ["movies", "series"], brand: "tantifilm" },
  { domain: "cineblog01.cx", region: ["it"], contentType: ["movies", "series"], brand: "cineblog01" },
  { domain: "eurostreaming.in", region: ["it"], contentType: ["series"], brand: "eurostreaming" },
  { domain: "ilgeniodellostreaming.cam", region: ["it"], contentType: ["movies", "series"], brand: "ilgeniodellostreaming" },
  { domain: "piratestreaming.fun", region: ["it"], contentType: ["movies", "series"], brand: "piratestreaming" },
  { domain: "tuttostreaming.com", region: ["it"], contentType: ["movies", "series"], brand: "tuttostreaming" },

  // ===== TURKISH REGION =====
  { domain: "hdfilmcehennemi.life", region: ["tr"], contentType: ["movies", "series"], brand: "hdfilmcehennemi" },
  { domain: "dizipal.com", region: ["tr"], contentType: ["series"], brand: "dizipal" },
  { domain: "fullhdfilmizlesene.com", region: ["tr"], contentType: ["movies"], brand: "fullhdfilmizlesene" },
  { domain: "dizibox.tv", region: ["tr"], contentType: ["series"], brand: "dizibox" },
  { domain: "dizimag.co", region: ["tr"], contentType: ["series"], brand: "dizimag" },
  { domain: "filmizlesene.com", region: ["tr"], contentType: ["movies"], brand: "filmizlesene" },
  { domain: "jetfilmizle.video", region: ["tr"], contentType: ["movies", "series"], brand: "jetfilmizle" },
  { domain: "hdfilmcehennemi2.com", region: ["tr"], contentType: ["movies"], brand: "hdfilmcehennemi2" },
  { domain: "sinefil.cc", region: ["tr"], contentType: ["movies", "series"], brand: "sinefil" },
  { domain: "filmmakinesi.film", region: ["tr"], contentType: ["movies"], brand: "filmmakinesi" },
  { domain: "selcuksports.com", region: ["tr"], contentType: ["sports"], brand: "selcuksports" },
  { domain: "taraftarium24.net", region: ["tr"], contentType: ["sports"], brand: "taraftarium24" },

  // ===== HEBREW REGION =====
  { domain: "sdarot.tv", region: ["il"], contentType: ["series"], brand: "sdarot" },
  { domain: "seret.co.il", region: ["il"], contentType: ["movies"], brand: "seret" },
  { domain: "sratim.tv", region: ["il"], contentType: ["movies", "series"], brand: "sratim" },
  { domain: "topstreams.live", region: ["il"], contentType: ["sports"], brand: "topstreams" },
  { domain: "israelserials.com", region: ["il"], contentType: ["series"], brand: "israelserials" },
  { domain: "sadot-tv.com", region: ["il"], contentType: ["series"], brand: "sadot-tv" },

  // ===== PORTUGUESE / BRAZILIAN REGION =====
  { domain: "superflix.vc", region: ["br"], contentType: ["movies", "series"], brand: "superflix" },
  { domain: "topflix.tv", region: ["br"], contentType: ["movies", "series"], brand: "topflix" },
  { domain: "redecanais.la", region: ["br"], contentType: ["movies", "series", "sports"], brand: "redecanais" },
  { domain: "megafilmeshd.blog", region: ["br"], contentType: ["movies", "series"], brand: "megafilmeshd" },
  { domain: "filmesonlinegratis.com", region: ["br"], contentType: ["movies", "series"], brand: "filmesonlinegratis" },
  { domain: "assistirfilmeshd.com", region: ["br"], contentType: ["movies", "series"], brand: "assistirfilmeshd" },
  { domain: "vizer.tv", region: ["br"], contentType: ["movies", "series"], brand: "vizer" },
  { domain: "netcine.co", region: ["br"], contentType: ["movies", "series"], brand: "netcine" },
  { domain: "pobreflix.biz", region: ["br"], contentType: ["movies", "series"], brand: "pobreflix" },
  { domain: "livetv.sx", region: ["br"], contentType: ["sports"], brand: "livetv" },
  { domain: "futemax.gratis", region: ["br"], contentType: ["sports"], brand: "futemax" },

  // ===== HINDI / INDIAN REGION =====
  { domain: "filmyzilla.com.by", region: ["in"], contentType: ["movies"], brand: "filmyzilla" },
  { domain: "movierulz.ac", region: ["in"], contentType: ["movies"], brand: "movierulz" },
  { domain: "tamilrockers.ws", region: ["in"], contentType: ["movies"], brand: "tamilrockers" },
  { domain: "bolly4u.org", region: ["in"], contentType: ["movies"], brand: "bolly4u" },
  { domain: "vegamovies.nl", region: ["in"], contentType: ["movies", "series"], brand: "vegamovies" },
  { domain: "katmoviehd.vg", region: ["in"], contentType: ["movies", "series"], brand: "katmoviehd" },
  { domain: "worldfree4u.lol", region: ["in"], contentType: ["movies"], brand: "worldfree4u" },
  { domain: "downloadhub.win", region: ["in"], contentType: ["movies"], brand: "downloadhub" },
  { domain: "coolmoviez.click", region: ["in"], contentType: ["movies"], brand: "coolmoviez" },
  { domain: "filmywap.com", region: ["in"], contentType: ["movies", "music"], brand: "filmywap" },
  { domain: "pagalworld.com.se", region: ["in"], contentType: ["music"], brand: "pagalworld" },
  { domain: "ssrmovies.wiki", region: ["in"], contentType: ["movies"], brand: "ssrmovies" },
  { domain: "extramovies.win", region: ["in"], contentType: ["movies"], brand: "extramovies" },
  { domain: "7starhd.fans", region: ["in"], contentType: ["movies"], brand: "7starhd" },
  { domain: "mp4moviez.day", region: ["in"], contentType: ["movies"], brand: "mp4moviez" },
  { domain: "jiorockers.com", region: ["in"], contentType: ["movies"], brand: "jiorockers" },
  { domain: "cricfree.io", region: ["in"], contentType: ["sports"], brand: "cricfree" },
  { domain: "webcric.com", region: ["in"], contentType: ["sports"], brand: "webcric" },

  // ===== POLISH REGION =====
  { domain: "zalukaj.com", region: ["pl"], contentType: ["movies", "series"], brand: "zalukaj" },
  { domain: "filman.cc", region: ["pl"], contentType: ["movies", "series"], brand: "filman" },
  { domain: "zerion.cc", region: ["pl"], contentType: ["movies", "series"], brand: "zerion" },
  { domain: "cda-hd.co", region: ["pl"], contentType: ["movies", "series"], brand: "cda-hd" },
  { domain: "fili.cc", region: ["pl"], contentType: ["movies", "series"], brand: "fili" },
  { domain: "filmweb-online.pl", region: ["pl"], contentType: ["movies", "series"], brand: "filmweb-online" },
  { domain: "sflix.pl", region: ["pl"], contentType: ["movies", "series"], brand: "sflix-pl" },
  { domain: "obejrzyj.to", region: ["pl"], contentType: ["movies", "series"], brand: "obejrzyj" },
  { domain: "vizjer.pl", region: ["pl"], contentType: ["movies", "series"], brand: "vizjer" },

  // ===== GREEK / CYPRUS REGION =====
  { domain: "tenies-online.best", region: ["cy"], contentType: ["movies", "series"], brand: "tenies-online" },
  { domain: "tainiomaniac.com", region: ["cy"], contentType: ["movies", "series"], brand: "tainiomaniac" },
  { domain: "tainiesonline.best", region: ["cy"], contentType: ["movies", "series"], brand: "tainiesonline" },
  { domain: "gamatotv.info", region: ["cy"], contentType: ["movies", "series"], brand: "gamatotv" },
  { domain: "greeksubtitles.info", region: ["cy"], contentType: ["movies", "series"], brand: "greeksubtitles" },
];

/**
 * Get seeds matching a region and optionally a content type.
 */
export function getSeedsForRegion(regionId: string, contentType?: string): SeedSite[] {
  return SEED_SITES.filter((s) => {
    const regionMatch = s.region.includes(regionId);
    const contentMatch = !contentType || s.contentType.includes(contentType);
    return regionMatch && contentMatch;
  });
}

/**
 * Get unique brands for a given region+contentType, for mirror searching.
 * Returns the top N brands (to limit Serper API usage).
 */
export function getTopBrands(regionId: string, contentType?: string, limit: number = 8): string[] {
  const seeds = getSeedsForRegion(regionId, contentType);
  const brands = [...new Set(seeds.map((s) => s.brand))];
  return brands.slice(0, limit);
}
