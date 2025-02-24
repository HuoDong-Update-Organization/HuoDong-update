import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

const packs = function () {
    var huodongcharacter = {
        name: 'huodongcharacter',
        connect: true,
        connectBanned: ['bilibili_zhengxuan'],
        characterSort: {
            huodongcharacter: {
                CLongZhou: ['lz_sufei', 'lz_tangzi', 'lz_liuqi', 'lz_huangquan'],
                CZhengHuo: ['bilibili_zhengxuan', 'bilibili_sp_xuyou', 'old_zuoci'],
                Chuodong: ['bilibili_shengxunyu', 'bilibili_Firewin', 'bilibili_jinglingqiu', 'bilibili_suixingsifeng', 'bilibili_Emptycity', 'bilibili_thunderlei', 'bilibili_lonelypatients', 'bilibili_ningjingzhiyuan', 'bilibili_xizhicaikobe'],
                CDormitory: ['bilibili_yanjing'],
                Cothers: ['bilibili_caifuren', 'bilibili_daxiao', 'bilibili_wangtao', 'bilibili_wangyue', 'bilibili_x_wangtao', 'bilibili_x_wangyue', 'bilibili_xushao', 'bilibili_shen_guojia', 'bilibili_re_xusheng', 'bilibili_kuangshen04', 'bilibili_adong', 'bilibili_zhangrang', 'bilibili_litiansuo', 'decade_huangwudie', 'bilibili_huanggai', 'bilibili_ekeshaoge', 'bilibili_guanning', 'bilibili_wangwang', 'bilibili_zhouxiaomei', 'diy_lvmeng'],
                CDanJi: ['DJ_caiyang', 'DJ_pujing', 'DJ_huban'],
                CSCS: ['biliscs_shichangshi', 'biliscs_zhangrang', 'biliscs_zhaozhong', 'biliscs_sunzhang', 'biliscs_bilan', 'biliscs_xiayun', 'biliscs_hankui', 'biliscs_lisong', 'biliscs_duangui', 'biliscs_guosheng', 'biliscs_gaowang'],
                CXuanDie: ['bfake_jiananfeng', 'bfake_shen_zhangjiao', 'bfake_shen_zhangfei', 'bfake_shen_jiaxu', 'bfake_huanwen'],
            },
        },
        character: {
            bilibili_daxiao: ['female', 'wu', 3, ['bilibili_qiqin', 'dczixi', 'dcweiwan'], ['die:yue_daqiao', 'die:yue_xiaoqiao', 'name:桥|null-桥|null']],
            bilibili_zhouxiaomei: ['female', 'wu', 3, ['dchuishu', 'dcyishu', 'yingzi', 'biyue'], ['name:周|null']],
            bilibili_zhangrang: ['male', 'qun', 3, ['bilibili_taoluan']],
            diy_lvmeng: ['male', 'wu', 4, ['BTkongju', 'BThouqi'], ['die:lvmeng']],
            bilibili_wangwang: ['female', 'shu', 3, ['huguan', 'yaopei', 'mingluan'], ['die:wangtao', 'die:wangyue', 'name:王|桃-王|悦']],
            bilibili_wangtao: ['female', 'shu', 3, ['huguan', 'yaopei', 'dualside'], ['dualside:bilibili_x_wangyue', 'character:wangtao', 'die:wangtao']],
            bilibili_wangyue: ['female', 'shu', 3, ['huguan', 'mingluan', 'dualside'], ['dualside:bilibili_x_wangtao', 'character:wangyue', 'tempname:wangyue', 'die:wangyue']],
            bilibili_x_wangtao: ['female', 'shu', 3, ['huguan', 'yaopei', 'dualside'], ['unseen', 'character:wangtao', 'die:wangtao']],
            bilibili_x_wangyue: ['female', 'shu', 3, ['huguan', 'mingluan', 'dualside'], ['unseen', 'character:wangyue', 'tempname:wangyue', 'die:wangyue']],
            bilibili_guanning: ['male', 'qun', '3/7', ['BTdunshi'], ['forbidai', 'die:guanning']],
            bilibili_huanggai: ['male', 'wu', 4, ['bilibili_kurou', 'bilibili_zhaxiang'], ['die:re_huanggai']],
            bilibili_ekeshaoge: ['male', 'qun', 4, ['bilibili_xueji', 'bilibili_hanran'], ['name:null|null']],
            decade_huangwudie: ['female', 'shu', 3, ['decadexiwu', 'decadehongzhuang']],
            bilibili_litiansuo: ['male', 'qun', 4, ['qin_jugu', 'yijin', 'twzhouhu', 'twharvestinori', 'twzuhuo', 'twzhouzu', 'twhuangjin', 'twguimen', 'twdidao']],
            bilibili_sp_xuyou: ['male', 'qun', 3, ['bolshicai', 'bilibili_fushi'], ['character:sp_xuyou', 'die:sp_xuyou']],
            lz_sufei: ['male', 'qun', 4, ['lzlianpian'], ['character:xf_sufei', 'doublegroup:qun:wu', 'die:xf_sufei']],
            lz_liuqi: ['male', 'shu', 3, ['spwenji', 'lztunjiang'], ['character:liuqi', 'doublegroup:shu:qun', 'die:sp_liuqi']],
            lz_tangzi: ['male', 'wu', 4, ['lzxingzhao'], ['character:tangzi', 'doublegroup:wu:wei', 'die:xf_tangzi']],
            lz_huangquan: ['male', 'wei', 3, ['lzdianhu', 'xinfu_jianji'], ['character:xf_huangquan', 'doublegroup:wei:shu', 'die:xf_huangquan']],
            bilibili_adong: ['male', 'qun', 4, ['jueman', 'oljianman'], ['die:ahuinan', 'die:dongtuna', 'name:null|null']],
            old_zuoci: ['male', 'qun', 3, ['gz_huashen', 'gz_xinsheng']],
            bilibili_shengxunyu: ['male', 'key', 4, ['bilibili_hehu', 'bilibili_jinyan', 'bilibili_yutai'], ['clan:宿舍群', 'clan:肘击群', 'name:熏|鱼']],
            bilibili_Firewin: ['male', 'key', 4, ['jsrgfeiyang', 'jsrgbahu', 'bilibili_tixiang'], ['clan:宿舍群', 'clan:肘击群', 'clan:活动群', 'name:火|赢']],
            bilibili_jinglingqiu: ['male', 'key', '3/4', ['bilibili_tiyi', 'bilibili_zili'], ['clan:活动群', 'name:精灵|球']],
            bilibili_suixingsifeng: ['female', 'key', 4, ['bilibili_liaoxing', 'bilibili_daili', 'bilibili_duoyang'], ['clan:肘家军', 'clan:宿舍群', 'clan:肘击群', 'clan:活动群', 'name:萌新|转型中']],
            bilibili_Emptycity: ['male', 'key', 4, ['bilibili_zhiyou', 'bilibili_guanli'], ['clan:活动群', 'clan:Thunder群', 'name:空|城']],
            bilibili_thunderlei: ['male', 'key', '2/4/3', ['bilibili_Thunder', 'bilibili_qianxi'], ['clan:Thunder群', 'name:雷|null']],
            bilibili_zhengxuan: ['male', 'qun', 3, ['bilibili_zhengjing'], ['character:zhengxuan', 'die:zhengxuan']],
            bilibili_lonelypatients: ['male', 'key', 4, ['bilibili_meihua', 'bilibili_gongyou'], ['clan:活动群', 'name:独孤|null']],
            'bilibili_kuangshen04': ['male', 'shen', '4/6', ['BTmakeBug', 'BTtequ', 'BTguoshou', 'reqimou', 'zhaxiang', 'tairan']],
            bilibili_shen_guojia: ['male', 'wei', '9/9/5', ['stianyi', 'resghuishi', 'bilibili_huishi'], ['doublegroup:shen:wei:wu', 'die:shen_guojia']],
            bilibili_re_xusheng: ['male', 'wu', 4, ['bilibili_pojun', 'kuangcai', 'bilibili_baodao'], ['die:re_xusheng']],
            bilibili_xushao: ['male', 'qun', '1/6', ['bilibili_pingjian'], ['ext:活动武将/image/character/old_xushao.jpg', 'InitFilter:noZhuHp']],
            bilibili_ningjingzhiyuan: ['male', 'key', 4, ['bilibili_liaoxing', 'bilibili_xiezhi', 'bilibili_fazhou'], ['clan:肘家军', 'clan:宿舍群', 'clan:肘击群', 'clan:活动群', 'name:闹动|导近']],
            bilibili_xizhicaikobe: ['male', 'key', 4, ['bilibili_biexiao', 'bilibili_xingshi', 'bilibili_zhangcai'], ['doublegroup:wei:shu:wu:qun:jin', 'clan:肘家军', 'clan:肘击群', 'clan:活动群', 'name:戏|子宓']],
            bilibili_yanjing: ['male', 'key', 3, ['bilibili_dongcha', 'bilibili_mingcha', 'bilibili_huiyan'], ['clan:宿舍群', 'clan:肘击群', 'clan:活动群', 'name:tooenough|眼睛']],
            bilibili_caifuren: ['female', 'qun', 3, ['bilibili_kuilei'], ["name:蔡|null"]],
            //千里走单骑 
            DJ_caiyang: ['male', 'qun', 1, ['yinka', 'zhuixi'], ['character:caiyang']],
            DJ_pujing: ['male', 'qun', 1, ['yinka'], ['character:pujing']],
            DJ_huban: ['male', 'qun', 2, ['yinka'], ['character:huban']],
            //十常侍
            biliscs_shichangshi: ['male', 'qun', 1, ['scstaoluan', 'scschiyan', 'scszimou', 'scspicai', 'scsyaozhuo', 'scsxiaolu', 'scskuiji', 'scschihe', 'scsniqu', 'scsmiaoyu'], ['character:shichangshi', 'name:张|让-赵|忠-孙|璋-毕|岚-夏|恽-韩|悝-栗|嵩-段|珪-郭|胜-高|望']],
            biliscs_zhangrang: ['male', 'qun', 1, ['scstaoluan'], ['character:scs_zhangrang']],
            biliscs_zhaozhong: ['male', 'qun', 1, ['scschiyan'], ['character:scs_zhaozhong']],
            biliscs_sunzhang: ['male', 'qun', 1, ['scszimou'], ['character:scs_sunzhang']],
            biliscs_bilan: ['male', 'qun', 1, ['scspicai'], ['character:scs_bilan']],
            biliscs_xiayun: ['male', 'qun', 1, ['scsyaozhuo'], ['character:scs_xiayun']],
            biliscs_hankui: ['male', 'qun', 1, ['scsxiaolu'], ['character:scs_hankui']],
            biliscs_lisong: ['male', 'qun', 1, ['scskuiji'], ['character:scs_lisong']],
            biliscs_duangui: ['male', 'qun', 1, ['scschihe'], ['character:scs_duangui']],
            biliscs_guosheng: ['male', 'qun', 1, ['scsniqu'], ['character:scs_guosheng']],
            biliscs_gaowang: ['male', 'qun', 1, ['scsmiaoyu'], ['character:scs_gaowang']],
            //蝶设堂
            bfake_jiananfeng: ['female', 'jin', 8, ['bolduliao', 'bolhuidu', 'bolfushou']],
            bfake_shen_jiaxu: ['male', 'shen', 3, ['boljiandai', 'bolfangcan', 'boljuemei', 'bolluoshu'], ['qun', 'character:le_shen_jiaxu']],
            bfake_shen_zhangfei: ['male', 'shen', 5, ['bolbaohe', 'bolrenhai', 'boltiandong'], ['shu', 'character:shen_zhangfei']],
            bfake_shen_zhangjiao: ['male', 'shen', 3, ['bolyifu', 'boltianjie'], ['qun', 'character:shen_zhangjiao']],
            bfake_huanwen: ['male', 'jin', 3, ['bolyuba', 'bolxingjiang']],
            //憋笑--牢戏专属
            smile1: ['', '', 0, [], ['unseen', 'forbidai', ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/default/smile1.jpg']],
            smile2: ['', '', 0, [], ['unseen', 'forbidai', ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/default/smile2.jpg']],
            smile3: ['', '', 0, [], ['unseen', 'forbidai', ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/default/smile3.jpg']],
            smile4: ['', '', 0, [], ['unseen', 'forbidai', ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/default/smile4.jpg']],
            smile5: ['', '', 0, [], ['unseen', 'forbidai', ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/default/smile5.jpg']],
            smile6: ['', '', 0, [], ['unseen', 'forbidai', ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/default/smile6.jpg']],
            smile7: ['', '', 0, [], ['unseen', 'forbidai', ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/default/smile7.jpg']],
        },
        characterIntro: {
            get bilibili_wangwang() {
                return [lib?.characterIntro?.wangtao || '暂无', lib?.characterIntro?.wangyue || '暂无'].join('<br>');
            },
            get bilibili_adong() {
                return [lib?.characterIntro?.ahuinan || '暂无', lib?.characterIntro?.dongtuna || '暂无'].join('<br>');
            },
            get bilibili_daxiao() {
                return [lib?.characterIntro?.daqiao || '暂无', lib?.characterIntro?.xiaoqiao || '暂无'].join('<br>');
            },
            huanwen: '桓温（312年～373年），字元子，谯国龙亢县（今安徽省怀远县）人，出身谯国桓氏。东晋时期权臣、政治家、军事家、书法家，官至大司马，封爵南郡公。晋明帝司马绍女婿，宣城内史桓彝长子，丰城公桓冲之兄。桓温姿貌伟岸，豪爽大度，文武双全，英略过人。初迎娶南康公主，官拜驸马都尉，袭封万宁县男。咸康元年（335年），出任琅琊内史、辅国将军。后参与庾翼北伐，升迁徐州刺史。永和元年（345年），官拜使持节、安西将军、护南蛮校尉、荆州都督，掌握长江上游地区的兵权。溯江而上，灭亡成汉，官拜征西大将军、开府仪同三司，册封临贺郡公，声名大振。累迁大司马，册封南郡公。掌权期间，劝课农桑，改善吏治，抑制兼并，实施土断，重视疾苦，改善教育。三次出兵北伐，击败羌族首领姚襄，收复西晋旧都洛阳，但败北于苻健、慕容垂，在声望受损后，奢求朝廷加九锡，但受制于王谢势力阻碍，终未能如愿。宁康元年（373年）七月，桓温病逝于姑孰，享年六十二岁，东晋朝廷追赠丞相，谥号宣武公，丧礼依照西晋安平王司马孚、西汉大司马霍光旧例。',
            ekeshaoge: '俄何烧戈，羌将。正始八年，陇西、南安、金城、西平诸羌饿何、烧戈、伐同、蛾遮塞等相结叛乱，攻围城邑，南招蜀兵，凉州名胡治无戴复叛应之。讨蜀护军夏侯霸督诸军屯为翅。郭淮退姜维，维遁退。进讨叛羌，斩饿何、烧戈，降服者万馀落。',
            litiansuo: '刘秉义家的婚事被李荣先辈知道了，本来李荣先辈和刘家没什么深仇大恨，但是李荣先辈赚了些黑钱就想强买下刘家的房子，一直希望这刘家没落变卖家产，提高强买的几率。',
            shengxunyu: '活动武将群聊团宠，群管理萌新（转型中）致力于对生熏鱼进行管制和保护以希望生熏鱼能够在群里拥有真正的既健康又快乐的生活。',
            Firewin: '从活动武将群创立至今留存时间最久的人员之一，属于活动武将群元老级人员，现为活动群和管理之一，擅长素材提供。最大特征为每个月都会更换一个愤怒的小鸟的头像，因此别称“鸟鸟”。',
            jinglingqiu: '活动武将群最最最元老级成员，活动武将群聊开创者之一，萌新于无名杀扩展群推广群聊时便使用活动武将，并且经常提供一些可靠的意见，于2022年2月2日劝说萌新创建活动武将扩展交流群。',
            suixingsifeng: '萌新的小号，于某段特殊时间代替萌新大号进行活动武将的更新，这个号有时候由萌新操作，有时候由萌新的朋友操作，有时候由机器人脚本操作。',
            Emptycity: 'Empty city°，活动武将群骨干级成员，于萌新高考时加入活动武将群，给予萌新素材支持，现为活动群管理之一。',
            thunderlei: '雷，过去萌新的同行（现在比萌新厉害太多），负责十周年武将的前瞻制作，活动群和Thunder群之间总保持着良好的关系，过去常常被群友成为在各方串门不累脚，现在主负责千幻的更新和更细致的特效制作。',
            lonelypatients: 'lonely patients，活动群群主，美化大佬，前活动武将二群成员，因完成了活动武将第一次的全露头制作晋升二群管理，后来因合群人数需求成为活动群群主，现负责不定期活动武将的露头包制作。因群主平时较忙，故在群聊内见到群主的次数较为稀少。',
            babybao: '活动群资深元老，隐藏自身实力的高校研究生，为萌新负责提供图片/配音素材、进行武将测试、管理小群' + '<span style="text-decoration:line-through;">' + '反正不要拿respect当作职务' + '</span>' + '等职务。',
            'kuangshen04': '狂神，无名杀究极更新者，但因为其过于超前的思想和当前时间线的发展完全脱轨而致其PR惨遭扑杀，遂黑化为狂神1103形态，别名牢狂，蠢蠢欲动，准备于未来继续打破历史。',
            ningjingzhiyuan: '宁静致远，俗称牢宁，赛尔号抽象玩家，“科密”萌新转型中的心腹，喜爱肘击群，现负责维持群内秩序并将违规群友抓进小黑屋肘击群，肘家军大将之一，抽象集大成者。',
            xizhicaikobe: '戏志才，抽象社恐人士，肘家军大将之一，无名杀<span style="text-decoration: line-through;">非</span>专业人士和爱好者，萌新转型中的任务召唤人。孩子们，其实牢戏<span style="text-decoration: line-through;">并不</span>想要。',
            yanjing: '路边一条',
        },
        characterTitle: {
            'bilibili_kuangshen04': (() => (new Date().getDate() == 8 || new Date().getDate() == 24 || (new Date().getMonth() + 1 == 7 && new Date().getDate() == 2)) ? '孩子们，我回来了' : '复活赛ing')(),
        },
        characterFilter: {
            bilibili_sp_xuyou(mode) {
                return !lib.characterFilter.sp_xuyou(mode);
            },
            lz_tangzi(mode) {
                return mode != 'identity' && mode != 'guozhan';
            },
            bilibili_zhengxuan() {
                return !_status.connectMode;
            },
            'bilibili_kuangshen04'() {
                return new Date().getDate() == 8 || new Date().getDate() == 24;
            },
        },
        perfectPair: {
        },
        card: {
            //闪闪
            bol_shanshan: {
                cardimage: 'shan',
                audio: 'shan',
                global: ['bol_shanshan_skill'],
                fullskin: true,
                type: 'basic',
                notarget: true,
                content() {
                    var evt2 = event.getParent(3)._trigger;
                    evt2.neutralize();
                    var cardx = event.getParent().respondTo;
                    if (cardx && cardx[1] && cardx[1].cards && cardx[1].cards.filterInD('od').length) player.gain(cardx[1].cards.filterInD('od'), 'gain2', 'log');
                },
                ai: {
                    basic: {
                        useful: [6, 4, 3],
                        value: [6, 4, 3],
                    },
                    result: { player: 1 },
                },
            },
            //三首
            bol_sanshou: {
                image: 'ext:活动武将/image/card/bol_sanshou.png',
                fullimage: true,
                type: 'equip',
                subtype: 'equip2',
                skills: ['bol_sanshou_skill'],
                ai: {
                    basic: { equipValue: 7.5 },
                },
            },
            //化身牌
            huashen_unknown: {
                fullimage: true,
                image: 'ext:活动武将/image/card/huashen_unknown.jpg'
            },
            //吴起兵法
            bol_wuqibingfa: {
                cardimage: 'taigongyinfu',
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                loseDelay: false,
                onLose() {
                    cards.forEach(card => {
                        card.fix();
                        card.remove();
                        card.destroyed = true;
                        game.log(card, '被销毁了');
                    });
                    player.addTempSkill('bol_wuqibingfa');
                },
                skills: [],
                ai: {
                    order: 10,
                    equipValue(card, player) {
                        return player.getEquips('bol_wuqibingfa').length ? 0 : 5;
                    },
                    basic: { equipValue: 5 },
                },
            },
        },
        skill: {
            bolshicai: {
                audio: 'spshicai',
                inherit: 'spshicai',
                filter(event, player) {
                    return !player.hasCard(c => c.hasGaintag('bolshicai'), 'h');
                },
                content() {
                    game.log(player, '获得了牌堆顶的一张牌');
                    player.gain(get.cards()[0], 'draw').gaintag.add(event.name);
                },
                group: 'bolshicai_mark',
                subSkill: {
                    mark: {
                        inherit: 'spshicai_mark',
                        content() {
                            player.addTempSkill('bolshicai_effect', 'phaseUseAfter');
                        },
                    },
                    effect: {
                        charlotte: true,
                        mod: {
                            cardEnabled2(card) {
                                if (card.hasGaintag('bolshicai_effect')) return false;
                            },
                            canBeDiscarded(card) {
                                if (card.hasGaintag('bolshicai_effect')) return false;
                            },
                            canBeGained(card) {
                                if (card.hasGaintag('bolshicai_effect')) return false;
                            },
                        },
                        onremove(player, skill, goon) {
                            if (goon !== true) player.removeGaintag('bolshicai');
                            const cards2 = player.getCards('s', card => card.hasGaintag(skill));
                            if (player.isOnline2()) {
                                player.send((cards, player) => {
                                    cards.forEach(i => i.delete());
                                    if (player == game.me) ui.updatehl();
                                }, cards2, player);
                            }
                            cards2.forEach(i => i.delete());
                            if (player === game.me) ui.updatehl();
                        },
                        init(player, skill) {
                            if (!_status._bolshicai_pileTop) {
                                _status._pileTop = _status.pileTop;
                                _status._bolshicai_pileTop = true;
                                Object.defineProperties(_status, {
                                    pileTop: {
                                        configurable: true,
                                        get() {
                                            return this._pileTop;
                                        },
                                        set(pileTop) {
                                            if (!pileTop) return;
                                            this._pileTop = pileTop;
                                            const skill = 'bolshicai_effect';
                                            for (const player of game.filterPlayer2()) {
                                                if (player.hasSkill(skill)) get.info(skill).getCards(player, skill);
                                            }
                                        },
                                    },
                                });
                            }
                            get.info(skill).getCards(player, skill);
                        },
                        getCards(player, skill) {
                            get.info(skill).onremove(player, skill, true);
                            const card = _status.pileTop;
                            if (card) {
                                const cardx = ui.create.card();
                                cardx.init(get.cardInfo(card));
                                cardx._cardid = card.cardid;
                                player.directgains([cardx], null, skill);
                            }
                        },
                    },
                },
            },
            //许劭
            bol_pinjian: {
                init(player) {
                    if (!_status.characterlist) lib.skill.bol_pinjian.initList();
                    if (!_status.characterlist._bol_pinjian_init) {
                        _status.characterlist.randomSort();
                        function bol_pinjian_timeset(callback, delay) {
                            let timeout;
                            return function () {
                                clearTimeout(timeout);
                                timeout = setTimeout(callback, delay);
                            };
                        };
                        const debouncedUpdate = bol_pinjian_timeset(() => {
                            for (const player of game.filterPlayer()) {
                                if (player.getSkills(null, null, false).includes('bol_pinjian')) {
                                    lib.skill.bol_pinjian.update(player);
                                }
                            }
                        }, 200);
                        const handler = {
                            set(target, property, value) {
                                const result = Reflect.set(target, property, value);
                                debouncedUpdate();
                                return result;
                            },
                            deleteProperty(target, property) {
                                const result = Reflect.deleteProperty(target, property);
                                debouncedUpdate();
                                return result;
                            }
                        };
                        _status.characterlist = new Proxy(_status.characterlist, handler);
                        _status.characterlist._bol_pinjian_init = true;
                    }
                    lib.skill.bol_pinjian.update(player);
                },
                onremove(player) {
                    lib.skill.bol_pinjian.update(player, true);
                    player.removeSkillBlocker('bol_pinjian');
                },
                update(player, remove) {
                    const OriginalSkills = player.getStorage('bol_pinjian').reduce((list, name) => list.addArray(get.character(name).skills || []), []);
                    player.removeInvisibleSkill(OriginalSkills);
                    if (remove === true) {
                        delete player.storage.bol_pinjian;
                        return player.unmarkSkill('bol_pinjian');
                    }
                    player.addSkillBlocker('bol_pinjian');
                    const names = _status.characterlist.slice(0, 4);
                    player.storage.bol_pinjian = names;
                    player.markSkill('bol_pinjian');
                    const NowSkills = player.getStorage('bol_pinjian').reduce((list, name) => list.addArray(get.character(name).skills || []), []);
                    player.addInvisibleSkill(NowSkills);
                },
                skillBlocker(skill, player) {
                    const skills = player.getStorage('bol_pinjian').reduce((list, name) => list.addArray(get.character(name).skills || []), []);
                    return skills.includes(skill) && player.invisibleSkills.includes(skill) && (!player.hasSkill('bol_pinjian') || player.hasSkill('bol_pinjian_used'));
                },
                audio: 'pingjian1.mp3',
                trigger: { player: ['useSkill', 'logSkillBegin'] },
                filter(event, player) {
                    const skills = player.getStorage('bol_pinjian').reduce((list, name) => list.addArray(get.character(name).skills || []), []);
                    const skill = get.sourceSkillFor(event);
                    return skills.includes(skill) && player.invisibleSkills.includes(skill);
                },
                direct: true,
                content() {
                    player.addTempSkill('bol_pinjian_used');
                    const names = player.storage.bol_pinjian;
                    if (names?.length) {
                        _status.characterlist.removeArray(names);
                        _status.characterlist.addArray(names);
                    }
                },
                marktext: '将',
                intro: {
                    markcount: (storage, player) => player.isUnderControl(true) ? storage.length.toString() : '?',
                    mark(dialog, storage, player) {
                        if (!player.isUnderControl(true)) return '观看武将牌堆ing...';
                        if (!storage?.length) return '当前武将牌堆没有牌！';
                        dialog.addSmall([storage, 'character']);
                        const skills = player.getStorage('bol_pinjian').reduce((list, name) => list.addArray(get.character(name).skills || []), []);
                        if (skills.length) dialog.addText('<li>当前可用技能：' + get.translation(skills), false);
                    },
                },
                group: 'bol_pinjian_trigger',
                async triggerInvisible(event, trigger, player) {
                    if (get.info(trigger.skill)?.silent) return event.finish();
                    const result = await ((event, trigger, player) => {
                        var info = get.info(trigger.skill), check = info.check;
                        var skillName = event.name, event = trigger, trigger = event._trigger, str;
                        if (info.prompt) str = info.prompt;
                        else {
                            if (typeof info.logTarget == "string") {
                                str = get.prompt(event.skill, trigger[info.logTarget], player);
                            }
                            else if (typeof info.logTarget == "function") {
                                var logTarget = info.logTarget(trigger, player, trigger.triggername, trigger.indexedData);
                                if (get.itemtype(logTarget)?.indexOf("player") == 0) str = get.prompt(event.skill, logTarget, player);
                            }
                            else str = get.prompt(event.skill, null, player);
                        }
                        if (typeof str == "function") str = str(trigger, player, trigger.triggername, trigger.indexedData);
                        var next = player.chooseBool(get.translation(skillName) + "：" + str);
                        next.set("yes", !check || check(trigger, player, trigger.triggername, trigger.indexedData));
                        next.set("hsskill", event.skill);
                        next.set("forceDie", true);
                        next.set("ai", () => _status.event.yes);
                        if (typeof info.prompt2 == "function") {
                            next.set("prompt2", info.prompt2(trigger, player, trigger.triggername, trigger.indexedData));
                        }
                        else if (typeof info.prompt2 == "string") {
                            next.set("prompt2", info.prompt2);
                        }
                        else if (info.prompt2 != false) {
                            if (lib.dynamicTranslate[event.skill]) next.set("prompt2", lib.dynamicTranslate[event.skill](player, event.skill));
                            else if (lib.translate[event.skill + "_info"]) next.set("prompt2", lib.translate[event.skill + "_info"]);
                        }
                        if (trigger.skillwarn) {
                            if (next.prompt2) next.set("prompt2", '<span class="thundertext">' + trigger.skillwarn + "。</span>" + next.prompt2);
                            else next.set("prompt2", trigger.skillwarn);
                        }
                        return next;
                    })(event, trigger, player).forResult();
                    if (result.bool) {
                        if (!get.info(trigger.skill).cost) trigger.revealed = true;
                    }
                    else {
                        trigger.untrigger();
                        trigger.cancelled = true;
                    }
                },
                subSkill: {
                    used: { charlotte: true },
                    trigger: {
                        charlotte: true,
                        trigger: { player: 'triggerInvisible' },
                        filter(event, player) {
                            if (event.revealed) return false;
                            const info = get.info(event.skill);
                            if (info?.charlotte) return false;
                            let skills = player.getStorage('bol_pinjian').reduce((list, name) => list.addArray(get.character(name).skills || []), []);
                            game.expandSkills(skills);
                            return skills.includes(event.skill);
                        },
                        forceDie: true,
                        priority: 12,
                        forced: true,
                        popup: false,
                        content() {
                            get.info('bol_pinjian').triggerInvisible(event, trigger, player);
                        },
                    },
                },
            },
            bol_yuedan: {
                audio: 'pingjian2.mp3',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return game.roundNumber % 4 === 0;
                },
                forced: true,
                content() {
                    if (!_status.characterlist) lib.skill.bol_pinjian.initList();
                    _status.characterlist.randomSort();
                    game.log(player, '洗切了', '#g武将牌堆');
                    game.delayx();
                },
                ai: { combo: 'bol_pinjian' },
            },
            //闪闪
            bol_shanshan_skill: {
                trigger: { target: 'useCardToBefore', player: 'phaseJudge' },
                filter(event, player) {
                    var card = event.card;
                    if (event.name == 'phaseJudge' && card.viewAs) card = { name: card.viewAs };
                    if (event.name != 'phaseJudge' && event.getParent().directHit.includes(player)) return false;
                    return ['basic', 'trick'].includes(get.type2(card)) && player.hasUsableCard('bol_shanshan');
                },
                forced: true,
                priority: 11 + 45 + 14,
                content() {
                    'step 0'
                    var card = trigger.card;
                    if (trigger.name == 'phaseJudge' && card.viewAs) card = { name: card.viewAs };
                    var next = player.chooseToUse();
                    next.set('prompt', '是否使用【闪闪】？');
                    next.set('prompt2', '抵消' + (trigger.name != 'phaseJudge' ? (get.translation(trigger.player) + '对你使用的') : '') + get.translation(card) + (trigger.name != 'phaseJudge' ? '' : '的判定效果'));
                    next.set('filterCard', function (card, player) {
                        if (get.name(card) != 'bol_shanshan') return false;
                        return lib.filter.cardEnabled(card, player, 'forceEnable');
                    });
                    next.set('respondTo', [trigger.player, trigger.card]);
                    next.set('goon', -get.effect(player, card, trigger.player, player));
                    next.set('ai1', function (card) {
                        return _status.event.goon;
                    });
                    'step 1'
                    if (result.bool && trigger.name == 'phaseJudge' && [trigger.card].filterInD().length) player.gain([trigger.card].filterInD(), 'gain2');
                },
            },
            //三首
            bol_sanshou_skill: {
                audio: 'sanshou',
                inherit: 'sanshou',
                filter(event, player) {
                    if (player.hasSkillTag('unequip2')) return false;
                    if (event.source && event.source.hasSkillTag('unequip', false, {
                        name: event.card ? event.card.name : null,
                        target: player,
                        card: event.card
                    })) return false;
                    return true;
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (target.hasSkillTag('unequip2')) return;
                            if (player.hasSkillTag('unequip', false, {
                                name: card ? card.name : null,
                                target: target,
                                card: card
                            })) return;
                            if (card.name == 'shandian' || card.name == 'fulei') return [0, 0.1];
                            if (!get.tag(card, 'damage')) return;
                            var types = [], bool = 0;
                            types.addArray(game.getGlobalHistory('useCard').map(evt => get.type2(evt.card)));
                            if (!types.includes(get.type2(card))) bool = 1;
                            if (types.length < 2) return Math.min(1, 0.4 + (types.length + bool) * 0.2);
                        },
                    },
                },
            },
            //水 果 忍 者
            bilibili_zhengjing: {
                audio: 'zhengjing',
                inherit: 'zhengjing',
                content() {
                    'step 0'
                    var cardx = {}, cards = [], names = [], types = [];
                    var num = [3, 4, 6].randomGet();
                    event.num = num;//定下每张牌切的数量
                    while (true) {
                        var card = get.cardPile(function (card) {
                            //判定类型是否补充完毕的辅助牌
                            var card2 = get.cardPile(function (card2) {
                                return card2.name != 'du' && !names.includes(card2.name) && !types.includes(get.type2(card2));
                            });
                            //先填补每种类型的牌各一张，然后补充其他的牌
                            return card.name != 'du' && !names.includes(card.name) && (!types.includes(get.type2(card)) || !card2);
                        });
                        if (card) {
                            cards.push(card);
                            names.push(card.name);
                            types.push(get.type2(card));
                            if (get.mode() == 'doudizhu') {
                                if (cards.length == 1 && !get.isLuckyStar(player) && Math.random() < 0.33) break;
                                if (cards.length == 2 && !get.isLuckyStar(player) && Math.random() < 0.5) break;
                                if (cards.length >= 3) break;
                            }
                            else {
                                if (cards.length == 3 && !get.isLuckyStar(player) && Math.random() < 0.33) break;
                                if (cards.length == 4 && !get.isLuckyStar(player) && Math.random() < 0.5) break;
                                if (cards.length >= 5) break;
                            }
                        }
                        else break;
                    };
                    event.cards = cards;
                    if (!cards.length) { event.finish(); return; };
                    for (var i of names) cardx[i] = num;//切的牌
                    cardx.du = names.length;//炸弹
                    if (player == game.me && !_status.auto) {
                        event.dialog = function (cards) {
                            var cards1 = [];
                            for (var i in cards) {
                                for (var j = 0; j < cards[i]; j++) {
                                    cards1.push(i);
                                };
                            };
                            if (!cards1.length) cards1.push('sha');
                            var result = {};
                            var interval;
                            var finish = function () {
                                clearInterval(interval);
                                _status.event._result = result;
                                game.resume();
                            };
                            var dialog = ui.create.dialog('hidden');
                            dialog.classList.add('popped');
                            dialog.classList.add('static');
                            dialog.style.height = '100%';
                            dialog.style.width = '100%';
                            dialog.style.top = '0px';
                            dialog.style.left = '0px';
                            dialog.style['text-align'] = 'left';
                            ui.window.appendChild(dialog);
                            dialog.innerHTML = '';
                            var getAngle = function (x1, y1, x2, y2) {
                                var x = x1 - x2;
                                var y = y1 - y2;
                                var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                                var cos = y / z;
                                var radina = Math.acos(cos);
                                var angle = 180 / (Math.PI / radina);
                                if (x2 > x1 && y2 === y1) angle = 0;
                                if (x2 > x1 && y2 < y1) angle = angle - 90;
                                if (x2 === x1 && y1 > y2) angle = -90;
                                if (x2 < x1 && y2 < y1) angle = 270 - angle;
                                if (x2 < x1 && y2 === y1) angle = 180;
                                if (x2 < x1 && y2 > y1) angle = 270 - angle;
                                if (x2 === x1 && y2 > y1) angle = 90;
                                if (x2 > x1 && y2 > y1) angle = angle - 90;
                                return angle;
                            };
                            var lineList = [];
                            var pointList = [];
                            var pointNum = 0;
                            var createLine = function (e) {
                                if (this.hadClicked == true) {
                                    if (e.changedTouches) e = e.changedTouches[e.changedTouches.length - 1];
                                    if (pointNum % 3 == 0) {
                                        pointList.push([e.clientX / game.documentZoom, e.clientY / game.documentZoom]);
                                        if (pointList.length >= 2) {
                                            var point0 = pointList[pointList.length - 2];
                                            var point1 = pointList[pointList.length - 1];
                                            var x0 = point0[0];
                                            var y0 = point0[1];
                                            var x1 = point1[0];
                                            var y1 = point1[1];
                                            var div = document.createElement('div');
                                            div.style.zIndex = 1;
                                            div.style.borderRadius = '4px';
                                            div.style.position = 'fixed';
                                            div.style.background = '#ffffff';
                                            div.style.height = '4px';
                                            div.style.width = (Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2) + 'px';
                                            div.style.left = (x0 + 2) + 'px';
                                            div.style.top = (y0 + 2) + 'px';
                                            div.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1) + 'deg)';
                                            div.style['transform-origin'] = '0 50%';
                                            this.appendChild(div);
                                            lineList.push(div);
                                            if (lineList.length > 3) {
                                                var div1 = lineList[0];
                                                div1.style.transition = 'opacity 0.25s';
                                                div1.style.opacity = 0;
                                                setTimeout(function () {
                                                    if (div1.parentNode != undefined) div1.parentNode.removeChild(div1);
                                                }, 250);
                                                lineList.remove(lineList[0]);
                                                pointList[0] = 1;
                                                pointList.remove(pointList[0]);
                                            };
                                        };
                                    };
                                    pointNum++;
                                };
                            };
                            var clearLine = function () {
                                var deleteLine = function () {
                                    var div1 = lineList[0];
                                    div1.style.transition = 'opacity 0.25s';
                                    div1.style.opacity = 0;
                                    setTimeout(function () {
                                        if (div1.parentNode != undefined) div1.parentNode.removeChild(div1);
                                    }, 250);
                                    lineList.remove(lineList[0]);
                                    if (lineList.length > 0) deleteLine();
                                };
                                if (lineList.length > 0) deleteLine();
                                pointList = [];
                            };
                            dialog.addEventListener(lib.device ? "touchstart" : "mousedown", function (e) {
                                e.stopPropagation();
                                this.hadClicked = true;
                                pointNum = 0;
                            });
                            dialog.addEventListener(lib.device ? "touchmove" : "mousemove", createLine);
                            dialog.addEventListener(lib.device ? "touchend" : "mouseup", function (e) {
                                e.stopPropagation();
                                delete this.hadClicked;
                                clearLine();
                            });
                            var createCard = function (name) {
                                var left = Math.ceil(Math.random() * 560);
                                var card = ui.create.card(null, 'noclick', true);
                                card.init({ name: name });
                                if (name == 'du') card.style['box-shadow'] = 'rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px';
                                card.style['pointer-events'] = 'none';
                                card.style.position = 'absolute';
                                card.style.top = (dialog.offsetHeight - 5) + 'px';
                                card.style.left = (left) + 'px';
                                card.style.transition = 'opacity 0.25s';
                                card.style.opacity = 0;
                                dialog.appendChild(card);
                                setTimeout(function () {
                                    card.style.opacity = 1;
                                }, 10);
                                var t_x = 0,
                                    t_y = 0,
                                    s_x = 0,
                                    s_y = 0,
                                    s_y0 = 0,
                                    v_y = [90, 95, 100, 105, 110, 115, 105, 110, 115].randomGet(),
                                    a_y = [9, 9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.4, 10.6, 10.8, 11].randomGet(),
                                    t_x_increase = 0,
                                    t_y_increase = 0.3,
                                    isMovingUp = true,
                                    cardLeft = card.offsetLeft,
                                    cardTop = card.offsetTop,
                                    num_x = 63;
                                if (v_y == 90) num_x = 56;
                                else if (v_y == 95) num_x = 60;
                                else if (v_y == 100) num_x = 63;
                                else if (v_y == 105) num_x = 67;
                                else if (v_y == 110) num_x = 70;
                                else num_x = 74;
                                if ([true, false].randomGet()) {
                                    var s1 = dialog.offsetWidth - card.offsetWidth - left;
                                    t_x_increase = (s1 / num_x) * Math.random();
                                }
                                else {
                                    var s1 = left;
                                    t_x_increase = -(s1 / num_x) * Math.random();
                                };
                                var interval1 = setInterval(function () {
                                    if (!_status.paused2) {
                                        t_x += t_x_increase;
                                        s_x = t_x;
                                        card.style.left = (cardLeft + s_x) + 'px';
                                        t_y += t_y_increase;
                                        s_y = -(v_y * t_y - a_y * Math.pow(t_y, 2) / 2);
                                        card.style.top = (cardTop + s_y) + 'px';
                                        if (isMovingUp == true) {
                                            if (s_y - s_y0 > 0) isMovingUp = !isMovingUp;
                                            s_y0 = s_y;
                                        };
                                        if (card.offsetTop > dialog.offsetHeight + 5 - card.offsetWidth &&
                                            isMovingUp == false && card.hadHide != true) {
                                            card.hadHide = true;
                                            card.style.transition = 'opacity .3s';
                                            card.style.opacity = 0;
                                            setTimeout(function () {
                                                card.delete();
                                                clearInterval(interval1);
                                            }, 350);
                                        };
                                        if (card.hadCut != true) {
                                            for (var i = 0; i < pointList.length; i++) {
                                                if (card.hadCut == true || pointList[i + 1] == undefined) continue;
                                                var point0 = pointList[i];
                                                var point1 = pointList[i + 1];
                                                var x0 = point0[0] - dialog.offsetLeft;
                                                var y0 = point0[1] - dialog.offsetTop;
                                                var x1 = point1[0] - dialog.offsetLeft;
                                                var y1 = point1[1] - dialog.offsetTop;
                                                var bool = false;
                                                var x0_card = card.offsetLeft;
                                                var x1_card = card.offsetLeft + card.offsetWidth;
                                                var y0_card = card.offsetTop;
                                                var y1_card = card.offsetTop + card.offsetHeight;
                                                var xiangjiao = function (line1, line2) {
                                                    var x1 = line1[0][0];
                                                    var x2 = line1[1][0];
                                                    var x3 = line2[0][0];
                                                    var x4 = line2[1][0];
                                                    var y1 = line1[0][1];
                                                    var y2 = line1[1][1];
                                                    var y3 = line2[0][1];
                                                    var y4 = line2[1][1];
                                                    if (!(Math.min(x1, x2) <= Math.max(x3, x4) && Math.min(y3, y4) <= Math.max(y1, y2) && Math.min(x3, x4) <= Math.max(x1, x2) && Math.min(y1, y2) <= Math.max(y3, y4))) return false;
                                                    else return true;
                                                };
                                                var line = [[x0, y0], [x1, y1]];
                                                if (xiangjiao(line, [[x0_card, y0_card], [x0_card, y1_card]]) == true) bool = true;
                                                if (xiangjiao(line, [[x0_card, y1_card], [x1_card, y1_card]]) == true) bool = true;
                                                if (xiangjiao(line, [[x1_card, y1_card], [x1_card, y0_card]]) == true) bool = true;
                                                if (xiangjiao(line, [[x1_card, y0_card], [x0_card, y0_card]]) == true) bool = true;
                                                if (bool) {
                                                    if (card.name == 'du') {
                                                        if (lib.config.background_speak) game.playAudio('skill', 'zhengjing_boom');
                                                        finish();
                                                    }
                                                    else {
                                                        if (lib.config.background_speak) game.playAudio('skill', 'zhengjing_click');
                                                        if (!result[card.name]) result[card.name] = 0;
                                                        result[card.name]++;
                                                    };
                                                    card.hadCut = true;
                                                    card.style.transition = 'all .3s';
                                                    card.style.transform = 'scale(1.5)';
                                                    card.style.opacity = 0;
                                                    setTimeout(function () {
                                                        card.delete();
                                                    }, 350);
                                                    clearInterval(interval1);
                                                };
                                            };
                                        };
                                    };
                                    if (dialog.parentNode == undefined) clearInterval(interval1);
                                }, 30);
                            };
                            interval = setInterval(function () {
                                if (!_status.paused2) {
                                    var num2 = [0, 1, 1, 1, 1, 2, 2, 3].randomGet();
                                    if (num2 > 0) {
                                        for (var i = 0; i < num2; i++) {
                                            if (!cards1.length) continue;
                                            var card = cards1.randomGet();
                                            createCard(card);
                                            cards1.remove(card);
                                            if (!cards1.length) {
                                                setTimeout(function () {
                                                    finish();
                                                }, 3000);
                                            }
                                        };
                                    };
                                };
                            }, 650);
                            return dialog;
                        }(cardx);
                        event.switchToAuto = function () {
                            event._result = event.skillai(event.list);
                            game.resume();
                        };
                        _status.imchoosing = true;
                        game.pause();
                    }
                    else {
                        event.result = {};
                        for (var i in cardx) event.result[i] = cardx[i];
                        var str = get.translation(player) + '正在整理经书...';
                        game.broadcastAll(function (str) {
                            var dialog = ui.create.dialog(str);
                            dialog.classList.add('center');
                            setTimeout(function () {
                                dialog.close();
                            }, 5000);
                        }, str);
                        game.delay(10);
                    }
                    'step 1'
                    _status.imchoosing = false;
                    if (event.dialog) event.dialog.close();
                    if (!event.result) event.result = result;
                    'step 2'
                    var result = event.result;
                    for (var i = 0; i < cards.length; i++) {
                        if (!result[cards[i].name] || result[cards[i].name] < num) cards.splice(i--, 1);
                    }
                    if (cards.length) {
                        if (lib.config.background_speak) game.playAudio('skill', 'zhengjing_finish');
                        player.showCards(cards, get.translation(player) + '整理出了以下经典');
                        game.cardsGotoOrdering(cards);
                    }
                    else {
                        game.log(player, '并没有整理出经典');
                        player.popup('杯具');
                        event.finish();
                    }
                    'step 3'
                    game.updateRoundNumber();
                    player.chooseTarget('请选择一名角色', '将整理出的经典（' + get.translation(cards) + '）置于其武将牌上', true).set('ai', function (target) {
                        var player = _status.event.player;
                        if (target.hasSkill('xinfu_pdgyingshi')) return 0;
                        return -get.attitude(player, target);
                    });
                    'step 4'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.line(target, 'thunder');
                    }
                    'step 5'
                    if (cards.length == 1) {
                        event._result = { bool: true, moved: [cards, []] };
                        return;
                    }
                    var next = player.chooseToMove('整经：请分配整理出的经典', true);
                    next.set('list', [
                        ['置于' + get.translation(target) + '的武将牌上', cards],
                        ['自己获得'],
                    ]);
                    next.set('filterMove', function (from, to, moved) {
                        if (moved[0].length == 1 && to == 1 && from.link == moved[0][0]) return false;
                        return true;
                    });
                    next.set('filterOk', function (moved) {
                        return moved[0].length > 0;
                    });
                    next.set('processAI', function (list) {
                        var cards = list[0][1].slice(0).sort(function (a, b) {
                            return get.value(a) - get.value(b);
                        });
                        return [cards.splice(0, 1), cards];
                    })
                    'step 6'
                    if (result.bool) {
                        var cards = result.moved[0], gains = result.moved[1];
                        target.addSkill('zhengjing2');
                        target.addToExpansion(cards, 'gain2').gaintag.add('zhengjing2');
                        if (gains.length) player.gain(gains, 'gain2');
                    }
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                    threaten: 3.2,
                },
            },
            //SP许攸
            bilibili_fushi: {
                derivation: ['bilibili_zezhu', 'bilibili_chenggong'],
                trigger: { global: ['dieAfter', 'phaseBefore', 'showCharacterAfter'] },
                filter(event, player) {
                    var weis = 0;
                    var quns = 0;
                    for (var i of game.players) {
                        if (i.group == 'wei') weis++;
                        if (i.group == 'qun') quns++;
                    }
                    var skills = player.additionalSkills.bilibili_fushi;
                    if (!skills || !skills.length) return weis != quns;
                    if (weis == quns) return true;
                    if (quns > weis && !skills.includes('bilibili_zezhu')) return true;
                    if (weis > quns && !skills.includes('bilibili_chenggong')) return true;
                    return false;
                },
                noHidden: true,
                forced: true,
                content() {
                    var weis = 0;
                    var quns = 0;
                    for (var i of game.players) {
                        if (i.group == 'wei') weis++;
                        if (i.group == 'qun') quns++;
                    }
                    var skills = player.additionalSkills.bilibili_fushi;
                    if (skills?.length) {
                        if (weis > quns && !skills.includes('bilibili_chenggong')) player.addAdditionalSkills('bilibili_fushi', ['bilibili_chenggong']);
                        else if (quns > weis && !skills.includes('bilibili_zezhu')) player.addAdditionalSkills('bilibili_fushi', ['bilibili_zezhu']);
                        else player.removeAdditionalSkill('bilibili_fushi');
                    }
                    else {
                        if (weis > quns) player.addAdditionalSkills('bilibili_fushi', ['bilibili_chenggong']);
                        if (quns > weis) player.addAdditionalSkills('bilibili_fushi', ['bilibili_zezhu']);
                    }
                },
            },
            bilibili_chenggong: {
                audio: 'chenggong',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    return event.targets && event.targets.length > 1;
                },
                logTarget: 'player',
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                content() {
                    trigger.player.draw();
                },
            },
            bilibili_zezhu: {
                audio: 'zezhu',
                enable: 'phaseUse',
                filterTarget: lib.filter.notMe,
                selectTarget: [1, 2],
                multitarget: true,
                multiline: true,
                usable: 1,
                content() {
                    'step 0'
                    event.num = 0;
                    targets.sortBySeat();
                    'step 1'
                    for (var target of targets) {
                        if (target.countCards('he')) player.gainPlayerCard('he', target, true);
                        else player.draw();
                    }
                    'step 2'
                    var target = targets[num];
                    event.target = target;
                    'step 3'
                    if (player.countCards('he')) {
                        player.chooseCard('择主：交给' + get.translation(target) + '一张牌', 'he', true).set('ai', function (card) {
                            return -get.value(card);
                        });
                    }
                    else event.finish();
                    'step 4'
                    if (result.bool) target.gain(result.cards, player, 'give');
                    'step 5'
                    if (num < targets.length - 1) {
                        event.num++;
                        event.goto(2);
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            var att = get.attitude(player, target);
                            if (att > 0 && !target.countCards('he')) return 10;
                            return get.sgn(att) * get.effect(target, { name: 'shunshou_copy2' }, player, player);
                        },
                    },
                },
            },
            goldenexperience: {
                charlotte: true,
                trigger: { source: 'damageEnd' },
                filter(event, player) {
                    if (!player.hasEmptySlot()) return false;
                    if (player == event.player) return false;
                    if (player.getEquips(event.player.name).length) return false;
                    return true;
                },
                direct: true,
                content() {
                    var list = [];
                    for (var i = 1; i < 6; i++) {
                        if (player.hasEmptySlot(i)) list.push('equip' + i);
                    }
                    var suitList = lib.suit.randomGet();
                    var typeList = list.randomGet();
                    var numberList = Array.from({ length: 13 }).map((_, i) => i + 1).randomGet();
                    var skills = lib.character[trigger.player.name][3]
                    var card = {
                        type: 'equip',
                        subtype: typeList,
                        image: 'character/' + trigger.player.name,
                        skills: skills,
                        distance: {},
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        content: lib.element.content.equipCard,
                        onEquip: [],
                        destroy: true,
                        forceDie: true,
                        equipDelay: false,
                        loseDelay: false,
                        ai: {},
                    };
                    var List = [];
                    if (typeList == 'equip1') {
                        disList = Array.from({ length: 5 }).map((_, i) => i + 1).randomGet();
                        card.distance.attackFrom = -disList
                        List.push('<li>攻击范围：' + disList)
                    }
                    if (typeList == 'equip3') {
                        card.distance.globalTo = 1
                        List.push('<li>防御距离+1');
                    }
                    if (typeList == 'equip4') {
                        card.distance.globalFrom = -1
                        List.push('<li>攻击距离+1');
                    }
                    lib.card[trigger.player.name] = card;
                    if (skills.length) {
                        for (var i = 0; i < skills.length; i++) {
                            List.push('<li>' + lib.translate[skills[i]] + '<br>' + lib.translate[skills[i] + '_info']);
                        }
                    }
                    lib.translate[trigger.player.name + '_info'] = List
                    player.equip(game.createCard(trigger.player.name, suitList, numberList));
                },
            },
            bilibili_jinfan: {
                group: 'bilibili_jinfan_buff',
                audio: 'gnjinfan',
                trigger: { player: 'phaseDiscardBegin' },
                filter(event, player) {
                    var cards = player.getExpansions('bilibili_jinfan');
                    return player.hasCard(function (card) {
                        return !cards.filter(function (cardx) {
                            return get.suit(cardx) == get.suit(card);
                        }).length;
                    }, 'he');
                },
                forced: true,
                content() {
                    'step 0'
                    player.chooseCard('锦帆：请选择一张牌', '将一张牌牌作为“铃”置于武将牌上', function (card, player) {
                        var cards = player.getExpansions('bilibili_jinfan');
                        return !cards.filter(function (cardx) {
                            return get.suit(cardx) == get.suit(card);
                        }).length;
                    }, 'he', true);
                    'step 1'
                    if (result.bool) player.addToExpansion(result.cards, player, 'give').gaintag.add('bilibili_jinfan');
                },
                marktext: '铃',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                ai: {
                    effect: {
                        player(card, player) {
                            var cards = player.getExpansions('bilibili_jinfan');
                            var suit = get.suit(card);
                            if (cards.filter(function (cardx) {
                                return get.suit(cardx) == get.suit(card);
                            }).length && player.getHistory('useCard', function (evt) {
                                return get.suit(evt.card) == get.suit(card);
                            }).length + player.getHistory('respond', function (evt) {
                                return get.suit(evt.card) == get.suit(card);
                            }).length == 0) return [1, 1];
                        },
                    },
                },
                subSkill: {
                    buff: {
                        audio: 'gnjinfan',
                        trigger: { player: ['useCard', 'respond'] },
                        filter(event, player) {
                            var cards = player.getExpansions('bilibili_jinfan');
                            if (!cards.filter(function (cardx) {
                                return get.suit(cardx) == get.suit(event.card);
                            }).length) return false;
                            return player.getHistory('useCard', function (evt) {
                                return get.suit(evt.card) == get.suit(event.card);
                            }).indexOf(event) + player.getHistory('respond', function (evt) {
                                return get.suit(evt.card) == get.suit(event.card);
                            }).indexOf(event) == -1;
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                },
            },
            bilibili_sheque: {
                audio: 'gnsheque',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    return event.player != player && get.type(event.card) == 'equip' && player.countCards('h', function (card) {
                        return player.canUse(get.autoViewAs({ name: 'sha' }, [card]), event.player, false);
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseCard(get.prompt2('bilibili_sheque', trigger.player), function (card) {
                        var player = _status.event.player, trigger = _status.event.getTrigger();
                        return player.canUse(get.autoViewAs({ name: 'sha' }, [card]), trigger.player, false);
                    }).set('ai', function (card) {
                        var player = _status.event.player, trigger = _status.event.getTrigger();
                        if (get.effect(trigger.player, { name: 'sha' }, player, player) <= 0) return -1;
                        return 7 - get.value(card);
                    });
                    'step 1'
                    if (result.bool) {
                        player.addSkill('bilibili_sheque_damage');
                        player.logSkill('bilibili_sheque', trigger.player);
                        player.useCard(get.autoViewAs({ name: 'sha' }, result.cards), result.cards, trigger.player, false).card.bilibili_sheque = trigger.player;
                    }
                },
                subSkill: {
                    damage: {
                        charlotte: true,
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            return event.card && event.card.bilibili_sheque && event.card.bilibili_sheque == event.player;
                        },
                        direct: true,
                        firstDo: true,
                        content() {
                            player.line(trigger.player);
                            trigger.player.addTempSkill('drlt_wanglie2');
                        },
                    },
                },
            },
            //国战左慈
            gz_huashen: {
                unique: true,
                group: ['gz_huashen_trigger', 'gz_huashen_flash', 'gz_huashen_remove'],
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                direct: true,
                content() {
                    'step 0'
                    var num = player.getStorage('gz_huashen').length;
                    if (num >= 2) event.goto(3);
                    'step 1'
                    var characters = lib.skill.gz_huashen.getCharacter(player).randomGets(5);
                    player.chooseButton([
                        get.prompt('gz_huashen'),
                        '<div class="text center">选择至多两张武将牌作为“化身”牌</div>',
                        [characters,
                            (item, type, position, noclick, node, player) => lib.skill.gz_huashen.$createButton(item, type, position, noclick, node, player)],
                    ], [1, 2]).set('ai', function (button) {
                        return get.rank(button.link, true);
                    });
                    'step 2'
                    if (result.bool) {
                        player.logSkill('gz_huashen');
                        lib.skill.gz_huashen.addVisitors(result.links, player);
                        event.goto(5);
                    }
                    else event.finish();
                    'step 3'
                    player.chooseButton([
                        get.prompt('gz_huashen'),
                        '<div class="text center">替换一张“化身”牌</div>',
                        [player.getStorage('gz_huashen'),
                        (item, type, position, noclick, node, player) => lib.skill.gz_huashen.$createButton(item, type, position, noclick, node, player)],
                    ]).set('ai', function (button) {
                        return get.rank(button.link, true);
                    });
                    'step 4'
                    if (result.bool) {
                        player.logSkill('gz_huashen');
                        lib.skill.gz_huashen.removeVisitors(result.links, player);
                        lib.skill.gz_huashen.addVisitors(lib.skill.gz_huashen.getCharacter(player).randomGets(1), player);
                    }
                    else event.finish();
                    'step 5'
                    game.delayx();
                },
                //ai:{threaten:5},
                $createButton(item, type, position, noclick, node, player) {
                    node = ui.create.buttonPresets.character(item, 'character', position, noclick);
                    const info = lib.character[item];
                    const skills = info[3].filter(function (skill) {
                        var info = get.info(skill);
                        return !get.skillCategoriesOf(skill, player).length && info && (!info.unique || info.gainable);
                    });
                    if (skills.length) {
                        const skillstr = skills.map(i => `[${get.translation(i)}]`).join('<br>');
                        const skillnode = ui.create.caption(
                            `<div class="text" data-nature=${get.groupnature(info[1], 'raw')
                            }m style="font-family: ${(lib.config.name_font || 'xinwei')
                            },xinwei">${skillstr}</div>`, node);
                        skillnode.style.left = '2px';
                        skillnode.style.bottom = '2px';
                    }
                    node._customintro = function (uiintro, evt) {
                        const character = node.link, characterInfo = get.character(node.link);
                        let capt = get.translation(character);
                        if (characterInfo) {
                            capt += `&nbsp;&nbsp;${get.translation(characterInfo[0])}`;
                            let charactergroup;
                            const charactergroups = get.is.double(character, true);
                            if (charactergroups) charactergroup = charactergroups.map(i => get.translation(i)).join('/');
                            else charactergroup = get.translation(characterInfo[1]);
                            capt += `&nbsp;&nbsp;${charactergroup}`;
                        }
                        uiintro.add(capt);
                        if (lib.characterTitle[node.link]) uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
                        for (let i = 0; i < skills.length; i++) {
                            if (lib.translate[skills[i] + '_info']) {
                                let translation = lib.translate[skills[i] + '_ab'] || get.translation(skills[i]).slice(0, 2);
                                if (lib.skill[skills[i]] && lib.skill[skills[i]].nobracket) uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + '</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                                else uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                                if (lib.translate[skills[i] + '_append']) uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
                            }
                        }
                    }
                    return node;
                },
                getCharacter(player) {
                    if (!_status.characterlist) lib.skill.pingjian.initList();
                    return _status.characterlist.filter(function (name) {
                        if (name.indexOf('zuoci') != -1 || !lib.character[name] || !lib.character[name][3]) return false;
                        return lib.character[name][3].filter(function (skill) {
                            var info = get.info(skill);
                            return !get.skillCategoriesOf(skill, player).length && info && (!info.unique || info.gainable);
                        }).length;
                    });
                },
                getSkills(characters, player) {
                    var skills = [];
                    characters.forEach(name => {
                        if (Array.isArray(get.character(name, 3))) {
                            var skillx = get.character(name, 3).filter(skill => {
                                var info = get.info(skill);
                                return info && !get.skillCategoriesOf(skill, player).length && (!info.unique || info.gainable);
                            });
                            if (skillx.length) {
                                skills.addArray(skillx);
                                game.broadcastAll(function (player, name) {
                                    player.tempname.add(name);
                                }, player, name);
                            }
                        }
                    });
                    return skills;
                },
                addVisitors(characters, player) {
                    player.addSkillBlocker('gz_huashen');
                    game.log(player, '获得了' + get.cnNumber(characters.length) + '张', '#g“化身”');
                    game.broadcastAll(function (player, list) {
                        var cards = [];
                        for (var card of list) {
                            var cardname = 'huashen_card_' + card;
                            lib.card[cardname] = {
                                fullimage: true,
                                image: player.isUnderControl(true) ? 'character:' + card : 'ext:活动武将/image/card/huashen_unknown.jpg'
                            };
                            lib.translate[cardname] = player.isUnderControl(true) ? get.rawName2(card) : ' ';
                            cards.push(game.createCard(cardname, '', ''));
                        }
                        player.$draw(cards, 'nobroadcast');
                    }, player, characters);
                    player.markAuto('gz_huashen', characters);
                    var storage = player.getStorage('gz_huashen');
                    var skills = lib.skill.gz_huashen.getSkills(storage, player);
                    player.addInvisibleSkill(skills);
                },
                removeVisitors(characters, player) {
                    if (!characters.length) return;
                    game.log(player, '移去了', '#g“化身”', '#y' + get.translation(characters));
                    game.broadcastAll(function (player, names) {
                        player.tempname.removeArray(names);
                    }, player, characters);
                    game.broadcastAll(function (player, list) {
                        var cards = [];
                        for (var card of list) {
                            var cardname = 'huashen_card_' + card;
                            lib.card[cardname] = {
                                fullimage: true,
                                image: 'character:' + card
                            };
                            lib.translate[cardname] = get.rawName2(card);
                            cards.push(game.createCard(cardname, '', ''));
                        }
                        player.$throw(cards, 'nobroadcast');
                    }, player, characters);
                    var skills = lib.skill.gz_huashen.getSkills(characters, player);
                    var characters2 = player.getStorage('gz_huashen').slice(0);
                    characters2.removeArray(characters);
                    skills.removeArray(lib.skill.gz_huashen.getSkills(characters2, player));
                    player.unmarkAuto('gz_huashen', characters);
                    _status.characterlist.addArray(characters);
                    player.removeInvisibleSkill(skills);
                },
                onremove(player, skill) {
                    lib.skill.gz_huashen.removeVisitors(player.getStorage(skill), player);
                    player.removeSkillBlocker('gz_huashen');
                },
                skillBlocker(skill, player) {
                    if (!player.invisibleSkills.includes(skill) || skill == 'gz_huashen') return false;
                    return !player.hasSkill('gz_huashen');
                },
                intro: {
                    mark(dialog, storage, player) {
                        if (!storage || !storage.length) return '当前没有“化身”';
                        if (player.isUnderControl(true)) {
                            dialog.addText('<li>当前可用“化身”牌', false);
                            dialog.addSmall([storage, (item, type, position, noclick, node, player) => lib.skill.gz_huashen.$createButton(item, type, position, noclick, node, player)]);
                        }
                        else return '共有' + get.cnNumber(storage.length) + '张“化身”';
                    },
                },
                subSkill: {
                    trigger: {
                        charlotte: true,
                        trigger: { player: 'triggerInvisible' },
                        filter(event, player) {
                            if (event.revealed) return false;
                            var info = get.info(event.skill);
                            if (info?.charlotte) return false;
                            var skills = lib.skill.gz_huashen.getSkills(player.getStorage('gz_huashen'), player);
                            game.expandSkills(skills);
                            return skills.includes(event.skill);
                        },
                        forceDie: true,
                        priority: 12,
                        forced: true,
                        popup: false,
                        content() {
                            get.info('bol_pinjian').triggerInvisible(event, trigger, player);
                        },
                    },
                    flash: {
                        charlotte: true,
                        trigger: { player: ['useSkill', 'logSkillBegin'] },
                        filter(event, player) {
                            var skill = event.sourceSkill || event.skill;
                            return player.invisibleSkills.includes(skill) && lib.skill.gz_huashen.getSkills(player.getStorage('gz_huashen'), player).includes(skill);
                        },
                        forceDie: true,
                        priority: 12,
                        forced: true,
                        popup: false,
                        content() {
                            var visitors = player.getStorage('gz_huashen').slice(0);
                            var shows = visitors.filter(function (name) {
                                return (get.character(name, 3) || []).includes(trigger.sourceSkill);
                            });
                            for (var show of shows) player.flashAvatar('gz_huashen', show);
                        },
                    },
                    remove: {
                        charlotte: true,
                        trigger: { player: ['useSkillAfter', 'logSkill'] },
                        filter(event, player) {
                            var skill = event.sourceSkill || event.skill;
                            return player.invisibleSkills.includes(skill) && lib.skill.gz_huashen.getSkills(player.getStorage('gz_huashen'), player).includes(skill);
                        },
                        forceDie: true,
                        priority: 12,
                        forced: true,
                        popup: false,
                        content() {
                            var visitors = player.getStorage('gz_huashen').slice(0);
                            var remove = visitors.filter(function (name) {
                                return (get.character(name, 3) || []).includes(trigger.sourceSkill);
                            });
                            lib.skill.gz_huashen.removeVisitors(remove, player);
                        },
                    },
                },
            },
            gz_xinsheng: {
                unique: true,
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'damageEnd' },
                frequent: true,
                content() {
                    'step 0'
                    event.count = trigger.num;
                    'step 1'
                    event.count--;
                    lib.skill.gz_huashen.addVisitors(lib.skill.gz_huashen.getCharacter(player).randomGets(1), player);
                    'step 2'
                    if (event.count > 0 && player.hasSkill('gz_xinsheng')) player.chooseBool(get.prompt2('gz_xinsheng')).set('frequentSkill', 'gz_xinsheng');
                    else event.goto(4);
                    'step 3'
                    if (result.bool) {
                        event.count--;
                        player.logSkill('gz_xinsheng');
                        event.goto(1);
                    }
                    'step 4'
                    game.delayx();
                },
                ai: { combo: 'gz_huashen' },
            },
            xinzaiqi: {
                count() {
                    var num = 0;
                    game.countPlayer2(function (current) {
                        current.getHistory('lose', function (evt) {
                            if (evt.position == ui.discardPile) {
                                for (var i = 0; i < evt.cards.length; i++) {
                                    if (get.color(evt.cards[i]) == 'red') num++;
                                }
                            }
                        })
                    });
                    game.getGlobalHistory('cardMove', function (evt) {
                        if (evt.name == 'cardsDiscard') {
                            for (var i = 0; i < evt.cards.length; i++) {
                                if (get.color(evt.cards[i]) == 'red') num++;
                            }
                        }
                    })
                    return num;
                },
                audio: 'rezaiqi',
                direct: true,
                filter(event, player) {
                    return lib.skill.xinzaiqi.count() > 0;
                },
                trigger: { player: 'phaseDiscardEnd' },
                content() {
                    'step 0'
                    player.chooseTarget([1, lib.skill.xinzaiqi.count()], get.prompt2('xinzaiqi')).ai = function (target) {
                        return get.attitude(_status.event.player, target);
                    };
                    'step 1'
                    if (result.bool) {
                        var targets = result.targets;
                        targets.sortBySeat();
                        player.line(targets, 'fire');
                        player.logSkill('xinzaiqi', targets);
                        event.targets = targets;
                    }
                    else event.finish();
                    'step 2'
                    event.current = targets.shift();
                    if (player.isHealthy()) event._result = { index: 0 };
                    else event.current.chooseControl().set('choiceList', [
                        '摸一张牌',
                        '令' + get.translation(player) + '回复1点体力',
                    ]).set('ai', function () {
                        if (get.attitude(event.current, player) > 0) return 1;
                        return 0;
                    });
                    'step 3'
                    if (result.index == 1) {
                        event.current.line(player);
                        player.recover();
                    }
                    else event.current.draw();
                    game.delay();
                    if (targets.length) event.goto(2);
                },
            },
            wansha_shen_simayi: { audio: 2 },
            old_tianzuo: {
                audio: 'tianzuo',
                inherit: 'tianzuo',
                group: 'tianzuo_rewrite',
            },
            old_lingce: {
                audio: 'lingce',
                inherit: 'lingce',
                filter(event, player) {
                    return event.card.name == 'qizhengxiangsheng' || get.zhinangs().includes(event.card.name);
                },
            },
            old_dinghan: {
                audio: 'dinghan',
                trigger: { target: 'useCardToTarget' },
                filter(event, player) {
                    return get.tag(event.card, 'damage') && !player.getStorage('old_dinghan_used').includes(event.card.name);
                },
                forced: true,
                content() {
                    player.addTempSkill('old_dinghan_used', 'roundStart');
                    player.markAuto('old_dinghan_used', [trigger.card.name]);
                    trigger.targets.remove(player);
                    trigger.getParent().triggeredTargets2.remove(player);
                    trigger.untrigger();
                },
                ai: { threaten: 0.4 },
                subSkill: { used: { charlotte: true, onremove: true } },
            },
            decadexiwu: {
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                forced: true,
                content() {
                    trigger.num++;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return Infinity;
                    },
                    attackFrom() {
                        return -Infinity;
                    },
                },
            },
            decadehongzhuang: {
                trigger: { player: ['useCard', 'respond'] },
                filter(event, player) {
                    return event.cards.length == 1 && typeof get.number(event.card) == 'number' && get.number(event.card) > 0;
                },
                frequent: true,
                content() {
                    player.draw(get.number(trigger.card));
                },
            },
            olddulie: {
                audio: 'dulie',
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                forced: true,
                filter(event, player) {
                    return (event.name != 'phase' || game.phaseNumber == 0) && game.players.length > 1 && game.hasPlayer(function (current) {
                        return current != player && !current.hasMark('olddulie');
                    });
                },
                locked: true,
                direct: true,
                content() {
                    'step 0'
                    var num = Math.min(game.countPlayer(function (current) {
                        return current != player && !current.hasMark('olddulie');
                    }), Math.floor(game.players.length / 2));
                    player.chooseTarget(num, true, '请选择【笃烈】的目标', '令' + get.cnNumber(num) + '名角色获得“围”标记', lib.filter.notMe).set('ai', function (target) {
                        var player = _status.event.player;
                        return Math.max(1, get.attitude(player, target)) / Math.max(1, get.distance(player, target));
                    });
                    'step 1'
                    if (result.bool) {
                        var targets = result.targets.sortBySeat();
                        player.logSkill('olddulie', targets);
                        for (var i of targets) i.addMark('olddulie', 1);
                        game.delayx();
                    }
                },
                mod: {
                    targetInRange(card, player, target) {
                        if (card.name == 'sha' && !target.hasMark('olddulie')) return true;
                    },
                },
                marktext: '围',
                intro: { name: '笃烈/破阵 (围)', name2: '围', content: 'mark' },
                group: 'olddulie_sha',
                subSkill: {
                    sha: {
                        audio: 'dulie',
                        trigger: { target: 'useCardToTarget' },
                        filter(event, player) {
                            return event.card.name == 'sha' && event.player.isIn() && !event.player.hasMark('olddulie');
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            'step 0'
                            player.judge(function (result) {
                                if (get.color(result) == 'red') return 2;
                                return -1;
                            }).judge2 = function (result) {
                                return result.bool;
                            };
                            'step 1'
                            if (result.bool) {
                                trigger.targets.remove(player);
                                trigger.getParent().triggeredTargets2.remove(player);
                                trigger.untrigger();
                            }
                        },
                        ai: {
                            effect: {
                                target(card, player, target, current, isLink) {
                                    if (card.name == 'sha' && !isLink && !player.hasMark('olddulie')) return 0.5;
                                },
                            },
                        },
                    },
                },
            },
            oldpowei: {
                audio: 'tspowei',
                dutySkill: true,
                locked: true,
                derivation: 'old_shenzhu',
                group: ['oldpowei_achieve', 'oldpowei_fail', 'oldpowei_cancel'],
                ai: {
                    combo: 'olddulie',
                    effect: {
                        player(card, player, target) {
                            if (card.name == 'sha' && target.hasMark('olddulie') && get.attitude(player, target) >= 0) return [1, 1, 0, 0];
                            if (get.tag(card, 'damage') && _status.event.type == 'respondShan' && _status.event.getParent().name == 'sha' && target.hasMark('olddulie') && get.attitude(target, player) >= 0) return [1, 1, 0, 0];
                        },
                    },
                },
                subSkill: {
                    cancel: {
                        audio: 'tspowei3',
                        trigger: { source: 'damageBegin3' },
                        logTarget: 'player',
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.player &&
                                event.player.isIn() && event.player.hasMark('olddulie');
                        },
                        forced: true,
                        content() {
                            trigger.cancel();
                            trigger.player.removeMark('olddulie', trigger.player.countMark('olddulie'));
                        },
                    },
                    achieve: {
                        audio: 'tspowei1',
                        trigger: { player: 'useCardAfter' },
                        forced: true,
                        skillAnimation: true,
                        animationColor: 'metal',
                        filter(event, player) {
                            return event.card.name == 'sha' && !game.hasPlayer(function (current) {
                                return current.hasMark('olddulie');
                            });
                        },
                        content() {
                            game.log(player, '成功完成使命');
                            player.awakenSkill('oldpowei');
                            player.addSkills('old_shenzhu');
                        },
                    },
                    fail: {
                        audio: 'tspowei2',
                        trigger: { player: 'dying' },
                        forced: true,
                        content() {
                            'step 0'
                            game.log(player, '使命失败');
                            player.awakenSkill('oldpowei');
                            var num = player.countCards('e');
                            if (num > 0) player.chooseToDiscard('e', true, num);
                            'step 1'
                            if (player.hp < 1) player.recover(1 - player.hp);
                        },
                    },
                },
            },
            old_shenzhu: {
                caidan(player) {
                    //十周年虚拟歌姬推送
                    //整这么多官方的，加点彩蛋很合理吧
                    var cards = [];
                    var list = ['小杀', '小桃', '小闪', '小酒', '小乐', '小蛮', '小击', '小粮', '小有', '小拆', '小箭', '小牵'];
                    var list3 = ['sha', 'tao', 'shan', 'jiu', 'lebu', 'nanman', 'juedou', 'bingliang', 'wuzhong', 'guohe', 'wanjian', 'shunshou'];
                    var nums = Array.from({ length: 12 }).map((_, i) => i).removeArray(player.old_shenzhuCaiDan || []);
                    nums = nums.randomGets(player.name2 ? 2 : 1);
                    player.old_shenzhuCaiDan = nums;
                    nums.sort((a, b) => a - b);
                    for (var i = 0; i < nums.length; i++) {
                        var num = nums[i];
                        var name = list3[num];
                        game.log(player, '得到了', '#g' + list[num], '的庇护');
                        game.broadcastAll(function (player, i, list, num) {
                            player.node[i == 0 ? 'avatar' : 'avatar2'].setBackgroundImage('extension/活动武将/image/default/' + list[num] + '.jpg');
                            player.node[i == 0 ? 'name' : 'name2'].innerHTML = list[num];
                        }, player, i, list, num);
                        var card = get.cardPile(function (card) {
                            if (cards.includes(card)) return false;
                            if (name == 'tao') return ['tao', 'zong'].includes(card.name);
                            if (name == 'jiu') return ['jiu', 'xionghuangjiu'].includes(card.name);
                            if (name == 'wuzhong') return ['wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].includes(card.name);
                            return card.name == name;
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) player.gain(cards, 'gain2');
                    player.addTempSkill('old_shenzhu_return');
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return Infinity;
                    },
                },
                audio: 'shenzhu',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    return event.card.name == 'sha' && event.card.isCard && event.cards.length == 1;
                },
                forced: true,
                content() {
                    lib.skill.old_shenzhu.caidan(player);
                },
                subSkill: {
                    return: {
                        charlotte: true,
                        onremove(player) {
                            if (player.name1) {
                                game.broadcastAll(function (player) {
                                    player.node.avatar.setBackground(player.name1, 'character');
                                    player.node.name.innerHTML = get.slimName(player.name1);
                                }, player);
                            }
                            if (player.name2) {
                                game.broadcastAll(function (player) {
                                    player.node.avatar2.setBackground(player.name2, 'character');
                                    player.node.name2.innerHTML = get.slimName(player.name2);
                                }, player);
                            }
                        },
                    },
                },
            },
            old_yingba: {
                audio: 'yingba',
                enable: 'phaseUse',
                usable: 1,
                filter: (event, player) => (game.hasPlayer((current) => (current != player && current.maxHp > 1))),
                filterTarget: (card, player, target) => (target != player && target.maxHp > 1),
                content() {
                    'step 0'
                    target.loseMaxHp();
                    'step 1'
                    if (target.isIn()) target.addMark('old_yingba_mark', 1);
                    player.loseMaxHp();
                },
                mod: {
                    cardUsableTarget(card, player, target) {
                        if (target.hasMark('old_yingba_mark')) return true;
                    },
                },
                ai: {
                    threaten: 4.8,
                    order: 12,
                    result: {
                        target(player, target) {
                            if (target.isHealthy()) return -3;
                            if (!target.hasMark('old_yingba_mark')) return -2;
                            if (target.maxHp < 3) return -1;
                            return 0;
                        },
                    },
                },
                subSkill: {
                    mark: {
                        marktext: '定',
                        intro: {
                            name: '平定',
                            content: 'mark',
                            onunmark: true,
                        },
                    },
                },
            },
            old_fuhai: {
                audio: 'scfuhai',
                trigger: { player: 'useCardToPlayered' },
                forced: true,
                filter(event, player) {
                    return event.target && event.target.hasMark('old_yingba_mark');
                },
                logTarget: 'target',
                content() {
                    trigger.directHit.add(trigger.target);
                },
                group: ['old_fuhai_die', 'old_fuhai_usea'],
                ai: {
                    combo: 'old_yingba',
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg?.target && arg.target.hasMark('old_yingba_mark')
                    },
                },
                subSkill: {
                    usea: {
                        audio: 'scfuhai',
                        trigger: { player: 'useCardAfter' },
                        forced: true,
                        filter(event, player) {
                            return lib.skill.old_fuhai_usea.logTarget(event, player).length > 0;
                        },
                        logTarget(event, player) {
                            return event.targets.filter(function (i) {
                                return i.hasMark('old_yingba_mark');
                            });
                        },
                        content() {
                            var num = 0;
                            for (var i of trigger.targets) {
                                var numx = i.countMark('old_yingba_mark');
                                if (numx) {
                                    num += numx;
                                    i.removeMark('old_yingba_mark', numx);
                                }
                            }
                            if (num) player.gainMaxHp(num);
                        },
                    },
                    die: {
                        audio: 'scfuhai',
                        trigger: { global: 'die' },
                        forced: true,
                        filter(event, player) {
                            return event.player.countMark('old_yingba_mark') > 0;
                        },
                        content() {
                            player.gainMaxHp(trigger.player.countMark('old_yingba_mark'));
                            player.draw(trigger.player.countMark('old_yingba_mark'));
                        },
                    },
                },
            },
            old_pinghe: {
                audio: 'pinghe',
                mod: {
                    maxHandcardBase(player) {
                        return player.getDamagedHp();
                    },
                },
                locked: false,
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    return event.source && event.source != player && event.num < player.countCards('h');
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseCardTarget({
                        prompt: get.prompt('old_pinghe'),
                        prompt2: '将' + get.cnNumber(trigger.num) + '张手牌交给一名其他角色并防止伤害' + (player.hasSkill('old_yingba') ? '，然后令伤害来源获得等量“平定”标记' : ''),
                        selectCard: trigger.num,
                        filterCard: true,
                        filterTarget: lib.filter.notMe,
                        ai1(card) {
                            if (get.tag(card, 'recover') && !game.hasPlayer(function (current) {
                                return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                            })) return 0;
                            return 1 / Math.max(0.1, get.value(card));
                        },
                        ai2(target) {
                            var player = _status.event.player, att = get.attitude(player, target);
                            if (target.hasSkillTag('nogain')) att /= 9;
                            return 4 + att;
                        },
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('old_pinghe', target);
                        target.gain(result.cards, player, 'giveAuto');
                        trigger.cancel();
                        player.loseMaxHp(trigger.num);
                        if (player.hasSkill('old_yingba')) {
                            trigger.source.addMark('old_yingba_mark', trigger.num);
                        }
                    }
                },
            },
            BTkongju: {
                audio: 'keji',
                scareSkill: true,
                trigger: { player: 'phaseUseEnd' },
                frequent(event, player) {
                    return player.needsToDiscard();
                },
                filter(event, player) {
                    var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                    for (var i = 0; i < history.length; i++) {
                        if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                    }
                    return true;
                },
                content() {
                    player.skip('phaseDiscard');
                    var targets = game.filterPlayer(function (current) {
                        return current != player;
                    }).sortBySeat();
                    player.line(targets);
                    for (var i of targets) i.addMark('BTkongju', 1);
                    game.delayx();
                },
                marktext: '惧',
                intro: { name: '恐惧', name2: '惧', content: 'mark' },
            },
            BThouqi: {
                trigger: { player: 'phaseBeginStart' },
                forced: true,
                skillAnimation: true,
                animationColor: 'wood',
                filter(event, player) {
                    var num = 0;
                    for (var i = 0; i < game.players.length; i++) num += game.players[i].countMark('BTkongju');
                    return num >= 100;
                },
                content() {
                    var bool = false;
                    if (player == game.me) bool = true;
                    else switch (get.mode()) {
                        case 'identity': {
                            game.showIdentity();
                            var id1 = player.identity;
                            var id2 = game.me.identity;
                            if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                break;
                            }
                            else if (id1 == 'fan') {
                                if (id2 == 'fan') bool = true;
                                break;
                            }
                            break;
                        }
                        case 'guozhan': {
                            if (game.me.isFriendOf(player)) bool = true;
                            break;
                        }
                        case 'versus': {
                            if (player.side == game.me.side) bool = true;
                            break;
                        }
                        case 'boss': {
                            if (player.side == game.me.side) bool = true;
                            break;
                        }
                        default: { }
                    }
                    game.over(bool);
                },
            },
            bilibili_taoluan: {
                hiddenCard(player, name) {
                    return !player.getStorage('bilibili_taoluan').includes(name) && player.countCards('hes') > 0 && lib.inpile.includes(name);
                },
                audio: 'taoluan',
                enable: 'chooseToUse',
                filter(event, player) {
                    return get.inpileVCardList(info => {
                        if (!['basic', 'trick'].includes(info[0])) return false;
                        if (player.getStorage('bilibili_taoluan').includes(info[2])) return false;
                        return player.countCards('hes', card => event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, [card]), player, event));
                    }).length;
                },
                onremove: true,
                chooseButton: {
                    dialog(event, player) {
                        var list = get.inpileVCardList(info => {
                            if (!['basic', 'trick'].includes(info[0])) return false;
                            if (player.getStorage('bilibili_taoluan').includes(info[2])) return false;
                            return player.countCards('hes', card => event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, [card]), player, event));
                        })
                        return ui.create.dialog('滔乱', [list, 'vcard']);
                    },
                    filter(button, player) {
                        return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
                    },
                    check(button) {
                        var player = _status.event.player;
                        var card = { name: button.link[2], nature: button.link[3] };
                        if (player.countCards('hes', cardx => cardx.name == card.name)) return 0;
                        return _status.event.getParent().type == 'phase' ? player.getUseValue(card) : 1;
                    },
                    backup(links, player) {
                        return {
                            audio: 'taoluan',
                            filterCard: true,
                            popname: true,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            onuse(result, player) {
                                player.markAuto('bilibili_taoluan', [result.card.name]);
                                player.addTempSkill('bilibili_taoluan_effect');
                            },
                        }
                    },
                    prompt(links, player) {
                        return '将一张牌当作' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    }
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                    threaten: 4.7,
                    save: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        if (!player.countCards('hes')) return false;
                        if (tag == 'respondSha' || tag == 'respondShan') {
                            if (arg == 'respond') return false;
                            return !player.getStorage('bilibili_taoluan').includes(tag == 'respondSha' ? 'sha' : 'shan');
                        }
                        return !player.getStorage('bilibili_taoluan').includes('tao') || (!player.getStorage('bilibili_taoluan').includes('jiu') && arg == player);
                    },
                },
                subSkill: {
                    backup: {},
                    effect: {
                        charlotte: true,
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            return event.skill == 'bilibili_taoluan_backup';
                        },
                        forced: true,
                        popup: false,
                        content() {
                            'step 0'
                            if (game.hasPlayer(function (current) {
                                return current != player && current.countGainableCards(player, 'he') > 0;
                            })) player.chooseTarget(true, function (card, player, target) {
                                return target != player && target.countGainableCards(player, 'he') > 0;
                            }, '滔乱<br><br><div class="text center">获得一名其他角色的一张牌，如果你获得的牌与你以此法使用的牌类别相同的牌，你失去1点体力且本回合〖滔乱〗失效').set('ai', function (target) {
                                var player = _status.event.player;
                                return get.effect(target, { name: 'guohe_copy2' }, player, player);
                            });
                            else event._result = { bool: false };
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                player.gainPlayerCard(target, true, 'he');
                            }
                            else event._result = { bool: false };
                            'step 2'
                            if (!result.bool || get.type2(trigger.card) == get.type2(result.cards[0])) {
                                player.popup('杯具');
                                player.loseHp();
                                player.tempBanSkill('bilibili_taoluan');
                            }
                        },
                    }
                }
            },
            //2013年韩旭爆料版神甘宁
            old_jieying: {
                unique: true,
                group: 'old_jieying_die',
                audio: 'drlt_jieying',
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                direct: true,
                content() {
                    player.logSkill('old_jieying', _status.roundStart);
                    _status.roundStart.addSkill('old_jieying_mark');
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        mark: true,
                        marktext: '营',
                        intro: {
                            name: '劫营',
                            content: '已获得【营】标记',
                        },
                        audio: 'drlt_jieying',
                        trigger: { player: ['phaseAfter', 'dieAfter'] },
                        filter(event, player) {
                            return game.hasPlayer(function (current) {
                                return current.hasSkill('old_jieying');
                            });
                        },
                        forced: true,
                        forceDie: true,
                        content() {
                            'step 0'
                            player.removeSkill('old_jieying_mark');
                            player.next.addSkill('old_jieying_mark');
                            'step 1'
                            for (var target of game.players) {
                                if (target.hasSkill('old_jieying')) target.phase('old_jieying');
                            }
                        },
                    },
                    die: {
                        charlotte: true,
                        trigger: { player: 'die' },
                        filter(event, player) {
                            return !game.hasPlayer(function (current) {
                                return current != player && current.hasSkill('old_jieying');
                            });
                        },
                        forceDie: true,
                        direct: true,
                        content() {
                            for (var target of game.players) target.removeSkill('old_jieying_mark');
                        },
                    },
                },
            },
            old_tongling: {
                audio: 'drlt_poxi',
                trigger: { target: 'useCardToTargeted', global: ['logSkillBegin', 'useSkill'] },
                filter(event, player) {
                    if (event.name == 'useCardToTargeted') return event.targets.length == 1;
                    if (player == event.player) return false;
                    return event.targets?.includes(player) && event.type == 'player';
                },
                forced: true,
                logTarget: 'player',
                content() {
                    player.draw(2);
                },
            },
            boljingjia: {
                derivation: ['wushuangfangtianji', 'shufazijinguan', 'hongmianbaihuapao', 'linglongshimandai'],
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                forced: true,
                content() {
                    var list = ['wushuangfangtianji', 'shufazijinguan'];
                    list.add(['hongmianbaihuapao', 'linglongshimandai'].randomGet());
                    list = list.map(name => game.createCard2(name, lib.suit.randomGet(), get.rand(1, 13)));
                    player.$gain2(list, false);
                    game.delayx();
                    list.forEach(card => player.equip(card));
                },
            },
            BTdunshi: {
                audio: 'dunshi',
                enable: ['chooseToUse', 'chooseToRespond'],
                usable: 1,
                init(player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = [['sha', 'shan', 'tao', 'jiu'], 0];
                },
                hiddenCard(player, name) {
                    if (player.storage.BTdunshi && player.storage.BTdunshi[0].includes(name) && !player.getStat('skill').BTdunshi) return true;
                    return false;
                },
                filter(event, player) {
                    if (event.type == 'wuxie') return false;
                    var storage = player.storage.BTdunshi;
                    if (!storage || !storage[0].length) return false;
                    for (var i of storage[0]) {
                        var card = { name: i, isCard: true };
                        if (event.filterCard(card, player, event)) return true;
                    }
                    return false;
                },
                contentx() {
                    'step 0'
                    var list, skills = [];
                    if (get.mode() == 'guozhan') {
                        list = [];
                        for (var i in lib.characterPack.mode_guozhan) list.push(i);
                    }
                    else if (_status.connectMode) list = get.charactersOL();
                    else {
                        list = [];
                        for (var i in lib.character) {
                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                            list.push(i);
                        }
                    }
                    for (var i of list) {
                        if (i.indexOf('gz_jun') == 0) continue;
                        for (var j of lib.character[i][3]) {
                            var skill = lib.skill[j];
                            if (target.hasSkill(j)) continue;
                            if (!skill || skill.zhuSkill) continue;
                            if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                            var info = get.translation(j);
                            for (var ix = 0; ix < info.length; ix++) {
                                if (/仁|义|礼|智|信/.test(info[ix]) == true) {
                                    skills.add(j);
                                    break;
                                }
                            }
                        }
                    }
                    if (!skills.length) {
                        event.finish();
                        return;
                    }
                    var list = [];
                    for (var skill of skills) {
                        list.push([
                            skill,
                            '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>',
                        ])
                    }
                    player.chooseButton([
                        '遁世：选择令' + (target == player ? '自己' : get.translation(target)) + '获得一个技能',
                        [list, 'textbutton'],
                    ]).set('forced', true);
                    'step 1'
                    if (result.bool) {
                        player.line(target);
                        target.addSkills(result.links[0]);
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        var storage = player.storage.BTdunshi;
                        for (var i of storage[0]) list.push(['基本', '', i]);
                        return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        var evt = _status.event.getParent();
                        return evt.filterCard({ name: button.link[2], isCard: true }, player, evt);
                    },
                    check(button) {
                        var card = { name: button.link[2] }, player = _status.event.player;
                        if (_status.event.getParent().type != 'phase') return 1;
                        if (card.name == 'jiu') return 0;
                        if (card.name == 'sha' && player.hasSkill('jiu')) return 0;
                        return player.getUseValue(card, null, true);
                    },
                    backup(links, player) {
                        return {
                            audio: 'dunshi',
                            filterCard() { return false },
                            popname: true,
                            viewAs: {
                                name: links[0][2],
                                isCard: true,
                            },
                            selectCard: -1,
                            precontent() {
                                player.addTempSkill('BTdunshi_damage');
                                player.storage.BTdunshi_damage = event.result.card.name;
                            },
                        }
                    },
                    prompt(links, player) {
                        return '请选择【' + get.translation(links[0][2]) + '】的目标';
                    }
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        var storage = player.storage.BTdunshi;
                        if (!storage || !storage[0].length) return false;
                        if (player.getStat('skill').BTdunshi) return false;
                        switch (tag) {
                            case 'respondSha': return (_status.event.type != 'phase' || (player == game.me || player.isUnderControl() || player.isOnline())) && storage[0].includes('sha');
                            case 'respondShan': return storage[0].includes('shan');
                            case 'save':
                                if (arg == player && storage[0].includes('jiu')) return true;
                                return storage[0].includes('tao');
                        }
                    },
                    order: 2,
                    result: {
                        player(player) {
                            if (_status.event.type == 'dying') {
                                return get.attitude(player, _status.event.dying);
                            }
                            return 1;
                        },
                    },
                },
                subSkill: {
                    backup: { audio: 'dunshi' },
                    damage: {
                        charlotte: true,
                        onremove: true,
                        audio: 'dunshi',
                        trigger: { global: 'damageBegin2' },
                        filter(event, player) {
                            return event.source == _status.currentPhase;
                        },
                        forced: true,
                        logTarget: 'source',
                        content() {
                            'step 0'
                            event.cardname = player.storage.BTdunshi_damage;
                            player.removeSkill('BTdunshi_damage');
                            event.target = trigger.source;
                            event.videoId = lib.status.videoId++;
                            var func = function (card, id, card2, card3) {
                                var list = [
                                    '防止即将对' + card3 + '造成的伤害，并令' + card + '获得一个技能名中包含“仁/义/礼/智/信”的技能',
                                    '从〖遁世〗中删除【' + card2 + '】',
                                    '减1点体力上限，然后摸等同于〖遁世〗已删除牌名数的牌',
                                ];
                                var choiceList = ui.create.dialog('遁世：请选择两项');
                                choiceList.videoId = id;
                                for (var i = 0; i < list.length; i++) {
                                    var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                    str += list[i];
                                    str += '</div>';
                                    var next = choiceList.add(str);
                                    next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                    next.firstChild.link = i;
                                    for (var j in lib.element.button) {
                                        next[j] = lib.element.button[j];
                                    }
                                    choiceList.buttons.add(next.firstChild);
                                }
                                return choiceList;
                            };
                            if (player.isOnline2()) {
                                player.send(func, get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                            }
                            event.dialog = func(get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                            if (player != game.me || _status.auto) {
                                event.dialog.style.display = 'none';
                            }
                            var next = player.chooseButton();
                            next.set('dialog', event.videoId);
                            next.set('forced', true);
                            next.set('selectButton', 2);
                            next.set('ai', function (button) {
                                var player = _status.event.player;
                                switch (button.link) {
                                    case 0:
                                        if (get.attitude(player, _status.currentPhase) > 0) return 3;
                                        return 0;
                                    case 1:
                                        return 1;
                                    case 2:
                                        var num = player.storage.BTdunshi[1];
                                        for (var i of ui.selected.buttons) {
                                            if (i.link == 1) num++;
                                        }
                                        if (num > 0 && player.isDamaged()) return 2;
                                        return 0;
                                }
                            });
                            'step 1'
                            if (player.isOnline2()) {
                                player.send('closeDialog', event.videoId);
                            }
                            event.dialog.close();
                            event.links = result.links.sort();
                            for (var i of event.links) {
                                game.log(player, '选择了', '#g【遁世】', '的', '#y选项' + get.cnNumber(i + 1, true));
                            }
                            if (event.links.includes(0)) {
                                trigger.cancel();
                                var next = game.createEvent('BTdunshi_gain', false);
                                next.player = player;
                                next.target = _status.currentPhase;
                                next.setContent(lib.skill.BTdunshi.contentx);
                            }
                            else event.goto(3);
                            'step 2'
                            game.broadcastAll('closeDialog', event.videoId);
                            target.addSkills(result.control);
                            'step 3'
                            var storage = player.storage.BTdunshi;
                            if (event.links.includes(1)) {
                                storage[0].remove(event.cardname);
                                storage[1]++;
                            }
                            if (event.links.includes(2)) {
                                player.loseMaxHp();
                                if (storage[1] > 0) player.draw(storage[1]);
                            }
                        },
                        ai: {
                            effect: {
                                player(card, player, target) {
                                    if (get.tag(card, 'damage') && get.attitude(player, target) >= 0) return [0, 0.1, 0, 0.1];
                                },
                            },
                        },
                    },
                },
            },
            BThuashen: {
                init(player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = {
                        character: [],
                        shown: [],
                        map: {},
                    }
                },
                unique: true,
                audio: 'huashen2',
                trigger: { global: 'phaseBefore', player: ['phaseBegin', 'phaseEnd', 'enterGame'] },
                filter(event, player, name) {
                    if (name == 'phaseBefore' || name == 'enterGame') return event.name != 'phase' || game.phaseNumber == 0;
                    return player.storage.BThuashen && player.storage.BThuashen.character.length > 0;
                },
                direct: true,
                content() {
                    'step 0'
                    if (event.triggername == 'phaseBefore' || event.triggername == 'enterGame') {
                        event.logged = true;
                        player.logSkill('BThuashen');
                        lib.skill.BThuashen.addFuckShens(player, 2, 'BThuashen');
                    }
                    _status.noclearcountdown = true;
                    event.videoId = lib.status.videoId++;
                    var cards = player.storage.BThuashen.character.slice(0);
                    var skills = [];
                    var sto = player.storage.BThuashen;
                    for (var i in player.storage.BThuashen.map) {
                        skills.addArray(player.storage.BThuashen.map[i]);
                    }
                    var cond = 'out';
                    if (event.triggername == 'phaseBegin') {
                        cond = 'in';
                    }
                    skills.randomSort();
                    skills.sort(function (a, b) {
                        return get.skillRank(b, cond) - get.skillRank(a, cond);
                    });
                    event.aiChoice = skills[0];
                    if (player.countMark('BTxinsheng') < 2 && (event.aiChoice == player.storage.BThuashen.current2 || get.skillRank(event.aiChoice, cond) < 1)) choice = '弃置化身';
                    else if (event.aiChoice == player.storage.BThuashen.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '制衡化身';
                    if (player.isOnline2()) {
                        player.send(function (cards, id) {
                            var dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
                            dialog.videoId = id;
                        }, cards, event.videoId);
                    }
                    event.dialog = ui.create.dialog(get.prompt('BThuashen'), [cards, 'character']);
                    event.dialog.videoId = event.videoId;
                    if (!event.isMine()) {
                        event.dialog.style.display = 'none';
                    }
                    if (event.triggername == 'phaseBefore' || event.triggername == 'enterGame') event._result = { control: '更换技能' };
                    else {
                        var choice = '更换技能', list = ['制衡化身', '更换技能'];
                        if (player.countMark('BTxinsheng') < 2 && player.storage.BThuashen.character.length > 1) {
                            list.push('弃置化身');
                            choice = '弃置化身';
                        }
                        list.push('cancel2');
                        player.chooseControl(list).set('ai', function () {
                            return _status.event.choice;
                        }).set('choice', choice);
                    }
                    'step 1'
                    event.control = result.control;
                    if (event.control == 'cancel2') {
                        if (player.isOnline2()) player.send('closeDialog', event.videoId);
                        delete _status.noclearcountdown;
                        if (!_status.noclearcountdown) {
                            game.stopCountChoose();
                        }
                        event.dialog.close();
                        event.finish();
                        return;
                    }
                    if (!event.logged) {
                        player.logSkill('BThuashen');
                        event.logged = true;
                    }
                    var num = player.maxHp;
                    var next = player.chooseButton(true).set('dialog', event.videoId);
                    if (event.control == '制衡化身') {
                        next.set('selectButton', [1, num]);
                        next.set('filterButton', function (button) {
                            return button.link != _status.event.current;
                        });
                        next.set('current', player.storage.BThuashen.current);
                    }
                    else if (event.control == '弃置化身') {
                        next.set('selectButton', 1);
                        next.set('filterButton', function (button) {
                            return button.link != _status.event.current;
                        });
                        next.set('current', player.storage.BThuashen.current);
                    }
                    else {
                        next.set('ai', function (button) {
                            return player.storage.BThuashen.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
                        });
                        next.set('choice', event.aiChoice);
                    }
                    var prompt;
                    switch (event.control) {
                        case '制衡化身':
                            prompt = '选择制衡至多' + get.cnNumber(num) + '张化身';
                            break;
                        case '更换技能':
                            prompt = '选择要切换的化身';
                            break;
                        case '弃置化身':
                            prompt = '选择要弃置的化身';
                            break;
                    }
                    var func = function (id, prompt) {
                        var dialog = get.idDialog(id);
                        if (dialog) dialog.content.childNodes[0].innerHTML = prompt;
                    }
                    if (player.isOnline2()) player.send(func, event.videoId, prompt);
                    else if (event.isMine()) func(event.videoId, prompt);
                    'step 2'
                    if (result.bool && event.control == '更换技能') {
                        event.card = result.links[0];
                        var func = function (card, id) {
                            var dialog = get.idDialog(id);
                            if (dialog) {
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    dialog.buttons[i].classList.add(dialog.buttons[i].link == card ? 'selectedx' : 'unselectable');
                                }
                            }
                        }
                        if (player.isOnline2()) player.send(func, event.card, event.videoId);
                        else if (event.isMine()) func(event.card, event.videoId);
                        var list = player.storage.BThuashen.map[event.card].slice(0);
                        list.push('返回');
                        player.chooseControl(list).set('choice', event.aiChoice).set('ai', () => _status.event.choice);
                    }
                    else {
                        lib.skill.BThuashen.removeFuckShen(player, result.links.slice(0), 'BThuashen');
                        if (event.control == '制衡化身') lib.skill.BThuashen.addFuckShens(player, result.links.length, 'BThuashen');
                        else {
                            player.addMark('BTxinsheng', 1, false);
                            game.log(player, '的', '#g【新生】', '已升至', player.countMark('BTxinsheng') + 1, '级');
                        }
                    }
                    'step 3'
                    if (result.control == '返回') {
                        var func = function (id) {
                            var dialog = get.idDialog(id);
                            if (dialog) {
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    dialog.buttons[i].classList.remove('selectedx');
                                    dialog.buttons[i].classList.remove('unselectable');
                                }
                            }
                        }
                        if (player.isOnline2()) player.send(func, event.videoId);
                        else if (event.isMine()) func(event.videoId);
                        event._result = { control: '更换技能' };
                        event.goto(1);
                        return;
                    }
                    if (player.isOnline2()) player.send('closeDialog', event.videoId);
                    event.dialog.close();
                    delete _status.noclearcountdown;
                    if (!_status.noclearcountdown) game.stopCountChoose();
                    if (event.control != '更换技能') return;
                    if (player.storage.BThuashen.current != event.card) {
                        player.storage.BThuashen.current = event.card;
                        lib.skill.BThuashen.changeSex(lib.character[event, card][0], player);
                        player.changeGroup(lib.character[event, card][1]);
                    }
                    var link = result.control;
                    player.storage.BThuashen.current2 = link;
                    if (!player.additionalSkills.BThuashen || !player.additionalSkills.BThuashen.includes(link)) {
                        player.addAdditionalSkills('BThuashen', link);
                        player.flashAvatar('BThuashen', event.card);
                        player.storage.BThuashen.shown.push(event.card);
                        player.syncStorage('BThuashen');
                        player.updateMarks('BThuashen');
                    }
                },
                intro: {
                    onunmark(storage, player) {
                        _status.characterlist.addArray(storage.character);
                        storage.character = [];
                        storage.shown = [];
                        const name = player.name ? player.name : player.name1;
                        if (name) {
                            const sex = get.character(name, 0);
                            const group = get.character(name, 1);
                            if (player.sex !== sex) get.info('BThuashen').changeSex(sex, player);
                            if (player.group !== group) {
                                game.broadcastAll((player, group) => {
                                    player.group = group;
                                    player.node.name.dataset.nature = get.groupnature(group);
                                }, player, group);
                                game.log(player, '将势力变为了', '#y' + get.translation(group + 2));
                            }
                        }
                    },
                    mark(dialog, storage, player) {
                        if (!storage?.character?.length) return '没有化身';
                        var list = storage.character;
                        dialog.addSmall([list, 'character']);
                        for (var i = 0; i < dialog.buttons.length; i++) {
                            var button = dialog.buttons[i];
                            if (!player.isUnderControl(true) && !storage.shown.includes(button.link)) {
                                button.node.group.remove();
                                button.node.hp.remove();
                                button.node.intro.remove();
                                button.node.name.innerHTML = '未知';
                                button.node.name.dataset.nature = '';
                                button.style.background = '';
                                button._nointro = true;
                                button.classList.add('menubg');
                            }
                            if (button.link == storage.current) button.classList.add('glow2');
                        }
                        var skill = storage.current2;
                        if (skill) dialog.add('<div><div class="skill">【' + get.translation(lib.translate[skill + '_ab'] || get.translation(skill).slice(0, 2)) + '】</div>' + '<div>' + get.skillInfoTranslation(skill, player) + '</div></div>');
                    },
                    content(storage) {
                        return '共有' + get.cnNumber(storage.character.length) + '张「化身」'
                    },
                    markcount(storage) {
                        return storage?.character?.length || 0;
                    },
                },
                changeSex(sex, player) {
                    game.broadcastAll((sex, player) => {
                        player.sex = sex;
                    }, sex, player);
                    game.log(player, '将性别变为了', '#y' + get.translation(sex) + '性');
                },
                addFuckShen(player, skill) {
                    if (!player.storage[skill]) return;
                    if (!_status.characterlist) lib.skill.pingjian.initList();
                    _status.characterlist.randomSort();
                    for (var i = 0; i < _status.characterlist.length; i++) {
                        var name = _status.characterlist[i];
                        if (lib.character[name][1] == 'shen' || name.indexOf('zuoci') != -1 || name.indexOf('xushao') != -1 || name.indexOf('key') == 0 || lib.skill.rehuashen.banned.includes(name) || player.storage[skill].character.includes(name)) continue;
                        var skills = lib.character[name][3];
                        for (var j = 0; j < skills.length; j++) {
                            var info = lib.skill[skills[j]];
                            if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) skills.splice(j--, 1);
                        }
                        if (skills.length) {
                            player.storage[skill].character.push(name);
                            player.storage[skill].map[name] = skills;
                            _status.characterlist.remove(name);
                            return name;
                        }
                    }
                },
                addFuckShens(player, num, skill) {
                    var list = [];
                    for (var i = 0; i < num; i++) {
                        var name = lib.skill.BThuashen.addFuckShen(player, skill);
                        if (name) list.push(name);
                    }
                    if (list.length) {
                        game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g化身');
                        lib.skill.rehuashen.drawCharacter(player, list);
                    }
                    player[player.storage[skill].character.length ? 'markSkill' : 'unmarkSkill'](skill);
                },
                removeFuckShen(player, links, skill) {
                    player.storage[skill].character.removeArray(links);
                    _status.characterlist.addArray(links);
                    game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g化身');
                    player[player.storage[skill].character.length ? 'markSkill' : 'unmarkSkill'](skill);
                },
            },
            BTxinsheng: {
                derivation: ['BTxinsheng_1', 'BTxinsheng_2', 'BThuanhua'],
                unique: true,
                audio: 'xinsheng',
                trigger: { player: 'damageEnd', source: 'damageSource' },
                filter(event, player, name) {
                    if (name == 'damageSource') return player.hasMark('BTxinsheng');
                    return true;
                },
                frequent: true,
                content() {
                    'step 0'
                    lib.skill.BThuashen.addFuckShens(player, trigger.num, 'BThuashen');
                    'step 1'
                    if (player.countMark('BTxinsheng') >= 2 && player.storage.BThuashen.character.length >= game.players.length && !player.hasSkill('BThuanhua')) {
                        player.$fullscreenpop('新生', 'thunder');
                        player.addSkills('BThuanhua');
                    }
                },
            },
            BThuanhua: {
                unique: true,
                audio: 'yigui',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.countCards('hs')) return false;
                    var storage = player.storage.BThuashen;
                    if (!storage || storage.character.length <= (storage.current ? 1 : 0)) return false;
                    for (var i of lib.inpile) {
                        if (get.type({ name: i }) != 'basic' && get.type({ name: i }) != 'trick') continue;
                        if (event.filterCard(get.autoViewAs({ name: i }, 'unsure'), player, event)) return true;
                        if (i == 'sha') {
                            for (var j of lib.inpile_nature) if (event.filterCard(get.autoViewAs({ name: i, nature: j }, 'unsure'), player, event)) return true;
                        }
                    }
                    return false;
                },
                usable: 1,
                chooseButton: {
                    select: 2,
                    dialog(event, player) {
                        var dialog = ui.create.dialog('幻化', 'hidden');
                        dialog.add([player.storage.BThuashen.character, 'character']);
                        var list = [];
                        for (var name of lib.inpile) {
                            if (get.type({ name: name }) != 'basic' && get.type({ name: name }) != 'trick') continue;
                            list.push([get.translation(get.type({ name: name })), '', name]);
                            if (name == 'sha') {
                                for (var nature of lib.inpile_nature) list.push(['基本', '', 'sha', nature]);
                            }
                        }
                        dialog.add([list, 'vcard']);
                        return dialog;
                    },
                    check(button) {
                        var player = _status.event.player;
                        if (player.storage.BThuashen.character.includes(button.link)) return (1 / lib.skill.old_gengzhan.getNum(button.link)) || 0.5;
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    filter(button, player) {
                        var evt = _status.event.getParent();
                        var getBool = function (object) {
                            return player.storage.BThuashen.character.includes(object) ? 1 : -1;
                        };
                        if (button.link == player.storage.BThuashen.current) return false;
                        if (getBool(button.link) == -1 && !evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt)) return false;
                        return !ui.selected.buttons.length || getBool(ui.selected.buttons[0].link) != getBool(button.link);
                    },
                    backup(links, player) {
                        if (player.storage.BThuashen.character.includes(links[1])) links.reverse();
                        var name = links[1][2];
                        var nature = links[1][3] || null;
                        return {
                            audio: 'yigui',
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'hs',
                            popname: true,
                            viewAs: {
                                name: name,
                                nature: nature,
                            },
                            onuse(result, player) {
                                player.flashAvatar('BThuanhua', links[0]);
                                lib.skill.BThuashen.removeFuckShen(player, links, 'BThuashen');
                            },
                        }
                    },
                    prompt(links, player) {
                        if (player.storage.BThuashen.character.includes(links[1])) links.reverse();
                        var character = links[0];
                        var name = links[1][2];
                        var nature = links[1][3] || null;
                        return '弃置“' + get.translation(character) + '”并将一张手牌当作' + (get.translation(nature) || '') + get.translation(name) + '使用';
                    },
                },
                ai: {
                    combo: 'BTxinsheng',
                    order: 1,
                    result: { player: 1 },
                },
            },
            bilibili_kurou: {
                audio: 'rekurou',
                enable: 'phaseUse',
                content() {
                    player.loseHp();
                    player.draw();
                },
                ai: {
                    order: 8,
                    result: {
                        player(player) {
                            if (player.countCards('hs', { name: ['jiu', 'tao'] }) + player.hp > 0) return 1;
                            return 0;
                        }
                    },
                },
            },
            bilibili_zhaxiang: {
                audio: 'zhaxiang',
                trigger: { player: ['loseHpEnd', 'damageEnd'] },
                filter(event, player) {
                    return player.countCards('h');
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseToDiscard('h', get.prompt('bilibili_zhaxiang'), '弃置任意张手牌并摸等量的牌', [1, player.countCards('h')]).set('ai', lib.skill.zhiheng.check).set('complexCard', true).logSkill = 'bilibili_zhaxiang';
                    'step 1'
                    if (result.bool) player.draw(result.cards.length);
                },
            },
            //合影留念！第一个扩展的第一个贴吧武将！
            bilibili_xueji: {
                zhuanhuanji: true,
                trigger: { global: 'roundStart' },
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage) {
                        if (storage) return '新的一轮开始时，你可以失去1点体力上限，并视为使用一张【杀】，若此【杀】造成伤害，你摸两张牌。';
                        return '新的一轮开始时，你可以失去1点体力，令一名角色于本轮第一次造成的伤害+1。';
                    },
                },
                direct: true,
                content() {
                    'step 0'
                    if (player.storage.bilibili_xueji) player.chooseTarget(get.prompt('bilibili_xueji'), '失去1点体力上限并视为使用一张【杀】，若此杀造成伤害，你摸两张牌', function (card, player, target) {
                        return player.canUse({ name: 'sha', isCard: true }, target);
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'sha', isCard: true }, player, player);
                    });
                    else player.chooseTarget(get.prompt('bilibili_xueji'), '失去1点体力，令一名角色于本轮第一次造成的伤害+1').set('ai', function (target) {
                        var player = _status.event.player;
                        return get.attitude(player, target);
                    });
                    'step 1'
                    event.sha = false;
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('bilibili_xueji', target);
                        event.sha = true;
                        if (player.storage.bilibili_xueji) {
                            player.loseMaxHp();
                            player.useCard({ name: 'sha', isCard: true }, target, false);
                        }
                        else {
                            player.loseHp();
                            target.addTempSkill('bilibili_xueji2', 'roundAfter');
                        }
                        player.changeZhuanhuanji('bilibili_xueji');
                    }
                    else event.finish();
                    'step 2'
                    if (event.sha && game.hasPlayer2(function (current) {
                        return current.getHistory('damage', function (evt) {
                            return evt.getParent(4) == event;
                        }).length > 0
                    })) player.draw(2);
                },
            },
            bilibili_hanran: {
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.player != player && event.player.maxHp > player.maxHp;
                },
                forced: true,
                content() {
                    player.gainMaxHp();
                },
            },
            bilibili_xueji2: {
                charlotte: true,
                mark: true,
                intro: { content: '本轮第一次造成的伤害+1' },
                trigger: { source: 'damageBegin1' },
                forced: true,
                content() {
                    trigger.num++;
                    player.removeSkill('bilibili_xueji2');
                },
            },
            //远古武将技能
            oldluanji: {
                audio: 'luanji',
                enable: 'chooseToUse',
                viewAs: { name: 'wanjian' },
                filterCard(card, player) {
                    if (!player.storage.oldluanji) return true;
                    return !player.storage.oldluanji.includes(get.suit(card));
                },
                selectCard: 2,
                check(card) {
                    var player = _status.event.player;
                    var targets = game.filterPlayer(function (current) {
                        return player.canUse('wanjian', current);
                    });
                    var num = 0;
                    for (var i = 0; i < targets.length; i++) {
                        var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
                        if (targets[i].hp == 1) {
                            eff *= 1.5;
                        }
                        num += eff;
                    }
                    if (!player.needsToDiscard(-1)) {
                        if (targets.length >= 7) {
                            if (num < 2) return 0;
                        }
                        else if (targets.length >= 5) {
                            if (num < 1.5) return 0;
                        }
                    }
                    return 6 - get.value(card);
                },
                ai: {
                    basic: {
                        order: 8.9
                    },
                },
                group: ['oldluanji_count', 'oldluanji_reset', 'oldluanji_respond'],
                subSkill: {
                    reset: {
                        charlotte: true,
                        trigger: { global: 'phaseBefore' },
                        filter(event, player) {
                            return player.storage.oldluanji;
                        },
                        direct: true,
                        firstDo: true,
                        content() {
                            delete player.storage.oldluanji;
                        },
                    },
                    count: {
                        charlotte: true,
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            return event.skill == 'oldluanji';
                        },
                        direct: true,
                        firstDo: true,
                        content() {
                            if (!player.storage.oldluanji) player.storage.oldluanji = [];
                            for (var i = 0; i < trigger.cards.length; i++) {
                                player.storage.oldluanji.add(get.suit(trigger.cards[i]));
                            }
                        },
                    },
                    respond: {
                        charlotte: true,
                        trigger: { global: 'respond' },
                        filter(event, player) {
                            return event.getParent(2).skill == 'oldluanji' && event.player.isDamaged();
                        },
                        direct: true,
                        content() {
                            trigger.player.draw();
                        },
                    },
                },
            },
            oldshibei: {
                audio: 'shibei',
                trigger: { player: 'damageEnd' },
                forced: true,
                content() {
                    'step 0'
                    player.judge(function (card) {
                        if (player.getHistory('damage', function (evt) {
                            return evt != trigger;
                        }).length) {
                            if (get.color(card) == 'black') return -1;
                        }
                        else if (get.color(card) == 'red') return 1;
                        return 0;
                    });
                    'step 1'
                    switch (get.sgn(result.judge)) {
                        case 1: player.recover(); break;
                        case -1: player.loseHp(); break;
                    }
                },
            },
            //张仲景
            old_jishi: {
                audio: 'jishi',
                inherit: 'jishi',
                group: 'old_jishi_draw',
                subSkill: {
                    draw: {
                        audio: 'jishi',
                        trigger: { global: ['gainAfter', 'cardsDiscardAfter'] },
                        forced: true,
                        filter(event, player) {
                            return event.fromRenku == true;
                        },
                        content() {
                            player.draw();
                        },
                    },
                },
            },
            //邓士载
            bilibili_zhenggong: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { global: 'phaseBeginStart' },
                filter(event, player) {
                    return event.player != player && !player.isTurnedOver();
                },
                check(event, player) {
                    if (game.roundNumber <= 1 && !game.hasPlayer(current => get.attitude(player, current) < 0)) return false;
                    return true;
                },
                content() {
                    const target = trigger.player, players = game.players.slice().concat(game.dead);
                    const next = player.insertPhase();
                    player.when('phaseAfter').filter(evt => evt == next).then(() => player.turnOver());
                    if (!trigger._finished) {
                        trigger.finish();
                        trigger.untrigger(true);
                        trigger._triggered = 5;
                        for (const current of players) {
                            current.getHistory().isSkipped = true;
                            current.getStat().isSkipped = true;
                        }
                        const evt = target.insertPhase();
                        delete evt.skill;
                        game.broadcastAll(player => {
                            player.classList.remove('glow_phase');
                            delete _status.currentPhase;
                        }, target);
                    }
                },
                ai: { expose: 0.2 },
            },
            bilibili_toudu: {
                audio: 'ext:活动武将/audio/skill:true',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return player.isTurnedOver();
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseCardTarget({
                        prompt: get.prompt2('bilibili_toudu'),
                        ai1(card) {
                            return 6 - get.value(card);
                        },
                        ai2(target) {
                            return get.effect(target, { name: 'sha' }, player);
                        },
                        filterTarget(card, player, target) {
                            return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                        },
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('bilibili_toudu');
                        player.discard(result.cards);
                        player.turnOver();
                        player.useCard({ name: 'sha' }, result.targets, false);
                    }
                }
            },
            shen_sunquan_skill: {
                init(player) {
                    player.storage.shen_sunquan_skill = [];
                },
                derivation: 'bolyuheng_faq',
                group: 'shen_sunquan_skill_mark',
                onremove: true,
                audio: 'yuheng',
                trigger: { player: ['phaseBegin', 'useCardAfter', 'phaseEnd'] },
                filter(event, player) {
                    if (!_status.currentPhase || _status.currentPhase != player) return false;
                    if (!player.hasMark('shen_sunquan_skill_count')) return false;
                    if (event.name == 'useCard') {
                        var list = [], bool = false;
                        player.getHistory('useCard', function (evt) {
                            if (!bool) {
                                list.push(evt.card);
                                if (evt.card == event.card) bool = true;
                            }
                        });
                        return list.length == player.countMark('shen_sunquan_skill_count');
                    }
                    return true;
                },
                forced: true,
                popup: false,
                async content(event, trigger, player) {
                    const num = player.countMark('shen_sunquan_skill_count');
                    const skills = (lib.config.extension_活动武将_ShenSunQuan ? lib.skill.bolyuheng.getList() : lib.skill.junkyuheng.derivation).filter(skill => !player.hasSkill(skill));
                    if (!skills.length && !player.storage.shen_sunquan_skill.length && trigger.name != 'phaseEnd') return;
                    const gainSkills = async function (player, num, skills) {
                        const gains = skills.randomGets(num);
                        player.storage.shen_sunquan_skill.addArray(gains);
                        player.addSkills(gains);
                    };
                    const loseSkills = async function (player, num, skills) {
                        const removes = player.storage.shen_sunquan_skill.randomGets(num);
                        player.storage.shen_sunquan_skill.removeArray(removes);
                        player.removeSkills(removes);
                    };
                    switch (event.triggername) {
                        case 'phaseBegin':
                            await gainSkills(player, num, skills);
                            break;
                        case 'useCardAfter':
                            await gainSkills(player, num, skills);
                            await loseSkills(player, num, skills);
                            break;
                        case 'phaseEnd':
                            await loseSkills(player, num, skills);
                            break;
                    }
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        trigger: { player: 'phaseBeginStart' },
                        direct: true,
                        content() {
                            var list = [player.hp, player.getDamagedHp(), game.roundNumber].sort(function (a, b) {
                                return a - b;
                            });
                            if (list[1] > 0) {
                                player.addMark('shen_sunquan_skill_count', list[1], false);
                                player.addTempSkill('shen_sunquan_skill_count');
                                game.log('本回合中位数为', '#g' + list[1]);
                            }
                        },
                    },
                    count: { onremove: true, charlotte: true },
                },
            },
            //保留所有设定的旧美羊羊
            oldhongyi: {
                inherit: 'hongyi',
                audio: 'hongyi',
                filter(event, player) {
                    return player.countCards('he') >= Math.min(2, game.dead.length);
                },
                filterCard: true,
                selectCard() {
                    return Math.min(2, game.dead.length);
                },
                position: 'he',
                check(card) {
                    var num = Math.min(2, game.dead.length);
                    if (!num) return 1;
                    if (num == 1) return 7 - get.value(card);
                    return 5 - get.value(card);
                },
            },
            //赵襄
            xinfanghun: {
                mod: {
                    aiValue(player, card, num) {
                        if (card.name != 'sha' && card.name != 'shan') return;
                        var geti = function () {
                            var cards = player.getCards('hs', card => card.name == 'sha' || card.name == 'shan');
                            return cards.includes(card) ? cards.indexOf(card) : cards.length;
                        };
                        return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                    },
                    aiUseful() {
                        return lib.skill.xinfanghun.mod.aiValue.apply(this, arguments);
                    },
                },
                locked: false,
                audio: 'fanghun',
                enable: ['chooseToUse', 'chooseToRespond'],
                position: 'hs',
                prompt: '将【杀】/【闪】当作【闪】/【杀】使用或打出，然后获得1枚“梅影”标记',
                viewAs(cards, player) {
                    if (cards.length) {
                        var name = false;
                        switch (get.name(cards[0], player)) {
                            case 'sha': name = 'shan'; break;
                            case 'shan': name = 'sha'; break;
                        }
                        if (name) return { name: name };
                    }
                    return null;
                },
                check: (card) => 1,
                filterCard(card, player, event) {
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = get.name(card, player);
                    if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                    if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                    return false;
                },
                filter(event, player) {
                    if (event.filterCard(get.autoViewAs({ name: 'sha' }, 'unsure'), player, event) && player.countCards('hs', 'shan')) return true;
                    if (event.filterCard(get.autoViewAs({ name: 'shan' }, 'unsure'), player, event) && player.countCards('hs', 'sha')) return true;
                    return false;
                },
                precontent() {
                    player.addTempSkill('xinfanghun_add');
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        var name;
                        switch (tag) {
                            case 'respondSha': name = 'shan'; break;
                            case 'respondShan': name = 'sha'; break;
                        }
                        if (!player.countCards('hs', name)) return false;
                    },
                    order(item, player) {
                        if (player && _status.event.type == 'phase') return get.order({ name: 'sha' }) + 0.3;
                        return 10;
                    },
                },
                subSkill: {
                    add: {
                        charlotte: true,
                        trigger: { player: ['useCardAfter', 'respondAfter'] },
                        filter(event, player) {
                            return event.skill == 'xinfanghun';
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.addMark('fanghun', 1);
                        },
                    },
                },
            },
            xinfuhan: {
                derivation: ['ollongdan', 'new_rewusheng', 'new_repaoxiao', 'retieji', 'xinliegong', 'xinkuanggu'],
                audio: 'fuhan',
                trigger: { player: 'phaseZhunbeiBegin' },
                skillAnimation: true,
                animationColor: 'fire',
                forced: true,
                unique: true,
                juexingji: true,
                filter(event, player) {
                    return player.countMark('fanghun') >= 4;
                },
                content() {
                    'step 0'
                    player.awakenSkill('xinfuhan');
                    player.removeMark('fanghun', player.countMark('fanghun'));
                    player.gainMaxHp();
                    player.recover();
                    'step 1'
                    player.changeSkills(['ollongdan'], ['xinfanghun']);
                    'step 2'
                    var list = [];
                    for (var i of lib.skill.xinfuhan.derivation) {
                        if (i != 'ollongdan' && !player.hasSkill(i)) list.push(i);
                    }
                    if (list.length) player.chooseControl(list).set('prompt', '选择获得一项技能');
                    else event.finish();
                    'step 3'
                    var list = ['ollongdan'];
                    if (result.control) {
                        player.addSkills(result.control);
                        list.push(result.control);
                    }
                    game.broadcastAll(function (list) {
                        game.expandSkills(list);
                        for (var i of list) {
                            var info = lib.skill[i];
                            if (!info) continue;
                            if (!info.audioname2) info.audioname2 = {};
                            info.audioname2.old_zhaoxiang = 'fanghun';
                        }
                    }, list);
                },
            },
            old_gengzhan: {
                getNum(name) {
                    var num = 0;
                    if (name == 'litong') num = 1;
                    else switch (game.getRarity(name)) {
                        case 'junk': num = 1; break;
                        case 'rare': num = 2; break;
                        case 'epic': num = 3; break;
                        case 'legend': num = 4; break;
                    }
                    return num;
                },
                getCharacter(list) {
                    var listx = [], num = 0;
                    for (var name of list) {
                        var numx = lib.skill.old_gengzhan.getNum(name);
                        if (numx > num) {
                            num = numx;
                            listx = [name];
                        }
                        else if (numx == num) listx.push(name);
                    }
                    return listx;
                },
            },
            old_jiebing: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return player != current && current.countCards('h');
                    });
                },
                filterTarget(card, player, target) {
                    return player != target && target.countCards('h');
                },
                content() {
                    'step 0'
                    if (!player.storage.old_kuzhan) player.storage.old_kuzhan = [0, 0];
                    if (player.storage.old_kuzhan[0] == 0) player.storage.old_kuzhan[0] = 1;
                    else if (!player.hasSkill('old_kuzhan2')) player.storage.old_kuzhan[1] = 1;
                    player.gainPlayerCard(target, 'h', Math.min(target.countCards('h'), 3), true);
                    'step 1'
                    player.addGaintag(result.cards, 'old_jiebing');
                    player.storage.old_jiebing = result.cards;
                    player.damage(1, 'nosource');
                    player.storage.old_jiebing2 = target;
                    player.addTempSkill('old_jiebing2', 'phaseUseAfter');
                    player.addTempSkill('old_kuzhan2');
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            if (player.hp <= 1) return -1;
                            return 1;
                        },
                        target(player, target) {
                            var att = get.attitude(player, target);
                            if (att < 0 && target.countCards('h') >= 3 && player.hp > 1) return att * (20 - target.countCards('h'));
                            return 0;
                        }
                    },
                },
            },
            old_jiebing2: {
                mod: {
                    aiOrder(player, card, num) {
                        if (player.storage.old_jiebing.includes(card)) return num + 10;
                    },
                },
                charlotte: true,
                onremove: true,
                trigger: { player: 'phaseUseEnd' },
                filter(event, player) {
                    return player.countCards('hes', function (card) {
                        return player.storage.old_jiebing.includes(card);
                    }) > 0;
                },
                direct: true,
                content() {
                    var target = player.storage.old_jiebing2, cards = player.getCards('hes', function (card) {
                        return player.storage.old_jiebing.includes(card);
                    });
                    player.removeGaintag('old_jiebing');
                    if (target.isIn()) target.gain(cards, player, 'giveAuto');
                },
                ai: { nokeep: true },
            },
            old_kuzhan: {
                derivation: 'old_tuidi',
                group: ['old_kuzhan_end', 'old_kuzhan_fail', 'old_kuzhan_mark'],
                dutySkill: true,
                init(player) {
                    if (!player.storage.old_kuzhan) player.storage.old_kuzhan = [0, 0];
                },
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    var num = 0;
                    player.getAllHistory('damage', function (evt) {
                        num += evt.num;
                    });
                    return num >= 5;
                },
                forced: true,
                skillAnimation: true,
                animationColor: 'thunder',
                content() {
                    'step 0'
                    player.awakenSkill('old_kuzhan');
                    player.popup('使命成功', 'wood');
                    game.log(player, '成功完成使命');
                    'step 1'
                    player.unmarkSkill('old_kuzhan_mark');
                    player.addSkills('old_tuidi');
                },
                subSkill: {
                    end: {
                        charlotte: true,
                        trigger: { player: 'phaseJieshu' },
                        filter(event, player) {
                            if (!player.hasSkill('old_kuzhan2')) player.storage.old_kuzhan = [0, 0];
                            return player.getHistory('sourceDamage').length > 0;
                        },
                        direct: true,
                        content() {
                            player.storage.old_kuzhan = [0, 0];
                        },
                    },
                    fail: {
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            var bool = true;
                            for (var i of player.storage.old_kuzhan) {
                                if (i == 0) bool = false;
                            }
                            return bool;
                        },
                        forced: true,
                        content() {
                            'step 0'
                            player.popup('使命失败', 'fire');
                            game.log(player, '使命失败');
                            player.awakenSkill('old_kuzhan');
                            'step 1'
                            player.unmarkSkill('old_kuzhan_mark');
                        },
                    },
                    mark: {
                        charlotte: true,
                        intro: { content: '本局游戏已受到#点伤害' },
                        trigger: { player: 'damage' },
                        firstDo: true,
                        direct: true,
                        content() {
                            var num = 0;
                            player.getAllHistory('damage', function (evt) {
                                num += evt.num;
                            });
                            player.storage.old_kuzhan_mark = num;
                            player.markSkill('old_kuzhan_mark');
                            player.syncStorage('old_kuzhan_mark');
                        },
                    },
                },
            },
            old_kuzhan2: { charlotte: true },
            old_tuidi: {
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.player.isIn() && event.player != player && lib.skill.drlt_jueyan.filter(null, event.player);
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                content() {
                    var list = [];
                    for (var i = 1; i <= 5; i++) {
                        if (trigger.player.hasEnabledSlot(i)) list.add(i);
                    }
                    if (list.includes('equip3') && list.includes('equip4')) list.push('equip3_4');
                    list.remove('equip3');
                    list.remove('equip4');
                    var num = list.randomGet();
                    if (num != '3_4') trigger.player.disableEquip(num);
                    else trigger.player.disableEquip(3, 4);
                },
            },
            old_qixi: {
                init() {
                    lib.card.guohe.storage = lib.card.guohe.content;
                },
                audio: 'sbqixi',
                enable: 'chooseToUse',
                filterCard(card) {
                    return get.color(card) == 'black';
                },
                position: 'hes',
                viewAs: { name: 'guohe' },
                viewAsFilter(player) {
                    if (!player.countCards('hes', { color: 'black' })) return false;
                },
                prompt: '将一张黑色牌当作【过河拆桥】使用',
                check(card) {
                    if (card.name == 'guohe') return 0;
                    return 6 - get.value(card);
                },
                group: 'old_qixi_guohe',
                contentx() {
                    if (target.countCards('hej')) target.discard(target.getCards('hej'));
                },
                subSkill: {
                    guohe: {
                        audio: 'sbqixi',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.card.name == 'guohe' && event.card.isCard && event.cards.length == 1;
                        },
                        prompt2: '强化【过河拆桥】的效果',
                        check(event, player) {
                            var target = event.targets[0];
                            return get.attitude(player, target) <= 0;
                        },
                        content() {
                            player.addTempSkill('old_qixi_reguohe', 'useCardAfter');
                        },
                    },
                    reguohe: {
                        charlotte: true,
                        init() {
                            lib.card.guohe.content = lib.skill.old_qixi.contentx;
                        },
                        onremove() {
                            lib.card.guohe.content = lib.card.guohe.storage;
                        },
                    },
                },
            },
            old_fenwei: {
                unique: true,
                mark: true,
                limited: true,
                audio: 'sbfenwei',
                trigger: { global: 'useCardToPlayered' },
                filter(event, player) {
                    if (event.getParent().triggeredTargets3.length > 1) return false;
                    if (get.type(event.card) != 'trick') return false;
                    if (get.info(event.card).multitarget) return false;
                    if (event.targets.length < 2) return false;
                    return true;
                },
                direct: true,
                skillAnimation: true,
                animationColor: 'wood',
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('old_fenwei'), '令' + get.translation(trigger.card) + '对任意名角色无效', [1, trigger.targets.length], function (card, player, target) {
                        return _status.event.targets.includes(target);
                    }).set('ai', function (target) {
                        var trigger = _status.event.getTrigger();
                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                    }).set('targets', trigger.targets);
                    'step 1'
                    if (result.bool) {
                        player.logSkill('old_fenwei', result.targets);
                        player.awakenSkill('old_fenwei');
                        trigger.getParent().excluded.addArray(result.targets);
                        event.num = Math.min(4, result.targets.length);
                    }
                    else event.finish();
                    'step 2'
                    var cards = [];
                    for (var i = 0; i < num; i++) {
                        var card = get.cardPile2(function (card) {
                            return !cards.includes(card) && card.name == 'guohe';
                        });
                        if (card) cards.push(card);
                        else break;
                    }
                    if (cards.length) player.gain(cards, 'gain2');
                },
            },
            //张琪瑛
            olddianhua: {
                audio: 'xinfu_dianhua',
                trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
                filter(event, player) {
                    for (var i = 0; i < lib.suit.length; i++) {
                        if (player.hasMark('xinfu_falu_' + lib.suit[i])) return true;
                    }
                    return false;
                },
                frequent: true,
                content() {
                    'step 0'
                    var num = 0;
                    for (var i = 0; i < lib.suit.length; i++) {
                        if (player.hasMark('xinfu_falu_' + lib.suit[i])) num++;
                    }
                    var cards = get.cards(num);
                    if (lib.config.extension_十周年UI_enable) {
                        var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length);
                        dialog.caption = '【点化】';
                        game.broadcast(function (player, cards, callback) {
                            if (!window.decadeUI) return;
                            var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length);
                            dialog.caption = '【点化】';
                            dialog.callback = callback;
                        }, player, cards, dialog.callback);
                        event.switchToAuto = function () {
                            var cards = dialog.cards[0].concat();
                            var cheats = [];
                            var next = player.getNext();
                            var friend = (event.triggername == 'phaseJieshuBegin' ? player.getNext() : player);
                            var judges = friend.node.judges.childNodes;
                            if (judges.length > 0) cheats = decadeUI.get.cheatJudgeCards(cards, judges, friend != null);
                            if (friend) cards = decadeUI.get.bestValueCards(cards, friend);
                            else {
                                cards.sort(function (a, b) {
                                    return get.value(a, next) - get.value(b, next);
                                });
                            }
                            cards = cheats.concat(cards);
                            var time = 500;
                            for (var i = 0; i < cards.length; i++) {
                                setTimeout(function (card, index, finished) {
                                    dialog.move(card, index, 0);
                                    if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);;
                                }, time, cards[i], i, i >= cards.length - 1);
                                time += 500;
                            }
                        }
                        if (event.isOnline()) {
                            event.player.send(function () {
                                if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
                            }, event.player);
                            event.player.wait();
                            decadeUI.game.wait();
                        }
                        else if (!event.isMine()) {
                            event.switchToAuto();
                        }
                        event.finish();
                        return;
                    }
                    game.cardsGotoOrdering(cards);
                    var next = player.chooseToMove('点化：将卡牌以任意顺序置于牌堆顶');
                    next.set('list', [['牌堆顶', cards]]);
                    next.set('processAI', function (list) {
                        var check = function (card) {
                            var player = _status.event.player;
                            var target = (_status.event.namex == 'phaseZhunbeiBegin' ? player : player.next);
                            var att = get.attitude(player, target);
                            var judge = player.getCards('j')[cards.length];
                            if (judge) return get.judge(judge)(card) * att;
                            return player.getUseValue(card) * att;
                        };
                        var cards = list[0][1].slice(0);
                        cards.sort(function (a, b) {
                            return check(b) * att - check(a) * att;
                        });
                        return [cards];
                    });
                    next.set('namex', event.triggername);
                    'step 1'
                    if (result.bool) {
                        var list = result.moved[0].slice(0);
                        while (list.length) {
                            ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
                        }
                        game.updateRoundNumber();
                        game.delayx();
                    }
                },
            },
            oldzhenyi: {
                audio: 'xinfu_zhenyi',
                inherit: 'xinfu_zhenyi',
                filter(event, player) {
                    if (!event.nature) return false;
                    return player.hasMark('xinfu_falu_diamond');
                },
                group: ['oldzhenyi_spade', 'oldzhenyi_club', 'oldzhenyi_heart'],
                subSkill: {
                    spade: {
                        trigger: { global: 'judge' },
                        filter(event, player) {
                            return player.hasMark('xinfu_falu_spade');
                        },
                        direct: true,
                        content() {
                            'step 0'
                            var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
                                get.translation(trigger.player.judging[0]) + '，是否弃置「紫薇♠」标记并修改判定结果？';
                            player.chooseControl('黑桃5', '红桃5', '取消').set('prompt', get.prompt('oldzhenyi')).set('prompt2', str).set('ai', function () {
                                var judging = _status.event.judging;
                                var cards = { name: judging.name, suit: 'spade', number: 5 };
                                var cardh = { name: judging.name, suit: 'heart', number: 5 };
                                var results = trigger.judge(cards) - trigger.judge(judging);
                                var resulth = trigger.judge(cardh) - trigger.judge(judging);
                                var attitude = get.attitude(player, trigger.player);
                                if (attitude == 0 || (resulth == 0 && results == 0)) return '取消';
                                if (attitude > 0) {
                                    if (results > 0) {
                                        if (resulth > results) return '红桃5';
                                        return '黑桃5';
                                    }
                                    else if (resulth > 0) return '红桃5';
                                    return '取消';
                                }
                                else {
                                    if (results < 0) {
                                        if (resulth < results) return '红桃5';
                                        return '黑桃5';
                                    }
                                    else if (resulth < 0) return '红桃5';
                                    return '取消';
                                }
                            }).set('judging', trigger.player.judging[0]);
                            'step 1'
                            if (['黑桃5', '红桃5'].includes(result.control)) {
                                player.removeMark('xinfu_falu_spade');
                                player.logSkill('oldzhenyi', trigger.player);
                                player.popup(result.control);
                                game.log(player, '将判定结果改为了', '#y' + result.control);
                                trigger.fixedResult = {
                                    suit: result.control == '黑桃5' ? 'spade' : 'heart',
                                    color: result.control == '黑桃5' ? 'black' : 'red',
                                    number: 5,
                                };
                            }
                        },
                        ai: {
                            rejudge: true,
                            tag: { rejudge: 1 },
                        },
                    },
                    club: {
                        audio: 'xinfu_zhenyi',
                        inherit: 'zhenyi_club',
                        enable: 'chooseToUse',
                        viewAsFilter(player) {
                            if (!player.isDying()) return false;
                            return player.hasMark('xinfu_falu_club') && player.countCards('hs');
                        },
                    },
                    heart: {
                        audio: 'xinfu_zhenyi',
                        trigger: { source: 'damageBegin1' },
                        filter(event, player) {
                            return player.hasMark('xinfu_falu_heart');
                        },
                        check(event, player) {
                            if (get.attitude(player, event.player) >= 0) return false;
                            if (event.player.hasSkillTag('filterDamage', null, {
                                player: player,
                                card: event.card,
                            })) return false;
                            return player.hasMark('xinfu_falu_spade') || get.color(ui.cardPile.firstChild) == 'black';
                        },
                        prompt2(event) {
                            return '弃置「玉清♥」标记，然后进行判定。若结果为黑色，则对' + get.translation(event.player) + '即将造成的伤害+1。';
                        },
                        logTarget: 'player',
                        content() {
                            'step 0'
                            player.removeMark('xinfu_falu_heart')
                            player.judge(function (card) {
                                if (get.color(card) == 'black') return 4;
                                return -1;
                            });
                            'step 1'
                            if (result.bool) trigger.num++;
                        },
                    },
                },
            },
            ljxc: {
                mod: {
                    maxHandcard(player, num) {
                        if (game.roundNumber <= 4) return num + game.roundNumber;
                    },
                },
                trigger: { source: 'damageBegin1' },
                charlotte: true,
                silent: true,
                forced: true,
                filter(event, player) {
                    if (game.roundNumber <= 4) return false;
                    var evt2 = event.getParent('phaseUse');
                    if (evt2.player != player) return false;
                    return player.getHistory('useCard', function (evt) {
                        return evt.card.name == 'sha' && evt.getParent('phaseUse') == evt2;
                    }).indexOf(event.getParent()) == 0;
                },
                content() {
                    trigger.num++;
                },
            },
            xthj: {
                trigger: { player: 'phaseUseEnd' },
                forced: true,
                filter(event, player) {
                    if (player.getHistory('useCard', function (evt) {
                        return evt.card && evt.card.name == 'sha' && evt.getParent('phaseUse') == event;
                    }).length > 0) return false;
                    if (player.getHistory('respond', function (evt) {
                        return evt.card && evt.card.name == 'sha' && evt.getParent('phaseUse') == event;
                    }).length > 0) return false;
                    return true;
                },
                content() {
                    player.addTempSkill('xthj_yingzi', { player: 'phaseDrawAfter' });
                    player.addMark('xthj_yingzi', 1, false);
                },
                subSkill: {
                    yingzi: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        marktext: '缓',
                        intro: { content: '下个摸牌阶段多摸#张牌' },
                        trigger: { player: 'phaseDrawBegin2' },
                        filter(event, player) {
                            return !event.numFixed && player.hasMark('xthj_yingzi');
                        },
                        forced: true,
                        content() {
                            trigger.num += player.countMark('xthj_yingzi');
                        },
                    },
                },
            },
            jsdy: {
                charlotte: true,
                mod: {
                    aiValue(player, card, num) {
                        if (card.name != 'sha' && card.name != 'shan') return;
                        var geti = function () {
                            var cards = player.getCards('hs', function (card) {
                                return card.name == 'sha' || card.name == 'shan';
                            });
                            if (cards.includes(card)) {
                                return cards.indexOf(card);
                            }
                            return cards.length;
                        };
                        return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                    },
                    aiUseful() {
                        return lib.skill.jsdy.mod.aiValue.apply(this, arguments);
                    },
                },
                locked: false,
                enable: ['chooseToUse', 'chooseToRespond'],
                position: 'hs',
                prompt: '将【杀】当作【闪】，或将【闪】当作的【杀】使用或打出，然后你的下个弃牌阶段的手牌上限-1',
                viewAs(cards, player) {
                    if (cards.length) {
                        var name = false;
                        switch (get.name(cards[0], player)) {
                            case 'sha': name = 'shan'; break;
                            case 'shan': name = 'sha'; break;
                        }
                        if (name) return { name: name };
                    }
                    return null;
                },
                onuse(links, player) {
                    player.addTempSkill('jsdy_less', { player: 'phaseDiscardAfter' });
                    player.addMark('jsdy_less', 1, false);
                    player.markSkill('jsdy_less');
                },
                onrespond(links, player) {
                    player.addTempSkill('jsdy_less', { player: 'phaseDiscardAfter' });
                    player.addMark('jsdy_less', 1, false);
                    player.markSkill('jsdy_less');
                },
                check(card) {
                    var player = _status.event.player;
                    if (_status.event.type == 'phase') {
                        var max = 0;
                        var name2;
                        var list = ['sha'];
                        var map = { sha: 'shan' };
                        for (var i = 0; i < list.length; i++) {
                            var name = list[i];
                            if (player.countCards('hs', map[name]) && player.getUseValue({ name: name }) > 0) {
                                var temp = get.order({ name: name });
                                if (temp > max) {
                                    max = temp;
                                    name2 = map[name];
                                }
                            }
                        }
                        if (name2 == get.name(card, player)) return 1;
                        return 0;
                    }
                    return 1;
                },
                filterCard(card, player, event) {
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = get.name(card, player);
                    if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                    if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                    return false;
                },
                filter(event, player) {
                    var filter = event.filterCard;
                    if (filter(get.autoViewAs({ name: 'sha' }, 'unsure'), player, event) && player.countCards('hs', 'shan')) return true;
                    if (filter(get.autoViewAs({ name: 'shan' }, 'unsure'), player, event) && player.countCards('hs', 'sha')) return true;
                    return false;
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        var name;
                        switch (tag) {
                            case 'respondSha': name = 'shan'; break;
                            case 'respondShan': name = 'sha'; break;
                        }
                        if (!player.countCards('hs', name)) return false;
                    },
                    order: 0.01,
                },
                subSkill: {
                    less: {
                        onremove: true,
                        charlotte: true,
                        market: '守',
                        intro: { content: '手牌上限-#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark('jsdy_less');
                            },
                        },
                    },
                },
            },
            hswc: {
                trigger: { global: 'damageBefore' },
                silent: true,
                firstDo: true,
                filter(event, player) {
                    return !lib.linked.includes(event.nature);
                },
                content() {
                    game.setNature(trigger, 'fire');
                },
            },
            lckf: {
                trigger: { player: ['useCardAfter', 'phaseDrawBegin'] },
                silent: true,
                filter(event, player) {
                    if (event.name == 'phaseDraw') return true;
                    return player.getHistory('sourceDamage', function (evt) {
                        return evt.card == event.card;
                    }).length > 0;
                },
                content() {
                    if (trigger.name == 'phaseDraw') trigger.num--;
                    else player.draw();
                },
            },
            zyzw: {
                trigger: { player: 'phaseBegin' },
                silent: true,
                content() {
                    'step 0'
                    player.chooseUseTarget({
                        name: 'juedou',
                        isCard: true,
                        storage: { nowuxie: true }
                    },
                        '选择一名角色，视为对其使用【决斗】', '或点【取消】失去1点体力');
                    'step 1'
                    if (!result.bool) player.loseHp();
                },
            },
            sssb: {
                mod: {
                    aiOrder(player, card, num) {
                        if (_status.sssb && _status.sssb % 10 == 9) {
                            if (['sha', 'tao', 'guohe', 'shunshou', 'tunliang', 'wuzhong', 'juedou', 'yuanjun'].includes(card.name)) return num + 15;
                        }
                    },
                },
                trigger: {
                    player: ['useCard1', 'useCardToTargeted'],
                },
                silent: true,
                filter(event, player, name) {
                    if (name == 'useCard1') return true;
                    if (!event.parent.sssb || event.targets.length != event.parent.triggeredTargets4.length) return false;
                    if (!event.targets || !event.targets.length || ['delay', 'equip'].includes(get.type(event.card))) return false;
                    return true;
                },
                content() {
                    if (event.triggername == 'useCard1') {
                        if (!_status.sssb) _status.sssb = 0;
                        _status.sssb++;
                        game.broadcastAll(function (num) {
                            if (ui.bolGuanDuInfo) ui.bolGuanDuInfo.innerHTML = '当前事件：十胜十败（' + num + '）';
                        }, _status.sssb);
                        if (_status.sssb % 10 == 0) trigger.sssb = true;
                    }
                    else {
                        trigger.getParent().targets = trigger.getParent().targets.concat(trigger.targets);
                        trigger.getParent().triggeredTargets4 = trigger.getParent().triggeredTargets4.concat(trigger.targets);
                    }
                },
                ai: {
                    result: {
                        player(card, player, target) {
                            if (_status.sssb && _status.sssb % 10 == 9 && card.name == 'tiesuo') return 'zerotarget';
                        },
                    },
                },
            },
            yssq: {
                charlotte: true,
                trigger: { source: 'damageBegin2' },
                filter(event, player) {
                    return event.player.hp > player.hp;
                },
                forced: true,
                silent: true,
                content() {
                    trigger.num++;
                },
            },
            scej: {
                charlotte: true,
                trigger: { player: 'phaseJieshu' },
                filter(event, player) {
                    return lib.skill.scej.filterx(event, player) || lib.skill.scej.filtery(event, player);
                },
                filterx(event, player) {
                    return player.isMaxHp();
                },
                filtery(event, player) {
                    return player.isMaxHandcard();
                },
                forced: true,
                silent: true,
                content() {
                    var bool1 = lib.skill.scej.filterx(trigger, player);
                    var bool2 = lib.skill.scej.filtery(trigger, player);
                    if (bool1) player.chooseToDiscard('he', true);
                    if (bool2) player.loseHp();
                },
            },
            lzlianpian: {
                global: 'lzlianpian_ai',
                audio: 'xinfu_lianpian',
                trigger: { global: 'useCardToPlayered' },
                filter(event, player) {
                    if (!lib.skill.lztunjiang.filterx(event, player)) return false;
                    if (!event.targets || !event.targets.length || !event.isFirstTarget || !event.isPhaseUsing(event.player)) return false;
                    var evt = event.player.getLastUsed(1);
                    if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing(event.player)) return false;
                    for (var i = 0; i < event.targets.length; i++) {
                        if (evt.targets.includes(event.targets[i])) return true;
                    }
                    return false;
                },
                frequent: true,
                logTarget: 'player',
                content() {
                    trigger.player.draw();
                    if (trigger.player != player) player.addExpose(0.2);
                },
                subSkill: {
                    ai: {
                        mod: {
                            aiOrder(player, card, num) {
                                if (player != _status.currentPhase || player.getHistory('useCard').length < 1 || !game.hasPlayer(function (current) {
                                    return (get.realAttitude || get.attitude)(current, player) > 0 && current.hasSkill('lzlianpian');
                                })) return;
                                if (player.isPhaseUsing()) {
                                    var evt = player.getLastUsed();
                                    if (evt?.targets && evt.targets.length && evt.isPhaseUsing(player) && game.hasPlayer(function (current) {
                                        return evt.targets.includes(current) && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                    })) return num + 10;
                                }
                            },
                        },
                    },
                },
                //这么臭的苏飞有存在的必要吗
                ai: { threaten: 4.1145141919810 },
            },
            lztunjiang: {
                audio: 'sptunjiang',
                trigger: { global: 'phaseJieshuBegin' },
                filter(event, player) {
                    return event.player.isIn() && !event.player.getStat('damage') && lib.skill.lztunjiang.filterx(event, player);
                },
                //判定敌友全靠你了
                filterx(event, player) {
                    if (get.mode() == 'identity') return get.attitude(player, event.player) > 0;
                    return event.player.isFriendOf(player);
                },
                filtery(event, player) {
                    if (get.mode() == 'identity') return get.attitude(player, event.player) < 0;
                    return event.player.isEnemyOf(player);
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(function (card, player, target) {
                        return target == player || target == _status.event.source;
                    }, '屯江：请选择一个目标令其摸两张牌').set('ai', function (target) {
                        return 114514 - target.countCards();
                    }).set('source', trigger.player);
                    'step 1'
                    if (result.targets.length) {
                        player.logSkill('lztunjiang', result.targets[0]);
                        result.targets[0].draw(2);
                    }
                },
            },
            lzdianhu: {
                audio: 'xinfu_dianhu',
                inherit: 'xinfu_dianhu',
                filter(event, player) {
                    return game.countPlayer() > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                },
                content() {
                    'step 0'
                    player.chooseTarget('请选择【点虎】的目标', lib.translate.lzdianhu_info, true, function (card, player, target) {
                        return target != player && !target.hasSkill('lzdianhu2');
                    }).set('ai', function (target) {
                        var att = get.attitude(_status.event.player, target);
                        if (att < 0) return -att + 3;
                        return Math.random();
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target, 'green');
                        game.log(target, '成为了', '#g【点虎】', '的目标');
                        target.storage.lzdianhu2 = player;
                        target.addSkill('lzdianhu2');
                    }
                },
            },
            lzdianhu2: {
                mark: 'character',
                intro: { content: '当你受到来自$及其友方角色的1点伤害后，伤害来源摸一张牌' },
                audio: 'xinfu_dianhu',
                trigger: { player: 'damageAfter' },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.storage.lzdianhu2 && player.storage.lzdianhu2.isIn()) {
                        if (get.mode() == 'identity') return get.attitude(player.storage.lzdianhu2, event.source) > 0;
                        return event.source && event.source.isFriendOf(player.storage.lzdianhu2);
                    };
                },
                content() {
                    var target = player.storage.lzdianhu2;
                    target.logSkill('lzdianhu', trigger.source);
                    trigger.source.draw(trigger.num);
                },
                onremove: true,
            },
            lzxingzhao: {
                derivation: 'xunxun',
                group: ['lzxingzhao_mark', 'lzxingzhao_xunxun', 'lzxingzhao_1', 'lzxingzhao_2'],
                mark: true,
                intro: {
                    content(storage, player) {
                        var list = game.filterPlayer2(function (target) {
                            return target.isFriendOf(player);
                        });
                        var lznum = list.length;
                        var num = 0;
                        for (var target of list) {
                            target.getAllHistory('sourceDamage', function (evt) {
                                num += evt.num;
                            });
                        }
                        var str = '<li>当前总共造成了';
                        str += num;
                        str += '点伤害。';
                        if (num < lznum) {
                            str += '<li>距离“所有友方角色视为拥有技能〖恂恂〗”还需要造成';
                            str += lznum - num;
                            str += '点伤害。';
                        }
                        if (num >= lznum) {
                            str += '<br><li>所有友方角色视为拥有技能〖恂恂〗。';
                        }
                        if (num < lznum * 2) {
                            str += '<li>距离“所有友方角色使用装备牌时摸一张牌”还需要造成';
                            str += lznum * 2 - num;
                            str += '点伤害。';
                        }
                        if (num >= lznum * 2) {
                            str += '<br><li>所有友方角色使用装备牌时摸一张牌。';
                        }
                        if (num < lznum * 3) {
                            str += '<li>距离“所有友方角色始终跳过弃牌阶段”还需要造成';
                            str += lznum * 3 - num;
                            str += '点伤害。';
                        }
                        if (num >= lznum * 3) {
                            str += '<br><li>所有友方角色始终跳过弃牌阶段。';
                        }
                        if (num < lznum * 6) {
                            str += '<li>距离“新的一轮开始时，你所属的阵营直接获得游戏胜利”还需要造成';
                            str += lznum * 6 - num;
                            str += '点伤害。';
                        }
                        if (num >= lznum * 6) {
                            str += '<br><li>新的一轮开始时，你所属的阵营直接获得游戏胜利。';
                        }
                        return str;
                    },
                },
                audio: 'xinfu_xingzhao',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    var list = game.filterPlayer2(function (target) {
                        return target.isFriendOf(player);
                    });
                    var lznum = list.length;
                    var num = 0;
                    for (var target of list) {
                        target.getAllHistory('sourceDamage', function (evt) {
                            num += evt.num;
                        });
                    }
                    if (get.type(event.card) != 'equip') return false;
                    return num >= lznum * 2 && player.getFriends(true).includes(event.player);
                },
                forced: true,
                logTarget: 'player',
                content() {
                    trigger.player.draw();
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        trigger: { global: 'damage' },
                        filter(event, player) {
                            var list = game.filterPlayer2(function (target) {
                                return target.isFriendOf(player);
                            });
                            var num = 0;
                            for (var target of list) {
                                target.getAllHistory('sourceDamage', function (evt) {
                                    num += evt.num;
                                });
                            }
                            return num > player.countMark('lzxingzhao');
                        },
                        priority: 114 + 514 - 1919 + 810,
                        direct: true,
                        content() {
                            var list = game.filterPlayer2(function (target) {
                                return target.isFriendOf(player);
                            });
                            var num = 0;
                            for (var target of list) {
                                target.getAllHistory('sourceDamage', function (evt) {
                                    num += evt.num;
                                });
                            }
                            player.addMark('lzxingzhao', num - player.countMark('lzxingzhao'), false);
                        },
                    },
                    xunxun: {
                        trigger: { global: 'phaseDrawBegin1' },
                        filter(event, player) {
                            var list = game.filterPlayer2(function (target) {
                                return target.isFriendOf(player);
                            });
                            var lznum = list.length;
                            var num = 0;
                            for (var target of list) {
                                target.getAllHistory('sourceDamage', function (evt) {
                                    num += evt.num;
                                });
                            }
                            return num >= lznum && player.getFriends(true).includes(event.player);
                        },
                        direct: true,
                        content() {
                            'step 0'
                            trigger.player.chooseBool(get.prompt2('xunxun'));
                            'step 1'
                            if (result.bool) {
                                trigger.player.logSkill('lzxingzhao');
                                var next = game.createEvent('lzxingzhao_xunxun');
                                next.player = trigger.player;
                                next.setContent(lib.skill.xunxun.content);
                            }
                            /*
                            'step 1'
                            if(result.bool){
                            trigger.player.logSkill('lzxingzhao');
                            event.cards=get.cards(4);
                            trigger.player.chooseCardButton(event.cards,2,'选择两张牌置于牌堆顶',true).set('ai',ai.get.buttonValue);
                            }
                            else event.finish();
                            'step 2'
                            if(result.bool){
                            var choice=[];
                            for(var i=0;i<result.links.length;i++){
                            choice.push(result.links[i]);
                            cards.remove(result.links[i]);
                            }
                            for(var i=0;i<cards.length;i++){
                            ui.cardPile.appendChild(cards[i]);
                            }
                            while(choice.length){
                            ui.cardPile.insertBefore(choice.pop(),ui.cardPile.firstChild);
                            }
                            }
                            */
                        },
                    },
                    '1': {
                        trigger: { global: 'roundStart' },
                        audio: 'xinfu_xingzhao2',
                        filter(event, player) {
                            var list = game.filterPlayer2(function (target) {
                                return target.isFriendOf(player);
                            });
                            var lznum = list.length;
                            var num = 0;
                            for (var target of list) {
                                target.getAllHistory('sourceDamage', function (evt) {
                                    num += evt.num;
                                });
                            }
                            return num >= lznum * 6;
                        },
                        forced: true,
                        skillAnimation: true,
                        animationColor: 'water',
                        content() {
                            var bool = false;
                            if (player == game.me) bool = true;
                            else switch (get.mode()) {
                                case 'identity': {
                                    game.showIdentity();
                                    var id1 = player.identity;
                                    var id2 = game.me.identity;
                                    if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                        if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                        break;
                                    }
                                    else if (id1 == 'fan') {
                                        if (id2 == 'fan') bool = true;
                                        break;
                                    }
                                    break;
                                }
                                case 'guozhan': {
                                    if (game.me.isFriendOf(player)) bool = true;
                                    break;
                                }
                                case 'versus': {
                                    if (player.side == game.me.side) bool = true;
                                    break;
                                }
                                case 'boss': {
                                    if (player.side == game.me.side) bool = true;
                                    break;
                                }
                                default: { }
                            }
                            game.over(bool);
                        },
                    },
                    '2': {
                        audio: 'xinfu_xingzhao2',
                        trigger: { global: 'phaseDiscardBefore' },
                        filter(event, player) {
                            var list = game.filterPlayer2(function (target) {
                                return target.isFriendOf(player);
                            });
                            var lznum = list.length;
                            var num = 0;
                            for (var target of list) {
                                target.getAllHistory('sourceDamage', function (evt) {
                                    num += evt.num;
                                });
                            }
                            return num >= lznum * 3 && player.getFriends(true).includes(event.player);
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            trigger.cancel();
                            game.log(trigger.player, '跳过了弃牌阶段');
                        },
                    },
                },
            },
            boss_tz: {
                charlotte: true,
                subSkill: {
                    sha: {
                        charlotte: true,
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    draw: {
                        charlotte: true,
                        trigger: { player: 'phaseDrawBegin' },
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        direct: true,
                        content() {
                            trigger.num++;
                        },
                    },
                    chongsheng: {
                        charlotte: true,
                        unique: true,
                        enable: 'chooseToUse',
                        mark: true,
                        limited: true,
                        skillAnimation: true,
                        animationColor: 'orange',
                        filter(event, player) {
                            if (event.type == 'dying') {
                                if (player != event.dying) return false;
                                return true;
                            }
                            return false;
                        },
                        content() {
                            'step 0'
                            player.awakenSkill('boss_tz_chongsheng');
                            player.discard(player.getCards('j'));
                            'step 1'
                            player.link(false);
                            player.turnOver(false);
                            'step 2'
                            player.draw(5);
                            if (player.hp < 5) player.recover(5 - player.hp);
                        },
                        ai: {
                            order: 10,
                            save: true,
                            skillTagFilter(player, arg, target) {
                                if (player != target) return false;
                            },
                            result: { player: 1 },
                        },
                    },
                },
            },
            boss_yz: {
                charlotte: true,
                subSkill: {
                    equip: {
                        charlotte: true,
                        trigger: { global: 'gameDrawAfter' },
                        direct: true,
                        content() {
                            var card = get.cardPile(function (card) {
                                return get.type(card) == 'equip';
                            });
                            if (card) player.chooseUseTarget(card, true, 'nopopup', 'noanimate');
                        },
                    },
                    sha: {
                        charlotte: true,
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    shax: {
                        charlotte: true,
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    draw: {
                        charlotte: true,
                        trigger: { player: 'phaseDrawBegin' },
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        direct: true,
                        content() {
                            trigger.num++;
                        },
                    },
                    kunshou: {
                        charlotte: true,
                        unique: true,
                        trigger: { player: 'dying' },
                        juexingji: true,
                        skillAnimation: true,
                        animationColor: 'fire',
                        forced: true,
                        content() {
                            'step 0'
                            player.awakenSkill('boss_yz_kunshou');
                            'step 1'
                            if (player.hp < 5) player.recover(5 - player.hp);
                            player.drawTo(5);
                            'step 2'
                            player.addSkills('benghuai');
                        },
                    },
                },
            },
            wzdanji: {
                derivation: 'mashu',
                audio: 'danji',
                skillAnimation: true,
                animationColor: 'water',
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                unique: true,
                juexingji: true,
                filter(event, player) {
                    var zhu = get.zhu(player);
                    if (zhu?.isZhu) {
                        if (lib.translate[zhu.name].indexOf('曹操') != -1 || (zhu.name2 && lib.translate[zhu.name2].indexOf('曹操') != -1)) {
                            if (player.countCards('h') > player.hp) return true;
                        }
                    }
                    return false;
                },
                content() {
                    'step 0'
                    player.awakenSkill('wzdanji');
                    'step 1'
                    player.loseMaxHp();
                    'step 2'
                    player.addSkills('mashu');
                },
            },
            reyingzi_sunce: { audio: 2 },
            yinghun_sunce: { audio: 2 },
            //荀淑
            old_shenjun: {
                audio: 'clanshenjun',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    return (event.card.name == 'sha' || get.type(event.card) == 'trick') && player.countCards('h', event.card.name) > 0;
                },
                forced: true,
                content() {
                    var cards = player.getCards('h', trigger.card.name);
                    player.showCards(cards, get.translation(player) + '发动了【神君】');
                    player.addGaintag(cards, 'old_shenjun');
                    for (var name of lib.phaseName) {
                        var evt = _status.event.getParent(name);
                        if (!evt || evt.name != name) continue;
                        player.addTempSkill('old_shenjun_viewAs', name + 'After');
                        break;
                    }
                },
                mark: true,
                marktext: '君',
                intro: {
                    markcount(storage, player) {
                        return player.countCards('h', card => card.hasGaintag('old_shenjun'));
                    },
                    mark(dialog, content, player) {
                        var cards = player.getCards('h', card => card.hasGaintag('old_shenjun'));
                        if (cards.length) dialog.addAuto(cards);
                        else return '无展示牌';
                    },
                },
                subSkill: {
                    viewAs: {
                        charlotte: true,
                        audio: 'clanshenjun',
                        trigger: { global: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'] },
                        filter(event, player) {
                            return player.countCards('h', card => card.hasGaintag('old_shenjun')) > 0;
                        },
                        forced: true,
                        content() {
                            'step 0'
                            var cards = player.getCards('h', card => card.hasGaintag('old_shenjun'));
                            var list = [], names = [];
                            for (var card of cards) {
                                var name = get.name(card), nature = get.nature(card);
                                var namex = name + (nature ? nature : '');
                                if (names.includes(namex)) continue;
                                if (nature) list.push([get.type(card), '', name, nature]);
                                else list.push([get.type(card), '', name]);
                                names.push(namex);
                            }
                            list.sort((a, b) => {
                                return 100 * (lib.inpile.indexOf(a[2]) - lib.inpile.indexOf(b[2])) + lib.inpile_nature.indexOf(a[3]) - lib.inpile_nature.indexOf(b[3]);
                            })
                            player.chooseButton(['###' + '神君：请选择一项' + '###' + '选项一：将' + get.cnNumber(cards.length) + '张牌当下列一张牌使用<br>选项二：失去1点体力', [list, 'vcard']]).set('ai', function (button) {
                                var player = _status.event.player;
                                if (player.hasSkill('old_balong')) {
                                    var filter = function (player) {
                                        if (!player.countCards('h')) return false;
                                        if (player.countCards('h') >= 8) return false;
                                        var typeList = ['basic', 'trick', 'equip'];
                                        var list = [];
                                        for (var i = 0; i < typeList.length; i++) {
                                            list.push(player.countCards('h', function (card) {
                                                return get.type2(card) == typeList[i];
                                            }));
                                        }
                                        return list[1] > list[0] && list[1] > list[2];
                                    };
                                    if (filter(player) && player.countCards('h') <= 5 && player.hp + player.countCards('hs', { name: ['jiu', 'tao'] }) > 0) return -1;
                                }
                                return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                            });
                            'step 1'
                            if (result.bool) {
                                var name = result.links[0][2], nature = result.links[0][3];
                                var cards = player.getCards('h', card => card.hasGaintag('old_shenjun'));
                                game.broadcastAll(function (num, card) {
                                    lib.skill.old_shenjun_backup.selectCard = num;
                                    lib.skill.old_shenjun_backup.viewAs = card;
                                }, cards.length, { name: name, nature: nature });
                                var next = player.chooseToUse();
                                next.set('openskilldialog', '将' + get.cnNumber(cards.length) + '张牌当作' + (nature ? get.translation(nature) : '') + '【' + get.translation(name) + '】使用');
                                next.set('norestore', true);
                                next.set('addCount', false);
                                next.set('_backupevent', 'old_shenjun_backup');
                                next.set('custom', {
                                    add: {},
                                    replace: { window() { } }
                                });
                                next.backup('old_shenjun_backup');
                            }
                            else player.loseHp();
                        },
                    },
                    backup: {
                        filterCard(card) {
                            return get.itemtype(card) == 'card';
                        },
                        position: 'hes',
                        filterTarget: lib.filter.filterTarget,
                        check: (card) => 6 - get.value(card),
                        log: false,
                        precontent() {
                            delete event.result.skill;
                        },
                    },
                },
            },
            old_balong: {
                audio: 'clanbalong',
                inherit: 'clanbalong',
                content() {
                    player.showCards(player.getCards('h'), get.translation(player) + '发动了【八龙】');
                    player.drawTo(8);
                },
            },
            //荀谌
            old_sankuang: {
                init(player) {
                    player.storage.old_sankuang = [1, 1, 1];
                },
                getNum(player, source) {
                    var storage = source.storage.old_sankuang;
                    var list = [3];
                    var num1 = player.countCards('ej');
                    if (storage[0]) list.push(num1);
                    var num2 = player.getDamagedHp();
                    if (storage[1]) list.push(num2);
                    var num3 = Math.abs(player.hp - player.countCards('h'));
                    if (storage[2]) list.push(num3);
                    list.sort((a, b) => a - b);
                    return list.length > 1 ? list[0] : 0;
                },
                findTarget(player) {
                    var history = player.getAllHistory('useSkill', function (evt) {
                        return evt.skill == 'old_sankuang';
                    });
                    if (!history.length) return false;
                    return history[0].targets[0];
                },
                audio: 'clansankuang',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    return get.info('clansankuang').filter(event, player);
                },
                direct: true,
                locked: true,
                content() {
                    'step 0'
                    delete _status.sankuangCheck;
                    player.chooseTarget('请选择【三恇】的目标', lib.dynamicTranslate.old_sankuang(player), lib.filter.notMe, true).set('ai', function (target) {
                        var player = _status.event.player;
                        var num = lib.skill.old_sankuang.getNum(target, player);
                        if (!lib.skill.old_sankuang.findTarget(player) && game.hasPlayer(function (current) {
                            return player.getFriends().includes(current);
                        })) return get.attitude(player, target) * ((player.getFriends().includes(target) && target.countCards('h')) ? 100 : 1);
                        else {
                            if (!game.hasPlayer(function (current) {
                                return get.attitude(player, current) < 0 && !lib.skill.old_sankuang.getNum(current, player);
                            }) && lib.skill.old_sankuang.findTarget(player).countCards('h') && target == lib.skill.old_sankuang.findTarget(player)) {
                                _status.sankuangCheck = target;
                                return 100;
                            }
                            if (num > 0) return get.effect(target, { name: 'guohe_copy2' }, player, player) * num;
                            return get.attitude(player, target);
                        }
                    }).set('selectTarget', function () {
                        var player = _status.event.player;
                        for (var target of game.filterPlayer()) {
                            if (target == player) continue;
                            target.prompt('三恇' + lib.skill.old_sankuang.getNum(target, player));
                        }
                        return 1;
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill('old_sankuang', target);
                        player.chooseControl().set('choiceList', [
                            '令' + get.translation(target) + '获得' + get.translation(trigger.cards),
                            '令' + get.translation(target) + '交给你至少' + get.cnNumber(lib.skill.old_sankuang.getNum(target, player)) + '张牌'
                        ]).set('ai', function () {
                            if (_status.sankuangCheck && _status.sankuangCheck == target) return 1;
                            if (get.attitude(player, target) > 0 && !['delay', 'equip'].includes(_status.event.type)) return 0;
                            return 1;
                        }).set('type', get.type(trigger.card));
                    }
                    else event.finish();
                    'step 2'
                    if (result.index == 0 && trigger.cards.length) {
                        target.gain(trigger.cards, 'gain2');
                        event.finish();
                        return;
                    }
                    if (result.index == 1 && target.countCards('he')) target.chooseCard('he', [lib.skill.old_sankuang.getNum(target, player), Infinity], true, '交给' + get.translation(player) + '至少' + get.cnNumber(lib.skill.old_sankuang.getNum(target, player)) + '张牌').set('ai', function (card) {
                        if (_status.event.att) return 1;
                        return -get.value(card);
                    }).set('att', get.attitude(target, player) > 0 && lib.skill.old_sankuang.findTarget(player) == target);
                    'step 3'
                    if (result.cards.length) player.gain(result.cards, target, 'giveAuto');
                },
            },
            old_beishi: {
                audio: 'clanbeishi',
                trigger: { global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'] },
                filter(event, player) {
                    var list = [player];
                    if (lib.skill.old_sankuang.findTarget(player)) list.push(lib.skill.old_sankuang.findTarget(player));
                    return game.hasPlayer(function (current) {
                        if (!list.includes(current)) return false;
                        var evt = event.getl(current);
                        return evt?.hs?.length && current.countCards('h') == 0;
                    });
                },
                logTarget(event, player) {
                    var list = [player];
                    if (lib.skill.old_sankuang.findTarget(player)) list.push(lib.skill.old_sankuang.findTarget(player));
                    return game.filterPlayer(function (current) {
                        if (!list.includes(current)) return false;
                        var evt = event.getl(current);
                        return evt?.hs?.length && current.countCards('h') == 0;
                    }).sortBySeat();
                },
                forced: true,
                content() {
                    'step 0'
                    var storage = player.storage.old_sankuang;
                    var str1 = '', str2 = '', str3 = '';
                    for (var i = 0; i < game.players.length; i++) {
                        var target = game.players.sortBySeat(player)[i];
                        if (target == player) continue;
                        //str1 此角色场上牌数
                        str1 += get.translation(target);
                        str1 += target.countCards('ej');
                        if (i < game.players.length - 1) str1 += '、';
                        str2 += get.translation(target);
                        //str2 此角色已损失体力值
                        str2 += target.getDamagedHp();
                        if (i < game.players.length - 1) str2 += '、';
                        //str3 此角色体力值与手牌数之差
                        str3 += get.translation(target);
                        str3 += Math.abs(target.hp - target.countCards('h'));
                        if (i < game.players.length - 1) str3 += '、';
                    }
                    var choiceList = [
                        '场上牌数<br>' + str1 + '',
                        '已损失体力值<br>' + str2 + '',
                        '体力值与手牌数之差<br>' + str3 + '',
                    ];
                    for (var i = 0; i < choiceList.length; i++) {
                        if (!storage[i]) choiceList[i] = '<span style="opacity:0.5">' + choiceList[i] + '</span>';
                    }
                    player.chooseControl().set('prompt', '卑势：请选择【三恇】需要删除或复原的选项').set('choiceList', choiceList).set('ai', function () {
                        var player = _status.event.player, storage = player.storage.old_sankuang;
                        if (storage[1] == 0) return 1;
                        return [0, 2].randomGet();
                    });
                    'step 1'
                    var storage = player.storage.old_sankuang;
                    game.log(player, (storage[result.index] ? '删除' : '复原') + '了', '#g【三恇】', '的第' + get.cnNumber(result.index + 1, true) + '项');
                    if (storage[result.index]) storage[result.index]--;
                    else storage[result.index]++;
                    'step 2'
                    player.recover();
                },
                ai: { combo: 'old_sankuang' },
            },
            //荀采
            old_lieshi: {
                hiddenCard(player, name) {
                    return lib.inpile.filter(name => get.type(name) == 'delay' && !game.hasPlayer(target => {
                        return target.hasJudge(name);
                    }) && player.countCards('ej', card => game.hasPlayer(target => {
                        return player.canUse(get.autoViewAs({ name: name }, [card]), target);
                    }))).includes(name);
                },
                audio: 'clanlieshi',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.old_lieshi) return false;
                    return lib.inpile.some(name => lib.skill.old_lieshi.hiddenCard(player, name));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = lib.inpile.filter(name => lib.skill.old_lieshi.hiddenCard(player, name));
                        return ui.create.dialog('烈誓', [list, 'vcard']);
                    },
                    filter(button, player) {
                        const evt = _status.event.getParent();
                        return evt.filterCard({ name: button.link[2] }, player, evt);
                    },
                    check(button) {
                        return _status.event.player.getUseValue({ name: button.link[2] });
                    },
                    backup(links, player) {
                        return {
                            viewAs: { name: links[0][2] },
                            filterCard: () => false,
                            selectCard: -1,
                            *precontent(event, map) {
                                const player = map.player;
                                const result = yield player.choosePlayerCard(player, 'ej', '请选择' + get.translation(event.result.card) + '转化的卡牌').set('ai', button => {
                                    return get.value(button.link) * (get.position(button.link) == 'e' ? -1 : 1);
                                });
                                if (result.cards) {
                                    player.logSkill('old_lieshi');
                                    player.addTempSkill('old_lieshi_end');
                                    event.result.cards = result.cards;
                                }
                                else {
                                    const evt = event.getParent();
                                    evt.old_lieshi = true;
                                    evt.goto(0);
                                    delete evt.openskilldialog;
                                    return;
                                }
                            },
                        }
                    },
                    prompt(links, player) {
                        return '请选择' + get.translation(links[0][2]) + '的目标';
                    },
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
                subSkill: {
                    end: {
                        charlotte: true,
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            return event.skill == 'old_lieshi_backup';
                        },
                        direct: true,
                        *content(event, map) {
                            const player = map.player, trigger = map.trigger, target = trigger.targets[0];
                            const bool = player.storage.old_huanyin;
                            player.line(target);
                            let choiceList = ['受到1点火属性伤害', '弃置所有【闪】', '弃置所有【杀】'], choice = [];
                            if (bool) {
                                choiceList.reverse();
                                if (player.countCards('h', { name: 'sha' })) choice.push('选项一');
                                else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '（无法执行）</span>';
                                if (player.countCards('h', { name: 'shan' })) choice.push('选项二');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '（无法执行）</span>';
                                choice.push('选项三');
                            }
                            else {
                                choice.push('选项一');
                                if (player.countCards('h', { name: 'shan' })) choice.push('选项二');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '（无法执行）</span>';
                                if (player.countCards('h', { name: 'sha' })) choice.push('选项三');
                                else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '（无法执行）</span>';
                            }
                            if (choice.length) {
                                const result = yield player.chooseControl(choice).set('choiceList', choiceList).set('ai', () => {
                                    if (get.event('controls').length == 1) return get.event('controls')[0];
                                    var choice = get.event('choice'), player = get.event('player');
                                    return choice[choice.length - player.storage.old_huanyin ? 2 : 1];
                                }).set('prompt', '烈誓：请选择一项执行，然后' + get.translation(target) + '执行后一项').set('choice', choice);
                                const index = ['选项一', '选项二', '选项三'].indexOf(result.control);
                                const list = [[player, index], [target, index + 1]];
                                for (const CT of list) {
                                    const current = CT[0], num = CT[1];
                                    if (num <= 2) {
                                        switch (num) {
                                            case 0:
                                                if (bool) current.discard(current.getCards('h', { name: 'sha' }));
                                                else current.damage(1, 'fire');
                                                break;
                                            case 1:
                                                current.discard(current.getCards('h', { name: 'shan' }));
                                                break;
                                            case 2:
                                                if (bool) current.damage(1, 'fire');
                                                else current.discard(current.getCards('h', { name: 'sha' }));
                                                break;
                                        }
                                    }
                                }
                            }
                            else {
                                player.chat('无法执行？！');
                                game.log('但', player, '无法执行其中的任何选项！');
                            }
                        },
                    },
                },
            },
            old_dianzhan: {
                audio: 'clandianzhan',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    if (!lib.suit.includes(get.suit(event.card))) return false;
                    const suit = get.suit(event.card);
                    return player.getRoundHistory('useCard', evt => get.suit(evt.card) == suit).indexOf(event) == 0;
                },
                forced: true,
                filter_x(event, player) {
                    if (!get.suit(event.card)) return false;
                    return player.countCards('h', { suit: get.suit(event.card) });
                },
                content_x() {
                    'step 0'
                    player.chooseCard('h', '请重铸一张' + get.translation(get.suit(card)) + '牌', true, function (cardx, player) {
                        return get.suit(cardx) == _status.event.suit && player.canRecast(cardx);
                    }).set('suit', get.suit(card));
                    'step 1'
                    if (result.bool) player.recast(result.cards);
                },
                content() {
                    'step 0'
                    if (player.storage.old_huanyin) player.draw();
                    else if (lib.skill.old_dianzhan.filter_x(trigger, player)) {
                        var next = game.createEvent('old_dianzhan_x');
                        next.player = player;
                        next.card = trigger.card;
                        next.setContent(lib.skill.old_dianzhan.content_x);
                    }
                    else event.finish();
                    'step 1'
                    game.delayx();
                    'step 2'
                    if (trigger.targets && trigger.targets.length == 1 && !trigger.targets[0].isLinked()) {
                        player.line(trigger.targets[0]);
                        trigger.targets[0].link(true);
                    }
                    else event.finish();
                    'step 3'
                    game.delayx();
                    'step 4'
                    if (!player.storage.old_huanyin) player.draw();
                    else if (lib.skill.old_dianzhan.filter_x(trigger, player)) {
                        var next = game.createEvent('old_dianzhan_x');
                        next.player = player;
                        next.card = trigger.card;
                        next.setContent(lib.skill.old_dianzhan.content_x);
                    }
                },
            },
            old_huanyin: {
                audio: 'clanhuanyin',
                trigger: { player: 'dying' },
                forced: true,
                content() {
                    'step 0'
                    if (!player.storage.old_huanyin) player.storage.old_huanyin = true;
                    else player.storage.old_huanyin = false;
                    game.log(player, '倒置了技能', '#g【烈誓】', '和', '#g【点盏】');
                    'step 1'
                    if (player.countCards('h') < 4) player.drawTo(4);
                },
            },
            //荀粲
            old_yunshen: {
                audio: 'clanyunshen',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return target.isDamaged() && target != player;
                    });
                },
                filterTarget(card, player, target) {
                    return target.isDamaged() && target != player;
                },
                usable: 2,
                content() {
                    'step 0'
                    target.recover();
                    'step 1'
                    var str = get.translation(target);
                    if (player.hasSkill('old_yunshen_0')) result.index = 1;
                    else if (player.hasSkill('old_yunshen_1')) result.index = 0;
                    else player.chooseControl().set('choiceList', [
                        '视为' + str + '对自己使用一张冰【杀】',
                        '视为对' + str + '一张使用冰【杀】',
                    ]).set('ai', function () {
                        var evt = _status.event.getParent(), player = evt.player, target = evt.target;
                        var card = { name: 'sha', nature: 'ice', isCard: true }, att = get.attitude(player, target) > 0;
                        var eff1 = get.effect(target, card, player, player), eff2 = get.effect(player, card, target, player);
                        return eff1 >= eff2 ? 0 : 1;
                    });
                    'step 2'
                    player.addTempSkill('old_yunshen_' + result.index, 'phaseUseAfter');
                    var list = [player, target];
                    if (result.index == 1) list.reverse();
                    if (list[1].isIn() && list[0].isIn() && list[1].canUse('sha', list[0], false)) list[1].useCard({ name: 'sha', nature: 'ice', isCard: true }, list[0], false, 'noai');
                },
                ai: {
                    order: 1,
                    expose: 0.3,
                    result: {
                        player(player, target) {
                            return get.recoverEffect(target, player, player);
                        },
                    },
                },
                subSkill: {
                    '0': { charlotte: true },
                    '1': { charlotte: true },
                },
            },
            old_shangshen: {
                audio: 'clanshangshen',
                trigger: { global: 'damageEnd' },
                filter(event, player) {
                    return event.hasNature() && event.player.isIn();
                },
                check(event, player) {
                    return player.countCards('j') || (get.attitude(player, event.player) > 0 && event.player.countCards('h') < 4);
                },
                logTarget: 'player',
                content() {
                    'step 0'
                    var target = trigger.player;
                    event.target = target;
                    event.videoId = lib.status.videoId++;
                    var func = function (player, id) {
                        var list = [
                            '获得你场上的所有牌',
                            '将' + get.translation(target) + '的一张牌当作一张随机延时锦囊牌对你使用',
                            '令' + get.translation(target) + '将手牌数补至四张',
                        ];
                        var choiceList = ui.create.dialog('伤神：请选择两项');
                        choiceList.videoId = id;
                        for (var i = 0; i < list.length; i++) {
                            var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                            str += list[i];
                            str += '</div>';
                            var next = choiceList.add(str);
                            next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                            next.firstChild.link = i;
                            //for(var j in lib.element.button){
                            //next[j]=lib.element.button[j];
                            //}
                            //还是手搓带劲儿
                            Object.setPrototypeOf(next, lib.element.Button.prototype);
                            choiceList.buttons.add(next.firstChild);
                        }
                        return choiceList;
                    };
                    if (player.isOnline2()) {
                        player.send(func, player, event.videoId);
                    }
                    event.dialog = func(player, event.videoId);
                    if (player != game.me || _status.auto) {
                        event.dialog.style.display = 'none';
                    }
                    var att = get.attitude(player, trigger.player);
                    var next = player.chooseButton();
                    next.set('dialog', event.videoId);
                    next.set('forced', true);
                    next.set('selectButton', 2);
                    next.set('target', target);
                    next.set('ai', button => {
                        var player = _status.event.player;
                        var target = _status.event.target;
                        switch (button.link) {
                            case 0:
                                if (player.countCards('j')) return 3;
                                return 1;
                                break;
                            case 1:
                                return 1.5;
                                break;
                            case 2:
                                if (att > 0) return 2;
                                return 0;
                                break;
                        }
                    });
                    'step 1'
                    if (player.isOnline2()) player.send('closeDialog', event.videoId);
                    event.dialog.close();
                    result.links.sort();
                    for (var i of result.links) game.log(player, '选择了', '#g【伤神】', '的', '#y选项' + get.cnNumber(1 + i, true));
                    if (result.links.includes(0)) player.gain(player.getCards('ej'), 'gain2');
                    event.links = result.links;
                    'step 2'
                    if (event.links.includes(1)) {
                        player.choosePlayerCard(target, 'he', true).set('ai', function (button) {
                            var player = _status.event.player;
                            return get.effect(player, button.link, player, player) * (att > 0 ? -1 : 1);
                        });
                    }
                    else event.goto(4);
                    'step 3'
                    if (result.bool) {
                        var list = [];
                        for (var name of lib.inpile) {
                            if (get.type(name) != 'delay') continue;
                            if (target.canUse({ name: name }, player)) list.push(name);
                        }
                        if (list.length) {
                            var card = result.cards[0];
                            var cardx = get.autoViewAs({ name: list.randomGet() }, [card]);
                            target.useCard(cardx, [card], player, false);
                        }
                    }
                    'step 4'
                    if (event.links.includes(2) && target.countCards('h') < 4) target.drawTo(4);
                },
            },
            old_fenchai: {
                getTargets(player) {
                    var history = player.getHistory('useSkill', function (evt) {
                        if (evt.type != 'player') return false;
                        var skill = evt.sourceSkill || evt.skill, targets = evt.targets;
                        var info = get.info(skill);
                        if (!info || info.charlotte) return false;
                        return targets?.some(i => player.differentSexFrom(i));
                    });
                    if (history.length) return history[0].targets.filter(i => player.differentSexFrom(i));
                    return [];
                },
                group: 'old_fenchai_audio',
                global: 'old_fenchai_global',
                audio: 'clanfenchai',
                trigger: { global: 'die' },
                filter(event, player) {
                    return lib.skill.old_fenchai.getTargets(player).includes(event.player) && event.player.countCards('h');
                },
                direct: true,
                skillAnimation: true,
                animationColor: 'water',
                content() {
                    'step 0'
                    trigger.player.chooseCard('he', [0, Math.ceil(trigger.player.countCards('h'))], get.prompt('old_fenchai'), '交给' + get.translation(player) + '至多' + get.cnNumber() + '张牌').set('ai', function (card) {
                        if (_status.event.goon) return get.value(card);
                        return -1;
                    }).set('goon', get.attitude(trigger.player, player) > 0).set('forceDie', true);
                    'step 1'
                    if (result.bool) {
                        player.logSkill('old_fenchai');
                        trigger.player.line(player);
                        game.log(player, '收到了来自', trigger.player, '的呼唤');
                        player.gain(result.cards, trigger.player, 'giveAuto').set('forceDie', true);
                    }
                },
                subSkill: {
                    audio: {
                        audio: 'clanfenchai',
                        trigger: { global: 'judge' },
                        filter(event, player) {
                            return event.player == player || lib.skill.old_fenchai.getTargets(player).includes(event.player);
                        },
                        forced: true,
                        locked: false,
                        logTarget: 'player',
                        content() { },
                    },
                    global: {
                        mod: {
                            suit(card, suit) {
                                var player = get.owner(card) || _status.event.player;
                                if (!player) return;
                                if (player.hasSkill('old_fenchai') || game.hasPlayer(function (target) {
                                    return lib.skill.old_fenchai.getTargets(target).includes(player);
                                })) return 'heart';
                            },
                        },
                    },
                },
            },
            //神孙权
            bolyuheng: {
                derivation: 'bolyuheng_faq',
                //全扩技能库
                getList() {
                    if (!_status.characterlist) lib.skill.pingjian.initList();
                    let list = _status.characterlist.filter(name => get.character(name, 1) == 'wu' || (get.is.double(name, true) || []).includes('wu'));
                    const players = game.players.concat(game.dead);
                    for (const player of players) list.removeArray([player.name, player.name1, player.name2]);
                    let skills = [];
                    for (const i of list) {
                        skills.addArray((lib.character[i][3] || []).filter(skill => {
                            var info = get.info(skill);
                            return info && !info.zhuSkill && !info.hiddenSkill && !info.charlotte && !info.groupSkill && !info.limited && !info.juexingji;
                        }));
                    }
                    return skills;
                },
                group: 'bolyuheng_remove',
                audio: 'yuheng',
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    return player.hasCard(card => lib.filter.cardDiscardable(card, player, 'bolyuheng'), 'he');
                },
                forced: true,
                keepSkill: true,
                content() {
                    'step 0'
                    player.chooseToDiscard('he', true, [1, player.getCards('he').reduce((list, card) => list.add(get.suit(card, player)), []).length], function (card, player) {
                        return !ui.selected.cards.reduce((list, card) => list.add(get.suit(card, player)), []).includes(get.suit(card, player));
                    }).set('complexCard', true).set('ai', function (card) {
                        var player = _status.event.player;
                        var list = (lib.config.extension_活动武将_ShenSunQuan ? lib.skill.bolyuheng.getList() : lib.skill.junkyuheng.derivation);
                        if (ui.selected.cards.length >= list.length) return 0;
                        if (!player.hasValueTarget(card)) return 5;
                        return 1 / (get.value(card) || 0.5);
                    });
                    'step 1'
                    if (result.bool) {
                        const list = (lib.config.extension_活动武将_ShenSunQuan ? lib.skill.bolyuheng.getList() : lib.skill.junkyuheng.derivation).filter(skill => !player.hasSkill(skill));
                        const skills = list.randomGets(Math.min(list.length, result.cards.length));
                        player.addAdditionalSkills('bolyuheng', skills);
                    }
                },
                subSkill: {
                    remove: {
                        audio: 'yuheng',
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            return player.additionalSkills.bolyuheng && player.additionalSkills.bolyuheng.length;
                        },
                        forced: true,
                        content() {
                            const skills = player.additionalSkills.bolyuheng;
                            player.removeAdditionalSkills('bolyuheng');
                            player.draw(skills.length);
                        },
                    },
                },
            },
            boldili: {
                derivation: ['junkshengzhi', 'junkquandao', 'junkchigang'],
                juexingji: true,
                audio: 'dili',
                trigger: {
                    global: 'phaseBefore',
                    player: ['enterGame', 'loseMaxHpEnd', 'gainMaxHpEnd', 'changeSkillsAfter'],
                },
                filter(event, player) {
                    if (event.name == 'phase' && game.phaseNumber > 0) return false;
                    const skills = player.getSkills(null, false, false).filter(i => {
                        const info = get.info(i);
                        return info && !info.charlotte;
                    });
                    return skills.length > player.maxHp;
                },
                forced: true,
                skillAnimation: true,
                animationColor: 'wood',
                content() {
                    'step 0'
                    player.awakenSkill('boldili');
                    player.loseMaxHp();
                    'step 1'
                    var skills = player.getSkills(null, false, false).filter(i => {
                        if (i == 'boldili') return false;
                        var info = get.info(i);
                        return info && !info.charlotte;
                    });
                    if (!skills.length) { event.finish(); return; }
                    var list = [];
                    for (var skill of skills) {
                        list.push([
                            skill,
                            '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>',
                        ])
                    }
                    var next = player.chooseButton([
                        '请选择失去任意个技能',
                        [list, 'textbutton'],
                    ]);
                    next.set('forced', true);
                    next.set('selectButton', [1, skills.length]);
                    next.set('ai', function (button) {
                        var skill = button.link, skills = _status.event.skills.slice(0);
                        skills.removeArray(['xinanguo', 'lanjiang', 'rezhiheng', 'bolyuheng']);
                        switch (ui.selected.buttons.length) {
                            case 0:
                                if (skills.includes(skill)) return 2;
                                if (skill == 'bolyuheng') return 1;
                                return Math.random();
                            case 1:
                                if (skills.length < 2) return 0;
                                if (skills.includes(skill)) return 2;
                                if (skill == 'bolyuheng') return 1;
                                return 0
                            case 2:
                                if (skills.includes(skill)) return 2;
                                if (skill == 'bolyuheng') return 1;
                                return 0;
                            default: return 0;
                        }
                    });
                    next.set('skills', skills);
                    'step 2'
                    if (result.bool) {
                        var skills = result.links, list = lib.skill.boldili.derivation;
                        game.log(player, '失去了以下技能：', '#g' + get.translation(skills));
                        player.removeSkills(skills.slice(0));
                        player.addSkills(list.slice(0, Math.min(skills.length, list.length)));
                    }
                },
            },
            //张华
            bolchuanwu: {
                audio: 'olchuanwu',
                trigger: { player: 'damageEnd', source: 'damageSource' },
                filter(event, player) {
                    return player.getAttackRange() > 0 && player.getStockSkills(false, true).length;
                },
                forced: true,
                async content(event, trigger, player) {
                    let skills = player.getStockSkills(false, true);
                    const num = Math.min(player.getAttackRange(), skills.length);
                    skills = skills.slice(0, num);
                    await player.removeSkills(skills);
                    if (!player.storage.bolchuanwu_restore) {
                        player.when({ global: 'phaseAfter' }).then(() => {
                            player.changeSkills(player.getStorage('bolchuanwu_restore'), []).set('$handle', (player, skills) => {
                                player.addSkillLog(skills);
                                game.broadcastAll(player => {
                                    player.skills.sort((a, b) => {
                                        const getNum = function (skill, player) {
                                            const skills = player.getStockSkills(true, true);
                                            return skills.includes(skill) ? skills.indexOf(skill) : skills.length;
                                        };
                                        return getNum(a, player) - getNum(b, player);
                                    });
                                }, player);
                                player.update();
                            });
                        }).then(() => delete player.storage.bolchuanwu_restore);
                    }
                    player.markAuto('bolchuanwu_restore', skills.filter(skill => !player.getStorage('bolchuanwu_restore').includes(skill)));
                    await player.draw(num);
                },
            },
            //徐庶
            bolzhuhai: {
                audio: 'rezhuhai',
                trigger: { global: 'phaseJieshuBegin' },
                filter(event, player) {
                    if (event.player == player || !event.player.getHistory('sourceDamage').length || !event.player.isIn()) return false;
                    return player.hasCard(card => {
                        if (_status.connectMode) return true;
                        return ['sha', 'juedou'].some(name => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) !== false && player.canUse(get.autoViewAs({ name: name }, [card]), event.player, false));
                    }, 'hs');
                },
                direct: true,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    let choices = [], choiceList = ['将一张手牌当作【杀】对其使用', '将一张手牌当作【过河拆桥】对其使用'];
                    if (player.hasCard(card => {
                        return game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) !== false && player.canUse(get.autoViewAs({ name: 'sha' }, [card]), target, false);
                    }, 'hs')) choices.push('选项一');
                    else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                    if (player.hasCard(card => {
                        return game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) !== false && player.canUse(get.autoViewAs({ name: 'juedou' }, [card]), target, false);
                    }, 'hs')) choices.push('选项二');
                    else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    choices.push('cancel2');
                    const { result: { control } } = await player.chooseControl(choices).set('choiceList', choiceList)
                        .set('prompt', get.prompt('bolzhuhai', target)).set('ai', () => {
                            const player = get.event('player'), target = get.event('target'), choices = get.event('controls');
                            let eff1 = 0, eff2 = 0;
                            if (choices.includes('选项一')) eff1 = get.effect(target, { name: 'sha' }, player, player);
                            if (choices.includes('选项二')) eff2 = get.effect(target, { name: 'guohe' }, player, player);
                            if (eff1 > 0 && ((player.hasSkill('xsqianxin') || player.hasSkill('fh_qianxin')) && player.isDamaged() || eff1 > eff2)) return '选项一';
                            if (eff2 > 0) return '选项二';
                            return 'cancel2';
                        }).set('target', target);
                    if (control != 'cancel2') {
                        const name = (control == '选项一' ? 'sha' : 'guohe');
                        const { result: { bool, cards } } = await player.chooseCard('hs', true, (card, player) => {
                            if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
                            return player.canUse(get.autoViewAs({ name: get.event('namex') }, [card]), get.event('target'), false);
                        }, '将一张手牌当作【' + get.translation(name) + '】对' + get.translation(target) + '使用').set('ai', card => {
                            const player = get.event('player'), target = get.event('target');
                            return get.effect(target, get.autoViewAs({ name: get.event('namex') }, [card]), player, player) / Math.max(1, get.value(card));
                        }).set('namex', name).set('target', target);
                        if (bool) player.useCard({ name: name }, cards, 'bolzhuhai', target, false);
                    }
                },
            },
            //张郃【机先】
            //只因先
            bilibili_zhiyinxian: {
                init(player) {
                    player.storage.bilibili_zhiyinxian = [];
                },
                group: 'bilibili_zhiyinxian_restore',
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    if (player == event.player) return false;
                    return ['phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard'].filter(function (i) {
                        return !player.storage.bilibili_zhiyinxian.includes(i) && !event.player.skipList.includes(i);
                    }).length;
                },
                direct: true,
                content() {
                    'step 0'
                    var list = ['phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard'].filter(function (i) {
                        return !player.storage.bilibili_zhiyinxian.includes(i) && !trigger.player.skipList.includes(i);
                    });
                    player.chooseControl(list, 'cancel2').set('prompt', get.prompt('bilibili_zhiyinxian', trigger.player)).set('ai', function () {
                        var player = _status.event.player;
                        var target = _status.event.getTrigger().player;
                        var att = get.attitude(player, target);
                        if (list.includes('phaseUse') && att < 0 && target.countCards('hs') >= target.hp && !target.hasJudge('lebu')) return 'phaseUse';
                        if (list.includes('phaseDraw') && att < 0 && target.countCards('hs') <= target.hp && !target.hasJudge('bingliang')) return 'phaseDraw';
                        if (list.includes('phaseDiscard') && att > 0 && target.needsToDiscard()) return 'phaseDiscard';
                        if (list.includes('phaseJudge') && att > 0 && target.countCards('j', function (card) {
                            return card.name.indexOf('yanxiao') == -1;
                        })) return 'phaseJudge';
                        return 'cancel2';
                    }).set('prompt2', '跳过' + get.translation(trigger.player) + '的一个阶段');
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('bilibili_zhiyinxian', trigger.player);
                        if (player != trigger.player) player.addExpose(0.3);
                        trigger.player.skip(result.control);
                        game.log(trigger.player, '的', '#y' + result.control, '被跳过了');
                        player.storage.bilibili_zhiyinxian.push(result.control);
                    }
                },
                subSkill: {
                    restore: {
                        trigger: { source: 'dieAfter' },
                        filter(event, player) {
                            return player.storage.bilibili_zhiyinxian.length;
                        },
                        direct: true,
                        content() {
                            'step 0'
                            var list = ['phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard'].filter(function (i) {
                                return player.storage.bilibili_zhiyinxian.includes(i);
                            });
                            player.chooseControl(list, 'cancel2').set('prompt', get.prompt('bilibili_zhiyinxian')).set('ai', function () {
                                var player = _status.event.player;
                                var target = _status.event.getTrigger().player;
                                var att = get.attitude(player, target);
                                if (list.includes('phaseUse')) return 'phaseUse';
                                if (list.includes('phaseDraw')) return 'phaseDraw';
                                if (list.includes('phaseDiscard')) return 'phaseDiscard';
                                if (list.includes('phaseJudge')) return 'phaseJudge';
                                return 'cancel2';
                            }).set('prompt2', '恢复一个已选择过的时机');
                            'step 1'
                            if (result.control != 'cancel2') {
                                player.logSkill('bilibili_zhiyinxian');
                                game.log(player, '恢复了', '#y' + result.control, '的操作权');
                                player.storage.bilibili_zhiyinxian.remove(result.control);
                            }
                        },
                    },
                },
            },
            bolhuanshi: {
                inherit: 'olhuanshi',
                prompt2(event, player) {
                    return get.translation(event.player) + '的' + event.judgestr + '判定为' + get.translation(event.player.judging[0]) + '。你可以令其观看你的牌，其选择一张牌进行改判。然后你可以重铸任意张牌。';
                },
                async content(event, trigger, player) {
                    const target = trigger.player, judge = trigger.judge(target.judging[0]), attitude = get.attitude(target, player);
                    const { result: { bool, links } } = await target.choosePlayerCard('请选择代替判定的牌', 'he', 'visible', true, player).set('ai', button => {
                        const card = button.link, judge = get.event('judge'), attitude = get.event('attitude');
                        const trigger = get.event().getTrigger(), player = get.event('player'), result = trigger.judge(card) - judge;
                        if (result > 0) return 20 + result;
                        if (result == 0) {
                            if (_status.currentPhase == player) return 0;
                            if (attitude >= 0) return get.color(card) == 'red' ? 7 : 0 - get.value(card);
                            return get.color(card) == 'black' ? 10 : 0 + get.value(card);
                        }
                        if (attitude >= 0) return get.color(card) == 'red' ? 0 : -10 + result;
                        return get.color(card) == 'black' ? 0 : -10 + result;
                    }).set('filterButton', button => {
                        const player = get.event('player'), card = button.link;
                        const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                        if (mod2 != 'unchanged') return mod2;
                        const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                        if (mod != 'unchanged') return mod;
                        return true;
                    }).set('judge', judge).set('attitude', attitude);
                    if (bool) {
                        const card = links[0];
                        await player.respond(card, 'highlight', 'noOrdering').set('nopopup', true);
                        if (target.judging[0].clone) {
                            target.judging[0].clone.classList.remove('thrownhighlight');
                            game.broadcast(card => {
                                if (card.clone) card.clone.classList.remove('thrownhighlight');
                            }, target.judging[0]);
                            game.addVideo('deletenode', player, get.cardsInfo([target.judging[0].clone]));
                        }
                        game.cardsDiscard(target.judging[0]);
                        target.judging[0] = card;
                        trigger.orderingCards.add(card);
                        game.log(target, '的判定牌改为', card);
                        await game.asyncDelay(2);
                        if (player.countCards('h')) {
                            const { result: { bool, cards } } = await player.chooseCard('是否重铸任意张手牌？', [1, player.countCards('h')], lib.filter.cardRecastable).set('ai', card => {
                                const player = get.event('player'), cards = ui.selected.cards;
                                if (!player.hasSkill('olmingzhe')) return 5 - get.value(card);
                                if (!cards.some(i => get.color(i, player) == 'red') && get.color(card, player) == 'red') return 7.5 - get.value(card);
                                return 5 - get.value(card);
                            }).set('complexCard', true);
                            if (bool) await player.recast(result.cards);
                        }
                    }
                },
            },
            //荀采
            oldx_lieshi: {
                audio: 'clanlieshi',
                enable: 'phaseUse',
                content() {
                    'step 0'
                    var choice = [];
                    var list = ['受到1点火属性伤害并废除判定区', '弃置所有【闪】', '弃置所有【杀】'];
                    for (var i = 1; i <= 3; i++) {
                        if (i == 2 && !player.countCards('h', { name: 'shan' })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + '</span>';
                        else if (i == 3 && !player.countCards('h', { name: 'sha' })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + '</span>';
                        else choice.push('选项' + get.cnNumber(i, true));
                    }
                    if (choice.length) player.chooseControl(choice).set('choiceList', list).set('ai', function () {
                        if (choice.length == 1) return choice[0];
                        var player = _status.event.player;
                        if (get.damageEffect(player, player, player, 'fire') > 0) return '选项一';
                        return choice[choice.length - 1];
                    }).set('prompt', '烈誓：请选择一项执行，然后选择一名其他角色执行另一项');
                    else event.finish();
                    'step 1'
                    var num = result.control;
                    event.num = num;
                    game.log(player, '选择执行', '#g【烈誓】', '的' + result.control);
                    switch (num) {
                        case '选项一':
                            player.damage(1, 'fire');
                            if (!player.storage._disableJudge) player.disableJudge();
                            break;
                        case '选项二':
                            player.discard(player.getCards('h', { name: 'shan' }));
                            break;
                        case '选项三':
                            player.discard(player.getCards('h', { name: 'sha' }));
                            break;
                    }
                    'step 2'
                    if (!player.isIn() || game.countPlayer() < 2) event.finish();
                    else player.chooseTarget('请选择一名其他角色，执行【烈誓】的剩余选项', lib.filter.notMe, true).set('ai', function (target) {
                        var player = _status.event.player;
                        var choice = [], att = get.attitude(player, target);
                        for (var i = 1; i <= 3; i++) {
                            if ('选项' + get.cnNumber(i, true) == _status.event.control) continue;
                            else if (i == 2 && !target.countCards('h', { name: 'shan' })) continue;
                            else if (i == 3 && !target.countCards('h', { name: 'sha' })) continue;
                            else choice.push('选项' + get.cnNumber(i, true));
                        }
                        if (!choice.length) return -1 / Infinity;
                        if (choice.length == 1) {
                            if (choice[0] == '选项一') return -att * 3;
                            return -att * 2;
                        }
                        return -att;
                    }).set('control', num);
                    'step 3'
                    if (!result.bool) {
                        event.finish();
                        return;
                    }
                    player.addExpose(0.3);
                    var target = result.targets[0];
                    event.target = target;
                    player.line(target);
                    var choice = [];
                    var list = ['受到1点火属性伤害并废除判定区', '弃置所有【闪】', '弃置所有【杀】'];
                    for (var i = 1; i <= 3; i++) {
                        if ('选项' + get.cnNumber(i, true) == num) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + '</span>';
                        else if (i == 2 && !target.countCards('h', { name: 'shan' })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + '</span>';
                        else if (i == 3 && !target.countCards('h', { name: 'sha' })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + '</span>';
                        else choice.push('选项' + get.cnNumber(i, true));
                    }
                    if (choice.length) target.chooseControl(choice).set('choiceList', list).set('ai', function () {
                        if (get.damageEffect(target, target, target, 'fire') > 0) return '选项一';
                        return choice[choice.length - 1];
                    }).set('prompt', '烈誓：请选择一项执行');
                    else event.finish();
                    'step 4'
                    game.log(target, '选择执行', '#g【烈誓】', '的' + result.control);
                    switch (result.control) {
                        case '选项一':
                            target.damage(1, 'fire');
                            if (!target.storage._disableJudge) target.disableJudge();
                            break;
                        case '选项二':
                            target.discard(target.getCards('h', { name: 'shan' }));
                            break;
                        case '选项三':
                            target.discard(target.getCards('h', { name: 'sha' }));
                            break;
                    }
                },
                ai: {
                    order: 1,
                    nokeep: true,
                    skillTagFilter(player) {
                        if (!player.hasSkill('bolhuanyin')) return false;
                    },
                    result: {
                        player(player) {
                            var choice = [];
                            for (var i = 1; i <= 3; i++) {
                                if (i == 2 && !player.countCards('h', { name: 'shan' })) continue;
                                else if (i == 3 && !player.countCards('h', { name: 'sha' })) continue;
                                else choice.push('选项' + get.cnNumber(i, true));
                            }
                            var control = ((get.damageEffect(player, player, player, 'fire') > 0) ? '选项一' : choice[choice.length - 1]);
                            if (choice[choice.length - 1] == '选项一' && player.hp + player.countCards('hs', { name: ['tao', 'jiu'] }) < 2 && (player.identity == 'zhu' || !player.hasFriend() || !player.hasSkill('bolhuanyin') || !player.countCards('h') >= 4)) return 0;
                            if (game.hasPlayer(function (target) {
                                if (get.attitude(player, target) >= 0) return false;
                                var list = [];
                                for (var i = 1; i <= 3; i++) {
                                    if ('选项' + get.cnNumber(i, true) == control) continue;
                                    else if (i == 2 && !target.countCards('h', { name: 'shan' })) continue;
                                    else if (i == 3 && !target.countCards('h', { name: 'sha' })) continue;
                                    else list.push('选项' + get.cnNumber(i, true));
                                }
                                if (list.length) return 1;
                            })) return 1;
                            return 0;
                        },
                    },
                },
            },
            oldx_dianzhan: {
                audio: 'clandianzhan',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    return get.info('clandianzhan').filter(event, player);
                },
                forced: true,
                content() {
                    'step 0'
                    if (trigger.targets && trigger.targets.length == 1) {
                        player.line(trigger.targets[0]);
                        if (!trigger.targets[0].isLinked()) trigger.targets[0].link();
                    }
                    'step 1'
                    var cards = player.getCards('h', card => get.suit(card) == get.suit(trigger.card) && player.canRecast(card));
                    if (cards.length) player.recast(cards);
                },
            },
            //程普
            bollihuo: {
                group: 'bollihuo_damage',
                audio: 'lihuo',
                trigger: { player: 'useCard1' },
                filter(event, player) {
                    return event.card.name == 'sha' && !event.card.nature;
                },
                check(event, player) {
                    return player.hp + player.countCards('hs', { name: 'tao' }) > 2;
                },
                content() {
                    game.setNature(trigger.card, 'fire');
                    trigger.card.lhdamaged = true;
                    player.addSkill('bollihuo_target');
                    player.addMark('bollihuo_target', 1, false);
                    var next = game.createEvent('bollihuo_clear');
                    next.player = player;
                    next.card = trigger.card;
                    event.next.remove(next);
                    next.forceDie = true;
                    trigger.after.push(next);
                    next.setContent(function () {
                        delete card.nature;
                        if (card.lhdamaged) delete card.lhdamaged;
                    });
                },
                subSkill: {
                    target: {
                        charlotte: true,
                        intro: { content: '使用火【杀】可以额外指定#个目标' },
                        trigger: { player: 'useCard2' },
                        filter(event, player) {
                            if (event.card.name != 'sha' || get.nature(event.card) != 'fire') return false;
                            return game.hasPlayer(function (current) {
                                return !event.targets.includes(current) && player.canUse(event.card, current);
                            });
                        },
                        direct: true,
                        content() {
                            'step 0'
                            player.chooseTarget(get.prompt('bollihuo'), [1, player.countMark('bollihuo_target')], '为' + get.translation(trigger.card) + '增加至多' + get.cnNumber(player.countMark('bollihuo_target')) + '个目标', function (card, player, target) {
                                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                            }).set('sourcex', trigger.targets).set('card', trigger.card).set('ai', function (target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player);
                            });
                            'step 1'
                            if (result.bool) {
                                if (!event.isMine() && !_status.connectMode) game.delayx();
                                event.targets = result.targets;
                            }
                            else event.finish();
                            'step 2'
                            player.logSkill('bollihuo', targets);
                            trigger.targets.addArray(targets);
                        },
                    },
                    damage: {
                        charlotte: true,
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            return event.card && event.card.lhdamaged;
                        },
                        direct: true,
                        content() {
                            'step 0'
                            if (player.countCards('he') < 2) result.control = '失去体力';
                            if (trigger.card && trigger.card.lhdamaged) delete trigger.card.lhdamaged;
                            player.chooseControl('弃置卡牌', '失去体力').set('prompt', '选择弃置两张牌或失去1点体力').set('ai', function () {
                                if (player.countCards('hes') > player.hp - 1) return '弃置卡牌';
                                return '失去体力';
                            });
                            'step 1'
                            if (result.control == '弃置卡牌') player.chooseToDiscard(2, 'he', true);
                            else player.loseHp();
                        },
                    },
                },
            },
            bolchunlao: {
                marktext: '醇',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'bolchunlao_save',
                audio: 'chunlao',
                trigger: { global: 'loseAfter' },
                filter(event, player) {
                    if (event.type != 'discard' || get.distance(player, event.player) > 1) return false;
                    for (var card of event.cards2) {
                        if (card.name == 'sha') return true;
                    }
                    return false;
                },
                direct: true,
                content() {
                    'step 0'
                    var list = [];
                    for (var card of trigger.cards2) {
                        if (card.name == 'sha') list.push(card);
                    }
                    trigger.player.chooseBool('是否对' + get.translation(player) + '发动【醇醪】？', '将' + get.translation(list) + '置于' + get.translation(player) + '的武将牌上').set('choice', get.attitude(trigger.player, player) > 0);
                    event.list = list;
                    'step 1'
                    if (result.bool) {
                        trigger.player.logSkill('bolchunlao', player);
                        player.addToExpansion('gain2', event.list).gaintag.add('bolchunlao');
                    }
                },
                subSkill: {
                    round: { onremove: true, charlotte: true },
                    judge: {
                        mark: true,
                        intro: { content: '下个判定阶段改为摸牌阶段' },
                        trigger: { player: 'phaseJudgeBefore' },
                        direct: true,
                        content() {
                            player.removeSkill('bolchunlao_judge');
                            trigger.cancel();
                            var next = player.phaseDraw();
                            event.next.remove(next);
                            trigger.getParent().next.push(next);
                        },
                    },
                    save: {
                        enable: 'chooseToUse',
                        filter(event, player) {
                            return event.type == 'dying' && event.dying && event.dying.hp <= 0 && player.getExpansions('bolchunlao').length >= player.countMark('bolchunlao_round');
                        },
                        filterTarget(card, player, target) {
                            return target == _status.event.dying;
                        },
                        direct: true,
                        clearTime: true,
                        delay: false,
                        selectTarget: -1,
                        content() {
                            'step 0'
                            if (player.hasMark('bolchunlao_round')) player.chooseCardButton(get.translation('bolchunlao'), player.getExpansions('bolchunlao'), player.countMark('bolchunlao_round'), true);
                            'step 1'
                            player.addTempSkill('bolchunlao_round', 'roundStart');
                            player.addMark('bolchunlao_round', 1, false);
                            player.logSkill('bolchunlao', target);
                            if (target != player) player.addExpose(0.2);
                            if (result.links) player.loseToDiscardpile(result.links);
                            event.type = 'dying';
                            target.useCard({ name: 'jiu', isCard: true }, target);
                            target.addSkill('bolchunlao_judge');
                        },
                        ai: {
                            order: 6,
                            skillTagFilter(player) {
                                return player.getExpansions('bolchunlao').length >= player.countMark('bolchunlao_round');
                            },
                            save: true,
                            result: { target: 3 },
                        },
                    },
                },
            },
            //孙登
            bolkuangbi: {
                audio: 'kuangbi',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('he') && game.hasPlayer(function (target) {
                        return target != player && target.countCards('he') && !target.hasSkill('bolkuangbi2');
                    });
                },
                filterTarget(card, player, target) {
                    return target != player && target.countCards('he') && !target.hasSkill('bolkuangbi2');
                },
                usable: 1,
                content() {
                    'step 0'
                    var att = get.attitude(player, target);
                    player.chooseCardOL([player, target], '将任意张牌置于' + get.translation(target) + '的武将牌上', 'he', [1, Infinity], true).set('ai', function (card) {
                        if (att > 0) return 6 - get.value(card);
                        return -get.value(card);
                    }).set('aiCard', function (target) {
                        var hs = target.getCards('he');
                        if (att > 0) return { bool: true, cards: [hs.randomGets(target.countCards('he') / 2)] };
                        return { bool: true, cards: [hs.randomGet()] };
                    });
                    'step 1'
                    target.addTempSkill('bolkuangbi2', { player: 'die' });
                    target.addToExpansion(result[0].cards, player, 'give').gaintag.add('bolkuangbi2');
                    target.addToExpansion(result[1].cards, target, 'give').gaintag.add('bolkuangbi2');
                    target.storage.bolkuangbi2 = [result[0].cards.length + result[1].cards.length, player];
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                        target(player, target) {
                            if (get.attitude(player, target) > 0) return Math.sqrt(target.countCards('he'));
                            return 0;
                        },
                    },
                },
            },
            bolkuangbi2: {
                charlotte: true,
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    delete player.storage.bolkuangbi2;
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                audio: 'bolkuangbi',
                trigger: { global: 'phaseBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.storage.bolkuangbi2[0]--;
                    'step 1'
                    if (player.storage.bolkuangbi2[0] == 0) {
                        player.logSkill('bolkuangbi2');
                        game.log(player, '的', '#g【匡弼】', '技能生效');
                        var target = player.storage.bolkuangbi2[1];
                        var num = player.getExpansions('bolkuangbi2').length;
                        player.gain(player.getExpansions('bolkuangbi2'), 'gain2');
                        if (target.isIn()) target.draw(num);
                    }
                    else {
                        game.log('距离', player, '的', '#g【匡弼】', '技能生效还剩', '#y' + player.storage.bolkuangbi2[0], '个回合');
                        event.finish();
                    }
                    'step 2'
                    player.removeSkill('bolkuangbi2');
                },
            },
            //张宝
            old_zhoufu: {
                audio: 'zhoufu',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') && game.hasPlayer(function (target) {
                        return target != player && !target.getExpansions('old_zhoufu2').length;
                    });
                },
                filterCard: true,
                filterTarget(card, player, target) {
                    return target != player && !target.getExpansions('old_zhoufu2').length;
                },
                check(card) {
                    return 6 - get.value(card)
                },
                usable: 1,
                discard: false,
                lose: false,
                delay: false,
                content() {
                    player.addSkill(['old_zhoufu_judge', 'old_zhoufu_gain']);
                    target.addToExpansion(cards, player, 'give').gaintag.add('old_zhoufu2');
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
                subSkill: {
                    judge: {
                        charlotte: true,
                        audio: 'zhoufu',
                        trigger: { global: 'judgeBefore' },
                        filter(event, player) {
                            return !event.directresult && event.player.getExpansions('old_zhoufu2').length;
                        },
                        logTarget: 'player',
                        forced: true,
                        locked: false,
                        content() {
                            var cards = [trigger.player.getExpansions('old_zhoufu2')[0]];
                            trigger.directresult = cards[0];
                            trigger.player.unmarkSkill('old_zhoufu2');
                        },
                    },
                    gain: {
                        charlotte: true,
                        audio: 'zhoufu',
                        trigger: { global: 'phaseEnd' },
                        filter(event, player) {
                            return event.player.getExpansions('old_zhoufu2').length;
                        },
                        logTarget: 'player',
                        forced: true,
                        locked: false,
                        content() {
                            player.gain(trigger.player.getExpansions('old_zhoufu2'), trigger.player, 'give');
                            trigger.player.unmarkSkill('old_zhoufu2');
                        },
                    },
                },
            },
            old_zhoufu2: {
                marktext: '咒',
                intro: { content: 'expansion' },
            },
            old_yingbing: {
                audio: 'yingbin',
                trigger: { global: 'old_zhoufu_judgeAfter' },
                frequent: true,
                content() {
                    player.draw(2);
                },
            },
            //用间篇孙鲁班
            //离谱的东西我来做
            boljiaozong: {
                global: 'boljiaozong_global',
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    var evtx = event.getParent('phaseUse');
                    if (!evtx || evtx.player != event.player) return false;
                    return event.player != player && event.player.getHistory('useCard', function (evt) {
                        return evt.getParent('phaseUse') == evtx && get.color(evt.card, event.player) == 'red' && evt.targets.includes(player);
                    }).indexOf(event) == 0;
                },
                forced: true,
                content() { },
                subSkill: {
                    global: {
                        mod: {
                            playerEnabled(card, player, target) {
                                var evtx = _status.event.getParent('phaseUse');
                                if (!evtx || evtx.player != player || !game.hasPlayer(function (current) {
                                    return current != player && current.hasSkill('boljiaozong');
                                }) || (get.color(card) != 'red' && get.color(card) != 'unsure') || player.getHistory('useCard', function (evt) {
                                    return evt.getParent('phaseUse') == evtx && get.color(evt.card, player) == 'red';
                                }).length) return;
                                if (target == player || !target.hasSkill('boljiaozong')) return false;
                            },
                            selectTarget(card, player, num) {
                                var evtx = _status.event.getParent('phaseUse');
                                if (!evtx || evtx.player != player || !game.hasPlayer(function (current) {
                                    return current != player && current.hasSkill('boljiaozong');
                                }) || (get.color(card) != 'red' && get.color(card) != 'unsure') || player.getHistory('useCard', function (evt) {
                                    return evt.getParent('phaseUse') == evtx && get.color(evt.card, player) == 'red';
                                }).length) return;
                                if (num[1] != -1) num[1] = -1;
                            },
                            targetInRange(card, player, target) {
                                var evtx = _status.event.getParent('phaseUse');
                                if (!evtx || evtx.player != player || !game.hasPlayer(function (current) {
                                    return current != player && current.hasSkill('boljiaozong');
                                }) || (get.color(card) != 'red' && get.color(card) != 'unsure') || player.getHistory('useCard', function (evt) {
                                    return evt.getParent('phaseUse') == evtx && get.color(evt.card, player) == 'red';
                                }).length) return;
                                if (target != player && target.hasSkill('boljiaozong')) return true;
                            },
                        },
                    },
                },
            },
            bolchouyou: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.card.name == 'sha' && game.hasPlayer(function (current) {
                        return !event.targets.includes(current) && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('bolchouyou'), function (card, player, target) {
                        return _status.event.targets.includes(target);
                    }).set('ai', function (target) {
                        var player = _status.event.player, trigger = _status.event.getTrigger(), storage = player.getStorage('bolchouyou2');
                        if (get.effect(player, trigger.card, trigger.player, player) > 0) return 0;
                        return get.effect(target, trigger.card, trigger.player, player) * (!storage.includes(target) ? 3 : 1);
                    }).set('targets', game.filterPlayer(function (current) {
                        return !trigger.targets.includes(current) && current != player && lib.filter.targetEnabled(trigger.card, trigger.player, current);
                    }));
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill('bolchouyou', target);
                        target.chooseBool('仇幽：是否替' + get.translation(player) + '代为' + get.translation(trigger.card) + '的目标？', '若拒绝，则你发动非锁定技前需经过' + get.translation(player) + '的同意才可发动').set('choice', get.effect(target, trigger.card, trigger.player, target) > 0);
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        target.chat('同意');
                        game.log(target, '代替', player, '成为了', trigger.card, '的目标');
                        trigger.targets[trigger.targets.indexOf(player)] = target;
                    }
                    else {
                        target.chat('拒绝');
                        game.log(target, '拒绝代替', player, '成为', trigger.card, '的目标');
                        player.addSkill('bolchouyou2');
                        player.markAuto('bolchouyou2', [target]);
                    }
                },
            },
            bolchouyou2: {
                charlotte: true,
                onremove: true,
                intro: { content: '已对$产生怨恨' },
                audio: 'bolchouyou',
                trigger: { global: ['useCardBefore', 'respondBefore', 'useSkillBefore'] },
                filter(event, player) {
                    if (!player.getStorage('bolchouyou2').includes(event.player)) return false;
                    return get.info('bolchouyou2').getFilter(event[(event.name == 'useCard' || event.name == 'respond' || event.name == 'useSkill') ? 'skill' : 'name'], player);
                },
                forced: true,
                logTarget: 'player',
                content() {
                    'step 0'
                    var skill = ((trigger.name == 'useCard' || trigger.name == 'respond' || trigger.name == 'useSkill') ? trigger.skill : trigger.name);
                    if (get.info(skill).sourceSkill) skill = get.info(skill).sourceSkill;
                    if (skill.indexOf('_backup') == skill.length - 7) skill = skill.slice(0, skill.length - 7);
                    player.chooseBool('仇幽：是否同意' + get.translation(trigger.player) + '发动【' + get.translation(skill) + '】?').set('choice', get.attitude(player, trigger.player) > 0);
                    'step 1'
                    var skill = ((trigger.name == 'useCard' || trigger.name == 'respond' || trigger.name == 'useSkill') ? trigger.skill : trigger.name);
                    if (get.info(skill).sourceSkill) skill = get.info(skill).sourceSkill;
                    player.chat(result.bool ? '同意' : '拒绝');
                    game.log(player, result.bool ? '#g同意' : '#y拒绝', trigger.player, '发动', '#g【' + get.translation(skill) + '】');
                    if (!result.bool) {
                        var info = get.info(skill);
                        if (info.limited || info.juexingji) trigger.player.restoreSkill(skill);
                        if (info.usable) {
                            if (player.storage.counttrigger?.counttrigger[skill]) player.storage.counttrigger[skill]--;
                            if (player.getStat('skill')[skill]) player.getStat('skill')[skill]--;
                        }
                        trigger.cancel();
                        if (trigger.name == 'useCard' || trigger.name == 'respond') trigger.getParent().goto(0);
                        trigger.player.addTempSkill('bolchouyou4', ['phaseBefore', 'phaseChange', 'phaseAfter']);
                        trigger.player.storage.bolchouyou4.push(skill);
                        trigger.player.disableSkill('bolchouyou4', trigger.player.storage.bolchouyou4);
                    }
                },
                group: ['bolchouyou3', 'bolchouyou5'],
                getFilter(skill, player) {
                    if (skill.indexOf('_') == 0 || !info || info.equipSkill || info.charlotte || info.silent || info.nopop || info.popup === false) return false;
                    return !lib.skill.global.includes(skill) && !get.is.locked(skill, player);
                },
            },
            bolchouyou3: {
                charlotte: true,
                trigger: { player: 'recoverEnd' },
                filter(event, player) {
                    return event.source && player.getStorage('bolchouyou2').includes(event.source);
                },
                direct: true,
                firstDo: true,
                content() {
                    player.unmarkAuto('bolchouyou2', [trigger.source]);
                },
            },
            bolchouyou4: {
                charlotte: true,
                init(player) {
                    if (!player.storage.bolchouyou4) player.storage.bolchouyou4 = [];
                },
                onremove(player) {
                    player.enableSkill('bolchouyou4');
                    delete player.storage.bolchouyou4;
                },
            },
            bolchouyou5: {
                charlotte: true,
                trigger: { global: 'logSkillBegin' },
                filter(event, player) {
                    const { skill } = event, info = get.info(skill);
                    return get.info('bolchouyou2').getFilter(skill, player);
                },
                forced: true,
                popup: false,
                content() {
                    lib.skill.bolchouyou2.trigger.global.push(trigger.skill + 'Before');
                },
            },
            //张仲景
            old_liaoyi: {
                init(player) {
                    player.storage.renku = true;
                },
                audio: 'liaoyi',
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    if (player == event.player) return false;
                    if (_status.renku.length) return true;
                    return event.player.countCards('h') >= 2 && event.player.hp != event.player.countCards('h');
                },
                direct: true,
                content() {
                    'step 0'
                    var target = trigger.player;
                    event.target = target;
                    var num = Math.min(9, Math.max(1, Math.abs(target.hp - target.countCards('h'))));
                    var choiceList = ['令其从仁库中获得一张牌', '令其将' + get.cnNumber(num) + '张手牌置入仁库'];
                    var choices = [];
                    if (_status.renku.length) choices.push('选项一');
                    else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                    if (target.countCards('h') >= 2 && target.hp != target.countCards('h')) {
                        event.num = num;
                        choices.push('选项二');
                    }
                    else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    player.chooseControl(choices, 'cancel2').set('prompt', get.prompt('old_liaoyi', target)).set('choiceList', choiceList).set('ai', function () {
                        var player = _status.event.player, target = _status.event.getTrigger().player;
                        var att = get.attitude(player, target), list = _status.event.list;
                        if (att > 0 && list.includes('选项一')) return '选项一';
                        if (att <= 0 && list.includes('选项二')) return '选项二';
                        return 'cancel2';
                    }).set('list', choices);
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('old_liaoyi', target);
                        if (result.control == '选项一') {
                            target.chooseButton(true, ['选择获得一张牌', _status.renku]).set('ai', function (button) {
                                return get.value(button.link, _status.event.player);
                            });
                            event.goto(4);
                        }
                        else {
                            var hs = target.getCards('h');
                            if (hs.length <= num) event._result = { bool: true, cards: hs };
                            else target.chooseCard('h', true, '将' + get.cnNumber(num) + '张手牌置于仁库中', num);
                        }
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        target.$throw(result.cards, 1000);
                        game.log(target, '将', result.cards, '置入了仁库');
                        target.lose(result.cards, ui.special, 'toRenku');
                    }
                    else event.finish();
                    'step 3'
                    game.delayx();
                    event.finish();
                    'step 4'
                    var cards = result.links;
                    _status.renku.removeArray(cards);
                    game.updateRenku();
                    target.gain(cards, 'gain2', 'fromRenku');
                },
                ai: { threaten: 6.4 },
            },
            //旧旧系列
            bilibili_tannang: {
                locked: true,
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - (from.getDamagedHp());
                    },
                },
            },
            bilibili_yishi: {
                trigger: { source: 'damageBegin2' },
                filter(event, player) {
                    return player != event.player;
                },
                check(event, player) {
                    if (get.damageEffect(event.player, player, player) < 0) return true;
                    var att = get.attitude(player, event.player);
                    if (event.num > 1 && att != 0) return att > 0;
                    var cards = event.player.getGainableCards(player, 'e');
                    if (cards.length && att == 0 && cards.filter(function (card) {
                        return get.equipValue(card) > 0;
                    }).length) return true;
                    return cards.filter(function (card) {
                        return get.equipValue(card) >= 6;
                    }).length;
                },
                logTarget: 'player',
                content() {
                    'step 0'
                    if (trigger.player.countGainableCards(player, 'e')) player.gainPlayerCard(trigger.player, 'e', true);
                    'step 1'
                    trigger.cancel();
                },
            },
            bilibili_zhengjun: {
                audio: 'yizhong',
                trigger: { player: 'damageBegin3' },
                filter(event, player) {
                    return player.countCards('e', { type: 'equip' });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseBool(get.prompt2('bilibili_zhengjun')).set('ai', function () {
                        var player = _status.event.player;
                        if (player.hp <= 2 || _status.event.getTrigger().num > 1) return 1;
                        return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('bilibili_zhengjun');
                        player.gain(player.getCards('e'), 'gain2');
                        player.chooseCard('整军：打出一张装备牌，然后防止此伤害', { type: 'equip' }, true);
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        player.respond(result.cards, 'highlight', 'noOrdering');
                        trigger.cancel();
                    }
                },
            },
            //生熏鱼
            bilibili_jinyan: {
                unique: true,
                mod: {
                    playerEnabled(card, player, target) {
                        if (_status.currentPhase != player || target == player) return;
                        if (player.getHistory('useCard', function (evt) {
                            if (evt.card.name == 'qizhengxiangsheng') return false;
                            return evt.targets && evt.targets.includes(target);
                        }).length && card.name != 'qizhengxiangsheng') return false;
                    },
                },
            },
            bilibili_hehu: {
                unique: true,
                global: 'bilibili_hehu_global',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return event.player != player && event.player.countCards('he');
                },
                logTarget: 'player',
                forced: true,
                content() {
                    'step 0'
                    //2%几率直接击杀熏鱼
                    if (Math.random() < 0.02) {
                        trigger.player.line(player);
                        trigger.player.chat('关爱个der');
                        player.die().set('source', trigger.player);
                        event.finish();
                        return;
                    }
                    trigger.player.chooseCard('交给' + get.translation(player) + '两张牌以示对其的关爱', true, 'he', 2, (card, player) => get.name(card).indexOf('bilibili_duoyang_') == -1);
                    'step 1'
                    if (result.bool) {
                        trigger.player.give(result.cards, player);
                        var skill = 'bilibili_hehu_' + player.playerid;
                        if (!lib.skill[skill]) {
                            lib.skill[skill] = {};
                            lib.translate[skill] = '呵护熏鱼<br>关爱熏鱼';
                        }
                        trigger.player.draw(2).gaintag = [skill];
                        trigger.player.gain(lib.card.ying.getYing(2), 'gain2').gaintag.add(skill);
                    }
                },
                subSkill: {
                    global: {
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.hasGaintag('poxiang')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == 'phaseDiscard' && card.hasGaintag('poxiang')) return false;
                            },
                            playerEnabled(card, player, target) {
                                if (card.cards) {
                                    for (var i of card.cards) {
                                        if (i.hasGaintag('bilibili_hehu_' + target.playerid)) return false;
                                    }
                                }
                                else if (get.itemtype(card) == 'card') {
                                    if (card.hasGaintag('bilibili_hehu_' + target.playerid)) return false;
                                }
                            },
                        },
                    },
                },
            },
            bilibili_yutai: {
                unique: true,
                init: () => game.addGlobalSkill('tianzuo_global'),
                getNum(player = _status.event.player) {
                    var num = 1 + (player.getStat('skill')['bilibili_yutai'] || 0);
                    if (game.hasPlayer2(function (current) {
                        return current.name1 == 'bilibili_suixingsifeng' || current.name2 == 'bilibili_suixingsifeng';
                    })) return num;
                    return Math.min(num, 3);
                },
                enable: 'chooseToUse',
                filterCard: true,
                selectCard: () => lib.skill.bilibili_yutai.getNum(_status.event.player),
                position: 'hes',
                viewAs: { name: 'qizhengxiangsheng' },
                viewAsFilter(player) {
                    if (player.countCards('hes') < lib.skill.bilibili_yutai.getNum(player)) return false;
                },
                prompt: () => '将' + get.cnNumber(lib.skill.bilibili_yutai.getNum(_status.event.player)) + '张牌当作【奇正相生】使用',
                check(card) {
                    var player = _status.event.player;
                    if (player.countCards('h') > player.needsToDiscard()) return 8 - get.value(card);
                    return 5 - get.value(card);
                },
                ai: { order: () => get.order({ name: 'qizhengxiangsheng' }) },
            },
            //Fire.win
            bilibili_tixiang: {
                group: ['bilibili_tixiang_log'],
                unique: true,
                trigger: { global: 'roundStart' },
                forced: true,
                priority: 10,
                content() {
                    'step 0'
                    var list = [];
                    var group = ['wei', 'shu', 'wu', 'qun', 'jin'][player.countMark('bilibili_tixiang') % 5];
                    while (list.length < 2) {
                        var name = Object.keys(lib.character).filter(function (name) {
                            if (list.includes(name) || lib.filter.characterDisabled(name)) return false;
                            var double = get.is.double(name, true);
                            return (double ? double.includes(group) : lib.character[name][1] == group) && lib.character[name][3].filter(function (skill) {
                                return !get.skillCategoriesOf(skill, player).length;
                            }).length;
                        }).randomGet();
                        if (name) {
                            list.push(name);
                            player.flashAvatar('bilibili_tixiang', name);
                            for (var skill of lib.character[name][3].filter(function (skill) {
                                return !get.skillCategoriesOf(skill, player).length;
                            })) player.addTempSkill(skill, 'roundStart');
                        }
                        else break;
                    }
                    'step 1'
                    player.addMark('bilibili_tixiang', 1, false);
                },
                subSkill: {
                    log: {
                        trigger: { player: ['useSkillAfter', 'logSkill'] },
                        filter(event, player) {
                            if (event.type != 'player') return false;
                            var skill = event.sourceSkill || event.skill;
                            return !get.skillCategoriesOf(skill, player).length;
                        },
                        forced: true,
                        content() {
                            lib.skill.old_shenzhu.caidan(player);
                        },
                    },
                },
            },
            //？(精灵球)
            bilibili_tiyi: {
                unique: true,
                group: 'bilibili_tiyi_update',
                enable: 'phaseUse',
                filter(event, player) {
                    if (player.hasSkill('bilibili_tiyi_used')) return false;
                    return player.countCards('h') && game.hasPlayer(function (current) {
                        return lib.skill.bilibili_tiyi.filterTarget(null, player, current);
                    });
                },
                filterTarget(card, player, target) {
                    return target != player && target.countCards('h') && !player.getStorage('bilibili_tiyi').includes(target);
                },
                content() {
                    'step 0'
                    player.markAuto('bilibili_tiyi', [target]);
                    'step 1'
                    player.viewHandcards(target);
                    target.viewHandcards(player);
                    'step 2'
                    player.chooseToDebate([player, target]).set('ai', function (card) {
                        return 1 + Math.random();
                    }).set('aiCard', function (target) {
                        return { bool: true, cards: [player.getCards('h').randomGet()] };
                    }).set('callback', lib.skill.bilibili_tiyi.callback);
                },
                callback() {
                    var result = event.debateResult;
                    var target = event.getParent(2).target;
                    if (result.opinion) {
                        if (result.red.length) {
                            player.recover();
                            target.recover();
                        }
                        if (result.black.length) {
                            player.draw(2);
                            target.addTempSkill('bilibili_tiyi_yingzi', { player: 'phaseAfter' });
                            target.addMark('bilibili_tiyi_yingzi', 1, false);
                        }
                    }
                    else {
                        player.line(target);
                        target.damage();
                    }
                },
                intro: { content: '已和$进行过议论' },
                ai: {
                    order: 7,
                    result: {
                        player(player, target) {
                            var num1 = player.getCards('h').reduce(function (arr, card) {
                                return arr.add(get.suit(card, player)), arr;
                            }, []).length;
                            var num2 = target.getCards('h').reduce(function (arr, card) {
                                return arr.add(get.suit(card, target)), arr;
                            }, []).length;
                            if (num1 == 1 && num2 == 1) {
                                return get.color(player.getCards('h')[0], player) == get.color(target.getCards('h')[0], target) ? 1 : -1;
                            }
                            return 1;
                        },
                    },
                },
                subSkill: {
                    used: { charlotte: true },
                    yingzi: {
                        mark: true,
                        marktext: '议',
                        charlotte: true,
                        onremove: true,
                        intro: { content: '摸牌阶段多摸#张牌，手牌上限+#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('bilibili_tiyi_yingzi');
                            },
                        },
                        trigger: { player: 'phaseDrawBegin2' },
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        direct: true,
                        content() {
                            trigger.num += player.countMark('bilibili_tiyi_yingzi');
                        },
                    },
                    update: {
                        trigger: { player: 'useSkillAfter', global: 'dieAfter' },
                        filter(event, player) {
                            return !game.hasPlayer(function (current) {
                                if (player == current) return false;
                                return !player.getStorage('bilibili_tiyi').includes(current);
                            }) && (event.name == 'die' || event.skill == 'bilibili_tiyi');
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.unmarkSkill('bilibili_tiyi');
                            delete player.storage.bilibili_tiyi;
                            player.addTempSkill('bilibili_tiyi_used');
                        },
                    },
                },
            },
            bilibili_zili: {
                unique: true,
                init(player) {
                    if (!player.storage.bilibili_zili) player.storage.bilibili_zili = [0, 0];
                },
                mod: {
                    maxHandcardBase(player, num) {
                        if (player.storage.bilibili_zili && player.storage.bilibili_zili[1]) return player.storage.bilibili_zili[1] + 1;
                    },
                },
                intro: {
                    markcount: () => undefined,
                    content(list) {
                        var bool1 = (list[0] && typeof list[0] == 'number');
                        var bool2 = (list[1] && typeof list[1] == 'number');
                        var str = '';
                        if (bool1) str += '<li>摸牌阶段额定摸牌数为' + (list[0] + 1);
                        if (bool1 && bool2) str += '<br>';
                        if (bool2) str += '<li>手牌上限视为' + (list[1] + 1);
                        return str;
                    },
                },
                group: 'bilibili_zili_record',
                trigger: { player: 'phaseDrawBegin' },
                filter(event, player) {
                    return player.storage.bilibili_zili && player.storage.bilibili_zili[0];
                },
                forced: true,
                content() {
                    trigger.num = player.storage.bilibili_zili[0] + 1;
                },
                subSkill: {
                    record: {
                        trigger: { global: ['phaseDrawAfter', 'phaseDiscardAfter'] },
                        filter(event, player) {
                            if (event.player == player) return false;
                            var storage = player.storage.bilibili_zili;
                            var num = ['phaseDraw', 'phaseDiscard'].indexOf(event.name);
                            if (!storage[num]) return true;
                            return (num == 0 ? event.num : event.player.getHandcardLimit()) > storage[num];
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            var storage = player.storage.bilibili_zili;
                            var num = ['phaseDraw', 'phaseDiscard'].indexOf(trigger.name);
                            storage[num] = (num == 0 ? trigger.num : trigger.player.getHandcardLimit());
                            player.markSkill('bilibili_zili');
                        },
                    },
                },
            },
            //随性似风
            bilibili_daili: {
                init(player) {
                    player.addSkill('bilibili_daili_unmark');
                },
                onremove(player) {
                    player.removeSkill('bilibili_daili_unmark');
                },
                unique: true,
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    if (player.countCards('s', function (card) {
                        return card.hasGaintag('bilibili_daili_tag');
                    })) return true;
                    return lib.skill.bilibili_daili.checkx(player);
                },
                checkx(player) {
                    if (game.roundNumber <= 1) return false;
                    return game.hasPlayer2(current => {
                        if (current == player) return false;
                        return current.getRoundHistory('useCard', evt => {
                            return evt.cards && evt.cards.some(card => get.type(card, null, false) == 'basic' || get.type(card, null, false) == 'trick');
                        }, 1).length;
                    });
                },
                forced: true,
                content() {
                    'step 0'
                    var cards = player.getCards('s', function (card) {
                        return card.hasGaintag('bilibili_daili_tag');
                    });
                    if (cards.length) player.loseToDiscardpile(cards);
                    if (!lib.skill.bilibili_daili.checkx(player)) event.finish();
                    'step 1'
                    var cards = [];
                    for (var current of game.filterPlayer2()) {
                        if (current == player) continue;
                        var list = current.getRoundHistory('useCard', evt => {
                            return evt.cards && evt.cards.some(card => get.type(card, null, false) == 'basic' || get.type(card, null, false) == 'trick');
                        }, 1).reduce((list, evt) => { list.addArray(evt.cards); return list; }, []);
                        list = list.filter(i => !cards.includes(i));
                        if (list.length) cards.add(list.randomGet());
                    }
                    for (var card of cards) {
                        cards[cards.indexOf(card)] = game.createCard2(card.name, card.suit, card.number, card.nature);
                    }
                    if (cards.length) player.gain(cards, 'gain2').gaintag.add('bilibili_daili_tag');
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('bilibili_daili_tag')) return num + 0.5;
                    },
                },
                subSkill: {
                    unmark: {
                        charlotte: true,
                        trigger: {
                            player: ['loseAfter'],
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            var evt = event.getl(player);
                            if (!evt || !evt.cards || !evt.cards.length) return false;
                            if (event.name == 'lose') {
                                for (var i in event.gaintag_map) {
                                    if (event.gaintag_map[i].includes('bilibili_daili_tag')) return true;
                                }
                                return false;
                            }
                            return player.hasHistory('lose', function (evt) {
                                if (event != evt.getParent()) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('bilibili_daili_tag')) return true;
                                }
                                return false;
                            });
                        },
                        direct: true,
                        priority: 11 + 45 + 14,
                        content() {
                            'step 0'
                            var cardx = []
                            var cards = trigger.getl(player).cards, ids = [];
                            if (trigger.name == 'lose') {
                                for (var i in trigger.gaintag_map) {
                                    if (trigger.gaintag_map[i].includes('bilibili_daili_tag')) ids.push(i);
                                }
                            }
                            else player.getHistory('lose', function (evt) {
                                if (trigger != evt.getParent()) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('bilibili_daili_tag')) ids.push(i);
                                }
                            });
                            for (var card of cards) {
                                if (ids.includes(card.cardid)) cardx.push(card);
                            }
                            game.cardsGotoSpecial(cardx);
                            game.log(cardx, '已移出游戏');
                            'step 1'
                            if (!player.countCards('s', function (card) {
                                return card.hasGaintag('bilibili_daili_tag');
                            })) player.unmarkSkill('bilibili_daili');
                        },
                    },
                },
            },
            bilibili_daili_tag: {},
            bilibili_duoyang: {
                unique: true,
                derivation: ['bilibili_duoyang_faq', 'jianxiong', 'rende', 'zhiheng'],
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                forced: true,
                content() {
                    game.addGlobalSkill('bilibili_duoyangx');
                    game.addGlobalSkill('bilibili_duoyangx_jianxiong');
                    game.addGlobalSkill('bilibili_duoyangx_rende');
                    game.addGlobalSkill('bilibili_duoyangx_zhiheng');
                    var names = ['caocao', 'liubei', 'sunquan'];
                    var skills = ['jianxiong', 'rende', 'zhiheng'];
                    var cards = [];
                    for (var i = 0; i < 3; i++) {
                        var card = 'bilibili_duoyang_' + skills[i];
                        lib.card[card] = {
                            fullimage: true,
                            image: 'character:' + names[i],
                            ai: { basic: { value: 11 + 45 + 14 + 19 + 19 + 810 } },
                        };
                        lib.translate[card] = lib.translate[skills[i]];
                        lib.translate['bilibili_duoyangx_' + skills[i]] = lib.translate[skills[i]];
                        lib.translate[card + '_info'] = '<li>此牌在手牌中时，视为拥有技能【' + lib.translate[skills[i]] + '】' + '<br><li>' + lib.translate[skills[i] + '_info'];
                        lib.translate['bilibili_duoyangx_' + skills[i] + '_info'] = lib.translate[skills[i] + '_info'];
                        cards.push(game.createCard(card, 'heart', '10'));
                    }
                    player.gain(cards.reverse(), 'gain2');
                },
            },
            bilibili_duoyangx: {
                mod: {
                    ignoredHandcard(card, player) {
                        if (['bilibili_duoyang_jianxiong', 'bilibili_duoyang_rende', 'bilibili_duoyang_zhiheng'].includes(get.name(card))) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && ['bilibili_duoyang_jianxiong', 'bilibili_duoyang_rende', 'bilibili_duoyang_zhiheng'].includes(get.name(card))) return false;
                    },
                    canBeDiscarded(card) {
                        if (['bilibili_duoyang_jianxiong', 'bilibili_duoyang_rende', 'bilibili_duoyang_zhiheng'].includes(get.name(card))) return false;
                    },
                    canBeGained(card) {
                        if (['bilibili_duoyang_jianxiong', 'bilibili_duoyang_rende', 'bilibili_duoyang_zhiheng'].includes(get.name(card))) return false;
                    },
                },
                //group:['bilibili_duoyangx_jianxiong','bilibili_duoyangx_rende','bilibili_duoyangx_zhiheng'],
                subSkill: {
                    jianxiong: {
                        audio: 'jianxiong',
                        inherit: 'jianxiong',
                        filter(event, player) {
                            return lib.skill.jianxiong.filter(event, player) && player.countCards('h', { name: 'bilibili_duoyang_jianxiong' });
                        },
                        ai: {},
                    },
                    rende: {
                        audio: 'rende',
                        inherit: 'rende',
                        filter(event, player) {
                            return player.countCards('h', { name: 'bilibili_duoyang_rende' });
                        },
                        check(card) {
                            if (ui.selected.cards.length > 1) return 0;
                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                            if (!ui.selected.cards.length && card.name == 'du') return 20;
                            var player = get.owner(card);
                            var num = 0;
                            var evt2 = _status.event.getParent();
                            var num = 0;
                            player.getHistory('lose', function (evt) {
                                if (evt.getParent().skill == 'bilibili_duoyangx_rende' && evt.getParent(3) == evt2) num += evt.cards.length;
                            });
                            if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                                if (ui.selected.cards.length) {
                                    return -1;
                                }
                                if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                if (player.countCards('h') > 2) return 6 - get.value(card);
                                return -1;
                            }
                            return 10 - get.value(card);
                        },
                        content() {
                            player.give(cards, target);
                            var evt2 = event.getParent(3);
                            var num = 0;
                            player.getHistory('lose', function (evt) {
                                if (evt.getParent(2).name == 'bilibili_duoyangx_rende' && evt.getParent(5) == evt2) num += evt.cards.length;
                            });
                            if (num < 2 && num + cards.length > 1) player.recover();
                        },
                    },
                    zhiheng: {
                        audio: 'zhiheng',
                        inherit: 'zhiheng',
                        filter(event, player) {
                            return player.countCards('h', { name: 'bilibili_duoyang_zhiheng' });
                        },
                    },
                },
            },
            bilibili_liaoxing: {
                trigger: { global: ['gameDrawBegin', 'gameDrawAfter'] },
                forced: true,
                content() {
                    if (event.triggername == 'gameDrawBegin') {
                        const numx = trigger.num, me = player;
                        trigger.num = function (player) {
                            const num = (typeof numx == "function" ? numx(player) : numx);
                            return player != me ? num : Math.max(game.players.length + game.dead.length, num);
                        };
                        return;
                    }
                    const players = game.filterPlayer(current => current != player);
                    player.line(players);
                    players.forEach(target => target.addGaintag(target.getCards('h'), 'bilibili_liaoxing_tag'));
                },
                group: ['bilibili_liaoxing_lose', 'bilibili_liaoxing_draw'],
                subSkill: {
                    tag: {},
                    lose: {
                        trigger: { global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'] },
                        filter(event, player) {
                            return lib.skill.bilibili_liaoxing.subSkill.lose.logTarget(event, player).length;
                        },
                        logTarget(event, player) {
                            return game.filterPlayer(current => {
                                var evt = event.getl(current);
                                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                if (event.name == 'lose') {
                                    for (var i in event.gaintag_map) {
                                        if (event.gaintag_map[i].includes('bilibili_liaoxing_tag')) return true;
                                    }
                                    return false;
                                }
                                return current.hasHistory('lose', function (evt) {
                                    if (event != evt.getParent()) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('bilibili_liaoxing_tag')) return true;
                                    }
                                    return false;
                                });
                            });
                        },
                        forced: true,
                        content() {
                            var targets = lib.skill.bilibili_liaoxing.subSkill.lose.logTarget(trigger, player).sortBySeat();
                            while (targets.length) {
                                var target = targets.shift(), num = 0;
                                if (trigger.name == 'lose') {
                                    for (var i in trigger.gaintag_map) {
                                        if (trigger.gaintag_map[i].includes('bilibili_liaoxing_tag')) num++;
                                    }
                                }
                                else target.getHistory('lose', function (evt) {
                                    if (trigger != evt.getParent()) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('bilibili_liaoxing_tag')) num++;
                                    }
                                    return false;
                                });
                                if (num) target.gain(lib.card.ying.getYing(num), 'gain2');
                            }
                        },
                    },
                    draw: {
                        trigger: { global: ['loseAfter', 'loseAsyncAfter'] },
                        filter(event, player) {
                            return game.hasPlayer2(current => {
                                var evt = event.getl(current);
                                return evt?.cards2?.some(card => card.name == 'ying');
                            });
                        },
                        forced: true,
                        content() {
                            var num = 0;
                            game.countPlayer2(current => {
                                var evt = trigger.getl(current);
                                if (evt?.cards2) num += evt.cards2.filter(card => card.name == 'ying').length;
                            });
                            if (num) player.draw(num);
                        },
                    },
                },
            },
            //萌新测试技能
            bilibili_mx_kanpo: {
                unique: true,
                trigger: { global: ['useSkillBegin', 'chooseTargetEnd', 'chooseCardTargetEnd', 'chooseToUseEnd', 'chooseToCompareEnd', 'choosePlayerCardEnd', 'discardPlayerCardEnd', 'gainPlayerCardEnd'] },
                filter(event, player) {
                    if (event.bilibili_mx_kanpo || player == event.player) return false;
                    var targets, skill;
                    if (['chooseTarget', 'chooseCardTarget', 'chooseToUseEnd', 'chooseToCompareEnd',
                        'choosePlayerCardEnd', 'discardPlayerCardEnd', 'gainPlayerCardEnd'].includes(event.name)) {
                        targets = event.result.targets;
                        skill = event.getParent().name;
                    }
                    else {
                        targets = event.targets;
                        skill = event.skill;
                    }
                    if (!skill || skill == 'bilibili_mx_kanpo') return false;
                    var info = get.info(skill);
                    if (!info || info.charlotte || info.ruleSkill) return false;
                    return targets?.includes(player);
                },
                prompt2(event, player) {
                    var skill = ['chooseTarget', 'chooseCardTarget', 'chooseToUseEnd', 'chooseToCompareEnd',
                        'choosePlayerCardEnd', 'discardPlayerCardEnd', 'gainPlayerCardEnd'].includes(event.name) ? event.getParent().name : event.skill;
                    return get.translation(event.player) + '对你发动了' + '【' + get.translation(skill) + '】，是否令【' + get.translation(skill) + '】对你无效？';
                },
                check(event, player) {
                    var att = get.sgn(get.attitude(player, event.player));
                    if (att < 0) return true;
                    if (att == 0) return get.attitude(event.player, player) <= 0;
                    return false;
                },
                logTarget: 'player',
                content() {
                    trigger.bilibili_mx_kanpo = true;
                    let skill;
                    if (['chooseTarget', 'chooseCardTarget', 'chooseToUseEnd', 'chooseToCompareEnd',
                        'choosePlayerCardEnd', 'discardPlayerCardEnd', 'gainPlayerCardEnd'].includes(trigger.name)) {
                        trigger.result.targets.remove(player);
                        skill = trigger.getParent().name;
                    }
                    else {
                        trigger.targets.remove(player);
                        skill = trigger.skill;
                    }
                    game.log(trigger.player, '的', '#g【' + get.translation(skill) + '】', '被', player, '无效了');
                },
            },
            bilibili_xuxiang: {
                audio: 'haoshi2',
                audioname2: {
                    vtb_xiaosha: 'bilibili_xuxiang_xiaosha',
                    vtb_xiaotao: 'bilibili_xuxiang_xiaotao',
                    vtb_xiaoshan: 'bilibili_xuxiang_xiaoshan',
                    vtb_xiaojiu: 'bilibili_xuxiang_xiaojiu',
                    vtb_xiaole: 'bilibili_xuxiang_xiaole',
                },
                trigger: { player: 'damageBefore' },
                forced: true,
                content() {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    nothunder: true,
                    nodamage: true,
                    effect: {
                        target(card, player, target, current) {
                            if (!player.hasSkillTag('jueqing') && get.tag(card, 'damage')) return 0;
                        },
                    },
                },
                subSkill: {
                    xiaosha: { audio: 'ext:活动武将/audio/skill:true' },
                    xiaotao: { audio: 'ext:活动武将/audio/skill:true' },
                    xiaoshan: { audio: 'ext:活动武将/audio/skill:true' },
                    xiaojiu: { audio: 'ext:活动武将/audio/skill:true' },
                    xiaole: { audio: 'ext:活动武将/audio/skill:true' },
                },
            },
            //Empty city°
            bilibili_zhiyou: {
                getList(player) {
                    var list = [];
                    for (var target of game.filterPlayer2()) {
                        if (player == target) continue;
                        target.getAllHistory('useSkill', function (evt) {
                            if (evt.skill == 'bilibili_zhiyou' || evt.type != 'player') return false;
                            var skill = evt.sourceSkill || evt.skill;
                            if (!target.getStockSkills(true, true).includes(skill)) return false;
                            if (player.getStorage('bilibili_zhiyou').includes(skill)) return false;
                            //if(get.skillCategoriesOf(skill,player).length) return false;
                            if (!list.includes(skill)) list.push(skill);
                        });
                    }
                    return list;
                },
                unique: true,
                enable: 'phaseUse',
                filter(event, player) {
                    //if(player.hasSkill('bilibili_zhiyou_remove')) return false;
                    return lib.skill.bilibili_zhiyou.getList(player).length;
                },
                usable: 1,
                content() {
                    'step 0'
                    var list = lib.skill.bilibili_zhiyou.getList(player);
                    var skills = list.randomGets(Math.min(list.length, 3));
                    skills.randomSort();
                    player.chooseControl(skills).set('choiceList', skills.map(function (i) {
                        return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                    })).set('displayIndex', false).set('prompt', '请选择你要获得的技能').set('ai', () => {
                        var skills = _status.event.controls.slice();
                        return skills.sort((a, b) => {
                            return get.skillRank(b, 'in') - get.skillRank(a, 'in');
                        })[0];
                    });
                    'step 1'
                    if (result.control) {
                        player.addSkills(result.control);
                        player.markAuto('bilibili_zhiyou', [result.control]);
                    }
                },
                ai: {
                    order: 12,
                    result: { player: 1 },
                },
                subSkill: {
                    remove: {
                        charlotte: true,
                        onremove: true,
                        trigger: { player: ['useSkill', 'logSkillBegin'] },
                        filter(event, player) {
                            var skills = [player.storage.bilibili_zhiyou_remove];
                            game.expandSkills(skills);
                            return skills.includes(event.skill);
                        },
                        direct: true,
                        firstDo: true,
                        content() {
                            player.removeSkill(player.storage.bilibili_zhiyou_remove);
                            player.removeSkill('bilibili_zhiyou_remove');
                        },
                    },
                },
            },
            bilibili_guanli: {
                mod: {
                    cardUsableTarget(card, player, target) {
                        var targets = game.filterPlayer2(function (target) {
                            return player.getStorage('bilibili_zhiyou').filter(function (skill) {
                                return target.getStockSkills(true, true).includes(skill);
                            }).length;
                        });
                        if (target != player && !targets.includes(target)) return true;
                    },
                    targetInRange(card, player, target) {
                        var targets = game.filterPlayer2(function (target) {
                            return player.getStorage('bilibili_zhiyou').filter(function (skill) {
                                return target.getStockSkills(true, true).includes(skill);
                            }).length;
                        });
                        if (target != player && !targets.includes(target)) return true;
                    },
                },
                unique: true,
                trigger: { global: 'phaseDrawBegin2' },
                filter(event, player) {
                    if (event.numFixed) return false;
                    var targets = game.filterPlayer2(function (target) {
                        return player.getStorage('bilibili_zhiyou').filter(function (skill) {
                            return target.getStockSkills(true, true).includes(skill);
                        }).length;
                    });
                    if (event.player == player) return targets.length;
                    return targets.includes(event.player);
                },
                forced: true,
                logTarget: 'player',
                content() {
                    var targets = game.filterPlayer2(function (target) {
                        return player.getStorage('bilibili_zhiyou').filter(function (skill) {
                            return target.getStockSkills(true, true).includes(skill);
                        }).length;
                    });
                    if (trigger.player == player) trigger.num += targets.length;
                    else {
                        trigger.num += 3;
                        player.addTempSkill('bilibili_guanli_gain', 'phaseDrawAfter');
                        if (!player.storage.bilibili_guanli_gain) player.storage.bilibili_guanli_gain = {};
                        if (!player.storage.bilibili_guanli_gain[trigger.player.playerid]) player.storage.bilibili_guanli_gain[trigger.player.playerid] = 0;
                        player.storage.bilibili_guanli_gain[trigger.player.playerid] += 2;
                    }
                },
                subSkill: {
                    gain: {
                        charlotte: true,
                        onremove: true,
                        trigger: { global: 'phaseDrawEnd' },
                        filter(event, player) {
                            return player.storage.bilibili_guanli_gain[event.player.playerid];
                        },
                        direct: true,
                        content() {
                            'step 0'
                            var num = player.storage.bilibili_guanli_gain[trigger.player.playerid];
                            delete player.storage.bilibili_guanli_gain[trigger.player.playerid];
                            var cards = trigger.player.getCards('he');
                            if (!cards.length) event.finish();
                            else if (cards.length <= num) event._result = { bool: true, cards: cards };
                            else trigger.player.chooseCard('he', '将' + get.cnNumber(num) + '张牌交给' + get.translation(player), num, true);
                            'step 1'
                            if (result.bool) player.gain(result.cards, trigger.player, 'giveAuto');
                        },
                    },
                },
            },
            //雷
            bilibili_Thunder: {
                unique: true,
                nobracket: true,
                group: ['bilibili_Thunder_decade', 'bilibili_Thunder_meihua'],
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    return player.hujia > 0 && player.hujia != 3 - player.countMark('bilibili_Thunder_count');
                },
                forced: true,
                content() {
                    'step 0'
                    player.changeHujia(Math.max(3 - player.countMark('bilibili_Thunder_count') - player.hujia, -player.hujia));
                    'step 1'
                    player.addMark('bilibili_Thunder_count', 1, false);
                },
                subSkill: {
                    count: { charlotte: true, onremove: true },
                    //第一阶段————Thunder十周年武将
                    decade: {
                        trigger: { global: ['useSkillAfter', 'logSkill'] },
                        filter(event, player) {
                            if (event.player == player || !player.hujia || event.type != 'player') return false;
                            var skill = event.sourceSkill || event.skill;
                            if (_status.ThunderSkill && _status.ThunderSkill.includes(skill)) return false;
                            return !get.skillCategoriesOf(skill, event.player).length;
                        },
                        forced: true,
                        content() {
                            var skill = trigger.sourceSkill || trigger.skill;
                            if (!_status.ThunderSkill) _status.ThunderSkill = [];
                            _status.ThunderSkill.push(skill);
                            var card = 'bilibili_Thunder_decade' + skill;
                            lib.card[card] = {
                                fullimage: true,
                                image: 'ext:活动武将/image/character/bilibili_thunderlei.jpg',
                                enable: true,
                                toself: true,
                                filterTarget(card, player, target) {
                                    return target == player;
                                },
                                selectTarget: -1,
                                bilibili_ThunderSkill: skill,
                                async content(event, trigger, player) {
                                    await game.asyncDelayx();
                                    const skill = lib.card[event.card.name].bilibili_ThunderSkill;
                                    if (!player.hasSkill(skill, null, null, false)) await player.addSkills(skill);
                                    else await player.draw(3);
                                    const evt = event.getParent();
                                    if (evt?.name == 'useCard' && evt.cards?.length == 1 && evt.cards[0].name == event.card.name) {
                                        const cards = evt.cards.filterInD();
                                        if (cards.length) {
                                            if (!cards[0].decadeSkill) {
                                                cards[0].decadeSkill = true;
                                                game.log(cards, '已被洗入牌堆');
                                                ui.cardPile.insertBefore(cards[0], ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                                game.updateRoundNumber();
                                            }
                                            else {
                                                game.log(cards, '已被移出游戏');
                                                await game.cardsGotoSpecial(cards);
                                            }
                                        }
                                    }
                                },
                                ai: {
                                    basic: {
                                        order: 114514 + 1919810,
                                        useful: 114514 + 1919810,
                                        value: 114514 + 1919810,
                                    },
                                    result: { target: 1 },
                                },
                            };
                            lib.translate[card] = '雷の制卡·' + lib.translate[skill];
                            lib.translate[card + '_info'] = '<li>使用此牌，获得技能【' + lib.translate[skill] + '】' + '<br><li>' + lib.translate[skill + '_info'];
                            player.gain(game.createCard2(card, lib.suit.randomGet(), get.rand(1, 13)), 'gain2');
                        },
                    },
                    //第二阶段————雷的花样美化————属性提升
                    meihua: {
                        trigger: { player: ['useCard', 'drawBegin'], source: 'damageBegin1' },
                        filter(event, player) {
                            if (!_status.currentPhase || _status.currentPhase != player || player.hujia) return false;
                            return event.name != 'useCard' || (event.targets && event.targets.length && !['jiedao', 'tiesuo', 'wuxie'].includes(event.card.name));
                        },
                        forced: true,
                        content() {
                            if (trigger.name == 'useCard') trigger.effectCount++;
                            else trigger.num += trigger.num;
                        },
                    },
                },
            },
            bilibili_qianxi: {
                unique: true,
                trigger: { player: 'damageBegin4' },
                forced: true,
                content() {
                    if (trigger.num > 1) trigger.num = 1;
                    player.chat('钻研代码中，勿扰');
                    player.addTempSkill('bilibili_qianxi_zuanyan');//钻研
                },
                subSkill: {
                    zuanyan: {
                        mod: {
                            targetEnabled(card, player, target) {
                                if (target != player) return false;
                            },
                        },
                        group: 'sbzhichi_egg',
                        mark: true,
                        intro: { content: '钻研代码中，勿扰' },
                        charlotte: true,
                        trigger: { player: 'damageBefore' },
                        forced: true,
                        content() {
                            trigger.cancel();
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            nofire: true,
                            nothunder: true,
                            nodamage: true,
                            effect: {
                                target(card, player, target, current) {
                                    return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                },
            },
            //群主
            bilibili_meihua: {
                group: 'bilibili_meihua_unmark',
                global: 'bilibili_meihua_global',
                init(player) {
                    game.addGlobalSkill('bilibili_meihua_destroy');
                    for (var i = 1; i <= 5; i++) {
                        if (player.isDisabled(i)) player.enableEquip(i);
                    }
                },
                trigger: { global: 'gameStart', player: ['enterGame', 'disableEquipBefore', 'chooseToDisableBefore'] },
                filter(event, player) {
                    if (event.name == 'disableEquip' || event.name == 'chooseToDisable') return true;
                    return lib.inpile.filter((name) => get.type(name) == 'equip').length;
                },
                forced: true,
                locked: false,
                content() {
                    if (trigger.name == 'disableEquip' || trigger.name == 'chooseToDisable') { trigger.cancel(); return; }
                    var cards = Array.from(ui.cardPile.childNodes).filter(function (card) {
                        return get.type(card) == 'equip';
                    });
                    //player.$gain2(cards,false);
                    player.loseToSpecial(cards, 'bilibili_meihua').visible = true;
                    player.markSkill('bilibili_meihua');
                    game.updateRoundNumber();
                },
                intro: {
                    mark(dialog, storage, player) {
                        dialog.addAuto(player.getCards('s', function (card) {
                            return card.hasGaintag('bilibili_meihua');
                        }));
                    },
                    markcount(storage, player) {
                        return player.getCards('s', function (card) {
                            return card.hasGaintag('bilibili_meihua');
                        }).length;
                    },
                    onunmark(storage, player) {
                        var cards = player.getCards('s', function (card) {
                            return card.hasGaintag('bilibili_meihua');
                        });
                        if (cards.length) {
                            player.lose(cards, ui.discardPile);
                            player.$throw(cards, 1000);
                            game.log(cards, '进入了弃牌堆');
                        }
                    },
                },
                mod: {
                    cardRespondable(card, player) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('bilibili_meihua')) return false;
                    },
                    cardEnabled2(card, player) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('bilibili_meihua')) {
                            if (player.getHistory('lose', function (evt) {
                                if (evt.getParent().name != 'useCard') return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('bilibili_meihua')) return evt.cards.length == 1 && get.subtype(evt.cards[0]) == get.subtype(card) && !evt.getParent().skill;
                                }
                                return false;
                            }).length) return false;
                        }
                    },
                },
                subSkill: {
                    unmark: {
                        charlotte: true,
                        trigger: { player: 'loseAfter' },
                        filter(event, player) {
                            if (!event.ss || !event.ss.length) return false;
                            return !player.countCards('s', function (card) {
                                return card.hasGaintag('bilibili_meihua');
                            });
                        },
                        direct: true,
                        content() {
                            player.unmarkSkill('bilibili_meihua');
                        },
                    },
                    global: {
                        audio: 'wengua',
                        enable: 'phaseUse',
                        filter(event, player) {
                            if (player.hasSkill('bilibili_meihua')) return false;
                            if (!lib.inpile.filter((name) => get.type(name) == 'equip').length) return false;
                            return game.hasPlayer(function (current) {
                                return current.hasSkill('bilibili_meihua');
                            }) && player.countCards('he') && player.countCards('h');
                        },
                        prompt: () => '交给拥有【美化】的一名角色第一张牌，将第二张牌（须为手牌）当作本局游戏牌堆组成的任意装备牌装备之',
                        filterTarget(card, player, target) {
                            return target.hasSkill('bilibili_meihua');
                        },
                        selectTarget() {
                            if (game.countPlayer(function (current) {
                                return current.hasSkill('bilibili_meihua');
                            }) == 1) return -1;
                            return 1;
                        },
                        filterCard(card, player) {
                            return !ui.selected.cards.length || get.position(card) == 'h';
                        },
                        selectCard: 2,
                        check(card) {
                            return 8 - get.value(card);
                        },
                        direct: true,
                        delay: false,
                        discard: false,
                        lose: false,
                        position: 'he',
                        usable: 1,
                        async content(event, trigger, player) {
                            const target = event.target, cards = event.cards;
                            await player.give(cards[0], target);
                            const list = lib.inpile.filter(name => get.type(name) == 'equip').map((i) => ['装备', '', i]);
                            const result = await player.chooseButton(['请选择' + get.translation(cards[1]) + '要转化的装备牌', [list, 'vcard']], true).set('ai', function (button) {
                                var player = _status.event.player;
                                var equip = button.link[2];
                                if (player.hasEmptySlot(get.subtype(equip)) || get.equipValue({ name: button.link[2] }, player) > 0) return get.equipValue({ name: button.link[2] }, player);
                                return (1 + Math.random()) / 1145141919810;
                            }).forResult();
                            if (result.bool) {
                                await player.equip(get.autoViewAs({ name: result.links[0][2] }, [cards[1]]));
                            }
                        },
                        /*
                        content() {
                            'step 0'
                            target.gain(cards[0], player, 'giveAuto');
                            'step 1'
                            var list = lib.inpile.filter((name) => get.type(name) == 'equip').map((i) => ['装备', '', i]);
                            player.chooseButton(['请选择' + get.translation(cards[1]) + '要转化的装备牌', [list, 'vcard']], true).set('ai', function (button) {
                                var player = _status.event.player;
                                var equip = button.link[2];
                                if (player.hasEmptySlot(get.subtype(equip)) || get.equipValue({ name: button.link[2] }, player) > 0) return get.equipValue({ name: button.link[2] }, player);
                                return (1 + Math.random()) / 1145141919810;
                            });
                            'step 2'
                            if (!result.bool) return;
                            var name = result.links[0][2];
                            var MXcard = 'bilibili_meihua_' + name;
                            lib.card[MXcard] = {
                                cardimage: name,
                            };
                            for (var i in lib.card[name]) {
                                if (!lib.card[MXcard][i]) lib.card[MXcard][i] = lib.card[name][i];
                            }
                            lib.translate[MXcard] = '仿卡·' + lib.translate[name].slice(0, 2);
                            lib.translate[MXcard + '_info'] = lib.translate[name + '_info'] + '（由' + get.translation(cards[1]) + '转化）' + '<br><br><span style="font-family:yuanli">by 群主高质量美化</span>';
                            var equip = game.createCard2(MXcard, get.suit(cards[1], false), get.number(cards[1], false));
                            equip.bilibili_meihua = cards[1];
                            player.lose(cards[1], ui.special)._triggered = null;
                            player.chooseUseTarget(equip, true, 'nopopup');
                        },
                        */
                        ai: {
                            order: 7,
                            expose: 0,
                            result: {
                                player(player, target) {
                                    if (!player.hasEmptySlot()) return 0;
                                    var target = game.findPlayer(function (current) {
                                        return current.hasSkill('bilibili_meihua');
                                    });
                                    if (target) return 2 + get.sgn(get.attitude(player, target));
                                },
                            },
                        },
                    },
                    destroy: {
                        charlotte: true,
                        trigger: { player: ['loseBefore', 'gainBefore', 'addJudgeBefore', 'addToExpansionBefore'], global: 'loseAsyncBefore' },
                        filter(event, player) {
                            if (event.name.indexOf('lose') == 0) {
                                var evt = event.getl(player);
                                return evt?.player == player && evt.cards?.some(card => card.bilibili_meihua);
                            }
                            return event.cards.some(card => card.bilibili_meihua);
                        },
                        direct: true,
                        firstDo: true,
                        priority: Infinity,
                        forceDie: true,
                        content() {
                            'step 0'
                            if (trigger.name.indexOf('lose') == 0) {
                                var news = {
                                    hs: [],
                                    es: [],
                                    js: [],
                                    ss: [],
                                    xs: [],
                                    cards: [],
                                    cards2: [],
                                };
                                var evt = trigger.getl(player);
                                var cards = evt.cards.slice(0);
                                event.cards = cards;
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].bilibili_meihua) {
                                        player.addToExpansion([cards[i].bilibili_meihua]).gaintag.add('bilibili_meihua_destroy')._triggered = null;
                                        //lose函数更改后不在角色五个区域内的牌会丢失，所以只能暂时用歪方addToExpansion[doge]，造成的些许停顿暂时无法解决，以后再想办法了
                                        for (var j in news) {
                                            if (evt[j] && evt[j].includes(cards[i])) news[j].push(cards[i].bilibili_meihua);
                                        }
                                    }
                                    else {
                                        for (var j in news) {
                                            if (evt[j] && evt[j].includes(cards[i])) news[j].push(cards[i]);
                                        }
                                    }
                                }
                                for (var k in news) evt[k] = news[k];
                                if (trigger.cards) trigger.cards = news.cards;
                                if (trigger.cards2) trigger.cards2 = news.cards2;
                            }
                            else {
                                var list = [];
                                var cards = trigger.cards.slice(0);
                                event.cards = cards;
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].bilibili_meihua) {
                                        player.addToExpansion([cards[i].bilibili_meihua]).gaintag.add('bilibili_meihua_destroy')._triggered = null;
                                        //lose函数更改后不在角色五个区域内的牌会丢失，所以只能暂时用歪方addToExpansion[doge]，造成的些许停顿暂时无法解决，以后再想办法了
                                        list.push(cards[i].bilibili_meihua);
                                    }
                                    else list.push(cards[i]);
                                }
                                trigger.cards = list;
                            }
                            'step 1'
                            game.cardsGotoSpecial(cards.filter((card) => card.bilibili_meihua));
                        },
                    },
                },
            },
            bilibili_gongyou: {
                derivation: ['xiaoji', 'xuanfeng', 'feiying', 'mashu', 'olqizhou', 'reduanbing', 'reyingzi', 'fenwei', 'lanjiang'],
                init(player) {
                    lib.skill.olqizhou.direct = true;
                    lib.skill.olqizhou.init = function (player) {
                        if (lib.skill.olqizhou.getSuitNum(player) != player.countMark('olqizhou')) lib.skill.olqizhou.applyChange(player);
                    };
                    if (lib.skill.bilibili_gongyou.findDiffierence(player)) player.addAdditionalSkills('bilibili_gongyou', lib.skill.bilibili_gongyou.getList());
                },
                getList() {
                    var list = [];
                    if (game.countPlayer(function (current) {
                        return current.getEquips(1).length;
                    }) >= Math.ceil(game.countPlayer() / 2)) list.push('xiaoji');
                    if (game.countPlayer(function (current) {
                        return current.getEquips(2).length;
                    }) >= Math.ceil(game.countPlayer() / 2)) list.push('xuanfeng');
                    if (game.countPlayer(function (current) {
                        return current.getEquips(3).length;
                    }) >= Math.ceil(game.countPlayer() / 2)) list.push('feiying');
                    if (game.countPlayer(function (current) {
                        return current.getEquips(4).length;
                    }) >= Math.ceil(game.countPlayer() / 2)) list.push('mashu');
                    if (!list.length) list.push('olqizhou');
                    return list;
                },
                findDiffierence(player) {
                    var skills = player.additionalSkills.bilibili_gongyou || [];
                    var list = lib.skill.bilibili_gongyou.getList();
                    if (skills.length != list.length) return true;
                    for (var i = 0; i < skills.length; i++) {
                        if (!list.includes(skills[i])) return true;
                    }
                    return false;
                },
                onremove: true,
                trigger: { global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'phaseBefore', 'dieAfter'] },
                filter(event, player) {
                    if (event.name != 'phase' && event.name != 'die') {
                        var bool = false;
                        game.countPlayer(function (current) {
                            var evt = event.getl(current);
                            if (evt?.es?.length) bool = true;
                        });
                        if (event.name == 'equip') bool = true;
                        if (!bool) return false;
                    }
                    return lib.skill.bilibili_gongyou.findDiffierence(player);
                },
                direct: true,
                locked: false,
                priority: 11 + 45 + 14,
                content() {
                    player.addAdditionalSkills('bilibili_gongyou', lib.skill.bilibili_gongyou.getList());
                },
            },
            //仁望值
            bilibili_renwang: {
                changeMark(player, num) {
                    if (num == 0) return;
                    if (num > 0) {
                        if (player.countMark('bilibili_renwang') >= 5) return;
                        num = Math.min(5 - player.countMark('bilibili_renwang'), num);
                        player.addMark('bilibili_renwang', num, false);
                        game.log(player, '获得了', '#g' + num, '点<span class="bluetext">仁望值</span>');
                    }
                    else {
                        if (!player.hasMark('bilibili_renwang')) return;
                        num = -Math.max(-player.countMark('bilibili_renwang'), num);
                        player.removeMark('bilibili_renwang', num, false);
                        game.log(player, '消耗了', '#y' + num, '点<span class="bluetext">仁望值</span>');
                    }
                },
                getNum(event, player) {
                    var sum = 0;
                    if (game.hasPlayer2(function (current) {
                        var num = 0;
                        current.getHistory('gain', function (evt) {
                            if (evt.getParent('phaseUse') == event) num += evt.cards.length;
                        });
                        return num >= 2;
                    })) sum++;
                    if (game.getGlobalHistory('changeHp', function (evt) {
                        return evt.getParent().name == 'recover' && evt.getParent('phaseUse') == event;
                    }).length) sum++;
                    if (!player.getHistory('sourceDamage', function (evt) {
                        return evt.player != player && evt.getParent('phaseUse') == event;
                    }).length) sum++;
                    return sum;
                },
                ruleSkill: true,
                charlotte: true,
                trigger: { global: 'phaseBefore', player: ['phaseUseEnd', 'enterGame'] },
                filter(event, player) {
                    if (!player.hasSkillTag('renwang_gain') || player.countMark('bilibili_renwang') >= 5) return false;
                    if (event.name == 'phaseUse') return lib.skill.bilibili_renwang.getNum(event, player) > 0;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                direct: true,
                content() {
                    var num = (trigger.name == 'phaseUse' ? lib.skill.bilibili_renwang.getNum(trigger, player) : 1);
                    lib.skill.bilibili_renwang.changeMark(player, num);
                },
                intro: { content: '当前共有#点仁望值' },
            },
            //华歆
            bolyuanqing: {
                audio: 'yuanqing',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h');
                },
                check(card) {
                    var player = _status.event.player;
                    var map = { red: 0, black: 0, none: 0 };
                    for (var target of game.filterPlayer()) {
                        if (target == player || !target.countDiscardableCards(target, 'h')) continue;
                        for (var i in map) {
                            if (target.countCards('h', { color: i })) map[i] += get.sgn(get.attitude(player, target));
                        }
                    }
                    var colors = Object.keys(map).filter(color => map[color] >= 0);
                    return colors.includes(get.color(card, player)) ? (1 + Math.random()) : 0;
                },
                usable: 1,
                position: 'h',
                filterCard: true,
                discard: false,
                lose: false,
                delay: false,
                content() {
                    'step 0'
                    event.cards = [];
                    event.color = get.color(cards[0], player);
                    event.targets = game.filterPlayer().sortBySeat(player);
                    event.targets.remove(player);
                    player.line(event.targets);
                    player.showCards(cards, get.translation(player) + '发动了【渊清】');
                    'step 1'
                    var target = event.targets.shift();
                    event.target = target;
                    target.chooseToDiscard('是否弃置一张' + get.translation(event.color) + '牌，然后摸一张牌？', { color: event.color }).set('ai', card => lib.skill.zhiheng.check(card));
                    'step 2'
                    if (result.bool) {
                        target.draw();
                        if (Array.isArray(result.cards)) event.cards.addArray(result.cards);
                    }
                    else {
                        target.chat('拒绝');
                        game.delayx();
                    }
                    'step 3'
                    if (event.targets.length) event.goto(1);
                    else if (!event.cards.length) event.finish();
                    else player.chooseToMove('渊清：是否将其中一张牌置于牌堆顶？').set('list', [
                        ['弃置的牌', event.cards],
                        ['牌堆顶'],
                    ]).set('filterMove', function (from, to, moved) {
                        if (moved[1].length && to == 1) return false;
                        return true;
                    }).set('filterOk', function (moved) {
                        return moved[1].length == 1;
                    }).set('processAI', function (list) {
                        var cards = list[0][1].slice(0);
                        var cards2 = cards.randomGet();
                        return [[], [cards2]];
                    });
                    'step 4'
                    if (result.bool) {
                        var cardx = result.moved[1];
                        player.$throw(cardx, 1000);
                        game.log(player, '将', cardx, '置于了牌堆顶');
                        while (cardx.length) ui.cardPile.insertBefore(cardx.pop().fix(), ui.cardPile.firstChild);
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        player(player) {
                            var map = { red: 0, black: 0, none: 0 };
                            for (var target of game.filterPlayer()) {
                                if (target == player || !target.countDiscardableCards(target, 'h')) continue;
                                for (var i in map) {
                                    if (target.countCards('h', { color: i })) map[i] += get.sgn(get.attitude(player, target));
                                }
                            }
                            var colors = Object.keys(map).filter(color => map[color] >= 0);
                            return player.countCards('h', { color: colors });
                        },
                    },
                },
            },
            bolshuchen: {
                init(player) {
                    game.addGlobalSkill('bilibili_renwang');
                },
                audio: 'shuchen',
                trigger: { global: 'dying' },
                filter(event, player) {
                    return player.hasMark('bilibili_renwang');
                },
                direct: true,
                content() {
                    'step 0'
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= Math.min(player.countMark('bilibili_renwang'), 3); i++) {
                        var cn = get.cnNumber(i) + '张';
                        map[cn] = i;
                        list.push(cn);
                    }
                    list.push('cancel2');
                    event.map = map;
                    player.chooseControl(list).set('prompt', get.prompt('bolshuchen')).set('prompt2', '消耗任意仁望值并摸等量的牌，然后你可以交给' + get.translation(trigger.player) + '至多等量的牌').set('ai', function () {
                        var player = _status.event.player;
                        var num = Math.min(player.countMark('bilibili_renwang'), 3);
                        return get.cnNumber(num) + '张';
                    });
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('bolshuchen');
                        var num = event.map[result.control] || 1;
                        lib.skill.bilibili_renwang.changeMark(player, -num);
                        event.num = num;
                        player.draw(num);
                        if (trigger.player == player) event.finish();
                    }
                    else event.finish();
                    'step 2'
                    player.chooseCard('疏陈：是否交给' + get.translation(trigger.player) + '至多' + get.cnNumber(event.num) + '张牌', [1, event.num], 'he').set('ai', function (card) {
                        var player = _status.event.player;
                        var trigger = _status.event.getTrigger();
                        if (get.attitude(player, trigger.player) > 0) {
                            var save = ((player.countCards('hs', { name: 'tao' }) + trigger.player.hp) > 0);
                            if (save && get.position(card) == 'h') return get.value(card);
                            return 0;
                        }
                        return card.name == 'du' ? 20 : 0;
                    });
                    'step 3'
                    if (result.bool) {
                        player.line(trigger.player);
                        trigger.player.gain(result.cards, player, 'giveAuto');
                    }
                },
                ai: { renwang_gain: true },
            },
            bolxiezheng: {
                init(player) {
                    game.addGlobalSkill('bilibili_renwang');
                },
                trigger: { player: 'phaseDiscardEnd' },
                filter(event, player) {
                    var cards = [];
                    player.getHistory('lose', function (evt) {
                        if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                    });
                    return cards.length && game.hasPlayer(function (current) {
                        return current.countCards('he');
                    }) && player.hasMark('bilibili_renwang');
                },
                direct: true,
                content() {
                    'step 0'
                    var cards = [];
                    player.getHistory('lose', function (evt) {
                        if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2);
                    });
                    var num = cards.length;
                    event.num = num;
                    player.chooseTarget(get.prompt('bolxiezheng'), '消耗1点仁望值，令一名角色弃置' + get.cnNumber(num) + '张牌', function (card, player, target) {
                        return target.countCards('he');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'guohe_copy2' }, player, player) * Math.min(target.countCards('he'), _status.event.num);
                    }).set('num', num);
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('bolxiezheng', target);
                        lib.skill.bilibili_renwang.changeMark(player, -1);
                        target.chooseToDiscard(num, 'he', true);
                    }
                },
                ai: { renwang_gain: true },
            },
            //张仲景
            bolliaoyi: {
                getList(player) {
                    var types = [], history = player.actionHistory, bool = false;
                    for (var i = history.length - 1; i >= 0; i--) {
                        if (history[i].isSkipped) continue;
                        for (var evt of history[i].lose) {
                            var cards = evt.cards2.filter(cardx => !types.includes(get.type2(cardx, player)));
                            if (!cards.length) continue;
                            for (var card of cards) {
                                if (!types.includes(get.type2(card, player))) types.push(get.type2(card, player));
                            }
                        }
                        if (i < history.length - 1 && history[i].isMe) {
                            bool = true;
                            break;
                        }
                    }
                    return bool ? types : [];
                },
                audio: 'liaoyi',
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return lib.skill.bolliaoyi.getList(target).length;
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    var func = function () {
                        for (var target of game.filterPlayer()) {
                            var list = lib.skill.bolliaoyi.getList(target);
                            if (!list.length) continue;
                            list.sort(function (a, b) {
                                var getNum = function (type) {
                                    var types = ['basic', 'trick', 'equip'];
                                    var num = types.indexOf(type);
                                    if (num == -1) num = 3;
                                    return num;
                                };
                                return getNum(a) - getNum(b);
                            });
                            var str = '';
                            for (var type of list) {
                                str += get.translation(type).slice(0, 1);
                                str += ' ';
                            }
                            str = str.slice(0, -1);
                            target.prompt(str);
                        }
                    };
                    if (event.player == game.me) func();
                    else if (event.isOnline()) player.send(func);
                    player.chooseTarget(get.prompt2('bolliaoyi'), function (card, player, target) {
                        return lib.skill.bolliaoyi.getList(target).length;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return lib.skill.bolliaoyi.getList(target).length * get.sgn(get.attitude(player, target));
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('bolliaoyi', target);
                        var types = lib.skill.bolliaoyi.getList(target);
                        var cards = [];
                        for (var type of types) {
                            var card = get.cardPile(function (card) {
                                return get.type2(card) == type;
                            });
                            if (card) cards.push(card);
                        }
                        if (cards.length) target.gain(cards, 'gain2');
                    }
                },
                ai: { expose: 0.25 },
            },
            bolbinglun: {
                init(player) {
                    game.addGlobalSkill('bilibili_renwang');
                },
                audio: 'binglun',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.hasMark('bilibili_renwang');
                },
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog('###病论###' + lib.translate.bolbinglun_info);
                        dialog.add([[
                            ['1', '消耗至多3点仁望值，令等量角色各选择一项执行'],
                            ['2', '消耗至多3点仁望值，令一名角色选择等量项执行']
                        ], 'textbutton']);
                        return dialog;
                    },
                    filter(button, player) {
                        return button.link == '2' || player.countMark('bilibili_renwang') > 1;
                    },
                    check(button) {
                        var player = _status.event.player;
                        if (player.countMark('bilibili_renwang') == 1) return 1;
                        if (!player.hasFriend()) {
                            if (button.link == '2') return 1;
                            return 0;
                        }
                        if (button.link == '1') return 1;
                        return 0;
                    },
                    backup(links) {
                        return get.copy(lib.skill['bolbinglun_' + links[0]]);
                    },
                    prompt(links, player) {
                        var num = Math.min(3, player.countMark('bilibili_renwang'));
                        if (links[0] == '1') return '请选择至多' + get.cnNumber(num) + '名角色，令这些角色各选择一项执行';
                        return '请选择一名角色，令一名角色选择至多' + get.cnNumber(num) + '项执行';
                    },
                },
                ai: {
                    renwang_gain: true,
                    order: 1,
                    result: { player: 1 },
                },
                subSkill: {
                    damage: {
                        charlotte: true,
                        onremove: true,
                        trigger: { player: 'damageBegin2' },
                        filter(event, player) {
                            return player.hasMark('bolbinglun_damage');
                        },
                        forced: true,
                        content() {
                            trigger.cancel();
                            player.removeMark('bolbinglun_damage', 1, false);
                            if (!player.countMark('bolbinglun_damage')) player.removeSkill('bolbinglun_damage');
                        },
                        intro: { content: '防止接下来的#次伤害' },
                        ai: { nofire: true, nothunder: true, nodamage: true },
                    },
                    backup: { audio: 'binglun' },
                    '1': {
                        audio: 'binglun',
                        filterTarget: true,
                        selectTarget: () => [1, Math.min(3, _status.event.player.countMark('bilibili_renwang'))],
                        multitarget: true,
                        multiline: true,
                        complexTarget: true,
                        complexSelect: true,
                        content() {
                            'step 0'
                            lib.skill.bilibili_renwang.changeMark(player, -targets.length);
                            event.num = 0;
                            event.map = {
                                '摸牌': '将手牌补至与体力值相同（至多摸五张）',
                                '回血': '回复1点体力',
                                '防止伤害': '防止下一次受到的伤害直到回合开始',
                            };
                            event.targets.sortBySeat();
                            'step 1'
                            var target = event.targets[num];
                            event.target = target;
                            var choiceList = [];
                            for (var i in event.map) choiceList.push(event.map[i]);
                            if (!Object.keys(event.map).length) { event.finish(); return; }
                            target.chooseControl(Object.keys(event.map)).set('prompt', '病论：请选择一项').set('ai', function () {
                                var list = _status.event.controls;
                                var player = _status.event.player;
                                var num1 = player.getDamagedHp() * 2;
                                var num2 = Math.min(5, Math.max(0, player.maxHp - player.countCards('h')));
                                if (player.hasSkillTag('nogain')) num2 = 0;
                                if (list.includes('摸牌') && num2 >= num1) return '摸牌';
                                if (list.includes('回血') && num1 > 0) return '回血';
                                if (list.includes('摸牌') && num2 > 0) return '摸牌';
                                if (list.includes('防止伤害')) return '防止伤害';
                                return list.randomGet();
                            }).set('choiceList', choiceList);
                            'step 2'
                            game.log(target, '选择了', '#g' + result.control);
                            delete event.map[result.control];
                            if (result.control == '摸牌') target.draw(Math.min(5, Math.max(0, target.maxHp - target.countCards('h'))));
                            if (result.control == '回血') target.recover();
                            if (result.control == '防止伤害') {
                                target.addTempSkill('bolbinglun_damage', { player: 'phaseBegin' });
                                target.addMark('bolbinglun_damage', 1, false);
                            }
                            'step 3'
                            if (num < targets.length) {
                                event.num++;
                                event.goto(1);
                            }
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    var choice = ['摸牌', '回血', '防止伤害'];
                                    var maxEff = function (current) {
                                        var num1 = current.getDamagedHp() * 2;
                                        var num2 = Math.min(5, Math.max(0, current.maxHp - current.countCards('h')));
                                        if (current.hasSkillTag('nogain')) num2 = 0;
                                        if (num2 >= num1 && choice.includes('摸牌')) return '摸牌';
                                        if (num1 > 0 && choice.includes('回血')) return '回血';
                                        if (num2 > 0 && choice.includes('摸牌')) return '摸牌';
                                        if (choice.includes('防止伤害')) return '防止伤害';
                                        return undefined;
                                    };
                                    var targets = ui.selected.targets;
                                    if (targets.length) {
                                        for (var current of targets) choice.remove(maxEff(current));
                                    }
                                    if (maxEff(target) && choice.includes(maxEff(target))) return choice.length - choice.indexOf(maxEff(target));
                                    return 0;
                                },
                            },
                        },
                    },
                    '2': {
                        audio: 'binglun',
                        filterTarget: true,
                        content() {
                            'step 0'
                            if (player.countMark('bilibili_renwang') > 1) {
                                var map = {};
                                var list = [];
                                for (var i = 1; i <= Math.min(3, player.countMark('bilibili_renwang')); i++) {
                                    var cn = (i + '点');
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                player.chooseControl(list).set('prompt', '消耗至多' + Math.min(3, player.countMark('bilibili_renwang')) + '点仁望值，令' + get.translation(target) + '选择等量项执行').set('ai', function () {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var num = 1;
                                    if (target.maxHp - target.countCards('h') > 0) num++;
                                    if (target.isDamaged()) num++;
                                    num = Math.min(num, Math.min(3, player.countMark('bilibili_renwang')));
                                    return (num + '点');
                                }).set('target', target);
                            }
                            else {
                                event.map = { '1点': 1 };
                                event._result = { control: '1点' };
                            }
                            'step 1'
                            var num = event.map[result.control];
                            lib.skill.bilibili_renwang.changeMark(player, -num);
                            target.chooseButton([
                                '病论：请选择' + get.cnNumber(num) + '项',
                                [[
                                    ['摸牌', '将手牌补至与体力值相同（至多摸五张）'],
                                    ['回血', '回复1点体力'],
                                    ['防止伤害', '防止下一次受到的伤害直到回合开始']
                                ], 'textbutton']
                            ], num, true).set('ai', function (button) {
                                var player = _status.event.player;
                                var num1 = player.getDamagedHp() * 2;
                                var num2 = Math.min(5, Math.max(0, player.maxHp - player.countCards('h')));
                                if (player.hasSkillTag('nogain')) num2 = 0;
                                if (button.link == '摸牌' && num2 >= num1) return 4;
                                if (button.link == '回血' && num1 > 0) return 3;
                                if (button.link == '摸牌' && num2 > 0) return 2;
                                if (button.link == '防止伤害') return 1;
                                return 0.5;
                            });
                            'step 2'
                            var choice = ['摸牌', '回血', '防止伤害'];
                            game.log(target, '选择了', '#g' + result.links.sort((a, b) => choice.indexOf(a) - choice.indexOf(b)));
                            if (result.links.includes('摸牌')) target.draw(Math.min(5, Math.max(0, target.maxHp - target.countCards('h'))));
                            if (result.links.includes('回血')) target.recover();
                            if (result.links.includes('防止伤害')) {
                                target.addTempSkill('bolbinglun_damage', { player: 'phaseBegin' });
                                target.addMark('bolbinglun_damage', 1, false);
                            }
                        },
                        ai: { result: { target: 1 } },
                    },
                },
            },
            //贾南风
            bolduliao: {
                init(player) {
                    if (!_status.gameDrawed) return;
                    for (var target of game.players) {
                        if (!target.hasCard('hs')) continue;
                        var history = game.getAllGlobalHistory('cardMove', function (evt) {
                            if (!evt.cards.some(card => target.getCard('hs').includes(card))) return false;
                            if (evt.name == 'lose') return evt.position == ui.discardPile;
                            return evt.name == 'cardsDiscard';
                        });
                        if (history.length) {
                            var evt = history[history.length - 1];
                            if (lib.skill.bolduliao.getBool(evt, player)) {
                                target.addGaintag(target.getCard('hs', card => evt.cards.includes(card)), skill);
                            }
                        }
                    }
                },
                onremove(player) {
                    var skill = 'bolduliao' + player.playerid;
                    for (var i of game.players) i.removeGaintag(skill);
                },
                initSkill(player) {
                    var skill = 'bolduliao' + player.playerid;
                    game.broadcastAll(skill => {
                        lib.skill[skill] = {};
                        lib.translate[skill] = '毒獠·' + get.translation(player);
                    }, skill);
                },
                getBool(event, player) {
                    if (event.name != 'cardsDiscard') return event.type == 'discard' && event.player == player;
                    var evtx = event.getParent();
                    return evtx.name == 'orderingDiscard' && (evtx.relatedEvent || evtx.getParent()).player == player;
                },
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!event.cards || !event.cards.length) return false;
                    var history = game.getAllGlobalHistory('cardMove', function (evt) {
                        if (!evt.cards.some(card => event.cards.includes(card))) return false;
                        if (evt.name == 'lose') return evt.position == ui.discardPile;
                        return evt.name == 'cardsDiscard';
                    });
                    if (!history.length) return false;
                    var evt = history[history.length - 1];
                    return lib.skill.bolduliao.getBool(evt, player);
                },
                forced: true,
                logTarget: 'player',
                content() {
                    'step 0'
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    game.log(trigger.card, '被无效了');
                    'step 1'
                    game.delayx();
                    'step 2'
                    trigger.player.line(player);
                    player.damage(1, trigger.player);
                },
                group: 'bolduliao_mark',
                subSkill: {
                    mark: {
                        charlotte: true,
                        trigger: { global: ['gainAfter', 'loseAsyncAfter'], player: 'die' },
                        filter(event, player) {
                            if (event.name == 'die') return true;
                            if (!player.isIn()) return false;
                            return game.hasPlayer(function (current) {
                                if (!event.getg(current).length) return false;
                                var history = game.getAllGlobalHistory('cardMove', function (evt) {
                                    if (!evt.cards.some(card => event.getg(current).includes(card))) return false;
                                    if (evt.name == 'lose') return evt.position == ui.discardPile;
                                    return evt.name == 'cardsDiscard';
                                });
                                if (!history.length) return false;
                                var evt = history[history.length - 1];
                                return lib.skill.bolduliao.getBool(evt, player);
                            });
                        },
                        forceDie: true,
                        direct: true,
                        firstDo: true,
                        priority: 114514,
                        content() {
                            if (trigger.name == 'die') lib.skill.bolduliao.onremove(player);
                            else {
                                var skill = 'bolduliao' + player.playerid;
                                if (!lib.skill[skill]) lib.skill.bolduliao.initSkill(player);
                                for (var current of game.players) {
                                    if (!trigger.getg(current).length) continue;
                                    var history = game.getAllGlobalHistory('cardMove', function (evt) {
                                        if (!evt.cards.some(card => trigger.getg(current).includes(card))) return false;
                                        if (evt.name == 'lose') return evt.position == ui.discardPile;
                                        return evt.name == 'cardsDiscard';
                                    });
                                    if (!history.length) continue;
                                    var evt = history[history.length - 1];
                                    if (lib.skill.bolduliao.getBool(evt, player)) current.addGaintag(trigger.getg(current).filter(card => evt.cards.includes(card)), skill);
                                }
                            }
                        },
                    },
                },
            },
            bolhuidu: {
                trigger: { player: 'damageBegin4', source: 'damageBegin3' },
                filter(event, player) {
                    return event.source && event.source.isIn() && event.source.countCards('he', function (card) {
                        return event.source.canRecast(card);
                    }) && (event.source.hasSex('male') || event.source.hasSex('female'));
                },
                direct: true,
                content() {
                    'step 0'
                    if (trigger.source.hasSex('male')) {
                        trigger.source.chooseCard(get.prompt('bolhuidu'), '重铸任意张牌，防止对' + get.translation(player) + '造成的伤害', lib.filter.cardRecastable, [1, Infinity]).set('ai', function (card) {
                            if (_status.event.goon) return lib.skill.zhiheng.check(card) + 1;
                            return 0;
                        }).set('goon', get.damageEffect(player, trigger.source, trigger.source));
                    }
                    else event.goto(2);
                    'step 1'
                    if (result.bool) {
                        player.logSkill('bolhuidu', trigger.source);
                        var cards = result.cards;
                        trigger.source.loseToDiscardpile(cards);
                        trigger.source.draw(cards.length);
                        trigger.cancel();
                    }
                    'step 2'
                    if (!trigger.source.hasSex('female')) event.finish();
                    'step 3'
                    player.chooseBool(get.prompt('bolhuidu', trigger.source), '重铸' + get.translation(trigger.source) + '一个区域的所有牌').set('choice', function () {
                        var att = get.attitude(player, trigger.source);
                        if (att == 0) return false;
                        if (att < 0) return !trigger.source.countCards('h', card => trigger.source.canRecast(card));
                        for (var i of ['h', 'e']) {
                            var cards = trigger.source.getCards(i, card => trigger.source.canRecast(card)), value = 0;
                            if (!cards.length) continue;
                            for (var j of cards) value += get.value(j);
                            value = value / cards.length;
                            if (value <= 5) {
                                return true;
                                break;
                            }
                        }
                        return false;
                    });
                    'step 4'
                    if (result.bool) {
                        var list = [];
                        if (trigger.source.countCards('h')) list.push('手牌区');
                        if (trigger.source.countCards('e')) list.push('装备区');
                        if (!list.length) event.finish();
                        else if (list.length == 1) event._result = { control: list[0] };
                        else player.chooseControl(list).set('target', trigger.source).set('ai', function () {
                            var player = _status.event.player;
                            var target = _status.event.target;
                            var list = _status.event.controls;
                            var att = get.attitude(player, target);
                            if (att == 0) return list.randomGet();
                            if (att < 0) return '装备区';
                            for (var i of ['h', 'e']) {
                                var cards = trigger.source.getCards(i, card => trigger.source.canRecast(card)), value = 0;
                                if (!cards.length) continue;
                                for (var j of cards) value += get.value(j);
                                value = value / cards.length;
                                if (value <= 5) {
                                    return list[['h', 'e'].indexOf(i)];
                                    break;
                                }
                            }
                            return list.randomGet();
                        }).set('prompt', '令' + get.translation(trigger.source) + '重铸一个区域的所有牌');
                    }
                    else event.finish();
                    'step 5'
                    if (result.control) {
                        player.logSkill('bolhuidu', trigger.source);
                        var position = ['h', 'e'][['手牌区', '装备区'].indexOf(result.control)];
                        var cards = trigger.source.getCards(position, card => trigger.source.canRecast(card));
                        if (cards.length) trigger.source.recast(cards);
                    }
                },
            },
            bolfushou: {
                unique: true,
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return !player.isMaxHp();
                },
                juexingji: true,
                forced: true,
                skillAnimation: true,
                animationColor: 'thunder',
                content() {
                    'step 0'
                    player.awakenSkill('bolfushou');
                    'step 1'
                    var cards = [];
                    game.countPlayer2(function (current) {
                        current.getHistory('lose', function (evt) {
                            if (evt.position == ui.discardPile) cards.addArray(evt.cards.filter(card => !cards.includes(card) && get.position(card, true) == 'd'));
                        });
                    });
                    game.getGlobalHistory('cardMove', function (evt) {
                        if (evt.name == 'cardsDiscard') cards.addArray(evt.cards.filter(card => !cards.includes(card) && get.position(card, true) == 'd'));
                    });
                    if (player.countCards('h')) player.loseToDiscardpile(player.getCards('h'))._triggered = null;
                    if (cards.length) player.gain(cards, 'gain2')._triggered = null;
                    game.log(player, '交换了', '#g手牌', '和', '#y本回合弃牌堆');
                    'step 2'
                    var cards1 = Array.from(ui.cardPile.childNodes);
                    var cards2 = Array.from(ui.discardPile.childNodes);
                    if (cards1.length) game.cardsDiscard(cards1);
                    while (cards2.length) ui.cardPile.insertBefore(cards2.pop(), ui.cardPile.firstChild);
                    game.log(player, '交换了', '#g牌堆', '和', '#y弃牌堆');
                    game.updateRoundNumber();
                    'step 3'
                    var num1 = player.maxHp - player.hp;
                    var num2 = player.hp;
                    player.maxHp = num2;
                    if (num1 > 0) player.changeHujia(num1);
                    player.update();
                    game.log(player, '交换了', '#g体力上限', '和', '#y体力值');
                },
            },
            //贱·陈珪
            bolyingtu: {
                audio: 'dcyingtu',
                trigger: { global: ['gainAfter', 'loseAsyncAfter'] },
                filter(event, player) {
                    return lib.skill.dcyingtu.filterx(event, player, player.getPrevious());
                },
                logTarget: (evnet, player) => player.getPrevious(),
                check(event, player) {
                    return lib.skill.dcyingtu.check(player, player.getPrevious());
                },
                content() {
                    'step 0'
                    var target = player.getPrevious();
                    var num = trigger.getg(target).length;
                    event.num = num;
                    player.gainPlayerCard(target, true, 'he', num);
                    'step 1'
                    var he = player.getCards('he');
                    if (he.length) {
                        var target = player.getNext();
                        event.target = target;
                        if (he.length <= num) event._result = { bool: true, cards: he };
                        else player.chooseCard('he', true, num, '交给' + get.translation(target) + get.cnNumber(num) + '张牌');
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        player.line(target);
                        player.give(result.cards, target);
                    }
                },
                group: 'bolyingtu_next',
                global: 'bolyingtu_ai',
                subSkill: {
                    next: {
                        audio: 'dcyingtu',
                        trigger: { global: 'useCardToPlayer' },
                        filter(event, player) {
                            if (event.player != player.getNext() || !event.isFirstTarget) return false;
                            if (event.card.name != 'sha' && event.card.name != 'juedou') return false;
                            return !event.targets.includes(player) && !event.targets.includes(player.getPrevious()) && event.player.canUse(event.card, player.getPrevious(), false);
                        },
                        logTarget: (evnet, player) => player.getNext(),
                        line: false,
                        check(event, player) {
                            var sum = event.targets.reduce((num, target) => {
                                return num + get.effect(target, event.card, event.player, player);
                            }, 0);
                            return sum < get.effect(player.getPrevious(), event.card, event.player, player);
                        },
                        prompt2(event, player) {
                            return '将' + get.translation(event.card) + '转移给' + get.translation(player.getPrevious());
                        },
                        content() {
                            'step 0'
                            var targets = trigger.targets.slice();
                            player.line2([player.getNext(), player.getPrevious()]);
                            trigger.targets.removeArray(targets);
                            trigger.getParent().triggeredTargets1.removeArray(targets);
                            trigger.untrigger();
                            trigger.targets.push(player.getPrevious());
                            'step 1'
                            game.delayx();
                        },
                    },
                    ai: {
                        ai: {
                            effect: {
                                player_use(card, player, target) {
                                    if (!player.getPrevious().hasSkill('bolyingtu')) return;
                                    if (card.name != 'sha' && card.name != 'juedou') return;
                                    var range;
                                    var select = get.copy(get.info(card).selectTarget);
                                    if (select == undefined) {
                                        if (get.info(card).filterTarget == undefined) return false;
                                        range = [1, 1];
                                    }
                                    else if (typeof select == 'number') range = [select, select];
                                    else if (get.itemtype(select) == 'select') range = select;
                                    else if (typeof select == 'function') range = select(card, player);
                                    game.checkMod(card, player, range, 'selectTarget', player);
                                    var targets = game.filterPlayer(targetx => player.canUse(card, targetx));
                                    if (range[1] != -1) {
                                        targets = targets.filter(targetx => get.effect(targetx, card, player, player) > 0);
                                        targets.sort((a, b) => get.effect(b, card, player, player) - get.effect(a, card, player, player));
                                        targets = targets.slice(0, range[1]);
                                    }
                                    if (targets.includes(player.getPrevious().getPrevious())) return;
                                    var sum = targets.reduce((num, targetx) => {
                                        return num + get.effect(targetx, card, player, player.getPrevious());
                                    }, 0);
                                    if (sum < get.effect(player.getPrevious().getPrevious(), card, player, player.getPrevious())) return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                },
            },
            bolcongshi: {
                global: 'bolcongshi_use',
                audio: 'dccongshi',
                trigger: { global: 'damageSource' },
                filter(event, player) {
                    if (!event.card || !event.card.bolcongshi || player.isHealthy()) return false;
                    return event.card.bolcongshi[player.playerid] && event.card.bolcongshi[player.playerid].includes(event.player);
                },
                forced: true,
                content() {
                    player.recover();
                },
                subSkill: {
                    use: {
                        mod: {
                            targetInRange(card, player, target) {
                                if (_status.CongShiCheck || !player.isMaxHp()) return;
                                if (!target.getPrevious().hasSkill('bolcongshi') && !target.getNext().hasSkill('bolcongshi')) return;
                                return true;
                            },
                        },
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            if (!event.targets || !event.targets.length || !player.isMaxHp()) return false;
                            var targets = event.targets.filter(target => target.getPrevious().hasSkill('bolcongshi') || target.getNext().hasSkill('bolcongshi'));
                            if (!targets.length) return false;
                            return targets.some(target => {
                                if (!player.canUse(event.card, target)) return false;
                                _status.CongShiCheck = true;
                                if (!player.canUse(event.card, target)) {
                                    delete _status.CongShiCheck;
                                    return true;
                                }
                                else {
                                    delete _status.CongShiCheck;
                                    return false;
                                }
                            });
                        },
                        firstDo: true,
                        priority: 11 + 45 + 14,
                        forced: true,
                        popup: false,
                        content() {
                            var targetx = trigger.targets.filter(target => {
                                if (!target.getPrevious().hasSkill('bolcongshi') && !target.getNext().hasSkill('bolcongshi')) return false;
                                if (!player.canUse(trigger.card, target)) return false;
                                _status.CongShiCheck = true;
                                if (!player.canUse(trigger.card, target)) {
                                    delete _status.CongShiCheck;
                                    return true;
                                }
                                else {
                                    delete _status.CongShiCheck;
                                    return false;
                                }
                            });
                            var targets = game.filterPlayer(current => {
                                if (!targetx.some(target => current == target.getPrevious() || current == target.getNext())) return false;
                                return current.hasSkill('bolcongshi');
                            });
                            trigger.card.bolcongshi = {};
                            targets.forEach(target => trigger.card.bolcongshi[target.playerid] = targetx.filter(current => current == target.getPrevious() || current == target.getNext()));
                        },
                    },
                },
            },
            yicong_jsp_zhaoyun: { audio: 2 },
            //NBA宿舍群球员宿舍
            dom_chouxiang: {
                dormSkill: true,
                mod: {
                    cardUsableTarget(card, player, target) {
                        if (target != player && target.group == 'mx_dom') return true;
                    },
                    targetInRange(card, player, target) {
                        if (target != player && target.group == 'mx_dom') return true;
                    },
                },
                trigger: { player: ['useCard', 'useSkill', 'logSkillBegin'] },
                filter(event, player) {
                    return (event.targets || event.target) && (event.targets || [event.target]).some(i => i != player && i.group == 'mx_dom');
                },
                logTarget(event, player) {
                    return (event.targets || [event.target]).filter(i => i != player && i.group == 'mx_dom');
                },
                forced: true,
                async content(event, trigger, player) {
                    let loser = [];
                    const targets = (trigger.targets || [trigger.target]).filter(i => i != player && i.group == 'mx_dom');
                    const list = [player].concat(targets);
                    await game.asyncDraw(list);
                    if (!player.countCards('h') || player.hasSkillTag('noCompareSource')) loser.push(player);
                    const losers = targets.filter(i => !player.canCompare(i));
                    loser.addArray(losers);
                    if (targets.some(i => player.canCompare(i))) {
                        const { result: { winner } } = await player.chooseToCompare(targets.filter(i => player.canCompare(i)), card => {
                            return get.number(card);
                        }).setContent('chooseToCompareMeanwhile');
                        loser.addArray(list.filter(i => !winner || winner != i));
                    }
                    if (loser.length) {
                        loser.sortBySeat();
                        player.when({ global: ['useCardAfter', 'useSkillAfter', 'logSkill'] })
                            .filter(evt => evt == event)
                            .then(() => {
                                loser.forEach(i => i.addTempSkill('diaohulishan', 'roundStart'));
                                var cards = Array.from(ui.ordering.childNodes);
                                while (cards.length) {
                                    cards.shift().discard();
                                }
                                var evt = _status.event.getParent('phase');
                                if (evt) {
                                    game.resetSkills();
                                    _status.event = evt;
                                    _status.event.finish();
                                    _status.event.untrigger(true);
                                }
                            }).vars({ loser: loser });
                    }
                },
            },
            //牢狂
            BTmakeBug: {
                charlotte: true,
                trigger: { player: 'phaseEnd' },
                forced: true,
                async content(event, trigger, player) {
                    if (player.countCards('h') < 7) await player.drawTo(7);
                    const target = (game.me.isIn() && !game.me.isFriendOf(player)) ? game.me : game.me.getEnemies().randomGet();
                    let cards = player.getCards('h');
                    if (!cards.length) {
                        player.chat('谁在阻止我提PR？');//[doge]
                        game.over(game.me.isFriendOf(player));
                        return;
                    }
                    const Original = cards.randomGet(), PR = lib.card.list.randomGet();
                    const card = game.createCard(get.name(Original, false), PR[0], PR[1]);
                    cards[cards.indexOf(Original)] = card;
                    const { result: { bool, links } } = await target.chooseButton(['请猜测' + get.translation(player) + '伪装的手牌', cards], true).set('ai', button => {
                        const cards = get.event('cards').slice();
                        const card = cards.find(card => lib.card.list.some(cardx => cardx[2] == get.name(card, false)) && !lib.card.list.some(cardx => cardx[2] == get.name(card, false) && cardx[0] == get.suit(card, false) && cardx[0] == get.number(card, false) && cardx[3] == get.nature(card, false)));
                        return button.link == card ? 3 : 1 + Math.random();
                    }).set('cards', cards);
                    if (bool) {
                        if (links[0] == card) {
                            target.popup('判断正确', 'wood');
                            game.log(target, '猜测', '#g正确');
                        }
                        else {
                            target.popup('判断错误', 'fire');
                            game.log(target, '猜测', '#y错误');
                            player.gain(lib.skill.BTmakeBug.getYing(2), 'gain2');
                            game.cardsGotoPile(lib.skill.BTmakeBug.getYing(20), () => ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)]);
                        }
                    }
                },
                getYing(count) {
                    let cards = [];
                    if (typeof count != 'number') count = 1;
                    while (count--) {
                        let card = game.createCard2('ying', 'none', 114514);
                        cards.push(card);
                    }
                    return cards;
                },
            },
            BTtequ: {
                charlotte: true,
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.countCards('hes', card => get.card(name, player) == 'ying')) return false;
                    return get.inpileVCardList(info => info[0] != 'equip').some(info => event.filterCard({ name: info[2], nature: info[3] }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = get.inpileVCardList(info => info[0] != 'equip').filter(info => event.filterCard({ name: info[2], nature: info[3] }, player, event));
                        return ui.create.dialog('特取', [list, 'vcard']);
                    },
                    filter(button, player) {
                        return get.event().getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
                    },
                    check(button) {
                        if (get.event().getParent().type != 'phase') return 1;
                        const player = get.event('player');
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup(links, player) {
                        return {
                            charlotte: true,
                            filterCard(card, player) {
                                return get.name(card, player) == 'ying';
                            },
                            popname: true,
                            check() { return 1 },
                            position: 'hes',
                            viewAs: { name: links[0][2], nature: links[0][3] },
                        }
                    },
                    prompt(links, player) {
                        return '将一张【影】当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                    }
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name) || !player.countCards('hes')) return false;
                    const type = get.type2(name);
                    return type == 'basic' || type == 'trick';
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes')) return false;
                    },
                    order: 10,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                subSkill: { backup: {} },
            },
            BTguoshou: {
                init() {
                    game.broadcastAll(() => {
                        if (lib.card.ying.destroy) delete lib.card.ying.destroy;
                        lib.translate.ying_info = '此牌堆已被牢狂污染';
                    });
                },
                charlotte: true,
                trigger: { global: ['useCard1', 'damageBefore'] },
                filter(event, player) {
                    if (event.player == player) return false;
                    if (event.name == 'useCard') return event.player != player && get.tag(event.card, 'damage');
                    return !event.source || event.source != player;
                },
                forced: true,
                logTarget: 'player',
                async content(event, trigger, player) {
                    if (trigger.name == 'useCard') trigger.customArgs.default.customSource = player;
                    else trigger.source = player;
                },
                group: 'BTguoshou_win',
                subSkill: {
                    win: {
                        charlotte: true,
                        trigger: { global: ['dieAfter', 'washCard'] },
                        filter(event, player) {
                            if (event.name == 'die') return event.player == game.me;
                            return Array.from(ui.cardPile.childNodes).filter(card => card.name == 'ying').length >= 300;
                        },
                        forced: true,
                        forceDie: true,
                        async content(event, trigger, player) {
                            player.chat('我的PR已经深入了无名杀的骨髓！');//[doge]
                            game.over(game.me.getFriends(true).includes(player));
                        },
                    },
                },
            },
            //知箸侠
            bilibili_huishi: {
                audio: 'shuishi',
                inherit: 'reshuishi',
                unique: true,
                limited: true,
                skillAnimation: true,
                animationColor: 'thunder',
                content() {
                    'step 0'
                    player.awakenSkill('bilibili_huishi');
                    event.cards = [];
                    event.suits = [];
                    'step 1'
                    player.judge(result => {
                        var evt = _status.event.getParent('bilibili_huishi');
                        return 1 - evt?.suits?.includes(get.suit(result));
                    }).set('callback', lib.skill.bilibili_huishi.callback).judge2 = function (result) {
                        return result.bool ? true : false;
                    };
                    'step 2'
                    var cards = cards.filterInD();
                    if (cards.length) {
                        player.chooseTarget('将' + get.translation(cards) + '交给一名角色', true).set('ai', target => {
                            var player = _status.event.player, att = get.attitude(player, target);
                            if (att <= 0) return att;
                            if (target.countCards('h') + _status.event.num >= _status.event.max) att /= 3;
                            if (target.hasSkillTag('nogain')) att /= 10;
                            return att;
                        }).set('num', cards.length).set('max', game.filterPlayer().reduce((num, i) => {
                            return Math.max(num, i.countCards('h'));
                        }, 0));
                    }
                    else event.finish();
                    'step 3'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.line(target, 'green');
                        target.gain(cards, 'gain2').giver = player;
                    }
                    else event.finish();
                    'step 4'
                    if (target.isMaxHandcard()) player.loseMaxHp();
                },
                callback() {
                    'step 0'
                    var evt = event.getParent(2);
                    event.getParent().orderingCards.remove(event.judgeResult.card);
                    evt.cards.push(event.judgeResult.card);
                    if (event.getParent().result.bool && player.maxHp < 10) {
                        evt.suits.push(event.getParent().result.suit);
                        player.gainMaxHp();
                        player.chooseBool('是否继续发动【慧识】？').set('frequentSkill', 'bilibili_huishi');
                    }
                    else event._result = { bool: false };
                    'step 1'
                    if (result.bool) event.getParent(2).redo();
                },
                ai: {
                    order: 0.001,
                    result: { player: 1 },
                },
            },
            //宝神
            bilibili_pojun: {
                audio: 'repojun',
                group: 'repojun_jiaozi',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha' && event.target.countGainableCards(player, 'h');
                },
                logTarget: 'target',
                prompt2(event, player) {
                    return '获得' + get.translation(event.target) + '的所有手牌';
                },
                content() {
                    player.gain(trigger.target.getGainableCards(player, 'h'), player, 'giveAuto', 'bySelf');
                },
                group: 'bilibili_pojun_jiaozi',
                subSkill: {
                    jiaozi: {
                        audio: 'repojun',
                        inherit: 'jiaozi',
                        locked: false,
                    },
                },
            },
            bilibili_baodao: {
                charlotte: true,
                superCharlotte: true,
                trigger: {
                    global: ['gameStart', 'phaseBefore'],
                    player: ['enterGame'],
                },
                filter(event, player) {
                    if (event.name == 'phase' && game.phaseNumber > 0) return false;
                    return player.hasEquipableSlot(1) && !player.getEquips('guding').length;
                },
                forced: true,
                popup: false,
                async content(event, trigger, player) {
                    const card = game.createCard2('guding', 'spade', 1);
                    await player.equip(card);
                    while (get.cardPile('guding')) {
                        await game.cardsGotoSpecial([get.cardPile('guding')]);
                    }
                    for (const target of game.filterPlayer()) {
                        const cards = target.getCards('hejsx', i => i != card && i.name == 'guding');
                        if (cards.length) await target.lose(cards, ui.special);
                    }
                },
                mod: {
                    canBeGained(card, source, player) {
                        if (player.getEquips('guding').includes(card)) return false;
                    },
                    canBeDiscarded(card, source, player) {
                        if (player.getEquips('guding').includes(card)) return false;
                    },
                    canBeReplaced(card, player) {
                        if (player.getEquips('guding').includes(card)) return false;
                    },
                    cardDiscardable(card, player) {
                        if (player.getEquips('guding').includes(card)) return false;
                    },
                    cardEnabled2(card, player) {
                        if (player.getEquips('guding').includes(card)) return false;
                    },
                },
                group: 'bilibili_baodao_blocker',
                subSkill: {
                    blocker: {
                        charlotte: true,
                        superCharlotte: true,
                        trigger: { player: ['loseBefore', 'disableEquipBefore'] },
                        filter(event, player) {
                            if (event.name == 'disableEquip') return event.slots.includes('equip1');
                            var cards = player.getEquips('guding');
                            return event.cards.some(card => cards.includes(card));
                        },
                        forced: true,
                        popup: false,
                        content() {
                            if (trigger.name == 'lose') trigger.cards.removeArray(player.getEquips('guding'));
                            else {
                                while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
                            }
                        },
                    },
                },
            },
            //萌新自设许劭
            bilibili_pingjian: {
                audio: false,//狂神
                trigger: {
                    global: 'phaseBefore',
                    player: ['enterGame', 'subPlayerDie'],
                },
                filter(event, player) {
                    if (!(_status.characterlist || []).some(name => {
                        if (get.is.double(name)) return false;
                        const group = get.character(name).group;
                        return lib.skill.bilibili_pingjian.groups.includes(group) && !player.getStorage('bilibili_pingjianx').includes(group);
                    })) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                groups: ['wei', 'shu', 'wu', 'qun', 'jin'],
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    await player.loseMaxHp();
                    const list = _status.characterlist.slice();
                    let characters = list.filter(name => {
                        if (get.is.double(name)) return false;
                        const group = get.character(name).group;
                        return lib.skill.bilibili_pingjian.groups.includes(group) && !player.getStorage('bilibili_pingjianx').includes(group);
                    }).map(name => {
                        return get.character(name).group;
                    }).unique().sort((a, b) => lib.group.indexOf(a) - lib.group.indexOf(b)).map(group => {
                        return list.filter(name => get.character(name).group == group).randomGets(2);
                    }).flat();
                    const result = await player.chooseButton([
                        '评鉴：请选择一张武将牌',
                        '<div class="text center">将此武将牌作为随从牌，然后将武将牌替换为此随从牌</div>',
                        [characters, 'character'],
                    ], true).set('ai', button => get.rank(button.link, true)).forResult();
                    if (result.bool) {
                        const name = result.links[0];
                        player.markAuto('bilibili_pingjianx', [get.character(name).group]);
                        _status.characterlist.remove(name);
                        const subPlayer = player.addSubPlayer({
                            name: name,
                            skills: get.character(name).skills,
                            sex: get.character(name).sex,
                            hp: 2,
                            maxHp: 2,
                            hs: get.cards(4),
                            group: get.character(name).group,
                            skill: 'bilibili_pingjian',
                            intro: '初始体力值和体力上限为2，手牌数为4',//主将视角
                            intro2: '随从阵亡后切换为原武将牌',//随从视角
                            onremove(player, name) {
                                _status.characterlist.add(name);
                            }
                        });
                        await player.callSubPlayer(subPlayer);
                    }
                },
                init() {
                    if (!_status.characterlist) lib.skill.pingjian.initList();
                },
            },
            //神贾诩
            boljiandai: {
                init(player) {
                    if (!player.isTurnedOver()) {
                        player.classList.toggle("turnedover");
                        game.broadcast(function (player) {
                            player.classList.toggle("turnedover");
                        }, player);
                        game.addVideo("turnOver", player, player.classList.contains("turnedover"));
                    }
                },
                trigger: { player: 'turnOverBefore' },
                filter(event, player) {
                    return player.isTurnedOver();
                },
                forced: true,
                content() {
                    trigger.cancel();
                },
            },
            bolfangcan: {
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    const list = lib.skill.bolfangcan.getCards();
                    return list[0].length == 1 || list[1].length == 1;
                },
                forced: true,
                async content(event, trigger, player) {
                    const list = lib.skill.bolfangcan.getCards();
                    let cards = [];
                    for (const i of list) {
                        if (i.length == 1) cards.addArray(i);
                    }
                    const result = await player.chooseButton(['###纺残###<div class="text center">获得或视为使用其中一张牌</div>', cards], true).set('ai', button => {
                        const player = get.event().player, card = button.link;
                        return player.getUseValue(button.link, true) + get.value(card);
                    }).forResult();
                    if (result.bool) {
                        const choose = result.links[0], vcard = new lib.element.VCard({ name: get.name(choose, player), nature: get.nature(choose, player), isCard: true });
                        if (player.hasUseTarget(vcard, true)) {
                            const result2 = await player.chooseUseTarget(vcard, false, '###纺残###视为使用' + get.translation(vcard) + '，或获得' + get.translation(choose)).forResult();
                            if (result2.bool) return;
                        }
                        await player.gain(choose, 'gain2');
                    }
                },
                getCards() {
                    const history = game.getGlobalHistory('everything', evt => evt.name == 'lose' && evt.position == ui.discardPile).slice().concat(game.getGlobalHistory('cardMove', evt => evt.name == 'cardsDiscard'));
                    const cards = history.reduce((list, evt) => list.addArray(evt.cards.filterInD('d')), []);
                    return [cards.filter(i => get.type(i, false) == 'trick'), cards.filter(i => get.type(i, false) != 'delay' && get.tag(i, 'damage'))];
                },
            },
            boljuemei: {
                trigger: { global: ['recoverEnd', 'loseMaxHpEnd', 'dyingAfter'] },
                filter(event, player) {
                    if (!event.player.isIn() || !player.canEquip(game.createCard('bol_wuqibingfa', 'none', 0), true)) return false;
                    return event.name == 'dying' || event.player.isHealthy();
                },
                forced: true,
                async content(event, trigger, player) {
                    const wuqibingfa = game.createCard('bol_wuqibingfa', 'none', 0);
                    await player.equip(wuqibingfa);
                    if (game.getAllGlobalHistory('everything', evt => {
                        return evt.name == 'boljuemei' && evt.player == player;
                    }).indexOf(event) % 2 == 1 && player.getStockSkills(false, true).length) {
                        await player.removeSkills(player.getStockSkills(false, true)[0]);
                    };
                },
                derivation: 'bol_wuqibingfa',
            },
            bol_wuqibingfa: {
                charlotte: true,
                equipSkill: true,
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (!lib.skill.bol_wuqibingfa.countSkill(player)) return false;
                    const evt = event.getl(player);
                    return evt?.es?.some(card => card.name == 'bol_wuqibingfa');
                },
                forced: true,
                async content(event, trigger, player) {
                    const num = Math.min(game.countPlayer(), lib.skill.bol_wuqibingfa.countSkill(player));
                    const { result: { bool, targets } } = await player.chooseTarget('请选择【吴起兵法】的目标', '令至多' + get.cnNumber(num) + '名角色于本回合结束时将一张手牌当作【杀】使用', [1, num], true).set('ai', target => {
                        const player = get.event().player, sha = new lib.element.VCard({ name: 'sha' });
                        return get.attitude(player, target) * target.getUseValue(sha, true);
                    });
                    if (bool) {
                        player.line(targets);
                        for (const i of targets.slice().sortBySeat()) i.addTempSkill('bol_wuqibingfa_sha');
                    }
                },
                countSkill(player) {
                    return player.getSkills(null, false, false).filter(i => !(get.info(i) || {}).charlotte).length;
                },
                subSkill: {
                    sha: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '本回合结束时，将一张牌当作【杀】使用' },
                        trigger: { global: 'phaseEnd' },
                        filter(event, player) {
                            return player.hasCard(card => player.hasUseTarget(get.autoViewAs({ name: 'sha' }, [card]), true), 'hes');
                        },
                        forced: true,
                        popup: false,
                        content() {
                            const next = player.chooseToUse(true);
                            next.set('openskilldialog', '###吴起兵法###将一张牌当作【杀】使用');
                            next.set('norestore', true);
                            next.set('addCount', false);
                            next.set('_backupevent', 'bol_wuqibingfa_backup');
                            next.set('custom', {
                                add: {},
                                replace: { window() { } }
                            });
                            next.backup('bol_wuqibingfa_backup');
                        },
                    },
                    backup: {
                        filterCard(card) {
                            return get.itemtype(card) == 'card';
                        },
                        position: 'hes',
                        viewAs: { name: 'sha' },
                        filterTarget: lib.filter.filterTarget,
                        check: card => -get.value(card),
                        log: false,
                    },
                },
            },
            bolluoshu: {
                initSkill() {
                    let list, skills = [];
                    if (get.mode() == 'guozhan') {
                        list = Object.keys(lib.characterPack.mode_guozhan).filter(i => lib.character[i]);
                    }
                    else if (_status.connectMode) list = get.charactersOL();
                    else list = Object.keys(lib.character).filter(i => !lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i));
                    for (const i of list) {
                        const iskills = (get.character(i).skills || []);
                        if (i.indexOf('gz_jun') == 0 || !iskills.length) continue;
                        skills.addArray(iskills.filter(j => {
                            const info = (get.info(j) || {});
                            return info.limited && !info.combo && !info.charlotte;
                        }));
                    }
                    const derivation = ['xingshuai', 'xiongyi', 'bolxiongsuan', 'olzaowang', 'qimou', 'xinfencheng', 'yongdi', 'jianshu', 'reluanwu'];
                    _status.bolluoshuList = lib.config.extension_活动武将_ShenJiaXu ? derivation : skills;
                },
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                async content(event, trigger, player) {
                    if (!_status.bolluoshuList) lib.skill.bolluoshu.initSkill();
                    let list = [], goon = player.hasSkill('bolfenfou', null, false, false);
                    if (!goon) list.add('bolfenfou');
                    list.addArray(_status.bolluoshuList.filter(skill => !player.hasSkill(skill, null, false, false)).randomGets(goon ? 3 : 2));
                    if (!list.length) {
                        player.popup('杯具');
                        game.log('已经没有可以获得的技能了！');
                        return;
                    }
                    const skill = await player.chooseControl(list).set('choiceList', list.map(i => {
                        return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                    })).set('displayIndex', false).set('prompt', '络殊：请选择你要获得的技能').set('ai', () => {
                        let list = get.event().controls.slice();
                        return list.sort((a, b) => get.skillRank(b, 'in') - get.skillRank(a, 'in'))[0];
                    }).forResult('control');
                    player.popup(skill);
                    await player.addSkills(skill);
                },
                derivation: ['bolfenfou', 'zhendu'],
            },
            bolfenfou: {
                limited: true,
                unique: true,
                trigger: { global: 'roundStart' },
                logTarget: () => game.filterPlayer().sortBySeat(),
                check: (_, player) => !player.hasUnknown(),
                skillAnimation: true,
                anmiationColor: 'fire',
                async content(event, trigger, player) {
                    player.awakenSkill('bolfenfou');
                    const targets = game.filterPlayer().sortBySeat();
                    let humans = targets.filter(current => current === game.me || current.isOnline());
                    let locals = targets.slice();
                    let choice = {};
                    locals.removeArray(humans);
                    const eventId = get.id();
                    const send = (current, eventId) => {
                        lib.skill.bolfenfou.chooseButton(current, eventId);
                        game.resume();
                    };
                    event._global_waiting = true;
                    let time = 10000;
                    if (lib.configOL && lib.configOL.choose_timeout) time = parseInt(lib.configOL.choose_timeout) * 1000;
                    targets.forEach(current => current.showTimer(time));
                    if (humans.length > 0) {
                        const solve = function (resolve, reject) {
                            return function (result, player) {
                                if (result?.bool) {
                                    choice[player.playerid] = result.links;
                                    resolve();
                                } else reject();
                            };
                        };
                        await Promise.any(
                            humans.map(current => {
                                return new Promise(async (resolve, reject) => {
                                    if (current.isOnline()) {
                                        current.send(send, current, eventId);
                                        current.wait(solve(resolve, reject));
                                    }
                                    else {
                                        const next = lib.skill.bolfenfou.chooseButton(current, eventId);
                                        const solver = solve(resolve, reject);
                                        if (_status.connectMode) game.me.wait(solver);
                                        const result = await next.forResult();
                                        if (_status.connectMode) game.me.unwait(result, current);
                                        else solver(result, current);
                                    }
                                });
                            })
                        ).catch(() => { });
                        game.broadcastAll("cancel", eventId);
                    }
                    if (locals.length > 0) {
                        for (let current of locals) {
                            const result = await lib.skill.bolfenfou.chooseButton(current).forResult();
                            if (result?.bool) {
                                choice[current.playerid] = result.links;
                            }
                        }
                    }
                    delete event._global_waiting;
                    for (let i of targets) i.hideTimer();
                    for (const target of targets) {
                        const controls = choice[target.playerid].map(i => { return { 'turnOver': '翻面', 'draw': '摸牌', 'zhendu': '鸩毒' }[i] })
                        target.popup(controls);
                        game.log(target, '选择了', '#y' + controls);
                        if (choice[target.playerid].includes('turnOver')) await target.turnOver();
                        if (choice[target.playerid].includes('draw')) await target.draw(2);
                        if (choice[target.playerid].includes('zhendu')) {
                            await target.addAdditionalSkills('bolfenfou_zhendu', 'zhendu');
                            target.addTempSkill('bolfenfou_zhendu', 'roundStart');
                        }
                    }
                },
                subSkill: { zhendu: { charlotte: true } },
                chooseButton(player, eventId) {
                    return player.chooseButton(2, [
                        '###纷殕###<div class="text center">选择展示或弃置一张手牌</div>',
                        [[
                            ['turnOver', '将武将牌翻面'],
                            ['draw', '摸两张牌'],
                            ['zhendu', '本轮获得【鸩毒】']
                        ], 'textbutton']
                    ], true).set('filterButton', button => {
                        const player = get.event().player;
                        return button.link != 'zhendu' || !player.hasSkill('zhendu', null, false, false);
                    }).set('ai', button => {
                        const player = get.event().player, text = button.link;
                        if (text == 'turnOver') return (player.isTurnedOver() && !player.hasSkill('boljiandai')) ? 100 : 1;
                        if (text == 'draw') return 50;
                        return 20;
                    }).set('id', eventId).set('_global_waiting', true);
                },
            },
            bolxiongsuan: {
                limited: true,
                audio: 'xiongsuan',
                enable: 'phaseUse',
                filterCard: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                filterTarget(card, player, target) {
                    return target.group == player.group || target.isFriendOf(player);
                },
                check(card) {
                    return 7 - get.value(card);
                },
                async content(event, trigger, player) {
                    const { target } = event;
                    player.awakenSkill(event.name);
                    await target.damage('nocard');
                    await player.draw(3);
                    const list = [];
                    const skills = target.getOriginalSkills();
                    for (let skill of skills) {
                        if (lib.skill[skill].limited && target.awakenedSkills.includes(skill)) {
                            list.push(skill);
                        }
                    }
                    if (!list.length) return;
                    const skill = list.length == 1 ? list[0] : await player.chooseControl(list).set('choiceList', list.map(i => {
                        return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                    })).set('displayIndex', false).set('prompt', `选择${get.translation(target)}一个限定技在回合结束后其重置之`).forResult('control');
                    target.when({ global: 'phaseEnd' }).step(async () => {
                        target.restoreSkill(skill);
                        target.popup(get.translation(skill));
                        game.log(target, '恢复了技能', `#g${get.translation(skill)}`);
                    });
                },
                ai: {
                    order: 4,
                    damage: true,
                    result: {
                        target(player, target) {
                            if (target.hp > 1) {
                                var skills = target.getOriginalSkills();
                                for (var i = 0; i < skills.length; i++) {
                                    if (lib.skill[skills[i]].limited && target.awakenedSkills.includes(skills[i])) {
                                        return 8;
                                    }
                                }
                            }
                            if (target != player) return 0;
                            if (get.damageEffect(target, player, player) >= 0) return 10;
                            if (target.hp >= 4) return 5;
                            if (target.hp == 3) {
                                if (
                                    player.countCards('h') <= 2 &&
                                    game.hasPlayer(function (current) {
                                        return current.hp <= 1 && get.attitude(player, current) < 0;
                                    })
                                ) {
                                    return 3;
                                }
                            }
                            return 0;
                        },
                    },
                },
            },
            //神张飞
            bolbaohe: {
                mod: {
                    cardname(card, player) {
                        if (get.itemtype(card) == 'card' && (get.type(card, null, false) == 'trick' || get.type(card, null, false) == 'delay')) return 'sha';
                    },
                    cardnature(card, player) {
                        if (get.itemtype(card) == 'card' && (get.type(card, null, false) == 'trick' || get.type(card, null, false) == 'delay')) return false;
                    },
                    cardUsable(card, player) {
                        if (card.name == 'sha' && (card.cards || []).length == 1 && (get.type(card.cards[0], null, false) == 'trick' || get.type(card.cards[0], null, false) == 'delay')) return Infinity;
                    },
                },
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    return event.getParent(2)?.name == 'useCard';
                },
                forced: true,
                logTarget: 'player',
                content() {
                    const evt = trigger.getParent(2);
                    trigger.num = (evt.cards || []).reduce((sum, card) => sum + get.cardNameLength(card), 0);
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (!get.tag(card, 'damage')) return;
                            if (!(card.cards || []).length) return 'zeroplayertarget';
                        },
                    },
                },
            },
            bolrenhai: {
                init(player, skill, reinit) {
                    if (!player.storage.bolrenhai || reinit) {
                        player.storage.bolrenhai_tiaozhengED = false;
                        player.storage.bolrenhai = [
                            {
                                num: 1,
                                index: '①',
                                text: ['进行【闪电】判定'],
                                effect_1: {
                                    filter: () => true,
                                    async content(player, source) {
                                        player.executeDelayCardEffect('shandian');
                                    },
                                },
                            },
                            {
                                num: 2,
                                index: '②',
                                text: ['获得【仇海】或【崩坏】'],
                                effect_2: {
                                    filter(player) {
                                        return ['chouhai', 'benghuai'].some(skill => !player.hasSkill(skill, null, false, false));
                                    },
                                    async content(player, source, control) {
                                        let result = {};
                                        player.addSkill('bolrenhai_effect');
                                        const skills = ['chouhai', 'benghuai'].filter(skill => !player.hasSkill(skill, null, false, false));
                                        if (skills.length == 1) result = { control: skills[0] };
                                        else result = await player.chooseControl(skills).set('choiceList', skills.map(i => {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        })).set('displayIndex', false).set('prompt', '人骇：选择获得一个技能').set('ai', () => get.rand(0, 1)).forResult();
                                        await player.addAdditionalSkills('bolrenhai_effect', [result.control], true);
                                    },
                                },
                            },
                            {
                                num: 3,
                                index: '③',
                                text: ['将本项并入邻项'],
                                effect_3: {
                                    filter(player, source) {
                                        return source.storage.bolrenhai.length > 1;
                                    },
                                    async content(player, source, control) {
                                        source.storage.bolrenhai_tiaozhengED = true;
                                        const index = source.storage.bolrenhai.indexOf(control);
                                        const nums = Array.from({ length: source.storage.bolrenhai.length }).map((_, i) => i).filter(num => num == index + 1 || num == index - 1);
                                        for (const num of nums) {
                                            //source.storage.bolrenhai[num].num+=control.num;
                                            source.storage.bolrenhai[num].text.addArray(control.text);
                                            for (const i in control) {
                                                if (!Array.isArray(control[i]) && typeof control[i] == 'object') source.storage.bolrenhai[num][i] = control[i];
                                            }
                                        }
                                        game.log(source, '将第' + get.cnNumber(index + 1, true) + '项合并至第' + nums.map(i => get.cnNumber(i + 1, true)) + '项');
                                        source.storage.bolrenhai.remove(control);
                                    },
                                },
                            },
                            {
                                num: 4,
                                index: '④',
                                text: ['获得【无谋】或【止息】'],
                                effect_4: {
                                    filter(player) {
                                        return ['wumou', 'new_zhixi'].some(skill => !player.hasSkill(skill, null, false, false));
                                    },
                                    async content(player, source, control) {
                                        let result = {};
                                        player.addSkill('bolrenhai_effect');
                                        const skills = ['wumou', 'new_zhixi'].filter(skill => !player.hasSkill(skill, null, false, false));
                                        if (skills.length == 1) result = { control: skills[0] };
                                        else result = await player.chooseControl(skills).set('choiceList', skills.map(i => {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        })).set('displayIndex', false).set('prompt', '人骇：选择获得一个技能').set('ai', () => get.rand(0, 1)).forResult();
                                        await player.addAdditionalSkills('bolrenhai_effect', [result.control], true);
                                    },
                                },
                            },
                        ];
                        if (reinit) {
                            player.popup('人骇');
                            game.log(player, '重置了技能', '#g【人骇】');
                        }
                    }
                },
                trigger: { source: 'damageBegin2' },
                filter(event, player) {
                    return event.num > 0;
                },
                forced: true,
                logTarget: 'player',
                async content(event, trigger, player) {
                    let chooseED = false, target = trigger.player;
                    while (trigger.num > 0) {
                        const { result: { bool, links } } = await target.chooseButton([
                            '###人骇###<div class="text center">选择执行任意项并减免对应数值的伤害<br>当前剩余' + trigger.num + '点伤害</div>',
                            [
                                player.storage.bolrenhai.map(control => {
                                    let list = [control, '减少' + control.num + '点伤害：' + control.text.join('、')], noUse = true;
                                    const effects = Object.keys(control).filter(i => !Array.isArray(control[i]) && typeof control[i] == 'object');
                                    for (const i in control) {
                                        if (!Array.isArray(control[i]) && typeof control[i] == 'object' && control[i].filter(target, player)) {
                                            noUse = false;
                                            break;
                                        }
                                    }
                                    if (noUse) list[1] = '<span style="opacity:0.5">' + list[1] + '（无法选择）</span>';
                                    return list;
                                }),
                                'textbutton',
                            ]
                        ]).set('filterButton', button => {
                            const target = get.event().player, player = get.event().getParent().player;
                            for (const i in button.link) {
                                if (!Array.isArray(button.link[i]) && typeof button.link[i] == 'object' && button.link[i].filter(target, player)) return true;
                            }
                            return false;
                        }).set('ai', button => {
                            const player = get.event().player, trigger = get.event().getTrigger();
                            let num = trigger.num;
                            if (num > 1 && player.hasSkillTag('filterDamage', null, { player: trigger.player, card: trigger.card, })) num = 1;
                            return num - Math.abs(get.event().getTrigger().num - button.link.num);
                        }).set('forced', !chooseED);
                        if (bool) {
                            chooseED = true;
                            const control = links[0];
                            target.popup('-' + control.num);
                            trigger.num -= control.num;
                            game.log(target, '选择了', '#y减少' + control.num + '点伤害：' + control.text.join('、'));
                            const nums = Array.from({ length: 4 }).map((_, i) => i + 1).filter(i => control['effect_' + i] && control['effect_' + i].filter(target, player));
                            if (!nums.length) continue;
                            for (const num of nums) {
                                await control['effect_' + num].content(target, player, control);
                            }
                        }
                        else break;
                    }
                },
                derivation: ['chouhai', 'benghuai', 'wumou', 'new_zhixi'],
                subSkill: { effect: { charlotte: true, onremove: true } },
            },
            boltiandong: {
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer(target => (target.additionalSkills['bolrenhai_effect'] || []).length);
                },
                forced: true,
                async content(event, trigger, player) {
                    let num = 0, result;
                    player.line(game.filterPlayer(target => (target.additionalSkills['bolrenhai_effect'] || []).length));
                    for (const target of game.filterPlayer()) {
                        const skills = (target.additionalSkills['bolrenhai_effect'] || []);
                        if (skills.length) {
                            num += skills.length;
                            await target.removeAdditionalSkills('bolrenhai_effect');
                            target.removeSkill('bolrenhai_effect');
                        }
                    }
                    let cards = Array.from(ui.cardPile.childNodes);
                    if (cards.length) {
                        const max = cards.map(card => get.number(card, false)).unique().sort((a, b) => b - a)[0];
                        cards = cards.filter(card => get.number(card, false) == max).randomGets(num);
                        await player.gain(cards, 'gain2');
                    }
                    if (!player.storage.bolrenhai_tiaozhengED) result = { control: '翻面' };
                    else result = await player.chooseControl('翻面', '还原').set('prompt', '天动：将武将牌翻面，或还原【人骇】').set('ai', () => {
                        const player = get.event().player;
                        return player.isTurnedOver() ? '翻面' : '还原';
                    }).forResult();
                    if (result.control == '翻面') await player.turnOver();
                    else lib.skill.bolrenhai.init(player, 'bolrenhai', true);
                },
            },
            //神张角
            bolyifu: {
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.card.storage && event.card.storage.bolyifu;
                },
                forced: true,
                locked: false,
                content() {
                    player.draw();
                },
                mark: true,
                marktext: '☯',
                zhuanhuanji: 'number',
                zhuanhuanLimit: 3,
                intro: {
                    markcount: (storage) => ['天', '地', '人'][(storage || 0) % 3],
                    content(storage, player) {
                        return '转换技。①一名角色可以将一张基本牌当作【' + ['闪电', '随机应变', '铁索连环'][(storage || 0) % 3] + '】使用。②当你成为〖蚁附①〗转化的牌的目标后，你摸一张牌。';
                    },
                },
                global: 'bolyifu_viewAs',
                subSkill: {
                    viewAs_backup: {},
                    viewAs: {
                        onChooseToUse(event) {
                            if (!game.online && !event.bolyifu) {
                                let list = [['延时锦囊', '', 'shandian', undefined, 0]], player = event.player, history = player.getHistory('useCard', evt => get.type(evt.card) == 'basic' || get.type(evt.card) == 'trick');
                                const evt = history[history.length - 1];
                                if (evt) list.push([get.translation(get.type(evt.card)), '', evt.card.name, evt.card.nature ? evt.card.nature : undefined, 1]);
                                list.push(['锦囊', '', 'tiesuo', undefined, 2]);
                                event.set('bolyifu', list);
                            }
                        },
                        forceaudio: true,
                        enable: 'chooseToUse',
                        filter(event, player) {
                            const list = (event.bolyifu || []);
                            if (!list.length) return false;
                            const nums = game.filterPlayer(target => target.hasSkill('bolyifu')).map(target => target.countMark('bolyifu') % 3);
                            return list.some(card => nums.includes(card[4]) && player.hasCard(cardx => get.type(cardx) == 'basic' && event.filterCard({ name: card[2], nature: card[3], storage: { bolyifu: true }, cards: [cardx] }, player, event), 'hes'));
                        },
                        chooseButton: {
                            dialog(event, player) {
                                const nums = game.filterPlayer(target => target.hasSkill('bolyifu')).map(target => target.countMark('bolyifu') % 3);
                                const list = event.bolyifu.filter(card => nums.includes(card[4]) && player.hasCard(cardx => get.type(cardx) == 'basic' && event.filterCard({ name: card[2], nature: card[3], storage: { bolyifu: true }, cards: [cardx] }, player, event), 'hes'));
                                return ui.create.dialog('蚁附', [list, 'vcard']);
                            },
                            check(button) {
                                if (get.event().getParent().type != 'phase') return 1;
                                const player = get.event('player');
                                return player.getUseValue({ name: button.link[2], nature: button.link[3], storage: { bolyifu: true } });
                            },
                            backup(links, player) {
                                return {
                                    filterCard(card) {
                                        return get.type(card) == 'basic' && get.itemtype(card) == 'card';
                                    },
                                    popname: true,
                                    check(card) {
                                        return 7 - get.value(card);
                                    },
                                    position: 'hes',
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3],
                                        storage: { bolyifu: true },
                                    },
                                    index: links[0][4],
                                    async precontent(event, _, player) {
                                        delete event.result.skill;
                                        const target = game.findPlayer(target => target.hasSkill('bolyifu') && target.countMark('bolyifu') % 3 == lib.skill.bolyifu_viewAs_backup.index);
                                        if (target) {
                                            await target.logSkill('bolyifu', player);
                                            target.changeZhuanhuanji('bolyifu');
                                        }
                                    },
                                }
                            },
                            prompt(links, player) {
                                return '###蚁附###将一张基本牌当作' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】使用';
                            }
                        },
                        hiddenCard(player, name) {
                            if (!player.hasCard(card => get.type(card) == 'basic', 'hes')) return false;
                            const nums = game.filterPlayer(target => target.hasSkill('bolyifu')).map(target => target.countMark('bolyifu') % 3);
                            const history = player.getHistory('useCard', evt => get.type(evt.card) == 'basic' || get.type(evt.card) == 'trick');
                            const evt = history[history.length - 1];
                            if (evt?.card?.name == name && nums.includes(1)) return true;
                            return (name == 'shandian' && nums.includes(0)) || (name == 'tiesuo' && nums.includes(2));
                        },
                        ai: {
                            respondSha: true,
                            respondShan: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg == 'respond') return false;
                                const name = (tag == 'respondSha' ? 'sha' : 'shan');
                                if (!lib.skill.bolyifu.subSkill.viewAs.hiddenCard(player, name)) return false;
                            },
                            order(item, player) {
                                if (player && get.event().type == 'phase') {
                                    let max = 0, nums = game.filterPlayer(target => target.hasSkill('bolyifu')).map(target => target.countMark('bolyifu') % 3);
                                    let names = (get.event().bolyifu || []);
                                    names = names.filter(card => nums.includes(names.indexOf(card)));
                                    if (!names.length) return 0;
                                    names = names.map(namex => { return { name: namex[2], nature: namex[3] } });
                                    names.forEach(card => {
                                        if (player.getUseValue(card) > 0) {
                                            let temp = get.order(card);
                                            if (temp > max) max = temp;
                                        }
                                    });
                                    if (max > 0) max += 15;
                                    return max;
                                }
                                return 0.5;
                            },
                            result: {
                                player(player) {
                                    if (get.event().dying) return get.attitude(player, get.event().dying);
                                    return 1;
                                },
                            },
                        },
                    },
                },
            },
            boltianjie: {
                trigger: { global: 'damageBegin' },
                filter(event, player) {
                    if (event._boltianjie) return false;
                    return event.getParent().name == 'shandian';
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.set('_boltianjie', true);
                    trigger.cancel();
                    const str = get.translation(trigger.player);
                    const result = await player.chooseTarget('请选择【天劫】的目标', '对' + str + '或' + str + '的上家或下家造成1点雷属性伤害', (card, player, target) => {
                        const aim = get.event().getTrigger().player;
                        return [aim, aim.getPrevious(), aim.getNext()].includes(target);
                    }, true).set('ai', target => {
                        return get.damageEffect(target, get.event().player, get.event().player, 'thunder');
                    }).forResult();
                    if (result.bool) {
                        player.line(result.targets);
                        await result.targets[0].damage(1, 'thunder');
                    }
                },
                global: 'boltianjie_ai',
                group: ['boltianjie_judge'/*,'boltianjie_shandian'*/],
                subSkill: {
                    ai: {
                        ai: {
                            effect: {
                                target(card, player) {
                                    if (card?.name == 'shandian' && game.hasPlayer(target => get.attitude(player, target) > 0 && target.hasSkill('boltianjie'))) return [1, 2];
                                },
                            },
                        },
                    },
                    judge: {
                        trigger: { global: 'shandianEnd' },
                        filter(event, player) {
                            const name = event.getParent().name;
                            if (name != 'executeDelayCardEffect' && name != 'phaseJudge') return false;
                            return event._result.card.name != 'shan';
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            trigger.player.executeDelayCardEffect('shandian');
                        },
                    },
                    shandian: {
                        enable: 'phaseUse',
                        delay: 0,
                        direct: true,
                        content() {
                            player.executeDelayCardEffect('shandian');
                        },
                    },
                },
            },
            // 桓温
            bolyuba: {
                trigger: {
                    player: 'damageEnd',
                    source: 'damageSource',
                },
                filter(event, player) {
                    const num = player.getAllHistory('useSkill', evt => evt.skill == 'bolyuba').length + 1;
                    return player.countCards('h') < num;
                },
                async content(event, trigger, player) {
                    const num = player.getAllHistory('useSkill', evt => evt.skill == event.name).length;
                    await player.drawTo(num);
                    const skills = player.getSkills(null, false, false).filter(skill => {
                        const info = get.info(skill);
                        return info && !info.charlotte;
                    });
                    const list = [];
                    for (const skill of skills) {
                        list.push([
                            skill,
                            '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">' + (() => {
                                let str = get.translation(skill);
                                if (!lib.skill[skill]?.nobracket) str = '【' + str + '】';
                                return str;
                            })() + '</div><div>' + lib.translate[skill + '_info'] + '</div></div>',
                        ])
                    }
                    const forced = !player.hasCard(card => lib.filter.cardDiscardable(card, player) && get.number(card) == num, 'he');
                    if (!skills.length && forced) return;
                    const result = await player.chooseButton([
                        `###欲罢###<div class="text center">选择失去一个技能${(() => {
                            if (forced) return '';
                            return `，或点“取消”弃置一张点数为${num}的牌`;
                        })()}</div>`,
                        [list, 'textbutton'],
                    ]).set('displayIndex', false).set('ai', button => {
                        const { link: skill } = button, { player, num } = get.event();
                        const info = get.info(skill);
                        if (info?.ai?.neg || info?.ai?.halfneg) return 3;
                        if (player.hasCard(card => get.number(card) == num)) return 0;
                        if (skill.startsWith('bolhuanwen_')) return 4;
                        return 1;
                    }).set('num', num).set('forced', forced).forResult();
                    if (result?.bool && result.links?.length) {
                        const [skill] = result.links;
                        player.popup(skill);
                        await player.removeSkills(skill);
                    }
                    else await player.chooseToDiscard('he', true, card => {
                        return get.number(card) == get.event('num');
                    }, `请弃置一张点数为${num}的牌`).set('num', num);
                },
            },
            bolxingjiang: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.hasCard(card => get.info('bolxingjiang').filterCard(card, player), 'he');
                },
                filterCard(card, player) {
                    if (!['basic', 'trick'].includes(get.type(card))) return false;
                    if (ui.selected.cards.length && ui.selected.cards[0].name != card.name) return false;
                    const cards = player.getCards('he');
                    return cards.includes(card) && cards.filter(i => i.name == card.name).length > 1;
                },
                selectCard: [2, Infinity],
                position: 'he',
                complexCard: true,
                check(card) {
                    const player = get.event('player');
                    const num = player.getAllHistory('useSkill', evt => evt.skill == 'bolyuba').length;
                    const value = function (card, player) {
                        const num = player.getUseValue(card);
                        return num > 0 ? num + 1 / (get.value(card) || 0.5) + 7 : 7 - get.value(card);
                    };
                    if (ui.selected.cards.length && value(card, player) < value(ui.selected.cards[0], player) && player.hasSkill('bolyuba') && num < 3) return 20 - get.value(card);
                    if (!player.hasSkill(`bolhuanwen_${card.name}`, null, null, false)) return 10;
                    return 10 - get.value(card);
                },
                async content(event, trigger, player) {
                    const name = get.name(event.cards[0]);
                    const skill = `bolhuanwen_${name}`;
                    if (!lib.skill[skill]) {
                        const skillName = `行将•${get.translation(name).slice(0, 2)}`;
                        const skillContent = {
                            nobracket: true,
                            enable: 'chooseToUse',
                            usable: 1,
                            viewAs: {
                                name: name,
                                isCard: true,
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            prompt: `视为使用【${get.translation(name)}】`,
                        };
                        const skillInfo = `每回合限一次，你可以视为使用一张【${get.translation(name)}】。`;
                        game.broadcastAll((skill, skillName, skillInfo, skillContent) => {
                            lib.translate[skill] = skillName;
                            lib.translate[`${skill}_info`] = skillInfo;
                            lib.skill[skill] = skillContent;
                            game.finishSkill(skill);
                        }, skill, skillName, skillInfo, skillContent);
                    }
                    player.popup(skill);
                    await player.addSkills(skill);
                },
                ai: {
                    order(item, player) {
                        let cards = player.getCards('he', card => get.info('bolxingjiang').filterCard(card, player) && player.getUseValue(card) > 0);
                        cards = cards.filter(card => cards.filter(i => i.name == card.name).length > 1);
                        if (player.hasSkill('bolyuba') && player.getAllHistory('useSkill', evt => evt.skill == 'bolyuba').length > 2) cards = cards.filter(card => !player.hasSkill(`bolhuanwen_${card.name}`, null, null, false));
                        if (!cards.length) return 1;
                        cards.sort((a, b) => get.order(b) - get.order(a));
                        return get.order(cards[0]) + 0.001;
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            //宁静致远
            bilibili_xiezhi: {
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    return event.player != player && !event.player.isOut();
                },
                locked: true,
                async cost(event, trigger, player) {
                    const func = () => {
                        const event = get.event();
                        const controls = [link => {
                            const evt = get.event();
                            if (evt.dialog && evt.dialog.buttons) {
                                for (let i = 0; i < evt.dialog.buttons.length; i++) {
                                    const button = evt.dialog.buttons[i];
                                    button.classList.remove('selectable');
                                    button.classList.remove('selected');
                                    const counterNode = button.querySelector('.caption');
                                    if (counterNode) {
                                        counterNode.childNodes[0].innerHTML = ``;
                                    }
                                }
                                ui.selected.buttons.length = 0;
                                game.check();
                            }
                            return;
                        }];
                        event.controls = [ui.create.control(controls.concat(['清除选择', 'stayleft']))];
                    };
                    if (event.isMine()) func();
                    else if (event.isOnline()) event.player.send(func);
                    const sum = Math.max(3, trigger.player.countCards('h'));
                    let result = await player.chooseButton(['###协治###选择' + get.cnNumber(sum) + '次牌的类别作为' + get.translation(trigger.player) + '本回合的用牌标准', [['basic', 'trick', 'equip'], 'vcard']], true).set('filterButton', button => {
                        const rest = get.event().selectButton - ui.selected.buttons.length;
                        const noChoose = ['basic', 'trick', 'equip'].filter(type => !ui.selected.buttons.map(i => i.link[2]).includes(type));
                        return noChoose.length != rest || noChoose.includes(button.link[2]);
                    }).set('ai', button => {
                        const player = get.event().player, target = get.event().getTrigger().player;
                        const index = ['basic', 'trick', 'equip'].indexOf(button.link[2]);
                        return 1 + Math.random() * (get.attitude(player, target) > 0 ? (3 - index) : (index + 1));
                    }).set('custom', {
                        add: {
                            confirm(bool) {
                                if (bool != true) return;
                                const event = get.event().parent;
                                if (event.controls) event.controls.forEach(i => i.close());
                                if (ui.confirm) ui.confirm.close();
                                game.uncheck();
                            },
                            button() {
                                if (ui.selected.buttons.length) return;
                                const event = get.event();
                                if (event.dialog && event.dialog.buttons) {
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                        const button = event.dialog.buttons[i];
                                        const counterNode = button.querySelector('.caption');
                                        if (counterNode) {
                                            counterNode.childNodes[0].innerHTML = ``;
                                        }
                                    }
                                }
                                if (!ui.selected.buttons.length) {
                                    const evt = event.parent;
                                    if (evt.controls) evt.controls[0].classList.add('disabled');
                                }
                            },
                        },
                        replace: {
                            button(button) {
                                const event = get.event(), sum = event.selectButton;
                                if (!event.isMine() || !event.filterButton(button)) return;
                                if (button.classList.contains('selectable') == false) return;
                                if (ui.selected.buttons.length >= sum) return false;
                                button.classList.add('selected');
                                ui.selected.buttons.push(button);
                                let counterNode = button.querySelector('.caption');
                                const count = ui.selected.buttons.filter(i => i == button).length;
                                if (counterNode) {
                                    counterNode = counterNode.childNodes[0];
                                    counterNode.innerHTML = `×${count}`;
                                }
                                else {
                                    counterNode = ui.create.caption(`<span style="font-size:24px; font-family:xinwei; text-shadow:#FFF 0 0 4px, #FFF 0 0 4px, rgba(74,29,1,1) 0 0 3px;">×${count}</span>`, button);
                                    counterNode.style.right = '5px';
                                    counterNode.style.bottom = '2px';
                                }
                                const evt = event.parent;
                                if (evt.controls) evt.controls[0].classList.remove('disabled');
                                game.check();
                            },
                        }
                    }).set('selectButton', sum).forResult();
                    if (result.bool) result.cost_data = result.links.map(i => i[2]);
                    event.result = result;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    event.cost_data.forEach(type => trigger.player.addMark('bilibili_xiezhi_' + type, 1, false));
                    trigger.player.addTempSkill('bilibili_xiezhi_buff');
                    trigger.player.markSkill('bilibili_xiezhi_buff');
                },
                subSkill: {
                    buff: {
                        charlotte: true,
                        onremove(player) {
                            ['basic', 'trick', 'equip'].forEach(type => player.clearMark('bilibili_xiezhi_' + type, false));
                        },
                        intro: {
                            markcount: (_, player) => ['basic', 'trick', 'equip'].reduce((sum, type) => sum + player.countMark('bilibili_xiezhi_' + type), 0),
                            content: (_, player) => '本回合仅限使用' + ['basic', 'trick', 'equip'].filter(type => {
                                return player.hasMark('bilibili_xiezhi_' + type);
                            }).map(type => {
                                return player.countMark('bilibili_xiezhi_' + type) + '张' + get.translation(type) + '牌';
                            }).join('，'),
                        },
                        mod: {
                            cardEnabled(card, player) {
                                const type = get.type2(card);
                                if (!player.hasMark('bilibili_xiezhi_' + type)) return;
                                const stat = player.getStat('card');
                                if (Object.keys(stat).reduce((sum, cardx) => {
                                    if (typeof stat[cardx] != 'number' || get.type2(cardx) != type) return sum;
                                    return sum + stat[cardx];
                                }, 0) >= player.countMark('bilibili_xiezhi_' + type)) return false;
                            },
                            cardSavable(card, player) {
                                const type = get.type2(card);
                                if (!player.hasMark('bilibili_xiezhi_' + type)) return;
                                const stat = player.getStat('card');
                                if (Object.keys(stat).reduce((sum, cardx) => {
                                    if (typeof stat[cardx] != 'number' || get.type2(cardx) != type) return sum;
                                    return sum + stat[cardx];
                                }, 0) >= player.countMark('bilibili_xiezhi_' + type)) return false;
                            },
                        },
                    },
                },
            },
            bilibili_fazhou: {
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    if (game.roundNumber <= 1) return false;
                    return game.hasPlayer(target => {
                        return target != player && lib.skill.bilibili_fazhou.findTarget(target);
                    });
                },
                findTarget(player) {
                    return player.getRoundHistory('useCard', () => true, 1).reduce((list, evt) => {
                        return list.add(get.type2(evt.card));
                    }, []).length >= 3 || player.getRoundHistory('sourceDamage', () => true, 1).length > 0;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt('bilibili_fazhou'), '对任意名角色肘成1点伤害，然后本轮将其肘出游戏', (card, player, target) => {
                        return target != player && lib.skill.bilibili_fazhou.findTarget(target);
                    }, [1, Infinity]).set('ai', target => {
                        const player = get.event().player;
                        return get.damageEffect(target, player, player);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    for (const target of event.targets.sortBySeat(player)) {
                        await target.damage(1);
                        if (target.isIn()) {
                            target.chat('mamba out');
                            target.addTempSkill('bilibili_fazhou_mambaout', 'roundStart');
                            /*
                            const evt = trigger;
                            if (evt.player != target && !evt._finished) {
                                evt.finish();
                                evt._triggered = 5;
                                const evtx = evt.player.insertPhase();
                                delete evtx.skill;
                            }
                            */
                        }
                    }
                },
                subSkill: {
                    mambaout: {
                        inherit: 'diaohulishan',
                    },
                },
            },
            //戏志才
            bilibili_biexiao: {
                charlotte: true,
                superCharlotte: true,
                trigger: { player: ['useCard', 'respond', 'useCardToPlayer'] },
                filter(event, player, name) {
                    if (name == 'useCardToPlayer') return event.target != player;
                    return Array.isArray(event.respondTo) && event.respondTo[0] != player;
                },
                forced: true,
                popup: false,
                firstDo: true,
                *content(event, map) {
                    const player = map.player, trigger = map.trigger;
                    const target = event.triggername == 'useCardToPlayer' ? trigger.target : trigger.respondTo[0];
                    player.flashAvatar('bilibili_biexiao', 'smile' + get.rand(1, 7));
                    if (target) target.flashAvatar(null, 'smile' + get.rand(1, 7));
                },
            },
            bilibili_xingshi: {
                locked: true,
                group: ['wei', 'shu', 'wu', 'qun', 'jin'].map(i => ['bilibili_xingshi_' + i, 'bilibili_xingshi_awaken_' + i]).flat(),
                derivation: ['wei', 'shu', 'wu', 'qun', 'jin'].map(i => ['bilibili_xingshi_' + i, 'bilibili_xingshi_awaken_' + i]).flat(),
                subSkill: {
                    wei: {
                        trigger: { player: 'phaseBegin' },
                        filter(event, player) {
                            return player.group == 'wei' && player.countCards('he') > 0;
                        },
                        direct: true,
                        content() {
                            'step 0'
                            player.chooseCardTarget({
                                prompt: get.prompt2(event.name),
                                filterCard: lib.filter.cardDiscardable,
                                filterTarget: lib.filter.notMe,
                                position: 'he',
                                ai1(card) {
                                    return 6 - get.value(card);
                                },
                                ai2(target) {
                                    var player = _status.event.player;
                                    return (2 - get.sgn(get.attitude(player, target))) / (target.countCards('he') + 1);
                                },
                            });
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, result.targets);
                                player.discard(result.cards);
                                result.targets[0].chooseToDiscard('弃置一张牌，或令' + get.translation(player) + '摸一张牌', 'he').ai = lib.skill.zhiheng.check;
                            }
                            else event.finish();
                            'step 2'
                            if (!result.bool) player.draw();
                        },
                    },
                    shu: {
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha' && player.group == 'shu') return num + 1;
                            },
                        },
                        trigger: { player: 'phaseUseEnd' },
                        filter(event, player) {
                            return player.group == 'shu' && player.getHistory('useCard', function (evt) {
                                return evt.card && evt.card.name == 'sha' && evt.getParent('phaseUse') == event;
                            }).length > 1;
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                    wu: {
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            return player.group == 'wu' && player.countCards('h') != player.hp;
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                    qun: {
                        trigger: { player: 'phaseDiscardBegin' },
                        filter(event, player) {
                            return player.group == 'qun' && (player.isDamaged() || player.countCards('h') - player.hp > 1);
                        },
                        forced: true,
                        content() {
                            var num = 0;
                            if (player.isDamaged()) num++;
                            if (player.countCards('h') - player.hp > 1) num++;
                            player.addMark('bilibili_xingshi_temp', num, false);
                            player.addTempSkill('bilibili_xingshi_temp', 'phaseDiscardEnd');
                        },
                    },
                    jin: {
                        trigger: { player: 'phaseDrawEnd' },
                        filter(event, player) {
                            var hs = player.getCards('h');
                            return player.group == 'jin' && hs.length > 0 && player.getHistory('gain', function (evt) {
                                if (evt.getParent().name != 'draw' || evt.getParent('phaseDraw') != event) return false;
                                for (var i of evt.cards) {
                                    if (hs.includes(i)) return true;
                                }
                                return false;
                            }).length > 0;
                        },
                        check(event, player) {
                            var hs = player.getCards('h'), cards = [], suits = [];
                            player.getHistory('gain', function (evt) {
                                if (evt.getParent().name != 'draw' || evt.getParent('phaseDraw') != event) return false;
                                for (var i of evt.cards) {
                                    if (hs.includes(i)) {
                                        cards.add(i);
                                        suits.add(get.suit(i, player));
                                    }
                                }
                            });
                            return cards.length == suits.length;
                        },
                        content() {
                            var hs = player.getCards('h'), cards = [], suits = [];
                            player.getHistory('gain', function (evt) {
                                if (evt.getParent().name != 'draw' || evt.getParent('phaseDraw') != trigger) return false;
                                for (var i of evt.cards) {
                                    if (hs.includes(i)) {
                                        cards.add(i);
                                        suits.add(get.suit(i, player));
                                    }
                                }
                            });
                            player.showCards(cards, get.translation(player) + '发动了【晋势】');
                            if (cards.length == suits.length) player.draw();
                        },
                    },
                    temp: {
                        noGlobal: true,
                        onremove: true,
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('bilibili_xingshi_temp');
                            },
                        },
                    },
                    awaken_wei: {
                        trigger: { player: 'damageEnd' },
                        filter(event, player) {
                            return player.group == 'wei';
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                    awaken_shu: {
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            return player.group == 'shu' && event.card && event.card.name == 'sha';
                        },
                        forced: true,
                        content() { player.draw() },
                    },
                    awaken_wu: {
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return player.group == 'wu' && get.type(event.card) == 'equip';
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                    awaken_qun: {
                        trigger: { player: 'useCardToPlayered' },
                        filter(event, player) {
                            if (player.group != 'qun' || !event.isFirstTarget || get.type(event.card, 'trick') != 'trick') return false;
                            for (var i = 0; i < event.targets.length; i++) {
                                if (event.targets[i] != player) return true;
                            }
                            return false;
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                    awaken_jin: {
                        trigger: { player: 'phaseJieshuBegin' },
                        filter(event, player) {
                            if (player.group != 'jin') return false;
                            var hs = player.getCards('h'), suits = [];
                            if (hs.length < 3) return true;
                            for (var i of hs) {
                                suits.add(get.suit(i, player));
                                if (suits.length > 2) return false;
                            }
                            return true;
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                },
            },
            bilibili_zhangcai: {
                trigger: { player: 'gainAfter', global: 'loseAsyncAfter' },
                filter(event, player) {
                    return event.getg && event.getg(player).some(card => get.owner(card) == player && get.position(card) == 'h');
                },
                direct: true,
                locked: false,
                *content(event, map) {
                    const player = map.player, trigger = map.trigger;
                    const cards = trigger.getg(player);
                    const result = yield player.chooseToUse(function (card) {
                        const evt = _status.event;
                        if (!lib.filter.cardEnabled(card, evt.player, evt)) return false;
                        let cards = [card];
                        if (Array.isArray(card.cards)) cards.addArray(card.cards);
                        return cards.containsSome(...evt.cards);
                    }, get.prompt2('bilibili_zhangcai')).set('addCount', false).set('cards', cards).set('logSkill', 'bilibili_zhangcai');
                    if (result.bool) {
                        const suits = player.getAllHistory('useCard', evt => {
                            return evt.getParent(2).name == 'bilibili_zhangcai';
                        }).reduce((list, evt) => list.add(get.suit(evt.card)), []);
                        if (suits.length) yield player.addAdditionalSkills('bilibili_zhangcai', ['jueman', 'oljianman', 'aocai', 'nzry_shicai'].slice(0, Math.min(4, suits.length)));
                    }
                },
                mod: {
                    targetInRange(card, player) {
                        const evt = _status.event;
                        if (evt.name == 'chooseToUse' && evt.player == player && evt.getParent().name == 'bilibili_zhangcai' && evt.getParent().player == player) return true;
                    },
                },
                derivation: ['jueman', 'oljianman', 'aocai', 'nzry_shicai'],
            },
            //乐大小乔
            bilibili_qiqin: {
                audio: Array.from({ length: 2 }).map((_, i) => ['', '_yue_daqiao'].map(j => j + (i + 1))).flat().map(i => 'dcqiqin' + i),
                inherit: 'dcqiqin',
                group: ['bilibili_qiqin_restore', 'bilibili_qiqin_draw'],
                subSkill: {
                    get restore() {
                        const info = lib.skill.dcqiqin.subSkill.restore;
                        info.audio = Array.from({ length: 2 }).map((_, i) => ['', '_yue_daqiao'].map(j => j + (i + 1))).flat().map(i => 'dcqiqin' + i);
                        return info;
                    },
                    draw: {
                        audio: Array.from({ length: 2 }).map((_, i) => ['', '_yue_daqiao'].map(j => j + (i + 1))).flat().map(i => 'dcqiqin' + i),
                        trigger: { global: "gameDrawBegin" },
                        forced: true,
                        content() {
                            const me = player, numx = trigger.num;
                            trigger.num = player => {
                                return (player === me ? 2 : 1) * (typeof numx === "function" ? numx(player) : numx);
                            };
                        },
                    },
                },
            },
            //眼睛哥
            bilibili_dongcha: {
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.player != player;
                },
                usable: 1,
                check(event, player) {
                    if (event.getParent().excluded.includes(player)) return false;
                    return get.effect(player, event.card, event.player, player) < 0;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const judgeEvent = player.judge(card => get.color(card) == 'black' ? 2 : -2);
                    judgeEvent.judge2 = result => result.bool;
                    const { result: { judge } } = await judgeEvent;
                    if (judge > 0) {
                        player.chat('喜！也够能奈我何？');
                        trigger.getParent().excluded.add(player);
                        await player.draw();
                    } else {
                        player.chat('悲！（转圈圈.jpg）');
                    }
                },
            },
            bilibili_mingcha: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(current => get.info('bilibili_mingcha').filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target.countCards('h') && target != player;
                },
                async content(event, trigger, player) {
                    const { target } = event;
                    const cards = await player.choosePlayerCard(target, true, 'h').forResultCards();
                    if (!cards?.length) return;
                    await player.showCards(cards, get.translation(player) + '对' + get.translation(target) + '发动了【明察】');
                    const goon1 = player.countCards('he'), goon2 = target.countCards('he');
                    if (goon1 || goon2) {
                        let result;
                        if (goon1 && goon2) result = await player.chooseControl().set('choiceList', [`令${get.translation(target)}交给你一张牌`, `交给${get.translation(target)}一张牌`]).set('ai', () => {
                            const player = get.player(), target = get.event().getParent().target;
                            const card = get.event().cards[0];
                            return get.attitude(player, target) > 4 ? 1 : 0;
                        }).set('cards', cards).forResult();
                        else result = { index: goon2 ? 0 : 1 };
                        if (result.index == 0) await target.chooseToGive(player, 'he', true);
                        else {
                            const give = await player.chooseToGive(target, 'he', true).set('ai', card => {
                                const { player, target } = get.event();
                                const cardx = get.event().cards[0];
                                if (get.attitude(player, target) > 0 && get.type2(card) != get.type2(cardx)) return 10;
                                return 6 - get.value(card);
                            }).set('cards', cards).forResultCards();
                            if (give?.length && get.type2(give[0]) != get.type2(cards[0])) await player.draw();
                        };
                    }
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
            },
            bilibili_huiyan: {
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer(current => player != current);
                },
                locked: true,
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), lib.filter.notMe, true).set('ai', target => {
                        const player = get.player();
                        return get, attitude(player, target);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const { targets: [target] } = event;
                    let result;
                    if (player.isDamaged()) result = await target.chooseControl().set('choiceList', [`${get.translation(player)}}回复1点体力`, `${get.translation(target)}摸一张牌`]).set('ai', () => {
                        const player = get.player(), target = get.event().getParent().player;
                        const eff1 = get.recoverEffect(target, player, player), eff2 = get.effect(target, { name: 'draw' }, player, player);
                        return eff2 > eff1 ? 1 : 0;
                    }).forResult();
                    else result = { index: 1 };
                    if (result.index == 0) await player.recover();
                    else await player.draw();
                },
            },
            //暗黑傀儡师蔡夫人
            bilibili_kuilei: {
                unique: true,
                trigger: {
                    global: 'phaseBefore',
                    player: ['enterGame', 'dieBefore', 'showCharacterAfter'],
                },
                filter(event, player) {
                    if (['', '1', '2'].every(num => player['name' + num] !== 'bilibili_caifuren')) return false;
                    if (event.name === 'die') return player.maxHp > 0;
                    if (get.mode() === 'guozhan') return event.toShow.includes('bilibili_caifuren');
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    get.info(event.name).onremove(player, event.name);
                    if (trigger.name === 'die') {
                        player.chat(['呃...', '可恶！', '猜猜看吧，我是否还会有下一招？'].randomGet());
                        trigger.cancel();
                        await player.loseMaxHp();
                        await player.recoverTo(player.maxHp);
                        if (player.isIn()) await game.delay(3);
                    }
                    if (!_status.characterlist) get.info('pingjian').initList();
                    const list = ['蔡', '夫人'].map(str => {
                        return _status.characterlist.filter(name => {
                            const nameStr = lib.translate[name + '_ab'] || lib.translate[name];
                            return nameStr && !nameStr.includes('蔡夫人') && nameStr.includes(str);
                        }).randomGet();
                    });
                    if (list.every(i => Boolean(i))) {
                        game.broadcastAll((player, first, chosen) => {
                            player.name1 = first;
                            player.node.avatar.setBackground(first, 'character');
                            player.node.name.innerHTML = get.slimName(first);
                            player.name2 = chosen;
                            player.classList.add('fullskin2');
                            player.node.avatar2.classList.remove('hidden');
                            player.node.avatar2.setBackground(chosen, 'character');
                            player.node.name2.innerHTML = get.slimName(chosen);
                            if (player == game.me && ui.fakeme) ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                            if (_status.characterlist) _status.characterlist.removeArray(['', '1', '2'].map(num => player['name' + num]).filter(i => Boolean(i)));
                        }, player, ...list);
                        player.addAdditionalSkill(event.name, list.map(name => get.character(name)?.skills || []).flat());
                        game.log(player, '将', '#g主将', '替换为', '#g' + get.translation(list[0]));
                        game.log(player, '将', '#y副将', '替换为', '#y' + get.translation(list[1]));
                    }
                    else {
                        player.chat('杯具');
                        game.log('但', player, '无法凑到两个傀儡！');
                    }
                },
                onremove(player, skill) {
                    player.removeAdditionalSkill(skill);
                    if (player.name2) {
                        if (get.mode() === 'guozhan') player.showCharacter(2);
                        game.broadcastAll(player => {
                            if (_status.characterlist) _status.characterlist.addArray(['', '1', '2'].map(num => player['name' + num]).filter(i => Boolean(i)));
                            player.name1 = player.name = 'bilibili_caifuren';
                            player.sex = get.character(player.name).sex;
                            player.group = get.character(player.name).group;
                            player.node.name.dataset.nature = get.groupnature(player.group);
                            player.smoothAvatar(false);
                            player.node.avatar.setBackground(player.name, 'character');
                            player.node.name.innerHTML = get.slimName(player.name);
                            delete player.name2;
                            player.classList.remove('fullskin2');
                            player.node.avatar2.classList.add('hidden');
                            player.node.name2.innerHTML = '';
                            if (player == game.me && ui.fakeme) ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                            if (_status.characterlist) _status.characterlist.remove(player.name);
                        }, player);
                    }
                },
            },	//OL袁姬
            old_jieyan: {
                audio: 'oljieyan',
                trigger: { player: 'phaseZhunbeiBegin' },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5))).set('ai', target => {
                        const player = get.player(), att = get.attitude(player, target), goon = player.hasSkill('old_shuiyue', null, null, false);
                        let eff = get.damageEffect(target, player, player);
                        if (goon) {
                            if (player.storage.old_shuiyue) eff += get.effect(target, { name: 'guohe_copy2' }, player, player) * Math.min(2, target.countCards('he'));
                            else eff += get.effect(target, { name: 'draw' }, player, player);
                        }
                        if (goon && target.getHp() > 2 && att > 0 && target !== player && !player.storage.old_shuiyue) {
                            return 0.1 + (target.countCards('h') - target.getHp());
                        }
                        return eff;
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    await target.damage();
                    const { result: { index } } = await target.chooseControl().set('choiceList', [
                        '跳过下个弃牌阶段',
                        '回复1点体力，下个弃牌阶段手牌上限-2',
                    ]).set('ai', () => {
                        const player = get.player(), target = get.event().getTrigger().player;
                        if ((get.recoverEffect(player, target, target) > 0 || get.attitude(player, target) > 0) && game.hasPlayer(current => current != player && get.attitude(player, current) > 0)) return 1;
                        return 0;
                    });
                    if (index == 0) {
                        target.skip('phaseDiscard');
                        game.log(target, '跳过下个弃牌阶段');
                    }
                    else {
                        await target.recover();
                        target.addTempSkill('old_jieyan_effect', { player: 'phaseDiscardAfter' });
                        target.addMark('old_jieyan_effect', 2, false);
                        target.when('phaseDiscardBefore').then(() => {
                            player.addTempSkill('old_jieyan_hand', { player: 'phaseDiscardAfter' });
                        });
                        player.addSkill('old_jieyan_gain');
                        player.markAuto('old_jieyan_gain', [target]);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        marktext: '弃',
                        intro: { content: '下个弃牌阶段手牌上限-#' },
                        mod: {
                            maxHandcard(player, num) {
                                if (player.hasSkill('old_jieyan_hand')) return num - player.countMark('old_jieyan_effect');
                            },
                        },
                    },
                    hand: { charlotte: true },
                    gain: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '节言角色：$' },
                        trigger: { global: 'phaseDiscardAfter' },
                        filter(event, player) {
                            return player.getStorage('old_jieyan_gain').includes(event.player);
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const target = trigger.player, cards = [];
                            target.getHistory('lose', evt => {
                                if (evt.type == 'discard' && evt.getParent('phaseDiscard') === trigger) cards.addArray(evt.cards2.filterInD('d'));
                            });
                            player.unmarkAuto('old_jieyan_gain', [target]);
                            if (cards.length && game.hasPlayer(current => current !== target)) {
                                const targets = await player.chooseTarget(get.prompt(event.name), `令一名不为${get.translation(target)}的角色获得${get.translation(cards)}`, (card, player, target) => {
                                    return target !== get.event().getTrigger().player;
                                }).set('ai', target => {
                                    const player = get.player();
                                    let att = get.attitude(player, target);
                                    if (att < 3) return 0;
                                    if (target.hasSkillTag('nogain')) att /= 10;
                                    return att;
                                }).forResultTargets();
                                if (targets && targets.length) {
                                    const next = targets[0].gain(cards, 'gain2');
                                    next.giver = player;
                                    await next;
                                }
                            }
                            if (!player.getStorage('old_jieyan_gain').length) player.removeSkill('old_jieyan_gain');
                        },
                    },
                },
            },
            old_jinghua: {
                audio: 'oljinghua',
                trigger: {
                    global: 'gainAfter',
                    player: 'loseAsyncAfter',
                },
                filter(event, player, triggername, target) {
                    if (event.name === 'loseAsync' && event.type !== 'gain') return false;
                    return target?.isIn();
                },
                getIndex(event, player) {
                    return game.filterPlayer(target => {
                        if (target === player) return false;
                        if (!player.storage.old_jinghua && target.isHealthy()) return false;
                        const cards = event.getg(target);
                        if (!cards.length || event.giver === player) return true;
                        return event.getl && event.getl(player)?.cards2?.some(card => cards.includes(card));
                    }).sortBySeat();
                },
                logTarget: (event, player, triggername, target) => target,
                check(event, player, triggername, target) {
                    return player.storage.old_jinghua ? get.effect(target, { name: 'losehp' }, player, player) > 0 : get.recoverEffect(target, player, player) > 0;
                },
                locked: false,
                forced: true,
                async content(event, trigger, player) {
                    event.targets[0][player.storage.old_jinghua ? 'loseHp' : 'recover']();
                },
                group: 'old_jinghua_change',
                subSkill: {
                    change: {
                        audio: 'oljinghua',
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            if (player.countCards('h') || player.storage.old_jinghua) return false;
                            return event.getl(player)?.hs?.length > 0;
                        },
                        skillAnimation: true,
                        animationColor: 'wood',
                        prompt2: '修改【镜花】为：当其他角色获得你的牌后，其失去1点体力。',
                        content() {
                            player.storage.old_jinghua = true;
                            player.popup('镜花');
                            game.log(player, '修改了技能', '#g【镜花】');
                        },
                    },
                },
            },
            old_shuiyue: {
                audio: 'olshuiyue',
                trigger: { global: 'damageEnd' },
                filter(event, player) {
                    const target = event.player, source = event.source;
                    if (!target.isIn() || target === player || source !== player) return false;
                    return !player.storage.old_shuiyue || target.countCards('he');
                },
                forced: true,
                locked: false,
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    if (player.storage.old_shuiyue) await target.chooseToDiscard('he', true);
                    else await target.draw();
                },
                group: 'old_shuiyue_change',
                subSkill: {
                    change: {
                        audio: 'olshuiyue',
                        trigger: { source: 'dying' },
                        filter(event, player) {
                            return !player.storage.old_shuiyue && event.player !== player;
                        },
                        skillAnimation: true,
                        animationColor: 'water',
                        prompt2: '修改【水月】为：当其他角色受到你造成的伤害后，其弃置一张牌。',
                        content() {
                            player.storage.old_shuiyue = true;
                            player.popup('水月');
                            game.log(player, '修改了技能', '#g【水月】');
                        },
                    },
                },
            },
        },
        dynamicTranslate: {
            bilibili_xueji(player) {
                var storage = player.storage.bilibili_xueji;
                if (storage) return '转换技，新的一轮开始时。阴：你可以失去1点体力，令一名角色于本轮第一次造成的伤害+1。<span class="bluetext">阳：你可以失去1点体力上限，并视为使用一张【杀】，若此【杀】造成伤害，你摸两张牌</span>。';
                return '转换技，新的一轮开始时。<span class="bluetext">阴：你可以失去1点体力，令一名角色于本轮第一次造成的伤害+1</span>。阳：你可以失去1点体力上限，并视为使用一张【杀】，若此【杀】造成伤害，你摸两张牌。';
            },
            BTdunshi(player) {
                var info = player.storage.BTdunshi;
                var str = '每回合限一次。你可以视为使用或打出一张';
                var list = ['sha', 'shan', 'tao', 'jiu'];
                for (var i of list) {
                    var strx = '【' + get.translation(i) + '】';
                    if (!info || !info[0].includes(i)) strx = ('<span style="text-decoration: line-through;">' + strx + '</span>');
                    str += strx;
                    if (i != 'jiu') str += '/';
                }
                str += '，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害，然后你从技能名中包含“仁/义/礼/智/信”字样的技能中选择一个当前回合角色未拥有的技能，令其获得你选择的技能；⒉从〖遁世〗中删除你本次使用或打出的牌名；⒊减1点体力上限并摸X张牌（X为你因〖遁世〗删除牌名数的牌）。';
                return str;
            },
            BTxinsheng(player) {
                var num = player.countMark('BTxinsheng');
                if (num == 0) return lib.translate.BTxinsheng_info;
                return lib.translate['BTxinsheng_' + num + '_info'];
            },
            old_lieshi(player) {
                var str = '①受到1点火焰伤害；②弃置手牌中的所有【闪】；③弃置手牌中的所有【杀】';
                if (player.storage.old_huanyin) str = '①弃置手牌中的所有【杀】；②弃置手牌中的所有【闪】；③受到1点火焰伤害';
                return '你可以将你场上的牌当作场上没有的延时锦囊牌使用并执行一项，然后令目标角色执行后一项：『 ' + str + '』。';
            },
            old_dianzhan(player) {
                var str = '①重铸此花色的一张手牌；②若此牌仅指定一个目标，你令其横置；③摸一张牌';
                if (player.storage.old_huanyin) str = '①摸一张牌；②若此牌仅指定一个目标，你令其横置；③重铸此花色的一张手牌';
                return '锁定技，当你于每轮第一次使用一种花色的牌后，你依次执行以下选项直到你执行完所有选项或需要执行无法执行的选项：『' + str + '』。';
            },
            old_sankuang(player) {
                var str = '', storage = player.storage.old_sankuang;
                if (!storage) return lib.translate.old_sankuang_info;
                var list = ['场上牌数', '已损失体力值', '手牌数与体力值之差'];
                for (var i = 0; i < list.length; i++) {
                    if (storage[i]) str += list[i];
                    else str += '<span style="opacity:0.5">' + list[i] + '</span>';
                    if (i < list.length - 1) str += '，';
                }
                return '锁定技，当你于每轮第一次使用一种类型的牌后，你令一名其他角色获得此牌或交给你至少X张牌（X为该角色『' + str + '』之间的最小值，且X至多为3）。'
            },
            bilibili_yutai(player) {
                var bool = game.hasPlayer2(function (current) {
                    return current.name1 == 'bilibili_suixingsifeng' || current.name2 == 'bilibili_suixingsifeng';
                });
                return '你可以将X张牌当作【奇正相生】使用（X为你本回合发动〖彧态〗的次数+1' + (bool ? '<span style="text-decoration: line-through;">' : '') + '，且X至多为3' + (bool ? '</span>' : '') + '）。';
            },
            bolrenhai(player) {
                const storage = player.storage.bolrenhai;
                if (!storage) return lib.translate.bolrenhai_info;
                return '锁定技，当你对一名角色造成伤害时，其选择以下任意其可执行项（可重复选择）并减少对应序号的伤害：' + storage.reduce((str, control) => {
                    return str + (control.index + control.text.join('、') + '；');
                }, '').replaceAll('【', '〖').replaceAll('】', '〗').slice(0, -1) + '。';
            },
            bolyifu(player) {
                let str = '{', count = player.countMark('bolyifu') % 3;
                if (count == 0) str += '<span class="bluetext">';
                str += '天，【闪电】';
                if (count == 0) str += '</span>';
                str += '；';
                if (count == 1) str += '<span class="bluetext">';
                str += '地，【随机应变】';
                if (count == 1) str += '</span>';
                str += '；';
                if (count == 2) str += '<span class="bluetext">';
                str += '人，【铁索连环】';
                if (count == 2) str += '</span>';
                str += '}';
                return '转换技。①一名角色可以将一张基本牌当作' + str + '使用。②当你成为〖蚁附①〗转化的牌的目标后，你摸一张牌。';
            },
            old_jinghua(player) {
                const storage = player.storage.old_jinghua;
                var str = '当其他角色获得你的牌后，或当你交给其他角色牌后，其';
                str += storage ? '失去' : '回复';
                str += '1点体力。';
                if (!storage) str += '当你失去最后的手牌后，你可以将此技能描述中的“回复”改为“失去”。';
                return str;
            },
            old_shuiyue(player) {
                const storage = player.storage.old_shuiyue;
                var str = '当其他角色受到你造成的伤害后，其';
                str += storage ? '弃置' : '摸';
                str += '一张牌。';
                if (!storage) str += '当你令其他角色进入濒死状态后，你可以将此技能描述中的“摸”改为“弃置”。';
                return str;
            },
        },
        translate: {
            CLongZhou: '龙舟武将',
            CZhengHuo: '杂技团',
            Chuodong: '<span style="font-family: yuanli">名人堂前言：</span>' +
                '<br><span style="font-family: yuanli">萌新特设，旨在纪念在萌新的身</span>' +
                '<br><span style="font-family: yuanli">边对活动武将群聊发展起到重要</span>' +
                '<br><span style="font-family: yuanli">作用的人。</span>' +
                '<br>' +
                '活动群名人堂',
            CDormitory: '寝室/肘击群杂谈',
            Cothers: '自嗨',
            CDanJi: '彩蛋·千里走单骑',
            CSCS: '彩蛋·十常侍',
            CXuanDie: '蝶设堂',
            huashen_unknown: ' ',
            bilibili_zhengxuan: '郑玄',
            bilibili_zhengxuan_ab: '水果忍者',
            bilibili_zhengjing: '整经',
            bilibili_zhengjing_info: '出牌阶段，你可以整理一次经典。然后，你将整理出的卡牌中的至少一张作为“经”置于一名角色的武将牌上，然后获得其余的牌。该角色的准备阶段获得这些牌，且跳过此回合的判定和摸牌阶段。',
            gz_huashen: '化身',
            gz_huashen_info: '准备阶段，若你的“化身”牌数：小于2，你可以观看剩余武将牌堆中的五张牌，然后将其中至多两张武将牌置于武将牌上，称为“化身”牌；大于等于2，你可以用剩余武将牌堆顶的一张牌替换一张“化身”牌。你可以于相应的时机明置并发动“化身”牌的一个无标签技能，然后你于技能结算完成后将此技能对应的“化身”牌放回剩余武将牌堆。',
            gz_xinsheng: '新生',
            gz_xinsheng_info: '当你受到1点伤害后，你可以随机获得一张“化身”牌。',
            bilibili_jinfan: '锦帆',
            bilibili_sheque: '射却',
            bilibili_jinfan_info: '锁定技。①弃牌阶段开始时，你将一张与武将牌上的“铃”花色均不同的牌作为“铃”置于武将牌上。②每回合每种花色限一次，当你使用或打出与“铃”花色相同的牌时，你摸一张牌。',
            bilibili_sheque_info: '当其他角色使用装备牌时，你可以将一张手牌当作【杀】对其使用，若此【杀】造成伤害，则该角色本回合不能再使用或打出手牌。',
            xinzaiqi: '再起',
            xinzaiqi_info: '弃牌阶段结束时，你可以令至多X名角色选择一项：1.摸一张牌，2.令你回复1点体力（X为本回合进入弃牌堆的红色牌数）',
            old_tianzuo: '天佐',
            old_tianzuo_info: '游戏开始时，你将8张【奇正相生】加入牌堆。当一名角色成为【奇正相生】的目标后，你可以观看其手牌，然后你可以更改其“奇兵”或“正兵”的选项。',
            old_lingce: '灵策',
            old_lingce_info: '锁定技，一名角色使用智囊牌名的锦囊或【奇正相生】时，你摸一张牌。',
            old_dinghan: '定汉',
            old_dinghan_info: '锁定技，每种牌名每轮限一次，当你成为伤害类卡牌的目标时，取消之。',
            golden_zuoci: '仙人之怒',
            BT_puyuan_ab: '能工巧匠',
            BT_puyuan: '蒲元',
            diy_liuhong: '刘宏',
            bilibili_zhouxiaomei: '萌设周小妹',
            bilibili_zhouxiaomei_prefix: '萌设',
            bilibili_zhangrang: 'TW张让',
            bilibili_zhangrang_prefix: 'TW',
            decade_huangwudie: '黄舞蝶',
            decadexiwu: '习武',
            decadexiwu_info: '锁定技，你使用【杀】无距离和次数限制且你使用【杀】造成的伤害+1。',
            decadehongzhuang: '红妆',
            decadehongzhuang_info: '当你使用或打出一张牌时，你可以摸X张牌（X为此牌点数）。',
            olddulie: '笃烈',
            olddulie_info: '锁定技。①游戏开始时，你令X名其他角色获得“围”（X为游戏人数的一半且向下取整）。②你对没有“围”的角色使用【杀】无距离限制。③当你成为【杀】的目标时，若使用者没有“围”，则你进行判定。若结果为红色，则取消此目标。',
            oldpowei: '破围',
            oldpowei_info: '使命技。①当你因使用【杀】而对有“围”的角色造成伤害时，你防止此伤害并移去该角色的“围”。②使命：当你使用【杀】结算完成后，若场上没有“围”，则你获得技能〖神著〗。③失败：当你进入濒死状态时，你弃置装备区的所有牌，然后将体力值回复至1点。',
            old_shenzhu: '神著',
            old_shenzhu_info: '锁定技，你使用【杀】无次数限制。当你使用有对应实体牌的非转化【杀】结算结束后，你摸一张牌。',
            old_yingba: '英霸',
            old_yingba_info: '出牌阶段限一次，你可令一名体力上限大于1的其他角色减少1点体力上限并获得“平定”标记，然后你减少1点体力上限。你对拥有“平定”标记的角色使用牌没有次数限制。',
            old_fuhai: '覆海',
            old_fuhai_info: '锁定技。当你使用牌指定目标后，若目标角色有“平定”标记，则其不可响应此牌。当你使用牌结算结束后，你移除所有目标角色的“平定”标记并增加等量的体力上限。拥有“平定”标记的角色死亡时，你增加X点体力上限并摸X张牌。（X为其拥有的“平定”标记数）。',
            old_pinghe: '冯河',
            old_pinghe_info: '你的手牌上限基数等于你已损失的体力值。当你受到其他角色造成的伤害时，若你的手牌数大于Y，则你可以防止此伤害，减Y点体力值上限并将Y张手牌交给一名其他角色，然后若你拥有〖英霸〗，则伤害来源获得Y个“平定”标记（Y为伤害值）。',
            diy_lvmeng: '恐惧魔王',
            BTkongju: '克己',
            BThouqi: '后期',
            BTkongju_info: '恐惧技，出牌阶段结束时，若你于此阶段没有使用或打出过【杀】，你可以跳过弃牌阶段并令所有其他角色获得1枚“恐惧”标记。',
            BThouqi_info: '锁定技，准备阶段，若场上的“恐惧”标记数不少于100，你所属的阵营直接获得游戏胜利。',
            bilibili_taoluan: '滔乱',
            bilibili_taoluan_backup: '滔乱',
            bilibili_taoluan_info: '你可以将一张牌当作任意一张基本牌或普通锦囊牌使用（此牌不得是本局游戏你以此法使用过的牌），然后你获得一名其他角色的一张牌，若你未获得你以此法使用的牌的类别不同的牌，你失去1点体力且〖滔乱〗无效直到回合结束。',
            old_jieying: '劫营',
            old_jieying_info: '锁定技，游戏开始时，你令一号位角色获得【营】标记。有【营】标记的角色的回合结束或死亡后，将【营】移动至下家，然后你进行一个额外回合。',
            old_tongling: '铜铃',
            old_tongling_info: '锁定技，当你成为一名角色使用牌指定的唯一目标后，或其他角色对你发动技能时，你摸两张牌。',
            boljingjia: '精甲',
            boljingjia_info: '锁定技，游戏开始时，将本局游戏加入的装备牌置于你的装备栏中。',
            bilibili_wangwang: '萌设王桃王悦',
            bilibili_wangwang_prefix: '萌设',
            bilibili_wangtao: '萌设王桃',
            bilibili_wangyue: '萌设王悦',
            bilibili_x_wangtao: '萌设王桃',
            bilibili_x_wangyue: '萌设王悦',
            bilibili_wangtao_prefix: '萌设',
            bilibili_wangyue_prefix: '萌设',
            bilibili_x_wangtao_prefix: '萌设',
            bilibili_x_wangyue_prefix: '萌设',
            bilibili_guanning: '萌设管宁',
            bilibili_guanning_prefix: '萌设',
            BTdunshi: '遁世',
            BTdunshi_info: '每回合限一次。你可以视为使用或打出一张【杀】/【闪】/【桃】/【酒】，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害，然后你从技能名中包含“仁/义/礼/智/信”字样的技能中选择一个当前回合角色未拥有的技能，令其获得你选择的技能；⒉从〖遁世〗中删除你本次使用或打出的牌名；⒊减1点体力上限并摸X张牌（X为你因〖遁世〗删除牌名数的牌）。',
            BThuashen: '化身',
            BThuashen_info: '游戏开始后，你随机获得两张未加入游戏的武将牌，然后选择一张置于你面前并声明该武将牌的一项技能，你视为拥有该技能且性别和势力视为与该武将相同直到该化身被替换。准备阶段和结束阶段，你可以选择一项：①弃置至多X张未展示的化身牌并重新获得等量化身牌（X为你的体力上限）；②更换所展示的化身牌或技能；③弃置一张化身牌并升级【新生】（至多升至3级）。（你不可声明限定技、觉醒技、隐匿技、使命技、主公技等特殊技能）。',
            BTxinsheng: '新生',
            BTxinsheng_info: '当你受到1点伤害后，你可以获得一张化身牌。',
            BTxinsheng_1: '新生·2级',
            BTxinsheng_1_info: '当你造成或受到1点伤害后，你可以获得一张化身牌。',
            BTxinsheng_2: '新生·3级',
            BTxinsheng_2_info: '当你造成或受到1点伤害后，你可以获得一张化身牌，然后若你的化身牌数不小于场上人数，你获得技能〖幻化〗。',
            BThuanhua: '幻化',
            BThuanhua_backup: '幻化',
            BThuanhua_info: '出牌阶段限一次，你可以弃置一张未展示的化身牌，然后将一张手牌视为一张基本牌或普通锦囊牌使用。',
            bilibili_huanggai: '谋黄盖',
            bilibili_huanggai_prefix: '谋',
            bilibili_kurou: '苦肉',
            bilibili_kurou_info: '出牌阶段，你可以失去1点体力，然后摸一张牌。',
            bilibili_zhaxiang: '诈降',
            bilibili_zhaxiang_info: '当你失去体力或受到伤害后，你可以弃置任意张手牌，然后摸等量张牌。',
            bilibili_ekeshaoge: '俄何烧戈',
            bilibili_xueji: '血激',
            bilibili_xueji2: '血激',
            bilibili_xueji_info: '转换技，新的一轮开始时。阴：你可以失去1点体力，令一名角色于本轮第一次造成的伤害+1。阳：你可以失去1点体力上限，并视为使用一张【杀】，若此【杀】造成伤害，你摸两张牌。',
            bilibili_hanran: '悍然',
            bilibili_hanran_info: '锁定技，当你对其他角色造成伤害时，若该角色体力上限大于你，你加1点体力上限。',
            oldluanji: '乱击',
            oldluanji_info: '你可以将两张与你本回合以此法转化的花色均不相同的手牌当【万箭齐发】使用。当一名已受伤的角色因响应此牌而打出【闪】时，该角色摸一张牌。',
            oldshibei: '矢北',
            oldshibei_info: '锁定技，当你受到伤害后，你进行一次判定，若此伤害为本回合第一次受到的伤害且判定结果为红色，你回复1点体力；若此伤害不为本回合第一次受到的伤害且判定结果为黑色，你失去1点体力。',
            old_zhangzhongjing: '旧张机',
            old_jishi: '济世',
            old_jishi_info: '锁定技。①当你使用的牌结算完成后，若你未因此牌造成过伤害，则你将此牌对应的所有实体牌置于仁库中。②当有牌离开仁库时，你摸一张牌。',
            bilibili_zhenggong: '争功',
            bilibili_zhenggong_info: '其他角色的回合开始时，若你的武将牌正面朝上，你可以进行一个额外的回合。此回合结束后，你将武将牌翻面。 ',
            bilibili_toudu: '偷渡',
            bilibili_toudu_info: '当你受到伤害后，若你的武将牌背面朝上，你可以弃置一张手牌，将你的武将牌翻面，然后视为使用一张无距离限制的【杀】。',
            shen_sunquan_skill: '驭衡',
            shen_sunquan_skill_info: '锁定技。①回合开始时/当你每回合使用第X张牌结算完成后，你随机获得吴势力角色的X个技能。②回合结束时/当你每回合使用第X张牌结算完成后，你随机失去你因〖废案〗获得的X个技能。（X为当前回合开始时你的体力值、已损失体力值和游戏轮数的中位数）',
            bilibili_litiansuo: '萌设李田所',
            bilibili_litiansuo_ab: '萌设李荣',
            bilibili_litiansuo_prefix: '萌设',
            oldhongyi: '弘仪',
            oldhongyi_info: '出牌阶段限一次，你可以弃置X张牌并选择一名其他角色（X为场上已阵亡角色数且至多为2）。你的下回合开始前，该角色造成伤害时进行判定，若结果为：黑色，此伤害-1。红色，受到伤害的角色摸一张牌。',
            xinfanghun: '芳魂',
            xinfanghun_info: '你可以将【杀】当作【闪】，或【闪】当作【杀】使用或打出，然后你获得1枚“梅影”标记。',
            xinfuhan: '扶汉',
            xinfuhan_info: '觉醒技，准备阶段，若你的“梅影”标记数不少于4，则你移去所有的“梅影”标记，增加1点体力上限并回复1点体力，然后你失去〖芳魂〗并获得〖龙胆〗，从〖武圣〗、〖咆哮〗、〖铁骑〗、〖烈弓〗、〖狂骨〗中选择一个获得之。',
            old_jiebing: '借兵',
            old_jiebing_info: '出牌阶段限一次，你可以获得一名有手牌的其他角色的三张手牌，然后受到1点伤害。若如此做，此阶段结束时，你交给其以此法获得的牌。',
            old_kuzhan: '苦战',
            old_kuzhan_info: '使命技。成功：准备阶段，若你本局游戏受到的伤害不少于5点，你获得技能〖退敌〗。失败：结束阶段，若你本回合和上回合均发动过〖借兵〗且均未于当前回合造成过伤害，则使命失败。',
            old_tuidi: '退敌',
            old_tuidi_info: '当你对一名其他角色造成伤害后，你可以随机废除其一种装备栏。',
            old_qixi: '奇袭',
            old_qixi_info: '你可以将一张黑色牌当作【过河拆桥】使用。你使用非转化非虚拟的【过河拆桥】可以改为：出牌阶段，对一名区域内有牌的角色使用，你弃置其区域内的所有牌。',
            old_fenwei: '奋威',
            old_fenwei_info: '限定技，当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效，然后你获得牌堆中的X张【过河拆桥】（X为你选择的角色数且X至多为4）。',
            olddianhua: '点化',
            olddianhua_info: '准备阶段或结束阶段，你可以观看牌堆顶的X张牌（X为你的「紫薇」「后土」「玉清」「勾陈」标记数的总和）。若如此做，你将这些牌以任意顺序放回牌堆顶。',
            oldzhenyi: '真仪',
            oldzhenyi_info: '你可以在以下时机弃置相应的标记来发动以下效果：一名角色的判定牌生效前，你可以弃置1枚「紫薇」，然后将判定结果改为黑桃5或红桃5；当你处于濒死状态时，你可以弃置1枚「后土」，然后将你的一张手牌当【桃】使用；当你造成伤害时，你可以弃置1枚「玉清」，然后你进行一次判定。若结果为黑色，此伤害+1；当你受到属性伤害后，你可以弃置一张「勾陈」，然后你从牌堆中随机获得三种类型的牌各一张。',
            bilibili_fushi: '附势',
            bilibili_fushi_info: '锁定技，若场上势力数：群大于魏，你视为拥有技能〖择主〗；魏大于群，你视为拥有技能〖逞功〗。',
            bilibili_zezhu: '择主',
            bilibili_zezhu_info: '出牌阶段限一次，你可以获得至多两名其他角色各一张牌，然后分别交给其一张牌（若你选择的角色中有人没有牌，则将获得其一张牌改为摸一张牌）。',
            bilibili_chenggong: '逞功',
            bilibili_chenggong_info: '一名角色使用牌指定目标后，若目标数不小于2，你可以令其摸一张牌。',
            bilibili_sp_xuyou: 'SP许攸',
            bilibili_sp_xuyou_prefix: 'SP',
            ljxc: '两军相持',
            ljxc_info: '若当前游戏轮数：小于等于4，所有角色的手牌上限+X（X为当前游戏轮数）；大于4，所有角色于其回合内使用的第一张【杀】造成的伤害+1。',
            xthj: '徐图缓进',
            xthj_yingzi: '徐图缓进',
            xthj_info: '所有角色的出牌阶段结束时，若其于此阶段未使用或打出过【杀】，则其下个摸牌阶段多摸一张牌。',
            jsdy: '坚守待援',
            jsdy_info: '所有角色均可以将【杀】当作【闪】，【闪】当作【杀】使用或打出，然后其手牌上限-1直到其下一个弃牌阶段结束。',
            hswc: '火烧乌巢',
            hswc_info: '本局游戏内造成的无属性伤害均视为火属性。',
            lckf: '粮草匮乏',
            lckf_info: '所有角色摸牌阶段的额定摸牌数-1。当一名角色使用的牌结算完成后，若其因此牌造成了伤害，则其摸一张牌。',
            zyzw: '斩颜良诛文丑',
            zyzw_info: '所有角色的回合开始时，须选择一项：视为使用一张不可被【无懈可击】响应的【决斗】，或失去1点体力。',
            sssb: '十胜十败',
            sssb_info: '所有角色使用牌时，若此牌是整局游戏使用的第整十张牌且此牌不为延时锦囊牌或装备牌，则此牌所有目标角色再次成为此牌的目标角色。',
            yssq: '以弱胜强',
            yssq_info: '造成伤害时，若受伤角色体力值大于伤害来源，此伤害+1。',
            scej: '恃宠而骄',
            scej_info: '结束阶段，若你的体力值为全场唯一最多，你弃一张牌；若你的手牌数为全场最多，你失去1点体力。',
            lz_sufei: '苏飞·龙舟',
            lz_tangzi: '唐咨·龙舟',
            lz_liuqi: '刘琦·龙舟',
            lz_huangquan: '黄权·龙舟',
            lzlianpian: '联翩',
            lzlianpian_info: '友方角色于出牌阶段使用牌连续指定同一名角色为目标后，你可以令此牌的使用者摸一张牌。',
            lztunjiang: '屯江',
            lztunjiang_info: '友方角色的回合结束时，若其于本回合内未造成过伤害，则你可以令你或令其摸两张牌。',
            lzdianhu: '点虎',
            lzdianhu2: '点虎',
            lzdianhu_info: '锁定技，游戏开始时，你选择一名其他角色。友方角色对其造成1点伤害后，摸一张牌。',
            lzxingzhao: '兴棹',
            lz_xunxun: '恂恂',
            lzxingzhao_info: '锁定技，若本局游戏中所有友方角色（包含死亡的友方角色，其后同理）造成的伤害数合计为：<br><li>不少于友方角色数，所有友方角色视为拥有技能〖恂恂〗；<br><li>不少于友方角色数的两倍，所有友方角色使用装备牌时摸一张牌；<br><li>不少于友方角色数的三倍，所有友方角色跳过弃牌阶段；<br><li>不少于友方角色数的六倍，新的一轮开始时，你所属的阵营直接获得游戏胜利。',
            boss_tz: '等阶特权·玩家方',
            boss_tz_sha: '出杀',
            boss_tz_sha_info: '出【杀】次数+1。',
            boss_tz_draw: '摸牌',
            boss_tz_draw_info: '摸牌阶段摸牌数+1。',
            boss_tz_chongsheng: '重生',
            boss_tz_chongsheng_info: '限定技，当你处于濒死状态时，你可以弃置判定区内的所有牌，然后复原你的武将牌，摸五张牌，将体力回复至体力上限（至多为5）。',
            boss_yz: '等阶特权·神武方',
            boss_yz_equip: '装备',
            boss_yz_equip_info: '登场时随机从牌堆中使用一张装备牌。',
            boss_yz_sha: '出杀',
            boss_yz_sha_info: '出【杀】次数+1。',
            boss_yz_shax: '出杀',
            boss_yz_shax_info: '出【杀】次数+1。',
            boss_yz_draw: '摸牌',
            boss_yz_draw_info: '摸牌阶段摸牌数+1。',
            boss_yz_kunshou: '困兽',
            boss_yz_kunshou_info: '觉醒技，当你进入濒死状态时，你将体力回复至5，将手牌数补至5，然后获得技能〖崩坏〗。',
            wzdanji: '单骑',
            wzdanji_info: '觉醒技，准备阶段开始时，若你的手牌数大于你的体力值且本局游戏的主公为曹操，你减1点体力上限，然后获得技能〖马术〗。',
            old_shenjun: '神君',
            old_shenjun_info: '锁定技，一名角色使用【杀】或普通锦囊牌时，你展示你手牌中所有的同名牌，此阶段结束时，你须选择一项：①将X张牌当作你本阶段发动〖神君〗响应的牌名使用（X为你手牌中已展示的〖神君〗牌数）；②失去1点体力。',
            old_balong: '八龙',
            old_balong_info: '锁定技，当你的体力值于每回合首次次发生变化后，若你手牌中锦囊牌的数量为手牌中所有类型中唯一最多的，你展示所有手牌并将手牌摸至八张。',
            old_sankuang: '三恇',
            old_sankuang_info: '锁定技，当你于每轮第一次使用一种类型的牌后，你令一名其他角色获得此牌或交给你至少X张牌（X为该角色『场上牌数，已损失体力值，手牌数与体力值之差』之间的最小值，且X至多为3）。',
            old_beishi: '卑势',
            old_beishi_info: '锁定技，当你或第一次成为〖三恇〗的目标角色失去最后的手牌后，你选择移除或复原〖三恇〗描述『 』中的一个条件，然后回复1点体力。',
            old_lieshi: '烈誓',
            old_lieshi_info: '你可以将你场上的牌当作场上没有的延时锦囊牌使用并执行一项，然后令目标角色执行后一项：『①受到1点火焰伤害；②弃置手牌中的所有【闪】；③弃置手牌中的所有【杀】』。',
            old_dianzhan: '点盏',
            old_dianzhan_info: '锁定技，当你于每轮第一次使用一种花色的牌后，你依次执行以下选项直到你执行完所有选项或需要执行无法执行的选项：『①重铸此花色的一张手牌；②若此牌仅指定一个目标，你令其横置；③摸一张牌』。',
            old_huanyin: '还阴',
            old_huanyin_info: '锁定技，当你进入濒死状态时，你将〖烈誓〗和〖点盏〗描述『 』中的内容倒置，然后将手牌数补至四张。',
            old_yunshen: '熨身',
            old_yunshen_info: '出牌阶段各限一次，你可以令一名其他角色回复1点体力，然后你选择一项：①视为你对其使用一张冰【杀】；②视为其对你使用一张冰【杀】。',
            old_shangshen: '伤神',
            old_shangshen_info: '当一名角色受到属性伤害后，你可以选择下列两项：①获得你场上的所有牌；②将其一张牌当作随机一张延时锦囊牌对你使用；③令其将手牌数补至四张。',
            old_fenchai: '分钗',
            old_fenchai_info: '锁定技，你和首次成为你发动技能指定的异性角色的牌的花色均视为红桃。首次成为你发动技能指定的异性角色死亡时，其可以交给你至多一半手牌（向上取整）。',
            bolyuheng: '驭衡',
            bolyuheng_info: '锁定技。①回合开始时，你须弃置任意张花色不同的牌，随机获得等量吴势力角色的技能。②回合结束时，你失去所有因〖驭衡〗获得的技能，然后摸等量的牌。',
            bolyuheng_faq: 'FAQ',
            bolyuheng_faq_info: '非全扩技能库如下：<br>制衡、缔盟、慎行、下书、弘援、观微、安恤、秉壹、兴学、澜疆、安国、戒训、调度、弼政、诱敌',
            boldili: '帝力',
            boldili_info: '觉醒技，游戏开始时/当你增加或减少体力上限后/当你获得或失去技能后，若你拥有的技能数大于你的体力上限时，你减1点体力上限，选择失去任意个其他技能，然后获得〖圣质〗、〖权道〗、〖持纲〗的前等量个。',
            bolchuanwu: '穿屋',
            bolchuanwu_info: '锁定技。当你造成或受到伤害后，你失去武将牌上的前X个技能直到回合结束，然后你摸等同于你此次失去的技能数的牌（X为你的攻击范围）。',
            bolzhuhai: '诛害',
            bolzhuhai_info: '其他角色的回合结束时，若其本回合内造成过伤害，则你可以将一张手牌当作【杀】或【过河拆桥】对其使用。',
            bilibili_zhiyinxian: '机先',
            bilibili_zhiyinxian_info: '其他角色的回合开始时，你可以令其跳过本回合的一个阶段（不能选择准备阶段和结束阶段和你已选择过的阶段）。当你杀死角色后，你可以选择一个你已选择过的时机，然后你视为未选择过此时机。',
            bolhuanshi: '缓释',
            bolhuanshi_info: '一名角色的判定牌生效前，你可令其观看你的手牌并选择其中一张牌替代此牌，然后你可以重铸任意张牌。',
            oldx_lieshi: '烈誓',
            oldx_lieshi_info: '出牌阶段，你可以执行其中一项：『受到1点火焰伤害并废除判定区；弃置手牌中的所有【闪】；弃置手牌中的所有【杀】』，然后你令一名其他角色选择执行另一项（不能选择无法执行的选项）。',
            oldx_dianzhan: '点盏',
            oldx_dianzhan_info: '锁定技，当你于每轮第一次使用一种花色的牌后，你横置此牌的唯一目标并重铸手牌中所有与此牌花色相同的牌。',
            bollihuo: '疠火',
            bollihuo_info: '当你使用普通【杀】时，可以将此牌改为火【杀】，且你本局游戏使用火【杀】可以额外指定一个目标。此牌第一次造成伤害时，你须弃置两张牌或失去1点体力。',
            bolchunlao: '醇醪',
            bolchunlao_info: '当一名与你距离为1以内的角色因弃置而失去【杀】后，其可以将此【杀】置于你的武将牌上，称为“醇”。当一名角色处于濒死状态时，你可以移去X张“醇”（X为你本轮发动此技能的次数），令其视为使用一张【酒】，然后将其下一个判定阶段改为摸牌阶段。',
            bolkuangbi: '匡弼',
            bolkuangbi2: '匡弼',
            bolkuangbi_info: '出牌阶段限一次，你可以与一名其他角色将任意张牌置于其武将牌上。若如此做，当你进入濒死状态时或下X个回合开始时，你获得其武将牌上的“匡弼”牌，其摸X张牌（X为其武将牌上的“匡弼”牌数）。',
            bol_shanshan: '闪闪',
            bol_shanshan_info: '当一张基本牌或锦囊牌即将对你生效前，对此牌使用，抵消此牌的效果，然后获得此牌对应的所有实体牌。',
            bol_sanshou: '三首',
            bol_sanshou_skill: '三首',
            bol_sanshou_info: '当你受到伤害时，你可以亮出牌堆顶三张牌。若其中有本回合未被使用过的牌的类型，防止此伤害。',
            bol_sanshou_skill_info: '当你受到伤害时，你可以亮出牌堆顶三张牌。若其中有本回合未被使用过的牌的类型，防止此伤害。',
            old_zhoufu: '咒缚',
            old_zhoufu2: '咒缚',
            old_zhoufu_info: '出牌阶段限一次，你可以将一张手牌置于一名武将牌旁没有“咒”的其他角色的武将牌旁，称为“咒”。当有“咒”的角色判定时，将“咒”作为判定牌。有“咒”的角色的回合结束时，你获得其武将牌旁的“咒”。',
            old_yingbing: '影兵',
            old_yingbing_info: '当一张“咒”成为判定牌后，你可以摸两张牌。',
            boljiaozong: '骄纵',
            boljiaozong_info: '锁定技，其他角色出牌阶段使用的第一张红色牌无距离限制且目标必须为你。',
            bolchouyou: '仇幽',
            bolchouyou2: '仇幽',
            bolchouyou_info: '当你成为【杀】的目标后，你可以令另一名可以成为此牌目标的其他角色选择一项：①其代替你成为此牌目标；②其发动非锁定技前需经过你同意直到其令你回复体力。',
            bilibili_adong: '萌设阿会喃董荼纳',
            bilibili_adong_prefix: '萌设',
            oldx_zhangzhongjing: '旧张机',
            old_liaoyi: '疗疫',
            old_liaoyi_info: '其他角色的回合开始时，你可选择一项：①令其从仁库中获得一张牌。②若其手牌数不小于2，则令其将X张手牌置入仁库（X为其手牌数与体力值之差，至少为1，至多为9）。',
            bilibili_tannang: '探囊',
            bilibili_tannang_info: '锁定技，你与其他角色计算距离-X（X为你已损失的体力值）。',
            bilibili_yishi: '义释',
            bilibili_yishi_info: '当你对其他角色造成伤害时，你可以防止此伤害，然后获得其装备区的一张牌。',
            bilibili_zhengjun: '整军',
            bilibili_zhengjun_info: '当你受到伤害时，你可以获得装备区里的牌，然后打出一张装备牌。若如此做，你防止此伤害。',
            old_zuoci: '国战左慈',
            old_zuoci_ab: '左慈',
            bilibili_shengxunyu: '生熏鱼',
            bilibili_jinyan: '禁言',
            bilibili_jinyan_info: '锁定技，其他角色于你的回合内至多成为一次你使用非【奇正相生】牌的目标。',
            bilibili_hehu: '呵护',
            bilibili_hehu_info: '锁定技，其他角色回合结束时，其须交给你两张牌，然后其摸两张牌并获得两张【影】（这些牌不计入手牌上限且不能对你使用）。',
            bilibili_yutai: '彧态',
            bilibili_yutai_info: '你可以将X张牌当作【奇正相生】使用（X为你本回合发动〖彧态〗的次数+1，且X至多为3）。',
            bilibili_yutai_append: '<span style="font-family:yuanli">我是活动群团宠，我最爱的就是惹事然后被宵禁</span>',
            bilibili_Firewin: 'Fire.win',
            bilibili_tixiang: '替像',
            bilibili_tixiang_info: '锁定技。①新的一轮开始时，你按照[魏、蜀、吴、群、晋]的顺序获得当前势力的随机两张武将牌的所有无标签技能直至下一轮开始。②当你发动无标签技能结算结束后，你触发一次扩展内置彩蛋。',
            bilibili_tixiang_append: '<span style="font-family:yuanli">我每个月都要换头像，我这儿有很多的鸟可以换</span>',
            bilibili_jinglingqiu: '精灵球',
            bilibili_jinglingqiu_ab: '?',
            bilibili_tiyi: '提议',
            bilibili_tiyi_info: '出牌阶段，若你有牌，你可以记录一名有手牌的其他角色，然后与其议事。若议事有结果且为：红色，你与其各回复1点体力；黑色，你摸两张牌，其摸牌阶段多摸一张牌且手牌上限+1直到其下个回合结束。若议事无结果，你对其造成1点伤害。当你发动〖提议〗后，或场上有角色死亡后，若场上剩余存活的其他角色均已被〖提议〗记录，你清空〖提议〗角色记录且本回合不能发动〖提议〗。',
            bilibili_zili: '资历',
            bilibili_zili_info: '锁定技。①其他角色的摸牌阶段结束后，若该角色本阶段摸牌数A大于0，且你未记录X或X小于A，则你记录X为A。②其他角色的弃牌阶段结束后，若该角色的手牌上限B大于0，且你未记录Y或Y小于B，则你记录Y为B。③若你已有记录X，你的摸牌阶段摸牌基数视为X+1；若你已有记录Y，你的手牌上限视为Y+1。',
            bilibili_zili_append: '<span style="font-family:yuanli">大佬你这么厉害，不如建一个群接纳喜欢你的扩展的人</span>',
            bilibili_suixingsifeng: '随性似风',
            bilibili_daili: '代理',
            bilibili_daili_tag: '统',
            bilibili_daili_info: '锁定技，新的一轮开始时，你移去所有“统”，然后若游戏轮数大于1，你随机获得场上所有其他游戏角色各一张于上一轮使用的所有排对应的实体牌的原类型为基本或普通锦囊牌的复制，称为“统”（“统”移动至其他区域时会被销毁）。',
            bilibili_duoyang: '多样',
            bilibili_duoyangx: '多样',
            bilibili_duoyang_info: '锁定技，游戏开始时，你获得“曹操”、“刘备”、“孙权”卡牌各一张。',
            bilibili_duoyang_append: '〖多样〗衍生武将卡功能：<br>衍生武将卡无主动使用方法，不计入手牌上限，不可被弃置或获得，当“曹操”/“刘备”/“孙权”处于你的手牌区时，你视为拥有技能〖奸雄〗/〖仁德〗/〖制衡〗。<br><br><span style="font-family:yuanli">我是萌新（转型中），我也是个代更者，我还是萌新的朋友，我又是群机器人，所以我到底是...</span>',
            bilibili_duoyang_faq: '〖多样〗衍生武将卡功能',
            bilibili_duoyang_faq_info: '<br>衍生武将卡无主动使用方法，不计入手牌上限，当“曹操”/“刘备”/“孙权”处于你的手牌区时，你视为拥有技能〖奸雄〗/〖仁德〗/〖制衡〗。',
            bilibili_liaoxing: '瞭星',
            bilibili_liaoxing_tag: '星',
            bilibili_liaoxing_info: '锁定技。①你的初始手牌数不会少于X张（X为游戏人数）；分发起始手牌后，所有其他角色的手牌被标记为“星”。②一名角色失去“星”后，其获得等量的【影】。③一名角色失去【影】后，你摸等量的牌。',
            bilibili_mx_kanpo: '看破',
            bilibili_mx_kanpo_info: '其他角色对你使用技能时，你可令此技能对你无效。',
            bilibili_xuxiang: '虚像',
            bilibili_xuxiang_info: '锁定技，防止你受到的伤害。',
            bilibili_Emptycity: 'Empty city°',
            bilibili_thunderlei: '雷',
            bilibili_zhiyou: '致优',
            bilibili_zhiyou_info: '出牌阶段限一次，你可以从其他角色已发动过但未你未因〖致优〗选择的随机三个武将牌上的技能中选择获得其中一个。',
            bilibili_guanli: '管理',
            bilibili_guanli_info: '锁定技。①你对未因〖致优〗获得过其武将牌上的技能的角色使用牌无距离和次数限制。②摸牌阶段，你多摸X张牌（X为你因〖致优〗获得过其武将牌上的技能的游戏角色数）③你因〖致优〗获得过其武将牌上的技能的角色于摸牌阶段多摸三张牌，然后交给你两张牌。',
            bilibili_guanli_append: '<span style="font-family:yuanli">你高考复习要暂时退坑了，这次肯定要整一个大的</span>',
            bilibili_Thunder: 'Thunder',
            bilibili_Thunder_info: '锁定技。①回合开始时，若你的护甲值不等于3-X，你将护甲值调整至3-X（X为你此前发动〖Thunder①〗的次数，且护甲值至少调整至0）。②若你的护甲值大于0，其他角色发动无标签技能后，若本局游戏未因〖Thunder②〗制作过此技能的卡牌，则你制作一张此技能的卡牌并获得之，使用此牌可获得此牌对应的技能（若有此技能则改为摸三张牌），然后若此牌是第一次被使用，则将此牌洗入牌堆，否则将此牌移出游戏。③若你没有护甲值，你使用的有指定目标的非【铁索连环】【借刀杀人】牌结算两次，摸牌时摸牌数翻倍，造成伤害时伤害值翻倍。',
            bilibili_qianxi: '潜习',
            bilibili_qianxi_info: '锁定技，当你受到伤害时，你将伤害值调整为1，然后防止你本回合后续受到的伤害，且其他角色使用牌不能指定你为目标。',
            bilibili_qianxi_append: '<span style="font-family:yuanli">千幻雷音的密码是thunder，不是什么“Thunder”、“thunder，憋问了。”不带符号，不带空格。小雷音寺已解散，Thunder小游戏扩展的密码是thunderXYX，求求你们不要私信问我密码为什么不对了，憋问了。</span>',
            bilibili_lonelypatients: 'lonely patients',
            bilibili_meihua: '美化',
            bilibili_meihua_info: '分发起始手牌前，你将牌堆中的所有装备牌置于武将牌上（这些牌可如手牌般使用，且每回合每种副类别的牌限使用一次）。你的装备栏不会被废除。没有〖美化〗的角色的出牌阶段限一次，其可以交给拥有〖美化〗的一名角色并将一张手牌当作本局游戏牌堆组成的一张装备牌装备之。',
            bilibili_gongyou: '攻优',
            bilibili_gongyou_info: '锁定技。若场上存活角色的一半（向上取整）的装备区里有：武器牌，你视为拥有技能〖枭姬〗；防具牌，你视为拥有技能〖旋风〗；防御马，你视为拥有技能〖飞影〗；攻击马，你视为拥有技能〖马术〗。若均不满足，你视为拥有技能〖绮冑〗。',
            bilibili_gongyou_append: '<span style="font-family:yuanli">之前你说的，我把所有图抠好了给我管理的哈</span>',
            bilibili_renwang: '仁望值',
            bolyuanqing: '渊清',
            bolyuanqing_info: '出牌阶段限一次，你可以展示一张手牌，然后其他角色可依次选择是否弃置其中一张颜色与此牌相同的牌并摸一张牌。然后你可以将其中一张弃置的牌置于牌堆顶。',
            bolshuchen: '疏陈',
            bolshuchen_info: '当一名角色进入濒死状态时，你可以消耗至多3点' + get.RenWangInform() + '并摸等量张牌，然后你可以交给其至多等量张牌。',
            bolxiezheng: '挟政',
            bolxiezheng_info: '弃牌阶段结束时，你可以消耗1点' + get.RenWangInform() + '并令一名角色弃置X张牌（X为本阶段你弃置的牌数）。',
            bol_zhangzhongjing: '废案张机',
            bolliaoyi: '疗疫',
            bolliaoyi_info: '出牌阶段开始时，你可以令一名角色获得从牌堆或弃牌堆中获得其上个回合开始至现在失去过的牌的类型的牌各一张。',
            bolbinglun: '病论',
            bolbinglun_info: '出牌阶段限一次，你可以失去至多3点' + get.RenWangInform() + '，令：⒈等量名角色各选择执行以下一项；⒉一名角色执行以下等量项。①将手牌数补至体力上限（至多摸五张）；②回复1点体力；③防止下一次受到的伤害直到回合开始。',
            bfake_jiananfeng: '蝶设贾南风',
            bfake_jiananfeng_prefix: '蝶设',
            bolduliao: '毒獠',
            bolduliao_info: '锁定技，一名角色使用牌时，若此牌上次进入弃牌堆前在位于的区域，则你令此牌无效，然后其对你造成1点伤害。',
            bolhuidu: '秽妒',
            bolhuidu_info: '当你造成或受到伤害时，若伤害来源为：男性，其可以重铸任意张牌并防止此伤害；女性，你可以选择一个区域，令其重铸此区域的所有牌。',
            bolfushou: '覆手',
            bolfushou_info: '觉醒技，一名角色的回合结束时，若你的体力值不为全场最高，则交换你的手牌和本回合进入且位于弃牌堆的牌，然后交换牌堆和弃牌堆，最后交换你的体力值和体力上限（溢出的体力值改为增加等量护甲）。',
            //千里走单骑
            DJ_caiyang: '蔡阳',
            DJ_pujing: '普净',
            DJ_huban: '胡班',
            //十常侍
            biliscs_shichangshi: '十常侍',
            biliscs_zhangrang: '张让',
            biliscs_zhaozhong: '赵忠',
            biliscs_sunzhang: '孙璋',
            biliscs_bilan: '毕岚',
            biliscs_xiayun: '夏恽',
            biliscs_hankui: '韩悝',
            biliscs_lisong: '栗嵩',
            biliscs_duangui: '段珪',
            biliscs_guosheng: '郭胜',
            biliscs_gaowang: '高望',
            bolyingtu: '营图',
            bolyingtu_info: '①当你的上家于摸牌阶段外获得牌后，你可以获得其等量的牌，然后将等量的牌交给你的下家。②当你的下家使用【杀】或【决斗】指定第一个目标时，若目标角色不包含你和你的上家，则你可以取消此牌的所有目标，然后将此牌目标改为你的上家。',
            bolcongshi: '从势',
            bolcongshi_info: '锁定技。①体力值最大的角色对你的上家和下家使用牌无距离限制。②有角色使用因〖从势①〗增加距离的牌对你的上家或下家造成伤害后，你回复1点体力。',
            dom_chouxiang: '抽象',
            dom_chouxiang_info: '锁定技，你对其他宿舍成员使用牌无距离和次数限制；当你使用牌或发动技能时，若其中包含其他宿舍成员，则你和这些角色各摸一张牌，然后进行同时拼点，不能拼点和拼点没赢的角色于此牌或技能结算完毕后于本轮移出游戏。',
            dom_chouxiang_append: '<span style="font-family:yuanli">抽象对抽象，不抽象的陪' + get.bolInformX('牢大', '仅娱乐，请勿过度解读') + '打复活赛</span>',
            'bilibili_kuangshen04': '狂神',
            BTmakeBug: 'PR',
            BTmakeBug_info: '锁定技，回合结束时，你将手牌数摸至七张，然后若你没有手牌，你结束本局游戏，否则你随机伪装你的一张手牌的花色点数，然后X须猜测其中哪一张为此伪装牌，若X猜错，你获得两张【影】，然后在牌堆中洗入20张【影】（洗入的【影】无花色且点数为114514，X为game.me，若game.me与你同阵容或game.me未存活则改为随机一名敌方角色）。',
            BTtequ: '特取',
            BTtequ_info: '你可以将一张【影】当任意基本牌或锦囊牌使用或打出。',
            BTguoshou: '锅首',
            BTguoshou_info: '锁定技。①你删除【影】进入弃牌堆销毁和洗牌不进入牌堆的机制。②所有对其他角色造成的无来源伤害或伤害来源不为你的伤害均将伤害来源改为你。③其他角色使用的所有伤害类卡牌的伤害来源改为你。④game.me阵亡后，或洗牌后牌堆中的【影】数不小于300张，你结束本局游戏。',
            bilibili_shen_guojia: '知箸侠',
            bilibili_huishi: '慧识',
            bilibili_huishi_info: '限定技，出牌阶段限一次，若你的体力上限小于10，你可进行判定牌不置入弃牌堆的判定。若判定结果与本次发动技能时的其他判定结果的花色均不相同且你的体力上限小于10，则你加1点体力上限，且可以重复此流程。然后你将所有位于处理区的判定牌交给一名角色。若其手牌数为全场最多，则你减1点体力上限。',
            bilibili_re_xusheng: '宝神',
            bilibili_pojun: '破军',
            bilibili_pojun_info: '当你使用【杀】指定一个目标后，你可以获得其所有手牌。若你的手牌数为全场唯一最多，则你造成和受到的伤害均+1。',
            bilibili_baodao: '宝刀',
            bilibili_xushao: '萌设许劭',
            bilibili_xushao_prefix: '萌设',
            bilibili_pingjian: '评鉴',
            bilibili_pingjian_info: '持恒技，锁定技。游戏开始时，或当你的随从武将牌阵亡后，你减1点体力上限，从随机每个势力的各随机两张武将牌中选择一张武将牌作为随从武将牌，然后你将武将牌替换为此随从。（随从武将牌初始2血2上限4手牌，每个势力的武将牌每局游戏只能选择一次）',
            bfake_shen_jiaxu: '蝶设神贾诩',
            bfake_shen_jiaxu_prefix: '蝶设神',
            boljiandai: '缄殆',
            boljiandai_info: '锁定技，你的武将牌始终背面朝下。',
            boljiandai_info_guozhan: '锁定技，你的武将牌始终叠置。',
            bolfangcan: '纺残',
            bolfangcan_info: '锁定技，一名角色的回合结束时，你视为使用本回合进入且位于弃牌堆中的唯一一张普通锦囊牌或伤害牌。',
            boljuemei: '绝殙',
            boljuemei_info: '锁定技，一名角色脱离受伤状态或濒死状态后，你装备【吴起兵法】，然后若你为偶数次发动此技能，则你失去武将牌上的首个技能。',
            bol_wuqibingfa: '吴起兵法',
            bol_wuqibingfa_info: '锁定技，当此牌离开装备区时，你销毁此牌，然后令至多X名角色于本回合结束时将一张牌当作【杀】使用（X为你拥有的技能数）。',
            bolluoshu: '络殊',
            bolluoshu_info: '锁定技，准备阶段，你从随机三个限定技中选择一个获得（若你未拥有〖纷殕〗，则选项必定包含〖纷殕〗）。',
            bolfenfou: '纷殕',
            bolfenfou_info: '限定技，一轮游戏开始时，你可以令场上所有角色同时选择两项：①将武将牌翻面；②摸两张牌；③于本轮获得〖鸩毒〗。',
            bolfenfou_info_guozhan: '限定技，一轮游戏开始时，你可以令场上所有角色同时选择两项：①叠置武将牌；②摸两张牌；③于本轮获得〖鸩毒〗。',
            bolxiongsuan: '凶算',
            bolxiongsuan_info: '限定技，出牌阶段，你可以弃置一张手牌并对一名与你势力相同的角色造成1点伤害，然后摸三张牌。若该角色有已发动的限定技，你选择其中一个限定技并于此回合结束时复原之。',
            bfake_shen_zhangfei: '蝶设神张飞',
            bfake_shen_zhangfei_prefix: '蝶设神',
            bolbaohe: '暴喝',
            bolbaohe_info: '锁定技。①你的锦囊牌均视为无次数限制的无属性【杀】。②你使用牌造成的伤害改为此牌对应的所有实体牌的牌名字数之和。',
            bolrenhai: '人骇',
            bolrenhai_info: '锁定技，当你对一名角色造成伤害时，其选择以下任意其可执行项（可重复选择）并减少对应序号的伤害：①进行【闪电】判定；②获得〖仇海〗或〖崩坏〗；③将本项并入邻项；④获得〖无谋〗或〖止息〗。',
            boltiandong: '天动',
            boltiandong_info: '锁定技，准备阶段，你令场上所有拥有因〖人骇〗获得技能的角色失去因〖人骇〗获得的技能，然后你随机获得牌堆中X张点数最大的牌（X为你本次移去的技能数），然后你选择一项：①将武将牌翻面；②复原〖人骇〗。',
            bfake_shen_zhangjiao: '蝶设神张角',
            bfake_shen_zhangjiao_prefix: '蝶设神',
            bolyifu: '蚁附',
            bolyifu_info: '转换技。①一名角色可以将一张基本牌当作{天，【闪电】；地，【随机应变】；人，【铁索连环】}使用。②当你成为〖蚁附①〗转化的牌的目标后，你摸一张牌。',
            boltianjie: '天劫',
            boltianjie_info: '锁定技。①一名角色的【闪电】生效时，取消之，然后你对其或其上家或下家造成1点雷属性伤害。②一名角色的【闪电】判定牌生效后，若判定牌不为【闪】，则令其继续进行【闪电】判定。',
            bfake_huanwen: '蝶设桓温',
            bfake_huanwen_prefix: '蝶设',
            bolyuba: '欲罢',
            bolyuba_info: '当你造成或受到伤害后，你可以将手牌摸至X张牌（X为此技能发动的次数+1），然后弃置一张点数为X的牌或失去一个技能。',
            bolxingjiang: '行将',
            bolxingjiang_info: '出牌阶段限一次，你可以弃置至少两张同名基本牌或普通锦囊牌，若如此做，你获得一个技能效果为“每回合限一次，你可以视为使用一张【XXX】”的技能（XXX为你本次弃置牌的牌名）。',
            bilibili_ningjingzhiyuan: '宁静致远',
            bilibili_xiezhi: '协治',
            bilibili_xiezhi_info: '锁定技，其他角色的回合开始时，你选择X次牌的类别，其本回合至多使用选择类别次数的对应类别的牌（X为其手牌数且至少为3，仅限选择基本、锦囊、装备且每种类别至少选择一次）。',
            bilibili_fazhou: '罚肘',
            bilibili_fazhou_info: '一轮游戏开始时，你可以选择任意名上一轮使用过三种类别的牌或造成过伤害的其他角色，对这些角色依次肘成1点伤害，然后本轮将其肘出游戏。',
            bilibili_fazhou_append: '<span style="font-family:yuanli">不顺群意者，当填黑屋之壑。<br>吾令不从者，当膏肘击群之锷。</span>',
            bilibili_xizhicaikobe: '戏志才',
            bilibili_biexiao: '憋笑',
            bilibili_xingshi: '醒世',
            bilibili_xingshi_info: '锁定技。若你的势力为魏/蜀/吴/群/晋，则你视为拥有对应势力效果。',
            bilibili_xingshi_wei: '魏业',
            bilibili_xingshi_wei_info: '回合开始时，你可以弃置一张牌并令一名其他角色选择一项：①弃置一张牌；②令你摸一张牌。',
            bilibili_xingshi_shu: '蜀义',
            bilibili_xingshi_shu_info: '锁定技。①你使用【杀】上限+1。②出牌阶段结束时，若你于此阶段使用【杀】的次数不少于2，摸一张牌。',
            bilibili_xingshi_wu: '吴耀',
            bilibili_xingshi_wu_info: '回合结束时，若你的手牌数不等于你的体力值，则你摸一张牌。',
            bilibili_xingshi_qun: '群心',
            bilibili_xingshi_qun_info: '锁定技，弃牌阶段开始时，若你的手牌数比体力值多2或更多，你本回合手牌上限+1；若你已损失体力值大于1，你手牌上限+1',
            bilibili_xingshi_jin: '晋势',
            bilibili_xingshi_jin_info: '摸牌阶段结束时，你可以展示你于此阶段内因摸牌而获得的牌。若这些牌的花色均不同，则你摸一张牌。',
            bilibili_xingshi_awaken_wei: '许昌',
            bilibili_xingshi_awaken_wei_info: '锁定技，当你受到伤害后，你摸一张牌。',
            bilibili_xingshi_awaken_shu: '成都',
            bilibili_xingshi_awaken_shu_info: '锁定技，当你使用【杀】造成伤害后，你摸一张牌。',
            bilibili_xingshi_awaken_wu: '武昌',
            bilibili_xingshi_awaken_wu_info: '锁定技，当你使用装备牌时，你摸一张牌。',
            bilibili_xingshi_awaken_qun: '邺城',
            bilibili_xingshi_awaken_qun_info: '锁定技，当你使用锦囊牌指定其他角色为目标后，你摸一张牌。',
            bilibili_xingshi_awaken_jin: '洛阳',
            bilibili_xingshi_awaken_jin_info: '锁定技，结束阶段，若你手牌中的花色数小于3，则你摸一张牌。',
            bilibili_zhangcai: '彰才',
            bilibili_zhangcai_info: '当你获得牌后，你可以使用其中一张牌（无距离和次数限制），然后根据你本局游戏以此法使用过的花色数视为拥有对应技能：≥1，〖蟨蛮〗；≥2，〖鹣蛮〗；≥3，〖傲才〗；≥4，〖恃才〗。',
            bilibili_zhangcai_append: '<span style="font-family:yuanli"><li>憋笑ing<br><li>seven!seven!</span>',
            bol_pinjian: '品鉴',
            bol_pinjian_info: '每回合限一次，你可以于合适的时机发动武将牌堆顶四张牌中的一个技能并将这四张武将牌置入武将牌堆底。',
            bol_yuedan: '月旦',
            bol_yuedan_info: '一轮游戏开始时，若当前游戏轮数为4的倍数，则你洗切武将牌堆。',
            bilibili_daxiao: '乐大乔小乔',
            bilibili_daxiao_prefix: '乐',
            bilibili_qiqin: '绮琴',
            bilibili_qiqin_info: '锁定技。①你的起始手牌数×2；游戏开始时，你将所有手牌标记为“琴”。②你的“琴”牌不计入手牌上限。③准备阶段，你获得位于弃牌堆的所有“琴”。',
            bilibili_yanjing: '👁👃👁',
            bilibili_yanjing_ab: '眼睛👁',
            bilibili_dongcha: '洞察',
            bilibili_dongcha_info: '每回合限一次。当你成为其他角色使用牌的目标后，你可以判定，若结果为黑色，你令此牌对你无效且你摸一张牌。',
            bilibili_mingcha: '明察',
            bilibili_mingcha_info: '出牌阶段限一次，你可以展示一名其他角色的手牌，然后选择一项：1.其交给一张牌；2.你交给其一张牌。若你以此法交出的牌与其以此法展示的牌类别不同，你摸一张牌。',
            bilibili_huiyan: '慧眼',
            bilibili_huiyan_info: '锁定技。准备阶段，你令一名其他角色选择一项：1.你回复1点体力；2.你摸一张牌。',
            bilibili_caifuren: '蔡夫人-暗黑傀儡师',
            bilibili_caifuren_ab: '蔡夫人',
            bilibili_kuilei: '傀儡',
            get bilibili_kuilei_info() {
                const str = ' ，然后你将主将替换为姓名包含“蔡”但不包含“蔡夫人”的武将牌，将副将替换为姓名包含“夫人”但不包含“蔡夫人”的武将牌（保留此技能且不替换势力和性别）。';
                return [
                    '锁定技，若你的武将牌有“蔡夫人-暗黑傀儡师”，则：',
                    '①' + (get.mode() === 'guozhan' ? '当你明置“蔡夫人-暗黑傀儡师”后' : '游戏开始时') + '，你移除另一张武将牌（若有）' + str,
                    '②当你死亡前，若你的体力上限大于0，则你取消之，将全部武将牌替换为单将“蔡夫人-暗黑傀儡师”，减1点体力上限并将体力回复至上限' + str,
                ].join('');
            },
            old_jieyan: '节言',
            old_jieyan_info: '准备阶段，你可以对一名角色造成1点伤害，然后其选择一项：1.跳过下个弃牌阶段；2.回复1点体力，其下个弃牌阶段手牌上限-2且你可以将其此阶段弃置的牌交给另一名角色。',
            old_jinghua: '镜花',
            old_jinghua_info: '当其他角色获得你的牌后，或当你交给其他角色牌后，其回复1点体力。当你失去最后的手牌后，你可以将此技能描述中的“回复”改为“失去”。',
            old_shuiyue: '水月',
            old_shuiyue_info: '当其他角色受到你造成的伤害后，其摸一张牌。当你令其他角色进入濒死状态后，你可以将此技能描述中的“摸”改为“弃置”。',
            bolshicai: '恃才',
            bolshicai_effect: '牌堆顶',
            bolshicai_info: '出牌阶段，牌堆顶的一张牌对你可见。你可以弃置一张牌，然后获得牌堆顶的一张牌，且不能再发动〖恃才〗直到此牌离开你的手牌区。',
        },
    };
    for (var i in huodongcharacter.character) {
        if (!huodongcharacter.character[i][4]) huodongcharacter.character[i][4] = [];
        //if(huodongcharacter.characterSort.huodongcharacter.Cothers.includes(i)&&lib.config.connect_nickname!=='萌新（转型中）') huodongcharacter.character[i][4].push('unseen');
        huodongcharacter.character[i][4].push(((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/character/' + i + '.jpg');
        if (!lib.config.extension_活动武将_DanJi && i.indexOf('DJ_') == 0) delete huodongcharacter.character[i];
        if (!lib.config.extension_活动武将_SCS && i.indexOf('biliscs_') != -1) delete huodongcharacter.character[i];
    }
    //“萌新自设”前缀
    lib.namePrefix.set('萌设', {
        color: '#ff6a6a',
        nature: 'MXpink',
        showName: '萌',
    });
    lib.namePrefix.set('蝶设', {
        color: '#ff6a6a',
        nature: 'MXpink',
        showName: '蝶',
    });
    lib.namePrefix.set('蝶设神', {
        getSpan: (prefix, name) => `${get.prefixSpan('蝶设')}${get.prefixSpan('神')}`,
    });
    lib.config.all.characters.push('huodongcharacter');
    lib.config.all.sgscharacters.push('huodongcharacter');
    if (!lib.config.characters.includes('huodongcharacter')) lib.config.characters.remove('huodongcharacter');
    lib.translate['huodongcharacter_character_config'] = '<span style="font-family: xingkai">其他武将</span>';
    return huodongcharacter;
};

export default packs;