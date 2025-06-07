import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

const packs = function () {
    var hezongkangqincharacter = {
        name: 'hezongkangqincharacter',
        connect: true,
        characterSort: {
            hezongkangqincharacter: {
                hezong_jun: ['qin_zhangyi', 'qin_zhaogao', 'qin_yingzheng', 'qin_shangyang', 'qin_baiqi', 'qin_miyue', 'qin_lvbuwei', 'qin_zhaoji'],
                hezong_bing: ['qin_nushou', 'qin_qibing', 'qin_bubing'],
            },
        },
        character: {
            qin_zhangyi: ['male', 'daqin', 4, ['qin_lianheng', 'qin_xichu', 'qin_xiongbian', 'qin_qiaoshe']],
            qin_zhaogao: ['male', 'daqin', 3, ['qin_zhilu', 'qin_gaizhao', 'qin_haizhong', 'qin_yuanli']],
            qin_yingzheng: ['male', 'daqin', 5, ['qin_yitong', 'qin_shihuang', 'qin_zulong', 'qin_fenshu']],
            qin_shangyang: ['male', 'daqin', 4, ['qin_bianfa', 'qin_limu', 'qin_kencao']],
            qin_nushou: ['male', 'daqin', 3, ['qin_tongpao', 'qin_jinnu']],
            qin_qibing: ['male', 'daqin', 4, ['qin_tongpao', 'qin_changjian', 'qin_liangju']],
            qin_bubing: ['male', 'daqin', 5, ['qin_tongpao', 'qin_fangzhen', 'qin_changbing']],
            qin_baiqi: ['male', 'daqin', 5, ['qin_wuan', 'qin_shashen', 'qin_fachu', 'qin_changsheng']],
            qin_miyue: ['female', 'daqin', 3, ['qin_zhangzheng', 'qin_taihou', 'qin_youmie', 'qin_yintui']],
            qin_lvbuwei: ['male', 'daqin', 4, ['qin_jugu', 'qin_qihuo', 'qin_chunqiu', 'qin_baixiang']],
            qin_zhaoji: ['female', 'daqin', 3, ['qin_shanwu', 'qin_daqi', 'qin_xianji', 'qin_huoluan']],
        },
        characterIntro: {
            qin_shangyang: '商鞅（约公元前395年－公元前338年），姬姓，公孙氏，名鞅，卫国人。战国时期政治家、改革家、思想家，法家代表人物，卫国国君后代。商鞅辅佐秦孝公，积极实行变法，使秦国成为富裕强大的国家，史称“商鞅变法”。政治上，改革了秦国户籍、军功爵位、土地制度、行政区划、税收、度量衡以及民风民俗，并制定了严酷的法律；经济上，主张重农抑商、奖励耕战；军事上，统率秦军收复了河西之地，赐予商于十五邑，号为商君，史称为商鞅。公元前338年，秦孝公逝世后，商鞅被公子虔指为谋反，战败死于彤地，尸身车裂，全家被杀。',
            qin_zhangyi: '张仪（？－前309年），姬姓，张氏，名仪，魏国安邑（今山西万荣县王显乡张仪村）人。魏国贵族后裔，战国时期著名的纵横家、外交家和谋略家。早年入于鬼谷子门下，学习纵横之术。出山之后，首创“连横”的外交策略，游说六国入秦。得到秦惠王赏识，封为相国，奉命出使游说各国，以“横”破“纵”，促使各国亲善秦国，受封为武信君。公元前310年，秦惠王死后，秦武王继位。张仪失去宠信，出逃魏国，担任相国，次年去世。',
            qin_miyue: '宣太后（？―前265年），芈（mǐ）姓，出生地楚国丹阳（在今湖北省），又称芈八子、秦宣太后。战国时期秦国王太后，秦惠文王之妾，秦昭襄王之母。秦昭襄王即位之初，宣太后以太后之位主政，执政期间，攻灭义渠国，一举灭亡了秦国的西部大患。死后葬于芷阳骊山。',
            qin_baiqi: '白起（？—公元前257年），秦国白氏，名起，郿邑（今陕西眉县常兴镇白家村）人。战国时期杰出的军事家、“兵家”代表人物。熟知兵法，善于用兵，交好秦宣太后，和穰侯魏冉的关系很好。辅佐秦昭王，屡立战功。伊阕之战，大破魏韩联军；伐楚之战，攻陷楚都郢城。长平之战，重创赵国主力。担任秦军主将30多年，攻城70余座，为秦国统一六国做出了巨大的贡献，受封为武安君。功高震主，得罪应侯，接连贬官。秦昭襄王五十年（前257年），赐死于杜邮。作为中国历史上继孙武、吴起之后又一个杰出的军事家、统帅，白起与廉颇、李牧、王翦并称为战国四大名将，并且被列为战国四大名将之首，名列武庙十哲。',
            qin_zhaoji: '赵姬（？―公元前228年），秦始皇生母，秦庄襄王的王后，赵国邯郸人。一说原为吕不韦姬妾，被吕不韦献给秦国质子异人，一说为赵豪家女，于公元前259年生秦始皇嬴政，异人立其为夫人。其子嬴政即位为秦王，她成为王太后，秦始皇统一天下，追尊其为帝太后，与秦庄襄王合葬于芷阳。',
            qin_lvbuwei: '吕不韦（？—前235年），姜姓，吕氏，名不韦，卫国濮阳（今河南省滑县）人。战国末年商人、政治家、思想家，秦国丞相，姜子牙23世孙。早年经商于阳翟，扶植秦国质子异人回国即位，成为秦庄襄王，拜为相国，封文信侯，食邑河南洛阳十万户。带兵攻取周国、赵国、卫国土地，分别设立三川郡、太原郡、东郡，对秦王嬴政兼并六国的事业作出重大贡献。庄襄王去世后，迎立太子嬴政即位，拜为相邦，尊称“仲父”，权倾天下。受到嫪毐集团叛乱牵连，罢相归国，全家流放蜀郡，途中饮鸩自尽。主持编纂《吕氏春秋》（又名《吕览》），包含八览、六论、十二纪，汇合了先秦诸子各派学说，“兼儒墨，合名法”，史称“杂家”。',
            qin_yingzheng: '秦始皇嬴政（前259年—前210年），嬴姓，赵氏，名政（一说名“正”），又称赵政、祖龙等。秦庄襄王和赵姬之子。中国古代政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。秦始皇出生于赵国都城邯郸（今邯郸），后回到秦国。前247年，13岁时即王位。前238年，平定长信侯嫪毐的叛乱，之后又除掉权臣吕不韦，开始亲政。重用李斯、尉缭，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，完成了统一中国大业，建立起一个中央集权的统一的多民族国家——秦朝。秦始皇认为自己的功劳胜过之前的三皇五帝，采用三皇之“皇”、五帝之“帝”构成“皇帝”的称号，是中国历史上第一个使用“皇帝”称号的君主，所以自称“始皇帝”。同时在中央实行三公九卿，管理国家大事。地方上废除分封制，代以郡县制，同时书同文，车同轨，统一度量衡。对外北击匈奴，南征百越，修筑万里长城，修筑灵渠，沟通水系。但是到了晚年，求仙梦想长生，苛政虐民，扼杀民智，动摇了秦朝统治的根基，前210年，秦始皇东巡途中驾崩于邢台沙丘。秦始皇奠定中国两千余年政治制度基本格局，被明代思想家李贽誉为“千古一帝”。',
            qin_zhaogao: '赵高（？－前207年），嬴姓，赵氏。秦朝二世皇帝时丞相，任中车府令，兼行符玺令事，“管事二十余年”。秦始皇死后，赵高发动沙丘政变，他与丞相李斯合谋伪造诏书，逼秦始皇长子扶苏自杀，另立始皇幼子胡亥为帝，是为秦二世，并自任郎中令。他在任职期间独揽大权，结党营私，征役更加繁重，行政更加苛暴。公元前208年又设计害死李斯，继之为秦朝丞相。第三年他迫秦二世自杀，另立子婴为秦王。不久被子婴设计杀掉，诛夷三族。',
        },
        card: {
            qin_qinnu: {
                image: 'ext:活动武将/image/card/qin_qinnu.jpg',
                vanish: true,
                type: 'equip',
                subtype: 'equip1',
                skills: ['qin_qinnu_skill'],
                destroy: 'qin_nushou',
                distance: { attackFrom: -8 },
                enable: true,
                ai: {
                    basic: {
                        useful: 2,
                        equipValue: 1,
                    },
                },
                fullimage: true,
            },
            qin_shangyangbianfa: {
                image: 'ext:活动武将/image/card/qin_shangyangbianfa.jpg',
                audio: true,
                global: 'qin_shangyangbianfa_dying',
                type: 'trick',
                enable: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget: 1,
                content() {
                    'step 0'
                    var num = [1, 2].randomGet();
                    target.damage(num).type = 'qin_shangyangbianfa';
                },
                ai: {
                    basic: {
                        order: 5,
                        useful: 1,
                        value: 5.5,
                    },
                    result: {
                        target: -1.5,
                    },
                    tag: {
                        damage: 1,
                    },
                },
                fullimage: true,
            },
            qin_zhenlongchangjian: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -1,
                },
                ai: {
                    basic: {
                        equipValue: 2,
                    },
                },
                skills: ['qin_zhenlongchangjian_skill'],
                image: 'ext:活动武将/image/card/qin_zhenlongchangjian.jpg',
                fullimage: true,
            },
            qin_chuanguoyuxi: {
                image: 'ext:活动武将/image/card/qin_chuanguoyuxi.jpg',
                type: 'equip',
                subtype: 'equip5',
                ai: {
                    basic: {
                        equipValue: 7.5,
                    },
                },
                skills: ['qin_chuanguoyuxi_skill'],
                fullimage: true,
            },
        },
        skill: {
            hzlh: {
                charlotte: true,
                trigger: { global: 'roundStart' },
                direct: true,
                forceDie: true,
                content() {
                    game.countPlayer(function (current) {
                        current.link(true);
                    })
                },
            },
            cpzz: {
                charlotte: true,
                mod: {
                    targetEnabled(card) {
                        if (card.name == 'tao' && (card.isCard && card.cardid || get.itemtype(card) == 'card')) return false;
                    },
                    cardSavable(card) {
                        if (card.name == 'tao' && (card.isCard && card.cardid || get.itemtype(card) == 'card')) return false;
                    },
                },
                group: ['cpzz_gain', 'cpzz_sha', 'cpzz_shan'],
                inherit: 'wushuang1',
                direct: true,
                subSkill: {
                    gain: {
                        charlotte: true,
                        trigger: { player: 'phaseBegin' },
                        filter(event, player) {
                            return game.hasPlayer(function (current) {
                                return current.name == 'qin_baiqi' && get.attitude(current, player) > 0;
                            });
                        },
                        forced: true,
                        content() {
                            var card = get.cardPile(function (card) {
                                return card.name == 'tao';
                            });
                            if (card) player.gain(card, 'gain2');
                        },
                    },
                    sha: {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filterCard: { name: 'tao' },
                        viewAs: { name: 'sha' },
                        viewAsFilter(player) {
                            if (!player.countCards('h', 'tao')) return false;
                        },
                        prompt: '将一张桃当杀使用或打出',
                        check() { return 1 },
                        ai: {
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondSha') && current < 0) return 0.6
                                },
                            },
                            respondSha: true,
                            skillTagFilter(player) {
                                if (!player.countCards('h', 'tao')) return false;
                            },
                            order() {
                                return get.order({ name: 'sha' }) - 0.1;
                            },
                        },
                    },
                    shan: {
                        enable: ['chooseToRespond', 'chooseToUse'],
                        filterCard: { name: 'tao' },
                        viewAs: { name: 'shan' },
                        prompt: '将一张桃当闪打出',
                        check() { return 1 },
                        viewAsFilter(player) {
                            if (!player.countCards('h', 'tao')) return false;
                        },
                        ai: {
                            respondShan: true,
                            skillTagFilter(player) {
                                if (!player.countCards('h', 'tao')) return false;
                            },
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondShan') && current < 0) return 0.6
                                },
                            },
                        },
                    },
                },
            },
            scth: {
                charlotte: true,
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    return player.sex == 'male' && game.hasPlayer(function (current) {
                        return current.name == 'qin_miyue';
                    });
                },
                forced: true,
                content() {
                    'step 0'
                    var target = game.findPlayer(function (current) {
                        return current.name == 'qin_miyue';
                    });
                    event.target = target;
                    if (target.isHealthy()) result.control = '摸牌';
                    else player.chooseControl('摸牌', '回血').set('prompt', '始称太后：令芈月回复1点体力或摸一张牌').ai = function () {
                        if (get.attitude(player, target) > 0) return '回血';
                        return '摸牌';
                    };
                    'step 1'
                    player.line(target);
                    target[result.control == '摸牌' ? 'draw' : 'recover']();
                },
            },
            lscq: {
                charlotte: true,
                trigger: { player: ['gainEnd', 'phaseDrawBegin'] },
                filter(event, player, name) {
                    if (name == 'phaseDrawBegin') return player.sex == 'male';
                    return _status.currentPhase != player && player.name == 'qin_lvbuwei' && (event.animate == 'draw' ||
                        event.getParent().name == 'draw') && event.getParent(2).name != 'lscq';
                },
                forced: true,
                content() {
                    if (trigger.name == 'phaseDraw') trigger.num++;
                    else player.draw('nodelay');
                },
            },
            zjzl: {
                charlotte: true,
                trigger: { source: 'damageBegin3' },
                usable: 1,
                filter(event, player) {
                    if (player.sex != 'male') return false;
                    var target = game.findPlayer(function (current) {
                        return current.name == 'qin_zhaoji';
                    });
                    return !target || get.attitude(target, player) > 0;
                },
                forced: true,
                content() {
                    trigger.player.draw();
                },
            },
            sqzb: {
                charlotte: true,
                trigger: { player: 'die' },
                forceDie: true,
                forced: true,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.name == 'qin_zhaogao' || current.sex == 'male';
                    }) && player.countCards('he');
                },
                content() {
                    var cards = player.getCards('he');
                    var zhaogao = game.findPlayer(function (current) {
                        return current.name == 'qin_zhaogao';
                    });
                    if (zhaogao) zhaogao.gain(cards, player, 'giveAuto');
                    else {
                        var list = [];
                        var list2 = [];
                        game.countPlayer(function (current) {
                            if (current.sex == 'male') {
                                list.push(current);
                                list2.push([]);
                            }
                        });
                        while (cards.length) {
                            list2.randomGet().push(cards.shift());
                        }
                        while (list.length) {
                            var current = list.shift();
                            var current2 = list2.shift();
                            if (current2.length) current.gain(current2, player, 'giveAuto');
                        }
                    }
                },
            },
            qin_gaizhao: {
                forbid: ['identity'],
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { target: 'useCardToTarget' },
                filter(event, player) {
                    if (get.info(event.card).multitarget) return false;
                    if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                    return game.hasPlayer(function (current) {
                        return current.isFriendOf(player) && !event.targets.includes(current);
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('qin_gaizhao'), '将' + get.translation(trigger.card) + '转移给其他友方角色', function (card, player, target) {
                        var trigger = _status.event.getTrigger();
                        return target.isFriendOf(player) && !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                    }).set('rawEffect', get.effect(player, trigger.card, trigger.player, player)).ai = function (target) {
                        var trigger = _status.event.getTrigger();
                        return 0.1 + get.effect(target, trigger.card, trigger.player, _status.event.player) - _status.event.rawEffect;
                    };
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill(event.name, target);
                        trigger.targets[trigger.targets.indexOf(player)] = target;
                    }
                },
            },
            qin_haizhong: {
                audio: 'ext:活动武将/audio/skill:true',
                marktext: '害',
                intro: { content: 'mark', name: '害忠', name2: '害' },
                trigger: { global: 'recoverEnd' },
                filter(event, player) {
                    return event.player != player;
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                content() {
                    'step 0'
                    var num = Math.max(1, trigger.player.countMark('qin_haizhong'));
                    event.num = num;
                    trigger.player.chooseToDiscard('害忠：弃置一张红色牌，或受到' + num + '点伤害', 'he', { color: 'red' }).ai = lib.skill.qin_bianfa.check;
                    'step 1'
                    if (!result.bool) trigger.player.damage(num);
                    trigger.player.addMark('qin_haizhong', 1);
                },
            },
            qin_zhangzheng: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'phaseZhunbeiBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('qin_zhangzheng'), lib.filter.notMe, [1, game.players.length]).set('ai', function (current) {
                        var player = _status.event.player;
                        return -get.attitude(player, current);
                    });
                    'step 1'
                    if (result.bool) {
                        result.targets.sortBySeat();
                        player.logSkill('qin_zhangzheng', result.targets);
                        event.targets = result.targets;
                    }
                    else event.finish();
                    'step 2'
                    if (targets.length) {
                        var target = targets.shift();
                        event.target = target;
                        if (target.countDiscardableCards(target, 'h')) target.chooseToDiscard('h', '掌政：弃置一张手牌或失去1点体力').ai = lib.skill.qin_bianfa.check;
                        else {
                            target.loseHp();
                            event.redo();
                        }
                    }
                    else event.finish();
                    'step 3'
                    if (!result.bool) target.loseHp();
                    event.goto(2);
                },
            },
            qin_wuan: {
                global: 'qin_wuan_buff',
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { global: 'damageBegin1' },
                filter(event, player) {
                    return event.source && event.card && event.card.name == 'sha' && (event.source == player || (get.mode() != 'identity' && event.source.isFriendOf(player)));
                },
                forced: true,
                content() {
                    if (trigger.player != player) player.addExpose(0.25);
                    trigger.num++;
                },
                subSkill: {
                    buff: {
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num += game.countPlayer(function (current) {
                                    return current.hasSkill('qin_wuan') && (current == player || (get.mode() != 'identity' && current.isFriendOf(player)));
                                });
                            },
                        },
                    },
                },
            },
            qin_fachu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { global: 'dying' },
                filter(event, player) {
                    return player.isIn() && event.source == player && event.player != player && event.player.hasEnabledSlot();
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                content() {
                    var list = Array.from({ length: 5 }).map((_, i) => i + 1);
                    list = list.filter(i => trigger.player.hasEnabledSlot(i));
                    trigger.player.disableEquip(list.randomGet());
                },
            },
            qin_fenshu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    return event.player == _status.currentPhase && event.player != player && get.type(event.card) == 'trick' && event.getHistory('useCard', evt => get.type(evt.card) == 'trick').indexOf(event) == 0;
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                content() {
                    'step 0'
                    trigger.cancel();
                    game.broadcastAll(ui.clear);
                    'step 1'
                    game.delayx();
                },
            },
            qin_kencao: {
                audio: 'ext:活动武将/audio/skill:true',
                marktext: '功',
                intro: { content: 'mark', name: '垦草', name2: '功' },
                trigger: { global: 'damageAfter' },
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                check(event, player) {
                    if (get.attitude(player, event.source) > 0) return true;
                    return false;
                },
                logTarget: 'source',
                content() {
                    trigger.source.addMark('qin_kencao', trigger.num);
                    if (trigger.source.countMark('qin_kencao') >= 3) {
                        trigger.source.removeMark('qin_kencao', trigger.source.countMark('qin_kencao'));
                        trigger.source.gainMaxHp();
                        trigger.source.recover();
                    }
                },
            },
            qin_yitong: {
                mod: {
                    targetInRange(card, player, target) {
                        if (['shunshou', 'sha'].includes(card.name)) return true;
                    },
                    selectTarget(card, player, range) {
                        if (['shunshou', 'guohe', 'sha', 'huogong'].includes(card.name) && range[1] != -1) range[1] = Infinity;
                    },
                },
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'useCard1' },
                filter(event, player) {
                    return ['shunshou', 'guohe', 'sha', 'huogong'].includes(event.card.name);
                },
                forced: true,
                content() { },
            },
            qin_lianheng: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { global: 'phaseBefore', player: ['enterGame', 'phaseZhunbeiBegin'] },
                filter(event, player) {
                    var list = game.filterPlayer(function (current) {
                        if (current == player) return false;
                        return get.mode() == 'identity' || current.isEnemyOf(player);
                    });
                    return list.length && (event.name != 'phase' || game.phaseNumber == 0);
                },
                forced: true,
                content() {
                    'step 0'
                    var targets = game.filterPlayer(function (current) {
                        if (current == player) return false;
                        return get.mode() == 'identity' || current.isEnemyOf(player);
                    });
                    event.targets = targets;
                    if (trigger.name == 'phaseZhunbei') {
                        for (var target of game.players) {
                            if (target.hasSkill('qin_lianheng_mark')) {
                                player.line(target);
                                target.removeSkill('qin_lianheng_mark');
                            }
                        }
                        if (targets.length < 2) event.finish();
                    }
                    'step 1'
                    var target = targets.randomGet();
                    player.line(target);
                    target.addSkill('qin_lianheng_mark');
                },
                subSkill: {
                    mark: {
                        init: (player) => game.log(player, '获得了', '#g“横”', '标记'),
                        onremove: (player) => game.log(player, '移去了', '#g“横”', '标记'),
                        charlotte: true,
                        mod: {
                            playerEnabled(card, player, target) {
                                if (game.hasPlayer(function (current) {
                                    return current.hasSkill('qin_lianheng') && ((get.mode() == 'identity' && current == target) || (get.mode() != 'identity' && target.isFriendOf(current)));
                                }) || (target.isLinked() && game.lianhenged)) return false;
                            },
                        },
                        marktext: '横',
                        mark: true,
                        intro: {
                            content() {
                                if (get.mode() == 'identity') {
                                    if (game.lianhenged) return '不能对拥有【连横】的角色和已横置角色使用牌';
                                    return '不能对拥有【连横】的角色使用牌';
                                }
                                else {
                                    if (game.lianhenged) return '不能对拥有【连横】的角色的友方角色和已横置角色使用牌';
                                    return '不能对拥有【连横】的角色的友方角色使用牌';
                                }
                            },
                        },
                    },
                },
            },
            qin_zhilu: {
                audio: 'ext:活动武将/audio/skill:true',
                group: 'qin_zhilu2',
                enable: ['chooseToUse', 'chooseToRespond'],
                viewAs: { name: 'sha' },
                filterCard: { color: 'black' },
                prompt: '将一张黑色手牌当作【杀】使用或打出。',
                check(card) { return 1 / (get.value(card) || 0.5) },
                viewAsFilter(player) {
                    return player.countCards('h', { color: 'black' });
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player) {
                        return player.countCards('h', { color: 'black' });
                    },
                },
            },
            qin_zhilu2: {
                audio: 'qin_zhilu',
                enable: ['chooseToUse', 'chooseToRespond'],
                viewAs: { name: 'shan' },
                filterCard: { color: 'red' },
                prompt: '将一张红色手牌当作【闪】使用或打出。',
                check(card) { return 1 / (get.value(card) || 0.5) },
                viewAsFilter(player) {
                    return player.countCards('h', { color: 'red' });
                },
                ai: {
                    respondShan: true,
                    skillTagFilter(player) {
                        return player.countCards('h', { color: 'red' });
                    },
                },
            },
            qin_yuanli: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'phaseUseBegin' },
                forced: true,
                content() {
                    var list = [];
                    for (var i = 0; i < 2; i++) {
                        var cardx = get.cardPile2(function (card) {
                            return get.type(card) == 'trick' && !list.includes(card)
                        });
                        if (cardx) list.push(cardx);
                    }
                    if (list.length) player.gain(list, 'draw');
                },
            },
            qin_xichu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { target: 'useCardToTarget' },
                filter(event, player) {
                    return event.card.name == 'sha' && game.hasPlayer(function (current) {
                        return current != player && current != event.player && lib.filter.targetInRange(event.card, event.player, current);
                    });
                },
                forced: true,
                logTarget: 'player',
                content() {
                    'step 0'
                    trigger.player.chooseToDiscard('戏楚：弃置一张点数为6的牌，或令' + get.translation(player) + '将此【杀】转移', function (card) {
                        return get.number(card) == 6;
                    }).ai = function (card) { return 100 - get.value(card) };
                    'step 1'
                    if (!result.bool) {
                        player.chooseTarget(true, '将此【杀】转移给' + get.translation(trigger.player) + '攻击范围内的一名角色', true, function (card, player, target) {
                            var trigger = _status.event.getTrigger();
                            return target != player && target != trigger.player && !trigger.targets.includes(target) && lib.filter.targetInRange(trigger.card, trigger.player, target)
                        }).ai = function (target) {
                            var trigger = _status.event.getTrigger();
                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                        };
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        player.line(result.targets[0]);
                        trigger.targets[trigger.targets.indexOf(player)] = result.targets[0];
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (card.name == 'sha' && !player.countCards('h', { number: 6 }) && game.hasPlayer(function (current) {
                                return current != player && current != target && lib.filter.targetInRange(card, trigger.player, current) && get.effect(current, card, player, player) < 0;
                            })) return 0;
                        },
                    },
                },
            },
            qin_xiongbian: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return get.type(event.card) == 'trick';
                },
                forced: true,
                content() {
                    'step 0'
                    player.judge(function (result) {
                        if (result.number == 6) return 1;
                        return -1;
                    }).set('no6', get.attitude(player, trigger.player) > 0);
                    'step 1'
                    if (result.bool) trigger.getParent().cancel();
                    game.broadcastAll(ui.clear);
                },
            },
            qin_qiaoshe: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: {
                    global: 'judge',
                },
                direct: true,
                content() {
                    'step 0'
                    var card = trigger.player.judging[0];
                    var judge0 = trigger.judge(card);
                    var judge1 = 0;
                    var choice = trigger.no6 && card.number == 6 ? '+1' : 'cancel2';
                    var attitude = get.attitude(player, trigger.player);
                    var list = [];
                    for (var i = -3; i < 4; i++) {
                        if (i == 0) continue;
                        list.push((i > 0 ? '+' : '') + i);
                        if (!trigger.no6) {
                            var judge2 = (trigger.judge({
                                name: get.name(card),
                                suit: get.suit(card),
                                number: get.number(card) + i,
                                nature: get.nature(card),
                            }) - judge0) * attitude;
                            if (judge2 > judge1) {
                                choice = (i > 0 ? '+' : '') + i;
                                judge1 = judge2;
                            }
                        }
                    }
                    list.push('cancel2');
                    player.chooseControl(list).set('ai', function () {
                        return _status.event.choice;
                    }).set('choice', choice).prompt = get.prompt2(event.name);
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill(event.name, trigger.player);
                        game.log(trigger.player, '判定结果点数', '#g' + result.control);
                        player.popup(result.control, 'fire');
                        if (!trigger.fixedResult) trigger.fixedResult = {};
                        if (!trigger.fixedResult.number) trigger.fixedResult.number = get.number(trigger.player.judging[0]);
                        trigger.fixedResult.number += parseInt(result.control);
                    }
                },
            },
            qin_shihuang: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { global: 'phaseAfter' },
                filter(event, player) {
                    var num = game.roundNumber / 100 * 6;
                    if (num > 1) num = 1;
                    return event.player != player && Math.random() <= num;
                },
                forced: true,
                content() {
                    player.insertPhase();
                },
            },
            qin_zulong: {
                derivation: ['qin_chuanguoyuxi', 'qin_zhenlongchangjian'],
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                content() {
                    var list = [], draw = true;
                    var card1 = get.cardPile(function (card) {
                        return card.name == 'qin_zhenlongchangjian';
                    });
                    var card2 = get.cardPile(function (card) {
                        return card.name == 'qin_chuanguoyuxi';
                    });
                    if (card1) {
                        draw = false;
                        list.push(card1);
                    }
                    else {
                        var target1 = game.findPlayer(function (current) {
                            return current != player && current.countCards('hesjx', function (card) {
                                return card.name == 'qin_zhenlongchangjian';
                            });
                        });
                        if (target1) {
                            draw = false;
                            player.gain(target1.getCards('hesjx', function (card) {
                                return card.name == 'qin_zhenlongchangjian';
                            }), target1, 'give');
                        }
                    }
                    if (card2) {
                        draw = false;
                        list.push(card2);
                    }
                    else {
                        var target2 = game.findPlayer(function (current) {
                            return current != player && current.countCards('hesjx', function (card) {
                                return card.name == 'qin_chuanguoyuxi';
                            });
                        });
                        if (target2) {
                            draw = false;
                            player.gain(target2.getCards('hesjx', function (card) {
                                return card.name == 'qin_chuanguoyuxi';
                            }), target2, 'give');
                        }
                    }
                    if (list.length) {
                        draw = false;
                        player.gain(list, 'gain2');
                    }
                    if (draw) player.draw(2);
                },
            },
            qin_zhenlongchangjian_skill: {
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return get.type(event.card) == 'trick' && player.getHistory('useCard', function (evt) {
                        return get.type(evt.card) == 'trick';
                    }).length == 1;
                },
                forced: true,
                content() {
                    trigger.nowuxie = true;
                },
            },
            qin_chuanguoyuxi_skill: {
                trigger: { player: 'phaseUseBegin' },
                direct: true,
                content() {
                    'step 0'
                    var list = ['nanman', 'wanjian', 'taoyuan', 'wugu'];
                    player.chooseButton([get.prompt2('qin_chuanguoyuxi_skill'), [list, 'vcard']]).set('ai', function (button) {
                        var player = _status.event.player;
                        return player.getUseValue({ name: button.link[2] });
                    });
                    'step 1'
                    if (result.bool) player.chooseUseTarget(result.links[0][2], true, false).logSkill = 'qin_chuanguoyuxi_skill';
                },
            },
            qin_bianfa: {
                derivation: 'qin_shangyangbianfa',
                audio: 'ext:活动武将/audio/skill:true',
                mod: {
                    selectTarget(card, player, range) {
                        if (card.name == 'qin_shangyangbianfa' && range[1] != -1 && game.bianfaed) range[1]++;
                    },
                },
                enable: 'chooseToUse',
                usable: 1,
                filterCard(card) {
                    return get.type(card) == 'trick';
                },
                viewAs: { name: 'qin_shangyangbianfa' },
                viewAsfilter(player) {
                    if (!player.countCards('h', { type: 'trick' })) return false;
                },
                prompt: '将一张普通锦囊牌当作【商鞅变法】使用',
                check(card) {
                    return 1 / (get.value(card) || 0.5);
                },
                ai: {
                    basic: {
                        order: 10,
                        useful: 1,
                        value: 5.5,
                    },
                    result: {
                        target: -1.5,
                    },
                    tag: {
                        damage: 1,
                    },
                },
            },
            qin_limu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return get.type(event.card) == 'trick';
                },
                forced: true,
                content() {
                    trigger.nowuxie = true;
                },
            },
            qin_shangyangbianfa_dying: {
                trigger: { player: 'dying' },
                forced: true,
                popup: false,
                direct: true,
                charlotte: true,
                locked: true,
                filter(event, player) {
                    return event.getParent().type == 'qin_shangyangbianfa';
                },
                content() {
                    'step 0'
                    player.judge(function (card) {
                        return get.color(card) == 'black' ? -1 : 0;
                    })
                    'step 1'
                    if (result.color == 'black') {
                        game.countPlayer(function (current) {
                            if (current != player) current.addTempSkill('qin_nosave', '_saveAfter');
                        });
                    }
                },
            },
            qin_nosave: {
                charlotte: true,
                mod: { cardSavable: () => false },
            },
            qin_jinnu: {
                derivation: 'qin_qinnu',
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return !player.getEquip('qin_qinnu');
                },
                forced: true,
                content() {
                    var card = game.createCard('qin_qinnu', Math.random() < 0.5 ? 'diamond' : 'club', 1);
                    player.chooseUseTarget(card, true);
                },
            },
            qin_qinnu_skill: {
                inherit: 'qinggang_skill',
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                },
            },
            qin_changjian: {
                audio: 'ext:活动武将/audio/skill:true',
                mod: {
                    attackFrom(from, to, distance) {
                        return distance - 1;
                    },
                },
                trigger: { player: 'useCard2' },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                forced: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('qin_changjian'), '为' + get.translation(trigger.card) + '增加一个目标，或取消并令' + get.translation(trigger.card) + '伤害＋1', function (card, player, target) {
                        return !_status.event.sourcex.includes(target) && player.canUse('sha', target);
                    }).set('sourcex', trigger.targets).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'sha' }, player, player);
                    });
                    'step 1'
                    if (result.bool) {
                        if (!event.isMine() && !_status.connectMode) game.delayx();
                        event.target = result.targets[0];
                        player.line(event.target);
                        trigger.targets.push(event.target);
                    }
                    else {
                        if (!trigger.baseDamage) ttrigger.baseDamage = 1;
                        trigger.baseDamage++;
                    }
                },
            },
            qin_liangju: {
                group: 'qin_liangju_judge',
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                forced: true,
                content() {
                    'step 0'
                    trigger.target.judge(function (result) {
                        if (get.suit(result) != 'spade') return 1;
                        return -1;
                    }).set('judge2', function (result) {
                        return result.bool == false ? true : false;
                    });
                    'step 1'
                    if (result.suit == 'spade') trigger.getParent().directHit.add(trigger.target);
                },
                subSkill: {
                    judge: {
                        audio: 'qin_liangju',
                        trigger: { target: 'useCardToTargeted' },
                        filter(event, player) {
                            return event.card.name == 'sha';
                        },
                        forced: true,
                        content() {
                            'step 0'
                            player.judge(function (card) {
                                return get.suit(card) == 'heart' ? 2 : -2;
                            });
                            'step 1'
                            if (result.suit == 'heart') trigger.getParent().excluded.add(player);
                        },
                    },
                },
            },
            qin_fangzhen: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    if (event.player == player) return false;
                    return (event.card.name == 'sha' || get.type(event.card) == 'trick') && player.inRange(event.player);
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                content() {
                    'step 0'
                    player.judge(function (card) {
                        return get.color(card) == 'black' ? 1 : -1;
                    });
                    'step 1'
                    if (result.judge > 0) player.useCard({ name: 'sha' }, trigger.player, false);
                },
                ai: {
                    threaten: 0.5,
                    expose: 0.25,
                },
            },
            qin_changbing: {
                audio: 'ext:活动武将/audio/skill:true',
                mod: {
                    attackFrom(from, to, distance) {
                        return distance - 2;
                    },
                },
            },
            qin_tongpao: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { global: 'useCardAfter' },
                filter(event, player) {
                    return event.player != player && !player.getEquips(2).length && get.subtype(event.card) == 'equip2';
                },
                forced: true,
                content() {
                    var card = game.createCard2(trigger.card.name, trigger.card.suit, trigger.card.number);
                    card._destroy = true;
                    player.$gain2(card);
                    game.delayx();
                    player.equip(card);
                },
            },
            qin_shashen: {
                group: 'qin_shashen_draw',
                audio: 'ext:活动武将/audio/skill:true',
                enable: ['chooseToUse', 'chooseToRespond'],
                filterCard: true,
                viewAs: { name: 'sha' },
                viewAsfilter(player) {
                    if (!player.countCards('h')) return false;
                },
                prompt: '将一张手牌当作【杀】使用或打出',
                check(card) {
                    return 5 - get.value(card);
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player) {
                        if (!player.countCards('h')) return false;
                    },
                },
                subSkill: {
                    draw: {
                        audio: 'qin_shashen',
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            if (!event.card || event.card.name != 'sha') return false;
                            var history = player.getHistory('useCard', function (evt) {
                                return evt.card == event.card;
                            })[0];
                            return player.getHistory('useCard', function (evt) {
                                return evt.card.name == 'sha';
                            }).indexOf(history) == 0;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.draw();
                        },
                    },
                },
            },
            qin_changsheng: {
                audio: 'ext:活动武将/audio/skill:true',
                mod: {
                    targetInRange(card) {
                        if (card.name == 'sha') return true;
                    },
                },
            },
            qin_taihou: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.player != player && event.player.sex == 'male' && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
                },
                forced: true,
                logTarget: 'player',
                content() {
                    'step 0'
                    var type = get.type2(trigger.card);
                    var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                    trigger.player.chooseToDiscard('弃置一张' + get.translation(type) + '牌，否则' + get.translation(trigger.card) + '对' + get.translation(player) + '无效', function (card) {
                        return get.type2(card) == type;
                    }).set('ai', function (card) {
                        if (_status.event.eff > 0) {
                            return 10 - get.value(card);
                        }
                        return 0;
                    }).set('type', type).set('eff', eff);
                    'step 1'
                    if (!result.bool) trigger.getParent().excluded.add(player);
                },
            },
            qin_youmie: {
                audio: 'ext:活动武将/audio/skill:true',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('he');
                },
                discard: false,
                prepare: 'give',
                position: 'he',
                filterCard: true,
                filterTarget: true,
                check(card) {
                    if (get.position(card) == 'e') return -1;
                    return 5 - get.value(card);
                },
                usable: 1,
                prompt: '将一张牌交给一名角色，该角色于其回合外无法使用或打出牌直到你的下个回合开始',
                content() {
                    target.gain(cards, player, 'giveAuto');
                    target.addSkill('qin_youmie_debuff');
                    player.when('phaseBegin').vars({ target: target }).then(() => target.removeSkill('qin_youmie_debuff'));
                },
                ai: {
                    order: 7,
                    result: { target: -1 },
                },
                subSkill: {
                    debuff: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        marktext: '灭',
                        mod: {
                            cardEnabled2(card, player, target) {
                                if (_status.currentPhase != player) return false;
                            },
                        },
                        intro: { content: '回合外不能使用或打出牌' },
                        //落 井 下 石
                        ai: { threaten: 5 },
                    },
                },
            },
            qin_yintui: {
                group: 'qin_yintui_damage',
                audio: 'ext:活动武将/audio/skill:true',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (player.countCards('h')) return false;
                    var evt = event.getl(player);
                    return evt?.player == player && evt.hs?.length > 0;
                },
                forced: true,
                content() {
                    player.turnOver();
                },
                ai: {
                    noh: true,
                    skillTagfilter(player, tag) {
                        if (player.countCards('h') != 1) return false;
                    },
                    effect: {
                        target(card, player, target) {
                            if (!target.isTurnedOver()) return;
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            var num = get.tag(card, 'damage');
                            if (num) {
                                if (num > 1) return 0.5;
                                return 0;
                            }
                        },
                    },
                },
                subSkill: {
                    damage: {
                        audio: 'qin_yintui',
                        trigger: { player: 'damageBegin3' },
                        filter(event, player) {
                            return player.isTurnedOver();
                        },
                        forced: true,
                        content() {
                            trigger.num--;
                            player.draw();
                        },
                    },
                },
            },
            qin_jugu: {
                audio: 'ext:活动武将/audio/skill:true',
                audioname2: { bilibili_litiansuo: 'haoshi2' },
                inherit: 'jugu',
            },
            qin_qihuo: {
                audio: 'ext:活动武将/audio/skill:true',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('he');
                },
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        return ui.create.dialog('###奇货###' + lib.translate.qin_qihuo_info);
                    },
                    chooseControl(event, player) {
                        var list = [];
                        for (var type2 of ['basic', 'trick', 'equip']) {
                            if (player.countCards('he', { type: [type2].addArray(type2 == 'trick' ? ['delay'] : []) })) list.push(type2);
                        }
                        list.push('cancel2');
                        return list;
                    },
                    check(event, player) {
                        var map = {};
                        player.getCards('he').forEach(function (card) {
                            var type = get.type2(card);
                            if (!map[type]) map[type] = 0;
                            map[type]++;
                        });
                        var list = Object.keys(map).sort((a, b) => map[b] - map[a]);
                        return list[0];
                    },
                    backup(result, player) {
                        return {
                            audio: 'qin_qihuo',
                            type: result.control,
                            delay: 0,
                            content() {
                                var cards = player.getCards('he', function (card) {
                                    return get.type2(card) == lib.skill.qin_qihuo_backup.type;
                                });
                                player.discard(cards);
                                player.draw(cards.length);
                            },
                        }
                    },
                },
                ai: {
                    order: 1,
                    result: { player: 1 },
                },
            },
            qin_chunqiu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: ['useCard', 'respond'] },
                filter(event, player) {
                    return player.getHistory('useCard').length + player.getHistory('respond').length == 1;
                },
                forced: true,
                content() {
                    player.draw();
                },
            },
            qin_baixiang: {
                audio: 'ext:活动武将/audio/skill:true',
                skillAnimation: true,
                animationColor: 'thunfer',
                unique: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') >= player.hp * 3;
                },
                derivation: ['qin_zhongfu', 'new_rejianxiong', 'rerende', 'rezhiheng'],
                content() {
                    'step 0'
                    player.awakenSkill('qin_baixiang');
                    var num = player.maxHp - player.hp;
                    if (num > 0) player.recover(num);
                    'step 1'
                    player.popup('qin_zhongfu');
                    player.addSkills('qin_zhongfu');
                },
                ai: {
                    maixie: true,
                    effect: {
                        target(card, player, target) {
                            if (!target.hasFriend()) return;
                            if (get.tag(card, 'damage') == 1 && target.hp * 3 > target.countCards('h') && (target.hp - 1) * 3 <= target.countCards('h') && target.hp > 1 && !target.isTurnedOver() &&
                                _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                        },
                    },
                },
            },
            qin_zhongfu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                content() {
                    const skill = ['new_rejianxiong', 'rerende', 'rezhiheng'].randomGet();
                    player.popup(skill);
                    player.addTempSkills(skill, { player: "phaseBegin" });
                },
            },
            qin_shanwu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'useCardToPlayered' },
                forced: true,
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                content() {
                    'step 0'
                    player.judge(function (card) {
                        return (get.color(card) == 'black') ? 2 : -2;
                    });
                    'step 1'
                    if (result.judge > 0) trigger.getParent().directHit.add(trigger.target);
                },
                group: 'qin_shanwu_judge',
                subSkill: {
                    judge: {
                        audio: 'qin_shanwu',
                        trigger: { target: 'useCardToTargeted' },
                        filter(event, player) {
                            if (event.player == player) return false;
                            if (event.card.name == 'sha') return true;
                            return false;
                        },
                        forced: true,
                        content() {
                            'step 0'
                            player.judge(function (card) {
                                return (get.color(card) == 'red') ? 2 : -2;
                            });
                            'step 1'
                            if (result.judge > 0) trigger.getParent().excluded.add(player);
                        },
                    },
                },
            },
            qin_daqi: {
                audio: 'ext:活动武将/audio/skill:true',
                marktext: '期',
                intro: { content: 'mark', name: '大期', name2: '期' },
                trigger: { player: ['phaseZhunbeiBegin', 'qin_xianjiAfter'] },
                forced: true,
                filter(event, player) {
                    if (event.name == 'qin_xianji') return true;
                    return player.countMark('qin_daqi') >= 10;
                },
                content() {
                    player.removeMark('qin_daqi', player.countMark('qin_daqi'));
                    var hp = player.maxHp - player.hp;
                    var card = player.maxHp - player.countCards('h');
                    if (hp > 0) player.recover(hp);
                    if (card > 0) player.draw(card);
                },
                group: 'qin_daqi_addmark',
                subSkill: {
                    addmark: {
                        trigger: { player: ['damageAfter', 'useCard', 'respond'], source: 'damageSource' },
                        audio: 'qin_daqi',
                        forced: true,
                        content() {
                            player.addMark('qin_daqi', trigger.num || 1);
                        },
                    },
                },
            },
            qin_xianji: {
                unique: true,
                mark: true,
                limited: true,
                audio: 'ext:活动武将/audio/skill:true',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countMark('qin_daqi') > 0;
                },
                check(event, player) {
                    var hp = player.maxHp - player.hp;
                    var card = 3 - player.countCards('he');
                    if ((hp + card) > 0) return true;
                    return false;
                },
                skillAnimation: true,
                animationColor: 'thunder',
                content() {
                    'step 0'
                    player.awakenSkill('qin_xianji');
                    'step 1'
                    var hs = player.getCards('he');
                    if (hs.length) player.discard(hs);
                    player.removeMark('qin_daqi', player.countMark('qin_daqi'));
                    player.loseMaxHp();
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            var hp = player.maxHp - player.hp;
                            var card = player.maxHp - player.countCards('h');
                            return 0 + hp + card;
                        },
                    },
                },
            },
            qin_huoluan: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: ['useSkillAfter', 'logSkill'] },
                filter(event, player) {
                    return event.skill == 'qin_daqi';
                },
                forced: true,
                content() {
                    var targets = game.filterPlayer().remove(player);
                    player.line(targets);
                    for (var i of targets) i.damage();
                },
            },
        },
        translate: {
            hezong_jun: '合纵抗秦·BOSS',
            hezong_bing: '合纵抗秦·兵卒',
            qin_yingzheng: '嬴政',
            qin_shangyang: '商鞅',
            qin_nushou: '秦军弩手',
            qin_qibing: '秦军骑兵',
            qin_bubing: '秦军步兵',
            qin_baiqi: '白起',
            qin_miyue: '芈月',
            qin_lvbuwei: '吕不韦',
            qin_zhaoji: '赵姬',
            qin_zhaogao: '赵高',
            qin_zhangyi: '张仪',
            qin_lianheng: '连横',
            qin_lianheng_info: '锁定技，游戏开始时，你令随机一名敌方角色获得「横」标记。拥有「横」标记的角色使用牌无法指定友方角色为目标。准备阶段，场上所有角色弃置「横」标记，然后若场上存活的敌方角色数大于1，则你令随机一名敌方角色获得「横」标记。',
            qin_lianheng_info_identity: '锁定技，游戏开始时，你令随机一名其他角色获得“横”标记。拥有“横”标记的角色使用牌无法指定你为目标。准备阶段，场上所有角色弃置“横”标记，然后若场上存活的其角色数大于1，则你令随机一名其他角色获得“横”标记。',
            qin_xichu: '戏楚',
            qin_xichu_info: '锁定技，当你成为【杀】的目标时，若其攻击范围内有其他角色，则该角色需要弃置一张点数为6的牌，否则此【杀】的目标转移给其攻击范围内你指定的另一名角色。',
            qin_xiongbian: '雄辩',
            qin_xiongbian_info: '锁定技，当你成为普通锦囊牌的目标或之一时，你进行判定，若点数为6，你令此牌无效。',
            qin_qiaoshe: '巧舌',
            qin_qiaoshe_info: '当一名角色进行判定时，你可以令其判定牌的点数加减3以内的任意值。',
            qin_yitong: '一统',
            qin_yitong_info: '锁定技，你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】无距离限制且可以指定任意名角色为目标，你使用【杀】和【顺手牵羊】无距离限制。',
            qin_shihuang: '始皇',
            qin_shihuang_info: '锁定技，其他角色的回合结束后，你有X%的几率获得一个额外的回合（X为当前轮数*6，且X最大为100）。',
            qin_zulong: '祖龙',
            qin_zulong_info: '锁定技，准备阶段，若本局游戏中有【传国玉玺】或【真龙长剑】且不在你的手牌区或装备区，你获得之；否则你摸两张牌。',
            qin_fenshu: '焚书',
            qin_fenshu_info: '其他角色于其回合内使用第一张普通锦囊牌时，你可令此牌无效。',
            qin_zhenlongchangjian_skill: '真龙长剑',
            qin_zhenlongchangjian_skill_info: '你于每回合使用的第一张非延时性锦囊无法被抵消。',
            qin_chuanguoyuxi_skill: '传国玉玺',
            qin_chuanguoyuxi_skill_info: '出牌阶段开始时，你可以从【南蛮入侵】、【万箭齐发】、【桃园结义】、【五谷丰登】中选择一张使用。',
            qin_qinnu: '秦弩',
            qin_qinnu_info: '锁定技。当你使用【杀】指定目标后，你令其防具无效；你的使用【杀】的次数上限+1；当你失去装备区里的【秦弩】，你令此牌销毁。',
            qin_qinnu_skill: '秦弩',
            qin_qinnu_skill_info: '当你使用【杀】指定一个目标后，你令其防具无效，你的出牌阶段内，可使用的【杀】数量+1；当你失去装备区里的【秦弩】，你令此牌销毁。',
            qin_bianfa: '变法',
            qin_bianfa_info: '出牌阶段限一次，你可以将任意一张普通锦囊牌当【商鞅变法】使用。',
            qin_limu: '立木',
            qin_limu_info: '锁定技，你使用的普通锦囊牌无法被【无懈可击】抵消。',
            qin_kencao: '垦草',
            qin_kencao_info: '场上有角色造成伤害后，你可以令其获得与伤害值数目相等的「功」标记，然后若其「功」标记数不小于三，则其弃置所有「功」标记，增加1点体力上限，并回复1点体力。',
            qin_shangyangbianfa_dying: '商鞅变法',
            qin_shangyangbianfa_dying_info: '造成随机1~2点伤害，若该角色进入濒死状态，则进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。',
            qin_jinnu: '劲弩',
            qin_jinnu_info: '锁定技，准备阶段，若你的装备区里没有【秦弩】，你使用一张【秦弩】。',
            qin_changjian: '长剑',
            qin_changjian_info: '锁定技。①你的攻击范围+1。②你使用【杀】指定目标后，须选择一项：①令一名角色成为此牌的额外目标；②令此【杀】伤害+1。',
            qin_liangju: '良驹',
            qin_liangju_info: '锁定技，当你使用【杀】指定目标后/当你成为【杀】的目标后，目标角色/你进行判定，若判定结果为黑桃/红桃，则其不可响应此【杀】/此【杀】对你无效。',
            qin_fangzhen: '方阵',
            qin_fangzhen_info: '当你成为其他角色使用【杀】或普通锦囊的目标后，若其在你的攻击范围内，你可以进行判定，若为黑色，则视为你对其使用一张【杀】。',
            qin_changbing: '长兵',
            qin_changbing_info: '锁定技，你的攻击范围+2。',
            qin_tongpao: '同袍',
            qin_tongpao_info: '锁定技，若你没有装备防具，其他角色使用防具牌时，你视为使用一张同名防具牌（通过〖同袍〗使用的防具牌离开装备区时销毁）。',
            qin_wuan: '武安',
            qin_wuan_info: '锁定技，友方角色使用【杀】的次数上限+1，使用【杀】造成的伤害+1。',
            qin_wuan_info_identity: '锁定技，你使用【杀】的次数上限+1，使用【杀】造成的伤害+1。',
            qin_shashen: '杀神',
            qin_shashen_info: '你可以将一张手牌当作【杀】使用或打出。每回合你使用的第一张【杀】造成伤害后，你摸一张牌。',
            qin_fachu: '伐楚',
            qin_fachu_info: '当你对其他角色造成伤害而导致其进入濒死状态后，你可以随机废除其一个装备区。',
            qin_changsheng: '常胜',
            qin_changsheng_info: '锁定技，你使用【杀】无距离限制。',
            qin_zhangzheng: '掌政',
            qin_zhangzheng_info: '准备阶段，你可以选择任意名其他角色，这些角色依次选择一项：1.弃置一张手牌；2.失去1点体力。',
            qin_taihou: '太后',
            qin_taihou_info: '锁定技，男性角色对你使用【杀】或普通锦囊牌时，需要额外弃置一张同种类型的牌，否则此牌无效。',
            qin_youmie: '诱灭',
            qin_youmie_info: '出牌阶段限一次，你可以将一张牌交给一名角色，若如此做，直到你的下个回合开始，该角色于其回合外无法使用或打出牌。',
            qin_yintui: '隐退',
            qin_yintui_info: '锁定技，当你失去最后一张手牌时，你翻面。你的武将牌背面朝上时，若受到伤害，令此伤害-1，然后摸一张牌。',
            qin_jugu: '巨贾',
            qin_jugu_info: '锁定技，你的手牌上限+X；游戏开始时，你多摸X张牌（X为你的体力上限）。',
            qin_qihuo: '奇货',
            qin_qihuo_backup: '奇货',
            qin_qihuo_info: '出牌阶段限一次，你可以弃置一种类型的牌，然后摸等量的牌。',
            qin_chunqiu: '春秋',
            qin_chunqiu_info: '锁定技，你于每个回合使用或打出第一张牌时，摸一张牌。',
            qin_baixiang: '拜相',
            qin_baixiang_info: '觉醒技，准备阶段，若你的手牌数不小于你当前体力值的三倍，则你将体力回复至体力上限，然后获得技能〖仲父〗。',
            qin_zhongfu: '仲父',
            qin_zhongfu_info: '锁定技，准备阶段，你随机获得『〖奸雄〗、〖仁德〗、〖制衡〗』中的一个直到你的下个回合开始。',
            qin_shanwu: '善舞',
            qin_shanwu_info: '锁定技。①你使用【杀】指定目标后，你进行判定，若为黑色，则目标角色不能使用【闪】。②当你成为【杀】的目标后，你进行判定，若为红色，则此【杀】无效。',
            qin_daqi: '大期',
            qin_daqi_info: '锁定技。①当你使用一张手牌时/打出一张手牌时/造成1点伤害后/受到1点伤害后，你获得1个“期”标记。②准备阶段，若你拥有的“期”标记不小于10个，则你失去所有的“期”标记，将体力回复至体力上限并将手牌补至体力上限。',
            qin_xianji: '献姬',
            qin_xianji_info: '限定技，出牌阶段，你可以弃置所有牌并移去所有的“期”标记，然后减1点体力上限并发动〖大期②〗。',
            qin_huoluan: '祸乱',
            qin_huoluan_info: '锁定技，当你发动〖大期②〗结算完毕后，你对所有其他角色造成1点伤害。',
            qin_zhilu: '指鹿',
            qin_zhilu2: '指鹿',
            qin_zhilu_info: '你可以将一张黑色/红色手牌当作【杀】/【闪】使用或打出。',
            qin_gaizhao: '改诏',
            qin_gaizhao_info: '当你成为【杀】或除【借刀杀人】外的普通锦囊牌的目标后，你可以将此牌的目标改为其他不为此牌目标的一名友方角色。',
            qin_haizhong: '害忠',
            qin_haizhong_info: '其他角色回复体力时，你可以令其选择一项：①弃置一张红色牌；②受到你造成的X点伤害（X为该角色拥有的「害」标记且X至少为1），然后该角色获得1枚「害」标记。',
            qin_yuanli: '爰历',
            qin_yuanli_info: '锁定技，出牌阶段开始时，你获得两张普通锦囊牌。',
            bftq: '变法图强',
            bftq_info: '牌堆中加入三张【商鞅变法】。若商鞅在场，则商鞅使用【商鞅变法】可以额外指定一个目标。',
            hzlh: '合纵连横',
            hzlh_info: '每轮开始时，场上所有的角色进入横置状态。若张仪在场，拥有「横」标记的角色使用牌不能指定横置的角色为目标。',
            cpzz: '长平之战',
            cpzz_info: '游戏进入鏖战模式，且杀需要两张闪响应。若白起在场，则白起及其友方角色于摸牌阶段获得一张【桃】。',
            hslh: '横扫六合',
            hslh_info: '牌堆中加入【传国玉玺】和【真龙长剑】。若嬴政在场，则其装备之。',
            lscq: '吕氏春秋',
            lscq_info: '本局游戏中，所有男性角色摸牌阶段的摸牌数+1。若吕不韦在场，则吕不韦于回合外获得牌时，其额外摸一张牌。',
            sqzb: '沙丘之变',
            sqzb_info: '本局游戏中，阵亡角色的手牌和装备牌改为随机分配给场上所有的男性角色。若赵高在场，则改为赵高获得之。',
            zjzl: '赵姬之乱',
            zjzl_info: '本局游戏中，男性角色每回合第一次造成伤害时，受伤害角色摸一张牌。若赵姬在场，此效果的适用范围改为所有非秦势力角色。',
            scth: '始称太后',
            scth_info: '本局游戏中，女性角色的体力值和体力上限+1。若芈月在场，男性角色的回合开始时需令芈月回复1点体力或摸一张牌。',
            qin_shangyangbianfa: '商鞅变法',
            qin_shangyangbianfa_info: '出牌阶段，对一名其他角色使用。对其造成随机1~2点伤害，若该角色进入濒死状态，则进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。',
            qin_zhenlongchangjian: '真龙长剑',
            qin_zhenlongchangjian_info: '你于每回合使用的第一张非延时性锦囊无法被抵消。',
            qin_chuanguoyuxi: '传国玉玺',
            qin_chuanguoyuxi_info: '出牌阶段开始时，你可以从【南蛮入侵】、【万箭齐发】、【桃园结义】、【五谷丰登】中选择一张使用。',
        },
    };
    for (var i in hezongkangqincharacter.character) {
        if (!hezongkangqincharacter.character[i][4]) hezongkangqincharacter.character[i][4] = [];
        hezongkangqincharacter.character[i][4].push(((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/character/' + i + '.jpg');
    }
    game.bolAddGroupNature(['daqin', '秦'], [255, 165, 0]);
    lib.config.all.characters.push('hezongkangqincharacter');
    lib.config.all.sgscharacters.push('hezongkangqincharacter');
    if (!lib.config.characters.includes('hezongkangqincharacter')) lib.config.characters.remove('hezongkangqincharacter');
    lib.translate['hezongkangqincharacter_character_config'] = '<span style="font-family: xingkai">合纵抗秦</span>';
    return hezongkangqincharacter;
};

export default packs;