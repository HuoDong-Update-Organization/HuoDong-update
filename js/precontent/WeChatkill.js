import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

const packs = function () {
    var WeChatkill = {
        name: 'WeChatkill',
        connect: true,
        characterSort: {
            WeChatkill: {
                wechat_standard: ['wechat_sp_zhenji', 'wechat_guozhao', 'wechat_re_zuoci', 'wechat_jikang', 'wechat_lizhaojiaobo', 'wechat_liucheng', 'wechat_sunhanhua', 'wechat_zhugeguo', 'wechat_sp_diaochan', 'wechat_sunluyu', 'wechat_old_zhaoxiang', 'wechat_yj_ganning', 'wechat_re_luxun', 'wechat_yj_xuhuang', 'wechat_ganfuren', 'wechat_sunhao', 'wechat_yj_weiyan', 'wechat_sp_zhugeliang', 'wechat_zhenji', 'wechat_liuyan', 'wechat_sp_wangcan', 'wechat_xushi', 'wechat_baosanniang', 'wechat_litong', 'wechat_yj_zhoubuyi', 'wechat_jsp_huangyueying', 'wechat_re_gongsunzan', 'wechat_guanyinping', 'wechat_sp_machao', 'wechat_pangdegong', 'wechat_gongsunyuan', 'wechat_xusheng', 'wechat_yufan', 'wechat_handang', 'wechat_wanglang', 'wechat_huanghao', 'wechat_caiyong', 'wechat_yj_huangzhong', 'wechat_zhangzhang', 'wechat_chendeng', 'wechat_taoqian', 'wechat_kanze', 'wechat_xuezong', 'wechat_guyong', 'wechat_guansuo', 'wechat_zumao', 'wechat_yj_jushou', 'wechat_sp_pangde', 'wechat_caojie', 'wechat_zhuling', 'wechat_caizhenji', 'wechat_guohuanghou', 'wechat_yanyan', 'wechat_liaohua', 'wechat_liuyao', 'wechat_quancong', 'wechat_xiahouba', 'wechat_sp_jiangwei', 'wechat_caoxiu', 'wechat_yuanshao', 'wechat_sundeng', 'wechat_re_xushu', 'wechat_caopi', 'wechat_caozhang', 'wechat_buzhi', 'wechat_sp_taishici', 'wechat_masu', 'wechat_caifuren', 'wechat_jianyong', 'wechat_lukang', 'wechat_caozhi', 'wechat_huangyueying', 'wechat_weiyan', 'wechat_gaoshun', 'wechat_sunliang', 'wechat_wangping', 'wechat_sp_caiwenji', 'wechat_caochong', 'wechat_huangzhong', 'wechat_xiahouyuan', 'wechat_pangde', 'wechat_sunshangxiang', 'wechat_xuzhu', 'wechat_guanyu', 'wechat_caocao', 'wechat_shenpei', 'wechat_jiaxu', 'wechat_caoren', 'wechat_liuqi', 'wechat_zhaoxiang', 'wechat_caiwenji', 'wechat_menghuo', 'wechat_re_yuanshu', 'wechat_huaxiong', 'wechat_xiahoushi', 'wechat_xushu', 'wechat_zhaoyun', 'wechat_zhangfei', 'wechat_machao', 'wechat_yangxiu', 'wechat_lvmeng', 'wechat_zhoutai', 'wechat_bianfuren', 'wechat_sunluban', 'wechat_wuguotai', 'wechat_liubiao', 'wechat_liuchen', 'wechat_luxun', 'wechat_pangtong', 'wechat_zhangxingcai', 'wechat_zuoci', 'wechat_mayunlu', 'wechat_ruanhui', 'wechat_xurong', 'wechat_huojun'],
                wechat_extra: ['zhugeliang', 'lvbu', 'lvmeng', 'guanyu'].map(i => `wechat_shen_${i}`),
                wechat_zhiyin: ['xinxianying', 'guohuanghou', 'kongrong', 'caopi', 'jiaxu', 'zhangfei', 'dongzhuo', 'wangyi', 'zhangchunhua', 'hetaihou', 'zhurong', 'jiangwei', 'caozhi', 'liubei', 'sunce', 'xunyu', 'zhenji', 'xuzhu', 'yuanshao', 'lusu', 'guojia', 'lvbu', 'daqiao', 'xiaoqiao', 'caocao', 'zhugeliang', 'simayi', 'machao', 'huangyueying', 'caiwenji', 'zhouyu', 'sunquan', 'guanyu'].map(i => `wechat_zhiyin_${i}`),
                wechat_sb: ['sunshangxiang', 'zhaoyun', 'machao', 'huangzhong', 'caocao', 'sunce'].map(i => `wechat_sb_${i}`),
            },
        },
        character: {
            //标准异构武将
            wechat_menghuo: ['male', 'shu', 4, ['wechathuoshou', 'wechatzaiqi']],
            wechat_re_yuanshu: ['male', 'qun', 4, ['wechatwangzun', 'wechattongji']],
            wechat_huaxiong: ['male', 'qun', 6, ['wechatyaowu']],
            wechat_lvmeng: ['male', 'wu', 4, ['wechatkeji']],
            wechat_xiahoushi: ['female', 'shu', 3, ['wechatqiaoshi', 'wechatyanyu'], ['name:夏侯|null']],
            wechat_xushu: ['male', 'shu', 3, ['wechatwuyan', 'wechatjujian']],
            wechat_zhaoyun: ['male', 'shu', 4, ['wechatlongdan', 'wechatyajiao'], ['tempname:re_zhaoyun', 'die:re_zhaoyun']],
            wechat_zhangfei: ['male', 'shu', 4, ['paoxiao', 'wechatshemao']],
            wechat_machao: ['male', 'shu', 4, ['mashu', 'wechattieji']],
            wechat_yangxiu: ['male', 'wei', 3, ['wechatdanlao', 'wechatrejilei']],
            wechat_zhoutai: ['male', 'wu', 4, ['wechatbuqu', 'wechatfenji']],
            wechat_bianfuren: ['female', 'wei', 3, ['wechatwanwei', 'wechatyuejian'], ['die:ol_bianfuren', 'name:卞|null']],
            wechat_sunluban: ['female', 'wu', 3, ['wechatzenhui', 'wechatrejiaojin'], ['die:xin_sunluban']],
            wechat_wuguotai: ['female', 'wu', 3, ['wechatganlu', 'buyi']],
            wechat_liubiao: ['male', 'qun', 3, ['wechatrerezishou', 'wechatrezongshi']],
            wechat_liuchen: ['male', 'shu', 4, ['zhanjue', 'wechatqinwang']],
            wechat_luxun: ['male', 'wu', 3, ['wechatqianxun', 'lianying']],
            wechat_re_luxun: ['male', 'wu', 3, ['wechatreqianxun', 'relianying']],
            wechat_pangtong: ['male', 'shu', 3, ['wechatlianhuan', 'wechatniepan', 'wechathuzhu']],
            wechat_zhangxingcai: ['female', 'shu', 3, ['wechatshenxian', 'wechatqiangwu']],
            wechat_zuoci: ['male', 'qun', 3, ['wechatyigui', 'wechatshendao']],
            wechat_mayunlu: ['female', 'shu', 4, ['wechatfengpo', 'mashu']],
            wechat_caiwenji: ['female', 'qun', 3, ['wechatbeige', 'wechatduanchang'], ['name:蔡|琰']],
            wechat_old_zhaoxiang: ['female', 'shu', 4, ['wechatfanghun', 'wechatfuhan'], ['die:zhaoxiang', 'tempname:wechat_zhaoxiang']],
            wechat_zhaoxiang: ['female', 'shu', 4, ['wechatrefanghun', 'wechatrefuhan']],
            wechat_liuqi: ['male', 'qun', 3, ['spwenji', 'wechattunjiang'], ['die:sp_liuqi']],
            wechat_caoren: ['male', 'wei', 4, ['wechatjushou']],
            wechat_jiaxu: ['male', 'qun', 3, ['wechatwansha', 'wechatluanwu', 'weimu']],
            wechat_shenpei: ['male', 'qun', '2/3', ['wechatshouye', 'wechatliezhi']],
            wechat_caocao: ['male', 'wei', 4, ['wechatjianxiong']],
            wechat_guanyu: ['male', 'shu', 4, ['new_rewusheng', 'wechatqinglong']],
            wechat_xuzhu: ['male', 'wei', 4, ['wechatluoyi']],
            wechat_sunshangxiang: ['female', 'wu', 3, ['wechatjieyin', 'xiaoji']],
            wechat_pangde: ['male', 'qun', 4, ['mashu', 'wechatmengjin']],
            wechat_xiahouyuan: ['male', 'wei', 4, ['wechatshensu'], ['name:夏侯|渊']],
            wechat_huangzhong: ['male', 'shu', 4, ['wechatliegong']],
            wechat_caochong: ['male', 'wei', 3, ['chengxiang', 'wechatrenxin']],
            wechat_sp_caiwenji: ['female', 'wei', 3, ['wechatchenqing', 'wechatmozhi'], ['name:蔡|琰']],
            wechat_wangping: ['male', 'shu', 4, ['minifeijun', 'wechatbinglve']],
            wechat_sunliang: ['male', 'wu', 3, ['minikuizhu', 'wechatchezheng']],
            wechat_gaoshun: ['male', 'qun', 4, ['xianzhen', 'minijinjiu']],
            wechat_caozhi: ['male', 'wei', 3, ['wechatluoying', 'wechatjiushi']],
            wechat_huangyueying: ['female', 'shu', 3, ['wechatjizhi', 'wechatqicai']],
            wechat_weiyan: ['male', 'shu', 4, ['wechatkuanggu', 'qimou'], ['tempname:re_weiyan', 'die:re_weiyan']],
            wechat_lukang: ['male', 'wu', 4, ['drlt_qianjie', 'wechatjueyan', 'drlt_huairou']],
            wechat_jianyong: ['male', 'shu', 3, ['wechatqiaoshui', 'wechatjyzongshi']],
            wechat_caifuren: ['female', 'qun', 3, ['wechatxinqieting', 'rexianzhou'], ['name:蔡|null']],
            wechat_masu: ['male', 'shu', 3, ['wechatsanyao', 'rezhiman']],
            wechat_sp_taishici: ['male', 'qun', 4, ['wechatjixu'], ['name:太史|慈']],
            wechat_buzhi: ['male', 'wu', 3, ['hongde', 'wechatdingpan']],
            wechat_caozhang: ['male', 'wei', 4, ['wechatrejiangchi']],
            wechat_caopi: ['male', 'wei', 3, ['xingshang', 'wechatfangzhu']],
            wechat_sp_jiangwei: ['male', 'wei', 4, ['wechatkunfen', 'wechatfengliang'], ['tempname:sp_jiangwei']],
            wechat_caoxiu: ['male', 'wei', 4, ['qianju', 'wechatqingxi']],
            wechat_yuanshao: ['male', 'qun', 4, ['wechatluanji'], ['die:re_yuanshao']],
            wechat_sundeng: ['male', 'wu', 4, ['wechatkuangbi']],
            wechat_re_xushu: ['male', 'shu', 4, ['wechatzhuhai', 'qianxin']],
            wechat_xiahouba: ['male', 'shu', 4, ['wechatrebaobian'], ['tempname:xiahouba', 'name:夏侯|霸']],
            wechat_liuyao: ['male', 'qun', 4, ['wechatkannan']],
            wechat_quancong: ['male', 'wu', 4, ['wechatyaoming']],
            wechat_liaohua: ['male', 'shu', 4, ['wechatdangxian', 'wechatfuli']],
            wechat_yanyan: ['male', 'shu', 4, ['wechatjuzhan']],
            wechat_guohuanghou: ['female', 'wei', 3, ['wechatjiaozhao', 'wechatdanxin']],
            wechat_caizhenji: ['female', 'wei', 3, ['wechatsheyi', 'wechattianyin'], ['name:蔡|null']],
            wechat_zhuling: ['male', 'wei', 4, ['wechatzhanyi']],
            wechat_caojie: ['female', 'qun', 3, ['wechatshouxi', 'huimin']],
            wechat_sp_pangde: ['male', 'wei', 4, ['mashu', 'wechatrejuesi']],
            wechat_yj_jushou: ['male', 'qun', 3, ['wechatrejianying', 'shibei'], [...['tempname', 'die'].map(str => str + ':xin_jushou')]],
            wechat_zumao: ['male', 'wu', 4, ['miniyinbing', 'wechatjuedi']],
            wechat_guansuo: ['male', 'shu', 4, ['wechatzhengnan', 'xiefang'], ['tempname:guansuo']],
            wechat_zhangzhang: ['male', 'wu', 3, ['wechatzhijian', 'guzheng']],
            wechat_chendeng: ['male', 'qun', 4, ['wechatzhouxuan', 'wechatfengji']],
            wechat_taoqian: ['male', 'qun', 3, ['zhaohuo', 'wechatyixiang', 'yirang']],
            wechat_kanze: ['male', 'wu', 3, ['xiashu', 'wechatkuanshi']],
            wechat_xuezong: ['male', 'wu', 3, ['minifunan', 'wechatjiexun']],
            wechat_guyong: ['male', 'wu', 3, ['wechatshenxing', 'bingyi']],
            wechat_yj_huangzhong: ['male', 'qun', 4, ['wechatshidi', 'spyishi', 'spqishe']],
            wechat_caiyong: ['male', 'qun', 3, ['wechatbizhuan', 'wechattongbo']],
            wechat_xusheng: ['male', 'wu', 4, ['wechatpojun']],
            wechat_yufan: ['male', 'wu', 3, ['wechatzongxuan', 'wechatzhiyan']],
            wechat_handang: ['male', 'wu', 4, ['gongji', 'wechatjiefan']],
            wechat_wanglang: ['male', 'wei', 3, ['wechatgushe', 'wechatrejici']],
            wechat_huanghao: ['male', 'shu', 3, ['wechatqinqing', 'wechathuisheng']],
            wechat_gongsunyuan: ['male', 'qun', 4, ['wechathuaiyi'], ['name:公孙|渊']],
            wechat_ruanhui: ['female', 'wei', 3, ['wechatmingcha', 'wechatjingzhong']],
            wechat_sp_machao: ['male', 'qun', 4, ['minizhuiji', 'wechatshichou']],
            wechat_pangdegong: ['male', 'qun', 3, ['wechatpingcai', 'xinfu_pdgyingshi']],
            wechat_guanyinping: ['female', 'shu', 3, ['wechatrexuehen', 'wechatrehuxiao', 'wechatwuji']],
            wechat_jsp_huangyueying: ['female', 'qun', 3, ['jiqiao', 'wechatlinglong', 'qicai']],
            wechat_re_gongsunzan: ['male', 'qun', 4, ['yicong', 'wechatqiaomeng'], ['tempname:re_gongsunzan', 'name:公孙|瓒']],
            wechat_yj_zhoubuyi: ['male', 'wei', 3, ['mbhuiyao', 'wechatquesong']],
            wechat_litong: ['male', 'wei', 4, ['wechattuifeng']],
            wechat_baosanniang: ['female', 'shu', 3, ['wechatwuniang', 'wechatxushen', 'decadezhennan']],
            wechat_xushi: ['female', 'wu', 3, ['wengua', 'wechatfuzhu'], ['name:徐|null']],
            wechat_sp_wangcan: ['male', 'wei', 3, ['wechatspqiai', 'wechatspshanxi']],
            wechat_liuyan: ['male', 'qun', 3, ['xinfu_tushe', 'wechatlimu']],
            wechat_zhenji: ['female', 'wei', 3, ['miniluoshen', 'qingguo']],
            wechat_sp_zhugeliang: ['male', 'shu', 3, ['wechathuoji', 'wechatkanpo'], ['die:sb_sp_zhugeliang', 'name:诸葛|亮']],
            wechat_yj_weiyan: ['male', 'qun', 4, ['wechatguli', 'wechataosi']],
            wechat_sunhao: ['male', 'wu', 5, ['wechatcanshi', 'chouhai']],
            wechat_ganfuren: ['female', 'shu', 3, ['dcshushen', 'wechatshenzhi'], ['name:甘|null']],
            wechat_xurong: ['male', 'qun', 4, ['wechatxionghuo', 'xinfu_shajue']],
            wechat_huojun: ['male', 'shu', 4, ['twsidai', 'jieyu']],
            wechat_yj_xuhuang: ['male', 'qun', 4, ['wechatxhzhiyan', 'wechatjiewei']],
            wechat_yj_ganning: ['male', 'qun', 4, ['wechatjinfan', 'wechatsheque']],
            wechat_sunluyu: ['female', 'wu', 3, ['wechatmeibu', 'wechatmumu']],
            wechat_sp_diaochan: ['female', 'qun', 3, ['lihun', 'wechatbiyue']],
            wechat_zhugeguo: ['female', 'shu', 3, ['wechatqirang', 'wechatyuhua']],
            wechat_sunhanhua: ['female', 'wu', 3, ['wechatchongxu', 'miaojian', 'shhlianhua']],
            wechat_liucheng: ['female', 'qun', 3, ['wechatlveying', 'wechatyingwu']],
            wechat_lizhaojiaobo: ['male', 'wei', 4, ['wechatzuoyou', 'wechatshishou']],
            wechat_jikang: ['male', 'wei', 3, ['wechatjikai', 'wechatqingkuang', 'wechatyinyi']],
            wechat_re_zuoci: ['male', 'qun', 3, ['rehuashen', 'wechatrexinsheng']],
            wechat_guozhao: ['female', 'wei', 3, ['yichong', 'wechatwufei'], ['die:xin_guozhao']],
            wechat_sp_zhenji: ['female', 'qun', 3, ['mbbojian', 'wechatjiwei']],
            //神武将
            wechat_shen_zhugeliang: ['male', 'shen', 3, ['wechatqixing', 'wechatjifeng', 'wechattianfa'], ['shu', 'name:诸葛|亮']],
            wechat_shen_lvmeng: ['male', 'shen', 3, ['shelie', 'wechatgongxin'], ['wu']],
            wechat_shen_guanyu: ['male', 'shen', 5, ['wechatwushen'], ['shu']],
            wechat_shen_lvbu: ['male', 'shen', 5, ['wushuang', 'baonu', 'wumou', 'ol_shenfen'], ['qun', 'die:shen_lvbu', 'tempname:shen_lvbu']],
            //只因武将
            wechat_zhiyin_lvbu: ['male', 'qun', 4, ['wushuang', 'wechatxiaohu'], ['die:true']],
            wechat_zhiyin_daqiao: ['female', 'wu', 3, ['wechatjielie', 'wechatxiangzhi'], ['die:true', 'name:桥|null']],
            wechat_zhiyin_xiaoqiao: ['female', 'wu', 3, ['wechattongxin', 'wechatzhaoyan'], ['die:true', 'name:桥|null']],
            wechat_zhiyin_guojia: ['male', 'wei', 3, ['wechatdingce', 'wechatsuanlve'], ['die:true']],
            wechat_zhiyin_caocao: ['male', 'wei', 4, ['wechatdelu', 'wechatzhujiu'], ['die:true']],
            wechat_zhiyin_zhugeliang: ['male', 'shu', 3, ['wechatsangu', 'wechatyanshi'], ['die:true', 'name:诸葛|亮']],
            wechat_zhiyin_simayi: ['male', 'wei', 3, ['wechatyinren', 'wechatduoquan'], ['die:true', 'name:司马|懿']],
            wechat_zhiyin_machao: ['male', 'qun', 4, ['wechatqipao', 'wechatzhuixi'], ['die:true', 'doublegroup:shu:qun']],
            wechat_zhiyin_huangyueying: ['female', 'shu', 3, ['wechatmiaobi', 'wechatrehuixin'], ['die:true']],
            wechat_zhiyin_lusu: ['male', 'wu', 3, ['wechatlvyuan', 'wechathezong'], ['die:true']],
            wechat_zhiyin_yuanshao: ['male', 'qun', 4, ['wechathongtu', 'wechatmengshou'], ['die:true']],
            wechat_zhiyin_xuzhu: ['male', 'wei', 4, ['wechathuhou', 'wechatwuwei'], ['die:true']],
            wechat_zhiyin_sunce: ['male', 'wu', 4, ['wechattaoni', 'wechatpingjiang', 'wechatdingye'], ['die:true', 'zhu']],
            wechat_zhiyin_xunyu: ['male', 'wei', 3, ['wechatwangzuo', 'wechatrejuxian', 'wechatxianshi'], ['die:true']],
            wechat_zhiyin_zhenji: ['female', 'wei', 3, ['wechatshenfu', 'wechatsiyuan'], ['die:true']],
            wechat_zhiyin_caiwenji: ['female', 'qun', 3, ['wechatbeijia', 'wechatresifu'], ['die:true', 'name:蔡|琰']],
            wechat_zhiyin_zhouyu: ['male', 'wu', 3, ['wechatyingrui', 'wechatfenli'/*, 'wechatqugu'*/], ['die:true']],
            wechat_zhiyin_sunquan: ['male', 'wu', 4, ['wechatzongxi', 'wechatluheng'], ['die:true']],
            wechat_zhiyin_guanyu: ['male', 'shu', 4, ['wechatyihan', 'wechatgywuwei'], ['die:true']],
            wechat_zhiyin_liubei: ['male', 'shu', 4, ['wechatguizhi', 'wechathengyi'], ['die:true']],
            wechat_zhiyin_caozhi: ['male', 'wei', 3, ['wechatcaiyi', 'wechataoxiang'], ['die:true']],
            wechat_zhiyin_jiangwei: ['male', 'shu', 4, ['wechatgujin', 'wechatqumou'], ['die:true']],
            wechat_zhiyin_zhurong: ['female', 'shu', 4, ['wechatxiangwei', 'wechatyanfeng'], ['die:true', 'name:null|null']],
            wechat_zhiyin_hetaihou: ['female', 'qun', 4, ['wechatfuyin', 'wechatqiangji'], ['die:true', 'name:何|null']],
            wechat_zhiyin_zhangchunhua: ['female', 'wei', 4, ['wechatjuejue', 'wechatqingshi', 'wechatqingjue'], ['die:true']],
            wechat_zhiyin_dongzhuo: ['male', 'qun', 5, ['wechatweicheng', 'wechatbianguan'], ['die:true']],
            wechat_zhiyin_zhangfei: ['male', 'shu', 4, ['wechatrehupo', 'wechathanxing'], ['die:true']],
            wechat_zhiyin_wangyi: ['female', 'wei', 3, ['wechatzuoqing', 'wechatjianchou'], ['die:true']],
            wechat_zhiyin_caopi: ['male', 'wei', 3, ['wechatchaowei', 'wechatenshe'], ['die:true']],
            wechat_zhiyin_kongrong: ['male', 'qun', 3, ['wechatzhengren', 'wechatjijian'], ['die:true']],
            wechat_zhiyin_jiaxu: ['male', 'qun', 3, ['wechatquanbian', 'wechatkuangshi', 'wechatchenjie'], ['die:true']],
            wechat_zhiyin_guohuanghou: ['female', 'wei', 3, ['wechatjichong', 'wechatyifu'], ['die:true', 'name:郭|null']],
            wechat_zhiyin_xinxianying: ['female', 'wei', 3, ['wechatyanzheng', 'wechatgaojie'], ['die:true']],
            //谋攻
            wechat_sb_sunshangxiang: ['female', 'shu', 3, ['wechatsbliangzhu', 'wechatsbjieyin'], ['border:wu']],
            wechat_sb_zhaoyun: ['male', 'shu', 4, ['wechatsblongdan', 'wechatsbjizhu']],
            wechat_sb_machao: ['male', 'shu', 4, ['wechatjlmashu', 'wechatjltieji']],
            wechat_sb_huangzhong: ['male', 'shu', 4, ['wechatsbliegong']],
            wechat_sb_caocao: ['male', 'wei', 4, ['wechatsbjianxiong', 'sbqingzheng']],
            wechat_sb_sunce: ['male', 'wu', 4, ['wechatsbjiang', 'wechatsbhunzi'], ['tempname:sb_sunce']],
        },
        characterIntro: {
        },
        skill: {
            wechathuoshou: {
                group: 'huoshou1',
                audio: 'huoshou1',
                preHidden: 'huoshou1',
                trigger: { global: 'damageBegin2' },
                filter(event, player) {
                    return event.card && event.card.name == 'nanman' && player.countCards('he') > 0;
                },
                direct: true,
                locked: true,
                content() {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt('wechathuoshou', trigger.player), '弃置一张牌并令此伤害+1').set('goon', get.damageEffect(trigger.player, player, player) > 0).set('ai', function (card) {
                        if (_status.event.goon) return 12 - get.value(card);
                        return 0;
                    }).logSkill = ['wechathuoshou', trigger.player];
                    'step 1'
                    if (result.bool) trigger.num++;
                },
                ai: {
                    expose: 0.25,
                    effect: {
                        target(card, player, target) {
                            if (card.name == 'nanman') return 0;
                        },
                    },
                },
            },
            wechatzaiqi: {
                audio: 'zaiqi',
                trigger: { player: 'phaseDrawBegin1' },
                filter(event, player) {
                    return player.getAllHistory('useSkill', function (evt) {
                        return evt.skill == 'wechatzaiqi';
                    }).length < 7 && !event.numFixed;
                },
                content() {
                    'step 0'
                    trigger.changeToZero();
                    event.cards = get.cards(1 + player.getAllHistory('useSkill', function (evt) {
                        return evt.skill == 'wechatzaiqi';
                    }).length);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(function (player, id, cards) {
                        var str;
                        if (player == game.me && !_status.auto) str = '再起：选择获得一种花色的所有牌';
                        else str = '再起';
                        var dialog = ui.create.dialog(str, cards);
                        dialog.videoId = id;
                    }, player, event.videoId, event.cards);
                    event.time = get.utc();
                    game.addVideo('showCards', player, ['再起', get.cardsInfo(event.cards)]);
                    game.addVideo('delay', null, 2);
                    'step 1'
                    var suits = lib.suit.slice(0).filter(function (suit) {
                        return cards.filter(function (card) {
                            return get.suit(card) == suit;
                        }).length;
                    });
                    suits.reverse();
                    player.chooseControl(suits).set('ai', function () {
                        var map = {};
                        for (var card of _status.event.cards) {
                            var suit = get.suit(card);
                            if (!map[suit]) map[suit] = 0;
                            map[suit]++;
                        }
                        return Object.keys(map).sort(function (a, b) {
                            return map[b] - map[a];
                        })[0];
                    }).set('cards', cards);
                    'step 2'
                    event.cards = cards.filter(function (card) {
                        return get.suit(card) == result.control;
                    });
                    var time = 1000 - (get.utc() - event.time);
                    if (time > 0) game.delay(0, time);
                    'step 3'
                    game.broadcastAll('closeDialog', event.videoId);
                    player.gain(cards, 'gain2');
                },
            },
            wechatqixing: {
                audio: 'qixing',
                trigger: { player: 'dying' },
                round: 1,
                content() {
                    'step 0'
                    player.judge(function (card) {
                        if (get.number(card) > 7) return 2;
                        return -2;
                    }).judge2 = function (result) {
                        return result.bool ? true : false;
                    };
                    'step 1'
                    if (result.bool) player.recover();
                },
            },
            wechatjifeng: {
                init() {
                    lib.onwash.push(function () {
                        delete _status.wechatjifeng_notrick;
                    });
                },
                audio: 'dawu',
                audioname2: { wechat_zhiyin_huangyueying: 'wechatjifeng_wechat_zhiyin_huangyueying' },
                enable: 'phaseUse',
                usable: 1,
                filterCard: lib.filter.cardDiscardable,
                check(card) {
                    return 5 - get.value(card);
                },
                content() {
                    var card = get.cardPile2(function (card) {
                        return get.type2(card) == 'trick';
                    });
                    if (card) player.gain(card, 'gain2');
                    else _status.wechatjifeng_notrick = true;
                },
                ai: {
                    order: 8,
                    player(player, target) {
                        if (_status.wechatjifeng_notrick) return 0;
                        return 1;
                    },
                },
                subSkill: {
                    wechat_zhiyin_huangyueying: { audio: 'ext:活动武将/audio/skill:2' },
                },
            },
            wechattianfa: {
                marktext: '罚',
                group: 'wechattianfa_damage',
                intro: { name2: '罚', content: 'mark' },
                audio: 'kuangfeng',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return player.getHistory('useCard', function (evt) {
                        return get.type2(evt.card) == 'trick' && evt.getParent('phaseUse') == event.getParent('phaseUse');
                    }).indexOf(event) % 2 == 1;
                },
                forced: true,
                locked: false,
                content() {
                    player.addMark('wechattianfa', 1);
                },
                subSkill: {
                    damage: {
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            return player.hasMark('wechattianfa');
                        },
                        direct: true,
                        content() {
                            'step 0'
                            player.chooseTarget([1, player.countMark('wechattianfa')], get.prompt('wechattianfa'), '对至多' + get.cnNumber(player.countMark('wechattianfa')) + '名其他角色造成1点伤害', lib.filter.notMe).set('ai', function (target) {
                                var player = _status.event.player;
                                return get.damageEffect(target, player, player);
                            });
                            'step 1'
                            if (result.bool) {
                                var targets = result.targets.sortBySeat();
                                player.logSkill('wechattianfa', targets);
                                for (var i of targets) i.damage();
                            }
                        },
                    },
                },
            },
            wechatwangzun: {
                audio: 'wangzun',
                trigger: { global: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    if (event.player == player) return false;
                    return event.player.hp > player.hp || event.player.isMaxHp();
                },
                forced: true,
                logTarget: 'player',
                content() {
                    if (trigger.player.hp > player.hp) player.draw();
                    if (trigger.player.isMaxHp()) {
                        trigger.player.addSkill('wechatwangzun2');
                        trigger.player.addMark('wechatwangzun2', 1, false);
                    }
                },
            },
            wechatwangzun2: {
                charlotte: true,
                onremove: true,
                intro: { content: '手牌上限-#' },
                mod: {
                    maxHandcard(player, num) {
                        return num - player.countMark('wechatwangzun2');
                    },
                },
            },
            wechattongji: {
                audio: 'tongji',
                trigger: { global: 'useCardToTarget' },
                filter(event, player) {
                    return event.card.name == 'sha' && event.player != player && !event.targets.includes(player) &&
                        event.target.inRange(player) && event.target.countCards('he') > 0;
                },
                direct: true,
                content() {
                    'step 0'
                    trigger.target.chooseCard('he', '是否对' + get.translation(player) + '发动【同疾】？', '交给' + get.translation(player) + '一张牌，将' + get.translation(trigger.card) + '转移给' + get.translation(player)).set('ai', function (card) {
                        if (!_status.event.check) return -1;
                        return get.unuseful(card) + 9;
                    }).set('check', function () {
                        if (trigger.target.countCards('h', 'shan')) {
                            return -get.attitude(trigger.target, player);
                        }
                        if (get.attitude(trigger.target, player) < 5) {
                            return 6 - get.attitude(trigger.target, player);
                        }
                        if (trigger.target.hp == 1 && player.countCards('h', 'shan') == 0) {
                            return 10 - get.attitude(trigger.target, player);
                        }
                        if (trigger.target.hp == 2 && player.countCards('h', 'shan') == 0) {
                            return 8 - get.attitude(trigger.target, player);
                        }
                        return -1;
                    }() > 0);
                    'step 1'
                    if (result.bool) {
                        trigger.target.logSkill('wechattongji', player);
                        player.gain(result.cards, trigger.target, 'giveAuto');
                        var evt = trigger.getParent();
                        evt.triggeredTargets2.remove(trigger.target);
                        evt.targets.remove(trigger.target);
                        evt.targets.push(player);
                    }
                },
            },
            wechatyaowu: {
                audio: 'yaowu',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                forced: true,
                content() {
                    if (get.color(trigger.card) == 'red') trigger.getParent().directHit.add(player);
                    else player.draw();
                },
            },
            wechatkeji: {
                audio: 'keji',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return player.isPhaseUsing() && get.type(event.card) == 'basic';
                },
                forced: true,
                locked: false,
                content() {
                    player.draw();
                    player.addTempSkill('wechatkeji2');
                    player.addMark('wechatkeji2', 1, false);
                },
            },
            wechatkeji2: {
                onremove: true,
                intro: { content: '手牌上限+#' },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countMark('wechatkeji2');
                    },
                },
            },
            wechatqiaoshi: {
                audio: 'qiaoshi',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return !player.isMaxHandcard();
                },
                forced: true,
                locked: false,
                content() {
                    player.draw();
                },
            },
            wechatyanyu: {
                audio: 'yanyu',
                inherit: 'reyanyu',
                group: 'wechatyanyu2',
            },
            wechatyanyu2: {
                trigger: { player: 'phaseUseEnd' },
                filter(event, player) {
                    return player.getHistory('lose', function (evt) {
                        var evt2 = evt.getParent(4);
                        return evt2.name == 'useSkill' && evt2.skill == 'wechatyanyu' && evt.getParent(6) == event;
                    }).length && game.hasPlayer(function (current) {
                        return current.hasSex('male') && current != player;
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    event.num = Math.min(player.getHistory('lose', function (evt) {
                        var evt2 = evt.getParent(4);
                        return evt2.name == 'useSkill' && evt2.skill == 'wechatyanyu' && evt.getParent(6) == trigger;
                    }).length, 2);
                    player.chooseTarget(get.prompt('wechatyanyu'), '令一名男性角色摸' + get.cnNumber(event.num) + '张牌', function (card, player, target) {
                        return target.hasSex('male') && target != player;
                    }).set('ai', function (target) {
                        return get.attitude(_status.event.player, target);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatyanyu', target);
                        target.draw(event.num);
                    }
                },
            },
            wechatwuyan: {
                audio: 'xinwuyan',
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    return get.type2(event.card) == 'trick';
                },
                forced: true,
                content() {
                    trigger.cancel();
                },
                ai: {
                    notrick: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.type(card) == 'trick' && get.tag(card, 'damage')) return 'zeroplayertarget';
                        },
                    },
                },
            },
            wechatjujian: {
                audio: 'xinjujian',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseCardTarget({
                        prompt: get.prompt2('wechatjujian'),
                        filterTarget: true,
                        position: 'he',
                        filterCard(card, player) {
                            return get.type(card) != 'basic' && lib.filter.cardDiscardable(card, player);
                        },
                        ai1(card) {
                            if (get.tag(card, 'damage') && get.type(card) == 'trick') return 20;
                            return 9 - get.value(card);
                        },
                        ai2(target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) {
                                if (target.hp == 1) att += 3;
                            }
                            return att;
                        },
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill('wechatjujian', target);
                        if (target != player) player.addExpose(0.2);
                        player.discard(result.cards);
                        if (target.hp == target.maxHp && !target.isTurnedOver() && !target.isLinked()) {
                            target.draw(2);
                            event.finish();
                        }
                        else {
                            var controls = ['draw_card'];
                            if (target.hp < target.maxHp) controls.push('recover_hp');
                            target.chooseControl(controls).ai = function () {
                                if (target.hp == 1 && target.maxHp > 2) return 'recover_hp';
                                else if (target.hp == 2 && target.maxHp > 2 && target.countCards('h') > 1) return 'recover_hp';
                                else return 'draw_card';
                            }
                        }
                    }
                    else event.finish();
                    'step 2'
                    switch (result.control) {
                        case 'recover_hp': target.recover(); break;
                        case 'draw_card': target.draw(2); break;
                    }
                },
            },
            wechatlongdan: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.storage && card.storage.wechatlongdan) return Infinity;
                    },
                    aiValue(player, card, num) {
                        if (card.name != 'sha' && card.name != 'shan') return;
                        var geti = function () {
                            var cards = player.getCards('hs', card => card.name == 'sha' || card.name == 'shan');
                            if (cards.includes(card)) return cards.indexOf(card);
                            return cards.length;
                        };
                        return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                    },
                    aiUseful() {
                        return lib.skill.wechatlongdan.mod.aiValue.apply(this, arguments);
                    },
                },
                locked: false,
                audio: 'longdan_sha',
                audioname: ['re_zhaoyun'],
                audioname2: { wechat_zhaoxiang: 'fanghun' },
                enable: ['chooseToUse', 'chooseToRespond'],
                position: 'hs',
                prompt: '将【杀】/【闪】当作【闪】/【杀】使用或打出',
                viewAs(cards, player) {
                    if (cards.length) {
                        var name = false;
                        switch (get.name(cards[0], player)) {
                            case 'sha': name = 'shan'; break;
                            case 'shan': name = 'sha'; break;
                        }
                        if (name) return { name: name, storage: { wechatlongdan: true } };
                    }
                    return null;
                },
                check: (card) => 1,
                filterCard(card, player, event) {
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = get.name(card, player);
                    if (name == 'sha' && filter({ name: 'shan', storage: { wechatlongdan: true }, cards: [card] }, player, event)) return true;
                    if (name == 'shan' && filter({ name: 'sha', storage: { wechatlongdan: true }, cards: [card] }, player, event)) return true;
                    return false;
                },
                filter(event, player) {
                    if (event.filterCard(get.autoViewAs({ name: 'sha', storage: { wechatlongdan: true } }, 'unsure'), player, event) && player.countCards('hs', 'shan')) return true;
                    if (event.filterCard(get.autoViewAs({ name: 'shan', storage: { wechatlongdan: true } }, 'unsure'), player, event) && player.countCards('hs', 'sha')) return true;
                    return false;
                },
                precontent() {
                    event.getParent().addCount = false;
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
                        return 4;
                    },
                },
            },
            wechatyajiao: {
                audio: 'reyajiao',
                trigger: { player: ['useCard', 'respond'] },
                filter(event, player) {
                    if (_status.currentPhase == player) return false;
                    return player.hasHistory('lose', evt => {
                        if (evt.getParent() != event) return false;
                        return event.cards.some(card => evt.hs.includes(card));
                    });
                },
                frequent: true,
                content() {
                    player.draw();
                },
            },
            wechatqinggang: {
                derivation: 'qinggang_skill',
                mod: {
                    attackRange(player, num) {
                        if (player.hasEmptySlot(1)) return num + 1;
                    },
                },
                audio: 'qinggang_skill',
                inherit: 'qinggang_skill',
                filter(event, player) {
                    if (!player.hasEmptySlot(1)) return false;
                    return event.card.name == 'sha';
                },
            },
            wechatshemao: {
                mod: {
                    targetInRange(card) {
                        if (_status.event.skill == 'wechatshemao') return true;
                    },
                },
                audio: 'zhangba_skill',
                enable: 'chooseToUse',
                usable: 1,
                filterCard: true,
                selectCard: 2,
                position: 'hs',
                viewAs: { name: 'sha' },
                viewAsFilter(player) {
                    return player.isPhaseUsing() && player.countCards('hs') >= 2;
                },
                complexCard: true,
                filter(event, player) {
                    return player.isPhaseUsing() && player.countCards('hs') >= 2;
                },
                audio: true,
                prompt: '将两张手牌当作【杀】使用或打出',
                check(card) {
                    if (card.name == 'sha') return 0;
                    return 5 - get.value(card);
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player) {
                        return player.countCards('hs') >= 2;
                    },
                },
            },
            wechattieji: {
                audio: 'tieji',
                shaRelated: true,
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                logTarget: 'target',
                content() {
                    'step 0'
                    player.judge(function (card) {
                        if (get.color(card) == 'red') return 2;
                        return -0.5;
                    }).set('judge2', function (result) {
                        return result.bool;
                    }).set('callback', function () {
                        if (get.position(card, true) == 'o' && get.color(card) == 'black') player.gain(card, 'gain2');
                    });
                    'step 1'
                    if (result.bool) trigger.getParent().directHit.add(trigger.target);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || get.color(ui.cardPile.firstChild, player) != 'red') return false;
                    },
                },
            },
            wechatwushen: {
                mod: {
                    cardUsable(card, player) {
                        if (card.name == 'sha' && ['heart', 'unsure'].includes(get.suit(card))) return Infinity;
                    },
                    targetInRange(card, player) {
                        if (card.name == 'sha' && ['diamond', 'unsure'].includes(get.suit(card))) return true;
                    },
                },
                audio: 'wushen',
                enable: 'chooseToUse',
                filterCard(card, player) {
                    return get.color(card) == 'red';
                },
                position: 'hes',
                viewAs: { name: 'sha' },
                viewAsFilter(player) {
                    return player.countCards('hes', { color: 'red' });
                },
                prompt: '将一张红色牌当作【杀】使用',
                check(card) {
                    return 5 - get.value(card);
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes', { color: 'red' })) return false;
                    },
                },
            },
            wechatxiaohu: {
                mod: {
                    selectTarget(card, player, num) {
                        if (card.name == 'sha' && num[1] != -1) num[1]++;
                    },
                },
                audio: 'shenji',
                //trigger:{player:'phaseUseBegin'},
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('h');
                },
                filterCard: lib.filter.cardDiscardable,
                check(card) {
                    var player = _status.event.player;
                    if (card.name == 'sha') return 0;
                    if (!player.countCards('hs', { name: 'sha' })) return 7 - get.value(card);
                    return 4.5 - get.value(card);
                },
                content() {
                    //'step 0'
                    //player.chooseToDiscard('h',get.prompt('wechatxiaohu'),'弃置一张手牌并从牌堆中获得一张【杀】').set('ai',function(card){
                    //var player=_status.event.player;
                    //if(card.name=='sha') return 0;
                    //if(!player.countCards('hs',{name:'sha'})) return 7-get.value(card);
                    //return 4.5-get.value(card);
                    //}).logSkill='wechatxiaohu';
                    //'step 1'
                    //if(result.bool){
                    var card = get.cardPile2(card => card.name == 'sha');
                    if (card) player.gain(card, 'gain2');
                    //}
                },
                ai: {
                    order: (item, player) => get.order({ name: 'sha' }) + 0.3,
                    result: { player: 1 },
                },
                group: 'wechatxiaohu_log',
                subSkill: {
                    log: {
                        charlotte: true,
                        forceaudio: true,
                        audio: 'shenji',
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            if (!player.hasSkill('wechatxiaohu')) return false;
                            return event.card.name == 'sha' && event.targets.length > 1;
                        },
                        priority: 15,
                        forced: true,
                        locked: false,
                        content() { },
                    },
                },
            },
            wechatdanlao: {
                audio: 'danlao',
                enable: 'phaseUse',
                usable: 1,
                delay: 0,
                content() {
                    'step 0'
                    event.list = [];
                    for (var i of game.players) if (i != player) event.list.push(i);
                    player.draw(game.players.length);
                    'step 1'
                    var cards = result;
                    if (get.itemtype(cards) != 'cards') {
                        event.goto(5);
                        return;
                    }
                    var hs = player.getCards('h');
                    cards = cards.filter(function (card) {
                        return hs.includes(card);
                    });
                    if (!cards.length) {
                        event.goto(5);
                        return;
                    }
                    event.cards = cards;
                    if (_status.connectMode) game.broadcastAll(function () { _status.noclearcountdown = true });
                    event.given_map = {};
                    'step 2'
                    player.chooseCardTarget({
                        filterCard(card) {
                            return _status.event.cards.includes(card) && !card.hasGaintag('olsujian_given');
                        },
                        cards: cards,
                        filterTarget: lib.filter.notMe,
                        selectCard: [1, cards.length],
                        prompt: '啖酪：是否将获得的牌分配给其他角色？',
                        ai1(card) {
                            if (!ui.selected.cards.length) return 1;
                            return 0;
                        },
                        ai2(target) {
                            var player = _status.event.player, card = ui.selected.cards[0];
                            var val = target.getUseValue(card);
                            if (val > 0) return val * get.attitude(player, target) * 2;
                            return get.value(card, target) * get.attitude(player, target);
                        },
                    });
                    'step 3'
                    if (result.bool) {
                        if (event.list.includes(result.targets[0])) event.list.remove(result.targets[0]);
                        var res = result.cards, target = result.targets[0].playerid;
                        player.addGaintag(res, 'olsujian_given');
                        cards.removeArray(res);
                        if (!event.given_map[target]) event.given_map[target] = [];
                        event.given_map[target].addArray(res);
                        if (cards.length) event.goto(2);
                    }
                    'step 4'
                    if (_status.connectMode) {
                        game.broadcastAll(function () {
                            delete _status.noclearcountdown;
                        });
                        game.stopCountChoose();
                    }
                    var map = [], cards = [];
                    for (var i in event.given_map) {
                        var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                        player.line(source, 'green');
                        map.push([source, event.given_map[i]]);
                        cards.addArray(event.given_map[i]);
                    }
                    if (map.length) {
                        player.addExpose(0.3);
                        game.loseAsync({
                            gain_list: map,
                            player: player,
                            cards: cards,
                            giver: player,
                            animate: 'giveAuto',
                        }).setContent('gaincardMultiple');
                    }
                    'step 5'
                    if (!event.list.length) event.finish();
                    else event.list.sortBySeat();
                    'step 6'
                    if (!player.isIn()) {
                        event.finish();
                        return;
                    }
                    var target = event.list.shift();
                    event.target = target;
                    if (!target.canUse({ name: 'sha', isCard: true }, player, false)) event.goto(8);
                    else target.chooseBool('是否视为对' + get.translation(player) + '使用一张【杀】？').set('choice', get.effect(player, { name: 'sha', isCard: true }, target, target) > 0);
                    'step 7'
                    if (result.bool) target.useCard({ name: 'sha', isCard: true }, player, false);
                    'step 8'
                    if (event.list.length) event.goto(6);
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
            },
            wechatjilei: {
                audio: 'jilei',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.source && event.source.isIn() && (!event.source.storage.wechatjilei2 || !event.source.storage.wechatjilei2.length < 4);
                },
                direct: true,
                content() {
                    'step 0'
                    var list = [];
                    for (var suit of lib.suit) {
                        if (!trigger.source.storage.wechatjilei2 || !trigger.source.storage.wechatjilei2.includes(suit)) list.push(suit);
                    }
                    list.reverse();
                    player.chooseControl(list, 'cancel2', function () {
                        var player = _status.event.player, source = _status.event.source;
                        if (get.attitude(player, source) > 0) return 'cancel2';
                        for (var suit of ['heart', 'diamond', 'club', 'spade']) {
                            if (list.includes(suit) && (!source.storage.wechatjilei2 || !source.storage.wechatjilei2.includes(suit)) && source.countCards('h', function (card) {
                                return get.type(card, source) == suit && source.hasValueTarget(card);
                            }) > 1) {
                                return suit;
                                break;
                            }
                        }
                        return list[0];
                    }).set('prompt', get.prompt2('wechatjilei', trigger.source)).set('source', trigger.source);
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('wechatjilei', trigger.source);
                        player.popup(get.translation(result.control));
                        game.log(player, '选择了', '#y' + get.translation(result.control));
                        trigger.source.addTempSkill('wechatjilei2', { player: 'phaseBegin' });
                        trigger.source.storage.wechatjilei2.add(result.control);
                        trigger.source.updateMarks('wechatjilei2');
                    }
                },
                ai: {
                    maixie_defend: true,
                    threaten: 0.75,
                },
            },
            wechatjilei2: {
                charlotte: true,
                mark: true,
                onremove: true,
                intro: {
                    content(storage) {
                        return '不能使用、打出或弃置' + get.translation(storage) + '牌';
                    },
                },
                init(player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = [];
                },
                mod: {
                    cardDiscardable(card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                    cardEnabled(card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                    cardRespondable(card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                    cardSavable(card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                },
            },
            wechatrejilei: {
                audio: 'jilei',
                trigger: { player: 'damageEnd' },
                filter(event) {
                    return event.source?.isIn();
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseControl('basic', 'trick', 'equip', 'cancel2', function () {
                        var source = _status.event.source;
                        if (get.attitude(_status.event.player, source) > 0) return 'cancel2';
                        var list = ['basic', 'trick', 'equip'].filter(function (name) {
                            return (!source.storage.wechatrejilei2 || !source.storage.wechatrejilei2.includes(name));
                        });
                        if (!list.length) return 'cancel2';
                        if (list.includes('trick') && source.countCards('h', function (card) {
                            return get.type(card, source) == 'trick' && source.hasValueTarget(card);
                        }) > 1) return 'trick';
                        return list[0];
                    }).set('prompt', get.prompt2('wechatrejilei', trigger.source)).set('source', trigger.source);
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('wechatrejilei', trigger.source);
                        player.popup(get.translation(result.control) + '牌');
                        trigger.source.addTempSkill('wechatrejilei2', { player: 'phaseBegin' });
                        trigger.source.markAuto('wechatrejilei2', [result.control]);
                    }
                },
                ai: {
                    maixie_defend: true,
                    threaten: 0.7,
                },
            },
            wechatrejilei2: {
                charlotte: true,
                onremove: true,
                intro: { content: '不能使用或打出$牌' },
                mod: {
                    cardEnabled2(card, player) {
                        if (player.getStorage('wechatrejilei2').includes(get.type2(card))) return false;
                    },
                },
            },
            wechatgongxin: {
                audio: 'gongxin',
                inherit: 'gongxin',
                content() {
                    'step 0'
                    var cards = target.getCards('h');
                    player.chooseButton(2, [
                        '攻心',
                        cards,
                        [['获得此牌', '置于牌堆顶'], 'tdnodes'],
                    ]).set('filterButton', function (button) {
                        var type = typeof button.link;
                        if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) return false;
                        return type == 'string' || get.color(button.link, get.owner(button.link)) === 'red';
                    });
                    'step 1'
                    if (result.bool) {
                        if (typeof result.links[0] != 'string') result.links.reverse();
                        var card = result.links[1], choice = result.links[0];
                        player.showCards(card, get.translation(player) + '对' + get.translation(target) + '发动了【攻心】');
                        if (choice == '获得此牌') player.gain([card], target, 'giveAuto');
                        else target.lose(card, ui.cardPile, 'visible', 'insert');
                    }
                },
            },
            wechatbuqu: {
                onremove(player) {
                    player.removeGaintag('wechatbuqux');
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('wechatbuqux')) return num + 0.3;
                    },
                },
                group: 'wechatbuqu_gain',
                audio: 'buqu',
                trigger: { player: ['damageEnd', 'loseHpEnd'] },
                forced: true,
                locked: false,
                content() {
                    player.draw().gaintag = ['wechatbuqux'];
                },
                subSkill: {
                    gain: {
                        audio: 'buqu',
                        trigger: { player: ['useCard', 'respond'] },
                        filter(event, player) {
                            return player.getHistory('lose', function (evt) {
                                if (evt.getParent() != event) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('wechatbuqux')) return true;
                                }
                                return false;
                            }).length;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            var type = get.type2(trigger.card);
                            var card = get.cardPile2(function (card) {
                                return get.type(card) == type;
                            });
                            if (card) player.gain(card, 'gain2');
                            else {
                                player.chat('无牌可得？！');
                                game.log('但是牌堆中已经没有' + get.translation(type) + '牌了！');
                            }
                        },
                    },
                },
            },
            wechatbuqux: {},
            wechatfenji: {
                audio: 'fenji',
                inherit: 'new_fenji',
                check(event, player) {
                    return get.attitude(player, event.player) > 2 && player.hp + player.countCards('hs', { name: ['tao', 'jiu'] }) > 2;
                },
            },
            wechatwanwei: {
                audio: 'wanwei',
                inherit: 'jujian',
                position: 'h',
                content() {
                    var list = [];
                    target.draw(cards.length);
                    for (var card of cards) if (!list.includes(get.type2(card))) list.push(get.type2(card));
                    if (list.length == cards.length) player.recover();
                },
            },
            wechatyuejian: {
                audio: 'yuejian',
                inherit: 'spshude',
            },
            wechatganlu: {
                audio: 'ganlu',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    if (player.canMoveCard(null, true)) return true;
                    for (var i = 1; i < 6; i++) {
                        if (!player.getEquips(i).length) {
                            return true;
                            break;
                        }
                    }
                    return false;
                },
                usable: 1,
                filterCard: true,
                check(card) {
                    return 7 - get.value(card);
                },
                content() {
                    'step 0'
                    var list = [], str = '';
                    if (player.canMoveCard(null, true)) list.push('移动装备牌');
                    for (var i = 1; i < 6; i++) {
                        if (!player.getEquips(i).length) {
                            list.push('置入装备牌');
                            break;
                        }
                    }
                    if (list.includes('移动装备牌')) {
                        str += '移动场上的一张装备牌';
                        if (list.length > 1) str + '，或';
                    }
                    if (list.length > 1) str += '往装备区中随机置入一张装备牌';
                    player.chooseControl(list).set('prompt', '甘露：请选择一项').set('prompt2', str).set('ai', function (card) {
                        if (player.canMoveCard(true, true) && list.includes('移动装备牌')) return '移动装备牌';
                        if (list.includes('置入装备牌')) return '置入装备牌';
                        return list[0];
                    });
                    'step 1'
                    switch (result.control) {
                        case '移动装备牌': player.moveCard().nojudge = true; break;
                        case '置入装备牌':
                            var list = [];
                            for (var i = 1; i < 6; i++) if (!player.getEquips(i).length) list.push('equip' + i);
                            list.randomSort();
                            var card = get.cardPile2(function (card) {
                                return get.type(card) == 'equip' && list.includes(get.subtype(card));
                            });
                            if (card) player.chooseUseTarget(card, 'nopopup', 'noanimate', true);
                            break;
                    }
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
            },
            wechatbuyi: {
                audio: 'buyi',
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                filter(event, player) {
                    if (game.countPlayer() < 2) return false;
                    return game.phaseNumber == 0 || event.name != 'phase';
                },
                forced: true,
                locked: false,
                content() {
                    'step 0'
                    player.chooseTarget('请选择【补益】的目标', lib.translate.wechatbuyi_info, true).set('ai', function (target) {
                        var player = _status.event.player;
                        return Math.max(0.001, get.threaten(target)) * get.attitude(player, target) * (target == player ? 0.001 : 1);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        game.log(player, '选择了', target);
                        player.addSkill('wechatbuyi2');
                        if (target != player) target.addSkill('wechatbuyi2');
                    }
                },
            },
            wechatbuyi2: {
                charlotte: true,
                mark: true,
                intro: { content: '当你于每轮第一次受到伤害后，你可以弃置一张非基本牌，然后回复1点体力。' },
                audio: 'buyi',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return player.getRoundHistory('damage').indexOf(event) == 0;
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt('wechatbuyi2'), '弃置一张非基本牌并回复1点体力', function (card) {
                        return get.type(card) != 'basic';
                    }).set('ai', lib.skill.zhiheng.check).logSkill = 'wechatbuyi2';
                    'step 1'
                    if (result.bool) player.recover();
                },
            },
            wechatzishou: {
                audio: 'zishou',
                trigger: { player: 'phaseUseEnd' },
                filter(event, player) {
                    return !player.getHistory('useCard', function (evt) {
                        if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
                            var targets = evt.targets.slice(0);
                            while (targets.includes(player)) targets.remove(player);
                            return targets.length > 0;
                        }
                        return false;
                    }).length;
                },
                frequent: true,
                content() {
                    player.draw(game.players.length - 1);
                },
            },
            wechatrezishou: {
                audio: 'zishou',
                inherit: 'zishou',
                content() {
                    trigger.num += 3;
                    player.addTempSkill('zishou2');
                },
            },
            wechatzongshi: {
                audio: 'zongshi',
                mod: {
                    maxHandcard(player, num) {
                        return num + game.players.length - 1;
                    },
                },
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') > player.hp;
                },
                content() {
                    player.addTempSkill('wechatzongshi_paoxiao');
                    player.addMark('wechatzongshi_paoxiao', game.players.length - 1, false);
                },
                subSkill: {
                    paoxiao: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        marktext: '咆',
                        intro: { content: '出杀次数+#' },
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + player.countMark('wechatzongshi_paoxiao');
                            },
                        },
                    },
                },
            },
            //难蚌
            wechatrerezishou: {
                audio: 'zishou',
                inherit: 'zishou',
                check(event, player) {
                    if (player.hasSkill('rezongshi_paoxiao') && player.countCards('hs', { name: 'sha' }) && player.hasValueTarget({ name: 'sha' }, true, false)) return false;
                    return player.countCards('h') <= (player.hasSkill('wechatrezongshi') ? player.maxHp : player.hp - 2) || player.skipList.includes('phaseUse');
                },
                content() {
                    trigger.num += 3;
                    player.addTempSkill(event.name + '_ban');
                },
                subSkill: {
                    ban: {
                        charlotte: true,
                        mod: {
                            cardEnabled(card, player) {
                                if (card.name == 'sha') return false;
                            },
                        },
                        mark: true,
                        intro: { content: '本回合不能使用【杀】' },
                    }
                }
            },
            wechatrezongshi: {
                audio: 'rezongshi',
                inherit: 'rezongshi',
                mod: {
                    maxHandcard(player, num) {
                        return num + 3;
                    },
                },
            },
            wechatqinwang: {
                audio: 'qinwang1',
                group: 'wechatqinwang1',
                enable: 'chooseToRespond',
                filter(event, player) {
                    return !event.wechatqinwang && !player.hasSkill('wechatqinwang3');
                },
                viewAs: { name: 'sha' },
                filterCard: () => false,
                selectCard: -1,
                ai: {
                    order() {
                        return get.order({ name: 'sha' }) + 0.3;
                    },
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg != 'respond') return false;
                    },
                },
            },
            wechatqinwang1: {
                charlotte: true,
                trigger: { player: 'respondBefore' },
                filter(event, player) {
                    return event.skill == 'wechatqinwang';
                },
                direct: true,
                priority: 15,
                content() {
                    'step 0'
                    player.addTempSkill('wechatqinwang3');
                    trigger.getParent().set('wechatqinwang', true);
                    player.chooseTarget('请选择【勤王】的目标', '令其选择是否替你打出一张【杀】', lib.filter.notMe, true).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.attitude(player, target);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill('wechatqinwang', target);
                        var next = target.chooseToRespond('是否替' + get.translation(player) + '打出一张【杀】？', { name: 'sha' });
                        next.set('ai', function () {
                            var event = _status.event;
                            return get.attitude(event.player, event.source);
                        });
                        next.set('source', player);
                        next.set('wechatqinwang', true);
                        next.set('skillwarn', '替' + get.translation(player) + '打出一张【杀】');
                        next.noOrdering = true;
                        next.autochoose = lib.filter.autoRespondSha;
                    }
                    else {
                        event.finish();
                        trigger.cancel();
                        trigger.getParent().goto(0);
                    }
                    'step 2'
                    if (result.bool) {
                        trigger.card = result.card;
                        trigger.cards = result.cards;
                        trigger.throw = false;
                        target.addExpose(0.2);
                    }
                    else {
                        trigger.cancel();
                        trigger.getParent().goto(0);
                    }
                },
            },
            wechatqinwang3: {
                trigger: { global: ['useCardAfter', 'respondAfter', 'useSkillAfter', 'phaseAfter'] },
                silent: true,
                charlotte: true,
                filter(event, player) {
                    return !event.skill || event.skill != 'wechatqinwang';
                },
                content() {
                    player.removeSkill('wechatqinwang3');
                },
            },
            //孙鲁班
            wechatzenhui: {
                audio: 'xinzenhui',
                trigger: { player: 'useCardToPlayer' },
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    if (player.hasSkill('wechatzenhui2')) return false;
                    if (event.targets.length > 1) return false;
                    var card = event.card;
                    return card.name == 'sha' || get.type(card) == 'trick';
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatzenhui'), function (card, player, target) {
                        if (player == target) return false;
                        var evt = _status.event.getTrigger();
                        return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                    }).set('ai', function (target) {
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        return get.effect(target, trigger.card, player, player) + 0.01;
                    });
                    'step 1'
                    if (result.bool) event.target = result.targets[0];
                    else event.finish();
                    'step 2'
                    player.addTempSkill('wechatzenhui2');
                    player.logSkill('wechatzenhui', event.target);
                    event.target.chooseCard('交给' + get.translation(player) + '一张手牌，或成为' +
                        get.translation(trigger.card) + '的额外目标').set('ai', function (card) {
                            return 5 - get.value(card);
                        });
                    'step 3'
                    if (result.bool) {
                        target.give(result.cards, player);
                        trigger.untrigger();
                        trigger.getParent().player = event.target;
                        game.log(event.target, '成为了', trigger.card, '的使用者');
                    }
                    else {
                        game.log(event.target, '成为了', trigger.card, '的额外目标');
                        trigger.getParent().targets.push(event.target);
                    }
                }
            },
            wechatzenhui2: { charlotte: true },
            wechatjiaojin: {
                audio: 'xinjiaojin',
                inherit: 'xinjiaojin',
                filter(event, player) {
                    return event.source && event.source != player && player.countCards('he', { type: 'equip' }) || (player.countCards('he') && _status.connectMode);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseToDiscard('he', '骄矜：是否弃置一张装备牌防止伤害？', (card, player) => {
                        return get.type(card) == 'equip';
                    }).set('ai', card => {
                        var player = _status.event.player;
                        if (player.hp == 1 || _status.event.getTrigger().num > 1) return 9 - get.value(card);
                        if (player.hp == 2) return 8 - get.value(card);
                        return 7 - get.value(card);
                    }).set('logSkill', 'wechatjiaojin').forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    trigger.cancel();
                },
            },
            //界大虎
            wechatrejiaojin: {
                audio: 'xinjiaojin',
                trigger: { player: 'damageBegin4', },
                filter(event, player) {
                    return event.source && event.source != player && player.countCards('he', { type: 'equip' }) || (player.countCards('he') && _status.connectMode);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseToDiscard('he', '骄矜：是否弃置一张装备牌防止伤害并获得造成伤害的牌？', (card, player) => {
                        return get.type(card) == 'equip';
                    }).set('ai', card => {
                        var player = _status.event.player;
                        if (player.hp == 1 || _status.event.getTrigger().num > 1) return 9 - get.value(card);
                        if (player.hp == 2) return 8 - get.value(card);
                        return 7 - get.value(card);
                    }).set('logSkill', event.name.slice(0, -5)).forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    trigger.cancel();
                    if (trigger.cards?.someInD()) await player.gain(trigger.cards.filterInD(), 'gain2', 'log');
                },
            },
            wechatqianxun: {
                audio: 'reqianxun',
                hiddenCard(player, name) {
                    var card = { name: name, isCard: true };
                    var info = get.info(card, false);
                    return get.type(name) == 'trick' && player.countCards('h') == 1 && (!info.notarget && (info.toself || info.singleCard || !info.selectTarget || info.selectTarget == 1));
                },
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.type == 'wuxie') return false;
                    var cards = player.getCards('h');
                    if (cards.length != 1) return false;
                    var mod2 = game.checkMod(cards[0], player, 'unchanged', 'cardEnabled2', player);
                    if (mod2 === false) return false;
                    for (var i of lib.inpile) {
                        var card = { name: i, isCard: true };
                        var info = get.info(card, false);
                        if ((!info.notarget && (info.toself || info.singleCard || !info.selectTarget || info.selectTarget == 1)) && get.type(i) == 'trick' && event.filterCard(get.autoViewAs({ name: i }, cards), player, event)) return true;
                    }
                    return false;
                },
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        var cards = player.getCards('h');
                        var list = [];
                        for (var i of lib.inpile) {
                            var card = { name: i, isCard: true };
                            var info = get.info(card, false);
                            if ((!info.notarget && (info.toself || info.singleCard || !info.selectTarget || info.selectTarget == 1)) && get.type(i) == 'trick' && event.filterCard(get.autoViewAs({ name: i }, cards), player, event)) {
                                list.push(['锦囊', '', i]);
                            }
                        }
                        return ui.create.dialog('谦逊', [list, 'vcard'], 'hidden');
                    },
                    check(button) {
                        var player = _status.event.player;
                        return player.getUseValue({ name: button.link[2] }) + 1;
                    },
                    backup(links, player) {
                        return {
                            audio: 'reqianxun',
                            popname: true,
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            viewAs: {
                                name: links[0][2],
                            },
                        }
                    },
                    prompt(links, player) {
                        return '将' + get.translation(player.getCards('h')[0]) + '当作' + get.translation(links[0][2]) + '使用';
                    },
                },
                subSkill: {
                    backup: { audio: 'reqianxun' },
                },
                ai: {
                    order: 12,
                    result: {
                        player: 1,
                    },
                },
            },
            wechatreqianxun: {
                audio: 'reqianxun',
                inherit: 'reqianxun',
                async cost(event, trigger, player) {
                    event.result = await player.chooseCard(get.prompt(event.name.slice(0, -5)), '将任意张手牌置于武将牌上', [1, Infinity]).set('ai', card => 1 / (get.value(card) || 0.5)).forResult();
                },
                async content(event, trigger, player) {
                    player.addToExpansion(event.cards, 'giveAuto', player).gaintag.add(event.name + '2');
                    player.addSkill(event.name + '2');
                },
            },
            wechatreqianxun2: {
                charlotte: true,
                audio: 'reqianxun',
                trigger: { global: 'phaseEnd' },
                forced: true,
                content() {
                    var cards = player.getExpansions('wechatreqianxun2');
                    if (cards.length) player.gain(cards, 'draw');
                    player.removeSkill('wechatreqianxun2');
                },
                intro: {
                    mark(dialog, storage, player) {
                        var cards = player.getExpansions('wechatreqianxun2');
                        if (player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有' + get.cnNumber(cards.length) + '张牌';
                    },
                    markcount: 'expansion',
                },
            },
            wechatlianhuan: {
                audio: 'lianhuan',
                trigger: { player: 'phaseDrawBegin2' },
                filter(event, player) {
                    return !event.numFixed && game.hasPlayer(t => t.isLinked());
                },
                forced: true,
                locked: false,
                content() {
                    trigger.num += Math.min(3, game.countPlayer(t => t.isLinked()));
                },
                group: 'wechatlianhuan_lianhuan',
                subSkill: {
                    lianhuan: {
                        audio: 'lianhuan',
                        inherit: 'lianhuan',
                    },
                },
            },
            wechatniepan: {
                audio: 'niepan',
                unique: true,
                enable: 'chooseToUse',
                mark: true,
                skillAnimation: true,
                limited: true,
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
                    player.awakenSkill('wechatniepan');
                    player.discard(player.getCards('hej'));
                    'step 1'
                    player.link(false);
                    player.turnOver(false);
                    'step 2'
                    player.draw(3);
                    if (player.hp < 3) player.recover(3 - player.hp);
                    'step 3'
                    player.addSkill('wechatniepan_fireAttack');
                },
                ai: {
                    order: 1,
                    skillTagFilter(player, arg, target) {
                        if (player != target || player.storage.wechatniepan) return false;
                    },
                    save: true,
                    result: {
                        player(player) {
                            if (player.hp <= 0) return 10;
                            if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                            return 0;
                        }
                    },
                    threaten: 0.6,
                },
                subSkill: {
                    fireAttack: {
                        charlotte: true,
                        mark: true,
                        marktext: '<span class=\'texiaotext\' style=\'color:#FF0000\'>火</span>',
                        intro: { content: '造成的伤害均视为火属性' },
                        trigger: { source: 'damageBegin1' },
                        forced: true,
                        content() {
                            game.setNature(trigger, 'fire');
                        },
                        ai: { fireDamage: true },
                    },
                },
            },
            wechathuzhu: {
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechathuzhu')).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.attitude(player, target) * Math.max(1, player.hp - target.hp);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechathuzhu', target);
                        player.addSkill('wechathuzhu2');
                        player.storage.wechathuzhu2 = target;
                    }
                },
            },
            wechathuzhu2: {
                charlotte: true,
                onremove: true,
                mark: true,
                intro: { content: '保护$ing...' },
                trigger: { global: 'damageBegin4' },
                filter(event, player) {
                    return event.num > 0 && event.player == player.storage.wechathuzhu2;
                },
                check(event, player) {
                    if (event.player == player) return true;
                    if (player.hp >= Math.max(event.player.hp, 1)) return true;
                    if (player.hp > 1 && event.num > 1) return true;
                    return false;
                },
                logTarget: 'player',
                prompt: '是否发动【护主】？',
                prompt2: '失去1点体力，防止此伤害，然后摸一张牌',
                content() {
                    player.loseHp();
                    trigger.cancel();
                    player.draw();
                },
            },
            wechatshenxian: {
                audio: 'shenxian',
                trigger: { global: 'loseAfter' },
                filter(event, player) {
                    if (event.type != 'discard') return false;
                    for (var i = 0; i < event.cards2.length; i++) {
                        if (get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'basic') {
                            return true;
                        }
                    }
                    return false;
                },
                frequent: true,
                content() {
                    'step 0'
                    if (trigger.delay == false) game.delay();
                    'step 1'
                    player.draw();
                },
            },
            wechatqiangwu: {
                audio: 'qiangwu',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h');
                },
                usable: 1,
                filterCard: true,
                check(card) {
                    var player = _status.event.player;
                    var num = player.countCards('hs', { name: 'sha' });
                    if (num == 0) return 0;
                    if (num == 1) {
                        if (game.hasPlayer(function (current) {
                            return get.effect(current, { name: 'sha' }, player, player) > 0;
                        }) && !game.hasPlayer(function (current) {
                            return get.effect(current, { name: 'sha' }, player, player) > 0 && player.canUse({ name: 'sha' }, current);
                        })) return 7 - get.value(card) * (14 - get.number(card));
                        return 0;
                    }
                    if (num > 1 && game.hasPlayer(function (current) {
                        return get.effect(current, { name: 'sha' }, player, player) > 0 && player.canUse({ name: 'sha' }, current);
                    })) return 7 - get.value(card) * (14 - get.number(card));
                    return 0;
                },
                content() {
                    player.storage.wechatqiangwu2 = get.number(cards[0]);
                    player.addTempSkill('wechatqiangwu2');
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
            },
            wechatqiangwu2: {
                charlotte: true,
                onremove: true,
                mod: {
                    targetInRange(card, player) {
                        if (card.name == 'sha' && get.number(card) > player.storage.wechatqiangwu2) return true;
                    },
                    cardUsable(card, player) {
                        if (card.name == 'sha' && get.number(card) > player.storage.wechatqiangwu2) return Infinity;
                    },
                },
                trigger: { player: 'useCard1' },
                filter(event, player) {
                    if (_status.currentPhase == player && event.card.name == 'sha' &&
                        get.number(event.card) > player.storage.wechatqiangwu2 && event.addCount !== false) return true;
                    return false;
                },
                forced: true,
                popup: false,
                firstDo: true,
                content() {
                    trigger.addCount = false;
                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                        player.stat[player.stat.length - 1].card.sha--;
                    }
                },
            },
            wechatyigui: {
                audio: 'huashen2',
                trigger: { player: 'useCard2' },
                filter(event, player) {
                    if (!player.countCards('he') || !player.isPhaseUsing() || get.type(event.card) != 'trick') return false;
                    if (event.targets && event.targets.length > 0) return true;
                    var info = get.info(event.card);
                    if (info.allowMultiple == false) return false;
                    if (event.targets && !info.multitarget) {
                        if (game.hasPlayer(function (current) {
                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                        })) return true;
                    }
                    return false;
                },
                usable: 1,
                direct: true,
                content() {
                    'step 0'
                    player.chooseCardTarget({
                        prompt: get.prompt2('wechatyigui'),
                        filterTarget(card, player, target) {
                            var trigger = _status.event.getTrigger();
                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                        },
                        filterCard: lib.filter.cardDiscardable,
                        position: 'he',
                        ai1(card) {
                            return 6 - get.value(card);
                        },
                        ai2(target) {
                            var player = _status.event.player;
                            var trigger = _status.event.getTrigger();
                            return get.effect(target, trigger.card, player, player);
                        },
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0]
                        player.logSkill('wechatyigui', target);
                        player.discard(result.cards);
                        trigger.targets.push(target);
                    }
                    else player.storage.counttrigger.wechatyigui--;
                },
            },
            wechatshendao: {
                audio: 'xinsheng',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    return player.isPhaseUsing() && event.targets && event.targets.length && game.hasPlayer(function (current) {
                        return event.targets.includes(current) && !player.getStorage('wechatshendao_mark').includes(current);
                    });
                },
                forced: true,
                locked: false,
                logTarget(event, player) {
                    return game.filterPlayer(function (current) {
                        return event.targets.includes(current) && !player.getStorage('wechatshendao_mark').includes(current);
                    }).sortBySeat();
                },
                *content(event, map) {
                    var player = map.player;
                    player.addTempSkill('wechatshendao_mark', { player: 'phaseUseAfter' });
                    player.markAuto('wechatshendao_mark', lib.skill.wechatshendao.logTarget(map.trigger, player));
                    player.storage.wechatshendao_mark.sortBySeat();
                    switch (player.getStorage('wechatshendao_mark').length) {
                        case 1:
                            var list = lib.inpile.reduce((list, name) => list.add(get.type2(name)), []);
                            if (list.length) {
                                var result = yield player.chooseControl(list, 'cancel2').set('prompt', '神道：是否选择获得一种类型的牌？').set('ai', function () {
                                    var player = _status.event.player;
                                    var types = _status.event.controls.filter(i => i != 'cancel2');
                                    if (player.hp < 2 && !player.countCards('h', { name: ['shan', 'tao'] }) && types.includes('basic')) return 'basic';
                                    if (player.countCards('he', { type: 'equip' }) < 2 && types.includes('equip')) return 'equip';
                                    if (types.includes('trick')) return 'trick';
                                    return types.randomGet();
                                });
                                if (result.control != 'cancel2') {
                                    player.popup(result.control);
                                    game.log(player, '声明了', '#y' + get.translation(result.control) + '牌');
                                    var card = get.cardPile(card => get.type2(card) == result.control);
                                    if (card) player.gain(card, 'gain2');
                                }
                            }
                            break;
                        case 2:
                            var result = yield player.chooseTarget('神道：是否视为对一名角色使用一张普通锦囊牌？', function (card, player, target) {
                                return lib.inpile.some(name => get.type(name) == 'trick' && player.canUse({ name: name, isCard: true }, target));
                            }).set('ai', target => {
                                var player = _status.event.player;
                                var list = lib.inpile.filter(name => get.type(name) == 'trick' && player.canUse({ name: name, isCard: true }, target));
                                list = list.map(name => get.effect(target, { name: name }, player, player)).sort((a, b) => b - a);
                                return list[0];
                            }).set('animate', false);
                            if (result.bool) {
                                var target = result.targets[0];
                                player.line(target);
                                var list = lib.inpile.filter(name => get.type(name) == 'trick' && player.canUse({ name: name, isCard: true }, target));
                                var result2 = yield player.chooseButton(['神道：视为对' + get.translation(target) + '使用一张普通锦囊牌', [list, 'vcard']], true).set('ai', button => {
                                    var player = _status.event.player, target = _status.event.target;
                                    return get.effect(target, { name: button.link[2] }, player, player);
                                }).set('target', target);
                                if (result2.bool) player.useCard({ name: result2.links[0][2], isCard: true }, target, false);
                            }
                            break;
                        case 3:
                            var targets = player.getStorage('wechatshendao_mark').filter(target => target.isIn()).sortBySeat();
                            if (targets.length) {
                                var result = yield player.chooseBool('神道：是否对' + get.translation(targets) + '各造成1点伤害？').set('choice', targets.reduce((num, target) => num + get.damageEffect(target, player, player), 0) > 0);
                                if (result.bool) {
                                    player.line(targets);
                                    targets.forEach(target => target.damage());
                                }
                            }
                            break;
                        default: break;
                    }
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '已记录$' },
                    },
                },
            },
            wechatfengpo: {
                shaRelated: true,
                audio: 'fengpo',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    if (event.targets.length != 1 || !['sha', 'juedou'].includes(event.card.name)) return false;
                    if (!['sha', 'juedou'].includes(event.card.name)) return false;
                    return player.getHistory('useCard', evt => {
                        return ['sha', 'juedou'].includes(evt.card.name);
                    }).indexOf(event.getParent()) == 0;
                },
                logTarget: 'target',
                content() {
                    'step 0'
                    player.viewHandcards(trigger.target);
                    player.chooseControl('摸牌', '加伤').set('prompt', '请选择一项');
                    'step 1'
                    var num = Math.max(1, trigger.target.countCards('h', { suit: 'diamond' }));
                    if (result.control == '摸牌') player.draw(num);
                    else {
                        var trigger2 = trigger.getParent();
                        if (typeof trigger2.baseDamage != 'number') trigger2.baseDamage = 1;
                        trigger2.baseDamage += num;
                    }
                },
            },
            wechatjielie: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                filterTarget: lib.filter.notMe,
                content() {
                    'step 0'
                    player.chooseControl().set('choiceList', [
                        '令' + get.translation(target) + '选择是否使用一张牌',
                        '下次发动【相知】的时候令' + get.translation(target) + '获得同样的效果'
                    ]).set('ai', function () {
                        if (target.hasCard(function (card) {
                            return target.getUseValue(card) > 0 && game.hasPlayer(function (current) {
                                return get.effect(current, card, target, player) > 0;
                            });
                        })) return 0;
                        return 1;
                    });
                    'step 1'
                    if (result.index == 1) {
                        player.addTempSkill('wechatjielie_targets', { player: 'wechatxiangzhiAfter' });
                        player.markAuto('wechatjielie_targets', [target]);
                        event.finish();
                    }
                    else target.chooseToUse({ prompt: '节烈：是否使用一张牌？' });
                    'step 2'
                    if (result.bool) {
                        var card = result.cards[0];
                        if (card.name == 'sha' && get.color(card, target) == 'red') {
                            player.loseHp();
                            delete player.getStat('skill').wechatjielie;
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            if (player.hp + player.countCards('hs', { name: 'tao' }) < 2) return 0;
                            if (target.hasCard(function (card) {
                                return target.getUseValue(card) > 0 && game.hasPlayer(function (current) {
                                    return get.effect(current, card, target, player) > 0;
                                });
                            })) return 2;
                            return 1;
                        },
                    },
                },
                subSkill: {
                    targets: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        intro: { content: '下次发动【相知】时，令$也获得相同的效果' },
                    },
                },
            },
            wechatxiangzhi: {
                mark: true,
                marktext: '🎶',
                intro: {
                    content(storage, player) {
                        var str = (storage ? '出牌阶段限一次，你可以回复1点体力。' : '出牌阶段限一次，你可以摸一张牌。');
                        return '<li>当前韵律：' + (storage ? '仄' : '平') + '<br><li>' + str;
                    },
                },
                group: 'wechatxiangzhi_zhuanyun',
                audio: 'ext:活动武将/audio/skill:2',
                yunlvSkill: true,
                categories: () => ['韵律技'],
                enable: 'phaseUse',
                usable: 1,
                content() {
                    'step 0'
                    player[player.storage.wechatxiangzhi ? 'recover' : 'draw']();
                    'step 1'
                    var targets = player.getStorage('wechatjielie_targets').filter(i => i.isIn()).sortBySeat();
                    if (targets.length) {
                        targets.forEach(target => {
                            player.line(target);
                            target[player.storage.wechatxiangzhi ? 'recover' : 'draw']();
                        });
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            if (player.storage.wechatxiangzhi && player.isHealthy()) return 0;
                            return 1;
                        },
                    },
                },
                subSkill: {
                    zhuanyun: {
                        audio: 'wechatxiangzhi',
                        trigger: { player: 'useSkillAfter' },
                        filter(event, player) {
                            return event.skill == 'wechatjielie';
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.changeZhuanhuanji('wechatxiangzhi');
                            if (player.getStat('skill').wechatxiangzhi) delete player.getStat('skill').wechatxiangzhi;
                            game.log(player, '转换了', '#g【相知】', '的韵律');
                        },
                    },
                },
            },
            wechattongxin: {
                mark: true,
                marktext: '🎶',
                intro: {
                    content(storage, player) {
                        var str = '出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。';
                        if (storage) str = '出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。';
                        return '<li>当前韵律：' + (storage ? '仄' : '平') + '<br><li>' + str;
                    },
                },
                group: 'wechattongxin_zhuanyun',
                audio: 'ext:活动武将/audio/skill:2',
                yunlvSkill: true,
                categories: () => ['韵律技'],
                enable: 'phaseUse',
                filter(event, player) {
                    var yunlv = player.storage.wechattongxin;
                    if (!yunlv && !game.hasPlayer(function (current) {
                        if (current == player) return false;
                        return current.countCards('h');
                    })) return false;
                    if (yunlv && !player.countCards('h')) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    var yunlv = player.storage.wechattongxin;
                    if (target == player) return false;
                    return yunlv || target.countCards('h');
                },
                filterCard(card, player) {
                    return player.storage.wechattongxin;
                },
                selectCard() {
                    var player = _status.event.player;
                    return player.storage.wechattongxin ? 1 : -1;
                },
                check(card) {
                    return 7 - get.value(card);
                },
                discard: false,
                lose: false,
                delay: false,
                usable: 1,
                content() {
                    'step 0'
                    if (cards.length) {
                        target.gain(cards, player, 'giveAuto');
                        event.goto(3);
                    }
                    'step 1'
                    target.chooseCard('h', '同心：将一张手牌交给' + get.translation(player), true);
                    'step 2'
                    if (result.bool) player.gain(result.cards, target, 'giveAuto');
                    'step 3'
                    if (player.storage.wechattongxin) {
                        if (target.countCards('h') >= player.countCards('h')) {
                            player.line(target);
                            target.damage();
                        }
                    }
                    else if (target.countCards('h') <= player.countCards('h')) target.draw();
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            var yunlv = player.storage.wechattongxin;
                            if (yunlv) {
                                if (player.countCards('h') - target.countCards('h') <= 2) return -1;
                                return 0;
                            }
                            else {
                                if (target.countCards('h') - player.countCards('h') > 2) return -3;
                                return get.sgn(get.attitude(player, target)) * (get.attitude(player, target) > 0 ? 2 : 1);
                            }
                        },
                    },
                },
                subSkill: {
                    zhuanyun: {
                        audio: 'wechattongxin',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return player.isPhaseUsing() && !player.hasHistory('useCard', function (evt) {
                                return evt.card != event.card && get.type2(evt.card) == get.type2(event.card);
                            });
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.changeZhuanhuanji('wechattongxin');
                            if (player.getStat('skill').wechattongxin) delete player.getStat('skill').wechattongxin;
                            game.log(player, '转换了', '#g【同心】', '的韵律');
                        },
                    },
                },
            },
            wechatzhaoyan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.player.countCards('h') > player.countCards('h');
                },
                forced: true,
                locked: false,
                usable: 1,
                content() {
                    player.draw();
                },
            },
            wechatbeige: {
                audio: 'beige',
                trigger: { global: 'damageEnd' },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.player.isIn() && player.countCards('he');
                },
                usable: 1,
                direct: true,
                preHidden: true,
                content() {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt2('wechatbeige', trigger.player)).set('ai', function (card) {
                        var player = _status.event.player;
                        var target = _status.event.target;
                        var att = get.attitude(player, target);
                        switch (get.color(card, player)) {
                            case 'red':
                                if (att > 0) return 7 - get.value(card);
                                return 0;
                                break;
                            case 'black':
                                if (att < 0 && player.canUse('sha', target, false)) return 7 - get.value(card);
                                return 0;
                                break;
                        }
                    }).setHiddenSkill('wechatbeige').set('target', trigger.player).logSkill = ['wechatbeige', trigger.player];
                    'step 1'
                    if (result.bool) {
                        switch (get.color(result.cards[0], player)) {
                            case 'red': trigger.player.draw(2); break;
                            case 'black': if (player.canUse('sha', trigger.player, false)) player.useCard({ name: 'sha', isCard: true }, trigger.player, false); break;
                        }
                    }
                    else player.storage.counttrigger.wechatbeige--;
                },
                ai: { expose: 0.25 },
            },
            wechatduanchang: {
                audio: 'duanchang',
                trigger: { player: 'die' },
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                forced: true,
                forceDie: true,
                logTarget: 'source',
                skillAnimation: true,
                animationColor: 'gray',
                content() {
                    trigger.source.addSkill('wechatduanchang_tao');
                },
                subSkill: {
                    tao: {
                        charlotte: true,
                        mark: true,
                        marktext: '<span style="text-decoration: line-through;">桃</span>',
                        intro: { content: '不能使用【桃】' },
                        mod: {
                            cardEnabled2(card) {
                                if (card.name == 'tao') return false;
                            },
                            aiValue(player, card, num) {
                                if (card.name == 'tao') return 0;
                            },
                        },
                    },
                },
            },
            //赵襄
            //父魂、母魂、蜀魂
            //三魂聚顶武将[doge]
            wechatfanghun: {
                audio: 'fanghun',
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                forced: true,
                locked: false,
                content() {
                    player.addSkills('wechatlongdan');
                },
                intro: { name: '梅影', content: 'mark' },
                derivation: ['wechatlongdan', 'wechatfengpo'],
                group: ['wechatfanghun_longdan', 'wechatfanghun_fengpo'],
                subSkill: {
                    longdan: {
                        audio: 'fanghun',
                        trigger: { player: 'logSkill' },
                        filter(event, player) {
                            return event.skill == 'wechatlongdan' && !player.hasMark('wechatfanghun');
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.addMark('wechatfanghun', 1);
                            player.when('logSkill').filter(event => event.skill == 'wechatfanghun_fengpo').then(() => player.removeMark('wechatfanghun', 1));
                        },
                    },
                    fengpo: {
                        audio: 'fanghun',
                        inherit: 'wechatfengpo',
                        filter(event, player) {
                            if (!player.hasMark('wechatfanghun')) return false;
                            return lib.skill.wechatfengpo.filter(event, player);
                        },
                        prompt(event, player) {
                            return get.prompt('wechatfengpo', event.target) + '（发动后失去“梅影”标记）';
                        },
                        prompt2: () => lib.translate.wechatfengpo_info,
                    },
                },
            },
            wechatfuhan: {
                derivation: ['new_yijue', 'new_repaoxiao', 'retieji', 'xinliegong'],
                unique: true,
                audio: 'fuhan',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return player.getAllHistory('useSkill', evt => evt.skill == 'wechatfanghun_fengpo').length;
                },
                skillAnimation: true,
                animationColor: 'fire',
                forced: true,
                juexingji: true,
                content() {
                    'step 0'
                    player.awakenSkill('wechatfuhan');
                    'step 1'
                    player.loseMaxHp();
                    'step 2'
                    var list = lib.skill.wechatfuhan.derivation.filter(skill => !player.hasSkill(skill));
                    if (list.length) player.chooseControl(list).set('prompt', '扶汉：选择获得一项技能');
                    else event.finish();
                    'step 3'
                    player.addSkills(result.control);
                },
            },
            wechatrefanghun: {
                get mod() {
                    return get.info('refanghun').mod || {};
                },
                locked: false,
                audio: 'fanghun',
                inherit: 'fanghun',
                trigger: { player: 'useCardToPlayered' },
            },
            wechatrefuhan: {
                unique: true,
                audio: 'fuhan',
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    return player.countMark('fanghun') > 0;
                },
                limited: true,
                skillAnimation: true,
                animationColor: 'orange',
                content() {
                    'step 0'
                    player.awakenSkill('wechatrefuhan');
                    var num = player.storage.fanghun;
                    player.removeMark('fanghun', num);
                    player.draw(Math.min(5, num));
                    'step 1'
                    if (!_status.characterlist) lib.skill.pingjian.initList();
                    let list = _status.characterlist.filter(name => get.character(name, 1) == 'shu' || (get.is.double(name, true) || []).includes('shu'));
                    const players = game.players.slice().concat(game.dead);
                    for (let i = 0; i < players.length; i++) {
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }
                    list.remove('wechat_zhaoxiang');
                    if (list.length) player.chooseButton(['扶汉：选择获得一张武将牌上的所有技能', [list.randomGets(5), 'character']], true);
                    else event.goto(3);
                    'step 2'
                    if (result.bool) {
                        var name = result.links[0];
                        player.flashAvatar('wechatrefuhan', name);
                        game.log(player, '获得了', '#y' + get.translation(name), '的所有技能');
                        player.addSkills(lib.character[name][3]);
                    }
                    'step 3'
                    if (player.isMinHp() && player.isDamaged()) player.recover();
                },
            },
            wechattunjiang: {
                audio: 'sptunjiang',
                inherit: 'sptunjiang',
                content() {
                    player.draw(game.countPlayer() - 1);
                },
            },
            wechatjushou: {
                audio: 'xinjushou',
                inherit: 'reshengxi',
                content() {
                    player.draw(3);
                },
            },
            wechatwansha: {
                group: 'wansha',
                audio: 'wansha',
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current != player && current.hp > 1;
                    });
                },
                forced: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('wechatwansha'), '令一名体力值大于1的其他角色失去1点体力，本阶段结束时其回复1点体力', true, function (card, player, target) {
                        return target != player && target.hp > 1;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -(target.hp <= 2 ? 5 : 1) / target.hp;
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        target.loseHp();
                        player.when('phaseUseEnd').then(() => {
                            if (target.isIn()) target.recover();
                        }).vars({ target: target });
                    }
                },
            },
            wechatluanwu: {
                audio: 'luanwu',
                inherit: 'luanwu',
                multitarget: true,
                content() {
                    'step 0'
                    var card = get.cardPile2(card => card.name == 'sha');
                    if (card) player.gain(card, 'gain2');
                    event.current = player;
                    event.currented = [];
                    'step 1'
                    event.currented.push(event.current);
                    event.current.animate('target');
                    event.current.chooseToUse('乱武：使用一张杀或失去1点体力', function (card) {
                        if (get.name(card) != 'sha') return false;
                        return lib.filter.cardEnabled.apply(this, arguments);
                    }, function (card, player, target) {
                        if (target == player || target == _status.event.source) return false;
                        var dist = get.distance(player, target);
                        if (dist > 1) {
                            if (game.hasPlayer(function (current) {
                                return current != player && get.distance(player, current) < dist;
                            })) return false;
                        }
                        return lib.filter.filterTarget.apply(this, arguments);
                    }).set('ai2', function () {
                        return get.effect_use.apply(this, arguments) + 0.01;
                    }).set('addCount', false).set('source', player);
                    'step 2'
                    if (!result.bool) event.current.loseHp();
                    event.current = event.current.next;
                    if (!event.currented.includes(event.current)) {
                        game.delay(0.5);
                        event.goto(1);
                    }
                },
            },
            //审配
            wechatshouye: {
                audio: 'shouye',
                inherit: 'shouye',
                content() {
                    'step 0'
                    player.line(trigger.player, 'green');
                    player.chooseToPSS(trigger.player);
                    'step 1'
                    if (result.bool) {
                        trigger.targets.remove(player);
                        trigger.getParent().triggeredTargets2.remove(player);
                        trigger.getParent().shouyeer = player;
                    }
                },
            },
            wechatliezhi: {
                audio: 'liezhi',
                trigger: { player: 'phaseZhunbeiBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('wechatliezhi'), '弃置至多两名其他角色区域内的各一张牌', [1, 2], function (card, player, target) {
                        return target != player && target.countDiscardableCards(player, 'hej') > 0;
                    }).ai = function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'guohe' }, player, player);
                    };
                    'step 1'
                    if (result.bool) {
                        result.targets.sortBySeat();
                        event.targets = result.targets;
                        player.line(result.targets, 'green');
                        player.logSkill('wechatliezhi', result.targets);
                    }
                    else event.finish();
                    'step 2'
                    var target = targets.shift();
                    player.discardPlayerCard(target, 'hej', true)
                    if (targets.length) event.redo();
                },
            },
            //曹操
            wechatjianxiong: {
                audio: 'jianxiong',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    var target = _status.currentPhase;
                    if (!event.card || !target || target != player) return false;
                    var list = [];
                    player.getHistory('gain', function (evt) {
                        if (evt.getParent().name != 'wechatjianxiong') return false;
                        for (var card of evt.cards) list.push(card.name);
                    });
                    return event.cards.filterInD().filter(function (card) {
                        return !list.includes(card.name);
                    }).length;
                },
                frequent: true,
                prompt2(event, player) {
                    var list = [];
                    player.getHistory('gain', function (evt) {
                        if (evt.getParent().name != 'wechatjianxiong') return false;
                        for (var card of evt.cards) list.push(card.name);
                    });
                    return '获得' + get.translation(event.cards.filterInD().filter(function (card) {
                        return !list.includes(card.name);
                    }));
                },
                content() {
                    var list = [];
                    player.getHistory('gain', function (evt) {
                        if (evt.getParent().name != 'wechatjianxiong') return false;
                        for (var card of evt.cards) list.push(card.name);
                    });
                    player.gain(trigger.cards.filterInD().filter(function (card) {
                        return !list.includes(card.name);
                    }), 'gain2');
                },
            },
            //谋略值
            wechatmoulvenum: {
                changeNum(num, player) {
                    if (typeof num != 'number' || num == 0) return;
                    var numx = player.countMark('wechatmoulvenum');
                    if (num > 0 && numx >= 5) return;
                    if (num < 0 && !numx) return;
                    game.addGlobalSkill('wechatmiaoji');
                    num = Math[num > 0 ? 'min' : 'max'](num, (num > 0 ? 5 : 0) - numx);
                    player[num > 0 ? 'addMark' : 'removeMark']('wechatmoulvenum', Math.abs(num), false);
                    game.log(player, (num > 0 ? '获得了' : '失去了'), (num > 0 ? ('#g' + num) : ('#y' + (-num))), '点', '谋略值');
                },
                marktext: '谋',
                intro: {
                    name: '谋略值',
                    content: '当前拥有#点' + get.MouLveInform(),
                },
                getMax: 5,
            },
            //极郭嘉
            wechatdingce: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: ['phaseBefore', 'phaseEnd'], player: ['enterGame'] },
                filter(event, player, name) {
                    if (player.countMark('wechatmoulvenum') >= lib.skill.wechatmoulvenum.getMax) return false;
                    switch (name) {
                        case 'phaseBefore': case 'enterGame':
                            return name != 'phaseBefore' || game.phaseNumber == 0;
                            break;
                        case 'phaseEnd':
                            return player.getHistory('useCard').length;
                    }
                    return false;
                },
                forced: true,
                locked: false,
                content() {
                    lib.skill.wechatmoulvenum.changeNum(event.triggername != 'phaseEnd' ? 3 : player.getHistory('useCard').reduce((list, evt) => list.add(get.type2(evt.card)), []).length, player);
                },
                derivation: ['wechatmiaoji'],
            },
            wechatsuanlve: {
                init(player) {
                    if (player.getHistory('useCard').length) {
                        var history = player.getHistory('useCard')[player.getHistory('useCard').length - 1];
                        player.storage.wechatsuanlve_mark2 = history.card.name;
                        player.storage.wechatsuanlve_mark3 = history.card.nature;
                    }
                },
                hiddenCard(player, name) {
                    if (!player.storage.wechatsuanlve_mark2) return false;
                    return name == player.storage.wechatsuanlve_mark2 && player.countCards('hes') && !player.hasSkill('wechatsuanlve_used') && player.countMark('wechatmoulvenum') > player.countMark('wechatsuanlve_count');
                },
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (!player.storage.wechatsuanlve_mark2 || player.hasSkill('wechatsuanlve_used') || !player.countCards('hes') || player.countMark('wechatmoulvenum') <= player.countMark('wechatsuanlve_count')) return false;
                    return event.filterCard(get.autoViewAs({ name: player.storage.wechatsuanlve_mark2, nature: player.storage.wechatsuanlve_mark3 }, 'unsure'), player, event);
                },
                chooseButton: {
                    dialog(event, player) {
                        var name = player.storage.wechatsuanlve_mark2;
                        var nature = player.storage.wechatsuanlve_mark3;
                        return ui.create.dialog('算略', [[[get.translation(get.type2(name)), '', name, nature]], 'vcard']);
                    },
                    check(button) {
                        var player = _status.event.player, card = { name: button.link[2], nature: button.link[3] };
                        return _status.event.getParent().type == 'phase' ? player.getUseValue(card) : 1;
                    },
                    backup(links, player) {
                        return {
                            filterCard: true,
                            position: 'hes',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            precontent() {
                                delete event.result.skill;
                                player.logSkill('wechatsuanlve');
                                player.addTempSkill('wechatsuanlve_used');
                                player.addTempSkill('wechatsuanlve_count', 'roundStart');
                                player.addMark('wechatsuanlve_count', 1, false);
                                lib.skill.wechatmoulvenum.changeNum(-player.countMark('wechatsuanlve_count'), player);
                            },
                        }
                    },
                    prompt(links, player) {
                        return '失去' + (1 + player.countMark('wechatsuanlve_count')) + '点' + get.MouLveInform() + '，将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                    save: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, target) {
                        var name = player.storage.wechatsuanlve_mark2;
                        if (target == 'respond') return false;
                        if (!name || player.hasSkill('wechatsuanlve_used') || !player.countCards('hes') || player.countMark('wechatmoulvenum') <= player.countMark('wechatsuanlve_count')) return false;
                        if (tag == 'save') {
                            if (name == 'tao' || target == player) return true;
                            return false;
                        }
                        if (tag == 'respondSha' && name != 'sha') return false;
                        if (tag == 'respondShan' && name != 'shan') return false;
                    },
                },
                group: 'wechatsuanlve_mark',
                subSkill: {
                    used: { charlotte: true },
                    count: {
                        charlotte: true,
                        onremove: true,
                    },
                    mark: {
                        charlotte: true,
                        trigger: {
                            player: ['useCard1', 'respond'],
                            global: ['phaseBefore', 'phaseAfter'],
                        },
                        filter(event, player) {
                            if (event.name == 'phaseBegin') return true;
                            return get.type(event.card) == 'basic' || get.type(event.card) == 'trick';
                        },
                        forced: true,
                        popup: false,
                        priority: 11 + 45 + 14,
                        firstDo: true,
                        content() {
                            if (event.triggername == 'phaseBeginStart') {
                                delete player.storage.wechatsuanlve_mark2;
                                delete player.storage.wechatsuanlve_mark3;
                            }
                            else {
                                player.storage.wechatsuanlve_mark2 = trigger.card.name;
                                player.storage.wechatsuanlve_mark3 = trigger.card.nature;
                            }
                        },
                    },
                },
            },
            wechatmiaoji: {
                audio: 'ext:活动武将/audio/skill:2',
                audioname2: {
                    wechat_zhiyin_guojia: 'wechatmiaoji_wechat_zhiyin_guojia',
                    wechat_zhiyin_zhugeliang: 'wechatsangu',
                    wechat_zhiyin_zhouyu: 'wechatyingrui',
                    wechat_zhiyin_jiangwei: 'wechatgujin',
                    wechat_zhiyin_jiaxu: ' wechatquanbian',
                },
                forceaudio: true,
                list: {
                    guohe: player => {
                        let num = 1;
                        num -= player.countMark('wechatquanbian_effect');
                        return Math.max(0, num);
                    },
                    wuxie: player => {
                        let num = 3;
                        num -= player.countMark('wechatquanbian_effect');
                        return Math.max(0, num);
                    },
                    wuzhong: player => {
                        let num = 3;
                        num -= player.countMark('wechatquanbian_effect');
                        return Math.max(0, num);
                    },
                },
                subSkill: {
                    used: { charlotte: true },
                    wechat_zhiyin_guojia: { audio: 'ext:活动武将/audio/skill:2' },
                    wechat_zhiyin_zhugeliang: { audio: 'ext:活动武将/audio/skill:2' },
                },
                enable: 'chooseToUse',
                hiddenCard(player, name) {
                    if (player.hasSkill('wechatmiaoji_used')) return false;
                    const list = lib.skill.wechatmiaoji.list;
                    return list[name] && player.countMark('wechatmoulvenum') >= list[name](player);
                },
                filter(event, player) {
                    if (player.hasSkill('wechatmiaoji_used')) return false;
                    const num = player.countMark('wechatmoulvenum');
                    const list = lib.skill.wechatmiaoji.list;
                    return Object.keys(list).some(name => num >= list[name](player) && event.filterCard({ name: name, isCard: true }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = [], num = player.countMark('wechatmoulvenum');
                        const listx = lib.skill.wechatmiaoji.list;
                        for (const name of Object.keys(listx)) {
                            if (num < listx[name](player)) continue;
                            if (event.filterCard({ name: name, isCard: true }, player, event)) list.push(['锦囊', '', name]);
                        }
                        return ui.create.dialog('妙计', [list, 'vcard'], 'hidden')
                    },
                    check(button) {
                        var player = _status.event.player;
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup(links, player) {
                        return {
                            selectCard: -1,
                            filterCard: () => false,
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                                isCard: true,
                            },
                            log: false,
                            precontent() {
                                player.logSkill('wechatmiaoji');
                                player.addTempSkill('wechatmiaoji_used');
                                const num = lib.skill.wechatmiaoji.list[event.result.card.name](player);
                                lib.skill.wechatmoulvenum.changeNum(-num, player);
                            },
                        }
                    },
                    prompt(links, player) {
                        const name = links[0][2];
                        const num = lib.skill.wechatmiaoji.list[name](player);
                        return '失去' + num + '点' + get.MouLveInform() + '，视为使用' + get.translation(name);
                    },
                },
                ai: {
                    order: 1,
                    result: { player: 1 },
                },
            },
            //关羽
            wechatqinglong: {
                derivation: 'qinglong_skill',
                mod: {
                    attackRange(player, num) {
                        if (player.hasEmptySlot(1)) return num + 2;
                    },
                },
                audio: 'qinglong_skill',
                trigger: { player: ['shaMiss', 'eventNeutralized'] },
                filter(event, player) {
                    if (!player.hasEmptySlot(1) || !event.card || event.card.name != 'sha') return false;
                    return event.target.isIn() && player.canUse('sha', event.target, false) && (player.hasSha() || _status.connectMode && player.countCards('h'));
                },
                direct: true,
                locked: true,
                content() {
                    player.chooseToUse(get.prompt('qinglong', trigger.target), function (card, player, event) {
                        if (get.name(card) != 'sha') return false;
                        return lib.filter.filterCard.apply(this, arguments);
                    }, trigger.target, -1).set('addCount', false).logSkill = 'wechatqinglong';
                },
            },
            //许褚
            wechatluoyi: {
                audio: 'luoyi',
                trigger: { source: 'damageBegin2' },
                filter(event, player) {
                    return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && player.countCards('he');
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt('wechatluoyi', trigger.player), '弃置一张牌并令此伤害+1').set('goon', get.damageEffect(trigger.player, player, player) > 0).set('ai', function (card) {
                        if (_status.event.goon) return 12 - get.value(card);
                        return 0;
                    }).logSkill = ['wechatluoyi', trigger.player];
                    'step 1'
                    if (result.bool) trigger.num++;
                },
                ai: { expose: 0.25 },
            },
            //孙尚香
            wechatjieyin: {
                audio: 'jieyin',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return target.hasSex('male');
                    }) && player.countCards('he');
                },
                filterTarget(card, player, target) {
                    return target.hasSex('male');
                },
                filterCard: true,
                check(card) {
                    var player = _status.event.player;
                    if (player.hasSkill('xiaoji') && get.position(card) == 'e') return 8 - get.value(card);
                    return 5 - get.value(card);
                },
                position: 'he',
                usable: 1,
                content() {
                    player.draw('nodelay');
                    target.draw();
                },
                ai: {
                    order: 7,
                    result: { target: 1 },
                },
            },
            //庞德
            wechatmengjin: {
                audio: 'jianchu',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha' && event.target.countCards('he');
                },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                logTarget: 'target',
                content() {
                    'step 0'
                    player.discardPlayerCard('he', trigger.target, true);
                    'step 1'
                    if (result.bool) {
                        if (get.type(result.cards[0]) == 'equip') trigger.getParent().directHit.push(trigger.target);
                        else player.gain(result.cards.filterInD(), 'gain2');
                    }
                },
                ai: {
                    unequip_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg?.name == 'sha' && arg.target && get.attitude(player, arg.target) <= 0 && arg.target.countCards('he')) return true;
                        return false;
                    },
                },
            },
            //夏侯渊
            wechatshensu: {
                audio: 'shensu1',
                audioname: ['xiahouba'],
                trigger: { player: ['phaseJudgeBefore', 'phaseUseBefore', 'phaseDiscardBefore'] },
                direct: true,
                content() {
                    'step 0'
                    var check;
                    switch (trigger.name) {
                        case 'phaseJudge': check = player.countCards('h') > 2; break;
                        case 'phaseUse': check = player.needsToDiscard(); break;
                        case 'phaseDiscard': check = player.needsToDiscard(); break;
                    }
                    var str = ['判定阶段和摸牌', '出牌', '弃牌'][lib.skill.wechatshensu.trigger.player.indexOf(event.triggername)];
                    player.chooseTarget(get.prompt('wechatshensu'), (trigger.name == 'phaseDiscard' ? '失去1点体力并' : '') + '跳过' + str + '阶段并视为对一名其他角色使用一张无视距离和防具的【杀】', function (card, player, target) {
                        if (player == target) return false;
                        return player.canUse({ name: 'sha' }, target, false);
                    }).set('check', check).set('ai', target => {
                        if (!_status.event.check || (_status.event.getTrigger().name == 'phaseDiscard' && player.hp <= target.hp)) return 0;
                        return get.effect(target, { name: 'sha' }, _status.event.player);
                    }).setHiddenSkill('wechatshensu');
                    'step 1'
                    if (result.bool) {
                        trigger.cancel();
                        if (event.triggername == 'phaseJudgeBefore') player.skip('phaseDraw');
                        player.logSkill('wechatshensu', result.targets);
                        if (trigger.name == 'phaseDiscard') player.loseHp();
                        player.useCard({ name: 'sha', isCard: true }, result.targets[0], false).set('audio', false).card.wechatshensu = true;
                    }
                },
                ai: {
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || arg.card.wechatshensu != true) return false;
                    },
                },
            },
            //黄忠
            wechatliegong: {
                shaRelated: true,
                mod: {
                    targetInRange(card, player, target) {
                        if (card.name == 'sha') return true;
                    },
                },
                audio: 'liegong',
                trigger: { player: 'useCardToTargeted' },
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    return player.countCards('h') >= event.target.countCards('h');
                },
                forced: true,
                locked: false,
                logTarget: 'target',
                content() {
                    trigger.getParent().directHit.push(trigger.target);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg.card.name == 'sha' && player.countCards('h', function (card) {
                            return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card));
                        }) >= arg.target.countCards('h')) return true;
                        return false;
                    },
                },
            },
            //曹冲
            wechatrenxin: {
                audio: 'renxin',
                trigger: { global: 'damageBegin4' },
                filter(event, player) {
                    if (player.hasSkill('wechatrenxin_used')) return false;
                    return event.player != player && event.player.hp <= event.num && player.countCards('he');
                },
                checkx(event, player) {
                    if (get.attitude(player, event.player) < 0) return false;
                    var num = player.countCards('h', function (card) {
                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                        if (mod2 != 'unchanged') return mod2;
                        var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                        if (mod != 'unchanged') return mod;
                        var savable = get.info(card).savable;
                        if (typeof savable == 'function') savable = savable(card, player, event.player);
                        return savable;
                    });
                    if (num >= 1 + event.num - event.player.hp) return false;
                    return player.hp + num - event.num > 0;
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt2('wechatrenxin', trigger.player)).set('ai', function (card) {
                        if (_status.event.goon) return 7 - get.value(card);
                        return -1;
                    }).set('goon', lib.skill.wechatrenxin.checkx(trigger, player)).logSkill = ['wechatrenxin', trigger.player];
                    'step 1'
                    if (result.bool) {
                        player.addTempSkill('wechatrenxin_used', 'roundStart');
                        trigger.player = player;
                    }
                },
                subSkill: { used: { charlotte: true } },
            },
            //蔡文姬
            wechatchenqing: {
                audio: 'chenqing',
                trigger: { global: 'dying' },
                filter(event, player) {
                    return !player.getRoundHistory('useSkill', evt => evt.skill == 'wechatchenqing').length && event.player.hp <= 0;
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatchenqing'), function (card, player, target) {
                        return target != _status.event.getTrigger().player;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        var trigger = _status.event.getTrigger();
                        if (get.attitude(player, trigger.player) > 0) {
                            var att1 = get.attitude(target, player);
                            var att2 = get.attitude(target, trigger.player);
                            var att3 = get.attitude(player, target);
                            if (att3 < 0) return 0;
                            return att1 / 2 + att2 + att3;
                        }
                        else return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0]
                        event.target = target;
                        player.logSkill('wechatchenqing', target);
                        target.draw(4);
                    }
                    else event.finish();
                    'step 2'
                    var target = event.target;
                    var tosave = trigger.player;
                    var att = get.attitude(target, tosave);
                    var hastao = target.countCards('h', 'tao');
                    target.chooseToDiscard(4, true, 'he').set('ai', function (card) {
                        var hastao = _status.event.hastao;
                        var att = _status.event.att;
                        if (!hastao && att > 0) {
                            var suit = get.suit(card);
                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                if (get.suit(ui.selected.cards[i]) == suit) {
                                    return -4 - get.value(card);
                                }
                            }
                        }
                        if (att < 0 && ui.selected.cards.length == 3) {
                            var suit = get.suit(card);
                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                if (get.suit(ui.selected.cards[i]) == suit) {
                                    return -get.value(card);
                                }
                            }
                            return -10 - get.value(card);
                        }
                        return -get.value(card);
                    }).set('hastao', hastao).set('att', att);
                    'step 3'
                    if (result.cards && result.cards.length == 4) {
                        var suits = [];
                        for (var i = 0; i < result.cards.length; i++) suits.add(get.suit(result.cards[i]));
                        if (suits.length == 4 && game.checkMod({ name: 'tao', isCard: true }, player, trigger.player, 'unchanged', 'cardSavable', player)) target.useCard({ name: 'tao', isCard: true }, trigger.player);
                    }
                },
                ai: { expose: 0.3 },
            },
            wechatmozhi: {
                audio: 'mozhi',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    const history = player.getHistory('useCard', evt => evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card)));
                    return history.length > 0 && player.hasUseTarget(new lib.element.VCard({
                        name: get.name(history[0].card, player),
                        nature: get.nature(history[0].card, player),
                        isCard: true,
                    }));
                },
                direct: true,
                async content(event, trigger, player) {
                    let count = 0;
                    const history = player.getHistory('useCard', evt => evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card)));
                    while (count < 2 && history[count]) {
                        const card = new lib.element.VCard({
                            name: get.name(history[count].card, player),
                            nature: get.nature(history[count].card, player),
                            isCard: true,
                        });
                        if (player.hasUseTarget(card)) {
                            const result = await player.chooseUseTarget('###' + get.prompt(event.name) + '###视为使用' + get.translation(card), card, false).set('logSkill', event.name).forResult();
                            if (result?.bool) {
                                count++;
                                continue;
                            }
                        }
                        break;
                    }
                },
            },
            //王平
            wechatbinglve: {
                audio: 'nzry_binglve',
                trigger: { player: 'useSkillAfter' },
                filter(event, player) {
                    return event.skill == 'minifeijun_backup';
                },
                forced: true,
                content() {
                    'step 0'
                    player.draw(2);
                    'step 1'
                    if (player.getAllHistory('useSkill', function (evt) {
                        return evt.skill == 'minifeijun_backup' && evt.targets[0] == trigger.targets[0];
                    }).length == 1) {
                        let skill, expire;
                        if (player === _status.currentPhase) {
                            skill = 'wechatbinglve_phase';
                            expire = 'phaseBeginStart';
                        }
                        else {
                            skill = 'wechatbinglve_count';
                            expire = 'phaseAfter';
                        }
                        player.addTempSkill(skill, { player: expire });
                        player.addMark(skill, 1, false);
                    }
                },
                ai: { combo: 'minifeijun' },
                subSkill: {
                    phase: {
                        charlotte: true,
                        onremove(player, name) {
                            if (player === _status.currentPhase && player.hasMark(name)) {
                                let skill = 'wechatbinglve_count';
                                player.addTempSkill(skill, { player: 'phaseUseAfter' });
                                player.addMark(skill, player.countMark(name), false);
                            }
                            delete player.storage[name];
                        },
                        intro: { content: '下回合出牌阶段【飞军】发动次数+#' },
                    },
                    count: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '出牌阶段【飞军】发动次数+#' },
                    },
                },
            },
            //孙亮
            wechatchezheng: {
                mod: {
                    playerEnabled(card, player, target) {
                        var info = get.info(card);
                        if (target != player && (!info || !info.singleCard || !ui.selected.targets.length) && player.isPhaseUsing() && !target.inRange(player)) return false;
                    },
                },
                audio: 'nzry_zhizheng',
                trigger: { player: 'phaseUseEnd' },
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return target != player && !target.inRange(player);
                    });
                },
                forced: true,
                content() {
                    'step 0'
                    player.draw(game.countPlayer(function (target) {
                        return target != player && !target.inRange(player);
                    }));
                    'step 1'
                    if (!game.hasPlayer(function (target) {
                        return target != player && !target.inRange(player) && target.countDiscardableCards(player, 'he');
                    })) { event.finish(); return; }
                    player.chooseTarget('请选择〖掣政〗的目标', '弃置一名攻击范围内不包含你的角色的一张牌', true, function (card, player, target) {
                        return target != player && !target.inRange(player) && target.countDiscardableCards(player, 'he');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -get.attitude(player, target);
                    });
                    'step 2'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        player.discardPlayerCard(target, 'he', true);
                    }
                },
            },
            //曹植
            wechatluoying: {
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('wechatluoying')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('wechatluoying')) return false;
                    },
                },
                onremove(player) {
                    player.removeGaintag('wechatluoying');
                },
                audio: 'luoying_discard',
                trigger: { global: ['loseAfter', 'cardsDiscardAfter'] },
                filter(event, player) {
                    switch (event.name) {
                        case 'lose':
                            if (event.type != 'discard') return false;
                            if (event.player == player) return false;
                            for (var i = 0; i < event.cards2.length; i++) {
                                if (get.suit(event.cards2[i], event.player) == 'club' && get.position(event.cards2[i], true) == 'd') return true;
                            }
                            return false;
                            break;
                        case 'cardsDiscard':
                            var evt = event.getParent().relatedEvent;
                            if (!evt || evt.name != 'judge') return;
                            if (evt.player == player) return false;
                            if (get.position(event.cards[0], true) != 'd') return false;
                            return (get.suit(event.cards[0]) == 'club');
                            break;
                    }
                },
                frequent: true,
                content() {
                    var cards = (trigger.name == 'lose' ? trigger.cards2 : trigger.cards);
                    cards = cards.filter(function (card) {
                        return get.suit(card) == 'club' && get.position(card, true) == 'd';
                    });
                    player.gain(cards, 'gain2').gaintag.add('wechatluoying');
                },
            },
            wechatjiushi: {
                group: 'wechatjiushi2',
                audio: 'jiushi1',
                enable: 'chooseToUse',
                filter(event, player) {
                    return player.countCards('h', { suit: 'club' }) && !event.wechatjiushi;
                },
                filterCard: () => false,
                selectCard: -1,
                viewAs: { name: 'jiu' },
                prompt: '弃置一张梅花手牌，视为使用【酒】',
            },
            wechatjiushi2: {
                charlotte: true,
                trigger: { player: 'useCardBefore' },
                filter(event, player) {
                    return event.skill == 'wechatjiushi';
                },
                firstDo: true,
                direct: true,
                content() {
                    'step 0'
                    delete trigger.skill;
                    player.chooseToDiscard({ suit: 'club' }).logSkill = 'wechatjiushi';
                    'step 1'
                    if (result.bool) game.delay(0.5);
                    else {
                        trigger.cancel();
                        trigger.getParent().wechatjiushi = true;
                        trigger.getParent().goto(0);
                    }
                },
            },
            //魏延
            wechatkuanggu: {
                audio: 'kuanggu_re_weiyan',
                audioname: ['re_weiyan'],
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return get.distance(player, event.player) <= 1;
                },
                forced: true,
                content() {
                    player.recover(trigger.num);
                    player.draw(trigger.num);
                },
            },
            //黄月英
            wechatjizhi: {
                audio: 'jizhi',
                audioname2: { wechat_zhiyin_huangyueying: 'wechatjizhi_wechat_zhiyin_huangyueying' },
                trigger: { player: 'useCard' },
                filter(event) {
                    return get.type2(event.card) == 'trick';
                },
                frequent: true,
                preHidden: true,
                content() {
                    player.draw().gaintag = ['wechatjizhi'];
                    player.addTempSkill('wechatjizhi2');
                },
                ai: { noautowuxie: true },
                subSkill: {
                    wechat_zhiyin_huangyueying: { audio: 'ext:活动武将/audio/skill:2' },
                },
            },
            wechatjizhi2: {
                charlotte: true,
                onremove(player) {
                    player.removeGaintag('wechatjizhi');
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('wechatjizhi')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('wechatjizhi')) return false;
                    },
                },
            },
            wechatqicai: {
                mod: {
                    targetInRange(card, player, target, now) {
                        if (get.type2(card) == 'trick') return true;
                    },
                },
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return _status.currentPhase && _status.currentPhase == player && player.getHistory('useCard', function (evt) {
                        return get.type2(evt.card) == 'trick';
                    }).indexOf(event) == 0;
                },
                forced: true,
                content() {
                    trigger.directHit.addArray(game.players);
                },
            },
            //陆抗
            wechatjueyan: {
                derivation: 'relianying',
                audio: 'drlt_jueyan',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.hasEnabledSlot(1) || player.hasEnabledSlot(2) || player.hasEnabledSlot('horse');
                },
                usable: 1,
                content() {
                    'step 0'
                    var list = [];
                    for (var i = 1; i <= 4; i++) {
                        if (player.hasEnabledSlot(i)) list.push('equip' + i);
                    }
                    if (list.includes('equip3') && list.includes('equip4')) list.push('equip3_4');
                    list.remove('equip3');
                    list.remove('equip4');
                    if (!list.length) event.finish();
                    else if (list.length == 1) event._result = { control: list[0] };
                    else {
                        player.chooseControl(list).set('prompt', '决堰：请选择废除一个装备栏').set('ai', function () {
                            var player = _status.event.player;
                            var list = _status.event.list;
                            if (list.includes('equip2')) return 'equip2';
                            if (list.includes('equip1') && (player.countCards('h', function (card) {
                                return get.name(card, player) == 'sha' && player.hasUseTarget(card);
                            }) - player.getCardUsable('sha')) > 1) return 'equip1';
                            return list.randomGet();
                        }).set('list', list);
                    }
                    'step 1'
                    if (result.control == 'equip3_4') player.disableEquip(3, 4);
                    else player.disableEquip(result.control);
                    player.addTempSkill('drlt_jueyan' + ['1', '3', '2'][['equip1', 'equip2', 'equip3_4'].indexOf(result.control)]);
                    if (result.control == 'equip2') player.draw(3);
                    if (result.control == 'equip3_4') player.addTempSkills('relianying');
                },
                ai: {
                    order: 13,
                    result: {
                        player(player) {
                            if (!player.isDisabled('equip2') || (!player.isDisabled('equip1') && (player.countCards('h', function (card) {
                                return get.name(card, player) == 'sha' && player.hasValueTarget(card);
                            }) - player.getCardUsable('sha')) > 1)) return 1;
                            return 0;
                        },
                    },
                },
            },
            wechatposhi: {
                unique: true,
                derivation: 'drlt_huairou',
                audio: 'drlt_poshi',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return !player.hasEnabledSlot() || player.hp == 1;
                },
                forced: true,
                juexingji: true,
                skillAnimation: true,
                animationColor: 'wood',
                content() {
                    'step 0'
                    player.awakenSkill('wechatposhi');
                    player.loseMaxHp();
                    'step 1'
                    var num = player.maxHp - player.countCards('h');
                    if (num > 0) player.draw(num);
                    player.changeSkills(['drlt_huairou'], ['wechatjueyan']);
                },
            },
            //简雍
            wechatqiaoshui: {
                audio: 'qiaoshui',
                inherit: 'reqiaoshui',
            },
            wechatjyzongshi: {
                audio: 'jyzongshi',
                trigger: { player: ['chooseToCompareAfter', 'compareMultipleAfter'], target: ['chooseToCompareAfter', 'compareMultipleAfter'] },
                filter(event, player) {
                    if (event.preserve) return false;
                    if (player == event.player) {
                        if (event.num1 > event.num2) return true;
                        return !get.owner(event.card1);
                    }
                    else {
                        if (event.num1 < event.num2) return true;
                        return !get.owner(event.card2);
                    }
                },
                check(event, player) {
                    if (player == event.player) {
                        if (event.num1 > event.num2) return true;
                        return event.card1.name != 'du';
                    }
                    else {
                        if (event.num1 < event.num2) return true;
                        return event.card2.name != 'du';
                    }
                },
                frequent: 'check',
                content() {
                    var bool = false;
                    if (player == trigger.player) {
                        if (trigger.num1 > trigger.num2) bool = true;
                        else player.gain(trigger.card1, 'gain2');
                    }
                    else {
                        if (trigger.num1 < trigger.num2) bool = true;
                        else player.gain(trigger.card2, 'gain2');
                    }
                    if (bool) {
                        var card = get.cardPile2(function (card) {
                            return get.type2(card) == 'trick';
                        });
                        if (card) player.gain(card, 'gain2');
                    }
                },
            },
            //CXK
            wechatqieting: {
                audio: 'qieting',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return player != event.player && !event.player.getHistory('sourceDamage', function (evt) {
                        return evt.player != event.player;
                    }).length;
                },
                direct: true,
                content() {
                    'step 0'
                    var list = ['摸一张牌'], target = trigger.player, str = get.translation(target);
                    event.target = target;
                    event.addIndex = 0;
                    if (target.countGainableCards(player, 'h')) list.push('随机获得' + str + '的一张手牌');
                    else event.addIndex++;
                    if (target.countCards('e', function (card) {
                        return player.canEquip(card);
                    }) > 0) list.push('将' + str + '装备区内的一张牌移动至自己的装备区');
                    player.chooseControl('cancel2').set('choiceList', list).set('prompt', get.prompt('wechatqieting', target)).set('ai', function () {
                        var evt = _status.event.getParent();
                        if (get.attitude(evt.player, evt.target) > 0) return 0;
                        var val = evt.target.hasSkillTag('noe') ? 6 : 0;
                        if (evt.target.countCards('e', function (card) {
                            return evt.player.canEquip(card) && get.value(card, evt.target) > val && get.effect(evt.player, card, evt.player, evt.player) > 0;
                        }) > 0) return 2 - evt.addIndex;
                        if (evt.target.countGainableCards(evt.player, 'h') > 0) return 1;
                        return 0;
                    });
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('wechatqieting', target);
                        if (result.index == 0) {
                            player.draw();
                            event.finish();
                        }
                        else if (result.index + event.addIndex == 1) {
                            player.gain(target.getGainableCards(player, 'h').randomGets(1), target, 'giveAuto');
                            event.finish();
                        }
                        else {
                            player.addExpose(0.1);
                            player.choosePlayerCard(target, 'e', true).set('filterButton', function (button) {
                                return _status.event.player.canEquip(button.link);
                            }).set('ai', function (button) {
                                var player = _status.event.player;
                                return get.effect(player, button.link, player, player);
                            });
                        }
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        var card = result.cards[0];
                        target.$give(card, player, false);
                        game.delay(0.5);
                        player.equip(card);
                    }
                },
            },
            //马谡
            wechatsanyao: {
                audio: 'sanyao',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('he');
                },
                filterCard: true,
                filterTarget: lib.filter.notMe,
                check(card) {
                    return 7 - get.value(card);
                },
                position: 'he',
                usable: 1,
                content() {
                    target.damage('nocard');
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            if (player.hasSkill('rezhiman') && target.countCards('j') && get.attitude(player, target) > 0) return 1;
                            if (player.hasSkill('rezhiman') && target.countCards('e')) return -1;
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            //SP太史慈
            wechatjixu: {
                audio: 'xinfu_jixu',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return lib.skill.wechatjixu.filterTarget(null, player, target);
                    });
                },
                filterTarget(card, player, target) {
                    if (player == target) return false;
                    return target.hp <= player.hp;
                },
                selectTarget: -1,
                usable: 1,
                multitarget: true,
                multiline: true,
                content() {
                    'step 0'
                    targets.sortBySeat();
                    event.num = 0;
                    'step 1'
                    if (!event.caicuolist) event.caicuolist = [];
                    targets[event.num].chooseBool('是否押杀？').ai = function (event, player) {
                        var evt = _status.event.getParent();
                        if (get.attitude(targets[event.num], evt.player) > 0) return evt.player.countCards('h', 'sha') ? false : true;
                        if (!evt.player.countCards('h')) return false;
                        return Math.random() < 0.5;
                    };
                    'step 2'
                    var target = targets[event.num];
                    var num1 = result.bool ? 1 : -1;
                    var num2 = player.countCards('h', 'sha') ? 1 : -1;
                    if (num1 != num2) {
                        event.caicuolist.push(target);
                        target.chat('猜错');
                        game.log(target, '猜', '#y错', '了');
                    }
                    else {
                        target.chat('猜对');
                        game.log(target, '猜', '#g对', '了');
                    }
                    event.num++;
                    game.delay();
                    if (event.num < targets.length) event.goto(1);
                    'step 3'
                    if (event.caicuolist.length) {
                        for (var i of event.caicuolist) {
                            player.discardPlayerCard(i, 'he', true);
                            player.useCard({ name: 'sha', isCard: true }, i, false);
                        }
                        player.draw(event.caicuolist.length);
                    }
                    else {
                        var evt = _status.event.getParent('phaseUse');
                        if (evt?.name == 'phaseUse') evt.skipped = true;
                    }
                },
                ai: {
                    expose: 0.25,
                    order() {
                        return get.order({ name: 'sha' }) - 0.01;
                    },
                    result: { player: 1 },
                },
            },
            //步骘
            wechatdingpan: {
                audio: 'dingpan',
                inherit: 'dingpan',
                filter(event, player) {
                    return (player.getStat().skill.wechatdingpan || 0) < 2;
                },
                content() {
                    'step 0'
                    target.draw();
                    'step 1'
                    var bool = (target == player && (player.getEquip('baiyin') || player.getEquip('rewrite_baiyin')));
                    player.chooseControl('选项一', '选项二').set('ai', function () {
                        return _status.event.goon ? '选项一' : '选项二';
                    }).set('prompt', '定叛').set('choiceList', [
                        '弃置' + get.translation(target) + '装备区里的一张牌',
                        '令' + get.translation(target) + '获得其装备区内的所有牌并受到1点伤害'
                    ]).set('goon', !bool && (get.damageEffect(target, player, player) < 0 || target.countCards('e', card => get.equipValue(card, target) >= 7)));
                    'step 2'
                    if (result.control == '选项一') {
                        player.discardPlayerCard(target, true, 'e');
                        event.finish();
                    }
                    else target.gain(target.getCards('e'), 'gain2');
                    'step 3'
                    game.delay(0.5);
                    target.damage();
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            if (target == player && (player.getEquip('baiyin') || player.getEquip('rewrite_baiyin'))) return 10;
                            var att = get.attitude(player, target);
                            if (att > 0 && target.countCards('e', card => get.equipValue(card, target) <= 4)) return 2;
                            if (get.damageEffect(target, player, player) >= 0) return 1;
                            if (att < 0 && target.countCards('e', card => get.equipValue(card, target) >= 7)) return 1;
                            return 0;
                        },
                    },
                },
            },
            //曹彰
            wechatjiangchi: {
                audio: 'jiangchi',
                trigger: { player: 'phaseUseBegin' },
                direct: true,
                content() {
                    'step 0'
                    var list = [
                        '摸两张牌，本阶段内不能使用【杀】',
                        '本阶段使用【杀】且无距离限制且可以多使用一张【杀】',
                    ];
                    player.chooseControl('cancel2').set('prompt', get.prompt('wechatjiangchi')).set('choiceList', list).set('ai', function () {
                        var player = _status.event.player;
                        if (player.countCards('hs', function (card) {
                            return get.name(card) == 'sha' && player.hasValueTarget(card, false);
                        })) return 1;
                        return 0;
                    });
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('wechatjiangchi');
                        if (result.index == 0) {
                            player.draw(2);
                            player.addTempSkill('wechatjiangchi_less', 'phaseUseAfter');
                        }
                        else player.addTempSkill('xinjiangchi_more', 'phaseUseAfter');
                    }
                },
                subSkill: {
                    less: {
                        charlotte: true,
                        mod: {
                            cardEnabled(card) {
                                if (card.name == 'sha') return false;
                            },
                        },
                    },
                },
            },
            wechatrejiangchi: {
                audio: 'jiangchi',
                trigger: {
                    player: 'phaseUseBegin',
                },
                async cost(event, trigger, player) {
                    const list = [
                        '摸三张牌，本回合不能使用【杀】',
                        '摸一张牌，然后你本阶段造成伤害后，摸一张牌',
                        '本阶段使用【杀】无距离限制，且可以多使用一张【杀】',
                    ];
                    const { result } = await player.chooseControl('cancel2').set('prompt', get.prompt(event.name.slice(0, -5))).set('choiceList', list).set('ai', () => {
                        const player = get.player();
                        const num = player.countCards('hs', function (card) {
                            return get.name(card) == 'sha' && player.hasValueTarget(card, false);
                        });
                        if (num == 0) return 1;
                        if (num > 1) return 2;
                        return 0;
                    });
                    event.result = {
                        bool: result.control != 'cancel2',
                        cost_data: result.index,
                    }
                },
                async content(event, trigger, player) {
                    switch (event.cost_data) {
                        case 0: {
                            await player.draw(3);
                            player.addTempSkill('wechatrejiangchi_hand');
                            player.addMark('wechatrejiangchi_hand', 2, false);
                            player.addTempSkill('wechatjiangchi_less', 'phaseUseAfter');
                            break;
                        }
                        case 1: {
                            player.draw();
                            player.addTempSkill(event.name + '_draw', 'phaseUseAfter');
                            break;
                        }
                        case 2: {
                            player.addTempSkill('xinjiangchi_more', 'phaseUseAfter');
                            break;
                        }
                    }
                },
                subSkill: {
                    draw: {
                        inherit: 'minijiangchi_draw',
                        trigger: {
                            source: 'damageSource',
                        },
                    },
                    hand: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '手牌上限+#' },
                        mod: { maxHandcard: (player, num) => num + player.countMark('wechatrejiangchi_hand') },
                    },
                },
            },
            //曹丕
            wechatfangzhu: {
                audio: 'fangzhu',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return player != target && target.countCards('h');
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatfangzhu'), function (card, player, target) {
                        return player != target && target.countCards('h');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -get.sgn(get.attitude(player, target)) * target.countCards('h');
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatfangzhu', target);
                        target.addToExpansion(target.getCards('h'), 'giveAuto', target).gaintag.add('wechatfangzhu2');
                        target.addTempSkill('wechatfangzhu2', { player: 'wechatfangzhu2After' });
                    }
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (target.hp <= 1) return;
                                if (!target.hasFriend()) return;
                                var hastarget = false;
                                for (var i of game.filterPlayer()) {
                                    if (get.attitude(target, i) < 0 && i.countCards('h') > 3) {
                                        hastarget = true;
                                        break;
                                    }
                                }
                                if (get.attitude(player, target) > 0 && !hastarget) return;
                                if (target.hp == target.maxHp) return [0.5, 1];
                                if (target.hp > 1) return [1, 0.5];
                            }
                        },
                    },
                },
            },
            wechatfangzhu2: {
                charlotte: true,
                trigger: { player: ['phaseEnd', 'damageEnd'] },
                direct: true,
                content() {
                    var cards = player.getExpansions('wechatfangzhu2');
                    if (cards.length) player.gain(cards, 'draw');
                },
                marktext: '逐',
                intro: {
                    markcount: 'expansion',
                    mark(dialog, storage, player) {
                        var cards = player.getExpansions('wechatfangzhu2');
                        if (player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共扣置' + get.cnNumber(cards.length) + '张“放逐”牌';
                    },
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            //SP姜维
            wechatkunfen: {
                audio: 'kunfen',
                trigger: { player: 'phaseJieshuBegin' },
                check(event, player) {
                    if (player.hp > 3) return true;
                    if (player.hp == 3 && player.countCards('h') < 3) return true;
                    if (player.hp == 2 && player.countCards('h') == 0) return true;
                    return false;
                },
                content() {
                    player.loseHp();
                    player.draw(2);
                },
            },
            wechatfengliang: {
                unique: true,
                audio: 'fengliang',
                derivation: 'retiaoxin',
                trigger: { player: 'dying' },
                forced: true,
                juexingji: true,
                skillAnimation: true,
                animationColor: 'thunder',
                content() {
                    'step 0'
                    player.awakenSkill('wechatfengliang');
                    player.loseMaxHp();
                    'step 1'
                    if (player.hp < 3) player.recover(3 - player.hp);
                    'step 2'
                    player.addSkills('retiaoxin');
                },
            },
            //曹休
            wechatqingxi: {
                audio: 'qingxi',
                trigger: { source: 'damageBegin2' },
                filter(event, player) {
                    return event.player != player;
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                content() {
                    'step 0'
                    var num = player.getAttackRange();
                    trigger.player.chooseToDiscard(num, '弃置' + get.cnNumber(num) + '张手牌，或令即将对你造成的伤害+1').set('ai', function (card) {
                        var player = _status.event.player;
                        if (player.hp == 1) {
                            if (get.type(card) == 'basic') return 8 - get.value(card);
                            else return 10 - get.value(card);
                        }
                        else {
                            if (num > 2) return 0;
                            return 8 - get.value(card);
                        }
                    });
                    'step 1'
                    if (result.bool) {
                        var cards = player.getEquips(1);
                        if (cards.length) player.discard(cards);
                    }
                    else trigger.num++;
                },
            },
            //袁绍
            //袁神，启动
            wechatluanji: {
                audio: 'luanji',
                enable: 'phaseUse',
                viewAs: { name: 'wanjian' },
                filterCard(card, player) {
                    return !player.getStorage('wechatluanji_count').includes(get.suit(card));
                },
                position: 'hs',
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
                group: ['wechatluanji_mark', 'wechatluanji_respond'],
                subSkill: {
                    mark: {
                        charlotte: true,
                        trigger: { player: 'useCard1' },
                        filter(event) {
                            return event.skill == 'wechatluanji';
                        },
                        direct: true,
                        firstDo: true,
                        content() {
                            player.addTempSkill('wechatluanji_count', { player: 'phaseUseAfter' });
                            for (var card of trigger.cards) player.markAuto('wechatluanji_count', [get.suit(card, player)]);
                        },
                    },
                    count: {
                        charlotte: true,
                        onremove: true,
                    },
                    respond: {
                        audio: 'luanji',
                        trigger: { global: 'respond' },
                        filter(event, player) {
                            var evt = event.getParent(2);
                            return evt?.name == 'wanjian' && evt.getParent().player == player && event.player != player;
                        },
                        forced: true,
                        locked: false,
                        logTarget: 'player',
                        content() {
                            player.draw('nodelay');
                            trigger.player.draw();
                        },
                    },
                },
            },
            //孙登
            wechatkuangbi: {
                audio: 'kuangbi',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player && target.countCards('he');
                },
                usable: 1,
                content() {
                    'step 0'
                    target.chooseCard('he', [1, 3], '匡弼：将至多三张牌置于' + get.translation(player) + '的武将牌上', true).set('ai', function (card) {
                        var player = _status.event.player;
                        var target = _status.event.getParent().player;
                        if (get.attitude(player, target) > 0) return 7 - get.value(card);
                        return -get.value(card);
                    });
                    'step 1'
                    if (result.bool) {
                        player.addTempSkill('wechatkuangbi_draw', { player: 'wechatkuangbi_drawAfter' });
                        player.addToExpansion(result.cards, target, 'give').gaintag.add('wechatkuangbi_draw');
                        player.storage.wechatkuangbi_draw[0].push(target);
                        player.storage.wechatkuangbi_draw[1].push(result.cards.length);
                    }
                    else event.finish();
                    'step 2'
                    target.draw();
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                        target(player, target) {
                            var att = get.attitude(player, target);
                            if (att > 0) return Math.sqrt(target.countCards('he'));
                            return 1 + get.sgn(att);
                        },
                    },
                },
                subSkill: {
                    draw: {
                        init(player) {
                            if (!player.storage.wechatkuangbi_draw) player.storage.wechatkuangbi_draw = [[], []];
                        },
                        charlotte: true,
                        onremove: true,
                        audio: 'kuangbi',
                        trigger: { player: 'phaseZhunbeiBegin' },
                        filter(event, player) {
                            return player.getExpansions('wechatkuangbi_draw').length;
                        },
                        forced: true,
                        content() {
                            player.gain(player.getExpansions('wechatkuangbi_draw'), 'gain2');
                            var storage = player.storage.wechatkuangbi_draw;
                            if (storage.length) {
                                for (var i = 0; i < storage[0].length; i++) {
                                    var target = storage[0][i], num = storage[1][i];
                                    if (target?.isIn()) {
                                        player.line(target);
                                        target.draw(num);
                                    }
                                }
                            }
                        },
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove(player, skill) {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                            delete player.storage[skill];
                        },
                    },
                },
            },
            //徐庶
            wechatzhuhai: {
                audio: 'zhuhai',
                trigger: { global: 'phaseJieshuBegin' },
                filter(event, player) {
                    return event.player.isIn() && event.player.getStat('damage') && player.canUse({ name: 'sha', isCard: true }, event.player, false) && player.countCards('he');
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseToDiscard(get.prompt('wechatzhuhai', trigger.player), '弃置一张牌，视为对' + get.translation(trigger.player) + '使用一张【杀】').set('ai', function (card) {
                        var player = _status.event.player;
                        var trigger = _status.event.getTrigger();
                        if (get.effect(trigger.player, { name: 'sha', isCard: true }, player, player) > 0) return 7 - get.value(card);
                        return -1;
                    }).logSkill = ['wechatzhuhai', trigger.player];
                    'step 1'
                    if (result.bool) player.useCard({ name: 'sha', isCard: true }, trigger.player, false);
                },
            },
            //夏侯霸
            wechatbaobian: {
                audio: 'rebaobian',
                trigger: { player: ['phaseBefore', 'changeHp', 'phaseBegin'] },
                init(player) {
                    if (game.online) return;
                    var list = lib.skill.wechatbaobian.derivation.slice(0);
                    player.addAdditionalSkills('wechatbaobian', list.slice(0, Math.max(0, 4 - player.hp)));
                },
                direct: true,
                locked: true,
                derivation: ['retiaoxin', 'new_repaoxiao', 'wechatshensu'],
                content() {
                    if (event.triggername == 'phaseBegin') {
                        player.logSkill('wechatbaobian');
                        player.loseHp();
                        var card = get.cardPile(function (card) {
                            return card.name == 'sha';
                        });
                        if (card) player.gain(card, 'gain2');
                    }
                    else {
                        var list = lib.skill.wechatbaobian.derivation.slice(0);
                        player.addAdditionalSkills('wechatbaobian', list.slice(0, Math.max(0, 4 - player.hp)));
                    }
                },
            },
            wechatrebaobian: {
                audio: 'rebaobian',
                trigger: {
                    global: ['gameStart', 'phaseBefore'],
                    player: ['changeHp'],
                },
                init(player) {
                    if (!_status.gameStarted) return;
                    var list = lib.skill.wechatrebaobian.derivation.slice(1);
                    player.addAdditionalSkills('wechatrebaobian', player.getHp() == 4 ? ['wechatkunfen'] : list.slice(0, Math.max(0, 4 - player.hp)));
                },
                direct: true,
                locked: true,
                derivation: ['wechatkunfen', 'retiaoxin', 'new_repaoxiao', 'wechatshensu'],
                content() {
                    var list = lib.skill.wechatrebaobian.derivation.slice(1);
                    player.addAdditionalSkills('wechatrebaobian', player.getHp() == 4 ? ['wechatkunfen'] : list.slice(0, Math.max(0, 4 - player.hp)));
                },
            },
            //刘繇
            wechatkannan: {
                audio: 'xinfu_kannan',
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => player.canCompare(target));
                },
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                content() {
                    'step 0'
                    player.chooseToCompare(target);
                    'step 1'
                    if (!result.tie) {
                        var current = result.bool ? player : target;
                        current.addTempSkill('wechatkannan_damage', { player: 'wechatkannan_damageAfter' });
                        if (current.countMark('wechatkannan_damage') < 5) current.addMark('wechatkannan_damage', 1, false);
                    }
                },
                ai: {
                    order() {
                        return get.order({ name: 'sha' }) + 0.4;
                    },
                    result: {
                        target(player, target) {
                            if (player.hasCard(function (card) {
                                if (get.position(card) != "h") return false;
                                var val = get.value(card);
                                if (val < 0) return true;
                                if (val <= 5) {
                                    return card.number >= 12;
                                }
                                if (val <= 6) {
                                    return card.number >= 13;
                                }
                                return false;
                            })) return -1;
                            return 0;
                        },
                    },
                },
                subSkill: {
                    phase: { charlotte: true },
                    damage: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '下一张杀的伤害基数+#' },
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        direct: true,
                        firstDo: true,
                        content() {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage += player.countMark('wechatkannan_damage');
                        },
                    },
                },
            },
            //全琮
            wechatyaoming: {
                audio: 'yaoming',
                trigger: { player: 'damageEnd', source: 'damageSource' },
                direct: true,
                content() {
                    'step 0'
                    var nh = player.countCards('h');
                    player.chooseTarget(get.prompt2('wechatyaoming')).set('ai', function (target) {
                        const player = get.player();
                        const eff1 = get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player);
                        const eff2 = get.effect(target, { name: 'draw' }, player, player);
                        switch (get.sgn(target.countCards('h') - _status.event.nh)) {
                            case 1: return eff1;
                            case 0: return Math.max(eff1, eff2);
                            case -1: return eff2;
                        }
                    }).set('nh', nh).set('animate', false);
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        if (player === target || target.countCards('h') < player.countCards('h') || !target.countCards('h')) event._result = { control: '摸牌' };
                        else if (target.countCards('h') > player.countCards('h')) event._result = { control: '弃牌' };
                        else player.chooseControl('摸牌', '弃牌').set('prompt', '邀名：令' + get.translation(target) + '摸一张牌或弃置其一张手牌').set('ai', function () {
                            const { player, target } = get.event();
                            const eff1 = get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player);
                            const eff2 = get.effect(target, { name: 'draw' }, player, player);
                            return eff2 >= eff1 ? '摸牌' : '弃牌';
                        }).set('target', target);
                    }
                    else event.finish();
                    'step 2'
                    player.logSkill('wechatyaoming', target);
                    if (result.control == '摸牌') target.draw();
                    else player.discardPlayerCard(target, 'h', true);
                },
                ai: { expose: 0.2 },
            },
            //廖化
            wechatdangxian: {
                audio: 'dangxian',
                inherit: 'redangxian',
            },
            wechatfuli: {
                unique: true,
                audio: 'fuli',
                limited: true,
                enable: 'chooseToUse',
                mark: true,
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    return true;
                },
                skillAnimation: true,
                animationColor: 'soil',
                content() {
                    'step 0'
                    player.awakenSkill('wechatfuli');
                    var num = game.countPlayer() - 1;
                    if (num > player.hp) player.recover(num - player.hp);
                    'step 1'
                    if (player.isMaxHp(true)) player.addTempSkill('wechatfuli_block', { player: 'phaseEnd' });
                },
                ai: {
                    save: true,
                    skillTagFilter(player, arg, target) {
                        return player == target;
                    },
                    result: { player: 10 },
                    threaten(player, target) {
                        if (!target.storage.wechatfuli) return 0.9;
                    },
                },
                subSkill: {
                    block: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '不能使用或打出手牌' },
                        mod: {
                            cardEnabled2(card) {
                                if (get.position(card) == 'h') return false;
                            },
                        },
                    },
                },
            },
            //严颜
            wechatjuzhan: {
                group: 'wechatjuzhan_gain',
                audio: 'nzry_juzhan_1',
                trigger: { target: 'useCardToTargeted' },
                prompt2: '当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。',
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                logTarget: 'player',
                content() {
                    'step 0'
                    game.asyncDraw([player, trigger.player]);
                    trigger.player.addTempSkill('wechatjuzhan_use1');
                    trigger.player.markAuto('wechatjuzhan_use1', [player]);
                    'step 1'
                    game.delayx();
                },
                subSkill: {
                    gain: {
                        audio: 'nzry_juzhan_1',
                        trigger: { player: 'useCardToPlayered' },
                        prompt2: '当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌',
                        filter(event, player) {
                            return event.card.name == 'sha' && event.target.countGainableCards(player, 'he');
                        },
                        check(event, player) {
                            return get.effect(event.target, { name: 'guohe_copy2' }, player, player) > 0;
                        },
                        logTarget: 'target',
                        content() {
                            'step 0'
                            player.gainPlayerCard(trigger.target, 'he', true);
                            'step 1'
                            player.addTempSkill('wechatjuzhan_use1');
                            player.markAuto('wechatjuzhan_use1', [trigger.target]);
                        },
                    },
                    use1: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '不能对$使用牌' },
                        mod: {
                            playerEnabled(card, player, target) {
                                if (player.getStorage('wechatjuzhan_use1').includes(target)) return false;
                            },
                        },
                    },
                },
            },
            //郭皇后
            wechatjiaozhao: {
                onChooseToUse(event) {
                    if (!game.online && !event.wechatjiaozhao_list) {
                        var player = event.player;
                        var list = [];
                        for (var name of lib.inpile) {
                            var card = { name: name };
                            if (get.type(card) != 'basic' && get.type(card) != 'trick') continue;
                            list.push([get.type(card), '', name]);
                            if (name == 'sha') {
                                for (var nature of lib.inpile_nature) list.push([get.type(card), '', name, nature]);
                            }
                        }
                        event.set('wechatjiaozhao_list', list);
                    }
                },
                audio: 'jiaozhao',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!event.wechatjiaozhao_list || !event.wechatjiaozhao_list.length) return false;
                    return player.countCards('h', function (card) {
                        return lib.skill.wechatjiaozhao.filterCard(card, player);
                    });
                },
                filterCard(card, player) {
                    if (!player.hasSkill('wechatjiaozhao2')) return true;
                    return !player.storage.wechatjiaozhao2[0].includes(card);
                },
                discard: false,
                lose: false,
                delay: false,
                check(card) {
                    return 7 - get.value(card);
                },
                usable: 1,
                content() {
                    'step 0'
                    player.addTempSkill('wechatjiaozhao2', { player: 'phaseBegin' });
                    player.showCards(cards, get.translation(player) + '发动了【矫诏】');
                    'step 1'
                    var list = event.getParent(2).wechatjiaozhao_list;
                    var str = '###矫诏###请选择并声明' + get.translation(cards[0]) + '视为的牌，且此牌不能指定你为目标';
                    player.chooseButton([str, [list, 'vcard']], true).set('ai', function (button) {
                        var player = _status.event.player;
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    });
                    'step 2'
                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                    player.storage.wechatjiaozhao2[0].push(cards[0]);
                    player.storage.wechatjiaozhao2[1].push(card);
                    var chosen = result.links[0][2];
                    var nature = result.links[0][3];
                    player.addGaintag(cards, 'wechatjiaozhao2');
                    player.showCards(game.createCard({
                        name: chosen,
                        nature: nature,
                        suit: cards[0].suit,
                        number: cards[0].number,
                    }), get.translation(player) + '声明了' + (get.translation(nature) || '') + get.translation(chosen));
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
            },
            wechatjiaozhao2: {
                init(player) {
                    if (!player.storage.wechatjiaozhao2) player.storage.wechatjiaozhao2 = [[], []];
                },
                onremove(player) {
                    player.removeGaintag('wechatjiaozhao2');
                    delete player.storage.wechatjiaozhao2;
                },
                getOriginalCard(player, card) {
                    var storage = player.storage.wechatjiaozhao2;
                    return storage[0][storage[1].indexOf(storage[1].filter(function (cardx) {
                        return get.name(cardx) == get.name(card) && (!get.nature(cardx) || get.nature(cardx) == get.nature(card));
                    })[0])];
                },
                mod: {
                    playerEnabled(card, player, target) {
                        if (target == player && card.storage && card.storage.wechatjiaozhao2) return false;
                    },
                },
                charlotte: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h', function (card) {
                        return player.storage.wechatjiaozhao2[0].includes(card);
                    });
                },
                chooseButton: {
                    dialog(event, player) {
                        var storage = player.storage.wechatjiaozhao2;
                        var cards = player.getCards('h').slice(0).filter(function (card) {
                            return storage[0].includes(card);
                        }), list = [];
                        for (var card of cards) {
                            var cardx = storage[1][storage[0].indexOf(card)];
                            list.push([get.translation(get.type2(cardx)), '', get.name(cardx), get.nature(cardx)]);
                        }
                        return ui.create.dialog('矫诏', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        return lib.filter.filterCard({ name: button.link[2], nature: button.link[3], storage: { wechatjiaozhao2: true } }, player, _status.event.getParent());
                    },
                    check(button) {
                        return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup(links, player) {
                        return {
                            audio: 'jiaozhao',
                            filterCard: lib.skill.wechatjiaozhao2.getOriginalCard(player, { name: links[0][2], nature: links[0][3] }),
                            selectCard: -1,
                            popname: true,
                            viewAs: { name: links[0][2], nature: links[0][3], storage: { wechatjiaozhao2: true } },
                        }
                    },
                    prompt(links, player) {
                        var name = links[0][2], nature = links[0][3];
                        var card = lib.skill.wechatjiaozhao2.getOriginalCard(player, { name: links[0][2], nature: links[0][3] });
                        return '将' + get.translation(card) + '当作' + (get.translation(nature) || '') + get.translation(name) + '使用';
                    }
                },
                ai: {
                    order: 7.9,
                    result: { player: 1 },
                },
                subSkill: { backup: {} },
            },
            wechatdanxin: {
                audio: 'danxin',
                trigger: { player: 'damageEnd' },
                frequent: true,
                prompt2: '摸一张牌',
                content() {
                    'step 0'
                    event.count = trigger.num;
                    'step 1'
                    event.count--;
                    player.draw();
                    'step 2'
                    if (event.count > 0 && player.hasSkill('wechatdanxin')) player.chooseBool(get.prompt('wechatdanxin'), '摸一张牌').set('frequentSkill', 'wechatdanxin');
                    else event.finish();
                    'step 3'
                    if (result.bool) {
                        player.logSkill('wechatdanxin');
                        event.goto(1);
                    }
                },
            },
            //蔡贞姬
            wechatsheyi: {
                audio: 'sheyi',
                trigger: { global: 'damageBegin4' },
                direct: true,
                filter(event, player) {
                    return !player.hasSkill('wechatsheyi_used') && player != event.player && event.player.hp <= player.hp && player.countCards('he') >= Math.max(1, player.hp);
                },
                content() {
                    'step 0'
                    var num = Math.max(1, player.hp), target = trigger.player;
                    player.chooseCard('he', get.prompt('wechatsheyi', target), '交给其' + get.cnNumber(num) + '张牌，防止即将受到的伤害（' + trigger.num + '点）', num).set('goon', function () {
                        if (get.attitude(player, target) < 0) return false;
                        if (trigger.num < target.hp && get.damageEffect(target, trigger.source, player, trigger.nature) >= 0) return false;
                        if (trigger.num < 2 && target.hp > trigger.num) return 6 / Math.sqrt(num);
                        if (target == get.zhu(player)) return 9;
                        return 8 / Math.sqrt(num);
                    }()).set('ai', function (card) {
                        if (ui.selected.cards.length >= Math.max(1, _status.event.player.hp)) return 0;
                        if (typeof _status.event.goon == 'number') return _status.event.goon - get.value(card);
                        return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        var target = trigger.player;
                        player.logSkill('wechatsheyi', target);
                        player.addTempSkill('wechatsheyi_used', 'roundStart');
                        player.give(result.cards, target);
                        trigger.cancel();
                    }
                },
                subSkill: { used: { charlotte: true } },
            },
            wechattianyin: {
                audio: 'tianyin',
                trigger: { player: 'phaseJieshuBegin' },
                forced: true,
                locked: false,
                content() {
                    'step 0'
                    var list = [], cards = [];
                    player.getHistory('useCard', function (evt) {
                        list.add(get.type2(evt.card, false));
                    });
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var type = get.type2(ui.cardPile.childNodes[i], false);
                        if (!list.includes(type)) {
                            list.push(type);
                            cards.push(ui.cardPile.childNodes[i])
                        };
                    }
                    if (cards.length) {
                        player.gain(cards, 'gain2');
                        event.finish();
                    }
                    'step 1'
                    player.chooseTarget('天音：是否弃置一名其他角色的一张牌？', function (card, player, target) {
                        return target != player && target.countDiscardableCards(player, 'he');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'guohe_copy2' }, player, player);
                    });
                    'step 2'
                    if (result.bool) {
                        player.line(result.targets);
                        player.discardPlayerCard(result.targets[0], 'he', true);
                    }
                },
            },
            //朱灵
            wechatzhanyi: {
                inherit: 'xinzhanyi',
                content() {
                    player.loseHp();
                    switch (get.type(cards[0], 'trick', cards[0].original == 'h' ? player : false)) {
                        case 'basic':
                            player.addTempSkill('wechatzhanyi_basic');
                            break;
                        case 'trick':
                            player.draw(3);
                            player.addTempSkill('wechatzhanyi_trick');
                            break;
                        case 'equip':
                            player.addTempSkill('wechatzhanyi_equip');
                            break;
                    }
                },
                subSkill: {
                    basic: {
                        inherit: 'xinzhanyi_basic',
                        group: ['wechatzhanyi_basic1'],
                    },
                    basic1: {
                        trigger: {
                            player: "useCard",
                        },
                        filter(event, player) {
                            return get.type(event.card, false) == "basic" && event.skill == 'xinzhanyi_basic_backup';
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        content() {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage++;
                            game.log(trigger.card, "的伤害值/回复值", "#y+1");
                        },
                    },
                    trick: {
                        mod: {
                            targetInRange(card, player, target, now) {
                                var type = get.type(card);
                                if (type == "trick" || type == "delay") return true;
                            },
                        },
                        audio: "zhanyi",
                        trigger: {
                            player: "useCard",
                        },
                        forced: true,
                        filter(event) {
                            return get.type(event.card) == "trick";
                        },
                        content() {
                            trigger.directHit.addArray(game.players);
                        },
                    },
                    equip: {
                        inherit: 'xinzhanyi_equip',
                        filter(event, player) {
                            return event.card.name == "sha" && event.target.countCards("he") > 0;
                        },
                        content() {
                            'step 0'
                            player.discardPlayerCard(trigger.target, 'he', 2, true);
                            'step 1'
                            if (result.bool && result.cards && result.cards.length) {
                                if (result.cards.length == 1) event._result = { bool: true, links: result.cards.slice(0) };
                                else player.chooseButton(['选择获得其中的一张牌', result.cards.slice(0)], true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                            }
                            else event.finish();
                            'step 2'
                            if (result.links) player.gain(result.links, 'gain2');
                        },
                    },
                },
            },
            wechatshouxi: {
                audio: 'shouxi',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.card.name == 'sha' && event.player.isIn();
                },
                direct: true,
                *content(event, map) {
                    var player = map.player, trigger = map.trigger;
                    var result = yield player.chooseButton([get.prompt2('wechatshouxi'), [['basic', 'trick', 'equip'], 'vcard']]).set('ai', function (button) {
                        var trigger = _status.event.getTrigger();
                        var name = button.link[2], target = trigger.player;
                        if (get.effect(player, trigger.card, target, player) > 0) return 0;
                        if (!target.getDiscardableCards(target, 'he').some(card => get.type2(card) == get.type2(trigger.card))) return 1.1 + Math.random();
                        return 0.1 + Math.random();
                    });
                    if (result.bool) {
                        player.logSkill('wechatshouxi');
                        var name = result.links[0][2];
                        player.popup(name);
                        game.log(player, '声明了', '#y' + get.translation(name) + '牌');
                        var result2 = yield trigger.player.chooseToDiscard('守玺：弃置一张' + get.translation(name) + '牌，或令【杀】对' + get.translation(player) + '无效', function (card) {
                            return get.type2(card) == _status.event.namex;
                        }, 'he').set('ai', function (card) {
                            if (_status.event.eff > 0) return 10 - get.value(card);
                            return 0;
                        }).set('eff', get.effect(player, trigger.card, trigger.player, trigger.player)).set('namex', name);
                        if (!result2.bool) trigger.getParent().excluded.add(player);
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                if (_status.event.name == 'wechatshouxi') return;
                                var bs = player.getCards('he');
                                for (var type of ['basic', 'trick', 'equip']) {
                                    if (!player.getCards('he').some(card => get.type2(card) == type)) return 0;
                                }
                                if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
                                    for (var i = 0; i < bs.length; i++) {
                                        if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                                            return [1, 0, 1, -0.5];
                                        }
                                    }
                                    return 0;
                                }
                                return [1, 0, 1, -0.5];
                            }
                        },
                    },
                },
            },
            //极曹操
            wechatdelu: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    if (player.hasSkillTag('noCompareSource')) return false;
                    return game.hasPlayer(target => lib.skill.wechatdelu.filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return player.canCompare(target) && target.getHp() <= player.getHp();
                },
                usable: 1,
                selectTarget: [1, Infinity],
                multitarget: true,
                multiline: true,
                content() {
                    'step 0'
                    //player.draw();
                    player.addTempSkill('wechatdelu_compare');
                    'step 1'
                    player.chooseToCompare(targets, function (card) {
                        return get.number(card);
                    }).setContent('chooseToCompareMeanwhile');
                    'step 2'
                    if (result.winner) {
                        var targetx = [player].addArray(targets).sortBySeat(player);
                        targetx.remove(result.winner);
                        for (var target of targetx) {
                            const cards = target.getGainableCards(result.winner, 'hej');
                            if (cards.length) result.winner.gain(cards.randomGet(), target, 'giveAuto');
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            if (target.countCards('he') > 1) return -3;
                            return -1;
                        },
                    },
                },
                subSkill: {
                    compare: {
                        charlotte: true,
                        trigger: { player: 'compare' },
                        filter(event, player) {
                            return event.getParent().name == 'wechatdelu' && !event.iwhile;
                        },
                        forced: true,
                        popup: false,
                        content() {
                            var num = trigger.lose_list.length;
                            trigger.num1 += num;
                            if (trigger.num1 > 13) trigger.num1 = 13;
                            game.log(player, '的拼点牌点数+', num);
                        },
                    },
                },
            },
            wechatzhujiu: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    return game.hasPlayer(target => lib.skill.wechatzhujiu.filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return target != player && target.countCards('h');
                },
                usable: 1,
                content() {
                    'step 0'
                    var next = player.chooseCardOL([player, target], '煮酒：请选择要交换的牌', true).set('ai', card => -get.value(card)).set('source', player);
                    next.aiCard = function (target) {
                        var hs = target.getCards('h');
                        return { bool: true, cards: [hs.randomGet()] };
                    };
                    next._args.remove('glow_result');
                    'step 1'
                    var cards = [result[0].cards, result[1].cards];
                    event.cards = cards;
                    game.loseAsync({
                        player: player,
                        target: target,
                        cards1: result[0].cards,
                        cards2: result[1].cards,
                    }).setContent('swapHandcardsx');
                    'step 2'
                    game.loseAsync({
                        gain_list: [
                            [player, cards[1].filterInD()],
                            [target, cards[0].filterInD()]
                        ],
                    }).setContent('gaincardMultiple');
                    'step 3'
                    game.delayx();
                    'step 4'
                    var card1 = cards[0][0];
                    var card2 = cards[1][0];
                    if (get.color(card1, player) == get.color(card2, target)) player.recover();
                    else {
                        player.line(target);
                        target.damage();
                    }
                },
                ai: {
                    order: 9,
                    result: { target: -1 },
                },
            },
            //极诸葛亮
            wechatsangu: {
                init(player) {
                    player.storage.wechatsangu_count = game.getAllGlobalHistory('useCard', evt => evt.targets && evt.targets.includes(player)).length;
                    player.markSkill('wechatsangu_count');
                    player.addSkill('wechatsangu_count');
                },
                onremove(player) {
                    delete player.storage.wechatsangu_count;
                    player.unmarkSkill('wechatsangu_count');
                    player.removeSkill('wechatsangu_count');
                },
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    //if(player.countMark('wechatmoulvenum')>=lib.skill.wechatmoulvenum.getMax) return false;
                    return game.getAllGlobalHistory('useCard', evt => evt.targets && evt.targets.includes(player)).indexOf(event.getParent()) % 3 == 2;
                },
                forced: true,
                content() {
                    'step 0'
                    lib.skill.wechatmoulvenum.changeNum(3, player);
                    'step 1'
                    player.chooseToGuanxing(3);
                },
                subSkill: {
                    count: {
                        charlotte: true,
                        trigger: { target: 'useCardToTargeted' },
                        forced: true,
                        popup: false,
                        priority: 114514,
                        content() {
                            player.storage.wechatsangu_count = game.getAllGlobalHistory('useCard', evt => evt.targets && evt.targets.includes(player)).length;
                            player.markSkill('wechatsangu_count');
                        },
                        intro: {
                            markcount(storage, player) {
                                return ((storage || 0) % 3).toString();
                            },
                            content(storage, player) {
                                return '获得' + get.MouLveInform() + '进度：' + ((storage || 0) % 3) + '/3';
                            },
                        },
                    },
                },
                derivation: ['wechatmiaoji'],
            },
            wechatyanshi: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return event.wechatyanshi;
                },
                onChooseToUse(event) {
                    if (!game.online && !event.wechatyanshi) event.set('wechatyanshi', ui.cardPile.childNodes.length);
                },
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        return ui.create.dialog('###演势###' + lib.translate.wechatyanshi_info);
                    },
                    chooseControl: () => ['牌堆顶', '牌堆底', 'cancel2'],
                    check(event, player) {
                        var card1 = get.cards(1, true)[0];
                        var card2 = get.bottomCards(1, true)[0];
                        if (player.hasValueTarget(card1) && player.getCardUsable(card1) > 0) return '牌堆顶';
                        if (player.hasValueTarget(card2) && player.getCardUsable(card2) > 0) return '牌堆底';
                        return get.value(card1) >= get.value(card2) ? '牌堆顶' : '牌堆底';
                    },
                    backup(result) {
                        var next = get.copy(lib.skill.wechatyanshi.subSkill.draw);
                        next.position = result.control;
                        return next;
                    },
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
                subSkill: {
                    draw: {
                        audio: 'wechatyanshi',
                        content() {
                            var position = lib.skill.wechatyanshi_backup.position;
                            player.addTempSkill('wechatyanshi_effect', 'phaseUseAfter');
                            player.storage.wechatyanshi_effect = position;
                            player.popup(position);
                            var next = player.draw();
                            if (position == '牌堆底') next.bottom = true;
                            next.gaintag = ['wechatyanshi_effect'];
                        },
                    },
                    effect: {
                        charlotte: true,
                        onremove(player) {
                            delete player.storage.wechatyanshi_effect;
                            player.removeGaintag('wechatyanshi_effect');
                        },
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            if (!player.hasSkill('wechatyanshi') || get.is.blocked('wechatyanshi', player)) return false;
                            return player.getHistory('lose', function (evt) {
                                if (evt.getParent() != event) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('wechatyanshi_effect')) return true;
                                }
                                return false;
                            }).length;
                        },
                        direct: true,
                        content() {
                            'step 0'
                            var position = player.storage.wechatyanshi_effect == '牌堆顶' ? '牌堆底' : '牌堆顶';
                            event.position = position;
                            player.chooseToDiscard(get.prompt('wechatyanshi'), '弃置一张牌并发动【演势】（从' + position + '摸牌）', 'he').set('ai', card => 7 - get.value(card)).logSkill = 'wechatyanshi';
                            'step 1'
                            if (result.bool) {
                                var position = event.position;
                                player.storage.wechatyanshi_effect = position;
                                player.popup(position);
                                var next = player.draw();
                                if (position == '牌堆底') next.bottom = true;
                                next.gaintag = ['wechatyanshi_effect'];
                            }
                        },
                    },
                },
            },
            //SP庞德
            wechatjuesi: {
                audio: 'juesi',
                inherit: 'juesi',
                filterTarget(card, player, target) {
                    return target != player && target.countCards('he') > 0;
                },
            },
            wechatrejuesi: {
                audio: 'juesi',
                inherit: 'juesi',
                async content(event, trigger, player) {
                    const target = event.target;
                    const cards = await target.chooseToDiscard('he', true).forResultCards();
                    if (cards?.length && cards[0].name != 'sha') {
                        await player.gain(cards, 'gain2');
                        await player.useCard({ name: 'juedou', isCard: true }, target);
                    }
                },
            },
            //极司马懿
            wechatyinren: {
                derivation: ['new_rejianxiong', 'xingshang', 'mingjian'],
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    return lib.skill.wechatyinren.derivation.some(skill => !player.hasSkill('wechatyinren_' + skill));
                },
                prompt2(event, player) {
                    return '跳过出牌阶段和弃牌阶段并获得技能【' + get.translation(lib.skill.wechatyinren.derivation.filter(skill => !player.hasSkill('wechatyinren_' + skill))[0]) + '】';
                },
                /*
                check:function(event,player){
                if(lib.skill.wechatyinren.derivation.filter(skill=>!player.hasSkill('wechatyinren_'+skill))[0]!='jianxiong'){
                if(!player.hasFriend()) return false;
                }
                return player.countCards('h')<=player.getHandcardLimit()+1;
                },
                */
                content() {
                    player.skip('phaseUse');
                    player.skip('phaseDiscard');
                    player.addSkills('wechatyinren_' + lib.skill.wechatyinren.derivation.filter(skill => !player.hasSkill('wechatyinren_' + skill))[0]);
                },
                subSkill: {
                    new_rejianxiong: { inherit: 'new_rejianxiong' },
                    xingshang: { inherit: 'xingshang' },
                    mingjian: { inherit: 'mingjian' },
                },
            },
            wechatduoquan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatduoquan'), lib.filter.notMe).set('ai', target => {
                        var player = _status.event.player;
                        return -get.attitude(player, target) / Math.pow(target.countCards('hs') + 1);
                    }).animate = false;
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        var list = lib.inpile.reduce((list, name) => {
                            return list.add(get.type2(name));
                        }, []);
                        if (!list.length) { event.finish(); return; }
                        var next = player.chooseControl(list);
                        var str = '夺权：请选择一种牌的类别';
                        var str2 = get.translation(target) + '于其下个出牌阶段使用第一张牌时，若此牌与你选择的类型相同，则你令此牌无效，且此牌对应的实体牌进入弃牌堆后，你可以使用之';
                        if (target.countCards('h')) next.set('dialog', ['###' + str + '###' + str2, [target.getCards('h'), 'vcard']]);
                        else {
                            next.set('prompt', str);
                            next.set('prompt2', str2);
                        }
                        next.set('ai', function () {
                            var player = _status.event.player;
                            var target = _status.event.target;
                            var cards = target.getCards('h', function (card) {
                                return target.hasUseTarget(card);
                            }), map = {};
                            for (var i = 0; i < cards.length; i++) {
                                map[get.type(cards[i], 'trick')] = true;
                            }
                            if (map.equip) return 'equip';
                            if (map.trick) return 'trick';
                            return 0;
                        });
                        next.set('target', target);
                    }
                    else event.finish();
                    'step 2'
                    player.logSkill('wechatduoquan', target);
                    //player.popup(result.control);
                    //game.log(player,'选择了','#g'+get.translation(result.control)+'牌');
                    target.addSkill('wechatduoquan_effect', { player: 'phaseUseAfter' });
                    if (!target.storage.wechatduoquan_effect) target.storage.wechatduoquan_effect = {};
                    if (!target.storage.wechatduoquan_effect[player.playerid]) target.storage.wechatduoquan_effect[player.playerid] = [];
                    target.storage.wechatduoquan_effect[player.playerid].add(result.control);
                    target.markSkill('wechatduoquan_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        audio: 'wechatduoquan',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return player.isPhaseUsing();
                        },
                        direct: true,
                        content() {
                            var target = game.findPlayer(target => player.storage.wechatduoquan_effect[target.playerid] && player.storage.wechatduoquan_effect[target.playerid].includes(get.type2(trigger.card)));
                            if (target) {
                                target.logSkill('wechatduoquan_effect', player);
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                target.addTempSkill('wechatduoquan_gain');
                                trigger.wechatduoquan_effect = target;
                            }
                            player.removeSkill('wechatduoquan_effect');
                        },
                        mod: {
                            aiOrder(player, card, num) {
                                if (player.isPhaseUsing() && game.hasPlayer(target => {
                                    return player.storage.wechatduoquan_effect[target.playerid] && player.storage.wechatduoquan_effect[target.playerid].includes(get.type2(card));
                                })) return num / 10;
                            },
                        },
                        intro: {
                            content(storage, player) {
                                var str = '';
                                for (var i in storage) {
                                    var target = game.findPlayer2(target => target.playerid == i);
                                    if (!target) continue;
                                    str += get.translation(target) + '→' + get.translation(storage[i]) + '牌<br>';
                                }
                                str = str.slice(0, -4);
                                return str;
                            },
                        },
                    },
                    gain: {
                        charlotte: true,
                        trigger: { global: 'cardsDiscardAfter' },
                        filter(event, player) {
                            if (!event.cards.filterInD('d').length) return false;
                            var evt = event.getParent();
                            if (evt.name != 'orderingDiscard') return false;
                            var evtx = (evt.relatedEvent || evt.getParent());
                            return evtx.player.getHistory('useCard', evtxx => {
                                return evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent()) && evtxx.wechatduoquan_effect && evtxx.wechatduoquan_effect == player;
                            }).length;
                        },
                        forced: true,
                        popup: false,
                        *content(event, map) {
                            var player = map.player, cards = map.trigger.cards.filterInD('d').slice();
                            while (cards.length) {
                                var result = yield player.chooseButton(['是否使用其中的牌？', cards]).set('ai', button => _status.event.player.getUseValue(button.link));
                                if (result.bool) {
                                    cards.removeArray(result.links);
                                    player.$gain2(result.links[0], false);
                                    game.delayx();
                                    player.chooseUseTarget(true, result.links[0], false);
                                }
                                else break;
                            }
                        },
                    },
                },
            },
            //极马超
            wechatqipao: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                check(event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                logTarget: 'target',
                content() {
                    'step 0'
                    if (!trigger.target.countDiscardableCards(trigger.player, 'e')) event._result = { index: 1 };
                    else {
                        trigger.target.chooseControl().set('choiceList', [
                            '弃置装备区的所有牌',
                            '本回合非锁定技失效，且不能响应' + get.translation(trigger.card),
                        ]);
                    }
                    'step 1'
                    if (result.index == 0) trigger.target.discard(trigger.target.getCards('e'));
                    else {
                        trigger.target.addTempSkill('fengyin');
                        trigger.getParent().directHit.add(trigger.target);
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || arg.card.name != 'sha' || !arg.target || arg.target.countDiscardableCards(arg.target, 'e')) return false;
                    },
                },
            },
            wechatzhuixi: {
                mod: {
                    globalFrom(from, to) {
                        if (!to.countCards('e', card => get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4')) return -Infinity;
                    },
                },
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.hasUseTarget({ name: 'sha' }, false) && !game.hasPlayer(target => target != player && !player.inRange(target));
                },
                direct: true,
                locked: false,
                content() {
                    player.chooseUseTarget({ name: 'sha' }, get.prompt('wechatzhuixi'), '视为使用一张【杀】', false).logSkill = 'wechatzhuixi';
                },
            },
            //界沮授
            //两服合体
            wechatjianying: {
                audio: 'jianying',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.countCards('he')) return false;
                    for (var i of lib.inpile) {
                        if (i != 'du' && get.type(i, false) == 'basic') {
                            if (event.filterCard(get.autoViewAs({ name: i }, 'unsure'), player, event)) return true;
                            if (i == 'sha') {
                                for (var j of lib.inpile_nature) {
                                    if (event.filterCard(get.autoViewAs({ name: i, nature: j }, 'unsure'), player, event)) return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                onChooseToUse(event) {
                    if (event.type == 'phase' && !game.online) {
                        var last = event.player.getLastUsed();
                        if (last?.getParent('phaseUse') == event.getParent()) {
                            var suit = get.suit(last.card, false);
                            if (suit != 'none') event.set('wechatjianying_suit', suit);
                        }
                    }
                },
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        var suit = event.wechatjianying_suit || '', str = get.translation(suit);
                        for (var i of lib.inpile) {
                            if (i != 'du' && get.type(i, false) == 'basic') {
                                if (event.filterCard(get.autoViewAs({ name: i }, 'unsure'), player, event)) list.push(['基本', str, i]);
                                if (i == 'sha') {
                                    for (var j of lib.inpile_nature) {
                                        if (event.filterCard(get.autoViewAs({ name: i, nature: j }, 'unsure'), player, event)) list.push(['基本', str, i, j]);
                                    }
                                }
                            }
                        }
                        return ui.create.dialog('渐营', [list, 'vcard']);
                    },
                    check(button) {
                        if (button.link[2] == 'jiu') return 0;
                        return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup(links, player) {
                        var next = {
                            audio: 'jianying',
                            filterCard: true,
                            popname: true,
                            position: 'he',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            ai1(card) {
                                return 7 - _status.event.player.getUseValue(card, null, true);
                            },
                        };
                        if (_status.event.wechatjianying_suit) next.viewAs.suit = _status.event.wechatjianying_suit;
                        return next;
                    },
                    prompt(links) {
                        return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + (_status.event.wechatjianying_suit ? ('(' + get.translation(_status.event.wechatjianying_suit) + ')') : '') + '使用';
                    },
                },
                ai: {
                    order(item, player) {
                        if (_status.event.wechatjianying_suit) return 16;
                        return 3;
                    },
                    result: { player: 1 },
                },
                group: ['wechatjianying_draw'],
                subSkill: {
                    draw: {
                        audio: 'jianying',
                        inherit: 'dcjianying',
                    },
                },
            },
            wechatrejianying: {
                hiddenCard(player, name) {
                    return get.type(name) == 'basic' && player.countCards('hes') > 0 && !player.hasSkill('wechatrejianying_used');
                },
                audio: 'xinjianying',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.type == 'wuxie' || player.hasSkill('wechatrejianying_used')) return false;
                    if (!player.countCards('hes')) return false;
                    return get.inpileVCardList(info => {
                        if (info[0] != 'basic') return false;
                        return event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, 'unsure'), player, event);
                    }).length;
                },
                onChooseToUse(event) {
                    if (!game.online) {
                        const last = event.player.getAllHistory('useCard')?.lastItem;
                        if (last) {
                            const suit = get.suit(last.card, false);
                            if (suit != 'none') event.set('wechatrejianying_suit', suit);
                        }
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        const vcards = get.inpileVCardList(info => {
                            if (info[0] != 'basic') return false;
                            return event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, 'unsure'), player, event);
                        });
                        return ui.create.dialog('渐营', [vcards, 'vcard']);
                    },
                    check(button) {
                        if (get.event().getParent().type != 'phase') return 1;
                        return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup(links, player) {
                        const next = {
                            audio: 'xinjianying',
                            popname: true,
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            filterCard: true,
                            position: 'hes',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            precontent() {
                                player.logSkill('wechatrejianying');
                                player.addTempSkill('wechatrejianying_used');
                            },
                        }
                        if (get.event().wechatrejianying_suit) next.viewAs.suit = get.event().wechatrejianying_suit;
                        return next;
                    },
                    prompt(links, player) {
                        const suit = get.event().wechatrejianying_suit || '';
                        return '将一张牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + (suit ? `（${get.translation(suit)}）` : '') + '使用';
                    },
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        if (!player.countCards('hes') || player.hasSkill('wechatrejianying_used')) return false;
                        if (arg != 'use') return false;
                    },
                    order(item, player) {
                        if (get.event().wechatrejianying_suit) return 16;
                        return 3;
                    },
                    result: {
                        player(player) {
                            return get.event().dying ? get.attitude(player, get.event().dying) : 1;
                        },
                    },
                },
                group: ['wechatrejianying_draw'],
                subSkill: {
                    draw: {
                        audio: 'xinjianying',
                        inherit: 'dcjianying',
                    },
                    used: { charlotte: true },
                },
            },
            //祖茂
            wechatjuedi: { inherit: 'minijuedi' },
            //关索
            wechatzhengnan: {
                audio: 'zhengnan',
                inherit: 'zhengnan',
                trigger: { global: 'dying' },
                filter(event, player) {
                    //if(player==event.player) return false;
                    return !player.getAllHistory('useSkill', evt => evt.skill == 'wechatzhengnan' && evt.targets[0] == event.player).length;
                },
                logTarget: 'player',
            },
            //极黄月英
            wechatmiaobi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    if (player.getHistory('custom', evt => evt.wechatmiaobi_name == event.card.name).length) return false;
                    if (!player.isPhaseUsing() || get.type(event.card) != 'trick' || !event.targets || !event.targets.length) return false;
                    var cards = event.cards.filterInD();
                    return cards.length && event.targets.some(target => target.isIn());
                },
                direct: true,
                content() {
                    'step 0'
                    var targets = trigger.targets.filter(target => target.isIn());
                    var cards = trigger.cards.filterInD();
                    event.cards = cards;
                    if (targets.length == 1) {
                        var target = targets[0];
                        event.target = target;
                        player.chooseBool(get.prompt('wechatmiaobi', target), '将' + get.translation(cards) + '至于' + get.translation(target) + '的武将牌上').set('choice', cards.some(card => player.canUse(card, target, false) && get.effect(target, card, player, player) > 0));
                    }
                    else {
                        player.chooseTarget(get.prompt('wechatmiaobi'), '将' + get.translation(cards) + '至于一名目标角色的武将牌上', function (card, player, target) {
                            return _status.event.getTrigger().targets.includes(target) && _status.event.cards.some(card => player.canUse(card, target, false));
                        }).set('ai', function (target) {
                            var cards = _status.event.cards.filter(card => player.canUse(card, target, false));
                            return cards.reduce((num, card) => num + get.effect(target, card, player, player), 0);
                        }).set('cards', cards);
                    }
                    'step 1'
                    if (result.bool) {
                        var target = event.target || result.targets[0];
                        player.logSkill('wechatmiaobi', target);
                        target.addSkill('wechatmiaobi_effect');
                        target.addToExpansion(cards, player, 'give').gaintag.add('wechatmiaobi_effect');
                        var list = target.getStorage('wechatmiaobi_effect').find(list => list[0] == player);
                        if (!list) target.markAuto('wechatmiaobi_effect', [[player, cards]]);
                        else target.storage.wechatmiaobi_effect[target.getStorage('wechatmiaobi_effect').indexOf(list)] = [player, list[1].concat(cards)];
                        player.getHistory('custom').push({ wechatmiaobi_name: trigger.card.name });
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        popup: false,
                        *content(event, map) {
                            var player = map.player, storage = player.getStorage('wechatmiaobi_effect').slice();
                            var targets = storage.map(list => list[0]).sortBySeat();
                            while (targets.length) {
                                var target = targets.shift();
                                var list = player.getStorage('wechatmiaobi_effect').find(list => list[0] == target);
                                player.unmarkAuto('wechatmiaobi_effect', [list]);
                                var cards = list[1], result;
                                if (target.isIn()) target.line(player);
                                if (!target.isIn() || !player.countCards('he', card => get.type2(card) == 'trick')) result = { index: 1 };
                                else result = yield player.chooseControl().set('choiceList', [
                                    '交给' + get.translation(target) + '一张锦囊牌，然后移去' + get.translation(cards),
                                    '令' + get.translation(target) + (cards.length > 1 ? '依次' : '') + '对你使用' + get.translation(cards),
                                ]).set('ai', () => {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var cards = _status.event.cards.filter(card => target.canUse(card, player, false));
                                    if (cards.reduce((num, card) => num + get.effect(target, card, player, player), 0) <= 0) return 1;
                                    return 0;
                                }).set('target', target).set('cards', cards);
                                if (result.index == 0) {
                                    var result2 = yield player.chooseCard('妙笔：交给' + get.translation(target) + '一张锦囊牌', (card, player) => get.type2(card) == 'trick', 'he', true);
                                    if (result2.bool) player.give(result2.cards, target);
                                    player.loseToDiscardpile(cards);
                                }
                                else {
                                    while (cards.length) {
                                        var card = cards.shift();
                                        if (target.canUse(card, player, false)) target.useCard(card, player, false);
                                        else player.loseToDiscardpile([card]);
                                    }
                                }
                            }
                        },
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove(player, skill) {
                            delete player.storage[skill];
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                    },
                },
            },
            wechathuixin: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: ['useCard', 'useCardAfter'] },
                filter(event, player, name) {
                    if (get.type2(event.card) != 'trick') return false;
                    if (name == 'useCardAfter' && player.hasSkill('wechathuixin_effect')) return false;
                    return (_status.currentPhase == player) == (name == 'useCardAfter');
                },
                forced: true,
                locked: false,
                content() {
                    if (event.triggername == 'useCard') player.draw();
                    else player.addTempSkill('wechathuixin_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '使用牌无距离限制' },
                        mod: { targetInRange: () => true },
                    },
                },
            },
            wechatrehuixin: {
                audio: 'wechathuixin',
                trigger: { player: 'phaseBegin' },
                forced: true,
                locked: false,
                async content(event, trigger, player) {
                    await player.addTempSkills(lib.skill.wechatrehuixin.derivation[(player.countCards('e') + 1) % 2]);
                },
                derivation: ['wechatrejifeng', 'wechatjizhi'],
            },
            wechatrejifeng: {
                audio: 'wechatjifeng',
                enable: 'phaseUse',
                usable: 1,
                filterCard: lib.filter.cardDiscardable,
                check(card) {
                    return 5 - get.value(card);
                },
                async content(event, trigger, player) {
                    const card = get.discardPile(card => get.type2(card) == 'trick');
                    if (card) await player.gain(card, 'gain2');
                },
                ai: {
                    order: 8,
                    player(player, target) {
                        return 1;
                    },
                },
            },
            //二张
            wechatzhijian: {
                audio: 'zhijian',
                inherit: 'zhijian',
                async content(event, trigger, player) {
                    event.target.equip(event.cards[0]);
                    player.draw(2);
                },
            },
            //陈登
            wechatzhouxuan: {
                audio: 'zhouxuan',
                inherit: 'zhouxuan',
                filter: () => true,
                filterCard: () => false,
                selectCard: -1,
            },
            wechatfengji: {
                audio: 'fengji',
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                async content(event, trigger, player) {
                    await player.draw();
                    if (typeof player.storage.wechatfengji == 'number' && player.countCards('h') >= player.storage.wechatfengji) {
                        await player.draw();
                        player.addTempSkill('wechatfengji3');
                        player.addMark('wechatfengji3', 2, false);
                    }
                },
                group: 'wechatfengji2',
                marktext: '积',
                intro: { content: '上回合结束时的手牌数：#' },
            },
            wechatfengji2: {
                charlotte: true,
                trigger: { player: 'phaseAfter' },
                silent: true,
                content() {
                    player.storage.wechatfengji = player.countCards('h');
                    if (player.hasSkill('wechatfengji')) player.markSkill('wechatfengji');
                },
            },
            wechatfengji3: {
                charlotte: true,
                onremove: true,
                marktext: '丰',
                intro: { content: '手牌上限+#' },
                mod: { maxHandcard: (player, num) => num + player.countMark('wechatfengji3') },
            },
            //陶谦
            wechatyixiang: {
                audio: 'yixiang',
                inherit: 'yixiang',
                filter(event, player) {
                    if (event.player.hp < player.hp) return false;
                    var hs = player.getCards('h');
                    var names = ['sha', 'shan', 'tao', 'jiu', 'du'];
                    for (var i = 0; i < hs.length; i++) {
                        names.remove(hs[i].name);
                    }
                    if (!names.length) return false;
                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                        if (names.includes(ui.cardPile.childNodes[i].name)) {
                            return true;
                        }
                    }
                    return false;
                },
            },
            //阚泽
            wechatkuanshi: {
                audio: 'kuanshi',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatkuanshi')).set('ai', target => {
                        var player = _status.event.player;
                        if (get.attitude(player, target) > 0) return 1 / Math.sqrt(target.getHp() + 1);
                    }).animate = false;
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatkuanshi');
                        target.addSkill('wechatkuanshi_effect');
                        target.markAuto('wechatkuanshi_effect', [player]);
                        player.when('phaseBegin').then(() => target.unmarkAuto('wechatkuanshi_effect', [player])).then(() => {
                            if (!target.getStorage('wechatkuanshi_effect').length) target.removeSkill('wechatkuanshi_effect');
                        }).vars({ target: target });
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        audio: 'kuanshi',
                        trigger: { player: 'damageBegin4' },
                        filter(event, player) {
                            return player.getHistory('damage').length;
                        },
                        forced: true,
                        content() {
                            trigger.cancel();
                            player.removeSkill('wechatkuanshi_effect');
                        },
                        mark: true,
                        intro: {
                            markcount: () => 0,
                            content: '下次受到本回合非本次受到伤害时防止此伤害',
                        },
                    },
                },
            },
            //薛综
            wechatjiexun: {
                audio: 'jiexun',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                *content(event, map) {
                    var player = map.player;
                    var num1 = game.countPlayer(current => current.countCards('ej', { suit: 'diamond' }));
                    var num2 = player.countMark('wechatjiexun');
                    var str = '令目标摸' + get.cnNumber(num1) + '张牌';
                    if (num2) {
                        str += '，然后弃置' + get.cnNumber(num2) + '张牌；若目标因此法弃置了所有牌，则你失去1点体力';
                    }
                    var result = yield player.chooseTarget(get.prompt('wechatjiexun'), lib.filter.notMe).set('ai', ftarget => {
                        var player = _status.event.player;
                        if (!_status.event.coeff) return 1 + Math.random();
                        return get.sgn(_status.event.coeff) * get.attitude(player, target);
                    }).set('coeff', num1 - num2).set('prompt2', str);
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatjiexun', target);
                        player.addMark('wechatjiexun', 1, false);
                        if (num1) yield target.draw(num1);
                        if (num2) {
                            target.chooseToDiscard(num2, true, 'he', '诫训：请弃置' + get.cnNumber(num2) + '张牌');
                        }
                    }
                },
            },
            //顾雍
            wechatshenxing: {
                audio: 'shenxing',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('he') >= (player.getStat('skill').wechatshenxing || 0);
                },
                selectCard: () => _status.event.player.getStat('skill').wechatshenxing || 0,
                prompt: () => '弃置' + get.cnNumber(_status.event.player.getStat('skill').wevhatshenxing || 0) + '张牌并摸一张牌',
                check(card) {
                    var num = _status.event.player.countCards('h', { color: get.color(card) });
                    if (get.position(card) == 'e') num++;
                    return (Math.max(4, 7.1 - num) - get.value(card)) / num;
                },
                filterCard: true,
                position: 'he',
                content() {
                    player.draw();
                },
                ai: {
                    order(item, player) {
                        if (!player.getStat('skill').wechatshenxing) return 10;
                        return 1;
                    },
                    result: { player: 1 },
                },
            },
            //星黄忠
            wechatshidi: {
                audio: 'spshidi',
                trigger: {
                    player: 'useCard',
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    var color = get.color(event.card), target = _status.currentPhase;
                    return (event.name == 'useCard' && target == player && color == 'black') || (event.name != 'useCard' && (!target || target != player) && color == 'red');
                },
                forced: true,
                content() {
                    trigger.directHit.addArray(trigger.name == 'useCard' ? game.players : [player]);
                },
                mod: {
                    globalFrom(from, to, distance) {
                        if (_status.currentPhase && _status.currentPhase == from) return distance - 1;
                    },
                    globalTo(from, to, distance) {
                        if (!_status.currentPhase || _status.currentPhase != to) return distance + 1;
                    },
                    aiOrder(player, card, num) {
                        if (_status.currentPhase && _status.currentPhase == player && card.name == 'sha' && get.color(card) == 'black') return num + 0.1;
                    },
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || !arg.target || arg.card.name != 'sha') return false;
                        return _status.currentPhase && _status.currentPhase == player && get.color(arg.card) == 'black';
                    },
                },
                global: 'wechatshidi_ai',
                subSkill: {
                    ai: {
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (!arg || !arg.card || !arg.target || arg.card.name != 'sha') return false;
                                return (!_status.currentPhase || _status.currentPhase != arg.target) && arg.target.hasSkill('wechatshidi') && get.color(arg.card) == 'red';
                            },
                        },
                    },
                },
            },
            //蔡邕
            wechatbizhuan: {
                audio: 'bizhuan',
                trigger: {
                    player: 'useCard',
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    if (event.name != 'useCard' && event.player == event.target) return false;
                    if (player.getExpansions('wechatbizhuan').length >= 4) return false;
                    return get.color(event.card) == 'black';
                },
                marktext: '书',
                intro: {
                    name: '辟撰(书)',
                    name2: '书',
                    content: 'expansion',
                    markcount: 'expansion',
                },
                frequent: true,
                locked: false,
                content() {
                    player.addToExpansion(get.cards(), 'gain2').gaintag.add('wechatbizhuan');
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.getExpansions('wechatbizhuan').length;
                    },
                },
            },
            wechattongbo: {
                audio: 'tongbo',
                trigger: { player: 'phaseDrawEnd' },
                filter(event, player) {
                    return player.getExpansions('wechatbizhuan').length > 0 && player.countCards('he') > 0;
                },
                direct: true,
                content() {
                    'step 0'
                    var four = false;
                    var nofour = !player.hasFriend();
                    var expansions = player.getExpansions('wechatbizhuan');
                    if (expansions.length == 4) {
                        var suits = ['club', 'spade', 'heart', 'diamond'];
                        var list = player.getCards('he').concat(expansions);
                        for (var i = 0; i < list.length; i++) {
                            suits.remove(get.suit(list[i]));
                            if (suits.length == 0) {
                                four = true;
                                break;
                            }
                        }
                    }
                    var next = player.chooseToMove('通博：是否交换“书”和手牌？').set('four', four).set('nofour', nofour);
                    next.set('list', [
                        [get.translation(player) + '（你）的“书”', expansions],
                        ['你的牌', player.getCards('he')],
                    ]);
                    next.set('filterMove', (from, to) => to != 'number');
                    next.set('processAI', list => {
                        var player = _status.event.player, cards = list[0][1].concat(list[1][1]), cards2 = [];
                        if (_status.event.four) {
                            var sorted = [[], [], [], []];
                            for (var i of cards) {
                                var index = lib.suit.indexOf(get.suit(i, false));
                                if (sorted[index]) sorted[index].push(i);
                            }
                            if (_status.event.nofour) {
                                sorted.sort((a, b) => a.length - b.length);
                                var cards3 = cards.slice().sort((a, b) => get.useful(a) - get.useful(b));
                                cards3.removeArray(sorted[0]);
                                cards2 = cards3.slice(0, 4);
                                cards.removeArray(cards2);
                            }
                            else {
                                for (var i of sorted) {
                                    cards2.push(i.randomGet());
                                    cards.remove(cards2);
                                }
                            }
                        }
                        else {
                            cards.sort((a, b) => get.useful(a) - get.useful(b));
                            cards2 = cards.splice(0, player.getExpansions('wechatbizhuan').length);
                        }
                        return [cards2, cards];
                    });
                    'step 1'
                    if (result.bool) {
                        var pushs = result.moved[0], gains = result.moved[1];
                        pushs.removeArray(player.getExpansions('wechatbizhuan'));
                        gains.removeArray(player.getCards('he'));
                        if (!pushs.length || pushs.length != gains.length) {
                            event.finish();
                            return;
                        }
                        player.logSkill('wechattongbo');
                        player.addToExpansion(pushs, 'give', player).gaintag.add('wechatbizhuan');
                        player.gain(gains, 'gain2');
                    }
                    'step 2'
                    if (lib.suit.some(suit => !player.getExpansions('wechatbizhuan').some(card => get.suit(card) == suit))) event.finish();
                    'step 3'
                    event.cards = player.getExpansions('wechatbizhuan').slice();
                    if (event.cards.length > 1) player.chooseCardButton('将所有“书”交给任意名角色', true, event.cards, [1, event.cards.length]).set('ai', () => ui.selected.buttons.length ? 0 : 1);
                    else if (event.cards.length == 1) event._result = { links: event.cards.slice(0), bool: true };
                    else event.finish();
                    'step 4'
                    if (result.bool) {
                        event.cards.removeArray(result.links);
                        event.togive = result.links.slice(0);
                        player.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true).set('ai', target => {
                            var att = get.attitude(_status.event.player, target);
                            if (_status.event.enemy) return -att;
                            else if (att > 0) return att / (1 + target.countCards('h'));
                            else return att / 100;
                        }).set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                    }
                    else event.finish();
                    'step 5'
                    if (result.targets.length) {
                        result.targets[0].gain(event.togive, 'draw').giver = player;
                        player.line(result.targets[0], 'green');
                        game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张', '#g“书”');
                        if (event.cards.length) event.goto(3);
                    }
                },
                ai: { combo: 'wechatbizhuan' },
            },
            //小宝
            wechatpojun: {
                audio: 'xinpojun',
                inherit: 'xinpojun',
                filter(event, player) {
                    return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.target;
                    const { result: { bool, cards } } = await player.choosePlayerCard(target, 'he', [1, Math.min(target.countCards('he'), target.hp)], get.prompt('wechatpojun', target)).set('forceAuto', true);
                    if (bool) {
                        player.logSkill('wechatpojun', target);
                        target.addToExpansion(cards, 'giveAuto', target).gaintag.add('xinpojun2');
                        target.addSkill('xinpojun2');
                    }
                },
            },
            //虞翻
            wechatzongxuan: {
                audio: 'zongxuan',
                trigger: {
                    player: 'loseAfter',
                    global: ['loseAsyncAfter', 'cardsDiscardAfter'],
                },
                filter(event, player) {
                    if (event.name == 'cardsDiscard') {
                        if (!event.cards.someInD('d')) return false;
                        const evt = event.getParent();
                        if (evt.name != 'orderingDiscard') return false;
                        const evtx = (evt.relatedEvent || evt.getParent());
                        if (evtx.player != player) return false;
                        return player.hasHistory('respond', evtxx => evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent()));
                    }
                    else {
                        if (event.type != 'discard' || event.getlx === false) return false;
                        return event.getl(player).cards2.someInD('d');
                    }
                },
                check(event, player) {
                    if (event.getParent(3).name != 'phaseDiscard' || !game.hasPlayer(current => {
                        return current.isDamaged() && get.recoverEffect(current, player, player) > 0;
                    })) return false;
                    return (event.name == 'cardsDiscard' ? event.cards : event.getl(player).cards2).some(card => {
                        return get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                    });
                },
                prompt2(event, player) {
                    let cards = event.name == 'cardsDiscard' ? event.cards : event.getl(player).cards2;
                    cards = cards.filterInD('d');
                    return '将' + get.translation(cards) + '中的任意张牌以任意顺序置于牌堆顶';
                },
                async content(event, trigger, player) {
                    let cards = trigger.name == 'cardsDiscard' ? trigger.cards : trigger.getl(player).cards2;
                    cards = cards.filterInD('d');
                    const next = player.chooseToMove('纵玄：将任意张牌置于牌堆顶', true);
                    next.set('list', [
                        ['本次弃置的牌', cards],
                        ['牌堆顶'],
                    ]);
                    next.set('filterOk', moved => {
                        return moved[1].length > 0;
                    });
                    next.set('processAI', list => {
                        var cards = list[0][1].slice(0), cards2 = cards.filter(function (i) {
                            return get.type(i, false) == 'equip';
                        }), cards3;
                        if (cards2.length) {
                            cards3 = cards2.randomGet();
                        }
                        else cards3 = cards.randomGet();
                        return [[], [cards3]];
                    });
                    const result = await next.forResult();
                    if (result.bool) {
                        let moved = result.moved[1];
                        game.log(player, '将', moved, '置于了牌堆顶');
                        while (moved.length) ui.cardPile.insertBefore(moved.pop().fix(), ui.cardPile.firstChild);
                    }
                },
            },
            wechatzhiyan: {
                audio: 'zhiyan',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatzhiyan')).set('ai', target => {
                        return get.attitude(_status.event.player, target) * (target.isDamaged() ? 2 : 1);
                    });
                    'step 1'
                    if (result.bool) {
                        event.target = result.targets[0];
                        player.logSkill('wechatzhiyan', result.targets);
                        event.target.draw('visible');
                    }
                    else event.finish();
                    'step 2'
                    var card = result[0];
                    if (get.type(card) != 'equip') {
                        player.draw();
                        event.finish();
                    }
                    else if (target.getCards('h').includes(card) && target.hasUseTarget(card)) {
                        event.target.chooseUseTarget(card, true, 'nopopup');
                        game.delay();
                    }
                    'step 3'
                    target.recover();
                },
                ai: { expose: 0.2 },
            },
            //韩当
            wechatjiefan: {
                audio: 'jiefan',
                inherit: 'jiefan',
                init() { },
                filter: () => true,
                content() {
                    'step 0'
                    player.awakenSkill('wechatjiefan');
                    event.players = game.filterPlayer().sortBySeat(target);
                    'step 1'
                    if (event.players.length) {
                        event.current = event.players.shift();
                        event.current.addTempClass('target');
                        player.line(event.current, 'green');
                        if (event.current.countCards('he') && target.isIn()) {
                            event.current.chooseToDiscard({ subtype: 'equip1' }, 'he', '弃置一张武器牌或令' + get.translation(target) + '摸一张牌').set('ai', function (card) {
                                if (get.attitude(_status.event.player, _status.event.target) < 0) return 7 - get.value(card);
                                return -1;
                            }).set('target', target);
                            event.tempbool = false;
                        }
                        else event.tempbool = true;
                    }
                    else event.finish();
                    "step 2"
                    if (event.tempbool || !result.bool) target.draw();
                    event.goto(1);
                },
                ai: {
                    order: 5,
                    result: {
                        target(player, target) {
                            if (player.hp > 2 && game.phaseNumber < game.players.length * 2) return 0;
                            return 1;
                        },
                    },
                },
            },
            //王朗
            wechatjici: {
                audio: 'jici',
                trigger: { player: 'compare' },
                filter(event, player) {
                    return event.getParent().name == 'gushe' && !event.iwhile && player.countMark('gushe');
                },
                forced: true,
                locked: false,
                content() {
                    const num = player.countMark('gushe');
                    if (trigger.num1 == num) player.getStat().skill.gushe--;
                    trigger.num1 = Math.min(13, trigger.num1 + num);
                    game.log(player, '的拼点牌点数+' + num);
                },
            },
            wechatgushe: {
                audio: 'gushe',
                inherit: 'gushe',
                filterTarget(card, player, target) {
                    return player.canCompare(target) && !player.getStorage('wechatgushe_ban').includes(target);
                },
                usable(skill, player) {
                    return 7 - player.countMark('wechatgushe');
                },
                content() {
                    player.chooseToCompare(targets).callback = lib.skill[event.name].callback;
                },
                callback() {
                    'step 0'
                    if (event.winner !== player) {
                        target.chat(lib.skill.gushe.chat[player.countMark('wechatgushe')])
                        game.delay();
                        player.addMark('wechatgushe', 1);
                        player.addTempSkill('wechatgushe_ban');
                        player.markAuto('wechatgushe_ban', [target]);
                        if (player.countMark('wechatgushe') >= 7) player.die();
                    }
                    'step 1'
                    if (event.winner !== player) {
                        player.chooseToDiscard('he', '弃置一张牌，或摸一张牌').set('ai', () => -1);
                    }
                    else event.goto(3);
                    'step 2'
                    if (!result.bool) player.draw();
                    'step 3'
                    if (event.winner !== target) {
                        target.chooseToDiscard('he', '弃置一张牌，或令' + get.translation(player) + '摸一张牌').set('ai', card => {
                            if (_status.event.goon) return 6 - get.value(card);
                            return 0;
                        }).set('goon', get.attitude(target, player) < 0);
                    }
                    else event.finish();
                    'step 4';
                    if (!result.bool) player.draw();
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            var num = ui.selected.targets.length + 1;
                            if (num > 3) num = 3;
                            var hs = player.getCards('h');
                            for (var i = 0; i < hs.length; i++) {
                                if (get.value(hs[i]) <= 6) {
                                    switch (hs[i].number) {
                                        case 13:
                                            return -1;
                                        case 12:
                                            if (player.countMark('wechatgushe') + num <= 8) return -1;
                                            break;
                                        case 11:
                                            if (player.countMark('wechatgushe') + num <= 7) return -1;
                                            break;
                                        default:
                                            if (hs[i].number > 5 && player.countMark('wechatgushe') + num <= 6) return -1;
                                    }
                                }
                            }
                            return 0;
                        },
                    },
                },
                subSkill: { ban: { charlotte: true, onremove: true } },
            },
            wechatrejici: {
                audio: 'jici',
                inherit: 'jici',
                filter(event, player) {
                    return event.getParent().name == 'wechatgushe' && !event.iwhile && player.countMark('wechatgushe');
                },
                content() {
                    const num = player.countMark('wechatgushe');
                    trigger.num1 = Math.min(13, trigger.num1 + num);
                    game.log(player, '的拼点牌点数+' + num);
                },
                ai: { combo: 'wechatgushe' },
            },
            //黄皓
            wechatqinqing: {
                audio: 'qinqing',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return game.hasPlayer(current => {
                        return current != player && current.inRange(player);
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatqinqing'), [1, Infinity], (card, player, target) => {
                        if (target == player) return false;
                        return target.inRange(player);
                    }).set('ai', target => {
                        var he = target.countCards('he')
                        if (get.attitude(_status.event.player, target) > 0) {
                            if (he == 0) return 1;
                            if (target.countCards('h') > player.countCards('h')) return 1;
                        }
                        else if (he > 0) return 1;
                        return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        event.targets = result.targets.slice(0).sortBySeat();
                        event.list = event.targets.slice(0);
                        player.logSkill('wechatqinqing', event.targets);
                    }
                    else event.finish();
                    'step 2'
                    if (event.targets.length) {
                        var target = event.targets.shift();
                        if (target.countCards('he')) player.discardPlayerCard(target, 'he', true);
                        target.draw();
                        event.redo();
                    }
                    'step 3'
                    var num = 0, nh = player.countCards('h');
                    for (var i = 0; i < event.list.length; i++) {
                        if (event.list[i].countCards('h') > nh) num++;
                    }
                    if (num) player.draw(num);
                },
            },
            wechathuisheng: {
                audio: 'huisheng',
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    if (!player.countCards('he')) return false;
                    if (!event.source || event.source == player || !event.source.isIn()) return false;
                    if (player.getStorage('wechathuisheng_buff').includes(event.source)) return false;
                    return true;
                },
                direct: true,
                content() {
                    'step 0'
                    var att = (get.attitude(player, trigger.source) > 0);
                    var goon = false;
                    if (player.hp == 1) goon = true;
                    else {
                        var he = player.getCards('he');
                        var num = 0;
                        for (var i = 0; i < he.length; i++) {
                            if (get.value(he[i]) < 8) {
                                num++;
                                if (num >= 2) {
                                    goon = true;
                                    break;
                                }
                            }
                        }
                    }
                    player.chooseCard('he', [1, player.countCards('he')], get.prompt2('wechathuisheng', trigger.source)).set('ai', card => {
                        if (_status.event.att) return 10 - get.value(card);
                        if (_status.event.goon) return 8 - get.value(card);
                        if (!ui.selected.cards.length) return 7 - get.value(card);
                        return 0;
                    }).set('goon', goon).set('att', att);
                    'step 1'
                    if (result.bool) {
                        player.logSkill('wechathuisheng', trigger.source);
                        game.delay();
                        event.num = result.cards.length;
                        var goon = false;
                        if (event.num > 2 || get.attitude(trigger.source, player) >= 0) goon = true;
                        var forced = false;
                        var str = '获得其中一张牌并防止伤害';
                        if (trigger.source.countCards('he') < event.num) forced = true;
                        else str += '，或取消并弃置' + get.cnNumber(result.cards.length) + '张牌';
                        trigger.source.chooseButton([str, result.cards], forced).set('ai', function (button) {
                            if (_status.event.goon) return get.value(button.link);
                            return get.value(button.link) - 8;
                        }).set('goon', goon);
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        trigger.source.gain(result.links, player, 'giveAuto', 'bySelf');
                        trigger.cancel();
                        player.addTempSkill('wechathuisheng_buff', 'roundStart');
                        player.markAuto('wechathuisheng_buff', [trigger.source]);
                    }
                    else trigger.source.chooseToDiscard(event.num, true, 'he');
                },
                subSkill: { buff: { charlotte: true } },
            },
            //公孙渊
            wechathuaiyi: {
                audio: 'huaiyi',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h');
                },
                usable: 1,
                delay: false,
                async content(event, trigger, player) {
                    await player.showHandcards();
                    if (!player.countDiscardableCards(player, 'h')) return;
                    const colors = ['red', 'black', 'none'].filter(color => player.hasCard(card => {
                        return lib.filter.cardDiscardable(card, player) && get.color(card) == color;
                    }, 'h')).map(color => color == 'none' ? 'none2' : color);
                    const { result: { control } } = await player.chooseControl(colors).set('prompt', '怀异：选择弃置一种颜色的牌').set('ai', () => {
                        const player = get.event('player');
                        const num = game.filterPlayer(target => get.effect(target, { name: 'shunshou_copy2' }, player, player) > 0);
                        let colors = get.event('controls').slice();
                        return colors.sort((a, b) => {
                            return Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == (b == 'none2' ? 'none' : b);
                            })) - Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == (a == 'none2' ? 'none' : a);
                            }));
                        })[0];
                    });
                    if (control) {
                        const cards = player.getCards('h', card => lib.filter.cardDiscardable(card, player) && get.color(card) == (control == 'none2' ? 'none' : control));
                        await player.discard(cards);
                        const { result: { bool, targets } } = await player.chooseTarget([1, cards.length], (card, player, target) => {
                            return target != player && target.countCards('he');
                        }).set('prompt', '怀异：获得至多' + get.cnNumber(cards.length) + '名其他角色的各一张牌').set('ai', target => {
                            const player = get.event('player');
                            return get.effect(target, { name: 'shunshou_copy2' }, player, player);
                        });
                        if (bool) {
                            for (const target of targets.slice().sortBySeat()) {
                                await player.gainPlayerCard(target, 'he', true);
                            }
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        if (!player.countDiscardableCards(player, 'h')) return 0;
                        const num = game.filterPlayer(target => get.effect(target, { name: 'shunshou_copy2' }, player, player) > 0);
                        if (!num) return 0;
                        let color = ['red', 'black', 'none'].filter(color => player.hasCard(card => {
                            return lib.filter.cardDiscardable(card, player) && get.color(card) == color;
                        }, 'h')).sort((a, b) => {
                            return Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == b;
                            })) - Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == a;
                            }));
                        })[0];
                        const cards = player.getCards('h', card => lib.filter.cardDiscardable(card, player) && get.color(card) == color);
                        return cards.length + (cards.length ? 0.1 : 0);
                    },
                    result: { player: 1 },
                },
            },
            //极鲁肃
            wechatlvyuan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.hasCard(card => _status.connectMode || lib.filter.cardDiscardable(card, player), 'he');
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseToDiscard('he', [1, Infinity]).set('ai', card => {
                        const player = get.player();
                        if (!ui.selected.cards.length) return 5 - get.value(card);
                        const list = ui.selected.cards.map(i => get.color(i, player));
                        if (list.includes(get.color(card, player))) return 7 - get.value(card);
                        return -get.value(card);
                    }).set('prompt', get.prompt2('wechatlvyuan')).set('logSkill', 'wechatlvyuan').forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const cards = event.cards, colors = cards.map(card => get.color(card, player)).toUniqued();
                    await player.draw(cards.length);
                    if (colors.length != 1 || cards.length <= 1) return;
                    player.addTempSkill('wechatlvyuan_effect', { player: 'phaseBegin' });
                    player.markAuto('wechatlvyuan_effect', [colors[0]]);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: {
                            markcount: () => 0,
                            content(storage) {
                                if (storage.length == 1) return '失去一张非' + get.translation(storage) + '牌时，摸一张牌';
                                return '失去一张牌时，摸一张牌';
                            },
                        },
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            const evt = event.getl(player), storage = player.getStorage('wechatlvyuan_effect');
                            return evt?.player == player && evt.cards2?.some(card => storage.length != 1 || get.color(card, player) != storage[0]);
                        },
                        forced: true,
                        content() {
                            const evt = trigger.getl(player), storage = player.getStorage('wechatlvyuan_effect');
                            player.draw(evt.cards2.filter(card => storage.length != 1 || get.color(card, player) != storage[0]).length);
                        },
                    }
                }
            },
            wechathezong: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return game.countPlayer() > 1;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2('wechathezong'), 2).set('ai', target => {
                        const player = get.event('player'), att = get.attitude(player, target);
                        return get.sgn(att) * (target.countCards('h') + 1);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (let i = 0; i < targets.length; i++) {
                        const target = targets[i], friend = targets[1 - i];
                        const skill = 'wechathezong_mark_' + friend.playerid;
                        if (!lib.skill[skill]) {
                            game.broadcastAll(skill => {
                                lib.skill[skill] = { charlotte: true };
                                lib.translate[skill] = '合纵';
                            }, skill);
                        }
                        target.addSkill(skill);
                        target.markSkillCharacter(skill, friend, '合纵', '已与' + get.translation(friend) + '组成合纵关系');
                        targets[0].addTempSkill('wechathezong_effect', 'roundStart');
                        targets[0].markAuto('wechathezong_effect', [targets[1]]);
                    }
                },
                subSkill: {
                    mark: { charlotte: true, intro: { onunmark: true } },
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            const targets = [player].concat(player.getStorage(skill));
                            delete player.storage[skill];
                            for (const i of targets) {
                                const skills = i.skills.filter(hezong => hezong.startsWith('wechathezong_mark_'));
                                if (skills.length) i.removeSkill(skills);
                            }
                        },
                        audio: 'wechathezong',
                        trigger: { global: ['useCardAfter', 'useCardToTarget', 'die'] },
                        filter(event, player, name) {
                            const list = [player].concat(player.getStorage('wechathezong_effect'));
                            if (event.name === 'die') return list.includes(event.player);
                            if (event.card.name != 'sha' || !event.targets || event.targets.length != 1) return false;
                            if (name == 'useCardAfter') return event.getParent(2).name != 'wechathezong_effect' && list.includes(event.player) && !list.includes(event.targets[0]) && event.targets.length == 1 && event.targets[0].isIn();
                            return list.includes(event.target) && !list.includes(event.player);
                        },
                        getTarget(event, player, name) {
                            const list = [player].concat(player.getStorage('wechathezong_effect'));
                            return (name == 'useCardAfter' ? event.player : event.target) == player ? list.filter(i => i != player) : [player];
                        },
                        forced: true,
                        popup: false,
                        forceDie: true,
                        async content(event, trigger, player) {
                            if (trigger.name === 'die') {
                                lib.skill[event.name].onremove(player, event.name);
                                return;
                            }
                            const name = event.triggername, aim = (name == 'useCardAfter' ? trigger.targets[0] : trigger.target);
                            const targets = get.info('wechathezong').subSkill.effect.getTarget(trigger, player, name).sortBySeat();
                            trigger[name == 'useCardAfter' ? 'player' : 'target'].logSkill('wechathezong_effect', targets);
                            for (const target of targets) {
                                if (name == 'useCardAfter') {
                                    let { result: { bool } } = await target.chooseToUse(function (card, player, event) {
                                        if (get.name(card) != 'sha') return false;
                                        return lib.filter.filterCard.apply(this, arguments);
                                    }, '合纵：对' + get.translation(aim) + '使用一张【杀】，或交给' + get.translation(trigger.player) + '一张牌').set('filterTarget', function (card, player, target) {
                                        if (target != get.event('sourcex') && !ui.selected.targets.includes(get.event('sourcex'))) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    }).set('sourcex', aim).set('targetRequired', true).set('complexSelect', true);
                                    if (!bool && target.countCards('he')) await target.chooseToGive('he', true, trigger.player);
                                }
                                else {
                                    let { result: { bool, cards } } = await target.chooseCard('合纵：交给' + get.translation(aim) + '一张【闪】，或成为' + get.translation(trigger.card) + '的额外目标', (card, player) => {
                                        return get.name(card) == 'shan';
                                    }).set('ai', card => {
                                        const player = get.event('player'), aim = get.event('aim'), trigger = get.event().getTrigger();
                                        if (get.attitude(player, aim) <= 0 || get.effect(aim, trigger.card, trigger.player, player) > 0) return -1;
                                        return 1 + Math.random();
                                    }).set('aim', aim);
                                    if (bool) await target.give(cards, aim);
                                    else {
                                        trigger.getParent().targets.add(target);
                                        trigger.getParent().triggeredTargets2.push(target);
                                        game.log(target, '成为了', trigger.card, '的额外目标');
                                    }
                                }
                            }
                        },
                    },
                },
            },
            //极袁绍
            wechathongtu: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(target => player.canCompare(target));
                },
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                selectTarget: -1,
                usable: 1,
                multitarget: true,
                multiline: true,
                async content(event, trigger, player) {
                    const { result: { winner } } = await player.chooseToCompare(event.targets, card => get.number(card)).setContent('chooseToCompareMeanwhile');
                    if (winner) {
                        const card = new lib.element.VCard({ name: 'wanjian' });
                        if (winner.hasUseTarget(card)) {
                            player.when({ global: 'useCardAfter' })
                                .filter(evt => evt.card.name == 'wanjian' && evt.getParent(2) == event)
                                .then(() => {
                                    const num = game.countPlayer2(target => target.getHistory('damage', evt => evt.card && evt.card == trigger.card).length);
                                    if (num) player.draw(num);
                                });
                            await winner.chooseUseTarget(true, card, false);
                        }
                    }
                    else delete player.getStat('skill').wechathongtu;
                },
                ai: {
                    order: 9,
                    result: { player: 1 },
                },
            },
            wechatmengshou: {
                getNum(player) {
                    return player.getRoundHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0);
                },
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    const getNum = get.info('wechatmengshou').getNum;
                    return event.source && event.source != player && getNum(player) >= getNum(event.source);
                },
                check(event, player) {
                    return get.damageEffect(player, event.source, player) <= 0;
                },
                logTarget: 'source',
                content() {
                    player.tempBanSkill('wechatmengshou', 'roundStart', false);
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (!player || !target || player == target) return;
                            const getNum = get.info('wechatmengshou').getNum;
                            if (player.isTempBanned('wechatmengshou') || player.hasSkillTag('jueqing') || getNum(target) < getNum(player)) return;
                            if (player._wechatmengshou_temp) return;
                            if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
                            if (get.tag(card, 'damage')) {
                                if (target.getHistory('damage').length > 0) return [1, -2];
                                else {
                                    if (get.attitude(player, target) > 0 && target.hp > 1) return 0;
                                    if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
                                        if (card.name == 'sha') return;
                                        var sha = false;
                                        player._wechatmengshou_temp = true;
                                        var num = player.countCards('h', function (card) {
                                            if (card.name == 'sha') {
                                                if (sha) return false;
                                                else sha = true;
                                            }
                                            return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                        });
                                        delete player._wechatmengshou_temp;
                                        if (player.hasSkillTag('damage')) num++;
                                        if (num < 2) {
                                            var enemies = player.getEnemies();
                                            if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) return;
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            //极许褚
            wechathuhou: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'juedouBegin', target: 'juedouBegin' },
                logTarget(event, player) {
                    return event.target == player ? event.player : event.target;
                },
                forced: true,
                locked: false,
                content() {
                    const target = get.info('wechathuhou').logTarget(trigger, player);
                    target.addTempSkill('wechathuhou_debuff');
                    target.markAuto('wechathuhou_debuff', [trigger]);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || !arg.target || arg.card.name != 'juedou' || game.hasPlayer(target => {
                            return get.attitude(target, arg.target) > 0 && target.countCards('hs', { name: 'wuxie' });
                        })) return false;
                    },
                    effect: {
                        target(card, player, target) {
                            if (player._wechathuhou_temp || card.name != 'juedou') return;
                            player._wechathuhou_temp = true;
                            const bool = (get.attitude(player, target) > 0 && get.effect(target, card, player, player) > 0);
                            delete player._wechathuhou_temp;
                            if (bool) return 0;
                        },
                    },
                },
                group: ['wechathuhou_wusheng', 'wechathuhou_damage'],
                subSkill: {
                    debuff: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            cardRespondable(card, player) {
                                const evt = _status.event, storage = player.getStorage('wechathuhou_debuff');
                                if (evt.name == 'chooseToRespond' && storage.includes(evt.getParent())) return false;
                            },
                        },
                    },
                    wusheng: {
                        audio: 'wechathuhou',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filterCard(card, player) {
                            return get.type(card) == 'equip';
                        },
                        position: 'hes',
                        viewAs: { name: 'sha' },
                        viewAsFilter(player) {
                            if (!player.countCards('hes', { type: 'equip' })) return false;
                        },
                        check(card) {
                            if (ui.selected.cards.length) return 0;
                            const val = get.value(card);
                            if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                            return 7.5 - val;
                        },
                        complexCard: true,
                        selectCard: [1, Infinity],
                        prompt: '将任意张装备牌当作【杀】使用或打出',
                        ai: {
                            respondSha: true,
                            skillTagFilter(player) {
                                if (!player.countCards('hes', { type: 'equip' })) return false;
                            },
                        },
                    },
                    damage: {
                        audio: 'wechathuhou',
                        trigger: { source: 'damageBegin1' },
                        filter(event, player) {
                            const evt = event.getParent(), evtx = event.getParent(2);
                            if (evtx.name != 'useCard' || !['sha', 'juedou'].includes(evtx.card.name)) return false;
                            if (evtx.skill == 'wechathuhou_wusheng' && (evtx.cards || []).some(i => get.type(i, false) == 'equip')) return true;
                            if (evt?.name == 'juedou' && player.getHistory('respond', evtxx => {
                                return evtxx.getParent(2) == evt && evtxx.skill == 'wechathuhou_wusheng' && (evtxx.cards || []).length;
                            }).reduce((list, evtxx) => {
                                list.addArray(evtxx.cards || []); return list;
                            }, []).some(i => get.type(i, false) == 'equip')) return true;
                            return false;
                        },
                        forced: true,
                        locked: false,
                        logTarget: 'player',
                        content() {
                            const evt = trigger.getParent(), evtx = trigger.getParent(2);
                            if (evtx.skill == 'wechathuhou_wusheng' && (evtx.cards || []).length) trigger.num += evtx.cards.filter(i => get.type(i, false) == 'equip').length;
                            if (evt?.name == 'juedou') trigger.num += player.getHistory('respond', evtxx => {
                                return evtxx.getParent(2) == evt && evtxx.skill == 'wechathuhou_wusheng' && (evtxx.cards || []).length;
                            }).reduce((list, evtxx) => {
                                list.addArray(evtxx.cards || []); return list;
                            }, []).filter(i => get.type(i, false) == 'equip').length;
                        },
                    },
                },
            },
            wechatwuwei: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                async content(event, trigger, player) {
                    const { result: { bool, targets } } = await player.chooseTarget(get.prompt2('wechatwuwei')).set('ai', target => {
                        const player = get.event('player');
                        return get.effect(target, { name: 'tao' }, player, player) + 0.1;
                    });
                    if (bool) {
                        const target = targets[0];
                        player.logSkill('wechatwuwei', target);
                        player.addTempSkill('wechatwuwei_effect', { player: 'phaseBegin' });
                        player.markAuto('wechatwuwei_effect', [target]);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '保卫$中...' },
                        trigger: { global: 'useCardToTargeted' },
                        filter(event, player) {
                            if (event.card.storage && event.card.storage.wechatwuwei_effect && event.card.storage.wechatwuwei_effect.includes(player)) return false;
                            return get.tag(event.card, 'damage') && event.target.getHp() <= player.getHp() && player.getStorage('wechatwuwei_effect').includes(event.target);
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            trigger.getParent().excluded.add(trigger.target);
                            game.log(trigger.card, '对', trigger.target, '无效');
                            trigger.player.when('useCardAfter').filter(evt => evt == trigger.getParent()).then(() => {
                                const card = new lib.element.VCard({ name: 'juedou', storage: { wechatwuwei_effect: [target] } });
                                if (player.canUse(card, target, false)) player.useCard(card, target, false);
                            }).vars({ target: player });
                        },
                    },
                },
            },
            //极孙笨
            wechattaoni: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'phaseUseBegin',
                },
                filter(event, player) {
                    return player.getHp() > 0;
                },
                async cost(event, trigger, player) {
                    const choices = Array.from({ length: player.getHp() }).map((_, i) => get.cnNumber(i + 1, true));
                    const { result } = await player.chooseControl(choices, 'cancel2').set('prompt', '讨逆：选择失去任意点体力').set('ai', () => {
                        const player = get.player();
                        if (player.getHp() < 2 || !game.hasPlayer(current => current != player && !current.hasMark('wechattaoni') && get.attitude(player, current) < 0)) return 'cancel2';
                        const num = Math.min(player.getHp() - 1, game.countPlayer(current => current != player && !current.hasMark('wechattaoni') && get.attitude(player, current) < 0));
                        return Math.min(choices.length - 1, num - 1);
                    });
                    event.result = {
                        bool: result.control != 'cancel2',
                        cost_data: result.index + 1,
                    }
                },
                async content(event, trigger, player) {
                    const num = event.cost_data;
                    await player.loseHp(num);
                    await player.draw(num);
                    player.addTempSkill(event.name + '_hand');
                    if (!game.hasPlayer(current => current != player)) return;
                    const targets = await player.chooseTarget(`令至多${get.cnNumber(num)}名其他角色获得1枚“讨逆”标记`, lib.filter.notMe, [1, num]).set('ai', target => {
                        const player = get.player(), att = get.attitude(player, target);
                        if (att >= 0) return 0;
                        if (att < 0 && target.hasMark('wechattaoni')) return 0;
                        return -att;
                    }).forResultTargets();
                    if (!targets || !targets.length) return;
                    for (const target of targets) target.addMark(event.name, 1, false);
                },
                marktext: '逆',
                intro: {
                    name: '讨逆',
                    content: 'mark',
                    onunmark: true,
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        mod: {
                            maxHandcardBase(player, num) {
                                return player.maxHp;
                            },
                        },
                    }
                }
            },
            wechatpingjiang: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(current => get.info('wechatpingjiang').filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target.hasMark('wechattaoni') && player.canUse({ name: 'juedou' }, target, false);
                },
                async content(event, trigger, player) {
                    const juedou = get.autoViewAs({ name: 'juedou', isCard: true, storage: { wechatpingjiang: true } });
                    const { target } = event;
                    target.clearMark('wechattaoni');
                    await player.useCard(juedou, target, false);
                },
                ai: {
                    order: 4,
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'juedou' }, player, player);
                        }
                    },
                    combo: 'wechattaoni',
                },
                group: 'wechatpingjiang_buff',
                subSkill: {
                    buff: {
                        trigger: {
                            player: 'juedouAfter',
                        },
                        filter(event, player) {
                            return event.card.storage?.wechatpingjiang;
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            if (trigger.turn == player) player.tempBanSkill('wechatpingjiang');
                            else player.addTempSkill('wechatpingjiang_wushuang');
                        },
                    },
                    wushuang: {
                        trigger: {
                            player: 'useCardToPlayered',
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return event.card?.name == 'juedou';
                        },
                        charlotte: true,
                        forced: true,
                        logTarget(event, player) {
                            return event.name == 'useCardToPlayered' ? event.target : event.player;
                        },
                        async content(event, trigger, player) {
                            if (trigger.name == 'useCardToPlayered') {
                                const id = trigger.target.playerid;
                                const idt = trigger.target.playerid;
                                const map = trigger.getParent().customArgs;
                                if (!map[idt]) map[idt] = {};
                                if (!map[idt].shaReq) map[idt].shaReq = {};
                                if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                map[idt].shaReq[id]++;
                            }
                            else trigger.num++;
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg.card.name != 'juedou' || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                            },
                        },
                    }
                }
            },
            wechatdingye: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.isDamaged() && game.hasPlayer2(current => current.hasHistory('damage'));
                },
                forced: true,
                async content(event, trigger, player) {
                    player.recover(game.countPlayer2(current => current.hasHistory('damage')));
                }
            },
            //极荀彧
            wechatshangjie: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    const evt = get.event().getParent('_save');
                    return evt?.dying?.dying.isIn();
                },
                round: 1,
                async content(event, trigger, player) {
                    const target = event.getParent('_save').dying;
                    await target.recoverTo(1);
                    const num = player.getHp() - target.getHp();
                    if (num > 0) {
                        await player.loseMaxHp(num);
                        const cards = [];
                        while (cards.length < num) {
                            const card = get.cardPile2(card => !cards.includes(card) && get.type2(card) == 'trick');
                            if (card) cards.push(card);
                            else break;
                        }
                        if (cards.length) await player.gain(cards, 'draw');
                    }
                },
                ai: {
                    order: 1,
                    save: true,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying) * (player.getHp() - 1);
                        },
                    },
                },
            },
            wechattunlang: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    global: 'roundStart',
                },
                filter(event, player) {
                    return game.countPlayer() > 1;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), 2).set('ai', target => {
                        const player = get.event('player'), att = get.attitude(player, target);
                        return -att * (target.countCards('h') + 1);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (let i = 0; i < targets.length; i++) {
                        const target = targets[i], friend = targets[1 - i];
                        const skill = 'wechattunlang_mark_' + friend.playerid;
                        if (!lib.skill[skill]) {
                            game.broadcastAll(skill => {
                                lib.skill[skill] = { charlotte: true };
                                lib.translate[skill] = '吞狼';
                            }, skill);
                        }
                        target.addSkill(skill);
                        target.markSkillCharacter(skill, friend, '吞狼', '与' + get.translation(friend) + '虎狼相斗');
                        targets[0].addTempSkill('wechattunlang_effect', 'roundStart');
                        targets[0].markAuto('wechattunlang_effect', [targets[1]]);
                    }
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        intro: {
                            onunmark: true,
                        },
                    },
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            const targets = [player].concat(player.getStorage(skill));
                            delete player.storage[skill];
                            for (const i of targets) {
                                const skills = i.skills.filter(tunlang => tunlang.startsWith('wechattunlang_mark_'));
                                if (skills.length) i.removeSkill(skills);
                            }
                        },
                        trigger: {
                            global: ['useCardToPlayer', 'useCardToTarget'],
                        },
                        filter(event, player, name) {
                            if (event.card.name != 'sha' || !event.targets || event.targets.length != 1) return false;
                            const list = [player].concat(player.getStorage('wechattunlang_effect'));
                            if (name == 'useCardToPlayer') return list.includes(event.player) && !list.includes(event.targets[0]) && event.targets.length == 1 && event.targets[0].isIn();
                            return list.includes(event.target) && !list.includes(event.player);
                        },
                        getTarget(event, player, name) {
                            const list = [player].concat(player.getStorage('wechattunlang_effect'));
                            return (name == 'useCardToPlayer' ? event.player : event.target) == player ? list.filter(i => i != player) : [player];
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const name = event.triggername;
                            const targets = get.info(event.name).getTarget(trigger, player, name).sortBySeat();
                            trigger[name == 'useCardToPlayer' ? 'player' : 'target'].logSkill(event.name, targets);
                            for (const target of targets) {
                                if (name == 'useCardToPlayer') {
                                    trigger.getParent().targets.add(target);
                                    trigger.getParent().triggeredTargets1.push(target);
                                    game.log(target, '成为了', trigger.card, '的额外目标');
                                }
                                else {
                                    if (target.isIn() && target.countCards('h')) await target.chooseToDiscard(true, '吞狼：请弃置一张手牌')
                                }
                            }
                        },
                    }
                }
            },
            wechatwangzuo: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: ['phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore'] },
                filter(event, player) {
                    return game.hasPlayer(target => target != player);
                },
                usable: 1,
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt('wechatwangzuo'), '跳过' + { 'phaseDraw': '摸牌', 'phaseUse': '出牌', 'phaseDiscard': '弃牌' }[trigger.name] + '阶段，令一名其他角色执行之', lib.filter.notMe).set('ai', target => {
                        const player = get.event().player, name = get.event().getTrigger().name, num = target.countCards('h');
                        if (name == 'phaseDraw' || name == 'phaseUse') return get.attitude(player, target) * (name == 'phaseUse' ? (num + 1) : (1 / (num + 1)));
                        if (target.needsToDiscard()) return -target.needsToDiscard();
                        if (target.getSkills(null, null, false).some(i => {
                            const info = lib.translate[i + 'info'];
                            return info && get.plainText(info).indexOf('弃牌阶段') != -1;
                        })) return get.attitude(player, target);
                        return 0;
                    }).forResult();
                },
                async content(event, trigger, player) {
                    /*
                    trigger.cancel(null, null, 'notrigger');
                    const next =await event.targets[0][trigger.name]();
                    event.next.remove(next);
                    trigger.getParent().next.unshift(next);
                    */
                    await trigger.cancel();
                    await event.targets[0][trigger.name]();
                },
            },
            wechatjuxian: {
                audio: 'ext:活动武将/audio/skill:2',
                getNum: (player) => 3 - game.getGlobalHistory('everything', evt => evt.player == player && evt.name == 'gain' && evt.getParent().name == 'wechatjuxian').reduce((numx, evt) => numx + evt.cards.length, 0),
                trigger: { global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'] },
                filter(event, player) {
                    if (get.info('wechatjuxian').getNum(player) <= 0) return false;
                    return get.info('wechatjuxian').filterx(event, player);
                },
                filterx(event, player) {
                    if (player !== _status.currentPhase) return false;
                    if (event.name.indexOf('lose') == 0) {
                        if (event.type != 'discard') return false;
                        let players = game.players.slice().concat(game.dead);
                        players.remove(player);
                        return players.reduce((list, target) => {
                            const evt = event.getl(target);
                            if (evt?.cards2?.length) list.addArray(evt.cards2);
                            return list;
                        }, []).someInD('d');
                    }
                    if (!event.cards.someInD('d')) return false;
                    const evt = event.getParent();
                    if (evt.name != 'orderingDiscard') return false;
                    const evtx = (evt.relatedEvent || evt.getParent());
                    if (evtx.player == player) return false;
                    const history = evtx.player.getHistory('useCard').concat(evtx.player.getHistory('respond'));
                    return history.some(evtxx => evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent()));
                },
                forced: true,
                locked: false,
                async content(event, trigger, player) {
                    let cards;
                    if (trigger.name == 'cardsDiscard') cards = trigger.cards.filterInD('d');
                    else {
                        let players = game.players.slice().concat(game.dead);
                        players.remove(player);
                        cards = players.reduce((list, target) => {
                            const evt = trigger.getl(target);
                            if (evt?.cards2?.length) list.addArray(evt.cards2);
                            return list;
                        }, []).filterInD('d');
                    }
                    const num = get.info(event.name).getNum(player);
                    const links = cards.length <= num ? cards : await player.chooseButton([`举贤：获得其中${get.cnNumber(num)}张牌`, cards], num, true).forResultLinks();
                    if (links?.length) await player.gain(links, 'gain2');
                },
            },
            wechatxianshi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'phaseDrawBegin' },
                filter(event, player) {
                    return event.player != player && player.countCards('h');
                },
                logTarget: 'player',
                frequent: true,
                round: 1,
                async content(event, trigger, player) {
                    const cards = get.cards(3);
                    const next = player.chooseToMove('先识：替换其中任意张牌', true);
                    next.set('list', [['牌堆顶', cards], ['你的手牌', player.getCards('h')]]);
                    next.set('filterMove', (from, to) => typeof to != 'number');
                    next.set('filterOk', moved => moved[1].some(i => !get.event().player.getCards('h').includes(i)));
                    next.set('processAI', list => {
                        const player = get.event().player;
                        let allcards = list[0][1].slice(0), cards = [];
                        if (list.length > 1) allcards = allcards.concat(list[1][1]);
                        let canchoose = allcards.slice();
                        const getv = button => {
                            if (button.name == 'sha' && allcards.filter(card => {
                                return card.name == 'sha' && !cards.filter(() => button == card).length;
                            }).length > player.getCardUsable({ name: 'sha' })) return 10;
                            return -player.getUseValue(button, player);
                        };
                        while (cards.length < 3) {
                            canchoose.sort((a, b) => getv(b) - getv(a));
                            cards.push(canchoose.shift());
                        }
                        return [cards, canchoose];
                    });
                    const result = await next.forResult();
                    if (result.bool) {
                        event.forceDie = true;
                        const moved = result.moved[0];
                        const hs = player.getCards('h');
                        let lose = [], gain = cards.slice();
                        for (const i of moved) {
                            if (hs.includes(i)) lose.push(i);
                            else gain.remove(i);
                        }
                        if (lose.length) await player.lose(lose.slice().reverse(), ui.cardPile, 'insert');
                        if (gain.length) await player.gain(gain, 'draw');
                        for (const i of moved.slice().reverse()) {
                            if (!(('hejsdx').includes(get.position(i, true)))) {
                                i.fix();
                                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                            }
                        }
                        game.updateRoundNumber();
                    }
                },
            },
            wechatrejuxian: {
                audio: 'wechatjuxian',
                inherit: 'wechatjuxian',
                usable: 3,
                filter(event, player) {
                    return get.info('wechatjuxian').filterx(event, player);
                },
                async content(event, trigger, player) {
                    let cards;
                    if (trigger.name == 'cardsDiscard') cards = trigger.cards.filterInD('d');
                    else {
                        let players = game.players.slice().concat(game.dead);
                        players.remove(player);
                        cards = players.reduce((list, target) => {
                            const evt = trigger.getl(target);
                            if (evt?.cards2?.length) list.addArray(evt.cards2);
                            return list;
                        }, []).filterInD('d');
                    }
                    if (cards?.length) await player.gain(cards, 'gain2');
                },
            },
            //极甄宓
            wechatshenfu: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.hasMark('wechatshenfu');
                },
                check(event, player) {
                    return player.countMark('wechatshenfu') > 2;
                },
                prompt2: () => '弃置所有“洛神”标记并亮出牌堆顶等量的牌，然后可以依次使用其中的黑色牌或获得其中的红色牌',
                async content(event, trigger, player) {
                    const num = player.countMark(event.name);
                    player.clearMark(event.name);
                    const cards = get.cards(num);
                    await player.showCards(cards, get.translation(player) + '发动了【神赋】');
                    const black = cards.filter(card => get.color(card) == 'black' && player.hasUseTarget(card));
                    const red = cards.filter(card => get.color(card) == 'red');
                    if (!(black.length + red.length)) return;
                    let result;
                    if (!black.length) result = { index: 1 };
                    else if (!red.length) result = { index: 0 };
                    else {
                        result = await player.chooseControl().set('choiceList', [
                            '可以依次使用' + get.translation(black),
                            '获得' + get.translation(red),
                        ]).set('ai', () => {
                            const { player, cardList: [black, red] } = get.event();
                            return (() => {
                                let sum = 0;
                                for (const card of black) {
                                    if (player.hasValueTarget(card)) sum += player.getUseValue(card);
                                    else break;
                                }
                                return sum;
                            })() > red.reduce((sum, card) => sum + get.value(card), 0) ? 0 : 1
                        }).set('cardList', [black, red]).forResult();
                    }
                    if (result.index === 0) {
                        while (black.length) {
                            const card = black.shift();
                            if (!player.hasUseTarget(card)) continue;
                            const bool = await player.chooseUseTarget(card, false).forResultBool();
                            if (!bool) break;
                        }
                    }
                    else player.gain(red, 'gain2');
                },
                group: 'wechatshenfu_mark',
                subSkill: {
                    mark: {
                        trigger: {
                            global: 'damageEnd',
                        },
                        filter(event, player) {
                            return player.countMark('wechatshenfu') < 6;
                        },
                        firstDo: true,
                        forced: true,
                        async content(event, trigger, player) {
                            player.addMark('wechatshenfu', Math.min(trigger.num, 6 - player.countMark('wechatshenfu')));
                        }
                    },
                },
                marktext: '赋',
                intro: {
                    name: '洛神',
                    content: 'mark',
                    onunmark: true,
                },
            },
            wechatsiyuan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.source?.isIn() && game.hasPlayer(current => current != player && current != event.source);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
                        return target != player && target != get.event().getTrigger().source;
                    }).set('ai', target => {
                        const player = get.player(), source = get.event().getTrigger().source;
                        const list = lib.skill.mbhuiyao.getUnrealDamageTargets(player, [[source], game.filterPlayer(i => ![player, source].includes(i))]);
                        return (target == list[0] ? 10 : 0) + get.effect(player, { name: 'draw' }, player, player) + get.effect(target, { name: 'draw' }, player, player);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const [target] = event.targets;
                    await target.damage(trigger.source, 'unreal');
                    await game.asyncDraw([player, target].sortBySeat());
                },
            },
            // 极蔡文姬
            wechatbeijia: {
                mark: true,
                marktext: '🎶',
                intro: {
                    content(storage, player) {
                        const str = '每回合限一次，你可以将一张点数' + (storage ? '小' : '大') + '于你上一张使用的牌当任意' + (storage ? '基本' : '锦囊') + '牌使用。';
                        return '<li>当前韵律：' + (storage ? '仄' : '平') + '<br><li>' + str;
                    },
                },
                audio: 'ext:活动武将/audio/skill:2',
                yunlvSkill: true,
                categories: () => ['韵律技'],
                hiddenCard(player, name) {
                    if (player.hasSkill('wechatbeijia_used', null, null, false)) return false;
                    const evt = lib.skill.dcjianying.getLastUsed(player);
                    if (!evt || !evt.card) return false;
                    const num = get.number(evt.card, false)
                    if (typeof get.number(evt.card, false) != 'number') return false;
                    const storage = player.storage.wechatbeijia;
                    const type = storage ? 'basic' : 'trick';
                    return get.type(name) == type && player.countCards('hes', card => {
                        return storage ? get.number(card) < num : get.number(card) > num;
                    });
                },
                enable: 'chooseToUse',
                filter(event, player) {
                    if (player.hasSkill('wechatbeijia_used', null, null, false)) return false;
                    const storage = player.storage.wechatbeijia;
                    const num = event.wechatbeijia_number;
                    const type = storage ? 'basic' : 'trick';
                    if (!num || !player.countCards('hes', card => {
                        return storage ? get.number(card) < num : get.number(card) > num;
                    })) return false;
                    return get.inpileVCardList(info => {
                        if (info[0] != type) return false;
                        return event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, 'unsure'), player, event)
                    }).length;
                },
                onChooseToUse(event) {
                    if (!game.online) {
                        const last = event.player.getAllHistory('useCard')?.lastItem;
                        if (last) {
                            const number = get.number(last.card, false);
                            if (typeof number == 'number') event.set('wechatbeijia_number', number);
                        }
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        const type = player.storage.wechatbeijia ? 'basic' : 'trick';
                        const list = get.inpileVCardList(info => {
                            if (info[0] != type) return false;
                            return event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, 'unsure'), player, event)
                        });
                        return ui.create.dialog('悲笳', [list, 'vcard']);
                    },
                    check(button) {
                        if (get.event().getParent().type != 'phase') return 1;
                        return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup(links, player) {
                        return {
                            audio: 'wechatbeijia',
                            popname: true,
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            filterCard(card, player) {
                                const storage = player.storage.wechatbeijia;
                                const num = get.event('wechatbeijia_number');
                                return storage ? get.number(card) < num : get.number(card) > num;
                            },
                            position: 'hes',
                            ai1(card) {
                                return 6.5 - get.value(card);
                            },
                            async precontent(event, trigger, player) {
                                player.logSkill('wechatbeijia');
                                player.addTempSkill('wechatbeijia_used');
                            }
                        };
                    },
                    prompt(links, player) {
                        const storage = player.storage.wechatbeijia;
                        const num = get.event('wechatbeijia_number');
                        return '将一张点数' + (storage ? '小于' : '大于') + num + '的牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg == 'respond') return false;
                        const name = tag == 'respondSha' ? 'sha' : 'shan';
                        return get.info('wechatbeijia').hiddenCard(player, name);
                    },
                    order: 7,
                    result: {
                        player(player) {
                            return get.event().dying ? get.attitude(player, get.event().dying) : 1;
                        },
                    },
                },
                init(player) {
                    const trigger = lib.skill.dcjianying.getLastUsed(player);
                    if (trigger) {
                        player.addTip('wechatbeijia', '悲笳 ' + get.strNumber(get.number(trigger.card)));
                    }
                },
                onremove(player, skill) {
                    player.removeTip(skill);
                },
                group: 'wechatbeijia_zhuanyun',
                subSkill: {
                    zhuanyun: {
                        audio: 'wechatbeijia',
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            player.addTip('wechatbeijia', '悲笳 ' + get.strNumber(get.number(event.card)));
                            if (!player.isPhaseUsing()) return false;
                            const evt = lib.skill.dcjianying.getLastUsed(player, event);
                            if (!evt || !evt.card) return false;
                            return typeof get.number(evt.card, false) == 'number' && get.number(evt.card, false) == get.number(event.card);
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.changeZhuanhuanji('wechatbeijia');
                            if (player.hasSkill('wechatbeijia_used', null, null, false)) player.removeSkill('wechatbeijia_used');
                            game.log(player, '转换了', '#g【悲笳】', '的韵律');
                        },
                    },
                    used: { charlotte: true },
                },
            },
            wechatsifu: {
                audio: 'ext:活动武将/audio/skill:2',
                getUsed: player => player.getHistory('useCard', evt => typeof get.number(evt.card) == 'number').map(evt => get.number(evt.card)).toUniqued(),
                enable: 'phaseUse',
                filter(event, player) {
                    const { wechatsifu } = event, storage = player.getStorage('wechatsifu_used');
                    if (!Array.isArray(wechatsifu) || storage.length > 1) return false;
                    const numbers = Array.from({ length: 13 }).map((_, i) => i + 1);
                    const list = numbers.filter(i => {
                        if (storage.includes('yes') && wechatsifu.includes(i)) return false;
                        if (storage.includes('no') && !wechatsifu.includes(i)) return false;
                        return true;
                    })
                    return list.length;
                },
                onChooseToUse(event) {
                    if (!game.online && !event.wechatsifu) {
                        const player = event.player;
                        event.set('wechatsifu', get.info('wechatsifu').getUsed(player));
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        return ui.create.dialog('###思赋###选择一个点数，然后从牌堆获得此点数的一张牌');
                    },
                    chooseControl(event, player) {
                        const { wechatsifu } = event, storage = player.getStorage('wechatsifu_used');
                        const numbers = Array.from({ length: 13 }).map((_, i) => i + 1);
                        const list = numbers.filter(i => {
                            if (storage.includes('yes') && wechatsifu.includes(i)) return false;
                            if (storage.includes('no') && !wechatsifu.includes(i)) return false;
                            return true;
                        }).map(i => get.cnNumber(i, true))
                        list.push('cancel2');
                        return list;
                    },
                    backup(result, player) {
                        return {
                            control: result.control,
                            audio: 'wechatsifu',
                            filterCard: () => false,
                            selectCard: -1,
                            async content(event, trigger, player) {
                                const control = lib.skill.wechatsifu_backup.control;
                                const num = Array.from({ length: 13 }).map((_, i) => get.cnNumber(i + 1, true)).indexOf(control) + 1;
                                const { wechatsifu } = event.getParent(2);
                                player.$damagepop(get.strNumber(num), 'water');
                                game.log(player, '选择的点数是', '#y' + get.strNumber(num));
                                player.addTempSkill('wechatsifu_used', 'phaseUseAfter');
                                player.markAuto('wechatsifu_used', [wechatsifu.includes(num) ? 'yes' : 'no']);
                                const card = get.cardPile2(card => get.number(card) == num);
                                if (card) await player.gain(card, 'gain2');
                            },
                        };
                    },
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
                subSkill: {
                    backup: {},
                    used: {
                        charlotte: true,
                        onremove: true,
                    }
                }
            },
            wechatresifu: {
                audio: 'wechatsifu',
                getUsed: player => player.getHistory('useCard', evt => evt.getParent('phaseUse', true) && typeof get.number(evt.card) == 'number' && get.number(evt.card) > 0).map(evt => get.number(evt.card)).toUniqued(),
                onChooseToUse(event) {
                    if (!game.online && !event.wechatsifu) {
                        const player = event.player;
                        event.set('wechatsifu', get.info('wechatsifu').getUsed(player));
                    }
                },
                enable: 'phaseUse',
                usable: 1,
                async content(event, trigger, player) {
                    const { wechatsifu } = event.getParent(2);
                    const bool1 = !wechatsifu.length;
                    const bool2 = wechatsifu.length > 13;
                    let used = false, notUsed = false;
                    event.cards ??= [];
                    while (true) {
                        const judgeEvent = player.judge();
                        judgeEvent.judge2 = result => result.bool;
                        judgeEvent.set('callback', async event => {
                            event.getParent(2).cards.push(event.judgeResult.card);
                        });
                        const { result } = await judgeEvent;
                        if (typeof result?.number == 'number') {
                            if (bool1) {
                                break;
                            }
                            else if (bool2) {
                                break;
                            }
                            else {
                                if (wechatsifu.includes(result.number)) used = true;
                                else notUsed = true;
                                if (used && notUsed) break;
                            }
                        }
                    }
                    if (!event.cards.someInD('d')) return;
                    let num = 1;
                    if (!bool1 && !bool2 && event.cards.filterInD('d').some(card => wechatsifu.includes(get.number(card))) && event.cards.filterInD('d').some(card => !wechatsifu.includes(get.number(card)))) num = 2;
                    const { result } = await player.chooseButton([`思赋：获得其中满足条件的${get.cnNumber(num)}张牌`, event.cards.filterInD('d')], true, num).set('filterButton', button => {
                        const { link } = button;
                        const { wechatsifu } = get.event();
                        if (!ui.selected.buttons.length) return true;
                        return wechatsifu.includes(get.number(ui.selected.buttons[0].link)) != wechatsifu.includes(get.number(link));
                    }).set('wechatsifu', wechatsifu);
                    if (result?.links?.length) await player.gain(result.links);
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
            },
            //157的阮惠
            wechatmingcha: {
                audio: 'mingcha',
                trigger: { player: 'phaseDrawBegin1' },
                filter: (event) => !event.numFixed,
                forced: true,
                locked: false,
                content() {
                    'step 0'
                    var cards = game.cardsGotoOrdering(get.cards(2)).cards, cards2 = cards.slice(0);
                    event.cards = cards.filter(function (i) {
                        return get.number(i) <= 8;
                    });
                    player.showCards(cards, get.translation(player) + '发动了【明察】');
                    'step 1'
                    player.chooseBool('是否放弃摸牌' + (cards.length ? '并获得' + get.translation(cards) : '') + '？').set('goon', function () {
                        let num = trigger.num;
                        if (game.hasPlayer(cur => cur.countGainableCards(player, 'he') && get.attitude(_status.event.player, cur) < 0)) num -= 2;
                        return num >= 0;
                    }()).set('ai', () => _status.event.goon);
                    'step 2'
                    if (result.bool) {
                        trigger.changeToZero();
                        player.gain(cards, 'gain2');
                    }
                    else event.finish();
                    'step 3'
                    player.chooseTarget('是否随机获得其他角色的一张牌？', function (card, player, target) {
                        return target != player && target.countCards('he') > 0;
                    }).set('ai', function (target) {
                        if (!target.getGainableCards(player, 'he')) return 0.99;
                        return 1 - get.attitude(player, target);
                    });
                    'step 4'
                    if (result.bool) {
                        var target = result.targets[0], cards = target.getGainableCards(player, 'he');
                        player.line(target, 'green');
                        if (cards.length) player.gain(cards.randomGet(), target, 'giveAuto', 'bySelf');
                    }
                },
            },
            wechatjingzhong: {
                audio: 'jingzhong',
                mod: {
                    aiOrder(player, card, num) {
                        if (num <= 0 || !player.isPhaseUsing() || !player.hasCard(i => {
                            return lib.filter.cardDiscardable(i, player) && get.color(i, player) === 'black';
                        }, 'h')) return num;
                        let dis = player.needsToDiscard(null, false, true);
                        if (dis > 2 || dis <= 0) return num;
                        if (dis === 1) return 0;
                        if (get.color(card, player) === 'black') return num / 10;
                    }
                },
                trigger: { player: 'phaseDiscardAfter' },
                filter(event, player) {
                    return player.hasHistory('lose', function (evt) {
                        if (evt.type === 'discard' && evt.getParent('phaseDiscard') === event) {
                            for (let i of evt.cards2) {
                                if (get.color(i, player) === 'black') return true;
                            }
                        }
                    });
                },
                direct: true,
                locked: false,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('wechatjingzhong'), '获得一名其他角色下回合出牌阶段内使用的牌（每阶段限三次）', lib.filter.notMe).set('ai', target => {
                        return Math.sqrt(target.countCards('h')) * get.threaten(target);
                    });
                    'step 1'
                    if (result.bool) {
                        let target = result.targets[0];
                        player.logSkill('wechatjingzhong', target);
                        player.addSkill('wechatjingzhong_effect');
                        player.markAuto('wechatjingzhong_effect', [target]);
                        game.delayx();
                    }
                },
                subSkill: {
                    effect: {
                        mark: true,
                        intro: { content: '已指定$为目标' },
                        trigger: { global: 'useCardAfter' },
                        filter(event, player) {
                            if (!player.getStorage('wechatjingzhong_effect').includes(event.player) || !event.cards.filterInD().length) return false;
                            let evt = event.getParent('phaseUse');
                            if (!evt || evt.player != event.player) return false;
                            return player.getHistory('useSkill', function (evtx) {
                                return evtx.skill == 'wechatjingzhong_effect' && evtx.event.getParent('phaseUse') === evt;
                            }).length < 3;
                        },
                        forced: true,
                        charlotte: true,
                        logTarget: 'player',
                        content() {
                            player.gain(trigger.cards.filterInD(), 'gain2');
                        },
                        group: 'wechatjingzhong_remove',
                    },
                    remove: {
                        trigger: { global: 'phaseAfter' },
                        filter(event, player) {
                            return player.getStorage('wechatjingzhong_effect').includes(event.player);
                        },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        firstDo: true,
                        content() {
                            var storage = player.getStorage('wechatjingzhong_effect');
                            storage.remove(trigger.player);
                            if (!storage.length) player.removeSkill('wechatjingzhong_effect');
                        },
                    },
                },
            },
            //SP马超
            wechatshichou: {
                audio: 'ol_shichou',
                trigger: { player: 'useCard2' },
                filter(event, player) {
                    if (player.isHealthy() || event.card.name != 'sha') return false;
                    return game.hasPlayer(target => {
                        return target != player && !event.targets.includes(target) && lib.filter.targetEnabled2(event.card, player, target) && lib.filter.targetInRange(event.card, player, target);
                    });
                },
                async cost(event, trigger, player) {
                    var num = player.getDamagedHp();
                    event.result = await player.chooseTarget(get.prompt('wechatshichou'), '为' + get.translation(trigger.card) + '添加至多' + get.cnNumber(num) + '个目标', [1, num], (card, player, target) => {
                        var evt = _status.event.getTrigger();
                        return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                    }).set('ai', target => get.effect(target, _status.event.getTrigger().card, _status.event.player)).forResult();
                },
                content() {
                    trigger.targets.addArray(event.targets);
                },
                group: 'wechatshichou_gain',
                subSkill: {
                    gain: {
                        audio: 'ol_shichou',
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            return event.card.name == 'sha' && event.cards?.someInD() && !player.getHistory('sourceDamage', evt => evt.card && evt.card == event.card).length;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.gain(trigger.cards.filterInD(), 'gain2');
                        },
                    },
                },
            },
            //庞德公
            wechatpingcai: {
                audio: 'xinfu_pingcai',
                enable: 'phaseUse',
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog('评才：请选择一项', 'hidden');
                        const list = get.info('wechatpingcai').list;
                        dialog.add([list.map(control => [control, control[1]]), 'textbutton']);
                        return dialog;
                    },
                    filter(button, player) {
                        const name = button.link[0].slice(0, -'_card'.length);
                        return !((name == 'fengchu' && !game.hasPlayer(target => !target.isLinked())) || (name == 'shuijing' && !player.canMoveCard(null, true)));
                    },
                    check(button) {
                        const player = get.event('player'), name = button.link[0].slice(0, -'_card'.length);
                        if (name == 'xuanjian') {
                            if (game.hasPlayer(current => {
                                return current.isDamaged() && current.hp < 3 && get.attitude(player, current) > 1;
                            })) return 1 + Math.random();
                            return 1;
                        }
                        if (name == 'wolong') {
                            if (game.hasPlayer(current => {
                                return get.damageEffect(current, player, player, 'fire') > 0;
                            })) return 1.2 + Math.random();
                            return 0.5;
                        }
                        return 0.6;
                    },
                    backup: (links) => get.copy(lib.skill['wechatpingcai_' + (links[0][0].slice(0, -'_card'.length))]),
                    prompt: (links) => '###评才 - ' + get.translation(links[0][0]) + '###' + links[0][1],
                },
                get ai() {
                    return get.info('xinfu_pingcai').ai;
                },
                list: [
                    ['wolong_card', '对一名角色造成1点火属性伤害'],
                    ['fengchu_card', '横置至多四名角色'],
                    ['shuijing_card', '移动场上的一张装备牌'],
                    ['xuanjian_card', '令一名角色摸一张牌并回复1点体力，然后你摸一张牌'],
                ],
                subSkill: {
                    backup: {},
                    wolong: {
                        audio: 'pcaudio_wolong_card',
                        filterTarget: true,
                        async content(event, trigger, player) {
                            await event.target.damage(1, 'fire');
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    return get.damageEffect(target, player, player, 'fire') * (get.sgn(get.sgn(get.attitude(player, target)) - 0.5));
                                },
                            },
                        },
                    },
                    fengchu: {
                        audio: 'pcaudio_fengchu_card',
                        filterTarget(card, player, target) {
                            return !target.isLinked();
                        },
                        selectTarget: [1, 4],
                        async content(event, trigger, player) {
                            await event.target.link(true);
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    return get.effect(target, { name: 'tiesuo' }, player, player) * (get.sgn(get.sgn(get.attitude(player, target)) - 0.5));
                                },
                            },
                        },
                    },
                    shuijing: {
                        audio: 'pcaudio_shuijing_card',
                        async content(event, trigger, player) {
                            await player.moveCard().set('nojudge', true);
                        },
                    },
                    xuanjian: {
                        audio: 'pcaudio_xuanjian_card',
                        filterTarget: true,
                        async content(event, trigger, player) {
                            await event.target.draw();
                            await event.target.recover();
                            await player.draw();
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    return (get.recoverEffect(target, player, player) + get.effect(target, { name: 'draw' }, player, player)) * (get.sgn(get.sgn(get.attitude(player, target)) - 0.5));
                                },
                            },
                        },
                    },
                },
            },
            //五元妹
            wechatxuehen: {
                audio: 'xueji',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(target => player.inRange(target)) && player.hasCard(card => lib.skill.wechatxuehen.filterCard(card, player), 'he');
                },
                filterCard(card, player) {
                    return lib.filter.cardDiscardable(card, player) && get.color(card) == 'red';
                },
                position: 'he',
                check(card) {
                    return 8 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return player.inRange(target);
                },
                usable: 1,
                selectTarget: [1, 2],
                multitarget: true,
                multiline: true,
                line: 'fire',
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (const i of targets) await i.damage();
                    for (let j = 0; j < targets.length; j++) {
                        await targets[j].draw(j == targets.length - 1 ? '' : 'nodelay');
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player, player) * get.sgn(get.sgn(get.attitude(player, target)) - 0.5);
                        },
                    },
                },
            },
            wechatrexuehen: {
                audio: 'xueji',
                inherit: 'xueji',
                filter: () => true,
                filterCard: () => false,
                selecrCard: -1,
            },
            wechathuxiao: {
                inherit: 'oldhuxiao',
                content() {
                    if (player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
                    game.log(trigger.card, '不计入次数');
                    player.draw();
                },
            },
            wechatrehuxiao: {
                audio: 'huxiao',
                inherit: 'huxiao',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    await player.draw('nodelay');
                    await target.draw();
                    player.addTempSkill('huxiao3');
                    player.markAuto('huxiao3', [target]);
                },
            },
            wechatwuji: {
                inherit: 'oldwuji',
                filter(event, player) {
                    return player.getHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0) >= 3;
                },
                content() {
                    'step 0'
                    player.awakenSkill('wechatwuji');
                    'step 1'
                    player.gainMaxHp();
                    player.recover();
                    player.changeSkills(['new_rewusheng'], ['wechatxuehen']);
                },
                derivation: 'new_rewusheng',
            },
            //黄月英
            wechatlinglong: {
                mod: {
                    maxHandcard(player, num) {
                        if (!player.hasEmptySlot(3) || !player.hasEmptySlot(4)) return;
                        return num + 2;
                    },
                },
                audio: 'linglong',
                inherit: 'twsaotao',
                filter(event, player) {
                    return lib.skill.twsaotao.filter(event, player) && !player.countCards('e');
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player) {
                        return !player.countCards('e');
                    },
                },
                group: 'linglong_bagua',
            },
            //公孙瓒
            wechatqiaomeng: {
                audio: 'qiaomeng',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha' && get.color(event.card) == 'black' && event.target.countCards('he');
                },
                async cost(event, trigger, player) {
                    const target = trigger.target;
                    let result = await player.discardPlayerCard(target, 'he', get.prompt2('wechatqiaomeng')).set('logSkill', ['wechatqiaomeng', target]).forResult();
                    event.result = result;
                },
                popup: false,
                async content(event, trigger, player) {
                    const cards = event.cards.filter(card => get.type(card, false) == 'equip' && get.position(card, true) == 'd');
                    if (cards.length) await player.gain(cards, 'gain2');
                },
            },
            //肘不疑
            wechatquesong: {
                audio: 'mbquesong',
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.getHistory('damage').length;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5))).set('ai', target => {
                        const player = get.player();
                        if (get.attitude(player, target) <= 0) return 0;
                        const len = 2, hp = target.getHp();
                        return len + target.isTurnedOver() * 2 + (1.5 * Math.min(4, target.getDamagedHp())) / (hp + 1);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    let result;
                    const target = event.targets[0], goon = target.isDamaged();
                    if (goon) result = await target.chooseControl().set('choiceList', ['摸三张牌并复原武将牌', '回复1点体力']).set('prompt', '雀颂：请选择一项').set('ai', () => {
                        const player = get.player();
                        return get.effect(player, { name: 'draw' }, player, player) * 2 >= get.recoverEffect(player, player, player) ? 0 : 1;
                    }).forResult();
                    else result = { index: !goon ? 0 : 1 };
                    if (result.index == 0) {
                        await target.draw(3);
                        await target.link(false);
                        await target.turnOver(false);
                    }
                    else await target.recover();
                },
                ai: {
                    expose: 0.2,
                    maixie: true,
                    skillTagFilter(player, tag) {
                        if (player.getStat().damaged) return false;
                    },
                },
            },
            //李通
            wechattuifeng: {
                audio: 'cuifeng',
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return get.itemtype(event.cards) == 'cards' && event.cards.filterInD().length;
                },
                async cost(event, trigger, player) {
                    const cards = trigger.cards.filterInD();
                    if (cards.length == 1) {
                        const bool = await player.chooseBool(`推锋：是否将${get.translation(cards)}置于武将牌上？`).forResultBool();
                        event.result = {
                            bool: bool,
                            cost_data: cards,
                        }
                    }
                    else {
                        const { result: { bool, links } } = await player.chooseButton(['推锋：是否将其中一张牌置于武将牌上？', cards]).set('ai', button => {
                            const player = get.player();
                            return player.getUseValue(button.link);
                        });
                        event.result = {
                            bool: bool,
                            cost_data: links,
                        }
                    }
                },
                async content(event, trigger, player) {
                    const next = player.addToExpansion(event.cost_data, 'gain2');
                    next.gaintag.add(event.name);
                    await next;
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                marktext: '锋',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                group: 'wechattuifeng_buff',
                ai: {
                    threaten: 0.8,
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag("jueqing", false, target)) return [1, -1];
                            if (get.tag(card, "damage") && player != target) {
                                var cards = card.cards,
                                    evt = _status.event;
                                if (evt.player == target && card.name == "damage" && evt.getParent().type == "card") cards = evt.getParent().cards.filterInD();
                                if (target.hp <= 1) return;
                                if (get.itemtype(cards) != "cards") return;
                                for (var i of cards) {
                                    if (get.name(i, target) == "tao") return [1, 5];
                                }
                                if (get.value(cards, target) >= 7 + target.getDamagedHp()) return [1, 3];
                                return [1, 0.6];
                            }
                        },
                    },
                },
                subSkill: {
                    buff: {
                        audio: 'tuifeng',
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        filter(event, player) {
                            return player.getExpansions('wechattuifeng').length > 0;
                        },
                        prompt: '获得武将牌上的所有牌并摸等量的牌',
                        async content(event, trigger, player) {
                            const cards = player.getExpansions('wechattuifeng');
                            await player.gain(cards, 'gain2');
                            await player.draw(cards.length);
                            player.addTempSkill('tuifeng3');
                            player.addMark('tuifeng3', cards.length, false);
                        },
                    }
                }
            },
            //鲍三娘
            wechatwuniang: {
                audio: 'xinfu_wuniang',
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    return event.card.name == 'sha' && game.hasPlayer(current => current != player && current.countGainableCards(player, 'hej'));
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
                        return target != player && target.countGainableCards(player, 'hej') > 0;
                    }).set('ai', target => {
                        const player = get.player();
                        return get.effect(target, { name: 'shunshou_copy2' }, player, player);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.line(target, 'fire');
                    await player.gainPlayerCard(target, 'he', true);
                    await target.draw();
                    const list = game.filterPlayer(current => {
                        return get.rawName(current.name) == '关索' || get.rawName(current.name2) == '关索';
                    });
                    if (list.length) await game.asyncDraw(list);
                },
            },
            wechatxushen: {
                audio: 'xinfu_xushen',
                trigger: {
                    player: 'dyingAfter',
                },
                limited: true,
                skillAnimation: true,
                animationColor: 'orange',
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.recover();
                    if (!game.hasPlayer(current => {
                        return get.rawName(current.name) == '关索' || get.rawName(current.name2) == '关索';
                    })) {
                        const targets = await player.chooseTarget('许身：你可令一名其他角色选择是否用关索代替其武将并令其摸三张牌', lib.filter.notMe).set('ai', target => {
                            return get.attitude(player, target);
                        }).forResultTargets();
                        if (!targets || !targets.length) return;
                        const target = targets[0];
                        const bool = await target.chooseBool('许身：是否将自己的一张武将牌替换为“关索”？').forResultBool();
                        if (!bool) return;
                        const control = target.name2 != undefined ? await target.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌').forResultControl() : target.name1;
                        await target.reinitCharacter(control, 'wechat_guansuo');
                        await target.draw(3);
                    }
                },
            },
            //徐氏
            wechatfuzhu: {
                audio: 'fuzhu',
                inherit: 'fuzhu',
                filter(event, player) {
                    return event.player != player && event.player.hasSex('male') && ui.cardPile.childElementCount <= 10 * player.countMark('wechatfuzhu_mark');
                },
                content() {
                    "step 0";
                    event.washed = false;
                    lib.onwash.push(lib.skill.fuzhu.onWash);
                    event.total = game.players.length + game.dead.length;
                    "step 1";
                    event.total--;
                    var card = get.cardPile2(function (card) {
                        return card.name == "sha" && player.canUse(card, trigger.player, false);
                    });
                    if (card) {
                        player.useCard(card, trigger.player, false);
                    }
                    "step 2";
                    if (event.total > 0 && !event.washed && ui.cardPile.childElementCount <= player.countMark('wechatfuzhu_mark') * 10 && trigger.player.isIn()) event.goto(1);
                    "step 3";
                    player.clearMark('wechatfuzhu_mark');
                    lib.onwash.remove(lib.skill.fuzhu.onWash);
                    game.washCard();
                },
                ai: {
                    combo: 'wengua',
                },
                group: 'wechatfuzhu_mark',
                subSkill: {
                    mark: {
                        trigger: {
                            player: 'logSkillBegin',
                        },
                        filter(event, player) {
                            return event.skill == 'wengua';
                        },
                        charlotte: true,
                        forced: true,
                        silent: true,
                        popup: false,
                        async content(event, trigger, player) {
                            player.addMark(event.name, 1, false);
                        },
                        intro: {
                            content: '本局游戏已发动过#次【问卦】',
                        },
                    }
                }
            },
            //谋香香
            wechatsbliangzhu: {
                audio: 'sbliangzhu',
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('wechatsbliangzhu')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('wechatsbliangzhu')) return false;
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(current => current != player && current.countGainableCards(player, 'h'));
                },
                filterTarget(card, player, target) {
                    return target != player && target.countGainableCards(player, 'h');
                },
                locked: false,
                async content(event, trigger, player) {
                    const cards = await player.choosePlayerCard(event.targets[0], 'h', true).forResultCards();
                    if (!cards || !cards.length) return;
                    const next = player.gain(cards, 'gain2');
                    next.gaintag.add(event.name);
                    await next;
                    const evts = game.getGlobalHistory('everything', evt => evt.name == 'wechatsbjieyin' && evt.player == player && evt.getParent('phaseUse') == event.getParent(3));
                    const target = evts?.lastItem?.targets[0];
                    if (!target || !target.isIn()) return;
                    let result;
                    if (target.canMoveCard(null, true)) result = await target.chooseControl().set('choiceList', [
                        '移动场上一张装备牌',
                        '摸两张牌',
                    ]).set('ai', () => {
                        const player = get.player();
                        return game.hasPlayer(current => get.attitude(player, current) < 0 && current.getCards('e').some(card => game.hasPlayer(currentx => get.attitude(player, currentx) > 0 && currentx.canEquip(card)) && get.value(card) > get.effect(player, { name: 'draw' }, player, player))) ? 0 : 1;
                    }).forResult();
                    else result = { index: 1 };
                    if (result.index == 0) await target.moveCard(true).set('nojudge', true);
                    else await target.draw(2);
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'shunshou_copy2' }, player, player);
                        },
                    },
                },
                onremove(player) {
                    player.removeGaintag('wechatsbliangzhu');
                },
            },
            wechatsbjieyin: {
                audio: 'sbjieyin',
                trigger: {
                    player: 'phaseUseBegin',
                },
                locked: false,
                dutySkill: true,
                filter(event, player) {
                    return game.hasPlayer(current => current != player && current.hasSex('male'));
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
                        return target != player && target.hasSex('male');
                    }, true).set('ai', target => {
                        const player = get.player();
                        return get.attitude(player, target)
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const str = `是否交给${get.translation(player)}两张牌，然后回复1点体力？或者点击“取消”，令其失去〖良助〗，然后视为其对你使用一张【顺手牵羊】。`;
                    const hs = target.countCards('he') < 2;
                    const bool = hs ? false : await target.chooseToGive(player, 'he', 2, str).set('ai', card => {
                        const goon = get.event('goon');
                        if (goon) return 0;
                        return 7.5 - get.value(card);

                    }).set('goon', get.attitude(target, player) <= 0).forResultBool();
                    if (bool) await target.recover();
                    else {
                        await player.removeSkills('wechatsbliangzhu');
                        const shunshou = get.autoViewAs({ name: 'shunshou', isCard: true });
                        if (player.canUse(shunshou, target)) await player.useCard(shunshou, target);
                    }
                },
                derivation: 'wechatsbxiaoji',
                group: 'wechatsbjieyin_fail',
                subSkill: {
                    fail: {
                        audio: 'sbjieyin',
                        trigger: {
                            player: 'changeSkillsAfter',
                        },
                        filter(event, player) {
                            return event.removeSkill.includes('wechatsbliangzhu');
                        },
                        dutySkill: true,
                        forced: true,
                        locked: false,
                        async content(event, trigger, player) {
                            player.awakenSkill('wechatsbjieyin');
                            game.log(player, '使命失败');
                            await player.recover();
                            await player.loseMaxHp();
                            await player.addSkills('wechatsbxiaoji');
                        },
                    }
                }
            },
            wechatsbxiaoji: {
                audio: 'sbxiaoji',
                inherit: 'xiaoji',
                async content(event, trigger, player) {
                    await player.draw(2);
                    if (!game.hasPlayer(current => current.countDiscardableCards(player, 'ej'))) return;
                    const { result: { bool, targets } } = await player.chooseTarget('是否弃置场上的一张牌？', (card, player, target) => {
                        return target.countDiscardableCards(player, 'ej');
                    }).set('ai', target => {
                        var player = _status.event.player;
                        var att = get.attitude(player, target);
                        if (
                            att > 0 &&
                            (target.countCards('j') > 0 ||
                                target.countCards('e', function (card) {
                                    return get.value(card, target) < 0;
                                }))
                        )
                            return 2;
                        if (att < 0 && target.countCards('e') > 0 && !target.hasSkillTag('noe')) return -1;
                        return 0;
                    });
                    if (bool) {
                        await player.discardPlayerCard(targets[0], 'ej', true);
                    }
                },
            },
            //谋赵云
            wechatsblongdan: {
                audio: 'sblongdan',
                getUsed: player => player.getHistory('useCard', evt => evt.skill == 'wechatsblongdan_backup').map(evt => get.name(evt.card)).toUniqued(),
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (event.type == 'wuxie') return false;
                    const marked = player.storage.wechatsblongdan;
                    for (var name of lib.inpile) {
                        if (!marked && name != 'sha' && name != 'shan') continue;
                        if (get.type(name) != 'basic') continue;
                        if (marked && (event.wechatsblongdan || []).includes(name)) continue;
                        if (player.hasCard(lib.skill.wechatsblongdan.getFilter(name, player), 'hs')) {
                            if (event.filterCard(get.autoViewAs({ name }, 'unsure'), player, event)) return true;
                            if (marked && name == 'sha') {
                                for (var nature of lib.inpile_nature) {
                                    if (event.filterCard(get.autoViewAs({ name, nature }, 'unsure'), player, event)) return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                onChooseToUse(event) {
                    if (!game.online && !event.wechatsblongdan) {
                        const player = event.player;
                        event.set('wechatsblongdan', get.info('wechatsblongdan').getUsed(player));
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = [];
                        const marked = player.storage.wechatsblongdan;
                        for (var name of lib.inpile) {
                            if (!marked && name != 'sha' && name != 'shan') continue;
                            if (get.type(name) != 'basic') continue;
                            if (marked && (event.wechatsblongdan || []).includes(name)) continue;
                            if (player.hasCard(lib.skill.wechatsblongdan.getFilter(name, player), 'hs')) {
                                if (event.filterCard(get.autoViewAs({ name }, 'unsure'), player, event)) list.push(['基本', '', name]);
                                if (marked && name == 'sha') {
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard(get.autoViewAs({ name, nature }, 'unsure'), player, event)) list.push(['基本', '', name, nature]);
                                    }
                                }
                            }
                        }
                        return ui.create.dialog('龙胆', [list, 'vcard'], 'hidden');
                    },
                    check(button) {
                        if (_status.event.getParent().type != 'phase') return 1;
                        var player = _status.event.player,
                            card = { name: button.link[2], nature: button.link[3] };
                        if (card.name == 'jiu' && player.countCards('hs', { type: 'basic' }) < 2) return 0;
                        return player.getUseValue(card, null, true);
                    },
                    backup(links, player) {
                        return {
                            audio: 'sblongdan',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            filterCard: lib.skill.wechatsblongdan.getFilter(links[0][2], player),
                            position: "he",
                            popname: true,
                            check(card) {
                                return 6 / Math.max(1, get.value(card));
                            },
                            async precontent(event, trigger, player) {
                                const bool = player.storage.wechatsblongdan ? true : !player.hasHistory('sourceDamage');
                                if (bool) player.when(['useCard', 'respond']).filter(evt => evt.skill == 'wechatsblongdan_backup').then(() => {
                                    player.draw();
                                });
                            },
                        };
                    },
                    prompt(links, player) {
                        const marked = player.storage.wechatsblongdan;
                        const card = {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                        };
                        if (marked) return '将一张基本牌当做' + get.translation(card) + '使用';
                        return '将一张' + (card.name == 'sha' ? '闪' : '杀') + '当做' + get.translation(card) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (get.type(name) != 'basic') return false;
                    const marked = player.storage.wechatsblongdan;
                    if (!marked && name != 'sha' && name != 'shan') return false;
                    if (marked && get.info('wechatsblongdan').getUsed(player).includes(name)) return false;
                    return player.hasCard(lib.skill.wechatsblongdan.getFilter(name, player), 'hs');
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        return lib.skill.wechatsblongdan.hiddenCard(player, tag == 'respondSha' ? 'sha' : 'shan');
                    },
                    order: 9,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                getFilter(name, player) {
                    if (!player.storage.wechatsblongdan) {
                        if (name == 'sha') return { name: 'shan' };
                        if (name == 'shan') return { name: 'sha' };
                        return () => false;
                    }
                    return { type: 'basic' };
                },
            },
            wechatsbjizhu: {
                audio: 'sbjizhu',
                forced: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                unique: true,
                forced: true,
                juexingji: true,
                skillAnimation: true,
                animationColor: 'orange',
                filter(event, player) {
                    const num = player.getHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0);
                    return num > 1 || game.getAllGlobalHistory('everything', evt => evt.name == 'dying').length;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.storage.wechatsblongdan = true;
                },
                derivation: 'wechatsblongdan_rewrite',
                ai: {
                    combo: 'wechatsblongdan',
                },
            },
            //王粲
            wechatspqiai: {
                audio: 'spqiai',
                inherit: 'spqiai',
                async content(event, trigger, player) {
                    const target = event.targets[0], cards = event.cards;
                    await player.give(cards, target, true);
                    let result;
                    if (player.isHealthy()) result = { index: 1 };
                    else {
                        result = await player.chooseControl().set('choiceList', ['回复1点体力', '摸两张牌']).forResult();
                    }
                    if (result.index == 0) {
                        await player.recover();
                        const bool = await player.chooseBool('是否令' + get.translation(target) + '摸两张牌？').set('choice', get.effect(target, { name: 'draw' }, player, player) > 0).forResultBool();
                        if (bool) await target.draw(2);
                    }
                    else {
                        await player.draw(2);
                        if (target.isHealthy()) return;
                        const bool = await player.chooseBool('是否令' + get.translation(target) + '回复1点体力？').set('choice', get.recoverEffect(target, player, player) > 0 || (target.hasMark('spshanxi') && target.countCards('he'))).forResultBool();
                        if (bool) await target.recover();
                    }
                },
            },
            wechatspshanxi: {
                audio: 'spshanxi',
                global: 'wechatspshanxi_bj',
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return game.hasPlayer(current => current !== player);
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('wechatspshanxi'), '令一名其他角色获得“檄”', lib.filter.notMe).set('ai', target => {
                        const player = get.player();
                        return get.attitude(player, target) * (target.hasMark('wechatspshanxi') ? 0.75 : -0.25);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatspshanxi', target);
                        target[(target.hasMark('wechatspshanxi') ? 'clear' : 'add') + 'Mark']('wechatspshanxi', 1);
                    }
                },
                marktext: '檄',
                intro: {
                    name2: '檄',
                    content: '已被设下索命檄文',
                },
                group: 'wechatspshanxi_suoming',
                ai: { threaten: 3.3 },
                subSkill: {
                    suoming: {
                        audio: 'spshanxi',
                        trigger: { global: 'recoverAfter' },
                        filter(event, player) {
                            return event.player.hasMark('wechatspshanxi') && event.player.hp > 0;
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            'step 0'
                            if (trigger.player.countCards('he') < 2) event._result = { bool: false };
                            else trigger.player.chooseCard('he', 2, '交给' + get.translation(player) + '两张牌，或失去1点体力').set('ai', card => {
                                return 9 - get.value(card);
                            });
                            'step 1'
                            if (!result.bool) trigger.player.loseHp();
                            else trigger.player.give(result.cards, player);
                        },
                    },
                    bj: {
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    let suoming = game.findPlayer(current => current.hasSkill('wechatspshanxi'));
                                    if (suoming && _status.event && target === _status.event.dying && target.hasMark('wechatspshanxi')) {
                                        if (target.countCards('he') < 2) return 'zerotarget';
                                        return [1, get.attitude(target, suoming) > 0 ? 0 : -1.2];
                                    }
                                },
                            },
                        },
                    },
                },
            },
            //蔡夫人
            wechatxinqieting: {
                audio: 'xinqieting',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return player != event.player && !event.player.hasHistory('sourceDamage', evt => evt.player != event.player);
                },
                async cost(event, trigger, player) {
                    const target = trigger.player, str = get.translation(target), choices = [], choiceList = ['摸一张牌', '观看' + str + '的手牌并获得其中一张', '将' + str + '装备区内的一张牌移动至自己的装备区'];
                    choices.push('选项一');
                    if (target.countCards('h') > 0) choices.push('选项二');
                    else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    if (target.countCards('e', card => player.canEquip(card)) > 0) choices.push('选项三');
                    else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                    const { result } = await player.chooseControl(choices, 'cancel2').set('choiceList', choiceList).set('prompt', get.prompt(event.name.slice(0, -5), target)).set('ai', () => {
                        const player = get.player(), target = get.event().getTrigger().player;
                        if (get.attitude(player, target) > 0) return 0;
                        const val = target.hasSkillTag('noe') ? 6 : 0;
                        if (target.countCards('e', card => player.canEquip(card) && get.value(card, target) > val && get.effect(player, card, player, player) > 0) > 0) return 2;
                        if (target.countCards('h') > 0) return 1;
                        return 0;
                    });
                    event.result = {
                        bool: result.control != 'cancel2',
                        cost_data: result.index,
                    }
                },
                async content(event, trigger, player) {
                    const target = trigger.player, index = event.cost_data;
                    if (index == 0) {
                        await player.draw();
                    } else if (index == 1) {
                        await player.gainPlayerCard(target, 'h', true).set('visible', true);
                        player.addExpose(0.2);
                    } else {
                        player.addExpose(0.1);
                        const cards = await player.choosePlayerCard(target, 'e', true).set('filterButton', button => {
                            return get.player().canEquip(button.link);
                        }).set('ai', button => {
                            const player = get.player();
                            return get.effect(player, button.link, player, player);
                        }).forResultCards();
                        const card = cards[0];
                        target.$give(card, player, false);
                        await game.delay(0.5);
                        await player.equip(card);
                    }
                }
            },
            //刘焉
            wechatlimu: {
                mod: {
                    cardUsableTarget(card, player, target) {
                        if (player.countCards('j') && target != player) return true;
                    },
                    targetInRange(card, player, target) {
                        if (player.countCards('j') && target != player) return true;
                    },
                    aiOrder(player, card, num) {
                        if (get.type(card, 'delay') && player.canUse(card, player) && player.canAddJudge(card)) return 15;
                    },
                },
                audio: 'xinfu_limu',
                inherit: 'xinfu_limu',
            },
            //卧龙诸葛
            wechathuoji: {
                audio: ['sbhuoji', 2],
                enable: 'phaseUse',
                filterTarget: lib.filter.notMe,
                usable: 1,
                line: 'fire',
                content() {
                    target.damage('fire');
                },
                ai: {
                    order: 7,
                    fireAttack: true,
                    result: {
                        target(player, target) {
                            return get.sgn(get.attitude(player, target)) * get.damageEffect(target, player, player, 'fire');
                        },
                    },
                },
            },
            wechatkanpo: {
                audio: 'sbkanpo',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return lib.inpile.some(name => {
                        const type = get.type2(name);
                        if (type != 'trick') return false;
                        return !player.getStorage('wechatkanpo').includes(name);
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseButton([get.prompt('wechatkanpo'), [lib.inpile.filter(name => {
                        const type = get.type2(name);
                        if (type != 'trick') return false;
                        return !player.getStorage('wechatkanpo').includes(name);
                    }), 'vcard']]).set('ai', button => {
                        switch (button.link[2]) {
                            case 'lebu': return 3 + Math.random();
                            case 'wuzhong': return 4 + Math.random();
                            case 'shunshou': return 3 + Math.random();
                            case 'nanman': return 2 + Math.random();
                            case 'wanjian': return 2 + Math.random();
                            default: return 0.001 + Math.random();
                        }
                    }).forResult();
                    event.result.cost_data = event.result.links || [];
                },
                async content(event, trigger, player) {
                    const names = event.cost_data.map(i => i[2]);
                    player.addTempSkill('wechatkanpo_effect', 'roundStart');
                    player.markAuto('wechatkanpo_effect', names);
                    player.markAuto('wechatkanpo', names);
                    player.popup(names);
                    game.log(player, '记录了', '#y' + get.translation(names));
                },
                intro: {
                    mark(dialog, content = [], player) {
                        const names = player.getStorage('wechatkanpo_effect');
                        if (names.length) {
                            dialog.addText('本轮记录的牌名');
                            dialog.addSmall([names, 'vcard']);
                        }
                        if (content.length) {
                            dialog.addText('已记录过的牌名');
                            dialog.addSmall([content, 'vcard']);
                        }
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        audio: 'sbkanpo',
                        trigger: { global: 'useCard' },
                        filter(event, player) {
                            return event.player != player && player.getStorage('wechatkanpo_effect').includes(event.card.name);
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                            game.log(trigger.card, '被无效了');
                            player.draw();
                        },
                    },
                },
            },
            //星魏延
            wechatguli: {
                audio: 'mbguli',
                inherit: 'mbguli',
                usable: 1,
                filter(event, player) {
                    var hs = player.getCards('h');
                    if (!hs.length) return false;
                    for (var card of hs) {
                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                        if (mod2 === false) return false;
                    }
                    return event.filterCard(get.autoViewAs(lib.skill.wechatguli.viewAs, hs));
                },
                viewAs: {
                    name: 'sha',
                    storage: { wechatguli: true },
                },
                onuse(links, player) {
                    player.addTempSkill('wechatguli_effect', 'phaseUseAfter');
                },
                mod: {
                    cardUsable(card) {
                        if (card.storage?.wechatguli) return true;
                    },
                },
                ai: {
                    order: 0.01,
                    threaten: 1.14,
                },
                locked: false,
                subSkill: {
                    effect: {
                        charlotte: true,
                        audio: 'mbguli',
                        trigger: { global: 'useCardAfter' },
                        prompt2: '将手牌摸至体力上限',
                        filter(event, player) {
                            return event.card.storage?.wechatguli && game.hasPlayer2(current => {
                                return current.hasHistory('sourceDamage', evt => evt.card == event.card);
                            }) && player.countCards('h') < player.maxHp;
                        },
                        content() {
                            player.drawTo(player.maxHp);
                        },
                    },
                },
            },
            wechataosi: {
                audio: 'aosi',
                inherit: 'aosi',
                filter(event, player) {
                    return player.isPhaseUsing() && event.player.isIn() && !player.getStorage('mbaosi_inf').includes(event.player);
                },
            },
            //孙皓
            wechatcanshi: {
                inherit: 'recanshi',
                filter(event, player) {
                    return !event.numFixed;
                },
                check: () => true,
                prompt(event, player) {
                    const num = game.countPlayer(current => current.isDamaged());
                    return get.prompt('wechatcanshi') + '（可多摸' + get.cnNumber(Math.max(2, num)) + '张牌）';
                },
                content() {
                    const num = game.countPlayer(current => current.isDamaged());
                    trigger.num += Math.max(2, num);
                    player.addTempSkill('recanshi2');
                },
            },
            //甘夫人
            wechatshenzhi: {
                audio: 'shenzhi',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    if (player.isHealthy()) return false;
                    return player.countCards('h') >= player.getHp();
                },
                check(event, player) {
                    return get.recoverEffect(player, player, player) > 0;
                },
                content() {
                    player.recover();
                },
            },
            //徐荣
            wechatxionghuo: {
                audio: 'xinfu_xionghuo',
                inherit: 'xinfu_xionghuo',
                group: ['xinfu_xionghuo_init', 'xinfu_xionghuo_damage', 'wechatxionghuo_effect'],
                subSkill: {
                    effect: {
                        audio: 'xinfu_xionghuo',
                        trigger: {
                            global: 'phaseUseBegin',
                        },
                        filter(event, player) {
                            return event.player.countMark('xinfu_xionghuo') > 0 && event.player != player;
                        },
                        line: false,
                        forced: true,
                        locked: false,
                        logTarget: 'player',
                        content() {
                            'step 0'
                            trigger.player.removeMark('xinfu_xionghuo', trigger.player.countMark('xinfu_xionghuo'));
                            'step 1'
                            var num = get.rand(0, 2);
                            switch (num) {
                                case 0: {
                                    player.line(trigger.player, 'fire');
                                    trigger.player.damage('fire');
                                    trigger.player.addTempSkill('wechatxionghuo_disable');
                                    break;
                                }
                                case 1: {
                                    player.line(trigger.player, 'water');
                                    trigger.player.loseHp();
                                    trigger.player.addMark('xinfu_xionghuo_low', 1, false);
                                    trigger.player.addTempSkill('xinfu_xionghuo_low');
                                    break;
                                }
                                case 2: {
                                    player.line(trigger.player, 'green');
                                    const cards = trigger.player.getGainableCards(player, 'he');
                                    if (cards.length) player.gain(cards.randomGets(2), trigger.player, 'giveAuto', 'bySelf');
                                    break;
                                }
                            }
                            'step 2'
                            game.delay();
                        },
                    },
                    disable: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        marktext: '禁',
                        mod: {
                            cardEnabled(card, player) {
                                if (card.name == 'sha') return false;
                            },
                        },
                        intro: {
                            content: '不能使用【杀】',
                        },
                    }
                }
            },
            // 孩子这是极略神马超
            wechatjlmashu: {
                mod: {
                    targetInRange(card) {
                        if (card.storage?.wechatjlmashu) return true;
                    },
                    cardUsable(card, player) {
                        if (card.storage?.wechatjlmashu) return Infinity;
                    },
                },
                audio: ['sbtieji', 1],
                enable: 'phaseUse',
                locked: false,
                viewAs: {
                    name: 'sha',
                    storage: { wechatjlmashu: true },
                },
                filter(event, player) {
                    return player.countMark('wechatjlmashu');
                },
                filterCard: () => false,
                selectCard: -1,
                prompt: '弃置1枚“千骑”标记，视为使用一张【杀】',
                async precontent(event, trigger, player) {
                    player.removeMark('wechatjlmashu', 1);
                },
                marktext: '骑',
                intro: {
                    content: 'mark',
                },
                group: ['wechatjlmashu_gain', 'wechatjlmashu_init'],
                subSkill: {
                    gain: {
                        audio: ['sbtieji', 1],
                        trigger: {
                            global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        getIndex(event, player) {
                            return game.countPlayer(current => {
                                const evt = event.getl(current);
                                return evt?.es?.some(card => ['equip3', 'equip4', 'equip6'].some(subtype => get.subtypes(card).includes(subtype)))
                            });
                        },
                        forced: true,
                        locked: false,
                        async content(event, trigger, player) {
                            player.addMark('wechatjlmashu', 2);
                        },
                    },
                    init: {
                        audio: ['sbtieji', 1],
                        trigger: {
                            player: 'enterGame',
                            global: 'phaseBefore',
                        },
                        forced: true,
                        locked: false,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        async content(event, trigger, player) {
                            const card1 = get.cardPile2(card => get.subtypes(card).includes('equip3') && player.hasUseTarget(card));
                            if (card1) {
                                await player.chooseUseTarget(card1, 'nothrow', 'nopopup', true);
                            }
                            await game.delayx();
                            const card2 = get.cardPile2(card => get.subtypes(card).includes('equip4') && player.hasUseTarget(card));
                            if (card2) {
                                await player.chooseUseTarget(card2, 'nothrow', 'nopopup', true);
                            }
                        },
                    }
                }
            },
            wechatjltieji: {
                audio: Array.from({ length: 2 }).map((_, i) => 'sbtieji' + parseFloat(i + 2) + '.mp3'),
                trigger: {
                    source: 'damageBegin2',
                },
                filter(event, player) {
                    return event.card?.name == 'sha' && event.player != player;
                },
                shaRelated: true,
                async cost(event, trigger, player) {
                    const target = trigger.player, str = get.translation(target);
                    const { result } = await player.chooseControl('cancel2').set('choiceList', [`令${str}失去${trigger.num}点体力`, `令${str}减少1点体力上限`]).set('prompt', get.prompt(event.name.slice(0, -5))).set('ai', () => {
                        const evt = get.event().getTrigger();
                        const player = get.player(), target = evt.player, num = evt.num;
                        if (get.attitude(player, target) > 0) return 'cancel2';
                        if (num == 1 || target.maxHp == 1) return 1;
                        if (target.isDamaged()) return 0;
                        return 1;
                    });
                    event.result = {
                        bool: result.control != 'cancel2',
                        cost_data: result.index,
                    }
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    trigger.cancel();
                    const target = trigger.player, index = event.cost_data;
                    if (index == 0) await target.loseHp(trigger.num);
                    else await target.loseMaxHp();
                },
            },
            // 星徐晃
            wechatxhzhiyan: {
                audio: 'xhzhiyan1.mp3',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('h') < player.maxHp;
                },
                async content(event, trigger, player) {
                    player.addTempSkill('xinxhzhiyan_false', 'phaseUseEnd');
                    await player.drawTo(player.maxHp);
                },
                ai: {
                    order: 3,
                    result: {
                        player: 1,
                    },
                },
            },
            wechatjiewei: {
                audio: 'xhzhiyan2.mp3',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('h') > player.hp;
                },
                filterCard: true,
                selectCard() {
                    const player = get.player();
                    return player.countCards('h') - player.hp;
                },
                filterTarget: lib.filter.notMe,
                check: (card) => lib.skill.xinxhzhiyan.check(card),
                delay: false,
                discard: false,
                lose: false,
                async content(event, trigger, player) {
                    const { cards, target } = event;
                    await player.give(cards, target);
                },
                ai: {
                    order(obj, player) {
                        if (player.countCards('h') > player.hp) return 10;
                        return 0.5;
                    },
                    result: {
                        player(player, target) {
                            if (!ui.selected.cards.length && player.countCards('h') < player.maxHp) return 1;
                            return 0;
                        },
                        target: 1,
                    },
                },
            },
            //极周瑜
            wechatyingrui: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'phaseDrawEnd',
                    source: 'dieAfter',
                },
                filter(event, player, name) {
                    return player.countMark('wechatmoulvenum') < lib.skill.wechatmoulvenum.getMax;
                },
                forced: true,
                locked: false,
                async content(event, trigger, player) {
                    lib.skill.wechatmoulvenum.changeNum(4, player);
                },
            },
            wechatfenli: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    if (player.countMark('wechatmoulvenum') < 2) return false;
                    return game.hasPlayer(current => get.info('wechatfenli').filterTarget(null, player, current));
                },
                selectTarget: [1, 2],
                complexSelect: true,
                complexTarget: true,
                filterTarget(card, player, target) {
                    const selected = ui.selected.targets;
                    if (!target.countDiscardableCards(player, 'he')) return false;
                    if (!selected.length) return true;
                    if (selected[0].getNext() == target || selected[0].getPrevious() == target) return true;
                    return false;
                },
                multitarget: true,
                multiline: true,
                async content(event, trigger, player) {
                    lib.skill.wechatmoulvenum.changeNum(-2, player);
                    const targets = event.targets.sortBySeat();
                    for (const target of targets) await player.discardPlayerCard(target, 'he', true);
                    const cards = game.getGlobalHistory('cardMove', evt => evt.type == 'discard' && evt.getParent(3) == event).map(evt => evt.cards).flat();
                    if (player.countMark('wechatmoulvenum') < 2 || cards.map(card => get.color(card)).toUniqued().length != 1) return;
                    const effect = targets.reduce((sum, i) => sum + get.damageEffect(i, player, player, 'fire'), 0);
                    const bool = await player.chooseBool(`是否再消耗2点${get.MouLveInform()}，对${get.translation(targets)}各造成1点伤害`).set('choice', effect > 0).forResultBool();
                    if (!bool) return;
                    lib.skill.wechatmoulvenum.changeNum(-2, player);
                    for (const target of targets) await target.damage('fire');
                },
                ai: {
                    order: 7,
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'guohe_copy2' }, player, player);
                        },
                    },
                },
            },
            wechatqugu: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return player != event.player && game.getGlobalHistory('useCard', evt => evt.player != player).indexOf(event.getParent()) == 0;
                },
                frequent: true,
                async content(event, trigger, player) {
                    const card = get.cardPile2(cardx => get.type2(cardx) != get.type2(trigger.card));
                    if (card) await player.gain(card, 'gain2');
                },
            },
            // 极孙权
            wechatzongxi: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('he');
                },
                filterCard: true,
                position: 'he',
                selectCard: [1, 3],
                complexCard: true,
                discard: false,
                delay: false,
                loseTo: 'cardPile',
                insert: true,
                check(card) {
                    const player = get.player();
                    const num = Math.min(3, game.countPlayer(current => game.hasPlayer(currentx => current.canCompare(currentx)) && get.attitude(player, current) <= 0));
                    if (ui.selected.cards.length >= num) return 0;
                    return 13 - get.number(card);
                },
                async content(event, trigger, player) {
                    let { cards } = event;
                    player.$throw(cards.length);
                    if (cards.length > 1) {
                        const result = await player.chooseToMove(`纵阋：将牌以任意顺序置于牌堆顶`, true).set('list', [['牌堆顶', cards]]).set('processAI', list => {
                            const cards = list[0][1].slice(0);
                            cards.sort((a, b) => {
                                return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
                            });
                            return [cards];
                        }).set('reverse', player.hasCard(card => get.number(card) > 10)).forResult();
                        if (!result.bool) return;
                        cards = result.moved[0];
                    }
                    cards.reverse();
                    game.log(player, '的' + get.cnNumber(cards.length) + '张牌被置入了', '#y牌堆顶');
                    for (let i = cards.length - 1; i--; i >= 0) {
                        ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                    }
                    game.updateRoundNumber();
                    await game.delayx();
                    if (!game.hasPlayer(current => game.hasPlayer(currentx => current.canCompare(currentx)))) return;
                    const targets = await player.chooseTarget(`选择至多${get.cnNumber(cards.length + 1)}名角色进行共同拼点`, [2, cards.length + 1], true, (card, player, target) => {
                        if (!ui.selected.targets.length) return game.hasPlayer(currentx => target.canCompare(currentx));
                        return ui.selected.targets[0].canCompare(target);
                    }).set('ai', target => {
                        const player = get.player();
                        let att = get.attitude(player, target);
                        if (target.hasSkillTag('noh')) att /= 3;
                        return (-att + 0.1) / Math.sqrt(target.countCards('h'));
                    }).set('targetprompt', ['发起拼点', '拼点目标']).set('complexTarget', true).forResultTargets();
                    if (!targets || !targets.length) return;
                    const { result: result2 } = await targets[0].chooseToCompare(targets.slice(1), function (card) {
                        return get.number(card);
                    }).setContent('chooseToCompareMeanwhile');
                    if (result2.winner) await result2.winner.draw(2);
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return 1;
                        },
                    },
                },
                group: 'wechatzongxi_gain',
                subSkill: {
                    gain: {
                        audio: 'wechatzongxi',
                        trigger: { global: 'chooseToCompareAfter' },
                        filter(event, player) {
                            return event.targets?.length && event.lose_list.some(list => list[0] != player && list[1].someInD());
                        },
                        forced: true,
                        locked: false,
                        async content(event, trigger, player) {
                            await player.gain(trigger.lose_list.filter(list => list[0] != player).map(list => list[1].filterInD()).flat(), 'gain2');
                        },
                    }
                }
            },
            wechatluheng: {
                audio: 'ext:活动武将/audio/skill:2',
                getTargets(player) {
                    let targets = game.getGlobalHistory('everything', evt => evt.name == 'chooseToCompare' && evt.targets?.length).map(evt => evt.targets).flat().toUniqued();
                    targets = targets.filter(current => {
                        if (current == player || !current.isIn()) return false;
                        if (!player.canUse({ name: 'sha' }, current, false)) return false;
                        const num = current.countCards('h');
                        return targets.every(targetx => {
                            return targetx.countCards('h') <= num;
                        });
                    });
                    return targets;
                },
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.hasHistory('useSkill', evt => evt.skill == 'wechatzongxi') && get.info('wechatluheng').getTargets(player).length;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
                        return get.info('wechatluheng').getTargets(player).includes(target);
                    }).set('ai', target => {
                        const player = get.player();
                        return get.effect(target, { name: 'sha' }, player, player);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const sha = get.autoViewAs({ name: 'sha', isCard: true });
                    await player.useCard(sha, event.targets[0], false);
                },
                ai: { combo: 'wechatzongxi', }
            },
            // 极关羽
            wechatyihan: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(current => get.info('wechatyihan').filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target.countCards('h') && target != player;
                },
                usable: 1,
                async content(event, trigger, player) {
                    const { target } = event, sha = get.autoViewAs({ name: 'sha', isCard: true });
                    const cards = await player.choosePlayerCard(target, true, 'h').forResultCards();
                    if (!cards || !cards.length) return;
                    await player.showCards(cards, get.translation(player) + '对' + get.translation(target) + '发动了【翊汉】');
                    const { result: { index } } = await target.chooseControl().set('choiceList', [`交给${get.translation(player)}${get.translation(cards)}`, `${get.translation(player)}视为对你使用一张无次数限制的【杀】`]).set('ai', () => {
                        const player = get.player(), target = get.event().getParent().player;
                        const card = get.event().cards[0];
                        if (get.effect(player, { name: 'sha' }, target, player) > 0) return 1;
                        if (player.getEquip('bagua') || player.getEquip('tengjia')) return 1;
                        return get.value(card, player) > 7 ? 1 : 0;
                    }).set('cards', cards);
                    if (index == 0) await target.give(cards, player);
                    else if (player.canUse(sha, target, false, false)) await player.useCard(sha, target, false);
                },
                ai: {
                    order: 8,
                    result: {
                        target(player, target) {
                            return -1;
                        }
                    }
                }
            },
            wechatgywuwei: {
                audio: 'ext:活动武将/audio/skill:2',
                shiwuSkill: true,
                categories: () => ['奋武技'],
                enable: 'phaseUse',
                onChooseToUse(event) {
                    if (!game.online && typeof event.wechat_shiwuAble !== 'number') {
                        const player = event.player;
                        event.set('wechat_shiwuAble', player.getRoundHistory('damage', () => true).concat(player.getRoundHistory('sourceDamage', () => true)).reduce((sum, evt) => sum + evt.num, 0) + 1);
                    }
                },
                usable(skill, player) {
                    return Math.min(5, _status.event.wechat_shiwuAble);
                },
                filter(event, player) {
                    const num = 1 + (player.getStat('skill').wechatgywuwei || 0);
                    if (num > player.countCards('he', card => lib.filter.cardDiscardable(card, player))) return false;
                    return game.hasPlayer(current => get.info('wechatyihan').filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target.countDiscardableCards(player, 'he');
                },
                filterCard: lib.filter.cardDiscardable,
                selectCard() {
                    return 1 + (get.player().getStat('skill').wechatgywuwei || 0);
                },
                position: 'he',
                check(card) {
                    return 7.5 - get.value(card);
                },
                async content(event, trigger, player) {
                    const { cards, target } = event, num1 = cards.reduce((sum, card) => sum + get.number(card), 0);
                    const links = await player.discardPlayerCard(target, 'he', cards.length, true).forResultLinks();
                    const num2 = (links || []).reduce((sum, card) => sum + get.number(card), 0);
                    if (num1 <= num2) await target.damage('thunder');
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'guohe_copy2' }, player, player);
                        },
                    },
                },
            },
            //谋黄忠
            wechatsbliegong: {
                audio: 'sbliegong',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return !event.getParent()._wechatsbliegong_player && event.targets.length == 1 && event.card.name == 'sha' && player.getStorage('wechatsbliegong').length > 0;
                },
                prompt2(event, player) {
                    var str = '', storage = player.getStorage('wechatsbliegong');
                    if (storage.length > 1) str += ('亮出牌堆顶的' + get.cnNumber(storage.length - 1) + '张牌并增加伤害；且');
                    str += ('令' + get.translation(event.target) + '不能使用花色为');
                    for (var i of storage) str += get.translation(i);
                    str += ('的牌响应' + get.translation(event.card));
                    return str;
                },
                check(event, player) {
                    var target = event.target;
                    if (get.attitude(player, target) > 0) return false;
                    if (target.hasSkillTag('filterDamage', null, {
                        player: player,
                        card: event.card,
                    })) return false;
                    var storage = player.getStorage('wechatsbliegong');
                    if (storage.length >= 4) return true;
                    if (storage.length < 3) return false;
                    if (target.hasShan()) return storage.includes('heart') && storage.includes('diamond');
                    return true;
                },
                logTarget: 'target',
                async content(event, trigger, player) {
                    var storage = player.getStorage('wechatsbliegong').slice();
                    var num = storage.length - 1;
                    var evt = trigger.getParent();
                    if (num > 0) {
                        if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                        var cards = get.cards(num);
                        await game.cardsGotoOrdering(cards);
                        await player.showCards(cards.slice(), get.translation(player) + '发动了【烈弓】');
                        for (const card of cards) {
                            if (storage.includes(get.suit(card, false))) evt.baseDamage++;
                        }
                    }
                    evt._wechatsbliegong_player = player;
                    player.when('useCardAfter')
                        .filter(evtxx => evtxx._wechatsbliegong_player == player)
                        .then(() => {
                            player.unmarkSkill('wechatsbliegong');
                            player.removeTip('wechatsbliegong');
                        });
                    var target = trigger.target;
                    target.addTempSkill('wechatsbliegong_block');
                    if (!target.storage.wechatsbliegong_block) target.storage.wechatsbliegong_block = [];
                    target.storage.wechatsbliegong_block.push([evt.card, storage]);
                    lib.skill.wechatsbliegong.updateBlocker(target);
                },
                updateBlocker(player) {
                    var list = [], storage = player.storage.wechatsbliegong_block;
                    if (storage?.length) {
                        for (var i of storage) list.addArray(i[1]);
                    }
                    player.storage.wechatsbliegong_blocker = list;
                },
                ai: {
                    threaten: 3.5,
                    directHit_ai: true,
                    halfneg: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg?.card?.name == 'sha') {
                            var storage = player.getStorage('wechatsbliegong');
                            if (storage.length < 3 || !storage.includes('heart') || !storage.includes('diamond')) return false;
                            var target = arg.target;
                            if (target.hasSkill('bagua_skill') || target.hasSkill('bazhen') || target.hasSkill('rw_bagua_skill')) return false;
                            return true;
                        }
                        return false;
                    },
                },
                intro: {
                    onunmark: true,
                    content: '已记录花色：$',
                },
                onremove(player, skill) {
                    player.removeTip(skill);
                    delete player.storage[skill];
                },
                group: 'wechatsbliegong_count',
                subSkill: {
                    block: {
                        mod: {
                            cardEnabled(card, player) {
                                if (!player.storage.wechatsbliegong_blocker) return;
                                var suit = get.suit(card);
                                var evt = _status.event;
                                if (evt.name != 'chooseToUse') evt = evt.getParent('chooseToUse');
                                if (!evt || !evt.respondTo || evt.respondTo[1].name != 'sha') return;
                                if (player.storage.wechatsbliegong_blocker.includes(suit)) return false;
                            },
                        },
                        trigger: {
                            player: ['damageBefore', 'damageCancelled', 'damageZero'],
                            target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd'],
                            global: ['useCardEnd'],
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        charlotte: true,
                        onremove(player) {
                            delete player.storage.wechatsbliegong_block;
                            delete player.storage.wechatsbliegong_blocker;
                        },
                        filter(event, player) {
                            if (!event.card || !player.storage.wechatsbliegong_block) return false;
                            for (var i of player.storage.wechatsbliegong_block) {
                                if (i[0] == event.card) return true;
                            }
                            return false;
                        },
                        content() {
                            var storage = player.storage.wechatsbliegong_block;
                            for (var i = 0; i < storage.length; i++) {
                                if (storage[i][0] == trigger.card) {
                                    storage.splice(i--, 1);
                                }
                            }
                            if (!storage.length) player.removeSkill('wechatsbliegong_block');
                            else lib.skill.wechatsbliegong.updateBlocker(target);
                        },
                    },
                    count: {
                        trigger: {
                            player: 'useCard',
                            target: 'useCardToTargeted',
                        },
                        filter(event, player, name) {
                            if (name != 'useCard' && player == event.player) return false;
                            var suit = get.suit(event.card);
                            if (player.storage.wechatsbliegong?.includes(suit)) return false;
                            return true;
                        },
                        direct: true,
                        content() {
                            player.markAuto('wechatsbliegong', [get.suit(trigger.card)]);
                            player.storage.wechatsbliegong.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                            player.addTip('wechatsbliegong', get.translation('wechatsbliegong') + player.getStorage('wechatsbliegong').reduce((str, suit) => str + get.translation(suit), ""));
                        },
                    },
                },
            },
            //甘宁
            wechatjinfan: {
                audio: 'gnjinfan',
                trigger: { player: 'phaseDiscardBegin' },
                filter(event, player) {
                    return player.hasCard(card => {
                        if (_status.connectMode) return true;
                        return !player.hasCard(cardx => cardx.hasGaintag('wechatjinfan') && get.suit(cardx, player) === get.suit(card, player), 's')
                    }, 'h');
                },
                locked: false,
                async cost(event, trigger, player) {
                    event.result = await player.chooseCard('h', get.prompt('wechatjinfan'), '将任意张手牌当做“铃”置于武将牌上', [1, Infinity], (card, player) => {
                        return !player.getCards('s', cardx => cardx.hasGaintag('wechatjinfan')).slice().concat(ui.selected.cards || []).some(cardx => {
                            return get.suit(cardx, player) == get.suit(card, player);
                        });
                    }).set('complexCard', true).set('ai', card => {
                        const player = get.player();
                        if (player.hasUseTarget(card) && !player.hasValueTarget(card)) return 0;
                        if (['sha', 'shan', 'wuxie', 'caochuan'].includes(card.name)) return 2 + Math.random();
                        return 1 + Math.random();
                    }).forResult();
                },
                content() {
                    player.loseToSpecial(event.cards, event.name);
                },
                marktext: '铃',
                onremove(player, skill) {
                    const cards = player.getCards('s', card => card.hasGaintag(skill));
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'wechatjinfan_gain',
                mod: {
                    aiOrder(player, card, num) {
                        if (get.itemtype(card) === 'card' && card.hasGaintag('wechatjinfan')) return num + 0.5;
                    },
                    cardUsable(card, player) {
                        if (Array.isArray(card.cards) && card.cards.some(i => i.hasGaintag('wechatjinfan'))) return Infinity;
                    },
                    targetInRange(card, player) {
                        if (Array.isArray(card.cards) && card.cards.some(i => i.hasGaintag('wechatjinfan'))) return true;
                    },
                },
                subSkill: {
                    gain: {
                        audio: 'gnjinfan',
                        trigger: { player: 'loseAfter' },
                        filter(event, player) {
                            if (!event.ss?.length) return false;
                            return Object.values(event.gaintag_map).flat().includes('wechatjinfan');
                        },
                        forced: true,
                        locked: false,
                        content() {
                            const evt = trigger.getParent();
                            if (evt.name === 'useCard' && evt.player === player && evt.addCount !== false) {
                                evt.addCount = false;
                                player.getStat('card')[evt.card.name]--;
                            }
                            const cards = trigger.ss.reduce((list, i) => {
                                if (trigger.gaintag_map?.[i.cardid]?.includes('wechatjinfan')) {
                                    const card = get.cardPile2(card => !list.includes(card) && get.suit(card, false) === get.suit(i, false));
                                    if (card) list.push(card);
                                }
                                return list;
                            }, []);
                            if (cards.length) player.gain(cards, 'gain2');
                        },
                    },
                },
            },
            wechatsheque: {
                audio: 'gnsheque',
                trigger: { global: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return event.player.isIn() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && (player.hasSha() || _status.connectMode && player.countCards('hs') > 0);
                },
                direct: true,
                content() {
                    player.chooseToUse(function (card, player, event) {
                        if (get.name(card) !== 'sha') return false;
                        return lib.filter.filterCard.apply(this, arguments);
                    }, '射却：是否对' + get.translation(trigger.player) + '使用一张【杀】？').set('logSkill', 'wechatsheque').set('complexSelect', true).set('filterTarget', function (card, player, target) {
                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                        return lib.filter.targetEnabled.apply(this, arguments);
                    }).set('sourcex', trigger.player).set('oncard', (card) => {
                        try {
                            card.wechatsheque_tag = true;
                        } catch (e) {
                            alert('发生了一个导致【射却】无法正常触发无视防具效果的错误。请关闭十周年UI/手杀ui等扩展以解决');
                        }
                    });
                },
                ai: {
                    unequip: true,
                    unequip_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (tag === 'unequip_ai') {
                            if (get.event().getParent().name !== 'wechatsheque') return false;
                        }
                        else if (!arg?.card?.wechatsheque_tag) return false;
                    },
                },
            },
            //孙鲁育
            wechatmeibu: {
                audio: 'meibu',
                trigger: { global: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return event.player.inRange(player) && player.hasCard(card => {
                        if (get.position(card) === 'h' && _status.connectMode) return true;
                        return lib.filter.cardDiscardable(card, player);
                    }, 'he') && !event.player.hasSkill('wechatzhixi', null, null, false);
                },
                popup: false,
                async cost(event, trigger, player) {
                    const list = ['wechatmeibu', trigger.player];
                    const check = get.info('new_meibu').checkx(trigger, player);
                    event.result = await player.chooseToDiscard(get.prompt2(...list), 'he').set('ai', card => {
                        if (get.event().check) return 6 - get.value(card);
                        return 0;
                    }).set('check', check).set('logSkill', list).forResult();
                },
                content() {
                    trigger.player.addTempSkills(get.info(event.name).derivation);
                },
                derivation: 'wechatzhixi',
            },
            wechatzhixi: {
                trigger: { player: 'useCard' },
                filter(event, player) {
                    const filter = event => event.card.name === 'sha' || get.type(event.card) === 'trick';
                    if (!filter(event) || !event.isPhaseUsing() || !player.isPhaseUsing()) return false;
                    return !player.hasHistory('useCard', evt => evt !== event && filter(evt) && evt.getParent('phaseUse') === event.getParent('phaseUse'));
                },
                forced: true,
                async content(event, trigger, player) {
                    const { result } = await player.judge();
                    if (result.color === 'black') player.addTempSkill('fengyin');
                    if (result.color === 'red') {
                        trigger.targets.length = 0;
                        trigger.all_excluded = true;
                        game.log(trigger.card, '被无效了');
                    }
                },
            },
            wechatmumu: {
                audio: 'mumu',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target.countCards('e');
                },
                filterCard: lib.filter.cardDiscardable,
                position: 'he',
                check(card) {
                    return 7 - get.value(card);
                },
                usable: 1,
                prompt: '将一名角色装备区的一张牌称为“刎”置于武将牌上',
                async content(event, trigger, player) {
                    const { target } = event;
                    const result = await player.choosePlayerCard(target, 'e', true).forResult();
                    if (result?.bool && result.cards?.length) {
                        const { cards } = result;
                        await (() => {
                            const next = player.addToExpansion(cards, target, 'give');
                            next.gaintag.add(event.name);
                            return next;
                        })();
                    }
                },
                ai: {
                    order(item, player) {
                        return get.order({ name: 'guohe_copy', position: 'e' }, player);
                    },
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'guohe_copy', position: 'e' }, player, player);
                        },
                    },
                },
                marktext: '刎',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: ['wechatmumu_damage', 'wechatmumu_die'],
                subSkill: {
                    damage: {
                        trigger: { source: 'damageBegin1' },
                        filter(event, player) {
                            return player.getExpansions('wechatmumu').length > 0;
                        },
                        check(event, player) {
                            return get.attitude(player, event.player) < 0 && !event.player.hasSkillTag('filterDamage', null, {
                                player: player,
                                card: event.card,
                            });
                        },
                        async cost(event, trigger, player) {
                            event.result = await player.chooseButton([
                                '###' + get.prompt('wechatmumu', trigger.player) + '###<div class="text center">弃置一张“刎”并令此伤害+1</div>',
                                player.getExpansions('wechatmumu'),
                            ]).set('ai', button => {
                                const player = get.player(), trigger = get.event().getTrigger();
                                return get.info('wechatmumu').subSkill.damage.check(trigger, player) ? (1 + Math.random()) : 0;
                            }).forResult();
                            if (event.result?.links?.length) event.result.cards = event.result.links;
                        },
                        logTarget: 'player',
                        async content(event, trigger, player) {
                            await player.loseToDiscardpile(event.cards);
                            trigger.num++;
                        },
                    },
                    die: {
                        audio: 'mumu',
                        trigger: { player: 'die' },
                        filter(event, player) {
                            return event.source?.isIn() && player.getExpansions('wechatmumu').length > 0;
                        },
                        forced: true,
                        locked: false,
                        forceDie: true,
                        logTarget: 'source',
                        skillAnimation: true,
                        animationColor: 'thunder',
                        async content(event, trigger, player) {
                            const { source } = trigger, num = 2 * player.getExpansions('wechatmumu').length;
                            const result = await source.chooseToDiscard('he', '穆穆：你害死了' + get.translation(player) + '！', '弃置' + get.cnNumber(num) + '张牌，或失去1点体力').set('ai', card => {
                                const { player, selectCard: num } = get.event();
                                return get.effect(player, { name: 'guohe_copy2' }, player, player) * num - get.effect(player, { name: 'losehp' }, player, player);
                            }).set('selectCard', num).forResult();
                            if (!result.bool) await player.loseHp();
                        },
                    },
                },
            },
            //SP貂蝉
            wechatbiyue: {
                audio: 'biyue',
                inherit: 'biyue',
                content() {
                    player.draw(Math.min(3, 1 + player.getHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0)))
                },
            },
            //诸葛果
            wechatqirang: {
                audio: 'qirang',
                inherit: 'qirang',
                content() {
                    const card = get.cardPile2(card => get.type2(card) === 'trick');
                    if (card) {
                        const next = player.gain(card, 'gain2');
                        if (get.type(card) === 'trick') {
                            player.addTempSkill('wechatqirang_use');
                            next.gaintag.add('wechatqirang');
                        }
                    }
                },
                subSkill: {
                    use: {
                        charlotte: true,
                        onremove(player) {
                            player.removeGaintag('wechatqirang');
                        },
                        audio: 'qirang',
                        trigger: { player: 'useCard2' },
                        filter(event, player) {
                            if (get.type(event.card) !== 'trick') return false;
                            if (!event.targets?.length) return false;
                            const info = get.info(event.card);
                            if (info.allowMultiple === false) return false;
                            if (!player.hasHistory('lose', evt => {
                                if (evt.getParent() !== event) return false;
                                return Object.values(evt.gaintag_map).flat().includes('wechatqirang');
                            })) return false;
                            if (!info.multitarget) {
                                if (game.hasPlayer(current => {
                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                                })) return true;
                            }
                            return false;
                        },
                        async cost(event, trigger, player) {
                            event.result = await player.chooseTarget(get.prompt('wechatqirang'), (card, player, target) => {
                                const trigger = get.event().getTrigger();
                                if (trigger.targets.includes(target)) return false;
                                return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                            }).set('ai', target => {
                                const trigger = get.event().getTrigger(), player = get.player();
                                return get.effect(target, trigger.card, player, player);
                            }).set('prompt2', '为' + get.translation(trigger.card) + '增加一个目标').forResult();
                        },
                        content() {
                            trigger.targets.addArray(event.targets);
                        },
                    },
                },
            },
            wechatyuhua: {
                audio: 'yuhua',
                trigger: { player: 'phaseDiscardBegin' },
                forced: true,
                content() { },
                mod: {
                    ignoredHandcard(card, player) {
                        if (get.type(card) !== 'basic') return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name === 'phaseDiscard' && get.type(card) !== 'basic') return false;
                    },
                },
            },
            wechatchongxu: {
                audio: 'chongxu',
                enable: 'phaseUse',
                usable: 1,
                async content(event, trigger, player) {
                    const func = () => {
                        const event = get.event();
                        const controls = [
                            link => {
                                const evt = get.event();
                                if (evt.dialog && evt.dialog.buttons) {
                                    for (let i = 0; i < evt.dialog.buttons.length; i++) {
                                        const button = evt.dialog.buttons[i];
                                        button.classList.remove("selectable");
                                        button.classList.remove("selected");
                                        const counterNode = button.querySelector(".caption");
                                        if (counterNode) counterNode.childNodes[0].innerHTML = ``;
                                    }
                                    ui.selected.buttons.length = 0;
                                    game.check();
                                }
                                return;
                            },
                        ];
                        event.controls = [ui.create.control(controls.concat(["清除选择", "stayleft"]))];
                    };
                    event.isMine() ? func() : (event.isOnline() && event.player.send(func));
                    const result = await player.chooseButton([
                        '###' + get.translation(event.name) + '###<div class="text center">请选择你要执行的项目</div>',
                        [
                            [
                                ['miaojian', '使用3积分升级【' + get.translation('miaojian') + '】'],
                                ['shhlianhua', '使用3积分升级【' + get.translation('shhlianhua') + '】'],
                                ['draw', '使用2积分摸一张牌'],
                            ],
                            'textbutton',
                        ],
                    ], [1, Infinity]).set('filterButton', button => {
                        const player = get.player(), choice = ui.selected.buttons.map(i => i.link);
                        if (button.link !== 'draw' && (!player.hasSkill(button.link, null, null, false) || choice.filter(i => i === button.link).length + player.countMark(button.link) > 1)) return false;
                        return [choice, button.link].reduce((sum, i) => sum + (i === 'draw' ? 2 : 3), 0) <= 6;
                    }).set("custom", {
                        add: {
                            confirm(bool) {
                                if (bool !== true) return;
                                const event = get.event().parent;
                                Array.isArray(event.controls) && event.controls.forEach(i => i.close());
                                ui.confirm && ui.confirm.close();
                                game.uncheck();
                            },
                            button() {
                                if (ui.selected.buttons.length) return;
                                const event = get.event();
                                if (event.dialog && event.dialog.buttons) {
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                        const button = event.dialog.buttons[i];
                                        const counterNode = button.querySelector(".caption");
                                        if (counterNode) counterNode.childNodes[0].innerHTML = ``;
                                    }
                                }
                                if (!ui.selected.buttons.length) event.parent?.controls?.[0]?.classList.add("disabled");
                            },
                        },
                        replace: {
                            button(button) {
                                const event = get.event();
                                if (!event.isMine() || !event.filterButton(button) || button.classList.contains("selectable") == false) return;
                                button.classList.add("selected");
                                ui.selected.buttons.push(button);
                                let counterNode = button.querySelector(".caption");
                                const count = ui.selected.buttons.filter(i => i == button).length;
                                counterNode ? (((counterNode) => {
                                    counterNode = counterNode.childNodes[0];
                                    counterNode.innerHTML = `×${count}`;
                                })(counterNode)) : counterNode = ui.create.caption(`<span style="font-family:xinwei; text-shadow:#FFF 0 0 4px, #FFF 0 0 4px, rgba(74,29,1,1) 0 0 3px;">×${count}</span>`, button);
                                event.parent?.controls?.[0]?.classList.add("disabled");
                                game.check();
                            },
                        },
                    }).forResult();
                    if (result?.bool && result.links?.length) {
                        const miaojian = result.links.filter(i => i === 'miaojian').length;
                        miaojian > 0 && (player.addMark('miaojian', miaojian, false) || player.popup('miaojian') || game.log(player, '升级了技能', '#g【' + get.translation('miaojian') + '】'));
                        const shhlianhua = result.links.filter(i => i === 'shhlianhua').length;
                        shhlianhua > 0 && (player.addMark('shhlianhua', shhlianhua, false) || player.popup('shhlianhua') || game.log(player, '升级了技能', '#g【' + get.translation('shhlianhua') + '】'));
                        const draw = result.links.filter(i => i === 'draw').length;
                        draw > 0 && await player.draw(draw);
                    }
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
            },
            //刘赪
            wechatlveying: {
                audio: 'splveying',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    return event.card.name === 'sha' && player.countMark('wechatlveying') > 1;
                },
                forced: true,
                locked: false,
                content() {
                    'step 0'
                    player.removeMark('wechatlveying', 2);
                    player.draw();
                    'step 1'
                    player.chooseUseTarget('guohe');
                },
                marktext: '椎',
                intro: {
                    name: '椎(掠影/莺舞)',
                    name2: '椎',
                    content: 'mark',
                },
                group: 'wechatlveying_add',
                subSkill: {
                    add: {
                        audio: 'splveying',
                        trigger: { player: 'useCardToPlayered' },
                        filter(event, player) {
                            return event.card.name === 'sha' && player.isPhaseUsing() && player.countMark('wechatlveying_used') < 3;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.addMark('wechatlveying', 1);
                            player.addTempSkill('wechatlveying_used', 'phaseUseAfter');
                            player.addMark('wechatlveying_used', 1, false);
                        },
                    },
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                },
            },
            wechatyingwu: {
                audio: 'spyingwu',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    return (get.type(event.card) == 'trick' && !get.tag(event.card, 'damage')) && player.countMark('wechatlveying') > 1;
                },
                forced: true,
                locked: false,
                content() {
                    player.removeMark('wechatlveying', 2);
                    player.draw();
                    player.chooseUseTarget('sha', false);
                },
                group: 'wechatyingwu_add',
                ai: { combo: 'wechatlveying' },
                subSkill: {
                    add: {
                        audio: 'spyingwu',
                        trigger: { player: 'useCardToPlayered' },
                        filter(event, player) {
                            return (get.type(event.card) == 'trick' && !get.tag(event.card, 'damage')) && player.isPhaseUsing() && player.countMark('wechatyingwu_used') < 3;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.addMark('wechatlveying', 1);
                            player.addTempSkill('wechatyingwu_used', 'phaseUseAfter');
                            player.addMark('wechatyingwu_used', 1, false);
                        },
                    },
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                },
            },
            //极刘备
            wechatguizhi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer(t => player.canCompare(t));
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2('wechatguizhi'), (card, player, target) => {
                        return player.canCompare(target);
                    }, [1, 3]).set('ai', target => {
                        let player = get.player(), num = 0;
                        if (player.hasSkill('twlvren')) num += 2 * (ui.selected.targets.length + 1);
                        if (player.hasSkill('twchuanshu_effect')) num += 3;
                        let hs = player.getCards('h').sort((a, b) => get.number(b) - get.number(a));
                        let ts = target.getCards('h').sort((a, b) => get.number(b) - get.number(a));
                        if (Math.min(13, get.number(hs[0]) + num) <= get.number(ts[0])) return -1;
                        return get.effect(target, { name: 'guohe_copy2' }, player, player) / 2;
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const next = player.chooseToCompare(event.targets, card => get.number(card));
                    next.setContent('chooseToCompareMeanwhile');
                    const winner = await next.forResult('winner');
                    if (winner?.isIn()) {
                        winner.addTempSkill('wechatguizhi_effect', { player: 'phaseUseAfter' });
                        winner.addMark('wechatguizhi_effect', event.targets.length, false);
                    }
                    if (winner !== player) {
                        const card = get.cardPile2(card => get.number(card) > next.num1);
                        if (card) await player.gain(card, 'gain2');
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '出牌阶段使用前#张牌无任何次数限制' },
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            return player.isPhaseUsing();
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.removeMark(event.name, 1, false);
                            if (trigger.addCount !== false) {
                                trigger.addCount = false;
                                const stat = player.getStat().card, name = trigger.card.name;
                                if (typeof stat[name] === 'number') stat[name]--;
                            }
                        },
                        mod: {
                            cardUsable(card, player) {
                                if (player.isPhaseUsing() && player.hasMark('wechatguizhi_effect')) return Infinity;
                            },
                            aiOrder(player, card, num) {
                                if (!(player.isPhaseUsing() && player.hasMark('wechatguizhi_effect'))) return;
                                let numx = get.info(card).usable;
                                if (typeof numx === 'function') numx = numx(card, player);
                                if (typeof numx === 'number') return num + 10;
                            },
                        },
                    },
                },
            },
            wechathengyi: {
                getCards(event, player) {
                    return event.getl(player).hs.filter(card => {
                        const num = get.number(card, player);
                        return num >= Math.max(...[0].concat(player.getCards('h').map(i => get.number(i, player))));
                    }).sort((a, b) => get.number(b, player) - get.number(a, player));
                },
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'loseAfter',
                    global: ['loseAsyncAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (!event.getl?.(player)?.hs?.length) return false;
                    const cards = get.info('wechathengyi').getCards(event, player);
                    const num = get.number(cards[0], player);
                    const hs = player.getCards('h')
                    return !hs.length || hs.every(i => get.number(i, player) <= num);
                },
                usable: 1,
                async cost(event, trigger, player) {
                    let cards = get.info(event.skill).getCards(trigger, player);
                    const num = get.number(cards[0], player);
                    cards = cards.filter(i => get.number(i, player) === num).filterInD('od');
                    let str = '';
                    if (cards.length) str += `令一名其他角色获得${get.translation(cards)}，或`;
                    str += '令自己摸一张牌';
                    event.result = await player.chooseTarget(get.prompt(event.skill), str, (card, player, target) => {
                        const { cards } = get.event();
                        if (cards?.length) return true;
                        return target == player;
                    }).set('ai', target => {
                        const { player, cards } = get.event();
                        if (target === player) return get.effect(player, { name: 'draw' }, player, player) * 2;
                        return Math.sign(get.attitude(player, target)) * cards.reduce((sum, card) => sum + get.value(card, target), 0);
                    }).set('cards', cards).forResult();
                    event.result.cards = cards;
                },
                async content(event, trigger, player) {
                    const [target] = event.targets;
                    if (target === player) await player.draw(2);
                    else await target.gain(event.cards, 'gain2');
                },
            },
            //极曹植
            wechatcaiyi: {
                audio: 'ext:活动武将/audio/skill:2',
                getNum(player) {
                    return player.getCards('h').map(card => get.type2(card, player)).unique().length + Math.min(3, player.getAllHistory('useSkill', evt => evt.skill == 'wechatcaiyi').length);
                },
                trigger: {
                    player: 'loseAfter',
                    global: ['loseAsyncAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (event.getParent().name !== 'useCard' || !get.info('wechatcaiyi').getNum(player)) return false;
                    return event.getl?.(player)?.hs?.some(card => !player.hasCard(cardx => get.type2(cardx, player) === get.type2(card, player), 'h'));
                },
                usable: 1,
                async content(event, trigger, player) {
                    const num = get.info(event.name).getNum(player);
                    const cards = game.cardsGotoOrdering(get.cards(num)).cards;
                    const videoId = lib.status.videoId++, str = get.translation(event.name);
                    game.broadcastAll((player, id, cards, str) => {
                        const dialog = ui.create.dialog(str + ((player === game.me && !_status.auto) ? '：选择获得一种颜色的牌' : ''), cards);
                        dialog.videoId = id;
                    }, player, videoId, cards, str);
                    const time = get.utc();
                    game.addVideo('showCards', player, [str, get.cardsInfo(cards)]);
                    game.addVideo('delay', null, 2);
                    const list = cards.map(card => get.color(card)).unique().sort((a, b) => {
                        return ['black', 'red'].indexOf(a) - ['black', 'red'].indexOf(b);
                    }).reverse();
                    const result = list.length > 1 ? await player.chooseControl(list).set('ai', () => {
                        const { player, cards, controls } = get.event();
                        return controls.slice().sort((a, b) => {
                            return cards.filter(card => {
                                return get.color(card) === b;
                            }).reduce((sum, card) => {
                                return sum + get.value(card);
                            }, 0) - cards.filter(card => {
                                return get.color(card) === a;
                            }).reduce((sum, card) => {
                                return sum + get.value(card);
                            }, 0);
                        })[0];
                    }).set('cards', cards).forResult() : { control: list[0] };
                    const color = result.control;
                    game.broadcastAll('closeDialog', videoId);
                    const timex = 1000 - (get.utc() - time);
                    if (timex > 0) await game.delay(0, timex);
                    await player.gain(cards.filter(card => get.color(card) === color), 'gain2');
                },
            },
            wechataoxiang: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'chooseToUse',
                hiddenCard(player, name) {
                    return name === 'jiu' && !player.getStat('skill').wechataoxiang;
                },
                usable: 1,
                filterCard: () => false,
                selectCard: -1,
                popname: true,
                viewAs: { name: 'jiu' },
                precontent() {
                    player.addTempSkill('wechataoxiang_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: {
                            player: 'useCard',
                            global: 'phaseEnd',
                        },
                        filter(event, player) {
                            if (event.name === 'useCard') return event.skill === 'wechataoxiang';
                            return !player.isTurnedOver() || (player.hasSkill('wechatcaiyi', null, null, false) && !player.isTempBanned('wechatcaiyi'));
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            if (trigger.name === 'useCard') {
                                const card = get.cardPile2(card => !player.getCards('h').map(cardx => get.type2(cardx, player)).includes(get.type2(card)));
                                if (card) await player.gain(card, 'gain2');
                                else player.chat('无牌可得？！');
                            }
                            else {
                                const goon = player.hasSkill('wechatcaiyi', null, null, false) && !player.isTempBanned('wechatcaiyi');
                                const result = (!player.isTurnedOver()) ? (goon ? await player.chooseControl().set('choiceList', [
                                    '将武将牌翻面',
                                    '令【才溢】于本轮失效',
                                ]).set('prompt', '邀想：请选择一项').set('ai', () => {
                                    if (game.countPlayer() <= 1) return 0;
                                    const player = get.player();
                                    let current = _status.currentPhase || get.event().getParent('phase').player, sum = 0;
                                    if (current === player) current = player.getNext();
                                    while (current !== player) {
                                        sum += Math.sign(get.attitude(player, current));
                                        current = current.getNext();
                                    }
                                    return sum < 0 ? 0 : 1;
                                }).forResult() : { index: 0 }) : { index: 1 };
                                if (result.index === 0) await player.turnOver();
                                if (result.index === 1) player.tempBanSkill('wechatcaiyi', 'roundStart');
                            }
                        },
                    },
                },
            },
            //极姜维
            wechatgujin: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    target: 'shaMiss',
                    global: ['eventNeutralized', 'phaseEnd'],
                },
                filter(event, player, name) {
                    if (player.countMark('wechatmoulvenum') >= lib.skill.wechatmoulvenum.getMax) return false;
                    if (event.name === 'phase') return !game.hasPlayer2(target => {
                        if (target === player) return false;
                        return target.hasHistory('useCard', evt => evt.targets?.includes(player));
                    });
                    if (event.type !== 'card' || event.card.name !== 'sha' || event.player === player) return false;
                    return name === 'shaMiss' || event._neutralize_event.player == player;
                },
                forced: true,
                async content(event, trigger, player) {
                    lib.skill.wechatmoulvenum.changeNum(1 + (trigger.name !== 'phase'), player);
                },
            },
            wechatqumou: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseUseBegin' },
                async cost(event, trigger, player) {
                    event.result = await player.chooseControl('basic', 'trick', 'cancel2').set('ai', () => {
                        const player = get.player(), hs = player.getCards('hs');
                        const map = {
                            'cancel2': 4,
                            'basic': (() => {
                                const numx = Math.sqrt(Math.min(5, player.countCards('h', card => get.type2(card, player) === 'basic')));
                                return hs.filter(card => {
                                    return get.type2(card, player) === 'trick' && player.hasValueTarget(card);
                                }).length * 0.65;
                            })(),
                            'trick': (() => {
                                let num = 0;
                                const shas = hs.filter(card => {
                                    return get.name(card, player) === 'sha' && player.hasValueTarget(card, false);
                                }), numx = player.countCards('h', card => get.type2(card, player) === 'trick');
                                num += Math.min(numx, Math.max(0, shas.length - player.getCardUsable('sha'))) * 0.65;
                                num += Math.min(player.getCardUsable('sha') + numx, shas.filter(card => {
                                    return game.countPlayer(current => player.canUse(card, current) && get.effect(current, card, player, player) > 0) > 1;
                                }).length) * 1.1;
                                const taos = Math.min(player.maxHp - player.hp, hs.filter(card => get.name(card, player) === 'tao').length);
                                num += taos * player.getDamagedHp() * 1.2;
                                return num;
                            })(),
                        };
                        return get.event().controls.slice().sort((a, b) => map[b] - map[a])[0];
                    }).set('prompt', get.prompt2('wechatqumou')).forResult();
                    const control = event.result.control;
                    event.result.bool = (control !== 'cancel2');
                    event.result.cost_data = control;
                },
                async content(event, trigger, player) {
                    const type = event.cost_data, eff = type === 'basic' ? 'trick' : 'basic';
                    player.addTempSkill('wechatqumou_ban');
                    player.markAuto('wechatqumou_ban', [type]);
                    player.addSkill('wechatqumou_eff');
                    player.addMark('wechatqumou_eff_' + eff, 3, false);
                    player.markSkill('wechatqumou_eff');
                },
                subSkill: {
                    ban: {
                        marktext: '屈',
                        charlotte: true,
                        onremove: true,
                        intro: { content: '不能使用、打出、弃置$牌' },
                        mod: {
                            cardEnabled2(card, player) {
                                if (player.getStorage('wechatqumou_ban').includes(get.type2(card))) return false;
                            },
                            cardDiscardable(card, player) {
                                if (player.getStorage('wechatqumou_ban').includes(get.type2(card))) return false;
                            },
                        },
                    },
                    eff: {
                        marktext: '谋',
                        charlotte: true,
                        onremove(player) {
                            const skills = Object.keys(player.storage).filter(str => str.startsWith('wechatqumou_eff_'));
                            if (skills.length) {
                                for (const i of skills) delete player.storage[i];
                            }
                        },
                        intro: {
                            markcount(静以修身, player) {
                                const skills = Object.keys(player.storage).filter(str => str.startsWith('wechatqumou_eff_'));
                                return skills.reduce((num, skill) => num + player.countMark(skill), 0);
                            },
                            content(宁静致远, player) {
                                const skills = Object.keys(player.storage).filter(str => str.startsWith('wechatqumou_eff_') && player.hasMark(str));
                                return skills.map(str => {
                                    return '使用的下' + player.countMark(str) + '张' + get.translation(str.slice('wechatqumou_eff_'.length)) + '牌无距离和次数限制且可以额外指定一个目标';
                                }).join('<br>');
                            },
                        },
                        mod: {
                            targetInRange(card, player) {
                                if (player.hasMark('wechatqumou_eff_' + get.type2(card)) || card?.storage?._wechatqumou_eff) return true;
                            },
                            cardUsable(card, player) {
                                if (player.hasMark('wechatqumou_eff_' + get.type2(card)) || card?.storage?._wechatqumou_eff) return Infinity;
                            },
                        },
                        audio: 'wechatqumou',
                        trigger: { player: ['useCard1', 'useCard2'] },
                        filter(event, player, name) {
                            if (name === 'useCard1') return player.hasMark('wechatqumou_eff_' + get.type2(event.card));
                            if (!event.card?.storage?._wechatqumou_eff || !event.targets?.length) return false;
                            const info = get.info(event.card);
                            if (info.multitarget || info.allowMultiple === false) return false;
                            return game.hasPlayer(current => {
                                return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                            });
                        },
                        direct: true,
                        async content(event, trigger, player) {
                            if (event.triggername === 'useCard1') {
                                game.broadcastAll(event => {
                                    if (!event.card.storage) event.card.storage = {};
                                    event.card.storage._wechatqumou_eff = true;
                                }, trigger);
                                player.removeMark(event.name + '_' + get.type2(trigger.card), 1, false);
                                player[(Boolean(get.info(event.name).intro.markcount(null, player)) ? 'mark' : 'unmark') + 'Skill'](event.name);
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    const stat = player.getStat().card, name = trigger.card.name;
                                    if (typeof stat[name] === 'number') stat[name]--;
                                }
                            }
                            else {
                                const result = await player.chooseTarget(get.prompt(event.name), (card, player, target) => {
                                    const trigger = get.event().getTrigger();
                                    if (trigger.targets.includes(target)) return false;
                                    return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                                }).set('prompt2', '为' + get.translation(trigger.card) + '增加一个目标').set('ai', target => {
                                    const trigger = get.event().getTrigger(), player = get.player();
                                    return get.effect(target, trigger.card, player, player);
                                }).forResult();
                                if (result?.bool && result.targets?.length) {
                                    player.logSkill(event.name, result.targets);
                                    trigger.targets.addArray(result.targets);
                                    game.log(result.targets, '成为了', trigger.card, '的额外目标');
                                }
                            }
                        },
                    },
                },
            },
            //极祝融
            wechatxiangwei: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return player.hasUseTarget(new lib.element.VCard({ name: 'nanman' }));
                },
                popup: false,
                async cost(event, trigger, player) {
                    const card = new lib.element.VCard({ name: 'nanman' });
                    const next = player.chooseUseTarget(get.prompt2('wechatxiangwei'), card, false);
                    next.logSkill = 'wechatxiangwei';
                    event.result = await next.forResult();
                    event.result.cost_data = next;
                },
                async content(event, trigger, player) {
                    const targets = game.filterPlayer(target => target !== player && !target.hasHistory('damage', evt => evt.getParent('chooseUseTarget') === event.cost_data));
                    const num = game.countPlayer2(target => target.hasHistory('damage', evt => evt.getParent('chooseUseTarget') === event.cost_data));
                    const result = await player.chooseControl().set('choiceList', [
                        '本回合对' + get.translation(targets) + '使用牌无次数限制',
                        '本回合使用的下' + get.cnNumber(num) + '张【杀】的伤害+1',
                    ]).set('ai', () => {
                        const player = get.player();
                        return player.hasSha() && player.hasValueTarget(new lib.element.VCard({ name: 'sha' })) ? 1 : 0;
                    }).forResult();
                    if (result.index === 0) {
                        player.line(targets);
                        player.addTempSkill('wechatxiangwei_xiang');
                        player.markAuto('wechatxiangwei_xiang', targets);
                    }
                    else {
                        player.addTempSkill('wechatxiangwei_wei');
                        player.addMark('wechatxiangwei_wei', num, false);
                    }
                },
                subSkill: {
                    xiang: {
                        charlotte: true,
                        onremove: true,
                        marktext: '象',
                        intro: { content: 'players' },
                        mod: {
                            cardUsableTarget(card, player, target) {
                                if (player.getStorage('wechatxiangwei_xiang').includes(target)) return true;
                            },
                        },
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            if (event.addCount === false) return false;
                            return event.targets?.some(i => player.getStorage('wechatxiangwei_xiang').includes(i));
                        },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.addCount = false;
                            const stat = player.getStat().card, name = trigger.card.name;
                            if (typeof stat[name] === 'number') stat[name]--;
                        },
                    },
                    wei: {
                        charlotte: true,
                        onremove: true,
                        marktext: '威',
                        intro: { content: '使用的下#张【杀】的伤害+1' },
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.card.name === 'sha' && player.hasMark('wechatxiangwei_wei');
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.removeMark(event.name, 1, false);
                            trigger.baseDamage++;
                            game.log(trigger.card, '的伤害', '#y+1');
                        },
                    },
                },
            },
            wechatyanfeng: {
                audio: 'ext:活动武将/audio/skill:2',
                shiwuSkill: true,
                categories: () => ['奋武技'],
                /* mod: {
                    targetInRange(card, player, target) {
                        if (card.wechatyanfeng) return true;
                    },
                }, */
                enable: 'phaseUse',
                onChooseToUse(event) {
                    if (!game.online && typeof event.wechat_shiwuAble !== 'number') {
                        const player = event.player;
                        event.set('wechat_shiwuAble', player.getRoundHistory('damage', () => true).concat(player.getRoundHistory('sourceDamage', () => true)).reduce((sum, evt) => sum + evt.num, 0) + 1);
                    }
                },
                usable(skill, player) {
                    return Math.min(5, _status.event.wechat_shiwuAble);
                },
                viewAs: {
                    name: 'sha',
                    nature: 'fire',
                    wechatyanfeng: true,
                },
                locked: false,
                filter(event, player) {
                    return player.countCards('hes') > 0;
                },
                filterCard: true,
                position: 'hes',
                popname: true,
                check(card) {
                    return 6.3 - get.value(card);
                },
                precontent() {
                    player.addTempSkill('wechatyanfeng_effect');
                },
                ai: {
                    order(item, player) {
                        return get.order({ name: 'sha' }, player) * 0.99;
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            if (!event.targets || event.targets.length !== 1 || !event.targets[0]?.isIn()) return false;
                            return event.skill === 'wechatyanfeng' && !player.hasHistory('sourceDamage', evt => evt.card === event.card);
                        },
                        forced: true,
                        logTarget: 'targets',
                        async content(event, trigger, player) {
                            const [target] = trigger.targets, str = get.translation(player);
                            const result = await target.chooseControl().set('choiceList', [
                                '对' + str + '造成1点伤害，然后随机弃置一张牌',
                                '令' + str + '摸一张牌，其本回合对你使用的下一张【杀】无效',
                            ]).set('ai', () => {
                                const player = get.player(), source = get.event().getTrigger().player;
                                if (get.damageEffect(source, player, player) > 0) return 0;
                                return get.attitude(player, source) > 0 ? 1 : 0;
                            }).forResult();
                            target.line(player);
                            if (result.index === 0) {
                                await player.damage(1, target);
                            }
                            else {
                                await player.draw();
                                player.addTempSkill('wechatyanfeng_buff');
                                if (!player.storage['wechatyanfeng_buff'][target.playerid]) {
                                    player.storage['wechatyanfeng_buff'][target.playerid] = [0, target];
                                }
                                player.storage['wechatyanfeng_buff'][target.playerid][0]++;
                            }
                        },
                    },
                    buff: {
                        charlotte: true,
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = {};
                        },
                        onremove: true,
                        intro: {
                            markcount(storage = {}) {
                                return Object.values(storage).reduce((sum, list) => sum + list[0], 0);
                            },
                            content(storage = {}) {
                                return Object.values(storage).filter(list => list[0] > 0).map(list => {
                                    return '对' + get.translation(list[1]) + '使用的下' + list[0] + '张【杀】无效';
                                }).join('<br>');
                            },
                        },
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.card.name === 'sha' && event.targets?.some(target => {
                                return player.storage['wechatyanfeng_buff']?.[target.playerid]?.[0] > 0;
                            });
                        },
                        forced: true,
                        logTarget(event, player) {
                            return event.targets.filter(target => {
                                return player.storage['wechatyanfeng_buff'][target.playerid][0] > 0;
                            });
                        },
                        content() {
                            game.log(trigger.card, '被无效了');
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                            for (const i of event.targets) player.storage[event.name][i.playerid][0]--;
                            player[(Boolean(get.info(event.name).intro.markcount(player.storage[event.name])) ? 'mark' : 'unmark') + 'Skill'](event.name);
                        },
                        ai: {
                            effect: {
                                player(card, player, target, effect) {
                                    if (card.name === 'sha' && player.storage['wechatyanfeng_buff']?.[target.playerid]?.[0] > 0) return effect * 0.5;
                                },
                            },
                        },
                    },
                },
            },
            //极何太后
            wechatfuyin: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    global: 'phaseBefore',
                    player: ['enterGame', 'phaseDrawBegin2'],
                },
                filter(event, player) {
                    if (event.name == 'phaseDraw') return !event.numFixed;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                async cost(event, trigger, player) {
                    if (trigger.name == 'phaseDraw') event.result = { bool: true };
                    else {
                        event.result = await player.chooseTarget(get.prompt2(event.skill), lib.filter.notMe).set('ai', target => {
                            return 1 - get.attitude(get.player(), target);
                        }).forResult();
                    }
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'phaseDraw') {
                        trigger.num += 2;
                        player.when('phaseDrawEnd')
                            .filter(evt => evt == trigger && game.hasPlayer(current => current.countMark('wechatfuyin_effect')) && player.countCards('he'))
                            .step(async () => {
                                const targets = game.filterPlayer(current => current.countMark('wechatfuyin_effect')).sortBySeat();
                                for (const target of targets) {
                                    if (player.countCards('he')) await player.chooseToGive(target, 'he', Math.min(2, player.countCards('he')), true);
                                }
                            });
                    }
                    else {
                        const { targets: [target] } = event;
                        target.addSkill(event.name + '_effect');
                        target.addMark(event.name + '_effect', 1);
                    }
                },
                subSkill: {
                    effect: {
                        trigger: { player: 'phaseDrawBefore' },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            trigger.cancel();
                        },
                        intro: { content: 'mark' },
                    },
                }
            },
            wechatqiangji: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: ['gainAfter', 'loseAsyncAfter'] },
                filter(event, player, name, target) {
                    if (!event.getg) return false;
                    return target?.isIn() && target.countCards('h');
                },
                getIndex(event, player) {
                    if (!event.getg) return false;
                    return game.filterPlayer(current => {
                        if (current == _status.currentPhase || current == player) return false;
                        return event.getg(current).length > 1 && current.countCards('h');
                    }).sortBySeat();
                },
                usable: 1,
                logTarget: (event, player, name, target) => target,
                prompt2: (event, player, name, target) => `猜测${get.translation(target)}手牌中最多的一种花色，若你猜测正确，则你对其造成1点伤害`,
                check: (event, player, name, target) => get.damageEffect(target, player, player) > 0,
                async content(event, trigger, player) {
                    const { targets: [target], name } = event;
                    const cards = target.getCards("h"), map = {};
                    if (!cards.length) {
                        player.chat('这还用猜？');
                        game.log(player, '猜测', '#g正确');
                        await target.damage();
                        return;
                    }
                    for (const card of cards) {
                        const suit = get.suit(card);
                        if (typeof map[suit] != 'number') map[suit] = 0;
                        map[suit]++;
                    }
                    const list = [];
                    for (let i in map) {
                        if (map[i] > 0) list.push([i, map[i]]);
                    }
                    list.sort((a, b) => b[1] - a[1]);
                    const control = await player.chooseControl(lib.suit.slice()).set('prompt', `${get.translation(name)}：猜测${get.translation(target)}手牌中最多的花色`).set('ai', () => {
                        const { player, target, list, controls } = get.event();
                        if (player.hasSkillTag('viewHandcard', null, target, true)) return list[0][0];
                        if (controls.includes('diamond') && Math.random() < 0.3) return 'diamond';
                        return controls.randomGet();
                    }).set('target', target).set('list', list).forResultControl();
                    player.chat('我猜是' + get.translation(control) + '！');
                    game.log(player, '猜测为', '#y' + control);
                    if (!event.isMine() && !event.isOnline()) await game.delayx();
                    if (list.some(listx => listx[1] == list[0][1] && listx[0] == control)) {
                        target.chat('这么准？');
                        player.chat('喜');
                        game.log(player, '猜测', '#g正确');
                        await target.damage();
                    }
                    else {
                        target.chat('猜错了！');
                        player.chat('悲');
                        game.log(player, '猜测', '#y错误');
                    }
                },
            },
            //极张春华
            wechatjuejue: {
                audio: 'ext:活动武将/audio/skill:2',
                init(player, skill) {
                    player.addSkill(skill + '_record');
                },
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return player.hasSkill('wechatjuejue_lost');
                },
                locked: true,
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.skill), true).set('ai', target => {
                        const player = get.player();
                        return get.effect(target, { name: 'losehp' }, player, player);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].loseHp();
                },
                subSkill: {
                    record: {
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            if (player.countCards('h') || player.hasSkill('wechatjuejue_lost')) return false;
                            const evt = event.getl(player);
                            return evt?.hs?.length;
                        },
                        charlotte: true,
                        silent: true,
                        async content(event, trigger, player) {
                            player.addTempSkill('wechatjuejue_lost');
                        },
                    },
                    lost: { charlotte: true }
                }
            },
            wechatqingshi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!event.targets || event.targets.length !== 1 || event.targets[0] === event.player) return false;
                    const list = [event.targets[0], event.player];
                    return list.includes(player) && list.every(target => target.countDiscardableCards(player, 'he'));
                },
                logTarget(event, player) {
                    return player == event.player ? event.targets[0] : event.player;
                },
                check(event, player) {
                    const { targets: [target], card } = event;
                    if (player == event.player) return get.effect(target, { name: 'guohe_copy2' }, player, player) >= get.effect(player, { name: 'guohe_copy2' }, player, player) || get.tag(card, 'damage') && get.attitude(player, target) < 0;
                    return get.effect(event.player, { name: 'guohe_copy2' }, player, player) >= get.effect(player, { name: 'guohe_copy2' }, player, player) || !get.tag(card, 'damage') && get.attitude(player, target) < 0;;
                },
                async content(event, trigger, player) {
                    const num = Math.max(1, player.getDamagedHp());
                    for (const target of [trigger.targets[0], trigger.player].sortBySeat()) {
                        if (target.countDiscardableCards(player, 'he')) await player.discardPlayerCard(target, 'he', num, true)
                    }
                    player.when({ global: 'useCardAfter' })
                        .filter(evt => evt == trigger && game.hasPlayer(current => current.hasHistory('damage', evtx => evtx.card == evt.card)))
                        .then(() => player.draw(numx))
                        .vars({ numx: num });
                },
            },
            wechatqingjue: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'dying' },
                filter(event, player) {
                    return player.hp <= 0;
                },
                limited: true,
                skillAnimation: true,
                animationColor: 'water',
                check(event, player) {
                    return player.countCards('hs', card => player.canSaveCard(card, player)) < 1 - player.hp;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.recoverTo(1);
                    player.skip('phaseDraw');
                },
            },
            //极曹叡
            wechatweicheng: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(target => player.canCompare(target));
                },
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                selectTarget() {
                    const player = get.player();
                    return [Math.ceil(game.countPlayer(target => player.canCompare(target)) / 2), Infinity];
                },
                multitarget: true,
                multiline: true,
                async content(event, trigger, player) {
                    const { result: { winner } } = await player.chooseToCompare(event.targets, card => get.number(card)).setContent('chooseToCompareMeanwhile');
                    if (winner) {
                        const sha = get.autoViewAs({ name: 'sha', isCard: true });
                        const targets = event.targets.filter(i => i != winner && winner.canUse(sha, i, false));
                        event.losers = targets;
                        if (!targets.length) return;
                        const bool = await winner.chooseBool(`视为对${get.translation(targets)}使用一张【杀】？`).set('choice', targets.reduce((num, i) => num + get.effect(i, sha, winner, winner), 0) > 0).forResultBool();
                        if (bool) {
                            winner.when({ global: 'useCardAfter' })
                                .filter(evt => evt.card.name == 'sha' && evt.getParent() == event && (() => {
                                    const targets = event.losers.filter(i => i.hasHistory('useCard', evtx => evtx.respondTo?.[1] == evt.card && evtx.card.name == 'shan'));
                                    return targets.length > 0 && event.losers.some(i => !targets.includes(i) && i.isIn());
                                })())
                                .then(() => {
                                    const targets = losers.filter(i => i.isIn() && !i.hasHistory('useCard', evtx => evtx.respondTo?.[1] == trigger.card && evtx.card.name == 'shan'));
                                    if (targets.length) targets.forEach(i => i.loseHp());
                                })
                                .assign({ forceDie: true })
                                .vars({ losers: targets });
                            await winner.useCard(sha, targets, false);
                        }
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        player: 1,
                        target: -1,
                    },
                },
            },
            wechatbianguan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'die',
                    global: 'chooseToCompareAfter',
                },
                filter(event, player) {
                    if (event.name == 'die') return game.hasPlayer(current => player != current && game.hasPlayer(currentx => current.canCompare(currentx)));
                    if (player.hasSkill('wechatbianguan_record', null, null, false)) return false;
                    return event.targets?.length && event.lose_list.some(list => list[1].filter(card => get.tag(card, 'damage') || get.type(card) == 'basic').someInD());
                },
                locked: true,
                forceDie: true,
                async cost(event, trigger, player) {
                    event.result = {
                        bool: true,
                        targets: trigger.name == 'die' ? game.filterPlayer(current => player != current && game.hasPlayer(currentx => current.canCompare(currentx))).sortBySeat() : [],
                    };
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'die') {
                        const { targets } = event;
                        const list = targets.slice(1).filter(current => targets[0].canCompare(current));
                        const { result: winner } = await targets[0].chooseToCompare(list, card => get.number(card)).setContent('chooseToCompareMeanwhile');
                        for (const i of list.concat([targets[0]]).remove(winner).sortBySeat()) await i.loseHp();
                    }
                    else {
                        player.addTempSkill(event.name + '_record', { global: 'roundStart' });
                        await player.gain(trigger.lose_list.map(list => list[1].filter(card => get.tag(card, 'damage') || get.type(card) == 'basic').filterInD()).flat(), 'gain2');
                    }
                },
                subSkill: { record: { charlotte: true } }
            },
            //极张飞
            wechathupo: {
                audio: 'ext:活动武将/audio/skill:2',
                shiwuSkill: true,
                categories: () => ['奋武技'],
                enable: 'phaseUse',
                onChooseToUse(event) {
                    if (!game.online && typeof event.wechat_shiwuAble !== 'number') {
                        const player = event.player;
                        event.set('wechat_shiwuAble', player.getRoundHistory('damage', () => true).concat(player.getRoundHistory('sourceDamage', () => true)).reduce((sum, evt) => sum + evt.num, 0) + 1);
                    }
                },
                usable(skill, player) {
                    return Math.min(5, _status.event.wechat_shiwuAble);
                },
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    return game.hasPlayer(current => get.info('wechathupo').filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target.countCards('h') && target != player;
                },
                async content(event, trigger, player) {
                    const { target } = event;
                    await player.showHandcards();
                    await target.showHandcards();
                    if ([player, target].every(current => !current.countCards('he'))) return;
                    const goon = target.getCards('he').filter(card => lib.filter.canBeGained(card, target, player)).some(card => player.hasCard(cardx => get.name(card) !== get.name(cardx), 'he'));
                    let result;
                    if (goon && [player, target].some(current => current.countDiscardableCards(player, 'he'))) result = await player
                        .chooseControl()
                        .set('choiceList', [`弃置你与${get.translation(target)}一各牌名的所有牌`, `获得${get.translation(target)}一张你没有的牌名的牌`])
                        .set('ai', () => {
                            const { player, target } = get.event();
                            return target.getCards('he').some(card => {
                                if (!lib.filter.cardDiscardable(card, player)) return false;
                                return get.effect(target, { name: 'guohe_copy2' }, player, player) * target.countCards('he', { name: card.name }) > Math.max(get.effect(target, { name: 'shunshou_copy2' }, player, player), get.effect(player, { name: 'guohe_copy2' }, player, player) * player.countCards('he', { name: card.name }))
                            }) ? 0 : 1;
                        })
                        .set('target', target)
                        .forResult();
                    else result = { index: goon ? 1 : 0 };
                    if (result.index == 0) {
                        const names = [player.getCards('he'), target.getCards('he')].filter(card => lib.filter.cardDiscardable(card, player)).flat().map(i => get.name(i)).toUniqued();
                        let name;
                        if (names.length == 1) name == names[0];
                        else {
                            const links = await player.chooseButton([`请选择一个牌名`, [names, 'vcard']], true).set('ai', button => {
                                const { player, target, names } = get.event(), { link } = button;
                                const gett = (name) => target.getCards('he').filter(card => lib.filter.cardDiscardable(card, player) && get.name(card) == name).length - player.getCards('he').filter(card => lib.filter.cardDiscardable(card, player) && get.name(card) == name).length;
                                return link[2] == names.sort((a, b) => gett(b) - gett(a))[0] ? 10 : 0;
                            }).set('target', target).set('names', names).forResultLinks();
                            if (links?.length) name = links[0][2];
                        }
                        if (!name) return;
                        for (const i of [player, target]) {
                            const cards = i.getCards('he').filter(card => lib.filter.cardDiscardable(card, player) && get.name(card) == name)
                            if (cards.length) await i.discard(cards).set('discard', player);
                        }
                    } else {
                        await player.gain(target.getCards('he', card => {
                            if (!lib.filter.canBeGained(card, target, player)) return false;
                            return !player.hasCard(cardx => get.name(cardx) == get.name(card), 'he');
                        }).randomGet(), target, 'giveAuto');
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        target(player, target) {
                            return -1 * target.countCards('h');
                        },
                    },
                },
            },
            wechatrehupo: {
                audio: 'wechathupo',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.countCards('h') || player.getStorage('wechatrehupo_used').length > 1) return false;
                    return game.hasPlayer(current => get.info('wechatrehupo').filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target.countCards('h') && target != player;
                },
                async content(event, trigger, player) {
                    const { target } = event;
                    await player.showHandcards();
                    await target.showHandcards();
                    if ([player, target].every(current => !current.countCards('he'))) return;
                    const goon1 = target.getCards('he').filter(card => lib.filter.canBeGained(card, target, player)).some(card => player.hasCard(cardx => get.name(card) !== get.name(cardx), 'he')) && !player.getStorage(event.name + '_used').includes(1);
                    const goon2 = [player, target].some(current => current.countDiscardableCards(player, 'he')) && !player.getStorage(event.name + '_used').includes(0);
                    if (!goon1 && !goon2) return;
                    let result;
                    if (goon1 && goon2) result = await player
                        .chooseControl()
                        .set('choiceList', [`弃置你与${get.translation(target)}一各牌名的所有牌`, `获得${get.translation(target)}一张你没有的牌名的牌`])
                        .set('ai', () => {
                            const { player, target } = get.event();
                            return target.getCards('he').some(card => {
                                if (!lib.filter.cardDiscardable(card, player)) return false;
                                return get.effect(target, { name: 'guohe_copy2' }, player, player) * target.countCards('he', { name: card.name }) > Math.max(get.effect(target, { name: 'shunshou_copy2' }, player, player), get.effect(player, { name: 'guohe_copy2' }, player, player) * player.countCards('he', { name: card.name }))
                            }) ? 0 : 1;
                        })
                        .set('target', target)
                        .forResult();
                    else result = { index: goon1 ? 1 : 0 };
                    player.addTempSkill(event.name + '_used', 'phaseAfter');
                    player.markAuto(event.name + '_used', [result.index]);
                    if (result.index == 0) {
                        const names = [player.getCards('he'), target.getCards('he')].filter(card => lib.filter.cardDiscardable(card, player)).flat().map(i => get.name(i)).toUniqued();
                        let name;
                        if (names.length == 1) name == names[0];
                        else {
                            const links = await player.chooseButton([`请选择一个牌名`, [names, 'vcard']], true).set('ai', button => {
                                const { player, target, names } = get.event(), { link } = button;
                                const gett = (name) => target.getCards('he').filter(card => lib.filter.cardDiscardable(card, player) && get.name(card) == name).length - player.getCards('he').filter(card => lib.filter.cardDiscardable(card, player) && get.name(card) == name).length;
                                return link[2] == names.sort((a, b) => gett(b) - gett(a))[0] ? 10 : 0;
                            }).set('target', target).set('names', names).forResultLinks();
                            if (links?.length) name = links[0][2];
                        }
                        if (!name) return;
                        for (const i of [player, target]) {
                            const cards = i.getCards('he').filter(card => lib.filter.cardDiscardable(card, player) && get.name(card) == name)
                            if (cards.length) await i.discard(cards).set('discard', player);
                        }
                    } else {
                        await player.gain(target.getCards('he', card => {
                            if (!lib.filter.canBeGained(card, target, player)) return false;
                            return !player.hasCard(cardx => get.name(cardx) == get.name(card), 'he');
                        }).randomGet(), target, 'giveAuto');
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        target(player, target) {
                            const goon1 = target.getCards('he').filter(card => lib.filter.canBeGained(card, target, player)).some(card => player.hasCard(cardx => get.name(card) !== get.name(cardx), 'he')) && !player.getStorage('wechatrehupo_used').includes(1);
                            const goon2 = [player, target].some(current => current.countDiscardableCards(player, 'he')) && !player.getStorage('wechatrehupo_used').includes(0);
                            if (!goon1 && !goon2) return 0;
                            return target.countCards('h') * get.sgnAttitude(player, target);
                        },
                    },
                },
                subSkill: {
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                }
            },
            wechathanxing: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    if (!event.targets?.includes(player)) return false;
                    return player.getHistory('useCard', evt => evt.targets?.includes(player)).indexOf(event) == 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    player.addSkill(event.name + '_damage');
                    player.addMark(event.name + '_damage', 1, false);
                },
                subSkill: {
                    damage: {
                        trigger: { source: 'damageBegin1' },
                        charlotte: true,
                        onremove: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            trigger.num += player.countMark(event.name);
                            player.removeSkill(event.name);
                        },
                        intro: { content: '下次造成伤害时，此伤害+#' },
                    }
                }
            },
            //极王异
            wechatzuoqing: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    const stat = player.getStat('skill').wechatzuoqing_targets;
                    return !stat || !stat.includes(target);
                },
                filter(event, player) {
                    return game.hasPlayer(current => lib.skill.wechatzuoqing.filterTarget(null, player, current));
                },
                chooseButton: {
                    dialog(event, player) {
                        const dialog = ui.create.dialog(
                            `佐卿：请选择要执行的选项`,
                            [
                                [
                                    ['lose', '失去1点体力'],
                                    ['equip', '弃置所有装备牌'],
                                ],
                                'textbutton',
                            ],
                            'hidden'
                        );
                        return dialog;
                    },
                    filter(button, player) {
                        const target = get.event().getParent().result.targets[0];
                        const { link } = button;
                        if (link === 'equip' && !player.countCards('he', { type: 'equip' })) return false;
                        return true;
                    },
                    check(button) {
                        const player = get.player(), target = get.event().getParent().result.targets[0];
                        const { link } = button;
                        if (link === 'equip' && player.countCards('he', { type: 'equip' }) < 3) return 2;
                        return 1;
                    },
                    backup(links) {
                        return {
                            audio: 'wechatzuoqing',
                            target: get.event().result.targets[0],
                            link: links[0],
                            filterTarget(card, player, target) {
                                return target === lib.skill.wechatzuoqing_backup.target;
                            },
                            selectTarget: -1,
                            async content(event, trigger, player) {
                                const { skill: { wechatzuoqing_backup: { link } } } = lib;
                                const { target } = event;
                                const stat = player.getStat('skill');
                                if (!stat.wechatzuoqing_targets) stat.wechatzuoqing_targets = [];
                                stat.wechatzuoqing_targets.push(target);
                                if (link === 'lose') await player.loseHp();
                                else await player.discard(player.getCards('he').filter(card => get.type(card) == 'equip'));
                                const num = Math.max(1, player.getDamagedHp());
                                const { result: { index } } = await player
                                    .chooseControl('使用', '打出')
                                    .set('prompt', '请选择一项')
                                    .set('ai', () => {
                                        const { player, num, controls } = get.event();
                                        if (!player.hasMark('wechatzuoqing_use')) return '使用';
                                        return controls.randomGet();
                                    }).set('num', num)
                                const skill = 'wechatzuoqing_' + (index == 0 ? 'use' : 'respond');
                                target.addSkill(skill);
                                target.addMark(skill, num, false);
                            }
                        }
                    },
                    prompt(links) {
                        return '点击“确定”以执行效果';
                    },
                },
                ai: {
                    order(item, player) {
                        if ((player.hp < 3 && get.effect(player, { name: 'losehp' }, player, player) < 0) && player.countCards('he', { type: 'equip' }) > 2) return 0.1;
                        if (game.hasPlayer(current => get.attitude(player, current) > 0 && lib.skill.wechatzuoqing.filterTarget(null, player, current))) return 10;
                        return 1;
                    },
                    result: {
                        target(player, target) {
                            return target.hasSha() ? 1.2 : 1;
                        },
                    },
                },
                subSkill: {
                    backup: {},
                    use: {
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.card.name == 'sha';
                        },
                        charlotte: true,
                        onremove: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            player.removeMark(event.name, 1, false);
                            await player.draw();
                            if (!player.hasMark(event.name)) player.removeSkill(event.name);
                        },
                        intro: { content: '剩余#次使用【杀】摸牌的机会' },
                    },
                    respond: {
                        trigger: { player: 'respond' },
                        filter(event, player) {
                            return event.card.name == 'sha';
                        },
                        charlotte: true,
                        onremove: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            player.removeMark(event.name, 1, false);
                            await player.draw();
                            if (!player.hasMark(event.name)) player.removeSkill(event.name);
                        },
                        intro: { content: '剩余#次打出【杀】摸牌的机会' },
                    }
                }
            },
            wechatjianchou: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'damageEnd' },
                filter(event, player) {
                    if (!event.player.isIn() || player.countMark('wechatjianchou_used') > 1 || !event.card || !['sha', 'juedou'].includes(event.card.name)) return false;
                    return event.source?.isIn() && event.player.canUse({ name: 'juedou', isCard: true }, event.source);
                },
                check(event, player) {
                    const juedou = get.autoViewAs({ name: 'juedou', isCard: true });
                    return get.effect(event.source, juedou, event.player, player) > 0;
                },
                logTarget(event, player) {
                    return [event.player, event.source];
                },
                line: false,
                async content(event, trigger, player) {
                    player.line2([trigger.player, trigger.source]);
                    await game.delay();
                    player.addTempSkill(event.name + '_used', 'roundStart');
                    player.addMark(event.name + '_used', 1, false);
                    const { player: target, source } = trigger;
                    const juedou = get.autoViewAs({ name: 'juedou', isCard: true });
                    target.when({ global: 'useCardAfter' })
                        .filter(evt => evt == trigger.getParent(2))
                        .step(async () => {
                            if (target.canUse(juedou), source) await target.useCard(juedou, source, 'noai');
                        });
                },
                subSkill: {
                    used: {
                        charlotte: true,
                        onremove: true,
                    }
                }
            },
            //李焦
            wechatzuoyou: {
                audio: 'mbzuoyou',
                inherit: 'mbzuoyou',
                mark: false,
                zhuanhuanji: false,
                filterTarget: true,
                async content(event, trigger, player) {
                    const { target } = event;
                    event.result = event.result || (target.countCards('h') > 0 ? await player.chooseControl().set('choiceList', [
                        `令${get.translation(target)}摸三张牌，然后弃置两张手牌`,
                        `令${get.translation(target)}弃置一张手牌，然后其回复1点体力`,
                    ]).set('ai', () => {
                        const player = get.player(), target = get.event().getParent().target;
                        let eff1 = (player, target) => (get.recoverEffect(target, player, player) + get.effect(target, { name: 'guohe_copy', position: 'h' }, target, player));
                        let eff2 = (player, target) => get.effect(target, { name: 'draw' }, player, player);
                        if (player == target) {
                            return eff1(player, target) >= eff2(player, target) ? 1 : 0;
                        } return (eff1(player, target) + eff2(player, player)) >= (eff1(player, player) + eff2(player, target)) ? 1 : 0;
                    }).forResult() : { index: 0 });
                    if (event.result.index === 0) {
                        await target.draw(3);
                        if (target.countCards('h')) await target.chooseToDiscard(2, true, 'h');
                    }
                    else {
                        if (target.countCards('h')) {
                            const resultx = await target.chooseToDiscard(target === player ? '佐佑' : `${get.translation(player)}对你发动了【佐佑】`, '请弃置一张手牌，然后回复1点体力', true).forResult();
                            if (resultx.bool) await target.recover();
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        if (game.hasPlayer(current => {
                            return current !== player && get.effect(current, 'wechatzuoyou', player, player) > 0;
                        })) return 10;
                        return 2;
                    },
                    result: {
                        player(player, target) {
                            let eff1 = (player, target) => (get.recoverEffect(target, player, player) + get.effect(target, { name: 'guohe_copy', position: 'h' }, target, player));
                            let eff2 = (player, target) => get.effect(target, { name: 'draw' }, player, player);
                            if (player.hasSkill('wechaishishou')) {
                                if (player == target) return Math.max(eff1(player, target), eff2(player, target));
                                return Math.max(eff1(player, target) + eff2(player, player), eff1(player, player) + eff2(player, target));
                            }
                            return Math.max(eff1(player, target), eff2(player, target));
                        },
                        target(player, target) {
                            const att = get.attitude(player, target);
                            if (att <= 0 && target.isHealthy() && target.countCards('h')) return -1;
                            return 1;
                        },
                    },
                },
            },
            wechatshishou: {
                audio: 'mbshishou',
                trigger: { player: 'wechatzuoyouAfter' },
                filter(event, player) {
                    if (event.result.index === 0 && !player.countCards('h')) return false;
                    return event.target !== player;
                },
                forced: true,
                async content(event, trigger, player) {
                    event.target = player;
                    event.result = { index: 1 - trigger.result.index };
                    await get.info('wechatzuoyou').content(event, trigger, player);
                },
                ai: { combo: 'wechatzuoyou' },
            },
            // 嵇康
            wechatjikai: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!_status.currentPhase) return false;
                    return player != _status.currentPhase ? event.player == player && event.targets?.some(current => player != current) : event.player != player && event.targets?.includes(player);
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.directHit.addArray(player != _status.currentPhase ? game.filterPlayer(current => player != current) : [player]);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return player != _status.currentPhase;
                    },
                },
            },
            wechatqingkuang: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.hasCard(card => get.info('wechatqingkuang').filterCard(card, player), 'he');
                },
                filterCard(card, player) {
                    if (!lib.filter.cardDiscardable(card, player, 'wechatqingkuang')) return false;
                    return !player.getStorage('wechatqingkuang_tag').includes(get.color(card));
                },
                position: 'he',
                check(card) {
                    return 6 - get.value(card);
                },
                async content(event, trigger, player) {
                    player.addTempSkill(event.name + '_tag');
                    player.markAuto(event.name + '_tag', [get.color(event.cards[0])]);
                    await player.draw(2).set('gaintag', [event.name + '_tag']);
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
                subSkill: {
                    tag: {
                        mod: {
                            aiOrder(player, card, num) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('wechatqingkuang_tag')) return num + 0.1;
                            },
                            aiValue(player, card, num) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('wechatqingkuang_tag')) return num / 10;
                            },
                            aiUseful() {
                                return lib.skill.wechatqingkuang_tag.mod.aiValue.apply(this, arguments);
                            },
                        },
                        charlotte: true,
                        onremove(player, skill) {
                            delete player.storage[skill];
                            player.removeGaintag(skill);
                        },
                        intro: { content: '本回合〖清狂〗已记录花色:$' },
                        trigger: { player: 'phaseJieshuBegin' },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return player.hasCard(card => card.hasGaintag('wechatqingkuang_tag'), 'h');
                        },
                        async content(event, trigger, player) {
                            await player.discard(player.getCards('h').filter(card => card.hasGaintag(event.name)))
                        },
                    }
                }
            },
            wechatyinyi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'phaseJieshuBegin'],
                },
                filter(event, player) {
                    if (event.name == 'phaseJieshu') return player.countMark('wechatyinyi') > 4;
                    const evt = event.getl(player);
                    return evt?.cards2?.length && player.countMark('wechatyinyi') < 5;
                },
                async cost(event, trigger, player) {
                    if (trigger.name == 'phaseJieshu') {
                        const { player: target } = trigger, choices = [];
                        const sha = get.autoViewAs({ name: 'sha', isCard: true });
                        const choiceList = [`弃置一张牌视为对${get.translation(target)}使用一张【杀】`, '摸一张牌'];
                        if (player.countGainableCards(player, 'he') && player.canUse(sha, target, false)) choices.push('选项一');
                        else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                        choices.push('选项二');
                        const control = await player
                            .chooseControl(choices, 'cancel2')
                            .set('choiceList', choiceList)
                            .set('prompt', get.prompt(event.skill))
                            .set('ai', () => {
                                return get.event('choice');
                            }).set('choice', (() => {
                                const eff1 = get.effect(target, sha, player, player), eff2 = get.effect(player, { name: 'draw' }, player, player);
                                return eff1 > eff2 ? '选项一' : '选项二';
                            })())
                            .forResultControl();
                        event.result = {
                            bool: control !== 'cancel2',
                            cost_data: control,
                            targets: control === '选项一' ? [target] : [],
                        }
                    }
                    else event.result = { bool: true };
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'phaseJieshu') {
                        const { targets, cost_data } = event;
                        const sha = get.autoViewAs({ name: 'sha', isCard: true });
                        player.removeMark(event.name, 5);
                        if (cost_data == '选项二') await player.draw();
                        else {
                            if (player.countGainableCards(player, 'he')) await player.chooseToDiscard('he', true);
                            if (player.canUse(sha, targets[0], false)) await player.useCard(sha, targets[0], false);
                        }
                    }
                    else player.addMark(event.name);
                },
                marktext: '音',
                intro: {
                    name2: '音',
                    content: 'mark',
                },
            },
            // 界左慈
            wechatrexinsheng: {
                audio: 'rexinsheng',
                inherit: 'xinsheng',
                getIndex(event, player) {
                    return event.num;
                },
                filter(event, player) {
                    return player.hasSkill('rehuashen') && event.num > 0;
                },
                async content(event, trigger, player) {
                    lib.skill.rehuashen.addHuashens(player, 1);
                    await player.draw();
                },
            },
            // 郭女王
            wechatwufei: {
                audio: 'wufei',
                trigger: { player: ['useCardToPlayered', 'damageEnd'] },
                filter(event, player) {
                    const target = game.findPlayer(current => current.hasSkill('yichong_' + player.playerid));
                    if (!target) return false;
                    if (event.name == 'damage') return target.hp > 1;
                    return event.isFirstTarget && (event.card.name == 'sha' || (get.type(event.card) == 'trick' && get.tag(event.card, 'damage') > 0.5));
                },
                async cost(event, trigger, player) {
                    const target = game.findPlayer(current => current.hasSkill('yichong_' + player.playerid));
                    const bool = trigger.name != 'damage' ? true : await player.chooseBool(get.prompt(event.skill, target), '令' + get.translation(target) + '受到1点无来源伤害').set('choice', get.damageEffect(target, player, player) > 0).forResultBool();
                    event.result = {
                        bool: bool,
                        targets: [target],
                    }
                },
                async content(event, trigger, player) {
                    const { targets: [target] } = event;
                    if (trigger.name == 'damage') await target.damage('nosource');
                    else {
                        trigger.getParent().customArgs.default.customSource = target;
                        game.log(target, '成为了', trigger.card, '的伤害来源');
                    }
                },
                ai: { combo: 'yichong' },
            },
            // 极曹丕
            wechatchaowei: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(target => player.canCompare(target));
                },
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                selectTarget: [1, 3],
                multitarget: true,
                multiline: true,
                async content(event, trigger, player) {
                    const { result } = await player.chooseToCompare(event.targets, card => get.number(card)).setContent('chooseToCompareMeanwhile');
                    if (result?.winner?.isIn()) {
                        result.winner.addSkill(event.name + '_effect');
                        result.winner.addMark(event.name + '_effect', 3, false);
                    }
                    const targets = [player].addArray(event.targets).sortBySeat();
                    if (result?.winner) targets.remove(result.winner);
                    for (const target of targets) {
                        if (!target.isIn()) continue;
                        else if (player == target) await player.damage();
                        else {
                            const result = !target.countCards('he') ? { bool: false } : await target.chooseToGive(player, 'he', `交给${get.translation(player)}一张牌，或受到其的1点伤害`).set('ai', card => {
                                const { goon } = get.event();
                                return !goon ? 6 - get.value(card) : 0;
                            }).set('goon', get.damageEffect(target, player, target) > 0 || player.hasSkill('wechatenshe') && !player.getStorage('wechatenshe').includes(player)).forResult();
                            if (!result?.bool) await target.damage();
                        }
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        player: 1,
                        target: -1,
                    },
                },
                subSkill: {
                    effect: {
                        mod: { cardUsable: () => Infinity },
                        trigger: { player: 'useCard1' },
                        charlotte: true,
                        onremove: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            player.removeMark(event.name, 1, false);
                            const { card } = trigger;
                            if (trigger.addCount !== false) {
                                trigger.addCount = false;
                                player.getStat('card')[card.name]--;
                            }
                            if (!player.hasMark(event.name)) player.removeSkill(event.name);
                        },
                        intro: { content: '使用的下#张牌无次数限制' },
                    }
                }
            },
            wechatenshe: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'compare', source: 'damageBegin2' },
                filter(event, player) {
                    const storage = player.getStorage('wechatenshe');
                    if (event.name == 'damage') return !storage.includes(event.player);
                    return event.targets?.length && !event.iwhile && storage.length;
                },
                locked: true,
                async cost(event, trigger, player) {
                    event.result = { bool: true };
                    if (event.name == 'damage') event.result.targets = [trigger.player]
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'damage') {
                        const { player: target } = trigger;
                        player.markAuto(event.name, [target]);
                        trigger.cancel();
                        const hs = target.getCards('h');
                        if (!hs.length) return;
                        const num = Math.max(...hs.map(card => get.number(card)));
                        const cards = hs.filter(card => get.number(card) == num);
                        await player.gain(cards, target, 'giveAuto');
                        target.addTempSkill(event.name + '_effect', { player: 'phaseBegin' });
                        target.markAuto(event.name + '_effect', cards.map(card => get.type2(card)));
                    }
                    else {
                        const num = player.getStorage(event.name).length;
                        trigger.num1 += num;
                        if (trigger.num1 > 13) trigger.num1 = 13;
                        game.log(player, '的拼点牌点数+', num);
                    }
                },
                intro: { intro: '〖恩赦〗已记录角色：$' },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            cardEnabled(card, player) {
                                if ([card].concat(card.cards || []).some(cardx => player.getStorage('wechatenshe_effect').includes(get.type2(cardx)))) return false;
                            },
                            cardSavable(card, player) {
                                if ([card].concat(card.cards || []).some(cardx => player.getStorage('wechatenshe_effect').includes(get.type2(cardx)))) return false;
                            },
                        },
                        intro: { content: '直到下回合开始不能使用$牌' }
                    }
                }
            },
            // 极孔融
            wechatzhengren: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    const { currentPhase } = _status;
                    if (!currentPhase?.isIn() || !game.hasPlayer(current => current != currentPhase) || !game.hasPlayer(current => current.hasHistory('damage'))) return false;
                    const num = player.countMark('wechatzhengren_record') + 1;
                    return (num == 1 && currentPhase.countCards('he')) || (num == 2 && currentPhase.countCards('he') > 1) || (num == 3 && currentPhase.countCards('h') && game.hasPlayer(current => current != currentPhase && current.countCards('h')));
                },
                locked: true,
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                        if (target == _status.currentPhase) return false;
                        const num = player.countMark('wechatzhengren_record') + 1;
                        return num != 3 || target.countCards('h');
                    }, true).set('ai', target => {
                        const player = get.player();
                        return get.attitude(player, target);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const { targets: [target] } = event, { currentPhase } = _status;
                    const record = event.name + '_record';
                    player.addTempSkill(record, 'roundStart');
                    player.addMark(record, 1, false);
                    if (!currentPhase?.isIn()) return;
                    const num = player.countMark(record);
                    if (num == 1 && currentPhase.countCards('he') && target.isIn()) await currentPhase.chooseToGive(target, 'he', true);
                    else if (num == 2) {
                        if (currentPhase.countCards('he')) await currentPhase.chooseToDiscard('he', true, 2);
                        await target.draw(2);
                    }
                    else {
                        if ([currentPhase, target].every(current => !current.countCards('h'))) return;
                        let cards1, cards2;
                        for (const current of [currentPhase, target].sortBySeat()) {
                            const cards = current.getCards('h'), map = {};
                            if (!cards.length) continue;
                            for (const suit of lib.suits.slice()) {
                                if (typeof map[suit] != 'number') map[suit] = 0;
                                map[suit] += cards.filter(card => get.suit(card) == suit).length;
                            }
                            const list = [];
                            for (let i in map) {
                                if (map[i] > 0) list.push([i, map[i]]);
                            }
                            if (current == currentPhase) list.sort((a, b) => b[1] - a[1]);
                            else list.sort((a, b) => a[1] - b[1]);
                            const suits = list.filter(i => i[1] == list[0][1]).map(i => i[0]);
                            const result = suits.length == 1 ? { control: suits[0] } : await current.chooseControl(suits).set('prompt', '诤仁：请选择一个花色').forResult();
                            if (result?.control) {
                                const hs = cards.filter(card => get.suit(card) == result.control);
                                if (current == currentPhase) cards1 = hs;
                                else cards2 = hs;
                            }
                        }
                        if (cards1?.length || cards2?.length) await currentPhase.swapHandcards(target, cards1 || [], cards2 || []);
                    }
                },
                subSkill: {
                    record: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '本轮〖诤仁〗已执行#项' },
                    }
                }
            },
            wechatjijian: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.hasCard(card => get.info('wechatjijian').filterCard(card, player), 'h');
                },
                filterCard(card, player) {
                    if (player.getStorage('wechatjijian_tag').includes(card)) return false;
                    return ['basic', 'trick'].includes(get.type2(card));
                },
                check(card) {
                    const player = get.player();
                    return 6 - get.value(card);
                },
                discard: false,
                lose: false,
                delay: false,
                async content(event, trigger, player) {
                    const tag = event.name + '_tag';
                    player.addSkill(tag);
                    player.markAuto(tag, event.cards);
                    player.addGaintag(event.cards, tag);
                },
                ai: {
                    order: 6,
                    result: { player: 1 },
                },
                subSkill: {
                    tag: {
                        mod: {
                            aiOrder(player, card, num) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('wechatjijian_tag') && _status.currentPhase && get.damageEffect(_status.currentPhase, player, player) > 0) return num + 0.1;
                            },
                        },
                        charlotte: true,
                        onremove: true,
                        trigger: { global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'], },
                        forced: true,
                        filter(event, player) {
                            const { currentPhase } = _status;
                            return currentPhase?.isIn() && event.getd?.().some(card => get.position(card) == 'd' && player.getStorage('wechatjijian_tag').includes(card));
                        },
                        logTarget: () => _status.currentPhase,
                        async content(event, trigger, player) {
                            const cards = trigger.getd().filter(card => get.position(card) == 'd' && player.getStorage(event.name).includes(card));
                            if (cards.length) {
                                player.unmarkAuto(event.name, cards);
                                await _status.currentPhase.damage();
                                if (!player.getStorage(event.name).length) player.removeSkill(event.name);
                            }
                        },
                    }
                }
            },
            // 极贾诩
            wechatquanbian: {
                audio: 'ext:活动武将/audio/skill:2',
                getLast(event, target) {
                    const history = game.getAllGlobalHistory('useCard', evt => get.tag(evt.card, 'damage') > 0.5 && evt.targets?.includes(target));
                    const index = history.indexOf(event) - 1;
                    if (index >= 0) return history[index].card;
                    return false;
                },
                trigger: { global: 'useCardToTargeted' },
                filter(event, player) {
                    if (!get.tag(event.card, 'damage') > 0.5 || event.targets.length !== 1) return false;
                    const card = get.info('wechatquanbian').getLast(event.getParent(), event.target);
                    if (!card) return false;
                    return (get.color(card) == get.color(event.card) && player.countMark('wechatmoulvenum') < get.info('wechatmoulvenum').getMax) || get.name(card) == get.name(event.card);
                },
                forced: true,
                async content(event, trigger, player) {
                    const card = get.info(event.name).getLast(trigger.getParent(), trigger.target);
                    if (get.color(card) == get.color(trigger.card) && player.countMark('wechatmoulvenum') < get.info('wechatmoulvenum').getMax) get.info('wechatmoulvenum').changeNum(1, player);
                    if (get.name(card) == get.name(trigger.card)) {
                        player.addSkill(event.name + '_effect');
                        player.addMark(event.name + '_effect', 1, false);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '下次发动〖妙计〗时失去的谋略值-#' },
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.skill == 'wechatmiaoji_backup' && player.hasMark('wechatquanbian_effect');
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            player.removeSkill(event.name);
                        },
                    }
                }
            },
            wechatkuangshi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseUseEnd' },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.skill)).set('ai', target => {
                        const player = get.player();
                        const num = target.maxHp - target.countCards('hej');
                        let att = get.attitude(player, target);
                        const draw = target.maxHp - target.countCards('h');
                        if (draw > 0 && num > 0) {
                            if (target.hasSkillTag('nogain')) att /= 6;
                            if (att > 2) return Math.sqrt(draw + 1) * att;
                            return att / 3;
                        }
                        if (draw < -1 && num < 0) {
                            if (target.hasSkillTag('nogain')) att *= 6;
                            if (att < -2) return -Math.sqrt(1 - draw) * att;
                        }
                        return 0;
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const { targets: [target] } = event;
                    const num = target.maxHp - target.countCards('hej');
                    if (num == 0) return;
                    const draw = target.maxHp - target.countCards('h');
                    if (num > 0 && draw > 0) {
                        const { result: drawCards } = await target.draw(Math.min(5, draw));
                        if (get.itemtype(drawCards) == 'cards' && target.getCards('h').some(card => drawCards.includes(card))) {
                            const { result } = await player.chooseButton(['你可以使用其中一张牌', drawCards]).set('filterButton', button => {
                                return get.player().hasUseTarget(button.link);
                            }).set('ai', button => {
                                return get.player().getUseValue(button.link);
                            });
                            if (result?.bool && result?.links?.length) await player.chooseUseTarget(result.links[0], true, false);
                        }
                    }
                    else if (num < 0 && draw < 0) {
                        const { result } = await target.chooseToDiscard(Math.min(5, -draw), 'h', true);
                        const cards = result?.cards?.filter(card => get.position(card) == 'd' && player.hasUseTarget(card));
                        if (get.itemtype(cards) == 'cards') {
                            const { result } = await player.chooseButton(['你可以使用其中一张牌', cards]).set('filterButton', button => {
                                return get.player().hasUseTarget(button.link);
                            }).set('ai', button => {
                                return get.player().getUseValue(button.link);
                            });
                            if (result?.bool && result?.links?.length) await player.chooseUseTarget(result.links[0], true, false);
                        }
                    }
                },
            },
            wechatchenjie: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return player.countMark('wechatmoulvenum') > 4 && get.info('wechatchenjie').logTarget(event, player).length;
                },
                check(event, player) {
                    if (player.hasUnknown()) return false;
                    return game.countPlayer(target => Math.sign(get.attitude(player, target))) > 0;
                },
                logTarget: (event, player) => game.filterPlayer(current => player != current).sortBySeat(),
                skillAnimation: true,
                animationColor: 'thunder',
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    if (player.hasMark('wechatmoulvenum')) player.removeMark('wechatmoulvenum', Math.min(5, player.countMark('wechatmoulvenum')));
                    for (const target of event.targets) {
                        if (!target.isIn()) continue;
                        const next = target.chooseControl();
                        next.set('choiceList', [`${get.translation(player)}下次受到的伤害转移给你`, `减少1点体力上限，然后${get.translation(player)}下次受到伤害后你增加1点体力上限`]);
                        next.set('ai', () => {
                            const player = get.player();
                            const target = get.event().getParent().player;
                            if (player.isDamaged() && player.maxHp > 1) return 1;
                            return 0;
                        });
                        next.set('prompt', `沉节：请选择一项`);
                        const { result } = await next;
                        if (typeof result?.index == 'number') {
                            const { index } = result;
                            const skillName = `${event.name}_${index == 0 ? 'change' : 'damage'}`;
                            player.addSkill(skillName);
                            player.markAuto(skillName, [target]);
                            if (index == 1) await target.loseMaxHp();
                        }
                    }
                },
                subSkill: {
                    change: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '下次受到的伤害转移的角色：$' },
                        trigger: { player: 'damageBegin4' },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            trigger.cancel();
                            const targets = player.getStorage(event.name).filter(current => current.isIn());
                            player.removeSkill(event.name);
                            if (!targets.length) return;
                            for (const target of targets) await target.damage(trigger.source?.isIn() ? trigger.source : 'nosource', trigger.nature, trigger.num).set('card', trigger.card).set('cards', trigger.cards);
                        },
                    },
                    damage: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '下次受到伤害后增加体力上限的角色：$' },
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const targets = player.getStorage(event.name).filter(current => current.isIn());
                            player.removeSkill(event.name);
                            if (!targets.length) return;
                            for (const target of targets) await target.gainMaxHp();
                        },
                    }
                }
            },
            // 极郭皇后
            wechatjichong: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: ['damageEnd', 'recoverEnd'] },
                frequent: true,
                async cost(event, trigger, player) {
                    const num = player.countMark(event.skill) + 1;
                    const { result } = await player.chooseControl('选项一', '选项二', 'cancel2').set('choiceList', [`观看牌堆顶牌堆顶${get.cnNumber(2 * num)}张牌并获得其中${get.cnNumber(num)}张牌`, `摸一张牌，下次执行选项①获得增益`]).set('promt', get.prompt(event.skill)).set('ai', () => {
                        const { player, numx } = get.event();
                        if (numx < 4 && (player.countCards('h') > 2 || player.getHp() > 1)) return 1;
                        return 0;
                    }).set('numx', num);
                    event.result = {
                        bool: result?.control != 'cancel2',
                        cost_data: result?.index,
                    }
                },
                async content(event, trigger, player) {
                    if (event.cost_data == 0) {
                        const num = player.countMark(event.name) + 1;
                        player.clearMark(event.name, false);
                        const cards = get.cards(2 * num, true);
                        const { result } = await player.chooseButton([`${get.translation(event.name)}：请选择获得${get.cnNumber(num)}张牌`, cards], true, num).set('ai', button => {
                            const player = get.player();
                            return get.value(button.link, player);
                        });
                        if (result?.bool && result?.links?.length) await player.gain(result.links, 'gain2');
                    }
                    else {
                        await player.draw();
                        if (player.countMark(event.name) < 3) player.addMark(event.name, 1, false);
                    }
                },
                mark: true,
                marktext: '宠',
                onremove: true,
                intro: {
                    markcount: (storage = 0) => storage + 1,
                    content: (storage = 0) => '当前积宠程度：' + (storage + 1),
                },
            },
            wechatyifu: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                async content(event, trigger, player) {
                    const next = player.judge(card => {
                        if (['red', 'black'].includes(get.color(card))) return 1.5;
                        return -1.5;
                    });
                    next.judge2 = result => result.bool;
                    const { result } = await next;
                    if (result?.color && ['red', 'black'].includes(result.color)) {
                        let target;
                        const targets = game.filterPlayer(current => current.isDamaged());
                        if (result.color == 'red' && targets.length) {
                            const result = targets.length == 1 ? { bool: true, targets } : await player.chooseTarget(true, '选择一名角色，令其回复1点体力', (card, player, target) => target.isDamaged()).set('ai', target => {
                                const player = get.player();
                                return get.recoverEffect(target, player, player);
                            }).forResult();
                            if (result?.bool && result?.targets?.length) {
                                [target] = result.targets;
                                await target.recover();
                            }
                        }
                        else if (result.color == 'black') {
                            const result = await player.chooseTarget(true, '选择一名角色，对其造成1点伤害').set('ai', target => {
                                const player = get.player();
                                return get.damageEffect(target, player, player);
                            }).forResult();
                            if (result?.bool && result?.targets?.length) {
                                [target] = result.targets;
                                await target.damage();
                            }
                        }
                        if (player.hp === target?.hp && player.canMoveCard(null, true, game.filterPlayer(current => [player, target].includes(current)))) {
                            await player.moveCard(game.filterPlayer(current => [player, target].includes(current))).set('nojudge', true);
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        if (game.hasPlayer(current => get.recoverEffect(current, player, player) > 0 || get.damageEffect(current, player, player) > 0)) return 10;
                        return 1;
                    },
                    result: { player: 1 },
                }
            },
            // 极辛宪英
            wechatyanzheng: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseDrawBegin1' },
                filter(event, player) {
                    return !event.numFixed && game.hasPlayer(current => current != player);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.skill), lib.filter.notMe).set('ai', target => {
                        const player = get.player();
                        return get.attitude(player, target);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const { targets: [target] } = event;
                    await game.asyncDraw([player, target].sortBySeat(), 2);
                    player.addTempSkill(event.name + '_effect', { player: 'phaseBegin' });
                    player.markAuto(event.name + '_effect', [target]);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        trigger: { global: 'damageSource' },
                        filter(event, player) {
                            const { source } = event;
                            return source && (player.getStorage('wechatyanzheng_effect').includes(source) || player == source);
                        },
                        forced: true,
                        logTarget: 'source',
                        async content(event, trigger, player) {
                            player.removeSkill(event.name);
                            if (trigger.source.countDiscardableCards(player, 'hej')) await player.discardPlayerCard(trigger.source, 'hej', true);
                        },
                    }
                }
            },
            wechatgaojie: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseDrawBegin1' },
                filter(event, player) {
                    const numbers = player.getCards('hej').map(card => get.number(card));
                    const max = Math.max(...numbers);
                    const min = Math.min(...numbers);
                    return player.countCards('hej', card => player.canRecast(card)) > 1 && max != min;
                },
                async cost(event, trigger, player) {
                    event.result = await player.choosePlayerCard(get.prompt(event.skill), player, 'hej', 2).set('ai', button => {
                        const { link } = button
                        if (get.position(link) == 'j') return 10;
                        return 6 - get.value(link);
                    }).set('filterButton', button => {
                        const { link } = button, { player, numbers } = get.event();
                        if (!player.canRecast(link)) return false;
                        const number = get.number(link);
                        if (!numbers.includes(number)) return false;
                        return !ui.selected.buttons.length || number != get.number(ui.selected.buttons[0].link);
                    }).set('numbers', (() => {
                        const numbers = player.getCards('hej').map(card => get.number(card));
                        const max = Math.max(...numbers);
                        const min = Math.min(...numbers);
                        return [min, max];
                    })()).forResult();
                },
                async content(event, trigger, player) {
                    trigger.changeToZero();
                    const { cards } = event;
                    await player.recast(cards);
                    const list = cards.map(card => get.number(card)).sort((a, b) => a - b);
                    const [min, max] = list;
                    const { result } = await player.chooseTarget(`${get.translation(event.name)}：是否选择一名角色`, `你可以令其回复1点体力或摸两张牌，若如此做，本回合你不能使用点数为${min}至${max}之间的牌`).set('ai', target => {
                        const { player, list: [min, max] } = get.event();
                        if (player.countCards('h', card => {
                            if (!player.hasValueTarget(card)) return false;
                            return get.number(card) > min || get.number(card) < max;
                        }) > 3) return 0;
                        const eff1 = get.recoverEffect(target, player, player);
                        const eff2 = get.effect(target, { name: 'draw' }, player, player);
                        return Math.max(eff1, eff2);
                    }).set('list', list);
                    if (result?.bool && result?.targets?.length) {
                        const [target] = result.targets;
                        await player.chooseDrawRecover(target, 2, true);
                        player.addTempSkill(event.name + '_effect');
                        player.markAuto(event.name + '_effect', [list]);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: {
                            content(storage = []) {
                                const numbers = storage.flat();
                                const max = Math.max(...numbers);
                                const min = Math.min(...numbers);
                                return `本回合不能使用点数为${min}至${max}之间的牌`;
                            }
                        },
                        mod: {
                            cardEnabled(card, player) {
                                const numbers = player.getStorage('wechatgaojie_effect').flat();
                                const max = Math.max(...numbers);
                                const min = Math.min(...numbers);
                                if ([card].concat(card.cards || []).some(cardx => get.itemtype(cardx) === 'card' && (get.number(cardx) > min && get.number(cardx) < max))) return false;
                            },
                            cardSavable(card, player) {
                                return lib.skill.wechatgaojie_effect.cardEnabled.apply(this, arguments);
                            },
                        }
                    }
                }
            },
            // SP微信甄宓
            wechatjiwei: {
                audio: 'mbjiwei',
                inherit: 'mbjiwei',
                getNum(event, player) {
                    return event.name == 'phase' ? 1 : Math.max(game.countPlayer(), player.getHp());
                },
                trigger: {
                    player: 'phaseDiscardBegin',
                    global: 'phaseEnd',
                },
                filter(event, player) {
                    const num = get.info('wechatjiwei').getNum(event, player);
                    if (event.name == 'phaseDiscard') return player.countCards('h') >= num && game.hasPlayer(current => current != player);
                    return event.player != player && num > 0;
                },
                logAudio(event, player) {
                    if (event.name == 'phaseDiscard') return ['mbjiwei3.mp3', 'mbjiwei4.mp3'];
                    return ['mbjiwei1.mp3', 'mbjiwei2.mp3'];
                },
            },
            // 谋曹操
            wechatsbjianxiong: {
                audio: 'sbjianxiong',
                inherit: 'sbjianxiong',
                filter(event, player) {
                    return get.itemtype(event.cards) == 'cards' && event.cards.some(i => get.position(i, true) == 'o') || 3 - player.countMark('sbjianxiong') > 0;
                },
                prompt2(event, player) {
                    var gain = get.itemtype(event.cards) == 'cards' && event.cards.some(i => get.position(i, true) == 'o');
                    var str = '', draw = 3 - player.countMark('sbjianxiong');
                    if (gain) str += '获得' + get.translation(event.cards);
                    if (gain && draw > 0) str += '并';
                    if (draw > 0) str += '摸' + get.cnNumber(draw) + '张牌';
                    if (player.countMark('sbjianxiong')) str += '，然后可以弃1枚“治世”标记';
                    return str;
                },
                async content(event, trigger, player) {
                    if (get.itemtype(trigger.cards) == 'cards' && trigger.cards.some(i => get.position(i, true) == 'o')) await player.gain(trigger.cards.filterInD(), 'gain2');
                    const num = player.countMark('sbjianxiong');
                    if (3 - num > 0) await player.draw(3 - num, 'nodelay');
                    if (!num) return;
                    const { result } = await player.chooseBool('是否弃1枚“治世”？').set('ai', () => {
                        const player = get.player(), current = _status.currentPhase;
                        if (get.distance(current, player, 'absolute') > 3 && player.hp <= 2) return true;
                        return false;
                    });
                    if (result?.bool) player.removeMark('sbjianxiong', 1);
                },
            },
            // 谋孙策
            wechatsbjiang: {
                audio: 'sbjiang',
                inherit: 'sbjiang',
                group: ['sbjiang_add', 'wechatsbjiang_qiben'],
                subSkill: {
                    qiben: {
                        audio: 'sbjiang',
                        enable: 'phaseUse',
                        usable: 2,
                        viewAs: { name: 'juedou' },
                        filterCard: true,
                        position: 'h',
                        selectCard: -1,
                        prompt() {
                            return '出牌阶段限两次。你可以将所有手牌当【决斗】使用';
                        },
                        filter(event, player) {
                            const hs = player.getCards('h');
                            if (!hs.length) return false;
                            if (hs.some(card => {
                                const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 === false) return true
                            })) return false
                            return event.filterCard(get.autoViewAs({ name: 'juedou' }, hs));
                        },
                        ai: {
                            order: 0.001,
                            result: {
                                player(player, target) {
                                    let cards = player.getCards('h');
                                    return get.value(cards, player) * Math.sqrt(cards.length) <= 12;
                                },
                            },
                            nokeep: true,
                            skillTagFilter(player, tag, arg) {
                                if (tag === 'nokeep') {
                                    if (arg && (!arg.card || get.name(arg.card) !== 'tao')) return false;
                                    return player.isPhaseUsing() && (player.getStat('skill').wechatsbjiang_qiben || 0) < 2 && player.hasCard(card => get.name(card) != 'tao', 'h');
                                }
                            },
                        },

                    }
                }
            },
            wechatsbhunzi: {
                audio: 'sbhunzi',
                inherit: 'sbhunzi',
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.loseMaxHp();
                    await player.recover();
                    await player.draw(3);
                    await player.addSkills(get.info(event.name).derivation);
                },
            },
        },
        dynamicTranslate: {
            wechatxiangzhi(player) {
                if (player.storage.wechatxiangzhi) return get.YunLvInform() + '，出牌阶段限一次，<br>平：你可以摸一张牌。<br><span class="bluetext">仄：你可以回复1点体力。</span><br>转韵：你发动〖节烈〗结算完成后。';
                return get.YunLvInform() + '，出牌阶段限一次，<br><span class="bluetext">平：你可以摸一张牌。</span><br>仄：你可以回复1点体力。<br>转韵：你发动〖节烈〗结算完成后。';
            },
            wechattongxin(player) {
                if (player.storage.wechattongxin) return get.YunLvInform() + '，出牌阶段限一次，<br>平：出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。<br><span class="bluetext">仄：出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。</span><br>转韵：你于出牌阶段使用本回合未使用过的类型的牌。';
                return get.YunLvInform() + '，出牌阶段限一次，<br><span class="bluetext">平：出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。</span><br>仄：出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。<br>转韵：你于出牌阶段使用本回合未使用过的类型的牌。';
            },
            wechatsblongdan(player) {
                if (player.storage.wechatsblongdan) return '你可以将一张基本牌当本回合未以此法使用的基本牌使用或打出并摸一张牌。';
                return '你可以将【杀】当【闪】、【闪】当【杀】使用或打出，若你本回合未造成过伤害，你摸一张牌。';
            },
            wechatbeijia(player) {
                if (player.storage.wechatbeijia) return get.YunLvInform() + '。每回合限一次，<br>平：你可以将一张点数大于上一张你使用的牌当任意锦囊牌使用；<br><span class="bluetext">仄：你可以将一张点数小于上一张你使用的牌当任意基本牌使用。</span><br>转韵：你于出牌阶段使用一张点数等于上一张你使用的牌。';
                return get.YunLvInform() + '。每回合限一次，<br><span class="bluetext">平：你可以将一张点数大于上一张你使用的牌当任意锦囊牌使用；</span><br>仄：你可以将一张点数小于上一张你使用的牌当任意基本牌使用。<br>转韵：你于出牌阶段使用一张点数等于上一张你使用的牌。';
            },
        },
        translate: {
            //武将分包
            wechat_standard: '微服异构·标准',
            wechat_extra: '微服异构·神武将',
            wechat_zhiyin: '微服专属·<span style="text-decoration: line-through;">只因</span>极武将',
            wechat_sb: '微服异构·谋攻',
            //武将
            wechat_menghuo: '微信孟获',
            wechathuoshou: '祸首',
            wechathuoshou_info: '锁定技，【南蛮入侵】对你无效；一名角色受到【南蛮入侵】造成的伤害时，你可以弃置一张牌并令此伤害+1。',
            wechatzaiqi: '再起',
            wechatzaiqi_info: '每局游戏限七次。摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶的1+X张牌（X为你本局游戏发动〖再起〗的次数），然后获得其中一种花色的所有牌。',
            wechat_shen_zhugeliang: '微信神诸葛亮',
            wechatqixing: '七星',
            wechatqixing_info: '每轮限一次，当你进入濒死状态时，你可以进行一次判定，若判定结果大于7，你回复1点体力。',
            wechatjifeng: '祭风',
            wechatjifeng_info: '出牌阶段限一次，你可以弃置一张手牌，然后从牌堆中随机获得一张锦囊牌。',
            wechatrejifeng: '祭风',
            wechatrejifeng_info: '出牌阶段限一次，你可以弃置一张手牌，然后从弃牌堆随机中获得一张锦囊牌。',
            wechattianfa: '天罚',
            wechattianfa_info: '出牌阶段，你每使用两张锦囊牌，你获得1枚“罚”标记；回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你拥有的“罚”标记数）。',
            wechat_re_yuanshu: '微信袁术',
            wechatwangzun: '妄尊',
            wechatwangzun2: '妄尊',
            wechatwangzun_info: '锁定技，其他角色的准备阶段：若其体力值大于你，你摸一张牌；若其体力值为全场最高，其手牌上限-1。',
            wechattongji: '同疾',
            wechattongji_info: '攻击范围内包含你的角色成为【杀】的目标时，若你不是此【杀】的使用者或目标，其可交给你一张牌，然后将此【杀】转移给你。',
            wechat_huaxiong: '微信华雄',
            wechatyaowu: '耀武',
            wechatyaowu_info: '锁定技，当你成为【杀】的目标后，若此【杀】为红色，你不可响应此牌；否则你摸一张牌。',
            wechat_lvmeng: '微信吕蒙',
            wechatkeji: '克己',
            wechatkeji2: '克己',
            wechatkeji_info: '出牌阶段，当你使用一张基本牌时，你摸一张牌，且你本回合的手牌上限+1。',
            wechat_xiahoushi: '微信夏侯氏',
            wechatqiaoshi: '樵拾',
            wechatqiaoshi_info: '一名角色的回合结束时，若你的手牌数不为全场最多，你摸一张牌。',
            wechatyanyu: '燕语',
            wechatyanyu2: '燕语',
            wechatyanyu_info: '出牌阶段，你可以重铸【杀】。出牌阶段结束时，你可以令一名其他男性角色摸X张牌（X为你本阶段内发动过〖燕语〗的次数且至多为2）。',
            wechat_xushu: '微信徐庶',
            wechatwuyan: '无言',
            wechatwuyan_info: '锁定技，当你受到锦囊牌对你造成的伤害时，防止此伤害。',
            wechatjujian: '举荐',
            wechatjujian_info: '结束阶段开始时，你可以弃置一张非基本牌并令一名角色选择一项：1.摸两张牌；2.回复1点体力。',
            wechat_zhaoyun: '微信赵云',
            wechatlongdan: '龙胆',
            wechatlongdan_info: '你可以将一张【杀】/【闪】当作【闪】/【杀】使用或打出，以此法使用的牌无任何次数限制。',
            wechatyajiao: '涯角',
            wechatyajiao_info: '当你于回合外使用或打出手牌时，你可以摸一张牌。',
            wechatqinggang: '青釭',
            wechatqinggang_info: '锁定技，若你有空置的且未被废除的武器栏，你视为装备【青釭剑】。',
            wechat_zhangfei: '微信张飞',
            wechatshemao: '蛇矛',
            wechatshemao_info: '出牌阶段限一次，你可以将两张手牌当作【杀】使用，且此【杀】无距离限制。',
            wechat_machao: '微信马超',
            wechattieji: '铁骑',
            wechattieji_info: '当你使用【杀】指定目标后，你可以进行判定。若结果为红色，则此【杀】不可被闪避；若结果为黑色，你获得此判定牌。',
            wechat_shen_guanyu: '微信神关羽',
            wechatwushen: '武神',
            wechatwushen_info: '你可以将一张红色牌当作【杀】使用。你使用方块【杀】无距离限制，使用红桃【杀】无次数限制。',
            wechat_zhiyin_lvbu: '极吕布',
            wechatxiaohu: '虓虎',
            wechatxiaohu_info: '你使用【杀】可以额外指定一个目标；出牌阶段限一次，你可以弃置一张手牌并从牌堆中获得一张【杀】。',
            wechat_yangxiu: '微信杨修',
            wechatdanlao: '啖酪',
            wechatdanlao_info: '出牌阶段限一次，你可以摸X张牌（X为场上存活角色数），然后你可以将这些牌任意分配给其他角色。结算完成后，本次未以此法获得牌的角色可以视为对你使用一张【杀】（无距离限制，且使用须合法）。',
            wechatjilei: '鸡肋',
            wechatjilei2: '鸡肋',
            wechatjilei2_bg: '肋',
            wechatjilei_info: '当你受到有来源的伤害后，你可以声明一种花色。若如此做，你令伤害来源不能使用、打出或弃置此花色的手牌直到其下个回合开始。',
            wechatrejilei: '鸡肋',
            wechatrejilei2: '鸡肋',
            wechatrejilei2_bg: '肋',
            wechatrejilei_info: '当你受到有来源的伤害后，你可以声明一种类别。若如此做，你令伤害来源不能使用或打出此类别的牌直到其下个回合开始。',
            wechat_shen_lvmeng: '微信神吕蒙',
            wechatgongxin: '攻心',
            wechatgongxin_info: '出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以展示其中的一张红色牌并选择一项：1.获得此牌；2.将此牌置于牌堆顶。',
            wechat_zhoutai: '微信周泰',
            wechatbuqu: '不屈',
            wechatbuqux: '创',
            wechatbuqu_info: '当你受到伤害或失去体力后，你摸一张牌，称为“创”。当你使用或打出“创”时，你从牌堆中获得一张与此“创”类型相同的牌。',
            wechatfenji: '奋激',
            wechat_bianfuren: '微信卞夫人',
            wechatwanwei: '挽危',
            wechatwanwei_info: '出牌阶段限一次，你可以弃置至多三张手牌，然后令一名角色摸等量的牌。若你弃置的牌的类型均不同，你回复1点体力。',
            wechatyuejian: '约俭',
            wechat_sunluban: '微信孙鲁班',
            wechatzenhui: '谮毁',
            wechatzenhui_info: '出牌阶段限一次，当你使用【杀】或普通锦囊牌指定唯一目标时，你可令可以成为此牌目标的另一名其他角色选择一项：交给你一张牌并成为此牌的使用者；或成为此牌的额外目标。',
            wechatjiaojin: '骄矜',
            wechatjiaojin_info: '当你受到其他角色对你造成的伤害时，你可以弃置一张装备牌并防止此伤害。',
            wechatrejiaojin: '骄矜',
            wechatrejiaojin_info: '当你受到其他角色对你造成的伤害时，你可以弃置一张装备牌防止此伤害并获得造成此伤害的所有实体牌。',
            wechat_wuguotai: '微信吴国太',
            wechatganlu: '甘露',
            wechatganlu_info: '出牌阶段限一次，你可以弃置一张手牌并选择一项：①移动场上的一张装备牌；②将牌堆中的随机一张装备牌置入你的空置装备栏中。',
            wechatbuyi: '补益',
            wechatbuyi2: '补益',
            wechatbuyi_info: '游戏开始时，你选择一名角色。你或其于每轮第一次受到伤害后，可以弃置一张非基本牌并回复1点体力。',
            wechat_liubiao: '微信刘表',
            wechatzishou: '自守',
            wechatzishou_info: '出牌阶段结束时，若你本阶段未对其他角色使用过牌。则你可以摸X张牌（X为场上的其他角色数）。',
            wechatrezishou: '自守',
            wechatrezishou_info: '摸牌阶段，你可以额外摸三张牌。然后本回合你使用牌不能指定其他角色为目标。',
            wechatzongshi: '宗室',
            wechatzongshi_info: '锁定技，你的手牌上限+X。准备阶段，若你的手牌数大于你的体力值，你本回合可以额外使用X张【杀】（X为场上的其他角色数）。',
            wechatrerezishou: '自守',
            wechatrerezishou_info: '摸牌阶段，你可以额外摸三张牌。然后本回合你不能使用牌【杀】。',
            wechatrezongshi: '宗室',
            wechatrezongshi_info: '锁定技，你的手牌上限+3。准备阶段，若你的手牌数大于你的体力值，你本回合使用【杀】无次数限制。',
            wechat_liuchen: '微信刘谌',
            wechatqinwang: '勤王',
            wechatqinwang1: '勤王',
            wechatqinwang_info: '当你需要打出【杀】时，你可以选择一名其他角色，其可以替你打出一张【杀】。',
            wechat_luxun: '微信陆逊',
            wechat_re_luxun: '微信界陆逊',
            wechat_re_luxun_ab: '微信陆逊',
            wechatqianxun: '谦逊',
            wechatqianxun_info: '每名角色的回合限一次，若你的手牌数为1，你可以将所有手牌当作一张单体非延时锦囊牌使用。',
            wechatreqianxun: '谦逊',
            wechatreqianxun2: '谦逊',
            wechatreqianxun_info: '每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时，若你是此牌的唯一目标，你可以将任意张手牌置于你的武将牌上，若如此做，此回合结束时，你获得你武将牌上的所有牌。',
            wechat_pangtong: '微信庞统',
            wechatlianhuan: '连环',
            wechatlianhuan_info: '①你可以将一张♣牌当作【铁索连环】使用或重铸。②摸牌阶段，你额外摸X张牌（X为场上处于连环状态的角色数，至多为3）。',
            wechatniepan: '涅槃',
            wechatniepan_info: '限定技，当你处于濒死状态时，你可以弃置区域内的所有牌，复原武将牌，摸三张牌并将体力值回复至3，然后本局游戏你造成的伤害均视为火属性。',
            wechathuzhu: '护主',
            wechathuzhu2: '护主',
            wechathuzhu_info: '回合结束时，你可以选择一名角色。当其受到伤害时，你可以失去1点体力并防止之，然后你摸一张牌。',
            wechat_zhangxingcai: '微信张星彩',
            wechatshenxian: '甚贤',
            wechatshenxian_info: '当有角色因弃置而失去基本牌时，你可以摸一张牌。',
            wechatqiangwu: '枪舞',
            wechatqiangwu_info: '出牌阶段限一次，你可以弃置一张手牌，然后本回合你使用大于此牌点数的【杀】无距离和次数限制。',
            wechat_zuoci: '微信左慈',
            wechatyigui: '役鬼',
            wechatyigui_info: '出牌阶段限一次，当你使用普通锦囊牌时，你可以弃置一张牌并为此牌额外指定一个目标（无距离限制）。',
            wechatshendao: '神道',
            wechatshendao_info: '当你于出牌阶段使用牌结算结束后，若此牌的目标角色中存在本阶段你未记录的角色，则你记录这些角色，然后根据记录的角色数，你可以执行对应的效果：记录1名，从牌堆或弃牌堆中获得一张指定类型的牌；记录2名，视为对一名角色使用一张普通锦囊牌；记录3名，对所有记录的角色造成1点伤害。',
            wechat_mayunlu: '微信马云騄',
            wechatfengpo: '凤魄',
            wechatfengpo_info: '当你于每回合使用的第一张【杀】或【决斗】指定唯一目标后，你可以观看其手牌并选择一项：1.摸X张牌；2.令此牌的伤害值基数+X。（X为其手牌中♦牌的数量且X至少为1）',
            wechat_zhiyin_daqiao: '极大乔',
            wechatjielie: '节烈',
            wechatjielie_info: '出牌阶段限一次，你可以选择一名其他角色，然后你选择一项：①令其选择是否使用一张牌，若其使用了红色的【杀】，你失去1点体力且本回合可以继续发动〖节烈〗；②你下次发动〖相知〗时，令该角色获得相同的效果。',
            wechatxiangzhi: '相知',
            wechatxiangzhi_info: get.YunLvInform() + '，出牌阶段限一次，<br>平：你可以摸一张牌。<br>仄：你可以回复1点体力。<br>转韵：你发动〖节烈〗结算完成后。',
            wechat_zhiyin_xiaoqiao: '极小乔',
            wechattongxin: '同心',
            wechattongxin_info: get.YunLvInform() + '，出牌阶段限一次，<br>平：出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。<br>仄：出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。<br>转韵：你于出牌阶段使用本回合未使用过的类型的牌。',
            wechatzhaoyan: '昭颜',
            wechatzhaoyan_info: '每回合限一次，当你成为其他角色使用牌的目标后，若其手牌数大于你，你摸一张牌。',
            wechat_caiwenji: '微信蔡琰',
            wechatbeige: '悲歌',
            wechatbeige_info: '每回合限一次，当一名角色受到【杀】造成的伤害后，你可以弃置一张牌，然后若此牌为：红色，其摸两张牌；黑色，你视为对其使用一张【杀】。',
            wechatduanchang: '断肠',
            wechatduanchang_info: '锁定技，杀死你的角色于本局游戏不能使用【桃】。',
            wechat_zhaoxiang: '微信赵襄',
            wechat_old_zhaoxiang: '微信旧赵襄',
            wechat_old_zhaoxiang_ab: '微信赵襄',
            wechatfanghun: '芳魂',
            wechatfanghun_fengpo: '凤魄',
            wechatfanghun_info: '游戏开始时，你获得技能〖龙胆〗。当你发动〖龙胆〗后，你获得“梅影”标记。若你有“梅影”标记，你可以发动〖凤魄〗，然后失去“梅影”标记。',
            wechatfuhan: '扶汉',
            wechatfuhan_info: '觉醒技，准备阶段，若你已发动过〖凤魄〗，则你减1点体力上限，然后从〖义绝〗、〖咆哮〗、〖铁骑〗、〖烈弓〗中选择一个技能获得。',
            wechatrefanghun: '芳魂',
            wechatrefanghun_info: '当你使用【杀】指定目标后，你获得1个“梅影”标记；你可以移去1个“梅影”标记来发动〖龙胆〗并摸一张牌。',
            wechatrefuhan: '扶汉',
            wechatrefuhan_info: '限定技，回合开始时，你可以移去所有"梅影"标记并摸等量的牌（至多摸五张），然后从五张未登场的蜀势力武将牌中选择一名获得其所有技能，然后若你的体力值为全场最低，你回复1点体力。',
            wechat_liuqi: '微信刘琦',
            wechattunjiang: '屯江',
            wechattunjiang_info: '结束阶段，若你未于本回合的出牌阶段内使用牌指定过其他角色为目标，则你可以摸X张牌（X为场上的存活角色数-1）。',
            wechat_caoren: '微信曹仁',
            wechatjushou: '据守',
            wechatjushou_info: '结束阶段，若你未于本回合造成过伤害，则你可以摸三张牌。',
            wechat_jiaxu: '微信贾诩',
            wechatwansha: '完杀',
            wechatwansha_info: '锁定技。①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②出牌阶段开始时，你令一名体力值大于1的其他角色失去1点体力，本阶段结束时，其回复1点体力。',
            wechatluanwu: '乱武',
            wechatluanwu_info: '限定技，出牌阶段，你可以从牌堆中获得一张【杀】，然后令所有角色依次选择一项：①对除你以外与其距离最近的另一名角色使用一张【杀】；②失去1点体力。',
            wechat_shenpei: '微信审配',
            wechatshouye: '守邺',
            wechatshouye_info: '每回合限一次，当其他角色使用牌指定你为唯一目标时，你可以与其进行猜拳。若你赢，则你取消此牌的目标，且你于此牌结算完成后获得其对应的所有实体牌。',
            wechatliezhi: '烈直',
            wechatliezhi_info: '准备阶段，你可以弃置至多两名其他角色区域内的各一张牌。',
            wechat_caocao: '微信曹操',
            wechatjianxiong: '奸雄',
            wechatjianxiong_info: '你的回合内，当你使用牌造成伤害后，你可以获得此牌对应的所有你本回合未因〖奸雄〗获得过的牌名的实体牌。',
            wechatmoulvenum: '谋略值',
            wechat_zhiyin_guojia: '极郭嘉',
            wechatdingce: '定策',
            wechatdingce_info: '①游戏开始时，你获得3点' + get.MouLveInform() + '。②一名角色的回合结束时，你获得X点' + get.MouLveInform() + '（X为你本回合使用的牌的类型数）。',
            wechatsuanlve: '算略',
            wechatsuanlve_info: '每回合限一次，你可以失去1+X点' + get.MouLveInform() + '，将一张牌当作你本回合使用的上一张基本牌或普通锦囊牌使用（X为你本轮发动〖算略〗的次数）。',
            wechatmiaoji: '妙计',
            wechatmiaoji_info: '每回合限一次，你可以：①失去1点' + get.MouLveInform() + '，视为使用【过河拆桥】；②失去3点' + get.MouLveInform() + '，视为使用【无懈可击】；③失去3点' + get.MouLveInform() + '，视为使用【无中生有】。',
            wechat_guanyu: '微信关羽',
            wechatqinglong: '青龙',
            wechatqinglong_info: '锁定技，若你有空置的且未被废除的武器栏，则你视为装备【青龙偃月刀】。',
            wechat_xuzhu: '微信许褚',
            wechatluoyi: '裸衣',
            wechatluoyi_info: '当你使用【杀】或【决斗】造成伤害时，你可以弃置一张牌并令此伤害+1。',
            wechat_sunshangxiang: '微信孙尚香',
            wechatjieyin: '结姻',
            wechatjieyin_info: '出牌阶段限一次，你可以弃置一张牌并与一名男性角色各摸一张牌。',
            wechat_pangde: '微信庞德',
            wechatmengjin: '猛进',
            wechatmengjin_info: '当你使用【杀】指定目标后，你可以弃置目标角色的一张牌。若此牌为装备牌，则其无法响应此【杀】，否则你获得此牌。',
            wechat_xiahouyuan: '微信夏侯渊',
            wechatshensu: '神速',
            wechatshensu_info: '你可以选择一至两项：①跳过判定阶段和摸牌阶段；②跳过出牌阶段；③跳过弃牌阶段并失去1点体力。你每选择一项，视为你对一名其他角色使用一张无视距离和防具的【杀】。',
            wechat_huangzhong: '微信黄忠',
            wechatliegong: '烈弓',
            wechatliegong_info: '你使用【杀】无距离限制。当你使用【杀】指定目标后，若目标角色的手牌数小于等于你的手牌数，则此【杀】不可被【闪】响应。',
            wechat_caochong: '微信曹冲',
            wechatrenxin: '仁心',
            wechatrenxin_info: '每轮限一次，当一名其他角色受到不小于体力值的伤害时，你可以弃置一张牌并将此伤害转移给自己。',
            wechat_sp_caiwenji: 'SP微信蔡琰',
            wechatchenqing: '陈情',
            wechatchenqing_info: '每轮限一次，当一名角色处于濒死状态时，你可以令另一名角色摸四张牌，然后其弃置四张牌。若其以此法弃置的四张牌花色各不相同，则视为该角色对濒死的角色使用一张【桃】。',
            wechatmozhi: '默识',
            wechatmozhi_info: '结束阶段，你可以视为使用你本回合出牌阶段内使用的第一张基本或普通锦囊牌，然后你可以视为使用你本回合出牌阶段内使用的第二张基本或普通锦囊牌。',
            wechat_wangping: '微信王平',
            wechatbinglve: '兵略',
            wechatbinglve_info: '锁定技，当你发动〖飞军〗后，你摸两张牌。若目标角色与你之前发动〖飞军〗指定的目标角色均不相同，则你下个回合的出牌阶段〖飞军〗最大发动次数+1。',
            wechat_sunliang: '微信孙亮',
            wechatchezheng: '掣政',
            wechatchezheng_info: '锁定技。出牌阶段，你使用牌无法指定攻击范围内不包含你的其他角色为目标。出牌阶段结束时，你摸等同于这些角色的数量，然后弃置其中一名角色的一张牌。',
            wechat_gaoshun: '微信高顺',
            wechat_caozhi: '微信曹植',
            wechatluoying: '落英',
            wechatluoying_info: '其他角色弃置的梅花牌或梅花判定牌进入弃牌堆后，你可以获得之，且这些牌不计入你的手牌上限。',
            wechatjiushi: '酒诗',
            wechatjiushi_info: '当你需要使用【酒】时，你可以弃置一张梅花手牌，视为使用之。',
            wechat_huangyueying: '微信黄月英',
            wechatjizhi: '集智',
            wechatjizhi_info: '当你使用锦囊牌时，你可以摸一张牌，且此牌不计入本回合的手牌上限。',
            wechatqicai: '奇才',
            wechatqicai_info: '锁定技。①你使用锦囊牌无距离限制。②你于回合内使用的第一张锦囊牌不可被响应。',
            wechat_weiyan: '微信魏延',
            wechatkuanggu: '狂骨',
            wechatkuanggu_info: '锁定技，当你对距离为1以内的角色造成1点伤害后，你回复1点体力并摸一张牌。',
            wechat_lukang: '微信陆抗',
            wechatjueyan: '决堰',
            wechatjueyan_info: '出牌阶段限一次，你可以废除一种装备栏，然后根据你废除的装备栏执行对应项：武器栏，本回合内使用【杀】的次数上限+3；防具栏，摸三张牌，且本回合手牌上限+3；坐骑栏，本回合获得技能〖连营〗，且使用牌无距离限制。',
            wechatposhi: '破势',
            wechatposhi_info: '觉醒技，准备阶段，若你的装备栏均已被废除或体力值为1，则你减1点体力上限，将手牌摸至体力上限，失去〖决堰〗并获得〖怀柔〗。',
            wechat_jianyong: '微信简雍',
            wechatqiaoshui: '巧说',
            wechatjyzongshi: '纵适',
            wechatjyzongshi_info: '当你拼点赢时，你可以从牌堆中获得一张锦囊牌；当你拼点没赢时，你可以收回你此次拼点的牌。',
            wechat_caifuren: '微信蔡夫人',
            wechatqieting: '窃听',
            wechatqieting_info: '其他角色的回合结束时，若其本回合内未对另一名角色造成过伤害，则你可选择一项：①摸一张牌。②随机获得其一张手牌。③将其装备区内的一张牌移动至你的装备区。',
            wechat_masu: '微信马谡',
            wechatsanyao: '散谣',
            wechatsanyao_info: '出牌阶段限一次，你可以弃置一张牌并对一名其他角色造成1点伤害。',
            wechat_sp_taishici: '微信太史慈',
            wechatjixu: '击虚',
            wechatjixu_info: '出牌阶段限一次，你可以令所有体力值不大于你的其他角色猜测你的手牌中是否有【杀】。所有角色猜测结束后，你依次弃置所有猜错的角色的一张牌并视为对其使用一张【杀】，然后你摸X张牌（X为猜错的角色数），若没有角色猜错，你结束此阶段。',
            wechat_buzhi: '微信步骘',
            wechatdingpan: '定叛',
            wechatdingpan_info: '出牌阶段限两次，你可以令一名装备区里有牌的角色摸一张牌，然后你选择一项：1.弃置其装备区里的一张牌；2.令其获得其装备区里的所有牌，然后你对其造成1点伤害。',
            wechat_caozhang: '微信曹彰',
            wechatjiangchi: '将驰',
            wechatjiangchi_info: '出牌阶段开始时，你可以选择一项：①摸两张牌，本阶段不能使用【杀】；②本阶段使用【杀】无距离限制且可以多使用一张【杀】。',
            wechatrejiangchi: '将驰',
            wechatrejiangchi_info: '出牌阶段开始时，你可以选择一项：1：摸三张牌，本回合手牌上限+2且不能使用【杀】；2：摸一张牌，然后你本阶段造成伤害后，摸一张牌；3：本阶段使用【杀】无距离限制，且可以多使用一张【杀】。',
            wechat_caopi: '微信曹丕',
            wechatfangzhu: '放逐',
            wechatfangzhu2: '放逐',
            wechatfangzhu_info: '当你受到伤害后，你可以令一名有手牌的其他角色将所有手牌扣置于其武将牌上。该角色的回合结束时或受到伤害后，其收回武将牌上扣置的牌。',
            wechat_sp_jiangwei: 'SP微信姜维',
            wechatkunfen: '困奋',
            wechatkunfen_info: '结束阶段，你可以失去1点体力，然后摸两张牌。',
            wechatfengliang: '逢亮',
            wechatfengliang_info: '觉醒技，当你进入濒死状态时，你减1点体力上限，将体力值回复至3点，然后获得技能〖挑衅〗。',
            wechat_caoxiu: '微信曹休',
            wechatqingxi: '倾袭',
            wechatqingxi_info: '当你对其他角色造成伤害时，你可以令其选择一项：①弃置等同于你攻击范围数的牌，然后弃置你装备区里的武器牌；②令此伤害+1。',
            wechat_yuanshao: '微信袁绍',
            wechatluanji: '乱击',
            wechatluanji_info: '出牌阶段，你可以将两张手牌当作【万箭齐发】使用（不可选择本阶段已经转化过的花色的牌）。其他角色使用【闪】响应你的【万箭齐发】时，你与其各摸一张牌。',
            wechat_sundeng: '微信孙登',
            wechatkuangbi: '匡弼',
            wechatkuangbi_info: '出牌阶段限一次，你可以选择一名有牌的其他角色，该角色将其的一至三张牌置于你的武将牌上，然后其摸一张牌。若如此做，你的下个准备阶段，你获得武将牌上的所有牌，然后其摸等量的牌。',
            wechat_re_xushu: '微信界徐庶',
            wechat_re_xushu_ab: '微信徐庶',
            wechatzhuhai: '诛害',
            wechatzhuhai_info: '一名其他角色的结束阶段开始时，若该角色本回合造成过伤害，你可以弃置一张牌并视为对其使用一张【杀】。',
            wechat_xiahouba: '微信夏侯霸',
            wechatbaobian: '豹变',
            wechatbaobian_info: '锁定技。①若你的体力值：不小于3，你视为拥有技能〖挑衅〗；不小于2，你视为拥有技能〖咆哮〗；不小于1，你视为拥有技能〖神速〗。②回合开始时，你失去1点体力，然后从牌堆或弃牌堆中获得一张【杀】。',
            wechatrebaobian: '豹变',
            wechatrebaobian_info: '锁定技。若你的体力值：为4；你视为拥有技能〖困奋〗；不小于3，你视为拥有技能〖挑衅〗；不小于2，你视为拥有技能〖咆哮〗；不小于1，你视为拥有技能〖神速〗。',
            wechat_liuyao: '微信刘繇',
            wechatkannan: '戡难',
            wechatkannan_info: '出牌阶段，你可以与一名本阶段内未成为过你发动〖戡难〗目标的角色拼点，赢的角色使用的下一张【杀】造成的伤害+1（至多+5）。',
            wechat_quancong: '微信全琮',
            wechatyaoming: '邀名',
            wechatyaoming_info: '当你造成或受到伤害后，你可以选择一项：①弃置手牌数大于等于你的一名其他角色的一张手牌；②令手牌数小于等于你的一名角色摸一张牌。',
            wechat_liaohua: '微信廖化',
            wechatdangxian: '当先',
            wechatdangxian_info: '锁定技，回合开始时，你从弃牌堆中获得一张【杀】并进行一个额外的出牌阶段。',
            wechatfuli: '伏枥',
            wechatfuli_info: '限定技，当你处于濒死状态时，你可以将体力值回复至X点（X为场上存活的其他角色数）。然后若你的体力值为全场唯一最多，你不能使用或打出手牌直到你的下个回合结束。',
            wechat_yanyan: '微信严颜',
            wechatjuzhan: '拒战',
            wechatjuzhan_info: '当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌。',
            wechat_guohuanghou: '微信郭皇后',
            wechatjiaozhao: '矫诏',
            wechatjiaozhao2: '矫诏',
            wechatjiaozhao_info: '出牌阶段限一次，你可以展示一张牌，然后声明一个基本牌或普通锦囊牌。你可以将此牌当作你声明的牌使用直到你的下个回合开始（自己不是此牌的合法目标）。',
            wechatdanxin: '殚心',
            wechatdanxin_info: '当你受到1点伤害后，你可以摸一张牌。',
            wechat_caizhenji: '微信蔡贞姬',
            wechatsheyi: '舍裔',
            wechatsheyi_info: '每轮限一次，体力值小于等于你的其他角色受到伤害时，你可以交给其X张牌并防止此伤害（X为你的体力值）。',
            wechattianyin: '天音',
            wechattianyin_info: '结束阶段，你从牌堆中随机获得你本回合未使用过类型的牌各一张。然后若你未获得牌，你可以弃置一名其他角色的一张牌。',
            wechat_zhuling: '微信朱灵',
            wechatzhanyi: '战意',
            wechatzhanyi_info: '出牌阶段限一次，你可以弃置一张牌并失去1点体力，然后根据你弃置的牌获得以下效果直到回合结束：基本牌，你可以将一张基本牌当作【杀】、【酒】或【桃】使用，且你本回合以此法使用的牌的回复值/伤害值+1；锦囊牌，摸三张牌且你使用的锦囊牌无距离限制且不能被响应；装备牌，当你使用【杀】指定目标后，你弃置其两张牌，然后你获得其中的一张牌。',
            wechat_caojie: '微信曹节',
            wechatshouxi: '守玺',
            wechatshouxi_info: '当你成为【杀】的目标后，你可声明一种牌的类别，使用者须选择一项：①弃置一张你声明的类别的牌；②令此【杀】对你无效。',
            wechat_zhiyin_caocao: '极曹操',
            wechatdelu: '得鹿',
            wechatdelu_info: '出牌阶段限一次，你可以与任意名体力值不大于你的角色进行同时拼点，且你的拼点点数+X（X为此次参与拼点的角色数）。拼点赢的角色依次随机获得所有拼点没赢的角色区域内的一张牌。',
            wechatzhujiu: '煮酒',
            wechatzhujiu_info: '出牌阶段限一次，你可以与一名其他角色交换一张手牌，若这两张手牌的颜色：相同，你回复1点体力；不相同，你对其造成1点伤害。',
            wechat_zhiyin_zhugeliang: '极诸葛亮',
            wechatsangu: '三顾',
            wechatsangu_info: '锁定技，当你每三次成为牌的目标后，你获得3点' + get.MouLveInform() + '，然后你占卜3。',
            wechatyanshi: '演势',
            wechatyanshi_backup: '演势',
            wechatyanshi_info: '出牌阶段限一次，你可以从牌堆顶或牌堆底摸一张牌，且当你于本阶段使用此牌时，你可以弃置一张牌并发动从另一端摸牌的〖演势〗。',
            wechat_sp_pangde: 'SP微信庞德',
            wechatjuesi: '决死',
            wechatjuesi_info: '出牌阶段，你可以弃置一张【杀】并令一名其他角色弃置一张牌，若弃置的牌不是【杀】且你的体力值不大于该角色，你视为对其使用【决斗】。',
            wechatrejuesi: '决死',
            wechatrejuesi_info: '出牌阶段，你可以弃置一张【杀】并选择一名其他角色，然后该角色弃置一张牌。若其弃置的牌不是【杀】，则你获得此牌然后视为对其使用一张【决斗】。',
            wechat_zhiyin_simayi: '极司马懿',
            wechatyinren: '隐忍',
            wechatyinren_info: '回合开始时，你可以跳过出牌阶段和弃牌阶段，然后获得以下第一个你未拥有的技能：〖奸雄〗、〖行殇〗、〖明鉴〗。',
            wechatyinren_jianxiong: '奸雄',
            wechatyinren_xingshang: '行殇',
            wechatyinren_mingjian: '明鉴',
            wechatduoquan: '夺权',
            wechatduoquan_info: '结束阶段，你可以选择一名其他角色，观看其手牌并并选择一个牌的类型（不公开），其于其下个出牌阶段使用第一张牌时，若此牌与你选择的类型相同，则你令此牌无效，且此牌对应的实体牌进入弃牌堆后，你可以使用之。',
            wechat_zhiyin_machao: '极马超',
            wechatqipao: '弃袍',
            wechatqipao_info: '当你使用【杀】指定目标后，你可以令其选择一项：①弃置其装备区所有牌（至少一张）；②本回合非锁定技失效且不能响应此牌。',
            wechatzhuixi: '追袭',
            wechatzhuixi_info: '①结束阶段，若场上所有其他角色均在你的攻击范围内，你可以视为使用一张【杀】。②你与装备区没有坐骑牌的角色的距离视为1。',
            wechat_yj_jushou: '微信沮授',
            wechatjianying: '渐营',
            wechatjianying_info: '当你使用与你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。出牌阶段限一次，你可以将一张牌当做任意基本牌使用（若你于此阶段内使用的上一张牌有花色，则此牌的花色视为上一张牌的花色）。',
            wechatrejianying: '渐营',
            wechatrejianying_info: '当你使用与你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。每回合限一次，你可以将一张牌当做任意基本牌使用（若你使用的上一张牌有花色，则此牌的花色视为上一张牌的花色）。',
            wechat_zumao: '微信祖茂',
            wechatjuedi: '绝地',
            wechatjuedi_info: '锁定技，准备阶段，若你的武将牌上有「引兵」牌，你选择一项：1.移去「引兵」牌，将手牌补至体力上限；2.将「引兵」牌交给一名体力值不大于你的其他角色，其回复1点体力并摸等量的牌。',
            wechat_guansuo: '微信关索',
            wechatzhengnan: '征南',
            wechatzhengnan_info: '每名角色限一次，当一名角色进入濒死状态时，你可以摸三张牌并获得下列技能中的任意一个：〖武圣〗、〖当先〗和〖制蛮〗。',
            wechat_zhiyin_huangyueying: '极黄月英',
            wechatmiaobi: '妙笔',
            wechatmiaobi_info: '当你于出牌阶段使用普通锦囊牌结算完毕后，你可以将此牌对应的所有实体牌置于一名目标角色的武将牌上（每回合每种牌名限一次）。其下个回合开始时，其选择一项：①交给你一张锦囊牌，然后将你置于其武将牌上的“妙笔”牌置入弃牌堆；②你依次对其使用所有你置于其武将牌上的“妙笔”牌（无距离限制，不能使用的“妙笔”牌置入弃牌堆）。',
            wechathuixin: '慧心',
            wechathuixin_info: '①当你于回合内使用锦囊牌结算完毕后，你于本回合使用牌无距离限制。②当你于回合外使用锦囊牌时，你摸一张牌。',
            wechatrehuixin: '慧心',
            wechatrehuixin_info: '回合开始时，若你装备区里的牌数为奇数/偶数，你获得〖祭风〗/〖集智〗直到回合结束。',
            wechat_zhangzhang: '微信张昭张纮',
            wechatzhijian: '直谏',
            wechatzhijian_info: '出牌阶段，你可以将手牌中的一张装备牌置于一名其他角色装备区里，然后摸两张牌。',
            wechat_chendeng: '微信陈登',
            wechatzhouxuan: '周旋',
            wechatzhouxuan_info: '出牌阶段限一次，你可以选择一名角色，然后选择一个基本牌的名称或非基本牌的类型。其使用或打出下一张牌时，若此牌的名称或类型和你选择的相同，则你观看牌堆顶的三张牌，然后将这些牌以任意方式分配给任意名角色。',
            wechatfengji: '丰积',
            wechatfengji_info: '锁定技，准备阶段，你摸一张牌，然后若你的手牌数不小于你上个回合结束后的手牌数，则你再摸一张牌且本回合手牌上限+2。',
            wechat_taoqian: '微信陶谦',
            wechatyixiang: '义襄',
            wechatyixiang_info: '每名角色的回合限一次，当你成为一名角色使用牌的目标后，若该角色的体力值大于等于你的体力值，则你可以从牌堆随机获得一张你没有的基本牌。',
            wechat_kanze: '微信阚泽',
            wechatkuanshi: '宽释',
            wechatkuanshi_info: '结束阶段，你可以选择一名角色。直到你的下回合开始，该角色于一个回合内非第一次受到伤害时，防止此伤害。',
            wechat_xuezong: '微信薛综',
            wechatjiexun: '诫训',
            wechatjiexun_info: '结束阶段，你可令一名其他角色摸等同于场上方块牌数的牌，然后弃置X张牌（X为此前该技能发动过的次数）。',
            wechat_guyong: '微信顾雍',
            wechatshenxing: '慎行',
            wechatshenxing_info: '出牌阶段，你可以弃置X张牌，然后摸一张牌（X为你本阶段发动过〖慎行〗的次数）。',
            wechat_yj_huangzhong: '微信☆黄忠',
            wechatshidi: '势敌',
            wechatshidi_info: '锁定技。①你的回合内，你至其他角色的距离-1，且你使用的黑色【杀】不可被响应。②你的回合外，其他角色至你的距离+1，且你不可响应红色【杀】。',
            wechat_caiyong: '微信蔡邕',
            wechatbizhuan: '辟撰',
            wechatbizhuan_bg: '书',
            wechatbizhuan_info: '①当你使用黑色牌时，或成为其他角色使用黑色牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”（你至多拥有四张“书”）。②你的手牌上限+X（X为“书”数）。',
            wechattongbo: '通博',
            wechattongbo_info: '摸牌阶段摸牌后，你可以用任意张牌替换等量的“书”，然后若你的“书”包含四种花色，你将所有“书”任意分配给任意角色。',
            wechat_xusheng: '微信徐盛',
            wechat_yufan: '微信虞翻',
            wechat_handang: '微信韩当',
            wechat_wanglang: '微信王朗',
            wechat_huanghao: '微信黄皓',
            wechatpojun: '破军',
            wechatpojun_info: '当你使用【杀】指定一个目标后，你可以将其至多X张牌扣置于该角色的武将牌旁（X为其体力值）。若如此做，当前回合结束后，该角色获得其武将牌旁的所有牌。',
            wechatzongxuan: '纵玄',
            wechatzongxuan_info: '当你的牌因打出或弃置进入弃牌堆后，你可以将其中任意张牌以任意顺序置于牌堆顶。',
            wechatzhiyan: '直言',
            wechatzhiyan_info: '结束阶段，你可以令一名角色摸一张牌并展示之，若此牌为：装备牌，其使用此牌并回复1点体力；非装备牌，你摸一张牌。',
            wechatjiefan: '解烦',
            wechatjiefan_info: '限定技，出牌阶段，你可以选择一名角色，然后令所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。',
            wechatjici: '激词',
            wechatjici_info: '当你因发动〖鼓舌〗而扣置的拼点牌亮出后，若此牌点数等于X，你本回合发动〖鼓舌〗的次数上限+1；然后你令此牌点数+X。（X为你“饶舌”标记的数量）',
            wechatgushe: '鼓舌',
            wechatgushe_info: '①出牌阶段限X次（X为7-你的“饶舌”标记数），你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，没赢的角色选择一项：1.弃置一张牌；2.令你摸一张牌。若你没赢，你获得1个“饶舌”标记且本回合不能对其发动此技能。②当你获得第7个“饶舌”标记时，你死亡。',
            wechatrejici: '激词',
            wechatrejici_info: '当你因发动〖鼓舌〗而扣置的拼点牌亮出后，你令此牌点数+X（X为你“饶舌”标记的数量）。',
            wechatqinqing: '寝情',
            wechatqinqing_info: '结束阶段，你可以选择任意名攻击范围内含有你的角色，然后弃置这些角色各一张牌并令其摸一张牌（无牌则不弃）。若如此做，你摸X张牌（X为其中手牌比你多的角色数）。',
            wechathuisheng: '贿生',
            wechathuisheng_info: '当你受到其他角色对你造成的伤害时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张，防止此伤害，然后你本轮不能再对其发动〖贿生〗；2.弃置等量的牌。',
            wechat_gongsunyuan: '微信公孙渊',
            wechathuaiyi: '怀异',
            wechathuaiyi_info: '出牌阶段限一次，你可以展示所有手牌并弃置一种颜色的所有手牌，然后你可以获得至多等同于你弃置牌数的角色的各一张牌。',
            wechat_zhiyin_lusu: '极鲁肃',
            wechatlvyuan: '虑远',
            wechatlvyuan_info: '结束阶段，你可以弃置任意张牌并摸等量的牌。若你弃置的牌数大于1，且颜色相同，则直到你的下个回合开始，当你失去与弃置牌颜色不同的牌时，你摸一张牌。',
            wechathezong: '合纵',
            wechathezong_info: '每轮开始时，你可以选择两名角色。若如此做，直到下一轮游戏开始：①当这些角色使用指定除对方外的唯一目标的【杀】结算完毕后，除非另一名角色对相同目标使用一张【杀】，否则交给其一张牌；②当这些角色成为使用者不为对方的唯一目标的【杀】时，除非另一名角色交给其一张【闪】，否则其也成为此牌的额外目标。',
            wechat_zhiyin_yuanshao: '极袁绍',
            wechathongtu: '尊北',
            wechathongtu_info: '出牌阶段限一次，你可以与所有可以拼点的其他角色进行共同拼点。赢的角色视为使用一张【万箭齐发】，且此牌结算完毕后，你摸受到过此牌造成的伤害的角色数的牌；若不存在赢的角色，则此技能视为未发动过。',
            wechatmengshou: '盟首',
            wechatmengshou_info: '每轮限一次，当你受到其他角色造成的伤害时，若其本轮造成的伤害值不大于你，则你可以防止此伤害。',
            wechat_zhiyin_xuzhu: '极许褚',
            wechathuhou: '虎侯',
            wechathuhou_info: '①与你进行【决斗】的角色不能打出【杀】。②你可以将任意张装备牌当作【杀】使用或打出。③以你为伤害来源的【杀】或【决斗】造成的伤害+X（X为此牌对应的实体牌与你使用【决斗】打出的牌中因〖虎侯②〗转化的装备牌数之和）。',
            wechatwuwei: '武卫',
            wechatwuwei_info: '结束阶段，你可以选择一名角色，若如此做，直到你的下个回合开始，其成为伤害类卡牌的目标后，若其体力值不大于你，则你令此牌对其无效，然后使用者于此牌结算完毕后视为对你使用【决斗】（你无法因此【决斗】触发〖武卫〗）。',
            wechat_zhiyin_sunce: '极孙策',
            wechattaoni: '讨逆',
            wechattaoni_info: '出牌阶段开始时，你可以失去任意点体力并摸等量张牌，然后令至多X名其他角色获得1枚“讨逆”标记（X为你以此法失去的体力值）。若如此做，本回合你的手牌上限等于你的体力上限。',
            wechatpingjiang: '平江',
            wechatpingjiang_info: '出牌阶段，你可以视为移去一名角色的所有“讨逆”标记视为对其使用一张【决斗】。若你胜，本回合你使用的【决斗】获得〖无双〗效果且造成的伤害+1；否则此技能失效直到回合结束。',
            wechatdingye: '鼎业',
            wechatdingye_info: '锁定技，结束阶段，你回复X点体力（X为本回合受到过伤害的角色数）。',
            wechat_zhiyin_xunyu: '极荀彧',
            wechatshangjie: '尚节',
            wechatshangjie_info: '每轮限一次。当一名角色处于濒死状态时，你可以令其将体力值回复至1点，然后你减少X点体力上限并获得X张锦囊牌（X为你的体力值与该角色的体力值的差值）。',
            wechattunlang: '吞狼',
            wechattunlang_info: '每轮开始时，你可以令两名角色获得以下效果直到本轮结束：①当这些角色使用【杀】指定除对方外的唯一目标时，另一名角色也成为此【杀】的额外目标；②当这些角色成为使用者不为对方的【杀】的唯一目标时，另一名角色须弃置一张手牌。',
            wechatwangzuo: '王佐',
            wechatwangzuo_info: '每回合限一次，你的摸牌/出牌/弃牌阶段开始前，你可以跳过此阶段并令一名其他角色执行之。',
            wechatjuxian: '举贤',
            wechatjuxian_info: '你的回合内，其他角色使用/打出/弃置的牌进入弃牌堆后，你获得其中X张牌（X为3-本回合你以此法获得的牌数）。',
            wechatrejuxian: '举贤',
            wechatrejuxian_info: '你的回合限三次，其他角色使用/打出/弃置的牌进入弃牌堆后，你获得之。',
            wechatxianshi: '先识',
            wechatxianshi_info: '每轮限一次。其他角色的摸牌阶段开始时，你可以观看牌堆顶三张牌并用任意张手牌替换其中等量的牌。',
            wechat_zhiyin_zhenji: '极甄宓',
            wechatshenfu: '神赋',
            wechatshenfu_info: '①一名角色受到1点伤害后，若你的“洛神”标记数小于6，你获得1枚“洛神”标记。②结束阶段，你可以弃置所有“洛神”标记并亮出牌堆顶等量的牌，然后你选择一项：1.可以依次使用其中的黑色牌；2.获得其中的红色牌。',
            wechatsiyuan: '思怨',
            wechatsiyuan_info: '当你受到伤害后，你可以选择一名其他角色，令伤害来源视为对其造成过1点伤害，然后你与其各摸一张牌。',
            wechat_ruanhui: '微信阮慧',
            wechatmingcha: '明察',
            wechatmingcha_info: '摸牌阶段开始时，你亮出牌堆顶两张牌，然后你可以放弃摸牌并获得其中点数不大于8的牌。若你以此法获得了牌，你可以获得一名其他角色的随机一张牌。',
            wechatjingzhong: '敬重',
            wechatjingzhong_info: '弃牌阶段结束时，若你于此阶段内弃置过黑色牌，则你可以选择一名其他角色并获得如下效果直到其回合结束：每阶段限三次，其于出牌阶段内使用的牌结算结束后，你获得此牌对应的实体牌。',
            wechat_sp_machao: 'SP微信马超',
            wechatshichou: '誓仇',
            wechatshichou_info: '①你使用【杀】可以额外选择X名角色成为此【杀】的额外目标（X为你已损失的体力值）。②当你使用【杀】结算完毕后，若你未因此牌造成过伤害，则你获得此牌对应的实体牌。',
            wechat_pangdegong: '微信庞德公',
            wechatpingcai: '评才',
            wechatpingcai_info: '出牌阶段限一次，你可以选择一项：①对一名角色造成1点火属性伤害；②横置至多四名角色；③移动场上的一张装备牌；④令一名角色摸一张牌并回复1点体力，然后你摸一张牌。',
            wechat_guanyinping: '微信关银屏',
            wechatxuehen: '雪恨',
            wechatxuehen_info: '出牌阶段限一次，你可以弃置一张红色牌并对攻击范围内至多两名角色各造成1点伤害，然后这些角色各摸一张牌。',
            wechatrexuehen: '雪恨',
            wechatrexuehen_info: '出牌阶段限一次，你可以选择至多X名角色，横置这些角色并对其中一名角色造成1点火焰伤害（X为你已损失的体力值且至少为1）。',
            wechathuxiao: '虎哮',
            wechathuxiao_info: '当你使用的【杀】被【闪】响应后，你令此【杀】不计入次数限制并摸一张牌。',
            wechatrehuxiao: '虎哮',
            wechatrehuxiao_info: '锁定技，当你造成火焰伤害后，你与受伤角色摸一张牌，然后你于此回合内对其使用牌没有次数限制。',
            wechatwuji: '武继',
            wechatwuji_info: '觉醒技，结束阶段，若你本回合至少造成了3点伤害，则你加1点体力上限并回复1点体力，然后获得技能〖武圣〗。',
            wechat_jsp_huangyueying: 'SP微信黄月英',
            wechatlinglong: '玲珑',
            wechatlinglong_info: '锁定技。若你的装备区没有：防具牌，你视为装备【八卦阵】；坐骑牌，你的手牌上限+2；牌，你使用【杀】或普通锦囊牌不可被响应。',
            wechat_re_gongsunzan: '微信公孙瓒',
            wechatqiaomeng: '趫猛',
            wechatqiaomeng_info: '当你使用黑色【杀】指定目标后，你可以弃置该角色的一张牌，然后若你弃置了装备牌，则你获得之。',
            wechat_yj_zhoubuyi: '微信周不疑',
            wechatquesong: '雀颂',
            wechatquesong_info: '一名角色的结束阶段，若你于回合内受到过伤害，则你可以令一名角色选择一项：1.摸三张牌并复原武将牌；2.回复1点体力。',
            wechat_litong: '微信李通',
            wechattuifeng: '推锋',
            wechattuifeng_info: '当你受到伤害后，你可以将对你造成伤害的其中一张牌置于武将牌上，称为“锋”。准备阶段，你可以获得武将牌上的所有“锋”并摸等量张牌，本回合可以多使用X张【杀】（X为你本回合获得“锋”的数量）。',
            wechat_baosanniang: '微信鲍三娘',
            wechatwuniang: '武娘',
            wechatwuniang_info: '当你使用或打出【杀】时，你可以获得一名其他角色区域内的一张牌。若如此做，其摸一张牌，姓名为“关索”的角色摸一张牌。',
            wechatxushen: '许身',
            wechatxushen_info: '限定技，当你脱离濒死状态后，你可以回复1点体力，然后若关索不在场，你可令一名其他角色选择是否用关索代替其武将并令其摸三张牌。',
            wechat_xushi: '微信徐氏',
            wechatfuzhu: '伏诛',
            wechatfuzhu_info: '一名男性角色的结束阶段，若牌堆剩余牌数不大于【问卦】发动次数的十倍，则你可以依次对其使用牌堆中的所有【杀】（不超过游戏人数），然后你重新记录【问卦】的发动次数并洗牌。',
            wechat_sb_sunshangxiang: '微信谋孙尚香',
            wechatsbliangzhu: '良助',
            wechatsbliangzhu_info: '出牌阶段限一次，你可以获得一名其他角色的一张手牌（此法获得的牌不计入手牌上限），然后你令本阶段成为你〖结姻〗的目标角色选择一项：1：移动场上一张装备牌；2：摸两张牌。',
            wechatsbjieyin: '结姻',
            wechatsbjieyin_info: '使命技。①出牌阶段开始时，你令一名男性角色选择一项：1.交给你两张牌，然后其回复1点体力；2.你失去〖良助〗，然后视为你对其使用一张【顺手牵羊】。②失败：当你失去〖良助〗后，你回复1体力并减少1点体力上限，然后获得〖枭姬〗。',
            wechatsbxiaoji: '枭姬',
            wechatsbxiaoji_info: '当你失去装备区内的一张牌时，你摸两张牌，然后可以弃置场上的一张牌。',
            wechat_sb_zhaoyun: '微信谋赵云',
            wechatsblongdan: '龙胆',
            wechatsblongdan_info: '你可以将【杀】当【闪】、【闪】当【杀】使用或打出，若你本回合未造成过伤害，你摸一张牌。',
            wechatsbjizhu: '积著',
            wechatsbjizhu_info: '觉醒技，结束阶段，若你本回合至少造成过2点伤害或本局游戏有其他角色进入过濒死状态，你修改〖龙胆〗。',
            wechatsblongdan_rewrite: '龙胆·改',
            wechatsblongdan_rewrite_info: '你可以将一张基本牌当本回合未以此法使用的基本牌使用或打出并摸一张牌。',
            wechat_sp_wangcan: '微信王粲',
            wechatspqiai: '七哀',
            wechatspqiai_info: '出牌阶段限一次，你可以将一张非基本牌交给一名其他角色并选择一项：①回复1点体力；②摸两张牌。然后你可以令其执行另一项。',
            wechatspshanxi: '善檄',
            wechatspshanxi_info: '①出牌阶段开始时，你可令一名其他角色获得或失去“檄”标记。②有“檄”标记的角色回复体力时，若其体力值大于0，则其需选择一项：①交给你两张牌。②失去1点体力。',
            wechatxinqieting: '窃听',
            wechatxinqieting_info: '其他角色的回合结束时，若其本回合内未对其他角色造成过伤害，则你可选择一项：①摸一张牌。②观看其所有手牌并获得其中的一张。③将其装备区内的一张牌移动至你的装备区。',
            wechat_shen_lvbu: '微信神吕布',
            wechat_liuyan: '微信刘焉',
            wechatlimu: '立牧',
            wechatlimu_info: '①出牌阶段，你可以将一张♦牌当做【乐不思蜀】对自己使用，然后你回复1点体力。②若你的判定区内有牌，则你对其他角色使用牌无次数和距离限制。',
            wechat_zhenji: '微信甄宓',
            wechat_sp_zhugeliang: '微信卧龙',
            wechathuoji: '火计',
            wechathuoji_info: '出牌阶段限一次，你可以选择一名其他角色，对其造成1点火属性伤害。',
            wechatkanpo: '看破',
            wechatkanpo_info: '每轮开始时，你可以记录一个锦囊牌的牌名（每种牌名限一次）。一名其他角色于本轮使用此牌名的牌时，你令此牌无效，然后摸一张牌。',
            wechat_yj_weiyan: '微信☆魏延',
            wechatguli: '孤厉',
            wechatguli_info: '出牌阶段限一次。你可以将所有手牌当做一张无次数限制的【杀】使用。此牌结算结束后，若此牌造成过伤害，你可以将手牌数摸至你的体力上限。',
            wechataosi: '骜肆',
            wechataosi_info: '锁定技。当你于出牌阶段对一名角色造成伤害后，你于此阶段对其使用牌无次数限制。',
            wechat_sunhao: '微信孙皓',
            wechatcanshi: '残蚀',
            wechatcanshi_info: '摸牌阶段，你可以多摸X张牌（X为已受伤的角色数且至少为2）.若如此做，当你于此回合内使用【杀】或普通锦囊牌时，你弃置一张牌。',
            wechat_ganfuren: '微信甘夫人',
            wechatshenzhi: '神智',
            wechatshenzhi_info: '准备阶段，若你的手牌数不小于体力值，则你可以回复1点体力。',
            wechat_xurong: '微信徐荣',
            wechatxionghuo: '凶镬',
            wechatxionghuo_info: '游戏开始时，你获得3个“暴戾”标记（标记上限为3）。出牌阶段，你可以交给一名其他角色一个“暴戾”标记。当你对有“暴戾”标记的其他角色造成伤害时，此伤害+1。有“暴戾”标记的其他角色的出牌阶段开始时，其移去所有“暴戾”标记并随机执行一项：1.受到1点火焰伤害且本回合不能使用【杀】；2.失去1点体力且本回合手牌上限-1；3.你随机获得其两张牌。',
            wechat_zhiyin_caiwenji: '极蔡琰',
            wechatbeijia: '悲笳',
            wechatbeijia_info: '韵律技。每回合限一次，平：你可以将一张点数大于上一张你使用的牌当任意锦囊牌使用；仄：你可以将一张点数小于上一张你使用的牌当任意基本牌使用。转韵：你于出牌阶段使用一张点数等于上一张你使用的牌。',
            wechatsifu: '思赋',
            wechatsifu_info: '出牌阶段各限一次，你可以选择一个你本回合使用过或未使用过的牌的点数，然后随机从牌堆中获得一张此点数的牌。',
            wechatresifu: '思赋',
            wechatresifu_info: '出牌阶段限一次，你可以判定并重复此流程直到这些判定牌的点数包含你此阶段使用过的点数和未使用过的点数，然后你获得其中你此阶段使用过的点数和未使用过的点数的牌各一张。',
            wechat_sb_machao: '微信谋马超',
            wechatjlmashu: '马术',
            wechatjlmashu_info: '①游戏开始时，你从牌堆中随机使用一张防御坐骑牌和一张进攻坐骑牌。②一名角色失去装备区的坐骑牌后，你获得2枚“千骑”标记。③出牌阶段，你可以弃置1枚“千骑”标记视为一张无距离和次数限制的【杀】。',
            wechatjltieji: '铁骑',
            wechatjltieji_info: '当你使用【杀】对其他角色造成伤害时，你可以防止此伤害，改为令其失去X点体力或减少1点体力上限（X为伤害值）。',
            wechat_huojun: '微信霍峻',
            wechat_yj_xuhuang: '微信☆徐晃',
            wechatxhzhiyan: '治严',
            wechatxhzhiyan_info: '出牌阶段限一次，你可以将手牌摸至体力上限且本阶段内不能再对其他角色使用牌。',
            wechatjiewei: '解围',
            wechatjiewei_info: '出牌阶段限一次，你可以将X张手牌交给一名其他角色（X为你的手牌数与体力值之差）。',
            wechat_zhiyin_zhouyu: '极周瑜',
            wechatyingrui: '英锐',
            wechatyingrui_info: '摸牌阶段结束时或当你杀死一名角色后，你获得4点' + get.MouLveInform() + '。',
            wechatfenli: '焚离',
            wechatfenli_info: '出牌阶段限一次。你可以消耗2点' + get.MouLveInform() + '并弃置至多两名座位连续的角色一张牌。若以此弃置的牌颜色相同，你可以消耗2点' + get.MouLveInform() + '对这些角色造成1点火焰伤害。',
            wechatqugu: '曲顾',
            wechatqugu_info: '当你每回合首次成为其他角色使用牌的目标后，你可以从牌堆中获得一张与此牌类别不同的牌。',
            wechat_zhiyin_sunquan: '极孙权',
            wechatzongxi: '纵阋',
            wechatzongxi_info: '①出牌阶段限一次。你可以将至多三张牌以任意顺序置于牌堆顶，然后令X名角色进行共同拼点（X为你以此法置于牌堆顶的牌数+1）。赢的角色摸两张牌。②共同拼点结束后，你获得其他角色的拼点牌。',
            wechatluheng: '戮衡',
            wechatluheng_info: '结束阶段，若你本回合发动过〖纵阋〗，你可以视为对一名本回合进行过共同拼点且其中手牌数最多的其他角色使用一张【杀】。',
            wechat_zhiyin_guanyu: '极关羽',
            wechatyihan: '翊汉',
            wechatyihan_info: '出牌阶段限一次，你可以展示一名其他角色的一张手牌，然后令其选择一项：1.交给你展示牌；2.你视为对其使用一张无次数限制的【杀】。',
            wechatgywuwei: '武威',
            wechatgywuwei_info: get.ShiwuInform() + '，出牌阶段，你可以弃置X+1张牌并弃置一名角色的等量张牌（X为你本阶段发动〖武威〗的次数）。若你以此法弃置的牌的点数之和不大于其因此被弃置的牌的点数之和，你对其造成1点雷电伤害。',
            wechat_sb_huangzhong: '微信谋黄忠',
            wechatsbliegong: '烈弓',
            wechatsbliegong_info: '当你使用牌时或成为其他角色使用牌的目标后，若你未记录此牌的花色，你记录此牌的花色。当你使用【杀】指定唯一目标后，若〖烈弓〗存在记录花色，则你可亮出牌堆顶的X张牌（X为〖烈弓〗记录过的花色数-1），令此【杀】的伤害值基数+Y（Y为亮出牌中被〖烈弓〗记录过花色的牌的数量），且目标角色不能使用〖烈弓〗记录过花色的牌响应此【杀】。此【杀】使用结算结束后，你清除〖烈弓〗记录的的花色。',
            wechat_yj_ganning: '微信☆甘宁',
            wechatjinfan: '锦帆',
            wechatjinfan_info: '①弃牌阶段开始时，你可将任意张手牌置于武将牌上，称为“铃”（每种花色的“铃”限一张，且对其他角色不可见）。②你可以如手牌般使用或打出“铃”（无距离和任何次数限制）。③当你失去“铃”后，你从牌堆中获得一张与此“铃”花色相同的牌。',
            wechatsheque: '射却',
            wechatsheque_info: '其他角色的准备阶段开始时，你可以对其使用一张【杀】（无距离限制且无视防具）。',
            wechat_sunluyu: '微信孙鲁育',
            wechatmeibu: '魅步',
            wechatmeibu_info: '攻击范围含有你的角色的准备阶段，你可以弃置一张牌，令其本回合获得技能〖止息〗。',
            wechatzhixi: '止息',
            wechatzhixi_info: '锁定技，当你于出牌阶段使用第一张【杀】或普通锦囊牌时，你进行一次判定。若判定结果为：黑色，你本回合非锁定技失效；红色，令此牌无效。',
            wechatmumu: '穆穆',
            wechatmumu_info: '①出牌阶段限一次，你可以弃置一张牌，将一名角色装备区的一张牌称为“刎”置于武将牌上。②当你造成伤害时，你可以将一张武将牌上的“刎”置入弃牌堆并令此伤害+1。③当你死亡时，杀死你的角色选择弃置2X张牌或失去1点体力（X为你武将牌上的“刎”数）。',
            wechat_sp_diaochan: 'SP微信貂蝉',
            wechatbiyue: '闭月',
            wechatbiyue_info: '结束阶段，你可以摸X张牌（X为你本回合造成的伤害数+1，至多为3）。',
            wechat_zhugeguo: '微信诸葛果',
            wechatqirang: '祈禳',
            wechatqirang_info: '当有装备牌进入你的装备区时，你可从牌堆中获得一张锦囊牌。则你本回合使用以此法获得的普通锦囊牌时，可为此牌增加一个目标。',
            wechatyuhua: '羽化',
            wechatyuhua_info: '锁定技，你的非基本牌不计入手牌上限。',
            wechat_sunhanhua: '微信孙寒华',
            wechatchongxu: '冲虚',
            wechatchongxu_info: '出牌阶段限一次，你可以获得6点积分，然后你可修改〖妙剑〗或〖莲华〗（消耗3分），并使用剩余的分数进行摸牌（每张2分）。',
            wechat_liucheng: '微信刘赪',
            wechatlveying: '掠影',
            wechatlveying_info: '①出牌阶段限三次，当你使用【杀】指定目标后，你获得1个“椎”。②当你使用的【杀】结算结束后，若你的“椎”数大于1，则你弃置2个“椎”并摸一张牌，然后可以视为使用一张【过河拆桥】。',
            wechatyingwu: '莺舞',
            wechatyingwu_info: '①出牌阶段限三次，当你使用非伤害类普通锦囊牌指定目标后，你获得1个“椎”。②当你使用的非伤害类普通锦囊牌结算结束后，若你的“椎”数大于1，则你弃置2个“椎”并摸一张牌，然后可以视为使用一张【杀】。',
            wechat_zhiyin_liubei: '极刘备',
            wechatguizhi: '圭志',
            wechatguizhi_info: '准备阶段，你可以与至多三名其他角色进行共同拼点，赢的角色于下个出牌阶段使用的前X张牌无任何次数限制（X为本次拼点角色数），若你没赢，则你从牌堆中获得一张点数大于你本次拼点点数的牌。',
            wechathengyi: '恒毅',
            wechathengyi_info: '每回合限一次，当你失去手牌中点数最大的牌后，你可以令一名其他角色获得这些牌或令自己摸一张牌。',
            wechat_zhiyin_caozhi: '极曹植',
            wechatcaiyi: '才溢',
            wechatcaiyi_info: '每回合限一次，当你因使用失去手牌中一种类别的所有牌后，你可以亮出牌堆顶X+Y张牌（X为你手牌拥有的类别数，Y为你本局游戏发动〖才溢〗的次数且多为3），然后获得其中一种颜色的所有牌。',
            wechataoxiang: '遨想',
            wechataoxiang_info: '每回合限一次，你可以视为使用一张【酒】并从牌堆中获得一张你手牌中未拥有类别的牌。若如此做，则本回合结束时，你选择一项：①若你的武将牌正面朝上，则将武将牌翻面；②令〖才溢〗于本轮失效。',
            wechat_zhiyin_jiangwei: '极姜维',
            wechatgujin: '鼓进',
            wechatgujin_info: '①一名角色的回合结束时，若你本回合未成为过其他角色使用牌的目标，则你获得1点' + get.MouLveInform() + '。②当你抵消其他角色使用的【杀】后，你获得2点' + get.MouLveInform() + '。',
            wechatqumou: '屈谋',
            wechatqumou_info: '出牌阶段开始时，你可以令你本回合无法使用、打出、弃置基本牌/锦囊牌。若如此做，你使用的下三张锦囊牌/基本牌无距离和任何次数限制且可以额外指定一个目标。',
            wechat_zhiyin_zhurong: '极祝融',
            wechatxiangwei: '象威',
            wechatxiangwei_info: '准备阶段，你可以视为使用【南蛮入侵】。然后你选择一项：①本回合对未受到此牌造成的伤害的角色使用牌无任何次数限制；②本回合使用的下X张【杀】造成的伤害+1（X为受到此牌造成的伤害的角色数）。',
            wechatyanfeng: '炎锋',
            wechatyanfeng_info: get.ShiwuInform() + '，出牌阶段，你可以将一张牌当作火【杀】使用。此牌结算完毕后，若此牌未造成伤害且仅指定唯一目标，则你令目标角色选择一项：①对你造成1点伤害，然后随机弃置一张牌；②令你摸一张牌，然后本回合你对其使用的下一张【杀】无效。',
            wechat_zhiyin_hetaihou: '极何太后',
            wechatfuyin: '覆胤',
            wechatfuyin_info: '①游戏开始时，你可令一名其他角色获得1枚“覆胤”标记。拥有“覆胤”标记的角色跳过其摸牌阶段。②摸牌阶段，你额外摸两张牌，然后此阶段结束时你依次交给场上拥有“覆胤”标记的存活角色两张牌。',
            wechatqiangji: '强忌',
            wechatqiangji_info: '每回合限一次。一名其他角色于其回合外一次性获得至少两张牌后，你可以猜测其手牌中最多的一种花色，若你猜测正确，你对其造成1点伤害。',
            wechat_zhiyin_zhangchunhua: '极张春华',
            wechatjuejue: '绝决',
            wechatjuejue_info: '锁定技。一名角色的回合结束时，若你本回合失去过所有手牌，你令一名角色失去1点体力。',
            wechatqingshi: '情逝',
            wechatqingshi_info: '当你对其他角色使用牌时，或当其他角色对你使用牌时，若此牌目标数为1，你可以弃置你与其各X张牌。若如此做，此牌结算结束后，若此牌造成过伤害，你摸X张牌（X为你已损失体力值且至少为1）。',
            wechatqingjue: '清绝',
            wechatqingjue_info: '限定技。当你进入濒死状态时，你可以回复体力至1点并跳过下个摸牌阶段。',
            wechat_zhiyin_dongzhuo: '极董卓',
            wechatweicheng: '威乘',
            wechatweicheng_info: '出牌阶段限一次。你可以与至少X名角色进行共同拼点（X为全场角色数的一半且向上取整）。然后胜者可以视为对所有败者使用一张【杀】。此【杀】结算结束后，若有败者使用【闪】响应过此牌，则未使用【闪】响应此牌的败者各失去1点体力。',
            wechatbianguan: '变观',
            wechatbianguan_info: '锁定技。①当你本轮首次参加共同拼点后，你获得所有拼点牌中的伤害牌和基本牌。②当你死亡时，你令所有其他角色进行共同拼点，然后所有败者各失去1点体力。',
            wechat_zhiyin_zhangfei: '极张飞',
            wechathupo: '虎魄',
            wechathupo_info: get.ShiwuInform() + '，出牌阶段，你可以展示你与一名其他角色的所有手牌，然后你选择一项：1.弃置你与其一个牌名的所有牌；2.获得其一张你没有的牌名的牌。',
            wechatrehupo: '虎魄',
            wechatrehupo_info: '出牌阶段每项各限一次，你可以展示你与一名其他角色的所有手牌，然后你选择一项：1.弃置你与其一个牌名的所有牌；2.获得其一张你没有的牌名的牌。',
            wechathanxing: '酣兴',
            wechathanxing_info: '锁定技。每回合你首次对自己使用牌后，你下一次造成的伤害+1。',
            wechat_zhiyin_wangyi: '极王异',
            wechatzuoqing: '佐卿',
            wechatzuoqing_info: '出牌阶段每名角色限一次。你可以失去1点体力或弃置所有装备牌，然后令一名角色选择一项：1.其之后使用前X张【杀】时摸一张牌；2.其之后打出前X张【杀】时摸一张牌（X为你已损失体力值且至少为1）。',
            wechatjianchou: '谏仇',
            wechatjianchou_info: '每轮限两次。一名角色受到【杀】或【决斗】的伤害后，你可以令其于此牌结算结束后视为对伤害来源使用一张【决斗】。',
            wechat_lizhaojiaobo: '微信李昭焦伯',
            wechatzuoyou: '佐佑',
            wechatzuoyou_info: '出牌阶段限一次，你可以：①令一名角色摸三张牌，然后其弃置两张手牌。②令一名有手牌的角色弃置一张手牌，然后其回复1点体力。',
            wechatshishou: '侍守',
            wechatshishou_info: '锁定技。当你发动〖佐佑〗后，若目标角色不为你，你执行〖佐佑〗中目标角色未执行的一项。',
            wechat_jikang: '微信嵇康',
            wechatjikai: '激慨',
            wechatjikai_info: '锁定技。你的回合外，其他角色不能响应你使用的牌；你的回合内，你不能响应其他角色使用的牌。',
            wechatqingkuang: '清狂',
            wechatqingkuang_info: '出牌阶段，你可以弃置一张本回合你未以此法弃置过的颜色的牌，然后摸两张牌。若如此做，结束阶段，你弃置本回合以此法获得的所有牌',
            wechatyinyi: '音忆',
            wechatyinyi_info: '①当你失去牌后，你获得1枚“音”标记（你至多拥有5枚“音”标记）。②一名角色的结束阶段，你可以弃置5枚“音”标记并选择一项：1.弃置一张牌并视为对该角色使用一张杀；2.摸一张牌。',
            wechat_re_zuoci: '微信界左慈',
            wechat_re_zuoci_prefix: '微信界',
            wechatrexinsheng: '新生',
            wechatrexinsheng_info: '当你受到1点伤害后，若你拥有〖化身〗，你可以获得一张新的化身牌并摸一张牌。',
            wechat_guozhao: '微信郭照',
            wechatwufei: '诬诽',
            wechatwufei_info: '若场上存在拥有“雀”标记的角色A，则：①当你使用【杀】或伤害类锦囊牌指定第一个目标后，你令A成为此牌伤害来源。②当你受到伤害后，若A的体力值大于1，则你可以令A受到1点无来源伤害。',
            wechat_zhiyin_caopi: '极曹丕',
            wechatchaowei: '朝威',
            wechatchaowei_info: '出牌阶段限一次。你可以与至多三名角色进行共同拼点。赢的角色使用的下三张牌无次数限制且本次拼点没赢的角色选择一项：1.交给你一张牌；2.受到你的1点伤害。',
            wechatenshe: '恩赦',
            wechatenshe_info: '锁定技。①当你进行共同拼点时，你令拼点牌点数+X（X为本局游戏你发动〖恩赦②〗的次数）。②每名角色限一次，当你对一名角色造成伤害时，你防止此伤害并获得其手牌中所有点数最大的牌，且其不可使用其中包含类别的牌直到其下个回合开始。',
            wechat_zhiyin_kongrong: '极孔融',
            wechatzhengren: '诤仁',
            wechatzhengren_info: '锁定技。一名角色A的回合结束时，若本回合有角色受到过伤害，你选择一名不为A的角色B，然后令A依次执行本轮未被执行的一项：①交给B一张牌；②弃置两张牌并令B摸两张牌；③以手牌中花色最多的牌交换B手牌中花色最少的牌。',
            wechatjijian: '讥谏',
            wechatjijian_info: '出牌阶段限一次，你可记录一张基本牌或锦囊牌。当此牌进入弃牌堆后，你对当前回合角色造成1点伤害。',
            wechat_zhiyin_jiaxu: '极贾诩',
            wechatquanbian: '权变',
            wechatquanbian_info: '锁定技。当一名角色成为伤害牌的唯一目标后，若此牌与上一张指定该角色的伤害牌：①颜色相同，你获得1点谋略值；牌名相同，你下次发动〖妙计〗时失去的谋略值-1。',
            wechatkuangshi: '匡势',
            wechatkuangshi_info: '出牌阶段结束时，你可选择一名角色。然后若：X小于Y，则其将手牌摸至Y（至多5张），然后你可观看并使用其获得牌中的一张牌；X大于Y，则其将手牌弃至Y（至多5张），然后你可使用其弃置牌中的一张牌（X为其区域内的牌数，Y为其体力上限）。',
            wechatchenjie: '沉节',
            wechatchenjie_info: '限定技。每轮开始时，你可消耗5点谋略值，令所有其他角色选择一项：1.当你下次受到伤害时，此伤害转移给其；2.减1点体力上限，然后当你下次受到伤害后，其加1点体力上限。',
            wechat_zhiyin_guohuanghou: '极郭皇后',
            wechatjichong: '积宠',
            wechatjichong_info: '当你受到伤害或回复体力后，你可以选择一项：1.观看牌堆顶2X张牌并获得其中X张牌；2.摸一张牌，然后X+1（X初始为1，且至多为4）。',
            wechatyifu: '易附',
            wechatyifu_info: '出牌阶段限一次，你可以判定。若结果为：红色，你令一名角色回复1点体力；黑色，你对一名角色造成1点伤害。然后若你以次此法选择的角色体力值与你相等，你可以移动其或你场上的一张牌。',
            wechat_zhiyin_xinxianying: '极辛宪英',
            wechatyanzheng: '言正',
            wechatyanzheng_info: '摸牌阶段，你可以改为与一名其他角各摸两张牌。若如此做，直到你的下回合开始，当你或其下次造成伤害后，你弃置伤害来源区域内的一张牌。',
            wechatgaojie: '高节',
            wechatgaojie_info: '出牌阶段开始时，你可以重铸你区域内点数最大和最小的牌各一张。若如此做，你可以令一名角色摸两张牌或回复1点体力，然后本回合你不能使用这两个点数之间的牌。',
            wechat_sp_zhenji: 'SP微信甄宓',
            wechatjiwei: '济危',
            wechatjiwei_info: '锁定技。①其他角色的回合结束时，若本回合有角色失去过牌，你摸一张牌。②弃牌阶段开始时，若你的手牌数不小于X，你将手牌中颜色较多的牌分配给任意名其他角色（X为你体力值与全场存活的其他角色数的最大值）。',
            wechat_sb_caocao: '微信谋曹操',
            wechatsbjianxiong: '奸雄',
            wechatsbjianxiong_info: '①游戏开始时，你可获得至多2枚“治世”标记。②当你受到伤害后，你可获得伤害牌，摸3-X张牌（X为“治世”数），然后你可弃1枚“治世”。',
            wechat_sb_sunce: '微信谋孙策',
            wechatsbjiang: '激昂',
            wechatsbjiang_info: '①当你使用【决斗】或红色【杀】指定目标后，或当你成为【决斗】或红色【杀】的目标后，你摸一张牌。②当你使用【决斗】时，你可以额外指定一名目标，然后你失去1点体力。③出牌阶段限两次。你可以将所有手牌当【决斗】使用。',
            wechatsbhunzi: '魂姿',
            wechatsbhunzi_info: '觉醒技。当你脱离濒死状态后，你减1点体力上限，回复1点体力，摸三张牌。然后你获得〖英姿〗和〖英魂〗。',
        },
    };
    for (var i in WeChatkill.character) {
        if (!WeChatkill.character[i][4]) WeChatkill.character[i][4] = [];
        if (WeChatkill.translate[i]) {
            if (WeChatkill.translate[i].indexOf('SP微信神') == 0) WeChatkill.translate[i + '_prefix'] = 'SP|微信|神';
            else if (WeChatkill.translate[i].indexOf('微信神') == 0) WeChatkill.translate[i + '_prefix'] = '微信|神';
            else if (WeChatkill.translate[i].indexOf('微信☆') == 0) WeChatkill.translate[i + '_prefix'] = '微信|☆';
            else if (WeChatkill.translate[i].indexOf('微信谋') == 0) WeChatkill.translate[i + '_prefix'] = '微信|谋';
            else if (WeChatkill.translate[i].indexOf('微信界') == 0) WeChatkill.translate[i + '_prefix'] = '微信|界';
            else if (WeChatkill.translate[i].indexOf('微信') == 0) WeChatkill.translate[i + '_prefix'] = '微信';
            else if (WeChatkill.translate[i].indexOf('SP微信') == 0) WeChatkill.translate[i + '_prefix'] = 'SP|微信';
            else if (WeChatkill.translate[i].indexOf('极') == 0) WeChatkill.translate[i + '_prefix'] = '极';
        }
        if (i.startsWith('wechat_') && !WeChatkill.character[i][4].some(tag => typeof tag == 'string' && tag.startsWith('die:'))) WeChatkill.character[i][4].push('die:' + i.slice(7));
        WeChatkill.character[i][4].push(((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/character/' + i + '.jpg');
    }
    lib.namePrefix.set('极', {
        color: '#fdd559',
        nature: 'soilmm',
    });
    lib.namePrefix.set('微信', {
        color: '#00cd00',
        nature: 'MXgreen',
        showName: '微',
    });
    lib.config.all.characters.push('WeChatkill');
    lib.config.all.sgscharacters.push('WeChatkill');
    if (!lib.config.characters.includes('WeChatkill')) lib.config.characters.remove('WeChatkill');
    lib.translate['WeChatkill_character_config'] = '<span style="font-family: xingkai">微信三国杀</span>';
    if (ui?.create?.menu) {
        const originLoading = ui.create.menu;
        ui.create.menu = function () {
            const result = originLoading.apply(this, arguments);
            const characterPack = Array.from(document.getElementsByTagName('div')).find(div => div.innerHTML === '武将');
            if (characterPack) {
                const originClick = characterPack.onclick || function () { };
                characterPack.onclick = () => {
                    originClick.apply(this, arguments);
                    const characterPackage = Array.from(document.querySelectorAll('.menubutton.large')).find(div => div.innerHTML === lib.translate['WeChatkill_character_config']);
                    if (characterPackage) {
                        const originClick2 = characterPackage.onclick || function () { };
                        characterPackage.onclick = () => {
                            originClick2.apply(this, arguments);
                            const rightPane = document.querySelector('.menu-buttons.leftbutton');
                            if (rightPane && !rightPane.init) {
                                rightPane.init = true;
                                const cfgNodes = rightPane.querySelectorAll('.config.toggle');
                                for (let i = 0; i < cfgNodes.length; i++) {
                                    if (cfgNodes[i].textContent === '仅点将可用') {
                                        const addIntro = document.createElement('div');
                                        addIntro.classList.add('config', 'pointerspan');
                                        addIntro.innerHTML = '<span style="font-family: yuanli">点击查看小程序专属名词解释：<br>' + [get.YunLvInform(), get.MouLveInform(), get.ShiwuInform()].map(str => '<li>' + str).join('<br>') + '</span>';
                                        cfgNodes[i].parentNode.insertBefore(addIntro, cfgNodes[i].nextSibling);
                                        break;
                                    }
                                }
                            }
                        };
                    }
                };
            }
            return result;
        };
    }
    return WeChatkill;
};

export default packs;