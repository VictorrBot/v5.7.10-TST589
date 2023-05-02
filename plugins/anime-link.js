const animeLegalLinks = [
  '• https://www.crunchyroll.com/',
  '• https://wetv.vip/id',
  '• https://www.iq.com/?lang=id_id',
  '• https://id.e-muse.com.tw/',
  '• https://youtube.com/c/AniOneAsia',
  '• https://www.netflix.com/id/',
  '• https://www.funimation.com/',
  '• https://m.vidio.com/',
  '• https://genflix.co.id/',
  '• https://www.bilibili.tv/id',
  '• https://otakudesu.bid/'
];

const animeIllegalLinks = [
  '• https://185.224.82.193/',
  '• https://neonime.is/',
  '• https://riie.one/',
  '• https://animeisme.online/',
  '• https://65.108.132.145/#',
  '• https://m.imdb.com/list/ls021260570/',
  '• https://194.163.183.129/',
  '• https://anibatch.anibatch.moe/',
  '• https://185.224.82.193/',
  '• https://anoboy.lol/',
  '• https://mangaku.vip/',
  '• https://lk21official.art/',
  '• https://animepos.com.cutestat.com/',
  '• https://kotakanimeid.com/',
  '• https://nontonanimeid.click/animenonton-tv/',
  '• https://awsubs.sbs/'
];

const animeLinks = [
  '*ANIME WEBSITE COLLECTION 📁*',
  '',
  '*LEGAL*',
  ...animeLegalLinks,
  '',
  '*ILEGAL*',
  ...animeIllegalLinks,
  '',
  'Keizha'
];

const handler = async (m) => {
  m.reply(animeLinks.join('\n'));
};

handler.help = ['animelink'];
handler.tags = ['anime'];
handler.command = /^animelink$/i;
handler.register = true;
handler.limit = 1;

export default handler;
