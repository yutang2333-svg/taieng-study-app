const KEY = 'taieng-coach-v2';
const today = new Date().toISOString().slice(0, 10);
const course = [
  ['餐厅点餐','在餐厅礼貌点一餐。','Could I have this, please?|我想要这个，谢谢。','What do you recommend?|你推荐什么？','ขออันนี้ค่ะ/ครับ|khǎaw an-níi khâ/khráp｜我想要这个。','อร่อยไหม|a-ròi mái｜好吃吗？'],
  ['咖啡店','点咖啡并说明口味。','I would like an iced latte.|我想要一杯冰拿铁。','Less sweet, please.|请少糖。','กาแฟเย็น|gaa-fae yen｜冰咖啡。','หวานน้อย|wǎan nói｜少甜。'],
  ['结账','礼貌要求账单并付款。','Could we get the bill, please?|可以给我们账单吗？','Can I pay by card?|我可以刷卡吗？','คิดเงินด้วยค่ะ/ครับ|khít ngern dûai khâ/khráp｜请结账。','จ่ายบัตรได้ไหม|jàai bàt dâai mái｜可以刷卡吗？'],
  ['酒店入住','完成入住登记。','I have a reservation.|我有预订。','My name is ___.|我的名字是___。','ฉันจองห้องไว้|chǎn jɔɔng hɔ̂ng wái｜我预订了房间。','ชื่อของฉันคือ___|chʉ̂ʉ khɔ̌ɔng chǎn khʉʉ___｜我的名字是___。'],
  ['房间问题','说明房间需要帮助。','The air conditioner is not working.|空调坏了。','Could someone help me?|可以派人帮我吗？','แอร์ไม่เย็น|ae mâi yen｜空调不凉。','ช่วยหน่อยได้ไหม|chûai nòi dâai mái｜可以帮忙吗？'],
  ['问路','询问目的地怎么走。','How can I get to the station?|怎么去车站？','Is it far from here?|离这里远吗？','ไปสถานีอย่างไร|bpai sà-thǎa-nii yàang-rai｜怎么去车站？','ไกลไหม|glai mái｜远吗？'],
  ['出租车','告诉司机目的地。','Please take me to this address.|请带我去这个地址。','Please stop here.|请在这里停。','ไปที่นี่ค่ะ/ครับ|bpai thîi-nîi khâ/khráp｜去这里。','จอดที่นี่ค่ะ/ครับ|jɔ̀ɔt thîi-nîi khâ/khráp｜在这里停。'],
  ['地铁轻轨','买票、确认线路。','Which line should I take?|我该坐哪条线？','Where do I change trains?|在哪里换乘？','ไปสายไหน|bpai sǎai nǎi｜坐哪条线？','เปลี่ยนรถไฟที่ไหน|bplìan rót-fai thîi-nǎi｜在哪里换乘？'],
  ['机场','办理值机和登机。','Where is the check-in counter?|值机柜台在哪里？','What time does boarding start?|几点开始登机？','เช็กอินที่ไหน|chék-in thîi-nǎi｜在哪里值机？','ขึ้นเครื่องกี่โมง|khʉ̂n khrʉ̂ang gìi moong｜几点登机？'],
  ['买衣服','询问尺码、试穿。','Do you have this in a larger size?|有大一码的吗？','Can I try it on?|我可以试穿吗？','มีไซซ์ใหญ่ไหม|mii sáai yài mái｜有大码吗？','ลองได้ไหม|lɔɔng dâai mái｜可以试吗？'],
  ['价格与砍价','问价格并礼貌还价。','How much is this?|这个多少钱？','Can you give me a better price?|可以便宜一点吗？','อันนี้เท่าไหร่|an-níi thâo-rài｜这个多少钱？','ลดได้ไหม|lót dâai mái｜可以便宜吗？'],
  ['洗手间','快速问卫生间位置。','Where is the restroom?|洗手间在哪里？','Is there a restroom nearby?|附近有洗手间吗？','ห้องน้ำอยู่ที่ไหน|hɔ̂ng-náam yùu thîi-nǎi｜洗手间在哪里？','ใกล้ ๆ มีห้องน้ำไหม|glâi-glâi mii hɔ̂ng-náam mái｜附近有洗手间吗？'],
  ['天气','讨论天气和准备。','What is the weather like today?|今天天气怎么样？','I need an umbrella.|我需要一把伞。','วันนี้อากาศเป็นอย่างไร|wan-níi aa-gàat bpen yàang-rai｜今天天气怎样？','ฝนตกไหม|fǒn tòk mái｜下雨吗？'],
  ['求助与紧急','在需要帮助时清晰表达。','I need help.|我需要帮助。','Please call the police.|请帮我报警。','ช่วยด้วย|chûai dûai｜救命/帮忙。','เรียกตำรวจให้หน่อย|rîiak tam-rùat hâi nòi｜请帮我叫警察。'],
  ['自我介绍','用自然方式认识新朋友。','Nice to meet you.|很高兴认识你。','I am visiting from China.|我来自中国旅行。','ยินดีที่ได้รู้จัก|yin-dii thîi dâai rúu-jàk｜很高兴认识你。','ฉันมาจากจีน|chǎn maa jàak jiin｜我来自中国。'],
  ['日常聊天','聊兴趣和周末。','What do you like to do?|你喜欢做什么？','That sounds fun.|听起来很有趣。','คุณชอบทำอะไร|khun chɔ̂ɔp tam a-rai｜你喜欢做什么？','น่าสนุกจัง|nâa sà-nùk jang｜听起来真有趣。'],
  ['约见面','确认时间和地点。','Are you free tomorrow?|你明天有空吗？','Let’s meet at two.|我们两点见。','พรุ่งนี้ว่างไหม|phrûng-níi wâang mái｜明天有空吗？','เจอกันบ่ายสอง|jəə gan bàai sɔ̌ɔng｜下午两点见。'],
  ['手机网络','买卡、连接网络。','Do you have a SIM card?|有电话卡吗？','The Wi-Fi is not working.|无线网不能用。','มีซิมไหม|mii sim mái｜有 SIM 卡吗？','ไวไฟใช้ไม่ได้|wai-fai chái mâi dâai｜Wi‑Fi 不能用。'],
  ['药店','描述简单不适。','I have a headache.|我头疼。','Do you have something for a cold?|有感冒药吗？','ฉันปวดหัว|chǎn bpùat hǔa｜我头疼。','มียาแก้หวัดไหม|mii yaa gâe wàt mái｜有感冒药吗？'],
  ['按摩','预约并说明力度。','I would like a one-hour massage.|我想要一小时按摩。','Softer, please.|请轻一点。','นวดหนึ่งชั่วโมง|nûat nʉ̀ng chûa-moong｜一小时按摩。','เบา ๆ หน่อย|bao-bao nòi｜轻一点。'],
  ['海边活动','安排海边活动。','Can I rent a towel?|我可以租毛巾吗？','What time is the last boat?|最后一班船几点？','เช่าผ้าเช็ดตัวได้ไหม|châo phâa chét dtua dâai mái｜可以租毛巾吗？','เรือลำสุดท้ายกี่โมง|rʉa lam sùt-tháai gìi moong｜最后一班船几点？'],
  ['行程规划','询问开放时间和建议。','What time does it open?|几点开门？','Which place should I visit first?|我应该先去哪里？','เปิดกี่โมง|bpə̀ət gìi moong｜几点开？','ควรไปที่ไหนก่อน|khuan bpai thîi-nǎi gɔ̀ɔn｜应该先去哪里？'],
  ['食物过敏','清楚说明饮食限制。','I am allergic to peanuts.|我对花生过敏。','Does this contain seafood?|这个有海鲜吗？','ฉันแพ้ถั่วลิสง|chǎn phɛ́ thùa-lí-sǒng｜我对花生过敏。','มีอาหารทะเลไหม|mii aa-hǎan tha-lee mái｜有海鲜吗？'],
  ['本地市场','在市场买水果和小吃。','I will take two of these.|这个我要两个。','Could I taste it first?|我可以先尝尝吗？','เอาอันนี้สองอัน|ao an-níi sɔ̌ɔng an｜这个要两个。','ชิมได้ไหม|chim dâai mái｜可以尝吗？'],
  ['称赞与回应','自然赞美并回应。','This is delicious.|这个真好吃。','You are very kind.|你人真好。','อร่อยมาก|a-ròi mâak｜非常好吃。','ใจดีมาก|jai dii mâak｜非常好。'],
  ['邀请','提出轻松的邀请。','Would you like to join us?|你想加入我们吗？','Maybe next time.|也许下次吧。','ไปด้วยกันไหม|bpai dûai gan mái｜一起去吗？','ไว้คราวหน้า|wái khraao nâa｜下次吧。'],
  ['遗失物品','说明丢失了什么。','I lost my wallet.|我丢了钱包。','Where is the lost and found?|失物招领处在哪里？','กระเป๋าตังค์หาย|grà-bpǎo dtang hǎai｜钱包丢了。','ของหายอยู่ที่ไหน|khɔ̌ɔng hǎai yùu thîi-nǎi｜失物招领在哪里？'],
  ['改预订','修改日期或人数。','I need to change my reservation.|我想改预订。','Can I change it to tomorrow?|能改到明天吗？','ขอเปลี่ยนการจอง|khɔ̌ɔ bplìan gaan jɔɔng｜我想改预订。','เปลี่ยนเป็นพรุ่งนี้ได้ไหม|bplìan bpen phrûng-níi dâai mái｜能改到明天吗？'],
  ['旅行复盘','讲述一次旅行体验。','My favorite place was ___.|我最喜欢的地方是___。','I would love to come back.|我很想再来。','ที่ชอบที่สุดคือ___|thîi chɔ̂ɔp thîi-sùt khʉʉ___｜最喜欢的是___。','อยากกลับมาอีก|yàak glàp maa ìik｜想再来。'],
  ['旅行生存挑战','综合完成一段真实对话。','Could you help me, please?|你可以帮我吗？','Thank you for your help.|谢谢你的帮助。','ช่วยฉันได้ไหม|chûai chǎn dâai mái｜你可以帮我吗？','ขอบคุณมาก|khɔ̀ɔp-khun mâak｜非常感谢。']
];
const extraVocabulary = [
  [['menu|菜单','order|点餐','spicy|辣'],['เมนู|mee-nuu|菜单','อาหาร|aa-hǎan|食物','เผ็ด|phèt|辣']],
  [['coffee|咖啡','milk|牛奶','sugar|糖'],['กาแฟ|gaa-fae|咖啡','นม|nom|牛奶','น้ำตาล|náam-dtaan|糖']],
  [['bill|账单','cash|现金','change|找零'],['เงิน|ngern|钱','เงินสด|ngern-sòt|现金','ใบเสร็จ|bai-sèt|收据']],
  [['reservation|预订','passport|护照','key card|房卡'],['ห้องพัก|hɔ̂ng-phák|房间','พาสปอร์ต|phaat-sà-bpɔ̀ɔt|护照','คีย์การ์ด|khii-gàat|房卡']],
  [['air conditioner|空调','towel|毛巾','broken|坏了'],['แอร์|ae|空调','ผ้าเช็ดตัว|phâa-chét-dtua|毛巾','เสีย|sǐia|坏了']],
  [['station|车站','left|左边','right|右边'],['สถานี|sà-thǎa-nii|车站','ซ้าย|sáai|左边','ขวา|khwǎa|右边']],
  [['taxi|出租车','address|地址','stop|停'],['แท็กซี่|thɛ́k-sîi|出租车','ที่อยู่|thîi-yùu|地址','จอด|jɔ̀ɔt|停']],
  [['train|列车','ticket|票','platform|站台'],['รถไฟ|rót-fai|火车','ตั๋ว|dtǔa|票','ชานชาลา|chaan-chaa-laa|站台']],
  [['airport|机场','boarding pass|登机牌','luggage|行李'],['สนามบิน|sà-nǎam-bin|机场','บอร์ดดิ้งพาส|bɔɔ-ding-phâat|登机牌','กระเป๋า|grà-bpǎo|行李']],
  [['size|尺码','color|颜色','fitting room|试衣间'],['ไซซ์|sáai|尺码','สี|sǐi|颜色','ห้องลอง|hɔ̂ng-lɔɔng|试衣间']],
  [['price|价格','cheap|便宜','expensive|贵'],['ราคา|raa-khaa|价格','ถูก|thùuk|便宜','แพง|phɛɛng|贵']],
  [['restroom|洗手间','nearby|附近','clean|干净'],['ห้องน้ำ|hɔ̂ng-náam|洗手间','ใกล้|glâi|近','สะอาด|sà-àat|干净']],
  [['sunny|晴朗','rainy|下雨','umbrella|雨伞'],['แดด|dɛ̀ɛt|阳光','ฝน|fǒn|雨','ร่ม|rôm|雨伞']],
  [['help|帮助','police|警察','hospital|医院'],['ช่วย|chûai|帮助','ตำรวจ|tam-rùat|警察','โรงพยาบาล|roong-pha-yaa-baan|医院']],
  [['name|名字','China|中国','traveler|旅行者'],['ชื่อ|chʉ̂ʉ|名字','จีน|jiin|中国','นักท่องเที่ยว|nák-thɔ̂ng-thîao|游客']],
  [['hobby|爱好','weekend|周末','music|音乐'],['งานอดิเรก|ngaan-à-dì-rêek|爱好','วันหยุด|wan-yùt|假日','เพลง|phleeng|歌曲']],
  [['tomorrow|明天','time|时间','meet|见面'],['พรุ่งนี้|phrûng-níi|明天','เวลา|wee-laa|时间','เจอ|jəə|见面']],
  [['SIM card|电话卡','Wi-Fi|无线网','password|密码'],['ซิม|sim|电话卡','ไวไฟ|wai-fai|无线网','รหัสผ่าน|rá-hàt-phàan|密码']],
  [['medicine|药','headache|头疼','pharmacy|药店'],['ยา|yaa|药','ปวดหัว|bpùat-hǔa|头疼','ร้านขายยา|ráan-khǎai-yaa|药店']],
  [['massage|按摩','hour|小时','soft|轻'],['นวด|nûat|按摩','ชั่วโมง|chûa-moong|小时','เบา|bao|轻']],
  [['beach|海滩','boat|船','swim|游泳'],['ชายหาด|chaai-hàat|海滩','เรือ|rʉa|船','ว่ายน้ำ|wâai-náam|游泳']],
  [['open|开门','close|关门','temple|寺庙'],['เปิด|bpə̀ət|开','ปิด|bpìt|关','วัด|wát|寺庙']],
  [['allergy|过敏','peanut|花生','seafood|海鲜'],['แพ้|phɛ́|过敏','ถั่วลิสง|thùa-lí-sǒng|花生','อาหารทะเล|aa-hǎan-tha-lee|海鲜']],
  [['market|市场','fruit|水果','taste|品尝'],['ตลาด|dtà-làat|市场','ผลไม้|phǒn-lá-máai|水果','ชิม|chim|尝']],
  [['delicious|好吃','beautiful|漂亮','kind|友好'],['อร่อย|a-ròi|好吃','สวย|sǔai|漂亮','ใจดี|jai-dii|友好']],
  [['join|加入','together|一起','later|之后'],['ด้วยกัน|dûai-gan|一起','ตอนนี้|dton-níi|现在','ทีหลัง|thii-lǎng|之后']],
  [['lost|丢失','wallet|钱包','found|找到'],['หาย|hǎai|丢失','กระเป๋าตังค์|grà-bpǎo-dtang|钱包','เจอ|jəə|找到']],
  [['change|修改','date|日期','confirm|确认'],['เปลี่ยน|bplìan|修改','วันที่|wan-thîi|日期','ยืนยัน|yʉʉn-yan|确认']],
  [['favorite|最喜欢','memory|回忆','return|回来'],['ชอบที่สุด|chɔ̂ɔp-thîi-sùt|最喜欢','ความทรงจำ|khwaam-song-jam|回忆','กลับมา|glàp-maa|回来']],
  [['please|请','thank you|谢谢','understand|明白'],['กรุณา|gà-rú-naa|请','ขอบคุณ|khɔ̀ɔp-khun|谢谢','เข้าใจ|khâo-jai|明白']]
];
const starterWords = [];
const starterMistakes = [];
function split(text) { const [word, ...meaning] = text.split('|'); return { word, meaning: meaning.join('|') }; }
function currentIndex() { return Math.min(data.completedDates.length, course.length - 1); }
function plan() { const index = currentIndex(), raw = course[index], extra = extraVocabulary[index]; return { day: index + 1, theme: raw[0], goal: raw[1], en: [split(raw[2]), split(raw[3])], th: [split(raw[4]), split(raw[5])], enVocab: extra[0].map(split), thVocab: extra[1].map(split) }; }
function dialogue(p, language) { return language === '英语' ? ['Hello. How can I help you?', p.en[0].word, 'Sure. Is there anything else?', p.en[1].word] : ['สวัสดีค่ะ/ครับ ต้องการอะไร', p.th[0].word, 'ได้ค่ะ/ครับ มีอะไรอีกไหม', p.th[1].word]; }
function lessonParts(p) { const enDialogue = dialogue(p, '英语'), thDialogue = dialogue(p, '泰语'); return [
  {title:'英语复习', detail:'先听昨日关键句，再跟读三遍。第 1 天会播放本课预热句。', minutes:3, lang:'en-US', audio:p.en.map(x => x.word), content:p.en.map(x => x.word).join(' · ')},
  {title:'英语单词与发音', detail:'逐个听 3 个新词，跟读三遍，再说出中文意思。', minutes:6, lang:'en-US', audio:p.enVocab.map(x => x.word), content:p.enVocab.map(x => `${x.word}（${x.meaning}）`).join(' · ')},
  {title:'英语重点句', detail:'每句听两遍：第一次看中文，第二次遮住中文跟读。', minutes:5, lang:'en-US', audio:p.en.map(x => x.word), content:p.en.map(x => x.word).join(' / ')},
  {title:'英语替换练习', detail:'把句中的物品、数量或偏好替换成你自己的答案，各说三次。', minutes:4, lang:'en-US', audio:[p.en[0].word, p.en[1].word], content:'替换练习：改变一句中的一个词，再完整说出。'},
  {title:'英语情景对话与纠错', detail:'听完四轮对话后，暂停并扮演“学习者”说第 2、4 句；再重读不顺的一句。', minutes:12, lang:'en-US', audio:enDialogue, content:enDialogue.join(' / ')},
  {title:'泰语复习', detail:'先听关键表达，再跟读三遍；注意不要用中文读音代替泰语。', minutes:3, lang:'th-TH', audio:p.th.map(x => x.word), content:p.th.map(x => x.word).join(' · ')},
  {title:'泰语单词与发音', detail:'逐个听 3 个新词，跟读三遍，再看拼读复述。', minutes:6, lang:'th-TH', audio:p.thVocab.map(x => `${x.word}。${x.meaning.split('|')[0]}`), content:p.thVocab.map(x => `${x.word}（${x.meaning}）`).join(' · ')},
  {title:'泰语重点句', detail:'先慢跟读，再按正常速度读；每句连续三遍。', minutes:5, lang:'th-TH', audio:p.th.map(x => x.word), content:p.th.map(x => x.word).join(' / ')},
  {title:'泰语替换练习', detail:'替换物品或地点，重复整句；先听，后不看文字说。', minutes:4, lang:'th-TH', audio:[p.th[0].word, p.th[1].word], content:'替换练习：用本课 3 个新词替换句中内容。'},
  {title:'泰语情景对话与纠错', detail:'听四轮对话后，暂停并扮演“学习者”说第 2、4 句；再重读不顺的一句。', minutes:12, lang:'th-TH', audio:thDialogue, content:thDialogue.join(' / ')}
]; }
function defaults() { return { words: starterWords, mistakes: starterMistakes, completedDates: [], lessonChecks: {}, activeFilter: 'all' }; }
let data = JSON.parse(localStorage.getItem(KEY) || 'null') || defaults();
const $ = s => document.querySelector(s);
function save() { localStorage.setItem(KEY, JSON.stringify(data)); render(); }
function toast(message) { const el = $('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 1900); }
function nav(id) { document.querySelectorAll('.screen').forEach(x => x.classList.toggle('active', x.id === id)); document.querySelectorAll('[data-nav]').forEach(x => x.classList.toggle('active', x.dataset.nav === id && x.closest('.bottom-nav'))); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function statusLabel(status) { return ({ new: '新学', reviewing: '复习中', mastered: '已掌握' })[status]; }
function renderHome() { const p = plan(); $('#homeTitle').textContent = p.theme; $('#homeTitle').nextElementSibling.textContent = p.goal; $('#homeReviewList').innerHTML = data.words.filter(w => w.status !== 'mastered').slice(0,3).map(w => `<div class="mini-item"><div><strong>${w.word}</strong><small>${w.meaning}</small></div><span class="pill">${statusLabel(w.status)}</span></div>`).join('') || '<p class="helper">今天先学本课的 4 个实用表达。</p>'; }
function phraseCard(x, language) { const pieces = x.meaning.split(/[｜|]/), lang = language === '泰语' ? 'th-TH' : 'en-US'; return `<div class="phrase"><div><strong>${x.word}</strong><span>${pieces[0] || ''}</span>${language === '泰语' ? `<small>${pieces[1] || ''}</small>` : ''}</div><button class="speak-button" type="button" data-speak="${x.word.replace(/"/g, '&quot;')}" data-lang="${lang}">▶ 听读</button></div>`; }
function renderLesson() { const p = plan(), parts = lessonParts(p), checks = data.lessonChecks[today] || [], played = data.audioPlayed?.[today] || []; const done = checks.filter(Boolean).length; const minutes = parts.reduce((total, item) => total + item.minutes, 0); $('#lessonEyebrow').textContent = `第 ${p.day} / 30 天 · ${p.theme}`; $('#lessonTime').textContent = `${minutes} / 60 分钟`; $('#lessonProgress').style.width = `${done / parts.length * 100}%`; $('#coursePhrases').innerHTML = `<section class="course-box"><div class="course-box-head"><div><p class="tag">英语：2 句 + 3 个新词</p><h3>先听一遍，再跟读三遍</h3></div><button class="status-button" data-add-course="en">加入单词本</button></div>${p.en.map(x => phraseCard(x, '英语')).join('')}${p.enVocab.map(x => phraseCard(x, '英语')).join('')}</section><section class="course-box"><div class="course-box-head"><div><p class="tag">泰语：2 句 + 3 个新词</p><h3>泰文 · 拼读 · 中文</h3></div><button class="status-button" data-add-course="th">加入单词本</button></div>${p.th.map(x => phraseCard(x, '泰语')).join('')}${p.thVocab.map(x => phraseCard(x, '泰语')).join('')}</section><section class="mission"><p class="tag">开口任务</p><strong>每个环节先点“听本环节”，再完成跟读任务。</strong><span>未听读前不能勾选完成，防止只打勾跳过练习。</span></section>`; $('#lessonList').innerHTML = parts.map((item, i) => `<article class="lesson-item ${played[i] ? 'ready' : ''}"><input type="checkbox" data-lesson="${i}" ${checks[i] ? 'checked' : ''} ${played[i] ? '' : 'disabled'}><div><strong>${item.title}</strong><p>${item.detail}</p><small class="lesson-content">${item.content}</small></div><div class="lesson-actions"><button class="speak-button" type="button" data-section-audio="${i}">▶ 听本环节</button><span class="minutes">${item.minutes} 分钟</span></div></article>`).join(''); }
function renderWords() { const items = data.words.filter(w => data.activeFilter === 'all' || w.status === data.activeFilter); $('#wordList').innerHTML = items.map(w => `<article class="word-item"><div class="word-main"><strong>${w.word} <small>${w.language}</small></strong><small>${w.meaning}${w.hint ? ' · ' + w.hint : ''}</small></div><button class="status-button" data-status="${w.id}">${statusLabel(w.status)}</button></article>`).join('') || '<p class="helper">在课程页点“加入单词本”，本课表达就会保存在这里。</p>'; document.querySelectorAll('[data-word-filter]').forEach(b => b.classList.toggle('selected', b.dataset.wordFilter === data.activeFilter)); }
function renderReview() { const items = data.words.filter(w => w.status !== 'mastered'); $('#reviewList').innerHTML = items.map(w => `<article class="review-item"><div class="review-main"><strong>${w.word}</strong><small>${w.meaning}${w.hint ? ' · ' + w.hint : ''}</small></div><button class="status-button" data-review="${w.id}">已复习</button></article>`).join('') || '<p class="helper">还没有待复习内容。先将课程表达加入单词本。</p>'; }
function renderMistakes() { $('#mistakeList').innerHTML = data.mistakes.map(m => `<article class="mistake-item"><h3>原句：${m.wrong}</h3><p class="better">更自然：${m.better}</p><p>${m.note}</p></article>`).join('') || '<p class="helper">练习时发现说错的地方，可以点右上角 + 记录。</p>'; }
function renderProgress() { const days = data.completedDates.length; $('#daysLearned').textContent = days; $('#minutesLearned').textContent = days * 60; $('#wordsLearned').textContent = data.words.length; $('#mistakesLearned').textContent = data.mistakes.length; $('#streakCount').textContent = days; const names = ['一','二','三','四','五','六','日']; $('#weekDots').innerHTML = names.map((n,i) => `<span class="${i < Math.min(days,7) ? 'done' : ''}">${n}</span>`).join(''); $('#weekMessage').textContent = days ? `已完成第 ${days} 天。下一课：第 ${Math.min(days + 1, 30)} 天。` : '第 1 天已准备好：从餐厅点餐开始。'; }
function render() { renderHome(); renderLesson(); renderWords(); renderReview(); renderMistakes(); renderProgress(); }
function openDialog(type) { const dialog = $('#entryDialog'); $('#entryForm').dataset.type = type; $('#dialogTitle').textContent = type === 'word' ? '添加单词' : '添加错题'; $('#fieldOneLabel').childNodes[0].nodeValue = type === 'word' ? '单词' : '原句'; $('#fieldTwoLabel').childNodes[0].nodeValue = type === 'word' ? '中文意思' : '更自然的说法'; $('#fieldThreeLabel').childNodes[0].nodeValue = type === 'word' ? '拼读提示（泰语可填写）' : '为什么需要改'; $('#fieldOne').value = ''; $('#fieldTwo').value = ''; $('#fieldThree').value = ''; dialog.showModal(); }
function addCourseWords(language) { const p = plan(), items = language === 'en' ? [...p.en, ...p.enVocab] : [...p.th, ...p.thVocab]; const entries = items.map((x, i) => { const part = x.meaning.split(/[｜|]/); return { id: Date.now() + i, language: language === 'en' ? '英语' : '泰语', word: x.word, meaning: language === 'en' ? x.meaning : part[1] || part[0], hint: language === 'en' ? '' : part[0], status: 'new', reviews: 0 }; }).filter(x => !data.words.some(w => w.word === x.word)); data.words.unshift(...entries); save(); toast(entries.length ? '已加入单词本' : '本课表达已在单词本'); }
function speakSequence(lines, lang) { if (!('speechSynthesis' in window)) { toast('此设备暂不支持网页朗读'); return; } window.speechSynthesis.cancel(); let position = 0; const next = () => { if (position >= lines.length) return; const utterance = new SpeechSynthesisUtterance(lines[position++]); utterance.lang = lang; utterance.rate = 0.72; utterance.pitch = 1; utterance.onend = () => setTimeout(next, 250); window.speechSynthesis.speak(utterance); }; next(); }
function speak(text, lang) { if (!('speechSynthesis' in window)) { toast('此设备暂不支持网页朗读'); return; } window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text); utterance.lang = lang; utterance.rate = 0.72; utterance.pitch = 1; window.speechSynthesis.speak(utterance); }
document.addEventListener('click', e => { const navButton = e.target.closest('[data-nav]'); if (navButton) nav(navButton.dataset.nav); const filter = e.target.closest('[data-word-filter]'); if (filter) { data.activeFilter = filter.dataset.wordFilter; save(); } const speakButton = e.target.closest('[data-speak]'); if (speakButton) speak(speakButton.dataset.speak, speakButton.dataset.lang); const sectionButton = e.target.closest('[data-section-audio]'); if (sectionButton) { const p = plan(), parts = lessonParts(p), index = Number(sectionButton.dataset.sectionAudio); data.audioPlayed ||= {}; data.audioPlayed[today] ||= []; data.audioPlayed[today][index] = true; save(); speakSequence(parts[index].audio, parts[index].lang); toast('请听完后跟读三遍，再勾选完成'); } const add = e.target.closest('[data-add-course]'); if (add) addCourseWords(add.dataset.addCourse); const status = e.target.closest('[data-status]'); if (status) { const w = data.words.find(x => x.id === Number(status.dataset.status)); w.status = w.status === 'new' ? 'reviewing' : w.status === 'reviewing' ? 'mastered' : 'new'; save(); } const review = e.target.closest('[data-review]'); if (review) { const w = data.words.find(x => x.id === Number(review.dataset.review)); w.reviews++; w.status = w.reviews >= 3 ? 'mastered' : 'reviewing'; save(); toast(w.status === 'mastered' ? '这个词已掌握！' : '已加入下一轮复习'); } });
document.addEventListener('change', e => { if (e.target.matches('[data-lesson]')) { data.lessonChecks[today] ||= []; data.lessonChecks[today][Number(e.target.dataset.lesson)] = e.target.checked; save(); } });
$('#addWord').onclick = () => openDialog('word'); $('#addMistake').onclick = () => openDialog('mistake');
$('#entryForm').addEventListener('submit', e => { e.preventDefault(); const type = e.currentTarget.dataset.type, a = $('#fieldOne').value.trim(), b = $('#fieldTwo').value.trim(), c = $('#fieldThree').value.trim(); if (type === 'word') data.words.unshift({ id: Date.now(), language: '自定义', word: a, meaning: b, hint: c, status: 'new', reviews: 0 }); else data.mistakes.unshift({ id: Date.now(), wrong: a, better: b, note: c || '下次注意这个表达。' }); $('#entryDialog').close(); save(); toast('已保存'); });
$('#finishLesson').onclick = () => { const parts = lessonParts(plan()), checks = data.lessonChecks[today] || []; if (checks.filter(Boolean).length < parts.length) { toast('请先完成并勾选所有听读环节'); return; } if (!data.completedDates.includes(today)) data.completedDates.push(today); save(); toast(data.completedDates.length < 30 ? '今天完成！明天将解锁下一课。' : '30 天课程全部完成，太棒了！'); };
$('#openChatGPT').onclick = () => { const p = plan(); const prompt = `我是泰英口语教练的学习者。请和我练习第 ${p.day} 天「${p.theme}」。先让我用英语完成一个情景对话，再用泰语完成一个情景对话。一次只说一句，并纠正我的错误。`; navigator.clipboard?.writeText(prompt); window.open('https://chatgpt.com/', '_blank'); toast('本课 AI 练习指令已复制'); };
$('#resetData').onclick = () => { if (confirm('确定清除这台手机上的所有学习记录吗？')) { data = defaults(); save(); toast('学习数据已清除'); } };
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js?v=5');
render();
