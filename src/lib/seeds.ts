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
  // =====================================================================
  // ===== ARABIC REGION (ae, ma, eg, sa, qa, kw, bh, om, jo, lb, iq, dz, tn, ly) =====
  // =====================================================================
  { domain: "egybest.org", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "egybest" },
  { domain: "faselhdx.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "faselhd" },
  { domain: "cimaleek.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "cimaleek" },
  { domain: "mycima.ws", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "mycima" },
  { domain: "shahid4u.cam", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "shahid4u" },
  { domain: "arab48.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "arab48" },
  { domain: "cimanow.cc", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "cimanow" },
  { domain: "akwam.to", region: ["ae", "ma", "eg"], contentType: ["movies", "series", "software"], brand: "akwam" },
  { domain: "cima4u.cam", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "cima4u" },
  { domain: "egydead.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "egydead" },
  { domain: "fushaar.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "fushaar" },
  { domain: "aflaam.com", region: ["ae", "ma", "eg"], contentType: ["movies"], brand: "aflaam" },
  { domain: "arabseed.ink", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "arabseed" },
  { domain: "shahed4u.land", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "shahed4u" },
  { domain: "wecima.show", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "wecima" },
  { domain: "cimaclub.cam", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "cimaclub" },
  { domain: "movizland.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "movizland" },
  { domain: "cimalight.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "cimalight" },
  { domain: "witanime.com", region: ["ae", "ma", "eg"], contentType: ["series"], brand: "witanime" },
  { domain: "animelek.com", region: ["ae", "ma", "eg"], contentType: ["series"], brand: "animelek" },
  { domain: "yallashoot.cam", region: ["ae", "ma", "eg", "sa"], contentType: ["sports"], brand: "yallashoot" },
  { domain: "kooralive.com", region: ["ae", "ma", "eg", "sa"], contentType: ["sports"], brand: "kooralive" },
  { domain: "yallagoal.com", region: ["ae", "ma", "eg"], contentType: ["sports"], brand: "yallagoal" },
  { domain: "mazika2day.com", region: ["ae", "ma", "eg"], contentType: ["music"], brand: "mazika2day" },
  { domain: "egyramadan.me", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "egyramadan" },
  { domain: "tv.halabieh.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series", "sports"], brand: "halabieh" },
  { domain: "topcinemaa.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "topcima" },
  { domain: "cfu.cam", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "cfu" },
  { domain: "topcima.online", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "topcima" },
  { domain: "shofha.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "shofha" },
  { domain: "moviz-time.co", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "moviztime" },
  { domain: "osnplus.com", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "osnplus" },
  { domain: "akoam.cam", region: ["ae", "ma", "eg"], contentType: ["movies", "series", "software"], brand: "akoam" },
  { domain: "faselhd.express", region: ["ae", "ma", "eg"], contentType: ["movies", "series"], brand: "faselhd" },
  // Additional Arabic sites
  { domain: "egy.best", region: ["ae", "eg", "sa"], contentType: ["movies", "series"], brand: "egybest" },
  { domain: "cimav2.com", region: ["ae", "eg", "sa"], contentType: ["movies", "series"], brand: "cimav2" },
  { domain: "lakorn.live", region: ["ae", "eg", "sa"], contentType: ["series"], brand: "lakorn-ar" },
  { domain: "animerco.com", region: ["ae", "eg", "sa"], contentType: ["series"], brand: "animerco" },
  { domain: "okanime.tv", region: ["ae", "eg", "sa"], contentType: ["series"], brand: "okanime" },
  { domain: "mycima.tv", region: ["ae", "eg", "sa", "ma"], contentType: ["movies", "series"], brand: "mycima" },
  { domain: "lazor.live", region: ["ae", "eg", "sa"], contentType: ["sports"], brand: "lazor" },
  { domain: "as-goal.com", region: ["ae", "eg", "sa", "ma"], contentType: ["sports"], brand: "asgoal" },
  { domain: "beinmatch.tv", region: ["ae", "eg", "sa", "ma"], contentType: ["sports"], brand: "beinmatch" },
  { domain: "kora-online.tv", region: ["ae", "eg", "sa"], contentType: ["sports"], brand: "koraonline" },
  { domain: "yallalive.com", region: ["ae", "eg", "sa"], contentType: ["sports"], brand: "yallalive" },
  { domain: "korastar.tv", region: ["ae", "eg", "sa"], contentType: ["sports"], brand: "korastar" },
  { domain: "livehd7.com", region: ["ae", "eg", "sa"], contentType: ["sports"], brand: "livehd7" },
  { domain: "mobachir.com", region: ["ae", "eg", "sa"], contentType: ["sports"], brand: "mobachir" },
  { domain: "mp3arab.com", region: ["ae", "eg", "sa", "ma"], contentType: ["music"], brand: "mp3arab" },
  { domain: "sama-share.com", region: ["ae", "eg", "sa", "ma"], contentType: ["movies", "series", "software"], brand: "samashare" },

  // =====================================================================
  // ===== UKRAINIAN REGION =====
  // =====================================================================
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
  // Additional Ukrainian sites
  { domain: "kinoukr.com", region: ["ua"], contentType: ["movies", "series"], brand: "kinoukr" },
  { domain: "sweet.tv.pirate", region: ["ua"], contentType: ["movies", "series"], brand: "sweet-pirate" },
  { domain: "hdua.club", region: ["ua"], contentType: ["movies", "series"], brand: "hdua" },
  { domain: "onlineua.tv", region: ["ua"], contentType: ["movies", "series"], brand: "onlineua" },
  { domain: "ukrainianfilm.org", region: ["ua"], contentType: ["movies"], brand: "ukrainianfilm" },
  { domain: "sportua.stream", region: ["ua"], contentType: ["sports"], brand: "sportua" },
  { domain: "footballua.tv", region: ["ua"], contentType: ["sports"], brand: "footballua" },
  { domain: "uasport.stream", region: ["ua"], contentType: ["sports"], brand: "uasport" },
  { domain: "uamusic.top", region: ["ua"], contentType: ["music"], brand: "uamusic" },
  { domain: "soft.ua.film", region: ["ua"], contentType: ["software"], brand: "softua" },

  // =====================================================================
  // ===== RUSSIAN REGION =====
  // =====================================================================
  { domain: "hdrezka.ag", region: ["ru", "by", "kz"], contentType: ["movies", "series"], brand: "hdrezka" },
  { domain: "kinogo.film", region: ["ru", "by", "kz"], contentType: ["movies"], brand: "kinogo" },
  { domain: "lordfilm.lu", region: ["ru", "by", "kz"], contentType: ["movies", "series"], brand: "lordfilm" },
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
  { domain: "rutor.info", region: ["ru", "by", "kz"], contentType: ["movies", "series", "software", "music"], brand: "rutor" },
  { domain: "nnmclub.to", region: ["ru", "by", "kz"], contentType: ["movies", "series", "software", "music"], brand: "nnmclub" },
  { domain: "zaycev.net", region: ["ru"], contentType: ["music"], brand: "zaycev" },
  // Additional Russian sites
  { domain: "hdrezka.me", region: ["ru", "by", "kz"], contentType: ["movies", "series"], brand: "hdrezka" },
  { domain: "rezka.ag", region: ["ru", "by", "kz"], contentType: ["movies", "series"], brand: "hdrezka" },
  { domain: "kinogo.biz", region: ["ru", "by", "kz"], contentType: ["movies"], brand: "kinogo" },
  { domain: "lordfilm.tv", region: ["ru", "by", "kz"], contentType: ["movies", "series"], brand: "lordfilm" },
  { domain: "kinopoisk.film", region: ["ru"], contentType: ["movies", "series"], brand: "kinopoisk-pirate" },
  { domain: "kinozal.tv", region: ["ru", "by", "kz"], contentType: ["movies", "series", "software", "music"], brand: "kinozal" },
  { domain: "kinoha.top", region: ["ru"], contentType: ["movies", "series"], brand: "kinoha" },
  { domain: "megogo.pirate", region: ["ru"], contentType: ["movies", "series"], brand: "megogo-pirate" },
  { domain: "topkino.net", region: ["ru"], contentType: ["movies", "series"], brand: "topkino" },
  { domain: "kinomax.live", region: ["ru"], contentType: ["movies", "series"], brand: "kinomax-pirate" },
  { domain: "anilibria.tv", region: ["ru"], contentType: ["series"], brand: "anilibria" },
  { domain: "animevost.org", region: ["ru"], contentType: ["series"], brand: "animevost" },
  { domain: "sportbox.stream", region: ["ru"], contentType: ["sports"], brand: "sportbox-stream" },
  { domain: "livesport.ws", region: ["ru", "by", "kz"], contentType: ["sports"], brand: "livesport" },
  { domain: "sportlemon.tv", region: ["ru"], contentType: ["sports"], brand: "sportlemon" },
  { domain: "matchtvonline.live", region: ["ru"], contentType: ["sports"], brand: "matchtv-pirate" },
  { domain: "rusport.stream", region: ["ru"], contentType: ["sports"], brand: "rusport" },
  { domain: "muzofond.fm", region: ["ru"], contentType: ["music"], brand: "muzofond" },
  { domain: "musify.club", region: ["ru"], contentType: ["music"], brand: "musify" },

  // =====================================================================
  // ===== FRENCH REGION (fr, ma, dz, tn, sn, ci) =====
  // =====================================================================
  { domain: "papystreaming.com", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "papystreaming" },
  { domain: "french-stream.re", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "french-stream" },
  { domain: "voirfilms.ws", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "voirfilms" },
  { domain: "dpstream.com", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "dpstream" },
  { domain: "streamcomplet.me", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "streamcomplet" },
  { domain: "wiflix.voto", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "wiflix" },
  { domain: "voiranime.com", region: ["fr", "ma"], contentType: ["series"], brand: "voiranime" },
  { domain: "empire-streaming.co", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "empire-streaming" },
  { domain: "coflix.tv", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "coflix" },
  { domain: "hdss.to", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "hdss" },
  { domain: "filmstreamvk.com", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "filmstreamvk" },
  { domain: "cpasmieux.one", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "cpasmieux" },
  { domain: "zustream.com", region: ["fr", "ma"], contentType: ["movies", "series"], brand: "zustream" },
  { domain: "tirexo.com", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series", "software", "music"], brand: "tirexo" },
  { domain: "yggtorrent.do", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series", "software", "music"], brand: "yggtorrent" },
  // Additional French sites
  { domain: "wawacity.video", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series", "software", "music"], brand: "wawacity" },
  { domain: "extreme-download.com", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series", "software"], brand: "extreme-download" },
  { domain: "zone-telechargement.icu", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series", "software", "music"], brand: "zone-telechargement" },
  { domain: "libertyland.al", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "libertyland" },
  { domain: "cinemay.live", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "cinemay" },
  { domain: "dustreaming.com", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "dustreaming" },
  { domain: "illimitestreaming.co", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "illimitestreaming" },
  { domain: "seriestreaming.com", region: ["fr", "ma", "dz", "tn"], contentType: ["series"], brand: "seriestreaming" },
  { domain: "juststream.live", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series"], brand: "juststream-fr" },
  { domain: "neko-sama.fr", region: ["fr", "ma"], contentType: ["series"], brand: "nekosama" },
  { domain: "franime.fr", region: ["fr", "ma"], contentType: ["series"], brand: "franime" },
  { domain: "mavanimes.co", region: ["fr", "ma"], contentType: ["series"], brand: "mavanimes" },
  { domain: "sport365.live", region: ["fr", "ma", "dz", "tn"], contentType: ["sports"], brand: "sport365-fr" },
  { domain: "streamonsport.com", region: ["fr", "ma", "dz", "tn"], contentType: ["sports"], brand: "streamonsport" },
  { domain: "rfrench-stream.com", region: ["fr", "ma", "dz", "tn"], contentType: ["sports"], brand: "rfrenchstream" },
  { domain: "livefoot.fr", region: ["fr", "ma", "dz", "tn"], contentType: ["sports"], brand: "livefoot" },
  { domain: "footstream.tv", region: ["fr", "ma", "dz", "tn"], contentType: ["sports"], brand: "footstream" },
  { domain: "t411.li", region: ["fr", "ma", "dz", "tn"], contentType: ["movies", "series", "software", "music"], brand: "t411" },

  // =====================================================================
  // ===== ENGLISH REGION (US/UK/CA/AU/NZ/IE) =====
  // =====================================================================
  { domain: "fmovies.ps", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "fmovies" },
  { domain: "123movies.ai", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "123movies" },
  { domain: "putlocker.vip", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "putlocker" },
  { domain: "solarmovie.pe", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "solarmovie" },
  { domain: "gomovies.sx", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "gomovies" },
  { domain: "soap2day.rs", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "soap2day" },
  { domain: "flixhq.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "flixhq" },
  { domain: "myflixer.pw", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "myflixer" },
  { domain: "bflixz.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "bflixz" },
  { domain: "yesmovies.ag", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "yesmovies" },
  { domain: "primewire.tf", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "primewire" },
  { domain: "hdtoday.tv", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "hdtoday" },
  { domain: "zoechip.cc", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "zoechip" },
  { domain: "watchserieshd.tv", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["series"], brand: "watchserieshd" },
  { domain: "streameast.xyz", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["sports"], brand: "streameast" },
  { domain: "crackstreams.biz", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["sports"], brand: "crackstreams" },
  { domain: "sportsurge.net", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["sports"], brand: "sportsurge" },
  { domain: "buffstreams.app", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["sports"], brand: "buffstreams" },
  { domain: "1337x.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series", "software", "music"], brand: "1337x" },
  { domain: "yts.mx", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies"], brand: "yts" },
  { domain: "eztv.re", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["series"], brand: "eztv" },
  { domain: "fitgirl-repacks.site", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["software"], brand: "fitgirl" },
  { domain: "9anime.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["series"], brand: "9anime" },
  { domain: "gogoanime.run", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["series"], brand: "gogoanime" },
  { domain: "aniwatch.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["series"], brand: "aniwatch" },
  { domain: "lookmovie2.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "lookmovie" },
  { domain: "dopebox.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "dopebox" },
  { domain: "moviesjoy.is", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "moviesjoy" },
  { domain: "cinezone.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "cinezone" },
  { domain: "cataz.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "cataz" },
  { domain: "himovies.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "himovies" },
  { domain: "watchomovies.com", region: ["us", "uk"], contentType: ["movies", "series"], brand: "watchomovies" },
  { domain: "m4ufree.se", region: ["us", "uk"], contentType: ["movies", "series"], brand: "m4ufree" },
  { domain: "ww4.fmovies.co", region: ["us", "uk"], contentType: ["movies", "series"], brand: "fmovies" },
  { domain: "sflix.to", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["movies", "series"], brand: "sflix" },
  { domain: "afdah2.com", region: ["us", "uk"], contentType: ["movies"], brand: "afdah" },
  { domain: "vumoo.to", region: ["us", "uk"], contentType: ["movies", "series"], brand: "vumoo" },
  { domain: "tinyzone.org", region: ["us", "uk"], contentType: ["movies", "series"], brand: "tinyzone" },
  { domain: "kissmovies.io", region: ["us", "uk"], contentType: ["movies", "series"], brand: "kissmovies" },
  { domain: "sockshare.ac", region: ["us", "uk"], contentType: ["movies", "series"], brand: "sockshare" },
  { domain: "cineb.rs", region: ["us", "uk"], contentType: ["movies", "series"], brand: "cineb" },
  { domain: "vegamovies.yt", region: ["us", "uk"], contentType: ["movies", "series"], brand: "vegamovies" },
  { domain: "hurawatch.cc", region: ["us", "uk"], contentType: ["movies", "series"], brand: "hurawatch" },
  { domain: "movierulz.com", region: ["us", "uk", "in"], contentType: ["movies"], brand: "movierulz" },
  // More English sports
  { domain: "methstreams.com", region: ["us", "uk"], contentType: ["sports"], brand: "methstreams" },
  { domain: "totalsportek.to", region: ["us", "uk"], contentType: ["sports"], brand: "totalsportek" },
  { domain: "rojadirecta.me", region: ["us", "uk", "es"], contentType: ["sports"], brand: "rojadirecta" },
  { domain: "livesoccertv.live", region: ["us", "uk"], contentType: ["sports"], brand: "livesoccertv" },
  { domain: "weakstreams.com", region: ["us", "uk"], contentType: ["sports"], brand: "weakstreams" },
  { domain: "givemeredditstreams.com", region: ["us", "uk"], contentType: ["sports"], brand: "givemereddit" },
  { domain: "markkystreams.com", region: ["us", "uk"], contentType: ["sports"], brand: "markkystreams" },
  { domain: "nbastreams.to", region: ["us", "uk"], contentType: ["sports"], brand: "nbastreams" },
  { domain: "nflstreams.to", region: ["us"], contentType: ["sports"], brand: "nflstreams" },
  { domain: "mlbstreams.to", region: ["us"], contentType: ["sports"], brand: "mlbstreams" },
  { domain: "nhlstreams.to", region: ["us", "ca"], contentType: ["sports"], brand: "nhlstreams" },
  { domain: "footybite.to", region: ["us", "uk"], contentType: ["sports"], brand: "footybite" },
  { domain: "cricfree.io", region: ["us", "uk"], contentType: ["sports"], brand: "cricfree" },
  { domain: "vipbox.lc", region: ["us", "uk"], contentType: ["sports"], brand: "vipbox" },
  { domain: "firstrowsports.eu", region: ["us", "uk"], contentType: ["sports"], brand: "firstrowsports" },
  { domain: "stream2watch.at", region: ["us", "uk"], contentType: ["sports"], brand: "stream2watch" },
  { domain: "volokit.com", region: ["us", "uk"], contentType: ["sports"], brand: "volokit" },
  { domain: "ripple.stream", region: ["us", "uk"], contentType: ["sports"], brand: "ripple" },
  // More English software/music
  { domain: "piratebay.party", region: ["us", "uk"], contentType: ["movies", "series", "software", "music"], brand: "piratebay" },
  { domain: "rarbg.to", region: ["us", "uk"], contentType: ["movies", "series", "software"], brand: "rarbg" },
  { domain: "nyaa.si", region: ["us", "uk"], contentType: ["series", "software"], brand: "nyaa" },
  { domain: "rutracker.org", region: ["us", "uk", "ru"], contentType: ["movies", "series", "software", "music"], brand: "rutracker" },
  // Additional English sites
  { domain: "moviecracker.net", region: ["us", "uk", "ca", "au"], contentType: ["movies", "series"], brand: "moviecracker" },
  { domain: "novastream.to", region: ["us", "uk", "ca", "au"], contentType: ["movies", "series"], brand: "novastream" },
  { domain: "watchseries.id", region: ["us", "uk", "ca", "au", "nz", "ie"], contentType: ["series"], brand: "watchseries" },
  { domain: "torrentgalaxy.to", region: ["us", "uk", "ca", "au"], contentType: ["movies", "series", "software", "music"], brand: "torrentgalaxy" },
  { domain: "limetorrents.lol", region: ["us", "uk", "ca", "au"], contentType: ["movies", "series", "software", "music"], brand: "limetorrents" },
  { domain: "kickasstorrents.to", region: ["us", "uk", "ca", "au"], contentType: ["movies", "series", "software", "music"], brand: "kickass" },
  { domain: "demonoid.is", region: ["us", "uk", "ca", "au"], contentType: ["movies", "series", "software", "music"], brand: "demonoid" },
  { domain: "glodls.to", region: ["us", "uk", "ca", "au"], contentType: ["movies", "series", "software"], brand: "glodls" },
  { domain: "ufc-streams.live", region: ["us", "uk", "ca", "au"], contentType: ["sports"], brand: "ufcstreams" },
  { domain: "mmastreams.me", region: ["us", "uk", "ca", "au"], contentType: ["sports"], brand: "mmastreams" },
  { domain: "f1stream.me", region: ["us", "uk", "ca", "au"], contentType: ["sports"], brand: "f1stream" },
  { domain: "soccerstreams100.com", region: ["us", "uk", "ca", "au"], contentType: ["sports"], brand: "soccerstreams100" },
  { domain: "720pstream.nu", region: ["us", "uk"], contentType: ["sports"], brand: "720pstream" },
  { domain: "bilasport.net", region: ["us", "uk", "ca"], contentType: ["sports"], brand: "bilasport" },

  // =====================================================================
  // ===== SPANISH REGION (es, mx, ar, cl, co, pe, ve, ec) =====
  // =====================================================================
  { domain: "cuevana.biz", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "cuevana" },
  { domain: "pelisplus.to", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "pelisplus" },
  { domain: "repelis.one", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "repelis" },
  { domain: "gnula.nu", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "gnula" },
  { domain: "cinecalidad.is", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "cinecalidad" },
  { domain: "pelispedia.run", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "pelispedia" },
  { domain: "seriesflix.video", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["series"], brand: "seriesflix" },
  { domain: "cuevana3.me", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "cuevana3" },
  { domain: "pelicula-completa.com", region: ["es", "mx", "ar", "cl", "co"], contentType: ["movies"], brand: "pelicula-completa" },
  { domain: "vepelis.com", region: ["es", "mx", "ar", "cl", "co"], contentType: ["movies", "series"], brand: "vepelis" },
  { domain: "cliver.to", region: ["es", "mx", "ar", "cl", "co"], contentType: ["movies", "series"], brand: "cliver" },
  { domain: "pelisgratis.nu", region: ["es", "mx", "ar", "cl", "co"], contentType: ["movies", "series"], brand: "pelisgratis" },
  { domain: "roja-directa.me", region: ["es", "mx", "ar"], contentType: ["sports"], brand: "rojadirecta" },
  { domain: "tarjetaroja.eu", region: ["es", "mx", "ar"], contentType: ["sports"], brand: "tarjetaroja" },
  // Additional Spanish sites
  { domain: "pelisplushd.nz", region: ["es", "mx", "ar", "cl", "co", "pe", "ve", "ec"], contentType: ["movies", "series"], brand: "pelisplushd" },
  { domain: "cuevana2.io", region: ["es", "mx", "ar", "cl", "co", "pe", "ve", "ec"], contentType: ["movies", "series"], brand: "cuevana2" },
  { domain: "serieslatino.tv", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["series"], brand: "serieslatino" },
  { domain: "poseidonhd.cc", region: ["es", "mx", "ar", "cl", "co"], contentType: ["movies", "series"], brand: "poseidonhd" },
  { domain: "inkapelis.in", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["movies", "series"], brand: "inkapelis" },
  { domain: "dontorrent.land", region: ["es"], contentType: ["movies", "series", "software", "music"], brand: "dontorrent" },
  { domain: "divxtotal.dev", region: ["es"], contentType: ["movies", "series", "software"], brand: "divxtotal" },
  { domain: "mejortorrent.wtf", region: ["es"], contentType: ["movies", "series", "software"], brand: "mejortorrent" },
  { domain: "elitetorrent.wf", region: ["es"], contentType: ["movies", "series"], brand: "elitetorrent" },
  { domain: "grantorrent.wtf", region: ["es"], contentType: ["movies", "series"], brand: "grantorrent" },
  { domain: "animeflv.net", region: ["es", "mx", "ar", "cl", "co", "pe", "ve", "ec"], contentType: ["series"], brand: "animeflv" },
  { domain: "jkanime.net", region: ["es", "mx", "ar", "cl", "co", "pe"], contentType: ["series"], brand: "jkanime" },
  { domain: "tioanime.com", region: ["es", "mx", "ar", "cl", "co"], contentType: ["series"], brand: "tioanime" },
  { domain: "monoschinos.com", region: ["es", "mx", "ar", "cl", "co"], contentType: ["series"], brand: "monoschinos" },
  { domain: "futbollibre.net", region: ["es", "mx", "ar", "cl", "co", "pe", "ve", "ec"], contentType: ["sports"], brand: "futbollibre" },
  { domain: "pirlotvonline.org", region: ["es", "mx", "ar"], contentType: ["sports"], brand: "pirlotv" },
  { domain: "elitetv.lat", region: ["es", "mx", "ar", "cl", "co"], contentType: ["sports"], brand: "elitetv" },
  { domain: "arenavision.biz", region: ["es", "mx", "ar"], contentType: ["sports"], brand: "arenavision" },
  { domain: "futbolenlinea.live", region: ["es", "mx", "ar", "cl", "co"], contentType: ["sports"], brand: "futbolenlinea" },
  { domain: "livetvsports.es", region: ["es", "mx", "ar"], contentType: ["sports"], brand: "livetvsports-es" },
  { domain: "mp3teca.com", region: ["es", "mx", "ar", "cl", "co"], contentType: ["music"], brand: "mp3teca" },

  // =====================================================================
  // ===== GERMAN REGION (de, at, ch) =====
  // =====================================================================
  { domain: "kinox.to", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "kinox" },
  { domain: "movie4k.st", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "movie4k" },
  { domain: "streamkiste.tv", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "streamkiste" },
  { domain: "filmpalast.to", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "filmpalast" },
  { domain: "megakino.org", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "megakino" },
  { domain: "kkiste.ag", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "kkiste" },
  { domain: "hdfilme.cx", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "hdfilme" },
  { domain: "serienstream.to", region: ["de", "at", "ch"], contentType: ["series"], brand: "serienstream" },
  { domain: "bs.to", region: ["de", "at", "ch"], contentType: ["series"], brand: "burning-series" },
  { domain: "movietown.org", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "movietown" },
  { domain: "filmfriend.info", region: ["de", "at", "ch"], contentType: ["movies"], brand: "filmfriend-pirate" },
  // Additional German sites
  { domain: "movieking.cc", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "movieking" },
  { domain: "cine.to", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "cineto" },
  { domain: "kinoger.to", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "kinoger" },
  { domain: "xcine.me", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "xcine" },
  { domain: "nima4k.org", region: ["de", "at", "ch"], contentType: ["movies", "series"], brand: "nima4k" },
  { domain: "animetoast.cc", region: ["de", "at", "ch"], contentType: ["series"], brand: "animetoast" },
  { domain: "aniworld.to", region: ["de", "at", "ch"], contentType: ["series"], brand: "aniworld" },
  { domain: "anime-loads.org", region: ["de", "at", "ch"], contentType: ["series"], brand: "anime-loads" },
  { domain: "boerse.to", region: ["de", "at", "ch"], contentType: ["movies", "series", "software", "music"], brand: "boerse" },
  { domain: "ddl-warez.cc", region: ["de", "at", "ch"], contentType: ["movies", "series", "software"], brand: "ddl-warez" },
  { domain: "mygully.com", region: ["de", "at", "ch"], contentType: ["movies", "series", "software", "music"], brand: "mygully" },
  { domain: "livetv.sx", region: ["de", "at", "ch"], contentType: ["sports"], brand: "livetv-de" },
  { domain: "sportdeutschland.stream", region: ["de", "at", "ch"], contentType: ["sports"], brand: "sportde-stream" },
  { domain: "fussball.stream", region: ["de", "at", "ch"], contentType: ["sports"], brand: "fussball-stream" },
  { domain: "bundesliga-streams.net", region: ["de", "at"], contentType: ["sports"], brand: "bundesliga-streams" },
  { domain: "deinesport.stream", region: ["de", "at", "ch"], contentType: ["sports"], brand: "deinesport" },
  { domain: "mp3.de.pirate", region: ["de", "at", "ch"], contentType: ["music"], brand: "mp3de-pirate" },

  // =====================================================================
  // ===== ITALIAN REGION =====
  // =====================================================================
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
  // Additional Italian sites
  { domain: "casacinema.media", region: ["it"], contentType: ["movies", "series"], brand: "casacinema" },
  { domain: "filmsenzalimiti.name", region: ["it"], contentType: ["movies", "series"], brand: "filmsenzalimiti" },
  { domain: "italiafilm.art", region: ["it"], contentType: ["movies", "series"], brand: "italiafilm" },
  { domain: "staserainfilm.com", region: ["it"], contentType: ["movies", "series"], brand: "staserainfilm" },
  { domain: "animesaturn.tv", region: ["it"], contentType: ["series"], brand: "animesaturn" },
  { domain: "animeworld.so", region: ["it"], contentType: ["series"], brand: "animeworld" },
  { domain: "tntvillage.scambioetico.org", region: ["it"], contentType: ["movies", "series", "software", "music"], brand: "tntvillage" },
  { domain: "ilcorsaronero.info", region: ["it"], contentType: ["movies", "series", "software", "music"], brand: "ilcorsaronero" },
  { domain: "calcioinstreaming.com", region: ["it"], contentType: ["sports"], brand: "calcioinstreaming" },
  { domain: "rojadirectaenvivo.club", region: ["it"], contentType: ["sports"], brand: "rojadirecta-it" },
  { domain: "calciostreaming.net", region: ["it"], contentType: ["sports"], brand: "calciostreaming" },
  { domain: "seriea-stream.live", region: ["it"], contentType: ["sports"], brand: "serieastream" },
  { domain: "sportitalia.stream", region: ["it"], contentType: ["sports"], brand: "sportitalia-stream" },

  // =====================================================================
  // ===== TURKISH REGION =====
  // =====================================================================
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
  // Additional Turkish sites
  { domain: "dizipal730.com", region: ["tr"], contentType: ["series"], brand: "dizipal" },
  { domain: "filmizle2022.info", region: ["tr"], contentType: ["movies"], brand: "filmizle2022" },
  { domain: "indirmeden-filmizle.com", region: ["tr"], contentType: ["movies", "series"], brand: "indirmeden" },
  { domain: "sinefilm.cc", region: ["tr"], contentType: ["movies", "series"], brand: "sinefilm" },
  { domain: "fullfilmizle.net", region: ["tr"], contentType: ["movies"], brand: "fullfilmizle" },
  { domain: "720pizle.org", region: ["tr"], contentType: ["movies"], brand: "720pizle" },
  { domain: "turkanime.co", region: ["tr"], contentType: ["series"], brand: "turkanime" },
  { domain: "dizilla.club", region: ["tr"], contentType: ["series"], brand: "dizilla" },
  { domain: "diziyo.club", region: ["tr"], contentType: ["series"], brand: "diziyo" },
  { domain: "canlidizi.net", region: ["tr"], contentType: ["series"], brand: "canlidizi" },
  { domain: "justintvs.net", region: ["tr"], contentType: ["sports"], brand: "justintvs" },
  { domain: "matbet.tv", region: ["tr"], contentType: ["sports"], brand: "matbet-stream" },
  { domain: "canlimaclive.com", region: ["tr"], contentType: ["sports"], brand: "canlimaclive" },
  { domain: "mackolik.stream", region: ["tr"], contentType: ["sports"], brand: "mackolik-stream" },
  { domain: "idmantvhd.com", region: ["tr"], contentType: ["sports"], brand: "idmantvhd" },
  { domain: "sporttv.stream", region: ["tr"], contentType: ["sports"], brand: "sporttv-tr" },
  { domain: "tubidy.mobi", region: ["tr"], contentType: ["music"], brand: "tubidy-tr" },
  { domain: "mp3indir.biz", region: ["tr"], contentType: ["music"], brand: "mp3indir" },

  // =====================================================================
  // ===== HEBREW / ISRAELI REGION =====
  // =====================================================================
  { domain: "sdarot.tv", region: ["il"], contentType: ["series"], brand: "sdarot" },
  { domain: "seret.co.il", region: ["il"], contentType: ["movies"], brand: "seret" },
  { domain: "sratim.tv", region: ["il"], contentType: ["movies", "series"], brand: "sratim" },
  { domain: "topstreams.live", region: ["il"], contentType: ["sports"], brand: "topstreams" },
  { domain: "israelserials.com", region: ["il"], contentType: ["series"], brand: "israelserials" },
  { domain: "sadot-tv.com", region: ["il"], contentType: ["series"], brand: "sadot-tv" },
  // Additional Israeli sites
  { domain: "sdarot.world", region: ["il"], contentType: ["series"], brand: "sdarot" },
  { domain: "seretil.com", region: ["il"], contentType: ["movies", "series"], brand: "seretil" },
  { domain: "israelfilms.co.il", region: ["il"], contentType: ["movies"], brand: "israelfilms" },
  { domain: "sratimtv.com", region: ["il"], contentType: ["movies", "series"], brand: "sratim" },
  { domain: "animeisrael.com", region: ["il"], contentType: ["series"], brand: "animeisrael" },
  { domain: "sportlive.co.il", region: ["il"], contentType: ["sports"], brand: "sportlive-il" },
  { domain: "hebrewsport.stream", region: ["il"], contentType: ["sports"], brand: "hebrewsport" },
  { domain: "premierleague.co.il", region: ["il"], contentType: ["sports"], brand: "premier-il" },
  { domain: "ligat-haal.stream", region: ["il"], contentType: ["sports"], brand: "ligathaal" },
  { domain: "musicil.co.il", region: ["il"], contentType: ["music"], brand: "musicil" },
  { domain: "warez.co.il", region: ["il"], contentType: ["software"], brand: "warez-il" },

  // =====================================================================
  // ===== PORTUGUESE / BRAZILIAN REGION (br, pt) =====
  // =====================================================================
  { domain: "superflix.vc", region: ["br", "pt"], contentType: ["movies", "series"], brand: "superflix" },
  { domain: "topflix.tv", region: ["br", "pt"], contentType: ["movies", "series"], brand: "topflix" },
  { domain: "redecanais.la", region: ["br", "pt"], contentType: ["movies", "series", "sports"], brand: "redecanais" },
  { domain: "megafilmeshd.blog", region: ["br", "pt"], contentType: ["movies", "series"], brand: "megafilmeshd" },
  { domain: "filmesonlinegratis.com", region: ["br", "pt"], contentType: ["movies", "series"], brand: "filmesonlinegratis" },
  { domain: "assistirfilmeshd.com", region: ["br"], contentType: ["movies", "series"], brand: "assistirfilmeshd" },
  { domain: "vizer.tv", region: ["br", "pt"], contentType: ["movies", "series"], brand: "vizer" },
  { domain: "netcine.co", region: ["br"], contentType: ["movies", "series"], brand: "netcine" },
  { domain: "pobreflix.biz", region: ["br"], contentType: ["movies", "series"], brand: "pobreflix" },
  { domain: "livetv.sx", region: ["br"], contentType: ["sports"], brand: "livetv" },
  { domain: "futemax.gratis", region: ["br"], contentType: ["sports"], brand: "futemax" },
  // Additional Brazilian/Portuguese sites
  { domain: "filmeshd.org", region: ["br", "pt"], contentType: ["movies", "series"], brand: "filmeshd" },
  { domain: "assistirfilmesonlinehd.com", region: ["br"], contentType: ["movies", "series"], brand: "assistirfilmesonlinehd" },
  { domain: "cinemaonlinehd.com", region: ["br"], contentType: ["movies", "series"], brand: "cinemaonlinehd" },
  { domain: "tuaseriesonline.com", region: ["br", "pt"], contentType: ["series"], brand: "tuaseriesonline" },
  { domain: "seriesflix.com.br", region: ["br"], contentType: ["series"], brand: "seriesflix-br" },
  { domain: "gofilmes.me", region: ["br", "pt"], contentType: ["movies", "series"], brand: "gofilmes" },
  { domain: "brasilplay.tv", region: ["br"], contentType: ["movies", "series"], brand: "brasilplay" },
  { domain: "animeszone.net", region: ["br", "pt"], contentType: ["series"], brand: "animeszone" },
  { domain: "animesonlinehd.vip", region: ["br", "pt"], contentType: ["series"], brand: "animesonlinehd" },
  { domain: "anitube.site", region: ["br", "pt"], contentType: ["series"], brand: "anitube" },
  { domain: "futebolplayhd.com", region: ["br"], contentType: ["sports"], brand: "futebolplayhd" },
  { domain: "multicanais.com", region: ["br"], contentType: ["sports"], brand: "multicanais" },
  { domain: "canaisplay.com", region: ["br"], contentType: ["sports"], brand: "canaisplay" },
  { domain: "futebolaovivo.stream", region: ["br"], contentType: ["sports"], brand: "futebolaovivo" },
  { domain: "assistafutebol.com", region: ["br"], contentType: ["sports"], brand: "assistafutebol" },
  { domain: "brasilfutebol.live", region: ["br"], contentType: ["sports"], brand: "brasilfutebol" },
  { domain: "baixarmusicas.info", region: ["br", "pt"], contentType: ["music"], brand: "baixarmusicas" },
  { domain: "palcomp3.com.pirate", region: ["br"], contentType: ["music"], brand: "palcomp3-pirate" },
  // Portugal-specific
  { domain: "tugaflix.best", region: ["pt"], contentType: ["movies", "series"], brand: "tugaflix" },
  { domain: "filmespt.org", region: ["pt"], contentType: ["movies", "series"], brand: "filmespt" },
  { domain: "sporttvlive.pt", region: ["pt"], contentType: ["sports"], brand: "sporttv-pt" },

  // =====================================================================
  // ===== HINDI / INDIAN REGION =====
  // =====================================================================
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
  // Additional Indian sites
  { domain: "tamilyogi.best", region: ["in"], contentType: ["movies"], brand: "tamilyogi" },
  { domain: "kuttymovies.com", region: ["in"], contentType: ["movies"], brand: "kuttymovies" },
  { domain: "ibomma.day", region: ["in"], contentType: ["movies"], brand: "ibomma" },
  { domain: "moviesda.guru", region: ["in"], contentType: ["movies"], brand: "moviesda" },
  { domain: "isaimini.day", region: ["in"], contentType: ["movies"], brand: "isaimini" },
  { domain: "moviesflix.day", region: ["in"], contentType: ["movies", "series"], brand: "moviesflix" },
  { domain: "cinevood.fans", region: ["in"], contentType: ["movies"], brand: "cinevood" },
  { domain: "hdmovie2.casa", region: ["in"], contentType: ["movies", "series"], brand: "hdmovie2" },
  { domain: "9xmovies.baby", region: ["in"], contentType: ["movies"], brand: "9xmovies" },
  { domain: "skymovieshd.wiki", region: ["in"], contentType: ["movies"], brand: "skymovieshd" },
  { domain: "afilmywap.com", region: ["in"], contentType: ["movies"], brand: "afilmywap" },
  { domain: "uwatchfree.be", region: ["in"], contentType: ["movies", "series"], brand: "uwatchfree" },
  { domain: "hdhub4u.monster", region: ["in"], contentType: ["movies"], brand: "hdhub4u" },
  { domain: "mkvcage.day", region: ["in"], contentType: ["movies"], brand: "mkvcage" },
  { domain: "themoviesflix.ac", region: ["in"], contentType: ["movies", "series"], brand: "themoviesflix" },
  { domain: "crictime.com", region: ["in", "pk", "bd", "lk"], contentType: ["sports"], brand: "crictime" },
  { domain: "smartcric.com", region: ["in", "pk", "bd", "lk"], contentType: ["sports"], brand: "smartcric" },
  { domain: "hotstar.pirate", region: ["in"], contentType: ["sports"], brand: "hotstar-pirate" },
  { domain: "iplstream.live", region: ["in", "pk", "bd", "lk"], contentType: ["sports"], brand: "iplstream" },
  { domain: "touchcric.com", region: ["in", "pk", "bd", "lk"], contentType: ["sports"], brand: "touchcric" },
  { domain: "mobilecric.com", region: ["in", "pk", "bd", "lk"], contentType: ["sports"], brand: "mobilecric" },
  { domain: "starmusiq.com", region: ["in"], contentType: ["music"], brand: "starmusiq" },
  { domain: "masstamilan.dev", region: ["in"], contentType: ["music"], brand: "masstamilan" },
  { domain: "mp3quran.net", region: ["in"], contentType: ["music"], brand: "mp3quran" },

  // =====================================================================
  // ===== PAKISTANI REGION =====
  // =====================================================================
  { domain: "dramaonline.pk", region: ["pk"], contentType: ["series"], brand: "dramaonline-pk" },
  { domain: "filmyzilla.pk", region: ["pk"], contentType: ["movies"], brand: "filmyzilla-pk" },
  { domain: "humnews.pirate", region: ["pk"], contentType: ["series"], brand: "humnews-pirate" },
  { domain: "pakdrama.stream", region: ["pk"], contentType: ["series"], brand: "pakdrama" },
  { domain: "cricketpk.stream", region: ["pk"], contentType: ["sports"], brand: "cricketpk" },
  { domain: "ptvlive.stream", region: ["pk"], contentType: ["sports"], brand: "ptvlive-pirate" },
  { domain: "geosuper.stream", region: ["pk"], contentType: ["sports"], brand: "geosuper-stream" },

  // =====================================================================
  // ===== BANGLADESHI REGION =====
  // =====================================================================
  { domain: "bongobdnews.stream", region: ["bd"], contentType: ["movies", "series"], brand: "bongobdnews" },
  { domain: "banglamovies.stream", region: ["bd"], contentType: ["movies"], brand: "banglamovies" },
  { domain: "natokstream.com", region: ["bd"], contentType: ["series"], brand: "natokstream" },
  { domain: "cricketbd.stream", region: ["bd"], contentType: ["sports"], brand: "cricketbd" },
  { domain: "banglamusic.net", region: ["bd"], contentType: ["music"], brand: "banglamusic" },

  // =====================================================================
  // ===== POLISH REGION =====
  // =====================================================================
  { domain: "zalukaj.com", region: ["pl"], contentType: ["movies", "series"], brand: "zalukaj" },
  { domain: "filman.cc", region: ["pl"], contentType: ["movies", "series"], brand: "filman" },
  { domain: "zerion.cc", region: ["pl"], contentType: ["movies", "series"], brand: "zerion" },
  { domain: "cda-hd.co", region: ["pl"], contentType: ["movies", "series"], brand: "cda-hd" },
  { domain: "fili.cc", region: ["pl"], contentType: ["movies", "series"], brand: "fili" },
  { domain: "filmweb-online.pl", region: ["pl"], contentType: ["movies", "series"], brand: "filmweb-online" },
  { domain: "sflix.pl", region: ["pl"], contentType: ["movies", "series"], brand: "sflix-pl" },
  { domain: "obejrzyj.to", region: ["pl"], contentType: ["movies", "series"], brand: "obejrzyj" },
  { domain: "vizjer.pl", region: ["pl"], contentType: ["movies", "series"], brand: "vizjer" },
  // Additional Polish sites
  { domain: "cda-filmy.cc", region: ["pl"], contentType: ["movies", "series"], brand: "cda-filmy" },
  { domain: "filmiki.cc", region: ["pl"], contentType: ["movies", "series"], brand: "filmiki" },
  { domain: "ekinopl.com", region: ["pl"], contentType: ["movies", "series"], brand: "ekinopl" },
  { domain: "kinomaniak.pl", region: ["pl"], contentType: ["movies", "series"], brand: "kinomaniak" },
  { domain: "alltube.pl", region: ["pl"], contentType: ["movies", "series"], brand: "alltube" },
  { domain: "serialeonline.pl", region: ["pl"], contentType: ["series"], brand: "serialeonline" },
  { domain: "shinden.pl", region: ["pl"], contentType: ["series"], brand: "shinden" },
  { domain: "desu-online.pl", region: ["pl"], contentType: ["series"], brand: "desu-online" },
  { domain: "sportstream.pl", region: ["pl"], contentType: ["sports"], brand: "sportstream-pl" },
  { domain: "meczonline.pl", region: ["pl"], contentType: ["sports"], brand: "meczonline" },
  { domain: "ekstraklasa.stream", region: ["pl"], contentType: ["sports"], brand: "ekstraklasa-stream" },
  { domain: "pilkastream.pl", region: ["pl"], contentType: ["sports"], brand: "pilkastream" },
  { domain: "mp3.pl.pirate", region: ["pl"], contentType: ["music"], brand: "mp3pl-pirate" },
  { domain: "torrentpl.com", region: ["pl"], contentType: ["movies", "series", "software", "music"], brand: "torrentpl" },

  // =====================================================================
  // ===== GREEK / CYPRUS REGION =====
  // =====================================================================
  { domain: "tenies-online.best", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "tenies-online" },
  { domain: "tainiomaniac.com", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "tainiomaniac" },
  { domain: "tainiesonline.best", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "tainiesonline" },
  { domain: "gamatotv.info", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "gamatotv" },
  { domain: "greeksubtitles.info", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "greeksubtitles" },
  // Additional Greek sites
  { domain: "tainiomania.org", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "tainiomania" },
  { domain: "metatainies.info", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "metatainies" },
  { domain: "greek-movies.com", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "greek-movies" },
  { domain: "oipeirates.online", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "oipeirates" },
  { domain: "xrysoi.se", region: ["gr", "cy"], contentType: ["movies", "series", "software", "music"], brand: "xrysoi" },
  { domain: "ellinikestainiess.com", region: ["gr", "cy"], contentType: ["movies", "series"], brand: "ellinikestainiess" },
  { domain: "animegr.net", region: ["gr", "cy"], contentType: ["series"], brand: "animegr" },
  { domain: "greeksport.stream", region: ["gr", "cy"], contentType: ["sports"], brand: "greeksport" },
  { domain: "superleague.stream", region: ["gr", "cy"], contentType: ["sports"], brand: "superleague-stream" },
  { domain: "novasport.stream", region: ["gr", "cy"], contentType: ["sports"], brand: "novasport-stream" },
  { domain: "greekmusic.pirate", region: ["gr", "cy"], contentType: ["music"], brand: "greekmusic-pirate" },

  // =====================================================================
  // ===== JAPANESE REGION =====
  // =====================================================================
  { domain: "b9good.com", region: ["jp"], contentType: ["series"], brand: "b9good" },
  { domain: "anitube.biz", region: ["jp"], contentType: ["series"], brand: "anitube-jp" },
  { domain: "animeflv.bz", region: ["jp"], contentType: ["series"], brand: "animeflv-jp" },
  { domain: "kissanime.com.ru", region: ["jp"], contentType: ["series"], brand: "kissanime" },
  { domain: "9anime.vc", region: ["jp"], contentType: ["series"], brand: "9anime-jp" },
  { domain: "gogoanime.film", region: ["jp"], contentType: ["series"], brand: "gogoanime-jp" },
  { domain: "animefreak.tv", region: ["jp"], contentType: ["series"], brand: "animefreak" },
  { domain: "mangadex.org", region: ["jp"], contentType: ["series"], brand: "mangadex" },
  { domain: "mangakakalot.com", region: ["jp"], contentType: ["series"], brand: "mangakakalot" },
  { domain: "mangahere.cc", region: ["jp"], contentType: ["series"], brand: "mangahere" },
  { domain: "rawmanga.site", region: ["jp"], contentType: ["series"], brand: "rawmanga" },
  { domain: "mangaraw.org", region: ["jp"], contentType: ["series"], brand: "mangaraw" },
  { domain: "animepahe.ru", region: ["jp"], contentType: ["series"], brand: "animepahe" },
  { domain: "kickassanime.ro", region: ["jp"], contentType: ["series"], brand: "kickassanime" },
  { domain: "animedao.to", region: ["jp"], contentType: ["series"], brand: "animedao" },
  { domain: "dramacool.hr", region: ["jp", "kr"], contentType: ["series"], brand: "dramacool" },
  { domain: "dramanice.movie", region: ["jp", "kr"], contentType: ["series"], brand: "dramanice" },
  { domain: "jpfilm.stream", region: ["jp"], contentType: ["movies"], brand: "jpfilm" },
  { domain: "jpsports.stream", region: ["jp"], contentType: ["sports"], brand: "jpsports" },
  { domain: "npb-stream.live", region: ["jp"], contentType: ["sports"], brand: "npb-stream" },
  { domain: "jpmusic.pirate", region: ["jp"], contentType: ["music"], brand: "jpmusic-pirate" },
  { domain: "nyaa.si", region: ["jp"], contentType: ["series", "software", "music"], brand: "nyaa" },

  // =====================================================================
  // ===== KOREAN REGION =====
  // =====================================================================
  { domain: "dramahood.com", region: ["kr"], contentType: ["series"], brand: "dramahood" },
  { domain: "kissasian.li", region: ["kr"], contentType: ["series"], brand: "kissasian" },
  { domain: "kshowonline.com", region: ["kr"], contentType: ["series"], brand: "kshowonline" },
  { domain: "myasiantv.cc", region: ["kr"], contentType: ["series"], brand: "myasiantv" },
  { domain: "asianembed.io", region: ["kr"], contentType: ["series"], brand: "asianembed" },
  { domain: "newasiantv.pro", region: ["kr"], contentType: ["series"], brand: "newasiantv" },
  { domain: "koreandrama.org", region: ["kr"], contentType: ["series"], brand: "koreandrama" },
  { domain: "viewasian.tv", region: ["kr"], contentType: ["series"], brand: "viewasian" },
  { domain: "ondramanice.tv", region: ["kr"], contentType: ["series"], brand: "ondramanice" },
  { domain: "kdrama.stream", region: ["kr"], contentType: ["series"], brand: "kdrama" },
  { domain: "ondemandkorea.pirate", region: ["kr"], contentType: ["series"], brand: "ondemandkorea-pirate" },
  { domain: "koreafilm.stream", region: ["kr"], contentType: ["movies"], brand: "koreafilm" },
  { domain: "webtoon.pirate", region: ["kr"], contentType: ["series"], brand: "webtoon-pirate" },
  { domain: "manwha.pirate", region: ["kr"], contentType: ["series"], brand: "manwha-pirate" },
  { domain: "kbl-stream.live", region: ["kr"], contentType: ["sports"], brand: "kbl-stream" },
  { domain: "kleague.stream", region: ["kr"], contentType: ["sports"], brand: "kleague-stream" },
  { domain: "koreasport.stream", region: ["kr"], contentType: ["sports"], brand: "koreasport" },
  { domain: "kpop-dl.com", region: ["kr"], contentType: ["music"], brand: "kpop-dl" },
  { domain: "kpopmusic.pirate", region: ["kr"], contentType: ["music"], brand: "kpopmusic-pirate" },

  // =====================================================================
  // ===== CHINESE REGION (cn, tw, hk) =====
  // =====================================================================
  { domain: "ifvod.tv", region: ["cn", "tw", "hk"], contentType: ["movies", "series"], brand: "ifvod" },
  { domain: "duboku.tv", region: ["cn", "tw", "hk"], contentType: ["movies", "series"], brand: "duboku" },
  { domain: "btnull.org", region: ["cn"], contentType: ["movies", "series"], brand: "btnull" },
  { domain: "nfmovies.com", region: ["cn"], contentType: ["movies", "series"], brand: "nfmovies" },
  { domain: "cupfox.app", region: ["cn", "tw", "hk"], contentType: ["movies", "series"], brand: "cupfox" },
  { domain: "ddys.art", region: ["cn"], contentType: ["movies", "series"], brand: "ddys" },
  { domain: "libvio.me", region: ["cn"], contentType: ["movies", "series"], brand: "libvio" },
  { domain: "gimy.ai", region: ["cn", "tw", "hk"], contentType: ["movies", "series"], brand: "gimy" },
  { domain: "movieffm.net", region: ["cn", "tw", "hk"], contentType: ["movies", "series"], brand: "movieffm" },
  { domain: "dygangs.me", region: ["cn"], contentType: ["movies", "series"], brand: "dygangs" },
  { domain: "bilibili.pirate", region: ["cn"], contentType: ["series"], brand: "bilibili-pirate" },
  { domain: "acfun.pirate", region: ["cn"], contentType: ["series"], brand: "acfun-pirate" },
  { domain: "manhua.pirate", region: ["cn"], contentType: ["series"], brand: "manhua-pirate" },
  { domain: "cnmusic.pirate", region: ["cn"], contentType: ["music"], brand: "cnmusic-pirate" },
  { domain: "cnsport.stream", region: ["cn"], contentType: ["sports"], brand: "cnsport-stream" },
  { domain: "cba-stream.live", region: ["cn"], contentType: ["sports"], brand: "cba-stream" },
  // Taiwan-specific
  { domain: "dramasq.biz", region: ["tw", "hk"], contentType: ["series"], brand: "dramasq" },
  { domain: "momovod.com", region: ["tw", "hk"], contentType: ["movies", "series"], brand: "momovod" },
  { domain: "tw-sport.stream", region: ["tw"], contentType: ["sports"], brand: "tw-sport" },

  // =====================================================================
  // ===== VIETNAMESE REGION =====
  // =====================================================================
  { domain: "phimmoi.net", region: ["vn"], contentType: ["movies", "series"], brand: "phimmoi" },
  { domain: "phimhay.co", region: ["vn"], contentType: ["movies", "series"], brand: "phimhay" },
  { domain: "motphim.cc", region: ["vn"], contentType: ["movies", "series"], brand: "motphim" },
  { domain: "ophim.vip", region: ["vn"], contentType: ["movies", "series"], brand: "ophim" },
  { domain: "fptplay.pirate", region: ["vn"], contentType: ["movies", "series"], brand: "fptplay-pirate" },
  { domain: "tvhay.org", region: ["vn"], contentType: ["movies", "series"], brand: "tvhay" },
  { domain: "fullphim.net", region: ["vn"], contentType: ["movies", "series"], brand: "fullphim" },
  { domain: "dongphim.net", region: ["vn"], contentType: ["movies", "series"], brand: "dongphim" },
  { domain: "phimvn.stream", region: ["vn"], contentType: ["movies", "series"], brand: "phimvn" },
  { domain: "bilutv.org", region: ["vn"], contentType: ["movies", "series"], brand: "bilutv" },
  { domain: "khoaitv.org", region: ["vn"], contentType: ["movies", "series"], brand: "khoaitv" },
  { domain: "animevn.so", region: ["vn"], contentType: ["series"], brand: "animevn" },
  { domain: "vuighe.net", region: ["vn"], contentType: ["series"], brand: "vuighe" },
  { domain: "xoilac.tv", region: ["vn"], contentType: ["sports"], brand: "xoilac" },
  { domain: "vebo.live", region: ["vn"], contentType: ["sports"], brand: "vebo" },
  { domain: "cakhia.link", region: ["vn"], contentType: ["sports"], brand: "cakhia" },
  { domain: "tructiepbongda.stream", region: ["vn"], contentType: ["sports"], brand: "tructiepbongda" },
  { domain: "mitom.tv", region: ["vn"], contentType: ["sports"], brand: "mitom" },
  { domain: "chiasenhac.vn", region: ["vn"], contentType: ["music"], brand: "chiasenhac" },
  { domain: "nhaccuatui.pirate", region: ["vn"], contentType: ["music"], brand: "nhaccuatui-pirate" },

  // =====================================================================
  // ===== THAI REGION =====
  // =====================================================================
  { domain: "doonung.com", region: ["th"], contentType: ["movies", "series"], brand: "doonung" },
  { domain: "movie2free.com", region: ["th"], contentType: ["movies", "series"], brand: "movie2free" },
  { domain: "037hdmovie.com", region: ["th"], contentType: ["movies"], brand: "037hdmovie" },
  { domain: "doomovie-hd.com", region: ["th"], contentType: ["movies", "series"], brand: "doomovie-hd" },
  { domain: "nungdee.com", region: ["th"], contentType: ["movies"], brand: "nungdee" },
  { domain: "nungnew.com", region: ["th"], contentType: ["movies", "series"], brand: "nungnew" },
  { domain: "serieshd.cc", region: ["th"], contentType: ["series"], brand: "serieshd-th" },
  { domain: "thaifilm.stream", region: ["th"], contentType: ["movies", "series"], brand: "thaifilm" },
  { domain: "lakorn-streaming.com", region: ["th"], contentType: ["series"], brand: "lakorn-th" },
  { domain: "anime-thai.com", region: ["th"], contentType: ["series"], brand: "anime-thai" },
  { domain: "dooseries.com", region: ["th"], contentType: ["series"], brand: "dooseries" },
  { domain: "thaisport.stream", region: ["th"], contentType: ["sports"], brand: "thaisport" },
  { domain: "muaythai.stream", region: ["th"], contentType: ["sports"], brand: "muaythai-stream" },
  { domain: "thaileague.stream", region: ["th"], contentType: ["sports"], brand: "thaileague-stream" },
  { domain: "siamsport.stream", region: ["th"], contentType: ["sports"], brand: "siamsport-stream" },
  { domain: "mp3thai.com", region: ["th"], contentType: ["music"], brand: "mp3thai" },

  // =====================================================================
  // ===== INDONESIAN / MALAYSIAN REGION =====
  // =====================================================================
  { domain: "lk21.org", region: ["id", "my"], contentType: ["movies", "series"], brand: "lk21" },
  { domain: "indoxxi.bz", region: ["id", "my"], contentType: ["movies", "series"], brand: "indoxxi" },
  { domain: "rebahin.com", region: ["id", "my"], contentType: ["movies", "series"], brand: "rebahin" },
  { domain: "nontondrama.com", region: ["id", "my"], contentType: ["series"], brand: "nontondrama" },
  { domain: "gudangmovies21.org", region: ["id"], contentType: ["movies", "series"], brand: "gudangmovies21" },
  { domain: "cinema21.pirate", region: ["id"], contentType: ["movies"], brand: "cinema21-pirate" },
  { domain: "filmapik.club", region: ["id", "my"], contentType: ["movies", "series"], brand: "filmapik" },
  { domain: "bioskopkeren.cam", region: ["id", "my"], contentType: ["movies", "series"], brand: "bioskopkeren" },
  { domain: "drakorindo.cc", region: ["id", "my"], contentType: ["series"], brand: "drakorindo" },
  { domain: "dramaqu.id", region: ["id", "my"], contentType: ["series"], brand: "dramaqu" },
  { domain: "samehadaku.run", region: ["id", "my"], contentType: ["series"], brand: "samehadaku" },
  { domain: "oploverz.cam", region: ["id", "my"], contentType: ["series"], brand: "oploverz" },
  { domain: "kusonime.com", region: ["id", "my"], contentType: ["series"], brand: "kusonime" },
  { domain: "animeindo.to", region: ["id", "my"], contentType: ["series"], brand: "animeindo" },
  { domain: "yalla-shoot.id", region: ["id"], contentType: ["sports"], brand: "yalashoot-id" },
  { domain: "bola-live.stream", region: ["id", "my"], contentType: ["sports"], brand: "bolalive" },
  { domain: "ligaindonesia.stream", region: ["id"], contentType: ["sports"], brand: "ligaindonesia" },
  { domain: "nontonfootball.com", region: ["id", "my"], contentType: ["sports"], brand: "nontonfootball" },
  { domain: "idnstreams.com", region: ["id"], contentType: ["sports"], brand: "idnstreams" },
  { domain: "laguindo.pirate", region: ["id"], contentType: ["music"], brand: "laguindo-pirate" },
  // Malaysia-specific
  { domain: "kepalabergetar.cc", region: ["my"], contentType: ["series"], brand: "kepalabergetar" },
  { domain: "tontondrama.com", region: ["my"], contentType: ["series"], brand: "tontondrama" },
  { domain: "dfm2u.com", region: ["my"], contentType: ["series"], brand: "dfm2u" },
  { domain: "myvideo.stream.my", region: ["my"], contentType: ["movies", "series"], brand: "myvideo-my" },
  { domain: "mysport.stream", region: ["my"], contentType: ["sports"], brand: "mysport-stream" },

  // =====================================================================
  // ===== PHILIPPINE REGION =====
  // =====================================================================
  { domain: "pinoymoviepedia.ru", region: ["ph"], contentType: ["movies", "series"], brand: "pinoymoviepedia" },
  { domain: "pinoytv.pirate", region: ["ph"], contentType: ["series"], brand: "pinoytv-pirate" },
  { domain: "tambayan.pirate", region: ["ph"], contentType: ["series"], brand: "tambayan-pirate" },
  { domain: "pinoytambayan.su", region: ["ph"], contentType: ["series"], brand: "pinoytambayan" },
  { domain: "lambinganreplay.su", region: ["ph"], contentType: ["series"], brand: "lambinganreplay" },
  { domain: "pinoytvstream.com", region: ["ph"], contentType: ["series"], brand: "pinoytvstream" },
  { domain: "pbalive.stream", region: ["ph"], contentType: ["sports"], brand: "pbalive" },
  { domain: "pbsport.stream", region: ["ph"], contentType: ["sports"], brand: "pbsport" },

  // =====================================================================
  // ===== PERSIAN / IRANIAN REGION =====
  // =====================================================================
  { domain: "filmnet.pirate", region: ["ir"], contentType: ["movies", "series"], brand: "filmnet-pirate" },
  { domain: "namava.pirate", region: ["ir"], contentType: ["movies", "series"], brand: "namava-pirate" },
  { domain: "filimo.pirate", region: ["ir"], contentType: ["movies", "series"], brand: "filimo-pirate" },
  { domain: "cinematicket.org", region: ["ir"], contentType: ["movies"], brand: "cinematicket" },
  { domain: "digimoviez.com", region: ["ir"], contentType: ["movies", "series"], brand: "digimoviez" },
  { domain: "iranproud.com", region: ["ir"], contentType: ["movies", "series"], brand: "iranproud" },
  { domain: "filmhaye.com", region: ["ir"], contentType: ["movies", "series"], brand: "filmhaye" },
  { domain: "tinymoviez.site", region: ["ir"], contentType: ["movies", "series"], brand: "tinymoviez" },
  { domain: "uptv.pirate", region: ["ir"], contentType: ["movies", "series"], brand: "uptv-pirate" },
  { domain: "farsiland.com", region: ["ir"], contentType: ["movies", "series"], brand: "farsiland" },
  { domain: "30nama.com", region: ["ir"], contentType: ["movies", "series"], brand: "30nama" },
  { domain: "persianfilm.stream", region: ["ir"], contentType: ["movies", "series"], brand: "persianfilm" },
  { domain: "serial.pirate.ir", region: ["ir"], contentType: ["series"], brand: "serial-ir" },
  { domain: "animelist.ir", region: ["ir"], contentType: ["series"], brand: "animelist-ir" },
  { domain: "persianleague.stream", region: ["ir"], contentType: ["sports"], brand: "persianleague" },
  { domain: "varzesh3.pirate", region: ["ir"], contentType: ["sports"], brand: "varzesh3-pirate" },
  { domain: "footballiran.stream", region: ["ir"], contentType: ["sports"], brand: "footballiran" },
  { domain: "radiojavan.pirate", region: ["ir"], contentType: ["music"], brand: "radiojavan-pirate" },
  { domain: "music-fa.com", region: ["ir"], contentType: ["music"], brand: "musicfa" },

  // =====================================================================
  // ===== ROMANIAN / MOLDOVAN REGION =====
  // =====================================================================
  { domain: "filmeserialeonline.org", region: ["ro", "md"], contentType: ["movies", "series"], brand: "filmeserialeonline" },
  { domain: "filmeonline.biz", region: ["ro", "md"], contentType: ["movies", "series"], brand: "filmeonline" },
  { domain: "cinemagia.pirate", region: ["ro", "md"], contentType: ["movies", "series"], brand: "cinemagia-pirate" },
  { domain: "filmeonline2024.com", region: ["ro", "md"], contentType: ["movies", "series"], brand: "filmeonline2024" },
  { domain: "serialeturcesti.net", region: ["ro", "md"], contentType: ["series"], brand: "serialeturcesti" },
  { domain: "serialeonline.org", region: ["ro", "md"], contentType: ["series"], brand: "serialeonline-ro" },
  { domain: "topfilmeonline.com", region: ["ro", "md"], contentType: ["movies", "series"], brand: "topfilmeonline" },
  { domain: "animeromano.com", region: ["ro", "md"], contentType: ["series"], brand: "animeromano" },
  { domain: "vezifilme.org", region: ["ro", "md"], contentType: ["movies", "series"], brand: "vezifilme" },
  { domain: "filme-bune.org", region: ["ro", "md"], contentType: ["movies", "series"], brand: "filme-bune" },
  { domain: "filmehdgratis.com", region: ["ro", "md"], contentType: ["movies", "series"], brand: "filmehdgratis" },
  { domain: "digi-sport.stream", region: ["ro", "md"], contentType: ["sports"], brand: "digisport-stream" },
  { domain: "ligal.stream", region: ["ro", "md"], contentType: ["sports"], brand: "ligal-stream" },
  { domain: "romaniatv.stream", region: ["ro", "md"], contentType: ["sports"], brand: "romaniatv-stream" },
  { domain: "muzica-noua.com", region: ["ro", "md"], contentType: ["music"], brand: "muzicanoua" },

  // =====================================================================
  // ===== CZECH / SLOVAK REGION =====
  // =====================================================================
  { domain: "sledujufilmy.cz", region: ["cz", "sk"], contentType: ["movies", "series"], brand: "sledujufilmy" },
  { domain: "filmycz.stream", region: ["cz", "sk"], contentType: ["movies", "series"], brand: "filmycz" },
  { domain: "serialy.bombuj.si", region: ["cz", "sk"], contentType: ["series"], brand: "bombuj" },
  { domain: "onlinefilmy.org", region: ["cz", "sk"], contentType: ["movies", "series"], brand: "onlinefilmy" },
  { domain: "kukaj.to", region: ["cz", "sk"], contentType: ["movies", "series"], brand: "kukaj" },
  { domain: "pohadkar.cz", region: ["cz", "sk"], contentType: ["movies", "series"], brand: "pohadkar" },
  { domain: "webshare.cz", region: ["cz", "sk"], contentType: ["movies", "series", "software", "music"], brand: "webshare" },
  { domain: "serialysk.com", region: ["sk"], contentType: ["series"], brand: "serialysk" },
  { domain: "filmyonline.sk", region: ["sk"], contentType: ["movies", "series"], brand: "filmyonline-sk" },
  { domain: "streamcz.pirate", region: ["cz"], contentType: ["movies", "series"], brand: "streamcz-pirate" },
  { domain: "anime-cz.com", region: ["cz", "sk"], contentType: ["series"], brand: "anime-cz" },
  { domain: "sportcz.stream", region: ["cz", "sk"], contentType: ["sports"], brand: "sportcz" },
  { domain: "hokej.stream", region: ["cz", "sk"], contentType: ["sports"], brand: "hokej-stream" },
  { domain: "fotbal.stream", region: ["cz", "sk"], contentType: ["sports"], brand: "fotbal-stream" },

  // =====================================================================
  // ===== HUNGARIAN REGION =====
  // =====================================================================
  { domain: "filmezz.club", region: ["hu"], contentType: ["movies", "series"], brand: "filmezz" },
  { domain: "onlinefilmek.me", region: ["hu"], contentType: ["movies", "series"], brand: "onlinefilmek" },
  { domain: "mozicsillag.me", region: ["hu"], contentType: ["movies", "series"], brand: "mozicsillag" },
  { domain: "filmvilaga.com", region: ["hu"], contentType: ["movies", "series"], brand: "filmvilaga" },
  { domain: "indavideo.pirate", region: ["hu"], contentType: ["movies", "series"], brand: "indavideo-pirate" },
  { domain: "huncoolen.com", region: ["hu"], contentType: ["movies", "series"], brand: "huncoolen" },
  { domain: "ncore.pro", region: ["hu"], contentType: ["movies", "series", "software", "music"], brand: "ncore" },
  { domain: "sorozatjunkie.hu", region: ["hu"], contentType: ["series"], brand: "sorozatjunkie" },
  { domain: "animehun.com", region: ["hu"], contentType: ["series"], brand: "animehun" },
  { domain: "magyarsport.stream", region: ["hu"], contentType: ["sports"], brand: "magyarsport" },
  { domain: "nb1.stream", region: ["hu"], contentType: ["sports"], brand: "nb1-stream" },
  { domain: "sport1.stream.hu", region: ["hu"], contentType: ["sports"], brand: "sport1-hu" },
  { domain: "hunmusic.pirate", region: ["hu"], contentType: ["music"], brand: "hunmusic-pirate" },

  // =====================================================================
  // ===== SCANDINAVIAN REGION (se, no, dk, fi, is) =====
  // =====================================================================
  // Swedish
  { domain: "swefilmer.com", region: ["se"], contentType: ["movies", "series"], brand: "swefilmer" },
  { domain: "svenskafilmer.stream", region: ["se"], contentType: ["movies", "series"], brand: "svenskafilmer" },
  { domain: "filmkollen.se", region: ["se"], contentType: ["movies", "series"], brand: "filmkollen" },
  { domain: "sweflix.to", region: ["se"], contentType: ["movies", "series"], brand: "sweflix" },
  { domain: "dreamfilmhd.sh", region: ["se"], contentType: ["movies", "series"], brand: "dreamfilm" },
  { domain: "allsvenskan.stream", region: ["se"], contentType: ["sports"], brand: "allsvenskan-stream" },
  { domain: "swesport.stream", region: ["se"], contentType: ["sports"], brand: "swesport" },
  { domain: "shl.stream", region: ["se"], contentType: ["sports"], brand: "shl-stream" },
  // Norwegian
  { domain: "filmleite.com", region: ["no"], contentType: ["movies", "series"], brand: "filmleite" },
  { domain: "norskefilmer.stream", region: ["no"], contentType: ["movies", "series"], brand: "norskefilmer" },
  { domain: "nrkstream.pirate", region: ["no"], contentType: ["movies", "series"], brand: "nrk-pirate" },
  { domain: "norflix.stream", region: ["no"], contentType: ["movies", "series"], brand: "norflix" },
  { domain: "eliteserien.stream", region: ["no"], contentType: ["sports"], brand: "eliteserien-stream" },
  { domain: "norsksport.stream", region: ["no"], contentType: ["sports"], brand: "norsksport" },
  // Danish
  { domain: "filmstriben.pirate", region: ["dk"], contentType: ["movies", "series"], brand: "filmstriben-pirate" },
  { domain: "danskefilm.stream", region: ["dk"], contentType: ["movies", "series"], brand: "danskefilm" },
  { domain: "drstream.pirate", region: ["dk"], contentType: ["movies", "series"], brand: "dr-pirate" },
  { domain: "dkfilm.stream", region: ["dk"], contentType: ["movies", "series"], brand: "dkfilm" },
  { domain: "superliga.stream", region: ["dk"], contentType: ["sports"], brand: "superliga-stream" },
  { domain: "dansksport.stream", region: ["dk"], contentType: ["sports"], brand: "dansksport" },
  // Finnish
  { domain: "suomifilmi.stream", region: ["fi"], contentType: ["movies", "series"], brand: "suomifilmi" },
  { domain: "finfilm.stream", region: ["fi"], contentType: ["movies", "series"], brand: "finfilm" },
  { domain: "ylestream.pirate", region: ["fi"], contentType: ["movies", "series"], brand: "yle-pirate" },
  { domain: "elokuva.stream", region: ["fi"], contentType: ["movies", "series"], brand: "elokuva" },
  { domain: "veikkausliiga.stream", region: ["fi"], contentType: ["sports"], brand: "veikkausliiga-stream" },
  { domain: "suomisport.stream", region: ["fi"], contentType: ["sports"], brand: "suomisport" },
  { domain: "liiga.stream", region: ["fi"], contentType: ["sports"], brand: "liiga-stream" },
  // Icelandic
  { domain: "isfilm.stream", region: ["is"], contentType: ["movies", "series"], brand: "isfilm" },
  { domain: "issport.stream", region: ["is"], contentType: ["sports"], brand: "issport" },
  // Pan-Nordic
  { domain: "nordicsub.com", region: ["se", "no", "dk", "fi", "is"], contentType: ["movies", "series"], brand: "nordicsub" },
  { domain: "norsktorrent.eu", region: ["se", "no", "dk"], contentType: ["movies", "series", "software", "music"], brand: "norsktorrent" },

  // =====================================================================
  // ===== DUTCH / BELGIAN REGION (nl, be) =====
  // =====================================================================
  { domain: "filmkijken.eu", region: ["nl", "be"], contentType: ["movies", "series"], brand: "filmkijken" },
  { domain: "dutchflix.stream", region: ["nl", "be"], contentType: ["movies", "series"], brand: "dutchflix" },
  { domain: "filmpjes.stream", region: ["nl", "be"], contentType: ["movies", "series"], brand: "filmpjes" },
  { domain: "nlstream.to", region: ["nl", "be"], contentType: ["movies", "series"], brand: "nlstream" },
  { domain: "eersteklas-streams.nl", region: ["nl", "be"], contentType: ["movies", "series"], brand: "eersteklas" },
  { domain: "nlfilms.stream", region: ["nl", "be"], contentType: ["movies", "series"], brand: "nlfilms" },
  { domain: "seriekijken.com", region: ["nl", "be"], contentType: ["series"], brand: "seriekijken" },
  { domain: "animeultima.eu", region: ["nl", "be"], contentType: ["series"], brand: "animeultima-nl" },
  { domain: "eredivisie.stream", region: ["nl"], contentType: ["sports"], brand: "eredivisie-stream" },
  { domain: "nlsport.stream", region: ["nl", "be"], contentType: ["sports"], brand: "nlsport" },
  { domain: "jupilerleague.stream", region: ["be"], contentType: ["sports"], brand: "jupiler-stream" },
  { domain: "voetbal.stream", region: ["nl", "be"], contentType: ["sports"], brand: "voetbal-stream" },
  { domain: "f1kijken.stream", region: ["nl", "be"], contentType: ["sports"], brand: "f1kijken" },
  { domain: "nlmuziek.pirate", region: ["nl", "be"], contentType: ["music"], brand: "nlmuziek-pirate" },
  { domain: "nzbgrabit.nl", region: ["nl", "be"], contentType: ["movies", "series", "software", "music"], brand: "nzbgrabit" },

  // =====================================================================
  // ===== BALKAN REGION (rs, hr, ba, si, al, mk, me, xk) =====
  // =====================================================================
  // Serbian
  { domain: "filmovionline.com", region: ["rs", "ba", "me"], contentType: ["movies", "series"], brand: "filmovionline" },
  { domain: "gledalica.com", region: ["rs", "ba", "me"], contentType: ["movies", "series"], brand: "gledalica" },
  { domain: "filmovizija.com", region: ["rs", "ba", "me"], contentType: ["movies", "series"], brand: "filmovizija" },
  { domain: "filmotip.com", region: ["rs", "ba", "me"], contentType: ["movies", "series"], brand: "filmotip" },
  { domain: "tvojfilm.com", region: ["rs", "ba", "me"], contentType: ["movies", "series"], brand: "tvojfilm" },
  { domain: "onlinefilmovi.com", region: ["rs", "ba", "me"], contentType: ["movies", "series"], brand: "onlinefilmovi" },
  { domain: "filmovi.ws", region: ["rs", "ba", "me"], contentType: ["movies", "series"], brand: "filmovi" },
  { domain: "balkandownload.org", region: ["rs", "hr", "ba", "me", "si", "mk"], contentType: ["movies", "series", "software", "music"], brand: "balkandownload" },
  { domain: "partis.si", region: ["rs", "hr", "ba", "me", "si"], contentType: ["movies", "series", "software", "music"], brand: "partis" },
  { domain: "superliga-rs.stream", region: ["rs"], contentType: ["sports"], brand: "superliga-rs" },
  { domain: "sportklub.stream", region: ["rs", "hr", "ba", "me", "si"], contentType: ["sports"], brand: "sportklub-stream" },
  { domain: "arenasport.stream", region: ["rs", "hr", "ba", "me"], contentType: ["sports"], brand: "arenasport-stream" },
  { domain: "balkansport.stream", region: ["rs", "hr", "ba", "me", "si", "mk"], contentType: ["sports"], brand: "balkansport" },
  // Croatian
  { domain: "filmovionline.hr", region: ["hr"], contentType: ["movies", "series"], brand: "filmovionline-hr" },
  { domain: "gledajfilm.hr", region: ["hr"], contentType: ["movies", "series"], brand: "gledajfilm" },
  { domain: "serije.online.hr", region: ["hr"], contentType: ["series"], brand: "serije-hr" },
  { domain: "hnl.stream", region: ["hr"], contentType: ["sports"], brand: "hnl-stream" },
  { domain: "hrvsport.stream", region: ["hr"], contentType: ["sports"], brand: "hrvsport" },
  // Slovenian
  { domain: "filmi-online.si", region: ["si"], contentType: ["movies", "series"], brand: "filmi-online-si" },
  { domain: "predvajaj.si", region: ["si"], contentType: ["movies", "series"], brand: "predvajaj" },
  { domain: "prvliga.stream", region: ["si"], contentType: ["sports"], brand: "prvliga-stream" },
  // Albanian
  { domain: "filma24.al", region: ["al", "xk", "mk"], contentType: ["movies", "series"], brand: "filma24" },
  { domain: "shiko.al", region: ["al", "xk"], contentType: ["movies", "series"], brand: "shiko" },
  { domain: "filmashqip.com", region: ["al", "xk"], contentType: ["movies", "series"], brand: "filmashqip" },
  { domain: "albfilm.stream", region: ["al", "xk"], contentType: ["movies", "series"], brand: "albfilm" },
  { domain: "tfreet.com", region: ["al", "xk"], contentType: ["movies", "series"], brand: "tfreet" },
  { domain: "supersport-al.stream", region: ["al", "xk"], contentType: ["sports"], brand: "supersport-al" },
  { domain: "kategoriasuperior.stream", region: ["al"], contentType: ["sports"], brand: "kategoriasuperior" },
  // Macedonian
  { domain: "filmovi.mk", region: ["mk"], contentType: ["movies", "series"], brand: "filmovi-mk" },
  { domain: "gledajmk.com", region: ["mk"], contentType: ["movies", "series"], brand: "gledajmk" },
  { domain: "mksport.stream", region: ["mk"], contentType: ["sports"], brand: "mksport-stream" },
  // Bosnian
  { domain: "filmovi.ba", region: ["ba"], contentType: ["movies", "series"], brand: "filmovi-ba" },
  { domain: "basport.stream", region: ["ba"], contentType: ["sports"], brand: "basport-stream" },

  // =====================================================================
  // ===== BALTIC REGION (lt, lv, ee) =====
  // =====================================================================
  // Lithuanian
  { domain: "filmai.in", region: ["lt"], contentType: ["movies", "series"], brand: "filmai-in" },
  { domain: "filmux.cc", region: ["lt"], contentType: ["movies", "series"], brand: "filmux" },
  { domain: "serialai.lt", region: ["lt"], contentType: ["series"], brand: "serialai" },
  { domain: "filmai.org", region: ["lt"], contentType: ["movies", "series"], brand: "filmai-org" },
  { domain: "ziureti.lt", region: ["lt"], contentType: ["movies", "series"], brand: "ziureti" },
  { domain: "lietuvosfilmai.stream", region: ["lt"], contentType: ["movies", "series"], brand: "lietuvosfilmai" },
  { domain: "alyga.stream", region: ["lt"], contentType: ["sports"], brand: "alyga-stream" },
  { domain: "ltsport.stream", region: ["lt"], contentType: ["sports"], brand: "ltsport" },
  { domain: "ltmusic.pirate", region: ["lt"], contentType: ["music"], brand: "ltmusic-pirate" },
  // Latvian
  { domain: "filmas.lv", region: ["lv"], contentType: ["movies", "series"], brand: "filmas-lv" },
  { domain: "skatities.lv", region: ["lv"], contentType: ["movies", "series"], brand: "skatities" },
  { domain: "filmaslv.stream", region: ["lv"], contentType: ["movies", "series"], brand: "filmaslv" },
  { domain: "serialilv.com", region: ["lv"], contentType: ["series"], brand: "serialilv" },
  { domain: "virsliga.stream", region: ["lv"], contentType: ["sports"], brand: "virsliga-stream" },
  { domain: "lvsport.stream", region: ["lv"], contentType: ["sports"], brand: "lvsport" },
  // Estonian
  { domain: "filmid.ee", region: ["ee"], contentType: ["movies", "series"], brand: "filmid-ee" },
  { domain: "vaata.ee", region: ["ee"], contentType: ["movies", "series"], brand: "vaata" },
  { domain: "eestifilmid.stream", region: ["ee"], contentType: ["movies", "series"], brand: "eestifilmid" },
  { domain: "meistriliiga.stream", region: ["ee"], contentType: ["sports"], brand: "meistriliiga-stream" },
  { domain: "eesport.stream", region: ["ee"], contentType: ["sports"], brand: "eesport" },

  // =====================================================================
  // ===== GEORGIAN / ARMENIAN / AZERBAIJANI REGION =====
  // =====================================================================
  // Georgian
  { domain: "adjaranet.pirate", region: ["ge"], contentType: ["movies", "series"], brand: "adjaranet-pirate" },
  { domain: "geofilm.stream", region: ["ge"], contentType: ["movies", "series"], brand: "geofilm" },
  { domain: "kinoqartuli.com", region: ["ge"], contentType: ["movies", "series"], brand: "kinoqartuli" },
  { domain: "gesport.stream", region: ["ge"], contentType: ["sports"], brand: "gesport" },
  { domain: "erovnuliliga.stream", region: ["ge"], contentType: ["sports"], brand: "erovnuliliga" },
  // Armenian
  { domain: "hayfilm.stream", region: ["am"], contentType: ["movies", "series"], brand: "hayfilm" },
  { domain: "armkino.online", region: ["am"], contentType: ["movies", "series"], brand: "armkino" },
  { domain: "armeniatv.pirate", region: ["am"], contentType: ["series"], brand: "armeniatv-pirate" },
  { domain: "amsport.stream", region: ["am"], contentType: ["sports"], brand: "amsport" },
  // Azerbaijani
  { domain: "azfilm.stream", region: ["az"], contentType: ["movies", "series"], brand: "azfilm" },
  { domain: "aztv.pirate", region: ["az"], contentType: ["series"], brand: "aztv-pirate" },
  { domain: "kinobaku.com", region: ["az"], contentType: ["movies", "series"], brand: "kinobaku" },
  { domain: "azsport.stream", region: ["az"], contentType: ["sports"], brand: "azsport-stream" },
  { domain: "premierliga-az.stream", region: ["az"], contentType: ["sports"], brand: "premierliga-az" },

  // =====================================================================
  // ===== CENTRAL ASIAN REGION (kz, uz) =====
  // =====================================================================
  { domain: "kinokz.net", region: ["kz"], contentType: ["movies", "series"], brand: "kinokz" },
  { domain: "kazakhfilm.stream", region: ["kz"], contentType: ["movies", "series"], brand: "kazakhfilm" },
  { domain: "kzsport.stream", region: ["kz"], contentType: ["sports"], brand: "kzsport" },
  { domain: "premierliga-kz.stream", region: ["kz"], contentType: ["sports"], brand: "premierliga-kz" },
  { domain: "uzbekfilm.stream", region: ["uz"], contentType: ["movies", "series"], brand: "uzbekfilm" },
  { domain: "uzcinema.com", region: ["uz"], contentType: ["movies", "series"], brand: "uzcinema" },
  { domain: "uzsport.stream", region: ["uz"], contentType: ["sports"], brand: "uzsport" },

  // =====================================================================
  // ===== AFRICAN REGION (ng, za, ke, gh, sn, ci) =====
  // =====================================================================
  // Nigeria
  { domain: "nollywood.stream", region: ["ng", "gh"], contentType: ["movies", "series"], brand: "nollywood-stream" },
  { domain: "naijapals.com", region: ["ng"], contentType: ["movies", "series", "music"], brand: "naijapals" },
  { domain: "ibakamovies.com", region: ["ng", "gh"], contentType: ["movies", "series"], brand: "ibakamovies" },
  { domain: "iroko.pirate", region: ["ng", "gh"], contentType: ["movies", "series"], brand: "iroko-pirate" },
  { domain: "naijastream.com", region: ["ng"], contentType: ["movies", "series"], brand: "naijastream" },
  { domain: "naijaloaded.com.ng", region: ["ng"], contentType: ["movies", "series", "music"], brand: "naijaloaded" },
  { domain: "waploaded.com", region: ["ng", "gh"], contentType: ["movies", "series", "music"], brand: "waploaded" },
  { domain: "npfl.stream", region: ["ng"], contentType: ["sports"], brand: "npfl-stream" },
  { domain: "supersport-ng.stream", region: ["ng", "gh", "ke", "za"], contentType: ["sports"], brand: "supersport-stream" },
  { domain: "naijasport.stream", region: ["ng"], contentType: ["sports"], brand: "naijasport" },
  // South Africa
  { domain: "showmax.pirate", region: ["za", "ke"], contentType: ["movies", "series"], brand: "showmax-pirate" },
  { domain: "zastream.com", region: ["za"], contentType: ["movies", "series"], brand: "zastream" },
  { domain: "safilm.stream", region: ["za"], contentType: ["movies", "series"], brand: "safilm" },
  { domain: "psl.stream", region: ["za"], contentType: ["sports"], brand: "psl-stream" },
  { domain: "supersport.pirate.za", region: ["za"], contentType: ["sports"], brand: "supersport-za" },
  { domain: "zarugby.stream", region: ["za"], contentType: ["sports"], brand: "zarugby" },
  // Kenya
  { domain: "kenyamovies.stream", region: ["ke"], contentType: ["movies", "series"], brand: "kenyamovies" },
  { domain: "kenstream.com", region: ["ke"], contentType: ["movies", "series"], brand: "kenstream" },
  { domain: "kpl.stream", region: ["ke"], contentType: ["sports"], brand: "kpl-stream" },

  // =====================================================================
  // ===== NORTH AFRICAN (ma, dz, tn, eg, ly) =====
  // =====================================================================
  { domain: "maghrebstream.com", region: ["ma", "dz", "tn"], contentType: ["movies", "series"], brand: "maghrebstream" },
  { domain: "maroctv.pirate", region: ["ma"], contentType: ["series"], brand: "maroctv-pirate" },
  { domain: "botola.stream", region: ["ma"], contentType: ["sports"], brand: "botola-stream" },
  { domain: "marocsport.stream", region: ["ma"], contentType: ["sports"], brand: "marocsport" },
  { domain: "dzstream.com", region: ["dz"], contentType: ["movies", "series"], brand: "dzstream" },
  { domain: "dzfoot.stream", region: ["dz"], contentType: ["sports"], brand: "dzfoot" },
  { domain: "algeriesport.stream", region: ["dz"], contentType: ["sports"], brand: "algeriesport" },
  { domain: "tunisiestream.com", region: ["tn"], contentType: ["movies", "series"], brand: "tunisiestream" },
  { domain: "tunisieleague.stream", region: ["tn"], contentType: ["sports"], brand: "tunisieleague" },
  { domain: "egystream.com", region: ["eg"], contentType: ["movies", "series"], brand: "egystream" },
  { domain: "egyptleague.stream", region: ["eg"], contentType: ["sports"], brand: "egyptleague" },

  // =====================================================================
  // ===== MIDDLE EASTERN (jo, lb, iq, sa, qa, kw, bh, om) =====
  // =====================================================================
  { domain: "saudimovies.stream", region: ["sa"], contentType: ["movies", "series"], brand: "saudimovies" },
  { domain: "saudi-sport.stream", region: ["sa"], contentType: ["sports"], brand: "saudisport" },
  { domain: "dawri.stream", region: ["sa"], contentType: ["sports"], brand: "dawri-stream" },
  { domain: "qatarstream.com", region: ["qa"], contentType: ["movies", "series"], brand: "qatarstream" },
  { domain: "beinsport.pirate.qa", region: ["qa", "ae", "sa"], contentType: ["sports"], brand: "beinsport-pirate" },
  { domain: "kuwaitstream.com", region: ["kw"], contentType: ["movies", "series"], brand: "kuwaitstream" },
  { domain: "kuwaitisport.stream", region: ["kw"], contentType: ["sports"], brand: "kuwaitisport" },
  { domain: "jordantv.stream", region: ["jo"], contentType: ["series"], brand: "jordantv-stream" },
  { domain: "jordansport.stream", region: ["jo"], contentType: ["sports"], brand: "jordansport" },
  { domain: "lebfilms.stream", region: ["lb"], contentType: ["movies", "series"], brand: "lebfilms" },
  { domain: "lebsport.stream", region: ["lb"], contentType: ["sports"], brand: "lebsport" },
  { domain: "iraqstream.com", region: ["iq"], contentType: ["movies", "series"], brand: "iraqstream" },
  { domain: "iraqisport.stream", region: ["iq"], contentType: ["sports"], brand: "iraqisport" },

  // =====================================================================
  // ===== SRI LANKAN REGION =====
  // =====================================================================
  { domain: "baiscope.lk", region: ["lk"], contentType: ["movies", "series"], brand: "baiscope" },
  { domain: "sinhalamovies.stream", region: ["lk"], contentType: ["movies"], brand: "sinhalamovies" },
  { domain: "sinhalafilm.com", region: ["lk"], contentType: ["movies", "series"], brand: "sinhalafilm" },
  { domain: "cricketlk.stream", region: ["lk"], contentType: ["sports"], brand: "cricketlk" },
  { domain: "lksport.stream", region: ["lk"], contentType: ["sports"], brand: "lksport" },

  // =====================================================================
  // ===== SINGAPOREAN REGION =====
  // =====================================================================
  { domain: "sgmovies.stream", region: ["sg"], contentType: ["movies", "series"], brand: "sgmovies" },
  { domain: "toggle.pirate", region: ["sg"], contentType: ["series"], brand: "toggle-pirate" },
  { domain: "sgsport.stream", region: ["sg"], contentType: ["sports"], brand: "sgsport" },

  // =====================================================================
  // ===== AUSTRALIAN / NZ REGION =====
  // =====================================================================
  { domain: "ozstream.com", region: ["au", "nz"], contentType: ["movies", "series"], brand: "ozstream" },
  { domain: "austream.live", region: ["au", "nz"], contentType: ["movies", "series"], brand: "austream" },
  { domain: "aflstream.live", region: ["au"], contentType: ["sports"], brand: "aflstream" },
  { domain: "nrlstream.live", region: ["au"], contentType: ["sports"], brand: "nrlstream" },
  { domain: "cricketau.stream", region: ["au", "nz"], contentType: ["sports"], brand: "cricketau" },
  { domain: "aleague.stream", region: ["au", "nz"], contentType: ["sports"], brand: "aleague-stream" },
  { domain: "kayosport.pirate", region: ["au"], contentType: ["sports"], brand: "kayosport-pirate" },
  { domain: "rugbypass.pirate", region: ["au", "nz"], contentType: ["sports"], brand: "rugbypass-pirate" },

  // =====================================================================
  // ===== BULGARIAN REGION =====
  // =====================================================================
  { domain: "filmipriko.com", region: ["bg"], contentType: ["movies", "series"], brand: "filmipriko" },
  { domain: "bgfilm.stream", region: ["bg"], contentType: ["movies", "series"], brand: "bgfilm" },
  { domain: "filmionline.bg", region: ["bg"], contentType: ["movies", "series"], brand: "filmionline-bg" },
  { domain: "bgseriali.com", region: ["bg"], contentType: ["series"], brand: "bgseriali" },
  { domain: "gledambg.com", region: ["bg"], contentType: ["movies", "series"], brand: "gledambg" },
  { domain: "zamunda.net", region: ["bg"], contentType: ["movies", "series", "software", "music"], brand: "zamunda" },
  { domain: "bgsport.stream", region: ["bg"], contentType: ["sports"], brand: "bgsport" },
  { domain: "efbet-liga.stream", region: ["bg"], contentType: ["sports"], brand: "efbet-liga" },

  // =====================================================================
  // ===== BELARUSIAN REGION =====
  // =====================================================================
  { domain: "byfilm.stream", region: ["by"], contentType: ["movies", "series"], brand: "byfilm" },
  { domain: "belarusfilm.stream", region: ["by"], contentType: ["movies", "series"], brand: "belarusfilm-stream" },
  { domain: "bysport.stream", region: ["by"], contentType: ["sports"], brand: "bysport" },

  // =====================================================================
  // ===== MOLDOVAN REGION =====
  // =====================================================================
  { domain: "mdfilm.stream", region: ["md"], contentType: ["movies", "series"], brand: "mdfilm" },
  { domain: "moldovafilm.stream", region: ["md"], contentType: ["movies", "series"], brand: "moldovafilm" },
  { domain: "mdsport.stream", region: ["md"], contentType: ["sports"], brand: "mdsport" },

  // =====================================================================
  // ===== LUXEMBOURGISH REGION =====
  // =====================================================================
  { domain: "luxstream.lu", region: ["lu"], contentType: ["movies", "series"], brand: "luxstream" },
  { domain: "lusport.stream", region: ["lu"], contentType: ["sports"], brand: "lusport" },

  // =====================================================================
  // ===== MALTESE REGION =====
  // =====================================================================
  { domain: "maltafilm.stream", region: ["mt"], contentType: ["movies", "series"], brand: "maltafilm" },
  { domain: "mtsport.stream", region: ["mt"], contentType: ["sports"], brand: "mtsport" },

  // =====================================================================
  // ===== GLOBAL / MULTI-REGION SPORTS =====
  // =====================================================================
  { domain: "hesgoal.com", region: ["us", "uk", "de", "fr", "es", "it", "nl", "be"], contentType: ["sports"], brand: "hesgoal" },
  { domain: "livetv.ru", region: ["us", "uk", "de", "fr", "es", "it", "ru"], contentType: ["sports"], brand: "livetv-global" },
  { domain: "sportp2p.com", region: ["us", "uk", "de", "fr", "es", "it"], contentType: ["sports"], brand: "sportp2p" },
  { domain: "vipleague.st", region: ["us", "uk", "de", "fr", "es", "it"], contentType: ["sports"], brand: "vipleague" },
  { domain: "strikeout.nu", region: ["us", "uk", "ca", "au"], contentType: ["sports"], brand: "strikeout" },
  { domain: "fromhot.com", region: ["us", "uk", "de", "fr", "es", "it"], contentType: ["sports"], brand: "fromhot" },
  { domain: "mamahd.best", region: ["us", "uk", "de", "fr", "es", "it"], contentType: ["sports"], brand: "mamahd" },
  { domain: "sportrar.tv", region: ["us", "uk", "de", "fr", "es", "it", "ru"], contentType: ["sports"], brand: "sportrar" },
  { domain: "jokerlivestream.net", region: ["us", "uk", "de", "fr", "es", "it"], contentType: ["sports"], brand: "jokerlivestream" },
  { domain: "score808.com", region: ["us", "uk", "de", "fr", "es", "it"], contentType: ["sports"], brand: "score808" },
];

// Fallback mapping: if a region has no seeds, try these parent regions
const REGION_FALLBACKS: Record<string, string[]> = {
  // English-speaking → use US + UK seeds
  ca: ["us", "uk"], au: ["us", "uk"], nz: ["us", "uk"], ie: ["uk", "us"],
  sg: ["us", "uk"], ph: ["us", "uk"], za: ["us", "uk"], ng: ["us", "uk"],
  ke: ["us", "uk"], gh: ["us", "uk"], mt: ["uk"],
  // Arabic-speaking → use AE seeds
  sa: ["ae", "ma"], qa: ["ae"], kw: ["ae"], bh: ["ae"], om: ["ae"],
  jo: ["ae"], lb: ["ae"], iq: ["ae"], eg: ["ae", "ma"], dz: ["ae", "ma"],
  tn: ["ae", "ma"], ly: ["ae", "ma"],
  // German-speaking → use DE seeds
  at: ["de"], ch: ["de", "fr"],
  // French-speaking → use FR seeds
  be: ["fr", "nl"], lu: ["fr"], sn: ["fr"], ci: ["fr"],
  // Spanish-speaking → use ES seeds
  mx: ["es"], ar: ["es"], cl: ["es"], co: ["es"], pe: ["es"], ve: ["es"], ec: ["es"],
  // Portuguese → use BR seeds
  pt: ["br"],
  // Balkans → use RS seeds or similar
  ba: ["rs"], me: ["rs"], mk: ["rs"], xk: ["al"],
  // CIS → use RU seeds
  by: ["ru"], kz: ["ru"], uz: ["ru"], md: ["ro", "ru"],
  // Others
  gr: ["cy"],
  hk: ["cn", "tw"], tw: ["cn"],
  lk: ["in"], bd: ["in"], pk: ["in"],
  my: ["id"],
};

/**
 * Get seeds matching a region and optionally a content type.
 * Falls back to parent regions if no direct match.
 */
export function getSeedsForRegion(regionId: string, contentType?: string): SeedSite[] {
  const filter = (regions: string[]) =>
    SEED_SITES.filter((s) => {
      const regionMatch = regions.some((r) => s.region.includes(r));
      const contentMatch = !contentType || s.contentType.includes(contentType);
      return regionMatch && contentMatch;
    });

  // Try direct match first
  const direct = filter([regionId]);
  if (direct.length > 0) return direct;

  // Try fallback regions
  const fallbacks = REGION_FALLBACKS[regionId];
  if (fallbacks) return filter(fallbacks);

  // Last resort: return all English seeds
  return filter(["us", "uk"]);
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
