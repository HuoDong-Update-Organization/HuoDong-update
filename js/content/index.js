import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
export function content(config, pack) {
	//更新公告
	game.bolShowNewPack = function () {
		//更新告示
		var HuoDong_update = [
			'/setPlayer/',
			'bugfix',
			'感谢@xizifu提交的Pull Request',
			'对活动武将的js进行拆分（后续可能会继续拆分）',
			'添加微信杀武将：极孙策、极荀彧、极甄宓、曹彰、周不疑、李通、鲍三娘、徐氏',
			'添加欢杀武将：阎柔、严白虎、董卓、喵吕玲绮',
			'自嗨包狂神添加7月2日使用权',
			'To be continued...',
		];
		//更新武将
		var HuoDong_players = [
			'Mbaby_yanrou', 'wechat_sunce', 'wechat_xunyu', 'wechat_zhenji', 'wechat_caozhang', 'wechat_yj_zhoubuyi',
			'wechat_litong', 'wechat_baosanniang', 'wechat_xushi', 'Mbaby_yanbaihu', 'Mbaby_dongzhuo', 'Mmiao_lvlingqi',
		];
		//加载
		var dialog = ui.create.dialog(
			'<span class="text center">' +
			'新人制作扩展，希望大家支持<br>新人技术不足，希望大家包涵' +
			'<br>' +
			'<a href="https://github.com/mengxinzxz/HuoDong-update.git">点击前往活动武将Github仓库</a>' +
			'<br>' +
			'活动武将 ' + lib.extensionPack.活动武将.version + ' 更新内容' +
			'</span>', 'hidden');
		for (var i = 0; i < HuoDong_update.length; i++) {
			if (HuoDong_update[i] == '/setPlayer/') {
				if (HuoDong_players.length) dialog.addSmall([HuoDong_players, 'character']);
			}
			else {
				var li = document.createElement('li');
				li.innerHTML = HuoDong_update[i];
				li.style.textAlign = 'left';
				dialog.content.appendChild(li);
			}
		}
		dialog.open();
		var hidden = false;
		if (!ui.auto.classList.contains('hidden')) {
			ui.auto.hide();
			hidden = true;
		}
		game.pause();
		var control = ui.create.control('确定', function () {
			dialog.close();
			control.close();
			if (hidden) ui.auto.show();
			game.resume();
		});
	};
	var version = lib.config.extension_活动武将_HDversion;
	if (!version || version != lib.extensionPack.活动武将.version) {
		lib.game.showChangeLog = function () {
			game.saveConfig('extension_活动武将_HDversion', lib.extensionPack.活动武将.version);
			game.bolShowNewPack();
			lib.init.onfree();
		};
	}

	//快捷添加/删除武将
	game.HDdeleteCharacter = function (name) {
		if (lib.character[name]) delete lib.character[name];
		var packs = Object.keys(lib.characterPack).filter(pack => lib.characterPack[pack][name]);
		if (packs.length) packs.forEach(pack => delete lib.characterPack[pack][name]);
	};
	game.HDaddCharacter = function (name, character, packss) {
		game.HDdeleteCharacter(name);
		if (!packss) lib.character[name] = character;
		else {
			var packs = packss.split(':').filter(p => lib.config.all.characters.includes(p));
			packs.forEach(pack => lib.characterPack[pack][name] = character);
			if (packs.some(p => lib.config.characters.includes(p))) lib.character[name] = character;
		}
	};
	//移动武将所在武将包
	game.HDmoveCharacter = function (name, packss) {
		var nameinfo = get.character(name);
		if (nameinfo) {
			if (!nameinfo[4]) nameinfo[4] = [];
			game.HDaddCharacter(name, nameinfo, packss);
		}
	};

	//检测扩展是否存在的简化写法
	game.TrueHasExtension = function (ext) {
		return lib.config.extensions && lib.config.extensions.includes(ext);
	};
	game.HasExtension = function (ext) {
		return game.TrueHasExtension(ext) && lib.config['extension_' + ext + '_enable'];
	};

	//十周年UI美化素材
	if (game.HasExtension('十周年UI') && game.getFileList && game.readFile && game.writeFile) {
		for (var img of ['leijin', 'bianzhen', 'mingzhi']) lib.card['zhengsu_' + img].fullskin = true;
		game.getFileList('extension/十周年UI/image/card', (folders, files) => {
			//整肃
			if (!files.includes('zhengsu_leijin.png')) {
				game.readFile('extension/活动武将/image/card/zhengsu_leijin.png', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'zhengsu_leijin.png', () => { });
				});
			}
			if (!files.includes('zhengsu_bianzhen.png')) {
				game.readFile('extension/活动武将/image/card/zhengsu_bianzhen.png', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'zhengsu_bianzhen.png', () => { });
				});
			}
			if (!files.includes('zhengsu_mingzhi.png')) {
				game.readFile('extension/活动武将/image/card/zhengsu_mingzhi.png', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'zhengsu_mingzhi.png', () => { });
				});
			}
			if (!files.includes('zhengsu_leijin.webp')) {
				game.readFile('extension/活动武将/image/card/zhengsu_leijin.webp', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'zhengsu_leijin.webp', () => { });
				});
			}
			if (!files.includes('zhengsu_bianzhen.webp')) {
				game.readFile('extension/活动武将/image/card/zhengsu_bianzhen.webp', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'zhengsu_bianzhen.webp', () => { });
				});
			}
			if (!files.includes('zhengsu_mingzhi.webp')) {
				game.readFile('extension/活动武将/image/card/zhengsu_mingzhi.webp', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'zhengsu_mingzhi.webp', () => { });
				});
			}
			//闪闪
			if (!files.includes('bol_shanshan.png')) {
				game.readFile('extension/活动武将/image/card/bol_shanshan.png', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'bol_shanshan.png', () => { });
				});
			}
			if (!files.includes('bol_shanshan.webp')) {
				game.readFile('extension/活动武将/image/card/bol_shanshan.webp', (data) => {
					game.writeFile(data, 'extension/十周年UI/image/card', 'bol_shanshan.webp', () => { });
				});
			}
		});
	}

	//Hidden--作者专属
	if (lib.config.connect_nickname == '萌新（转型中）') {
		lib.extensionMenu['extension_活动武将'].FenJieXianAuthor = {
			name: '<li>作者专属',
			clear: true,
		};
		//检查公告
		lib.extensionMenu['extension_活动武将'].HDcheckNew = {
			name: '检查更新公告',
			clear: true,
			onclick: function (bool) {
				game.bolShowNewPack();
			},
		};
	}

	//官方武将包保护机制
	//添加
	lib.config.all.sgscharacters.push('diy');
	//检测
	var openCharacterPack = lib.config.all.sgscharacters.filter(i => lib.config.hiddenCharacterPack.includes(i));
	if (openCharacterPack.length) {
		lib.config.hiddenCharacterPack.removeArray(openCharacterPack);
		game.saveConfig('hiddenCharacterPack', lib.config.hiddenCharacterPack);
		alert('检测到官方武将包' + get.translation(openCharacterPack) + '被隐藏，可能会使得部分技能函数无法读取从而导致问题，即将为您解除这些武将包的隐藏并重启游戏');
		setTimeout(function () {
			game.reload();
		}, 2000);
	}

	//precBoss
	//Boss模式编辑
	if (get.mode() == 'boss') {
		//等阶设置（所有boss对战的等阶加成均为神武再世等阶加成方式）
		if (!lib.config.extension_活动武将_Boss_TZ_level) lib.config.extension_活动武将_Boss_TZ_level = '1';
		if (!lib.config.extension_活动武将_Boss_YZ_level) lib.config.extension_活动武将_Boss_YZ_level = '1';
		lib.skill._boss_tz_level = {
			charlotte: true,
			ruleSkill: true,
			trigger: { global: 'gameStart' },
			firstDo: true,
			priority: Infinity,
			direct: true,
			content: function () {
				var num1 = lib.config.extension_活动武将_Boss_TZ_level;
				var num2 = lib.config.extension_活动武将_Boss_YZ_level;
				switch (player.identity) {
					case 'cai':
						player.node.framebg.dataset.decoration = 'none';
						switch (num1) {
							case '2':
								player.directgain(get.cards(1));
								break;
							case '3':
								player.directgain(get.cards(1));
								player.addSkill('boss_tz_sha');
								player.maxHp = player.maxHp + 1;
								player.hp = player.hp + 1;
								player.update();
								player.node.framebg.dataset.decoration = 'bronze';
								break;
							case '4':
								player.directgain(get.cards(2));
								player.addSkill('boss_tz_sha');
								player.addSkill('boss_tz_draw');
								player.maxHp = player.maxHp + 1;
								player.hp = player.hp + 1;
								player.update();
								player.node.framebg.dataset.decoration = 'silver';
								break;
							case '5':
								player.directgain(get.cards(2));
								player.addSkill('boss_tz_sha');
								player.addSkill('boss_tz_draw');
								player.addSkill('boss_tz_chongsheng');
								player.maxHp = player.maxHp + 2;
								player.hp = player.hp + 2;
								player.update();
								player.node.framebg.dataset.decoration = 'gold';
								break;
						}
						player.node.framebg.dataset.auto = player.node.framebg.dataset.decoration;
						break;
					case 'zhu': case 'zhong':
						if (game.boss_shenwuzaishi) {
							player.node.framebg.dataset.decoration = 'none';
							switch (num2) {
								case '2':
									player.directgain(get.cards(1));
									player.addSkill('boss_yz_equip');
									player.maxHp = player.maxHp + 1;
									player.hp = player.hp + 1;
									player.update();
									break;
								case '3':
									player.directgain(get.cards(1));
									player.addSkill('boss_yz_sha');
									player.addSkill('boss_yz_shax');
									player.maxHp = player.maxHp + 2;
									player.hp = player.hp + 2;
									player.update();
									player.node.framebg.dataset.decoration = 'bronze';
									break;
								case '4':
									player.directgain(get.cards(2));
									player.addSkill('boss_yz_sha');
									player.addSkill('boss_yz_draw');
									player.maxHp = player.maxHp + 3;
									player.hp = player.hp + 3;
									player.update();
									player.node.framebg.dataset.decoration = 'silver';
									break;
								case '5':
									player.directgain(get.cards(2));
									player.addSkill('boss_yz_sha');
									player.addSkill('boss_yz_kunshou');
									player.maxHp = player.maxHp + 5;
									player.hp = player.hp + 5;
									player.update();
									player.node.framebg.dataset.decoration = 'gold';
									break;
							}
							player.node.framebg.dataset.auto = player.node.framebg.dataset.decoration;
						}
						break;
				}
			},
		};
		//神武再世
		lib.boss.boss_taowu.randchoice = function (name, list) {
			if (Math.random() > 1 / 3) return name;
			else {
				var arr = ['shen_caocao', 'shen_simayi', 'shen_guanyu', 'shen_zhugeliang', 'shen_zhaoyun', 'shen_zhouyu', 'shen_lvmeng', 'shen_lvbu', 'shen_liubei', 'shen_luxun', 'shen_ganning', 'ol_zhangliao', 'shen_zhenji', 'shen_caopi', 'key_kagari', 'key_shiki', 'db_key_hina', 'shen_sunquan', 'junk_zhangjiao'].filter(function (name) {
					return lib.character[name] && (!lib.character[name][4] || !lib.character[name][4].includes('unseen'));
				});
				arr.removeArray(list);
				return arr.randomGet();
			}
		};
		lib.boss.boss_taowu.control = function (type, control) {
			if (type == 'cancel') {
				if (!control.classList.contains('glow')) return;
				var dialog = control.dialog;
				dialog.content.removeChild(control.backup1);
				dialog.buttons.removeArray(control.backup2);

				game.uncheck();
				game.check();
			}
			else {
				var control = ui.create.control('神将', function () {
					if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
						return;
					}
					var dialog = _status.event.dialog;
					this.dialog = dialog;
					if (this.classList.contains('glow')) {
						this.backup1.remove();
						dialog.buttons.removeArray(this.backup2);
					}
					else {
						var links = [];
						for (var i = 0; i < dialog.buttons.length; i++) {
							links.push(dialog.buttons[i].link);
						}
						for (var i = 0; i < this.backup2.length; i++) {
							if (links.includes(this.backup2[i].link)) {
								this.backup2[i].style.display = 'none';
							}
							else {
								this.backup2[i].style.display = '';
							}
						}
						dialog.content.insertBefore(this.backup1, dialog.buttons[0].parentNode);
						dialog.buttons.addArray(this.backup2);
					}
					this.classList.toggle('glow');

					game.uncheck();
					game.check();
				});
				control.backup1 = ui.create.div('.buttons');
				control.backup2 = ui.create.buttons(['shen_caocao', 'shen_simayi', 'shen_guanyu', 'shen_zhugeliang', 'shen_zhaoyun', 'shen_zhouyu', 'shen_lvmeng', 'shen_lvbu', 'shen_liubei', 'shen_luxun', 'shen_ganning', 'ol_zhangliao', 'shen_zhenji', 'shen_caopi', 'key_kagari', 'key_shiki', 'db_key_hina', 'shen_sunquan', 'junk_zhangjiao'].filter(function (name) {
					return lib.character[name] && (!lib.character[name][4] || !lib.character[name][4].includes('unseen'));
				}), 'character', control.backup1);
				return control;
			}
		};
		lib.boss.boss_taowu.init = function () {
			game.boss_shenwuzaishi = true;
			game.addGlobalSkill('boss_shenwuzaishi');
			game.addGlobalSkill('TheDayIBecomeAGod');
			game.addGlobalSkill('thedayibecomeagod');
			var list = ['lebu', 'bingliang'];
			for (var i = 0; i < game.players.length; i++) {
				switch (game.players[i].name1) {
					case 'shen_guanyu': {
						game.players[i].equip(game.createCard2('guilongzhanyuedao', 'spade', 5));
						lib.inpile.add('guilongzhanyuedao');
						list.push('qinglong');
						break;
					}
					case 'shen_zhugeliang': {
						game.players[i].equip(game.createCard2('qimenbagua', 'spade', 2));
						list.push('bagua');
						lib.inpile.add('qimenbagua');
						break;
					}
					case 'shen_zhouyu': {
						game.players[i].equip(game.createCard2('chiyanzhenhunqin', 'diamond', 1));
						list.push('zhuque');
						lib.inpile.add('chiyanzhenhunqin');
						break;
					}
					case 'shen_caocao': {
						game.players[i].equip(game.createCard2('juechenjinge', 'spade', 5));
						list.push('jueying');
						lib.inpile.add('juechenjinge');
						break;
					}
					case 'shen_zhaoyun': {
						game.players[i].equip(game.createCard2('chixueqingfeng', 'spade', 6));
						list.push('qinggang');
						lib.inpile.add('chixueqingfeng');
						break;
					}
					case 'shen_lvbu': {
						game.players[i].equip(game.createCard2('xiuluolianyuji', 'diamond', 12));
						list.push('fangtian');
						lib.inpile.add('xiuluolianyuji');
						break;
					}
					case 'shen_simayi': {
						game.players[i].equip(game.createCard2('xuwangzhimian', 'diamond', 4));
						lib.inpile.add('xuwangzhimian');
						break;
					}
					case 'shen_liubei': {
						game.players[i].equip(game.createCard2('longfenghemingjian', 'spade', 2));
						lib.inpile.add('longfenghemingjian');
						list.push('cixiong');
						break;
					}
					case 'shen_lvmeng': {
						game.players[i].equip(game.createCard2('guofengyupao', 'diamond', 3));
						lib.inpile.add('guofengyupao');
						break;
					}
					case 'shen_luxun': {
						game.players[i].equip(game.createCard2('qicaishenlu', 'diamond', 3));
						lib.inpile.add('qicaishenlu');
						break;
					}
					case 'shen_ganning': case 'key_iwasawa': {
						game.players[i].equip(game.createCard2('jinwuluorigong', 'heart', 5));
						lib.inpile.add('jinwuluorigong');
						list.push('qilin');
						break;
					}
					case 'ol_zhangliao': case 'key_noda': {
						game.players[i].equip(game.createCard2('xingtianpojunfu', 'diamond', 5));
						lib.inpile.add('xingtianpojunfu');
						list.push('guanshi');
						break;
					}
					case 'shen_zhenji': {
						game.players[i].equip(game.createCard2('lingsheji', 'club', 12));
						lib.inpile.add('lingsheji');
						break;
					}
					case 'shen_caopi': {
						game.players[i].equip(game.createCard2('shanrangzhaoshu', 'spade', 13));
						lib.inpile.add('shanrangzhaoshu');
						break;
					}
					case 'key_kagari': {
						game.players[i].equip(game.createCard2('goujiangdesidai', 'heart', 1));
						lib.inpile.add('goujiangdesidai');
						break;
					}
					case 'key_shiki': {
						game.players[i].equip(game.createCard2('niaobaidaowenha', 'diamond', 13));
						lib.inpile.add('niaobaidaowenha');
						break;
					}
					case 'db_key_hina': {
						game.players[i].equip(game.createCard2('shenzhixiunvfu', 'spade', 13));
						lib.inpile.add('shenzhixiunvfu');
						break;
					}
					case 'shen_sunquan': {
						game.players[i].equip(game.createCard2('changandajian_equip4', 'heart', 10));
						break;
					}
					case 'junk_zhangjiao': {
						game.players[i].equip(game.createCard2('bol_sanshou', 'diamond', 12));
						break;
					}
				}
			}
			lib.inpile.remove('wuzhong');
			lib.inpile.remove('jiedao');
			lib.inpile.add('sadouchengbing');
			lib.inpile.add('yihuajiemu');
			lib.inpile.add('gubuzifeng');
			for (var i = 0; i < ui.cardPile.childElementCount; i++) {
				var node = ui.cardPile.childNodes[i];
				if (node.name == 'wuzhong') node.init([node.suit, node.number, 'sadouchengbing']);
				else if (node.name == 'jiedao') node.init([node.suit, node.number, 'yihuajiemu']);
				else if (list.includes(node.name)) {
					lib.inpile.remove(node.name);
					node.remove();
				}
			}
			var cards = [
				game.createCard2('gubuzifeng', 'club', 5),
				game.createCard2('gubuzifeng', 'diamond', 7)
			];
			while (cards.length > 0) {
				ui.cardPile.insertBefore(cards.shift(), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childElementCount - 1)]);
			}
			lib.inpile.sort(lib.sort.card);
		};
	}
	//precC
	//对局机制优化
	//整肃
	if (lib.config.extension_活动武将_HD_zhengsu) {
		lib.rank.rarity.epic.addArray(['sp_huangfusong', 'sp_zhujun']);
		lib.skill.zhengsu.subSkill.leijin = {
			mod: {
				aiOrder: function (player, card, num) {
					if (typeof card.number != 'number') return;
					var history = player.getHistory('useCard', function (evt) {
						return evt.isPhaseUsing();
					});
					if (history.length == 0) return num + 10 * (14 - card.number);
					var num = get.number(history[0].card);
					if (!num) return;
					for (var i = 1; i < history.length; i++) {
						var num2 = get.number(history[i].card);
						if (!num2 || num2 <= num) return;
						num = num2;
					}
					if (card.number > num) return num + 10 * (14 - card.number);
				},
			},
			mark: true,
			trigger: { player: 'useCard1' },
			lastDo: true,
			charlotte: true,
			forced: true,
			popup: false,
			init: function (player) {
				var zsbgxx = document.querySelector('.zhengsubeijing1');
				var zsbggg = document.querySelector('.zhengsubeijing2');
				if (!zsbgxx) {
					player.storage.zhengsu_leijingua = ui.create.div('.zhengsubeijing1', ui.arena);
					player.storage.zhengsu_leijingua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出3张牌' + '<br>出牌点数递增';
					player.storage.zhengsu_leijingua2 = true;
				}
				else if (!zsbggg) {
					player.storage.zhengsu_leijingua = ui.create.div('.zhengsubeijing2', ui.arena);
					player.storage.zhengsu_leijingua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出3张牌' + '<br>出牌点数递增';
					player.storage.zhengsu_leijingua3 = true;
				}
				else {
					player.storage.zhengsu_leijingua = ui.create.div('.zhengsubeijing3', ui.arena);
					player.storage.zhengsu_leijingua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出3张牌' + '<br>出牌点数递增';
				}
			},
			onremove: function (player) {
				var zsbgxx = document.querySelector('.zhengsubeijing1');
				var zsbggg = document.querySelector('.zhengsubeijing2');
				var zsbgxg = document.querySelector('.zhengsubeijing3');
				if (zsbgxx) zsbgxx.parentNode.removeChild(zsbgxx);
				if (zsbggg) zsbggg.parentNode.removeChild(zsbggg);
				if (zsbgxg) zsbgxg.parentNode.removeChild(zsbgxg);
				delete player.storage.zhengsu_leijin_markcount;
				delete player.storage.zhengsu_leijingua2;
				delete player.storage.zhengsu_leijingua3;
				delete player.storage.zhengsu_leijin;
			},
			filter: function (event, player) {
				return player.isPhaseUsing() && player.storage.zhengsu_leijin !== false;
			},
			content: function () {
				var list = player.getHistory('useCard', function (evt) {
					return evt.isPhaseUsing(player);
				});
				var goon = true;
				for (var i = 0; i < list.length; i++) {
					var num = get.number(list[i].card);
					if (typeof num != 'number') {
						goon = false;
						break;
					}
					if (i > 0) {
						var num2 = get.number(list[i - 1].card);
						if (typeof num2 != 'number' || num2 >= num) {
							goon = false;
							break;
						}
					}
					if (goon == true && list.length <= 2) {
						player.storage.zhengsu_leijingua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出' + (3 - list.length) + '张牌' + '<br>出牌点数大于' + get.number(list[i].card);
					} else if (goon == true && list.length > 2) {
						player.storage.zhengsu_leijingua.innerHTML = '发起者为' + get.translation(player) + '<br>出牌点数大于' + get.number(list[i].card);
					}
				}
				if (!goon) {
					game.broadcastAll(function (player) {
						player.storage.zhengsu_leijin = false;
						if (player.marks.zhengsu_leijin) player.marks.zhengsu_leijin.firstChild.innerHTML = '╳';
						delete player.storage.zhengsu_leijin_markcount;
						if (player.storage.zhengsu_leijingua2) {
							var zsbgxx = document.querySelector('.zhengsubeijing1');
							if (zsbgxx) zsbgxx.parentNode.removeChild(zsbgxx);
						}
						else if (player.storage.zhengsu_leijingua3) {
							var zsbggg = document.querySelector('.zhengsubeijing2');
							if (zsbggg) zsbggg.parentNode.removeChild(zsbggg);
						}
						else {
							var zsbgxg = document.querySelector('.zhengsubeijing3');
							if (zsbgxg) zsbgxg.parentNode.removeChild(zsbgxg);
						}
					}, player);
				}
				else {
					if (list.length > 2) {
						player.storage.zhengsu_leijin = true;
						game.broadcastAll(function (player, num) {
							if (player.marks.zhengsu_leijin) player.marks.zhengsu_leijin.firstChild.innerHTML = '○';
							player.storage.zhengsu_leijin = true;
							player.storage.zhengsu_leijin_markcount = num;
						}, player, num);
					}
					else game.broadcastAll(function (player, num) {
						player.storage.zhengsu_leijin_markcount = num;
					}, player, num);
				}
				player.markSkill('zhengsu_leijin');
			},
			intro: { content: '<li>条件：回合内所有于出牌阶段使用的牌点数递增且不少于三张。' },
		};
		lib.skill.zhengsu.subSkill.bianzhen = {
			mark: true,
			trigger: { player: 'useCard1' },
			firstDo: true,
			charlotte: true,
			forced: true,
			popup: false,
			init: function (player) {
				var zsbgxx = document.querySelector('.zhengsubeijing1');
				var zsbggg = document.querySelector('.zhengsubeijing2');
				if (!zsbgxx) {
					player.storage.zhengsu_bianzhengua = ui.create.div('.zhengsubeijing1', ui.arena);
					player.storage.zhengsu_bianzhengua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出2张牌' + '<br>出牌花色相同';
					player.storage.zhengsu_bianzhengua2 = true;
				}
				else if (!zsbggg) {
					player.storage.zhengsu_bianzhengua = ui.create.div('.zhengsubeijing2', ui.arena);
					player.storage.zhengsu_bianzhengua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出2张牌' + '<br>出牌花色相同';
					player.storage.zhengsu_bianzhengua3 = true;
				}
				else {
					player.storage.zhengsu_bianzhengua = ui.create.div('.zhengsubeijing3', ui.arena);
					player.storage.zhengsu_bianzhengua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出2张牌' + '<br>出牌花色相同';
				}
			},
			onremove: function (player) {
				var zsbgxx = document.querySelector('.zhengsubeijing1');
				var zsbggg = document.querySelector('.zhengsubeijing2');
				var zsbgxg = document.querySelector('.zhengsubeijing3');
				if (zsbgxx) zsbgxx.parentNode.removeChild(zsbgxx);
				if (zsbggg) zsbggg.parentNode.removeChild(zsbggg);
				if (zsbgxg) zsbgxg.parentNode.removeChild(zsbgxg);
				delete player.storage.zhengsu_bianzhen;
				delete player.storage.zhengsu_bianzhengua2;
				delete player.storage.zhengsu_bianzhengua3;
			},
			filter: function (event, player) {
				return player.isPhaseUsing() && player.storage.zhengsu_bianzhen !== false;
			},
			content: function () {
				var list = player.getHistory('useCard', function (evt) {
					return evt.isPhaseUsing();
				});
				var goon = true, suit = get.suit(list[0].card, false);
				if (goon == true && list.length <= 1) player.storage.zhengsu_bianzhengua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出' + (2 - list.length) + '张牌' + '<br>出牌花色为' + get.translation(suit);
				else if (goon == true && list.length > 1) player.storage.zhengsu_bianzhengua.innerHTML = '发起者为' + get.translation(player) + '<br>出牌花色为' + get.translation(suit);
				if (suit == 'none') goon = false;
				else {
					for (var i = 1; i < list.length; i++) {
						if (get.suit(list[i]) != suit) {
							goon = false;
							break;
						}
						if (goon == true && list.length <= 1) player.storage.zhengsu_bianzhengua.innerHTML = '发起者为' + get.translation(player) + '<br>还需出' + (2 - list.length) + '张牌' + '<br>出牌花色为' + get.translation(get.suit(list[i]));
						else if (goon == true && list.length > 1) player.storage.zhengsu_bianzhengua.innerHTML = '发起者为' + get.translation(player) + '<br>出牌花色为' + get.translation(get.suit(list[i]));
					}
				}
				if (!goon) {
					game.broadcastAll(function (player) {
						player.storage.zhengsu_bianzhen = false;
						if (player.marks.zhengsu_bianzhen) player.marks.zhengsu_bianzhen.firstChild.innerHTML = '╳';
						if (player.storage.zhengsu_bianzhengua2) {
							var zsbgxx = document.querySelector('.zhengsubeijing1');
							if (zsbgxx) zsbgxx.parentNode.removeChild(zsbgxx);
						}
						else if (player.storage.zhengsu_bianzhengua3) {
							var zsbggg = document.querySelector('.zhengsubeijing2');
							if (zsbggg) zsbggg.parentNode.removeChild(zsbggg);
						}
						else {
							var zsbgxg = document.querySelector('.zhengsubeijing3');
							if (zsbgxg) zsbgxg.parentNode.removeChild(zsbgxg);
						}
					}, player);
				}
				else if (list.length > 1) {
					game.broadcastAll(function (player) {
						if (player.marks.zhengsu_bianzhen) player.marks.zhengsu_bianzhen.firstChild.innerHTML = '○';
						player.storage.zhengsu_bianzhen = true;
					}, player);
				}
			},
			intro: { content: '<li>条件：回合内所有于出牌阶段使用的牌花色相同且不少于两张。' },
			ai: {
				effect: {
					player_use: function (card, player, target) {
						if (typeof card != 'object' || !player.isPhaseUsing()) return;
						var suitx = get.suit(card);
						var history = player.getHistory('useCard');
						if (!history.length) {
							var val = 0;
							if (player.hasCard(function (cardx) {
								return get.suit(cardx) == suitx && card != cardx && (!card.cards || !card.cards.includes(cardx)) && player.hasValueTarget(cardx);
							}, 'hs')) val = [2, 0.1];
							if (val) return val;
							return;
						}
						var num = 0;
						var suit = false;
						for (var i = 0; i < history.length; i++) {
							var suit2 = get.suit(history[i].card);
							if (!lib.suit.includes(suit2)) return;
							if (suit && suit != suit2) return;
							suit = suit2;
							num++;
						}
						if (suitx == suit && num == 1) return [1, 0.1];
						if (suitx != suit && (num > 1 || num <= 1 && player.hasCard(function (cardx) {
							return get.suit(cardx) == suit && player.hasValueTarget(cardx);
						}, 'hs'))) return 'zeroplayertarget';
					},
				},
			},
		};
		lib.skill.zhengsu.subSkill.mingzhi = {
			mark: true,
			trigger: { player: 'loseAfter' },
			firstDo: true,
			charlotte: true,
			forced: true,
			popup: false,
			init: function (player) {
				var zsbgxx = document.querySelector('.zhengsubeijing1');
				var zsbggg = document.querySelector('.zhengsubeijing2');
				if (!zsbgxx) {
					player.storage.zhengsu_mingzhigua = ui.create.div('.zhengsubeijing1', ui.arena);
					player.storage.zhengsu_mingzhigua.innerHTML = '发起者为' + get.translation(player) + '<br>需弃置2张牌' + '<br>弃置花色不同';
					player.storage.zhengsu_mingzhigua2 = true;
				}
				else if (!zsbggg) {
					player.storage.zhengsu_mingzhigua = ui.create.div('.zhengsubeijing2', ui.arena);
					player.storage.zhengsu_mingzhigua.innerHTML = '发起者为' + get.translation(player) + '<br>需弃置2张牌' + '<br>弃置花色不同';
					player.storage.zhengsu_mingzhigua3 = true;
				}
				else {
					player.storage.zhengsu_mingzhigua = ui.create.div('.zhengsubeijing3', ui.arena);
					player.storage.zhengsu_mingzhigua.innerHTML = '发起者为' + get.translation(player) + '<br>需弃置2张牌' + '<br>弃置花色不同';
				}
			},
			onremove: function (player) {
				var zsbgxx = document.querySelector('.zhengsubeijing1');
				var zsbggg = document.querySelector('.zhengsubeijing2');
				var zsbgxg = document.querySelector('.zhengsubeijing3');
				if (zsbgxx) zsbgxx.parentNode.removeChild(zsbgxx);
				if (zsbggg) zsbggg.parentNode.removeChild(zsbggg);
				if (zsbgxg) zsbgxg.parentNode.removeChild(zsbgxg);
				delete player.storage.zhengsu_mingzhi_list;
				delete player.storage.zhengsu_mingzhi;
				delete player.storage.zhengsu_mingzhi_markcount;
				delete player.storage.zhengsu_mingzhigua2;
				delete player.storage.zhengsu_mingzhigua3;
			},
			filter: function (event, player) {
				if (player.storage.zhengsu_mingzhi === false || event.type != 'discard') return false;
				var evt = event.getParent('phaseDiscard');
				return evt && evt.player == player;
			},
			content: function () {
				var goon = true, list = [];
				player.getHistory('lose', function (event) {
					if (!goon || event.type != 'discard') return false;
					var evt = event.getParent('phaseDiscard');
					if (evt && evt.player == player) {
						for (var i of event.cards2) {
							var suit = get.suit(i, player);
							if (list.includes(suit)) {
								goon = false;
								break;
							}
							else list.push(suit);
						}
					}
				});
				if (!goon) {
					game.broadcastAll(function (player) {
						player.storage.zhengsu_mingzhi = false;
						if (player.marks.zhengsu_mingzhi) player.marks.zhengsu_mingzhi.firstChild.innerHTML = '╳';
						if (player.storage.zhengsu_mingzhigua2) {
							var zsbgxx = document.querySelector('.zhengsubeijing1');
							if (zsbgxx) zsbgxx.parentNode.removeChild(zsbgxx);
						}
						else if (player.storage.zhengsu_mingzhigua3) {
							var zsbggg = document.querySelector('.zhengsubeijing2');
							if (zsbggg) zsbggg.parentNode.removeChild(zsbggg);
						}
						else {
							var zsbgxg = document.querySelector('.zhengsubeijing3');
							if (zsbgxg) zsbgxg.parentNode.removeChild(zsbgxg);
						}
						delete player.storage.zhengsu_mingzhi_list;
					}, player);
				}
				else {
					if (list.length > 1) {
						game.broadcastAll(function (player, list) {
							if (player.marks.zhengsu_mingzhi) player.marks.zhengsu_mingzhi.firstChild.innerHTML = '○';
							player.storage.zhengsu_mingzhi = true;
							player.storage.zhengsu_mingzhi_list = list;
							player.storage.zhengsu_mingzhi_markcount = list.length;
						}, player, list);
					}
					else game.broadcastAll(function (player, list) {
						player.storage.zhengsu_mingzhi_list = list;
						player.storage.zhengsu_mingzhi_markcount = list.length;
					}, player, list);
				}
				player.markSkill('zhengsu_mingzhi');
			},
			intro: { content: '<li>条件：回合内所有于弃牌阶段弃置的牌花色均不相同且不少于两张。' },
		};
		lib.translate.spyanji_info = '出牌阶段开始时，你可以进行' + get.ZhengSuInform() + '。若如此做，弃牌阶段结束时，若你整肃成功，你获得整肃奖励。';
		lib.translate.spzhengjun_info = '出牌阶段开始时，你可以进行' + get.ZhengSuInform() + '。若如此做，弃牌阶段结束时，若你整肃成功，你获得整肃奖励，然后你可以选择一名其他角色，令其也获得整肃奖励。';
		lib.translate.houfeng_info = '每轮限一次，一名其他角色的出牌阶段开始时，若其在你的攻击范围内，则你可以令其进行' + get.ZhengSuInform() + '。若如此做，其本回合弃牌阶段结束时，若其整肃成功，你与其获得整肃奖励。';
	}
	//仁库
	if (lib.config.extension_活动武将_HD_renku) {
		game.updateRenku = function () {
			game.broadcast(function (renku) {
				_status.renku = renku;
			}, _status.renku);
			if (!window.rkbg) {
				window.rkbg = ui.create.div('.renkubeijinggua', ui.arena);
				if (lib.config.hdwj_renkuIndex) {
					window.rkbg.style.setProperty('--l', Math.round(lib.config.hdwj_renkuIndex.x * document.body.offsetWidth) + 'px');
					window.rkbg.style.setProperty('--t', Math.round(lib.config.hdwj_renkuIndex.y * document.body.offsetHeight) + 'px');
				}
			}
			if (_status.renku.length < 6) {
				window.rkbg.innerHTML = '仁' + _status.renku.length;
			}
			else {
				window.rkbg.innerHTML = '仁' + '<b><font color=\"#FF5500\">' + _status.renku.length;
			}
			var flag = 0, ol = 0, ot = 0;
			function defaultevent(e) {
				e.preventDefault();
			}
			if (lib.config.touchscreen) {
				window.rkbg.addEventListener('touchstart', function (e) {
					var evt = e || window.event;
					ol = evt.touches[0].clientX - window.rkbg.offsetLeft;
					ot = evt.touches[0].clientY - window.rkbg.offsetTop;
					document.addEventListener('touchmove', defaultevent, false);
				});
				window.rkbg.addEventListener('touchmove', function (e) {
					var evt = e || window.event;
					var oleft = evt.touches[0].clientX - ol;
					var otop = evt.touches[0].clientY - ot;
					window.rkbg.style.left = oleft + 'px';
					window.rkbg.style.top = otop + 'px';
				});
				window.rkbg.addEventListener('touchend', function () {
					if (!lib.config.hdwj_renkuIndex) {
						lib.config.hdwj_renkuIndex = {
							x: this.offsetLeft / document.body.offsetWidth,
							y: this.offsetTop / document.body.offsetHeight,
						}
					} else {
						lib.config.hdwj_renkuIndex.x = this.offsetLeft / document.body.offsetWidth;
						lib.config.hdwj_renkuIndex.y = this.offsetTop / document.body.offsetHeight;
					}
					game.saveConfig('hdwj_renkuIndex', lib.config.hdwj_renkuIndex);
					document.removeEventListener('touchmove', defaultevent);
				});
			} else {
				window.rkbg.onmousedown = function (e) {
					var evt = e || window.event;
					if (document.setCapture) this.setCapture();
					if (window.captureEvents) window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
					flag = 1;
					ol = evt.clientX - window.rkbg.offsetLeft;
					ot = evt.clientY - window.rkbg.offsetTop;
				}
				document.onmousemove = function (e) {
					var evt = e || window.event;
					if (flag) {
						window.rkbg.style.left = parseInt(evt.clientX - ol) + 'px';
						window.rkbg.style.top = parseInt(evt.clientY - ot) + 'px';
					} else {
						return null;
					}
				}
				window.rkbg.onmouseup = function () {
					if (!lib.config.hdwj_renkuIndex) {
						lib.config.hdwj_renkuIndex = {
							x: this.offsetLeft / document.body.offsetWidth,
							y: this.offsetTop / document.body.offsetHeight,
						}
					} else {
						lib.config.hdwj_renkuIndex.x = this.offsetLeft / document.body.offsetWidth;
						lib.config.hdwj_renkuIndex.y = this.offsetTop / document.body.offsetHeight;
					}
					game.saveConfig('hdwj_renkuIndex', lib.config.hdwj_renkuIndex);
					if (document.releaseCapture) this.releaseCapture();
					if (window.releaseEvents) window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP); flag = 0;
				}
			}

			if (_status.renku.length == 0) {
				window.rkbg.remove(window.rkbg);
				window.rkbg = null;
			}
			else window.rkbg.onclick = function () {
				if (!window.dialogguagua) {
					window.dialogguagua = ui.create.dialog('仁库', _status.renku);
					window.rkbg.innerHTML = '❌';
				}
				else {
					window.dialogguagua.remove();
					window.dialogguagua = null;
					if (_status.renku.length < 6) {
						window.rkbg.innerHTML = '仁' + _status.renku.length;
					}
					else {
						window.rkbg.innerHTML = '仁' + '<b><font color=\"#FF5500\">' + _status.renku.length;
					}
				}
			}
		}
	}

	//特殊势力变更
	//特殊×出生√
	if (lib.config.extension_活动武将_HD_yrnsm) {
		game.HDaddCharacter('chengjichengcui', ['male', 'wei', 6, ['oltousui', 'olchuming'], []], 'yingbian');
		game.HDaddCharacter('clan_wuqiao', ['male', 'qun', 4, ['clanqiajue', 'clanmuyin'], ['clan:陈留吴氏', 'ext:活动武将/image/character/clan_wuqiao.jpg']], 'clan');
		game.HDaddCharacter('wangyan', ['male', 'qun', 3, ['yangkuang', 'cihuang', 'sanku'], ['ext:活动武将/image/character/wangyan.jpg']], 'sp');
		game.HDaddCharacter('clan_wanglun', ['male', 'wei', 3, ['clanqiuxin', 'clanjianyuan', 'clanzhongliu'], ['clan:太原王氏', 'ext:活动武将/image/character/clan_wanglun.jpg']], 'clan');
		game.HDaddCharacter('ol_peixiu', ['male', 'wei', 3, ['olmaozhu', 'oljinlan'], ['ext:活动武将/image/character/ol_peixiu.jpg']], 'sp');
	}

	//precGuoZhan(分界线，便于我搜过来)
	if (get.mode() == 'guozhan') {
		//国战武将技能修复
		if (get.config('onlyguozhan')) {
			//------------------------------删除武将------------------------------//
			if (lib.config.extension_活动武将_keymove) {
				delete lib.characterPack.mode_guozhan.gz_key_ushio;
				delete lib.character.gz_key_ushio;
				lib.characterSort.key.key_clannad.push('key_ushio');
				game.HDaddCharacter('key_ushio', ['female', 'key', 3, ['ushio_huanxin', 'ushio_xilv'], ['doublegroup:key:wei:shu:wu:qun:jin']], 'key');
				lib.translate.key_ushio = '冈崎汐';
			}
			//------------------------------删除武将------------------------------//

			//------------------------------增改武将------------------------------//
			//国战武将补充
			lib.characterSort.mode_guozhan.bilibili_GuoZhan = [];
			lib.translate.bilibili_GuoZhan = '国战补充';
			//技能
			let change_pack = {
				skill: {
					//卞夫人
					gzwanwei: {
						audio: 'wanwei',
						inherit: 'fuwei',
					},
				},
				dynamicTranslate: {

				},
				translate: {

				},
				character: {
					gz_bianfuren: ['female', 'wei', 3, ['gzwanwei', 'gzyuejian'], []],
					gz_re_xushu: ['male', 'shu', 4, ['gzqiance', 'gzjujian'], ['gzskin']],
					gz_wujing: ['male', 'wu', 4, ['donggui', 'fengyang_old'], ['gzskin']],
				},
			};
			for (const i in change_pack) {
				for (const j in change_pack[i]) {
					if (i == 'character') {
						if (!change_pack[i][j][4]) change_pack[i][j][4] = [];
						lib.characterPack.mode_guozhan[j] = change_pack[i][j];
					}
					lib[i][j] = change_pack[i][j];
				}
			}
		}
		//------------------------------选项------------------------------//
		//precGuozhan2
		//左慈---后续
		lib.skill.gzhuashen.drawCharacter = function (player, list) {
			game.broadcastAll(function (player, list) {
				var cards = [];
				for (var i = 0; i < list.length; i++) {
					var cardname = 'huashen_card_' + list[i];
					lib.card[cardname] = {
						fullimage: true,
						image: player.isUnderControl(true) ? 'character:' + list[i] : 'ext:活动武将/image/card/huashen_unknown.jpg'
					}
					lib.translate[cardname] = player.isUnderControl(true) ? get.rawName2(list[i]) : ' ';
					cards.push(game.createCard(cardname, '', ''));
				}
				player.$draw(cards, 'nobroadcast');
			}, player, list);
		};
		lib.skill.yigui.group = ['yigui_init', 'yigui_refrain', 'yigui_gzshan', 'yigui_gzwuxie'];
		const yiguiInfo = lib.translate.yigui_info;
		lib.translate.yigui_info = yiguiInfo.slice(0, yiguiInfo.indexOf('（')) + '（此牌指定或响应的角色须为未确定势力的角色或野心家或与此“魂”势力相同的角色）';
		//法正
		if (lib.config.extension_活动武将_HD_gzfazheng) {
			lib.skill.gzxuanhuo.subSkill.others = {
				forceaudio: true,
				audio: 'rexuanhuo',
				filter: function (event, player) {
					return !player.isUnseen() && player.countCards('h') && player.countCards('he') >= 2 && game.hasPlayer(target => {
						return lib.skill.gzxuanhuo.subSkill.others.filterTarget(null, player, target);
					});
				},
				enable: 'phaseUse',
				filterTarget: function (card, player, target) {
					return target != player && target.hasSkill('gzxuanhuo') && player.isFriendOf(target);
				},
				selectTarget: function () {
					var targets = game.filterPlayer(target => lib.skill.gzxuanhuo.subSkill.others.filterTarget(null, _status.event.player, target));
					return targets.length > 1 ? 1 : -1;
				},
				prompt: function () {
					var targets = game.filterPlayer(target => lib.skill.gzxuanhuo.subSkill.others.filterTarget(null, _status.event.player, target));
					return '弃置一张手牌并交给' + get.translation(targets) + (targets.length > 1 ? '中的一人' : '') + '一张牌，然后获得以下技能中的一个：〖武圣〗〖咆哮〗〖龙胆〗〖铁骑〗〖烈弓〗〖狂骨〗';
				},
				filterCard: function (card) {
					return ui.selected.cards.length || get.position(card) == 'h';
				},
				selectCard: 2,
				position: 'he',
				check: function (card) {
					var player = _status.event.player;
					if (player.hasSkill('gzpaoxiao', true) || player.getEquip('zhuge')) return 0;
					if (player.countCards('h', function (cardx) {
						return cardx != card && cardx.name == 'sha' && player.hasUseTarget(cardx);
					}) < (player.getCardUsable('sha') + 1)) return 0;
					return 7 - get.value(card);
				},
				usable: 1,
				discard: false,
				delay: false,
				content: function () {
					'step 0'
					player.discard(cards[0]);
					if (target) target.gain(cards[1], player, 'giveAuto');
					'step 1'
					var list = ['new_rewusheng', 'gzpaoxiao', 'new_longdan', 'new_tieji', 'liegong', 'xinkuanggu'];
					player.chooseControl(list).set('ai', () => {
						var list = _status.event.controls.slice();
						if (list.includes('gzpaoxiao')) return 'gzpaoxiao';
						return list.randomGet();
					}).set('prompt', '选择并获得一项技能直到回合结束');
					'step 2'
					player.addTempSkills('fz_' + result.control);
					'step 3'
					game.delayx();
				},
				ai: {
					order: 8,
					result: { player: 1 },
				},
			};
			lib.translate.gzxuanhuo_info = '与你势力相同的其他角色的出牌阶段限一次，其可弃置一张手牌并交给你一张牌，然后选择获得以下一项技能直到回合结束：〖武圣〗、〖咆哮〗、〖龙胆〗、〖铁骑〗、〖烈弓〗、〖狂骨〗。';
		}
		//唐咨
		lib.skill.gzxingzhao.derivation = 'xunxun';
		lib.skill.gzxingzhao.subSkill.use = {
			audio: 'gzxingzhao',
			trigger: { player: 'damageEnd' },
			filter: function (event, player) {
				var num = lib.skill.gzxingzhao.getNum();
				return num >= 2 && event.source && event.source.isIn() && player.countCards('h') != event.source.countCards('h');
			},
			logTarget: function (event, player) {
				return player.countCards('h') > event.source.countCards('h') ? event.source : player;
			},
			forced: true,
			content: function () {
				lib.skill.gzxingzhao.subSkill.use.logTarget(trigger, player).draw();
			},
		};
		lib.translate.gzxingzhao_info = '锁定技，你根据场上存在受伤角色的势力数获得以下效果：1个或以上，你视为拥有〖恂恂〗；2个或以上，当你受到伤害后，你与伤害来源两者中手牌数唯一最少的角色摸一张牌；3个或以上，你的手牌上限+4；4个或以上，当你失去装备区的牌后，你摸一张牌。';
	}

	//设置稀有度
	//鄙人用脚设置的稀有度，只图博君一笑
	if (lib.rank) {
		//平凡升阶
		lib.rank.rarity.junk.remove('sunshao');
		lib.rank.rarity.junk.remove('re_chenqun');
		//设置评级
		var rank = {
			rarity: {
				//传说
				legend: [
					//活动武将包武将
					'bilibili_zhengxuan',
					'old_zuoci',
					'bilibili_guanning',
					'bilibili_litiansuo',
					'bilibili_kuangshen04',
					'diy_lvmeng',
					'golden_zuoci',
					'BT_puyuan',
					'lz_sufei',
					'FD_huaxiong',
					'bilibili_shen_guojia',
					'bilibili_re_xusheng',
					//原活动配件武将
					//SSS传说武将评级
					//DDDD
					'sunce',
					're_sunce',
					'machao',
					'dingyuan',
					//正经补充
					'sp_ol_zhanghe',
					'zhangxuan',
					'zhouyi',
					'tengfanglan',
					'caoxiancaohua',
					//----------------分界线----------------
					'old_zhangzhongjing',
					'oldx_zhangzhongjing',
					'old_shen_simayi',
					'old_shen_xunyu',
					'old_shen_taishici',
					'old_shen_sunce',
					'junk_zhangjiao',
				],
				//史诗
				epic: [
					//活动武将包武将
					'NS_chenlong',
					'NS_youji',
					'FD_sunjian',
					'FD_feixiongjunyou',
					'FD_fengyaojun',
					'NS_yinhu',
					'NS_wuma',
					'NS_zishu',
					'lz_tangzi',
					'lz_liuqi',
					'bol_zhangxiu',
					'bol_sunjian',
					'FD_dongyue',
					//原活动配件武将
					'ol_maliang',
					'old_jiakui',
					'old_qiaozhou',
					'old_clan_xunshu',
					'old_clan_xunchen',
					'old_clan_xuncai',
					'oldx_clan_xuncai',
					'old_clan_xuncan',
					'old_sb_ganning',
					'old_yj_ganning',
					'old_dengai',
					'junk_simayi',
					'old_zhangyì',
					'old_yanghuiyu',
					'old_zhangqiying',
					'junk_lidian',
				],
				//稀有
				rare: [
					//活动武将包武将
					'bilibili_sp_xuyou',
					'bol_liuyu',
					'bol_liuxie',
					'bol_zhanglu',
					'GD_gaolan',
					'FD_niufudongxie',
					'FD_guosi',
					'FD_lijue',
					'NS_xugou',
					'NS_weiyang',
					'NS_sishe',
					'NS_haizhu',
					'NS_shenhou',
					'lz_huangquan',
					'FD_feixiongjunzuo',
					//原活动配件武将
					'old_yuanji',
					'junk_duanwei',
					'junk_xuyou',
					'old_yj_zhanghe',
					'old_zhoufei',
					'old_sunluyu',
					'zhaoxiang',
					'old_zhouchu',
					'old_liuzhang',
					'old_wangling',
					'junk_zhangrang',
					'old_zhaoxiang',
					'ol_manchong',
					'ol_yujin',
					'old_xushao',
				],
				//普通
				common: [
				],
				//平凡
				junk: [
					//活动武将包武将
					'NS_chouniu',
					'NS_maotu',
					'FD_baolvejun',
					//原活动配件武将
					'old_ol_xiaoqiao',
					'old_zhanghe',
					'old_zhugejin',
				],
			},
			//出场率
			s: [
			],
			ap: [
			],
			a: [
			],
			am: [
			],
			bp: [
			],
			b: [
			],
			bm: [
			],
			c: [
			],
			d: [
			],
		};
		//块级修改
		const mx_rarity = {
			legend: ['decadeQiHuan', 'decadeZhuoGui', 'MiNikill', 'MX_feihongyinxue', 'decadeKuiBa', 'HD_chaoshikong', 'extra'],
			epic: ['WeChatkill', 'hezongkangqincharacter'],
			rare: ['yingbian'],
			junk: ['sb'],
		};
		for (const i in mx_rarity) {
			for (const j of mx_rarity[i]) {
				for (const name of Object.keys(lib.characterPack[j])) {
					if (!Object.keys(rank.rarity).some(rarity => rank.rarity[rarity].includes(name))) rank.rarity[i].add(name);
				}
			}
		}
		for (const name of Object.keys(lib.characterPack['huodongcharacter'])) {
			if (!Object.keys(rank.rarity).some(rarity => rank.rarity[rarity].includes(name))) {
				if (['Chuodong', 'CDanJi', 'CSCS', 'Csxydormitory', 'CXuanDie'].some(pack => lib.characterSort.huodongcharacter[pack].includes(name))) rank.rarity['legend'].push(name);
				else rank.rarity['rare'].push(name);
			}
		}
		for (const name of Object.keys(lib.characterPack['NianShouCharacter'])) {
			if (!Object.keys(rank.rarity).some(rarity => rank.rarity[rarity].includes(name))) {
				if (lib.characterSort.NianShouCharacter.NianShouCharacter2018.includes(name)) rank.rarity['legend'].push(name);
				if (lib.characterSort.NianShouCharacter.NianShouCharacter2019.includes(name)) rank.rarity['legend'].push(name);
			}
		}
		for (const name of lib.characterSort['diy'].diy_trashbin) {
			if (!Object.keys(rank.rarity).some(rarity => rank.rarity[rarity].includes(name))) rank.rarity['junk'].add(name);
		}
		for (const name of lib.characterSort['sp'].sp_qifu) {
			if (!rank.rarity.legend.includes(name)) rank.rarity['legend'].add(name);
		}
		//总置
		var addRank = function (rank) {
			if (!lib.rank) return;
			for (var i in rank) {
				if (i == 'rarity') continue;
				lib.rank[i].addArray(rank[i]);
			}
			if (rank.rarity && lib.rank.rarity) {
				for (var i in rank.rarity) {
					if (!lib.rank.rarity[i]) lib.rank.rarity[i] = [];
					lib.rank.rarity[i].addArray(rank.rarity[i]);
				}
			}
		};
		addRank(rank);
	}

	//名称重置
	if (lib.config.extension_活动武将_HD_REname) {
		var list = Object.keys(lib.translate);
		var list2 = ['jsrg_zhenji', 'wolong_card', 'pcaudio_wolong_card'];//不修改名称的ID白名单
		var list3 = ['卧龙凤雏', '祭风卧龙'];//不修改名称的translate白名单
		[['张机', '张仲景'], ['蔡琰', '蔡文姬'], ['卧龙', '卧龙诸葛'],
		['严虎', '严白虎'], ['甄宓', '甄姬'], ['伏寿', '伏皇后'],
		['吉本', '吉平']].forEach(name => {
			list.filter(name2 => !list2.includes(name2) && lib.translate[name2] && list3.filter(name4 => lib.translate[name2].includes(name4)).length == 0 && lib.translate[name2].includes(name[0])).forEach(name3 => {
				var str = lib.translate[name3];
				var num = str.indexOf(name[0]);
				lib.translate[name3] = str.slice(0, num) + name[1] + str.slice(num + name[0].length, str.length);
			});
		});
	}

	//虎牢关
	if (lib.config.extension_活动武将_ShenLvBu && get.mode() != 'boss' && (!lib.config.plays || !lib.config.plays.boss)) {
		game.loadModeAsync('boss', mode => {
			['skill', 'translate'].forEach(i => {
				for (var j in mode[i]) {
					if (!lib[i][j] && !j.startsWith('_')) lib[i][j] = mode[i][j];
					if (i == 'skill') game.finishSkill(j);
				}
			});
			//虎牢关彩蛋
			['boss_lvbu1', 'boss_lvbu2', 'boss_lvbu3'].forEach(name => {
				lib.rank.rarity.legend.add(name);
				if (!lib.characterIntro[name] && lib.characterIntro.lvbu) lib.characterIntro[name] = lib.characterIntro.lvbu;
			});
			lib.characterSort.extra.boss_hlg = ['boss_lvbu1', 'boss_lvbu2', 'boss_lvbu3'];
			game.HDaddCharacter('boss_lvbu1', ['male', 'shen', 8, ['wushuang', 'mashu', 'boljingjia', 'boss_aozhan'], ['mode:boss']], 'extra');
			game.HDaddCharacter('boss_lvbu2', ['male', 'shen', 6, ['wushuang', 'mashu', 'xiuluo', 'shenwei', 'shenji'], ['mode:boss']], 'extra');
			game.HDaddCharacter('boss_lvbu3', ['male', 'shen', 6, ['wushuang', 'shenqu', 'jiwu'], ['mode:boss']], 'extra');
			lib.translate.boss_hlg = 'OL·虎牢关';
		});
	}

	//precA
	//配音
	//引用国战配音
	if (!lib.skill.yigui) lib.skill.yigui = { audio: 2 };
	if (!lib.skill.gzshilu) lib.skill.gzshilu = { audio: 2 };
	if (!lib.skill.gzxiongnve) lib.skill.gzxiongnve = { audio: 2 };

	//技能配音修正
	lib.skill.moon_jushou.audio = 'xinjushou';
	lib.skill.jushou.audio = 'xinjushou';
	lib.skill.jiewei.audio = 'xinjiewei';
	lib.skill.liangying.audio = false;
	lib.skill.juntun.audio = 'ext:活动武将/audio/skill:true';
	lib.skill.jiaojie.audio = 'ext:活动武将/audio/skill:true';
	lib.skill.new_juexiang.audio = 'juexiang';
	lib.skill.polu.subSkill.damage.audio = 'polu';
	lib.skill.reyixiang.subSkill.card.audio = 'yixiang';
	lib.skill.reyixiang.subSkill.card.audioname = ['re_taoqian'];
	lib.skill.jishi.subSkill.draw.audio = 'jishi';
	lib.skill.xinhuangtian.audio = 'huangtian2';
	lib.skill.dcfuxue.subSkill.draw.audio = 'dcfuxue';
	lib.skill.sbhuangtian.subSkill.mark.audio = 'sbhuangtian';
	lib.skill.fengxiang.subSkill.draw.audio = 'fengxiang';
	lib.skill.tianze.subSkill.draw.audio = 'tianze';
	lib.skill.spshidi.subSkill.use.audio = 'spshidi';
	lib.skill.spshidi.subSkill.beused.audio = 'spshidi';
	lib.skill.huaiyuan.subSkill.init.audio = 'huaiyuan';
	lib.skill.huaiyuan.subSkill.die.audio = 'huaiyuan';
	lib.skill.weishu.subSkill.discard.audio = 'weishu';
	lib.skill.twhengjiang.audio = 'hengjiang';
	lib.skill.jianhui.subSkill.draw.audio = 'jianhui';
	lib.skill.reqiaobian.subSkill.jieshu.audio = 'reqiaobian';
	lib.skill.yuzhang.subSkill.skip.audio = 'yuzhang';
	lib.skill.dcliuzhuan.subSkill.gain.audio = 'dcliuzhuan';
	lib.skill.yizan_use.audio = 'yizan_respond_shan';
	lib.skill.splveying.subSkill.add.audio = 'splveying';
	lib.skill.spyingwu.subSkill.add.audio = 'spyingwu';
	lib.skill.fuping.subSkill.mark.audio = 'fuping';
	lib.skill.scfuhai.subSkill.usea.audio = 'scfuhai';
	lib.skill.scfuhai.subSkill.die.audio = 'scfuhai';
	lib.skill.tianzuo.subSkill.remove.audio = 'tianzuo';
	lib.skill.dcbianzhuang.subSkill.refresh.audio = 'dcbianzhuang';

	//武将配音audioname添加
	game.HDsetAudioname = function (skills, list) {
		if (!Array.isArray(skills)) skills = [skills];
		if (!Array.isArray(list)) list = [list];
		skills.forEach(skill => {
			if (!lib.skill[skill]) return;
			if (!lib.skill[skill].audioname) lib.skill[skill].audioname = [];
			lib.skill[skill].audioname.addArray(list);
		});
	};
	game.HDsetAudioname(['huangtian2', 'xinhuangtian', 'xinhuangtian2'], ['zhangjiao', 're_zhangjiao']);
	game.HDsetAudioname(['dchuishu', 'dcyishu', 'yingzi', 'biyue'], 'bilibili_zhouxiaomei');
	lib.skill.dchuishu.subSkill.effect.audioname = (lib.skill.dchuishu.subSkill.effect.audioname || []).concat(['bilibili_zhouxiaomei']);
	game.HDsetAudioname('yijin', 'bilibili_litiansuo');
	game.HDsetAudioname(['reqimou', 'zhaxiang', 'zhaxiang2', 'tairan', 'tairan2'], 'bilibili_kuangshen04');

	//武将配音audioname2添加
	game.HDsetAudioname2 = function (skills, map) {
		if (!Array.isArray(skills)) skills = [skills];
		skills.forEach(skill => {
			if (!lib.skill[skill]) return;
			if (!lib.skill[skill].audioname2) lib.skill[skill].audioname2 = {};
			for (var i in map) lib.skill[skill].audioname2[i] = map[i];
		});
	};
	game.HDsetAudioname2('rebiyue', {
		sp_diaochan: 'biyue',
	});
	game.HDsetAudioname2('xiaoji', {
		Mbaby_sp_sunshangxiang: 'xiaoji_sp_sunshangxiang',
	});
	game.HDsetAudioname2('reluanwu', {
		Mbaby_jiaxu: 'luanwu_re_jiaxu',
	});
	game.HDsetAudioname2('yaowu', {
		FD_huaxiong: 'bolNoAudio',
	});
	game.HDsetAudioname2('yinghun', {
		FD_sunjian: 'bolNoAudio',
	});
	game.HDsetAudioname2('gzyinghun', {
		FD_sunjian: 'bolNoAudio',
		Mbaby_sunce: 'yinghun_sunce',
	});
	game.HDsetAudioname2('rezhiman', {
		Mbaby_guansuo: 'zhiman_guansuo',
		wechat_guansuo: 'zhiman_guansuo',
	});
	game.HDsetAudioname2('reyingzi', {
		Mbaby_sunce: 'reyingzi_sunce',
		Mbaby_re_sunyi: 'reyingzi_re_sunyi',
	});
	game.HDsetAudioname2('rejizhi', {
		Mbaby_lukang: 'rejizhi_lukang',
		old_shen_simayi: 'jilue_jizhi',
	});
	game.HDsetAudioname2('new_repaoxiao', {
		wechat_xiahouba: 'paoxiao_xiahouba',
		Mbaby_xiahouba: 'paoxiao_xiahouba',
		Mbaby_guanzhang: 'paoxiao_guanzhang',
	});
	game.HDsetAudioname2('reyicong', {
		jsp_zhaoyun: 'yicong_jsp_zhaoyun',
	});
	game.HDsetAudioname2('yicong', {
		oldx_zhaoyun: 'yicong_jsp_zhaoyun',
	});
	game.HDsetAudioname2('new_rejianxiong', {
		qin_lvbuwei: 'bolNoAudio',
	});
	game.HDsetAudioname2('rerende', {
		qin_lvbuwei: 'bolNoAudio',
	});
	game.HDsetAudioname2('rezhiheng', {
		qin_lvbuwei: 'bolNoAudio',
		old_shen_simayi: 'jilue_zhiheng',
	});
	game.HDsetAudioname2('olluanji', {
	});
	game.HDsetAudioname2(['rejijiang', 'rejijiang1'], {
		Mbaby_liushan: 'jijiang1_liushan',
	});
	game.HDsetAudioname2('guidao', {
		Mbaby_zhangjiao: 'guidao_sp_zhangjiao',
	});
	game.HDsetAudioname2('fangzhu', {
		old_shen_simayi: 'jilue_fangzhu',
	});
	game.HDsetAudioname2('reguicai', {
		old_shen_simayi: 'jilue_guicai',
	});
	game.HDsetAudioname2('rewansha', {
		old_shen_simayi: 'wansha_shen_simayi',
	});
	game.HDsetAudioname2('retiaoxin', {
		wechat_sp_jiangwei: 'tiaoxin_sp_jiangwei',
		wechat_xiahouba: 'tiaoxin_xiahouba',
	});
	game.HDsetAudioname2('relianying', {
		wechat_lukang: 'rejizhi_lukang',
	});
	game.HDsetAudioname2('qingguo', {
		re_zhenji: 'reqingguo',
	});
	game.HDsetAudioname2('reqingguo', {
		Mbaby_zhenji: 'qingguo',
	});
	game.HDsetAudioname2('shangshi', {
		re_zhangchunhua: 'reshangshi',
	});
	game.HDsetAudioname2('wusheng', {
		bol_jsp_guanyu: 'wusheng_jsp_guanyu',
		bolx_jsp_guanyu: 'wusheng_jsp_guanyu',
		wechat_guansuo: 'wusheng_guansuo',
	});
	game.HDsetAudioname2('duanchang', {
		Mmiao_caiwenji: 'minimiaoduanchang',
	});
	game.HDsetAudioname2(['juxiang', 'juxiang1'], {
		Mmiao_zhurong: 'minimiaojuxiang',
	});
	game.HDsetAudioname2('dangxian', {
		wechat_guansuo: 'dangxian_guansuo',
	});
	game.HDsetAudioname2('xingshuai', {
		re_caorui: 'rexingshuai',
	});

	//precCI
	//武将信息
	//----------------孙笨の专属正名区·始----------------
	const sunbenIntro = '孙策（175年—200年5月5日），字伯符，吴郡富春（今浙江省杭州市富阳区）人。破虏将军孙坚长子、吴大帝孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，孙吴政权的奠基者之一。《三国演义》称其武勇犹如霸王项羽，绰号“小霸王”。孙策为继承父亲孙坚的遗业而屈事袁术。兴平二年（195年），孙策征得袁术许可，东渡长江，进攻樊能、于糜，又在当利口袭击张英。并以曲阿为据点，与扬州刺史刘繇进行决战，大败刘繇。建安元年（196年），率兵进攻会稽王朗和吴郡严白虎。建安二年（197年），袁术僭越称帝后，孙策与袁术决裂；同年夏，被朝廷任命为骑都尉，袭父爵乌程侯，兼任会稽太守。建安三年（198年），朝廷任命孙策为讨逆将军，并封为吴侯。建安四年（199年），孙策击败庐江太守刘勋及刘表部将黄祖。建安五年（200年）初，在夺取豫章郡后统一江东；同年4月，正当孙策准备发兵北上之时，在丹徒狩猎时为许贡三门客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。';
	lib.characterIntro.re_sunben = sunbenIntro;
	lib.characterIntro.sunce = sunbenIntro;
	//----------------孙笨の专属正名区·末----------------
	//遗漏武将介绍补充
	lib.characterIntro.lidian = lib.characterIntro.re_lidian;
	lib.characterIntro.wolongfengchu = lib.characterIntro.zhugeliang + '<br>' + lib.characterIntro.pangtong;

	//precCR
	//同名武将替换
	lib.characterReplace.xuyou.add('bilibili_sp_xuyou');
	lib.characterReplace.zhangzhongjing = ['zhangzhongjing', 'bol_zhangzhongjing', 'old_zhangzhongjing', 'oldx_zhangzhongjing'];
	lib.characterReplace.zhoufei = ['zhoufei', 'old_zhoufei'];
	lib.characterReplace.dengai.add('old_dengai');
	lib.characterReplace.jin_yanghuiyu.add('old_yanghuiyu');
	lib.characterReplace.shen_xunyu = ['shen_xunyu', 'old_shen_xunyu'];
	lib.characterReplace.shen_simayi = ['shen_simayi', 'old_shen_simayi'];
	lib.characterReplace.shen_taishici = ['shen_taishici', 'old_shen_taishici'];
	lib.characterReplace.shen_sunce = ['shen_sunce', 'old_shen_sunce'];
	lib.characterReplace.zhangqiying = ['zhangqiying', 'old_zhangqiying'];
	lib.characterReplace.sunluyu.add('old_sunluyu');
	lib.characterReplace.zhaoxiang.add('old_zhaoxiang');
	lib.characterReplace.zhangyì.add('old_zhangyì');
	lib.characterReplace.manchong.add('ol_manchong');
	lib.characterReplace.yj_ganning.add('old_yj_ganning');
	lib.characterReplace.sp_ol_zhanghe.add('old_yj_zhanghe');
	lib.characterReplace.ol_lusu.add('lusu');
	lib.characterReplace.re_yuanshao.add('yuanshao');
	lib.characterReplace.xushao = ['xushao', 'old_xushao'];
	lib.characterReplace.old_yuanji = ['yuanji', 'old_yuanji'];
	lib.characterReplace.zhanghe.add('old_zhanghe');
	lib.characterReplace.zhugejin = ['zhugejin', 'old_zhugejin'];
	lib.characterReplace.xiaoqiao.add('old_ol_xiaoqiao');
	lib.characterReplace.xunchen.add('old_xunchen');
	lib.characterReplace.sunshao.add('old_sp_sunshao');
	lib.characterReplace.huaxin.addArray(['bol_sp_huaxin', 'old_sp_huaxin']);
	lib.characterReplace.sp_kongrong = ['sp_kongrong', 'old_sp_kongrong'];
	lib.characterReplace.dc_mifuren.add('old_sp_mifuren');
	lib.characterReplace.liuzhang.add('old_liuzhang');
	lib.characterReplace.zhouchu.add('old_zhouchu');
	lib.characterReplace.ol_bianfuren = ['ol_bianfuren', 'sp_bianfuren'];
	lib.characterReplace.qiaozhou.add('old_qiaozhou');
	lib.characterReplace.sb_ganning = ['sb_ganning', 'old_sb_ganning'];
	lib.characterReplace.zhangbao.add('old_zhangbao');
	lib.characterReplace.jsp_guanyu.addArray(['bol_jsp_guanyu', 'bolx_jsp_guanyu']);
	lib.characterReplace.lingju.add('decade_lingju');
	lib.characterReplace.buzhi = ['decade_buzhi', 'buzhi'];
	lib.characterReplace.fuhuanghou.add('bol_fuhuanghou');
	lib.characterReplace.yj_jushou.add('old_yj_jushou');
	/*
	//筛选武将同名替换
	Object.keys(lib.characterReplace).forEach(name=>{
	lib.characterReplace[name]=lib.characterReplace[name].filter(namex=>lib.character[namex]&&!lib.filter.characterDisabled(namex));
	});
	*/

	//precC
	//武将补充/修改
	//标包
	game.HDaddCharacter('re_yuanshu', ['male', 'qun', 4, ['wangzun', 'tongji'], []], 'standard');

	//一将成名
	game.HDaddCharacter('guohuai', ['male', 'wei', 3, ['rejingce'], []], 'yijiang');

	//神将
	lib.characterSort.extra.extra_ol.addArray(['junk_zhangjiao']);
	game.HDaddCharacter('shen_sunquan', ['male', 'shen', 4, ['bolyuheng', 'boldili'], ['wu']], 'extra');
	game.HDaddCharacter('tw_shen_lvmeng', ['male', 'shen', 3, ['bolshelie', 'bolgongxin'], ['wu']], 'extra');
	game.HDmoveCharacter('junk_zhangjiao', 'extra');

	//界限突破
	game.HDaddCharacter('re_zhenji', ['female', 'wei', 3, ['reluoshen', 'qingguo'], []], 'refresh');
	game.HDaddCharacter('re_zhangchunhua', ['female', 'wei', 3, ['rejueqing', 'shangshi'], []], 'refresh');
	game.HDaddCharacter('re_caorui', ['male', 'wei', 3, ['huituo', 'remingjian', 'xingshuai'], ['zhu']], 'refresh');
	game.HDaddCharacter('dc_xushu', ['male', 'shu', 4, ['bolzhuhai', 'xsqianxin'], []], 'refresh');

	//璀璨星河
	game.HDaddCharacter('zhugejin', ['male', 'wu', 3, ['huanshi', 'olhongyuan', 'olmingzhe'], []], 'sp');
	game.HDaddCharacter('maliang', ['male', 'shu', 3, ['zishu', 'xinyingyuan'], []], 'sp');
	game.HDaddCharacter('sp_zhaoyun', ['male', 'qun', 3, ['longdan', 'chongzhen'], []], 'sp');
	lib.translate.chongzhen_info = '当你发动〖龙胆〗时，你可以获得对方的一张手牌。';
	game.HDaddCharacter('zhanghua', ['male', 'jin', 3, ['olbihun', 'oljianhe', 'bolchuanwu'], []], 'sp');

	//系列专属包
	lib.characterSort.sp2.sp2_waitforsort.addArray(['junk_zhangrang']);
	game.HDaddCharacter('junk_zhangrang', ['male', 'qun', 3, ['junktaoluan'], []], 'sp2');
	game.HDaddCharacter('licaiwei', ['female', 'qun', 3, ['yijiao', 'qibie'], ['doublegroup:wei:qun']], 'sp2');
	game.HDaddCharacter('duanwei', ['male', 'qun', 4, ['junklangmie'], []], 'sp2');

	//限定专属
	game.HDaddCharacter('luyi', ['female', 'qun', 3, ['dcyaoyi', 'dcshoutan', 'dcfuxue'], []], 'xianding');

	//OL专属
	lib.characterSort.onlyOL.bilibili_buchong_onlyOL = ['junk_lidian'];
	game.HDaddCharacter('ol_huaxin', ['male', 'wei', 3, ['caozhao', 'olxibing'], ['ext:活动武将/image/character/ol_huaxin.jpg']], 'yingbian');
	game.HDmoveCharacter('junk_lidian', 'onlyOL');

	//移动服
	lib.characterSort.mobile.bilibili_buchong_mobile = ['old_zhaoxiang', 'ol_maliang', 'ol_yuanshu', 'old_bulianshi', 'old_zhangqiying', 'junk_xuyou'];
	game.HDaddCharacter('old_zhangqiying', ['female', 'qun', 3, ['xinfu_falu', 'olddianhua', 'oldzhenyi'], ['ext:活动武将/image/character/old_zhangqiying.jpg']], 'mobile');
	game.HDaddCharacter('jiakui', ['male', 'wei', 4, ['tongqu', 'xinwanlan'], []], 'mobile');
	game.HDaddCharacter('yangfu', ['male', 'wei', 3, ['jiebing', 'bolhannan'], []], 'mobile');
	game.HDaddCharacter('xin_caozhen', ['male', 'wei', 4, ['bolsidi'], []], 'mobile');
	game.HDaddCharacter('junk_xuyou', ['male', 'qun', 3, ['nzry_chenglve', 'junkshicai', 'nzry_cunmu'], []], 'mobile');
	game.HDaddCharacter('old_bulianshi', ['female', 'wu', 3, ['anxu', 'zhuiyi'], []], 'mobile');
	game.HDaddCharacter('ol_yuanshu', ['male', 'qun', 4, ['rewangzun', 'retongji'], []], 'mobile');
	game.HDaddCharacter('ol_maliang', ['male', 'shu', 3, ['zishu', 'yingyuan'], []], 'mobile');
	game.HDaddCharacter('old_zhaoxiang', ['female', 'shu', 4, ['xinfanghun', 'xinfuhan'], ['ext:活动武将/image/character/old_zhaoxiang.jpg']], 'mobile');

	//线下
	lib.characterSort.offline.offline_star.add('bolx_jsp_guanyu');
	lib.characterSort.offline.offline_yongjian.add('bol_sunluban');
	if (lib.config.extension_活动武将_XvXiang) {
		for (var i of lib.characterSort.offline.offline_vtuber) lib.characterPack.offline[i][3].add('bilibili_xuxiang');
	}
	game.HDaddCharacter('bolx_jsp_guanyu', ['male', 'wei', 4, ['wusheng', 'wzdanji'], ['ext:活动武将/image/character/bolx_jsp_guanyu.jpg']], 'offline');
	game.HDaddCharacter('bol_sunluban', ['female', 'wu', 3, ['boljiaozong', 'bolchouyou'], ['ext:活动武将/image/character/bol_sunluban.jpg']], 'offline');

	//海外
	lib.characterSort.tw.bilibili_buchong_tw = ['old_yj_zhanghe', 'old_qiaozhou', 'old_jiakui', 'bol_xin_sunluban', 'bol_mazhong', 'bol_jsp_guanyu', 'bol_fuhuanghou'];
	delete lib.skill.twchongqi.derivation;
	game.HDaddCharacter('tw_caozhao', ['male', 'wei', 4, ['twfuzuan', 'twchongqi', 'twfeifu'], []], 'tw');
	game.HDaddCharacter('bol_xin_sunluban', ['female', 'wu', 3, ['bolzenhui', 'xinjiaojin'], ['ext:活动武将/image/character/bol_xin_sunluban.jpg']], 'tw');
	game.HDaddCharacter('bol_mazhong', ['male', 'shu', 4, ['bolfuman'], ['ext:活动武将/image/character/bol_mazhong.jpg']], 'tw');
	game.HDaddCharacter('bol_jsp_guanyu', ['male', 'wei', 4, ['wusheng', 'boldanji'], ['ext:活动武将/image/character/bol_jsp_guanyu.jpg']], 'tw');
	game.HDaddCharacter('bol_fuhuanghou', ['female', 'qun', 3, ['rezhuikong', 'xinqiuyuan'], ['ext:活动武将/image/character/bol_fuhuanghou.jpg']], 'tw');
	game.HDaddCharacter('old_jiakui', ['male', 'wei', 3, ['zhongzuo', 'wanlan'], []], 'tw');
	game.HDaddCharacter('old_qiaozhou', ['male', 'shu', 3, ['zhiming', 'twxingbu'], ['ext:活动武将/image/character/old_qiaozhou.jpg']], 'tw');
	game.HDaddCharacter('old_yj_zhanghe', ['male', 'qun', 4, ['zhilve'], ['ext:活动武将/image/character/old_yj_zhanghe.jpg']], 'tw');

	//怀旧包
	lib.characterSort.old.bilibili_buchong_shenhua = ['old_zhoufei', 'lusu', 'yuanshao', 'old_dengai'];
	lib.characterSort.old.bilibili_buchong_yijiang = ['old_yj_jushou', 'ol_manchong'];
	lib.characterSort.old.bilibili_buchong_sp = ['old_zhangbao', 'old_sunluyu', 'old_pangtong'];
	lib.characterSort.old.bilibili_buchong_szn2 = ['old_yuanji', 'old_xushao', 'junk_duanwei'];
	lib.characterSort.old.bilibili_buchong_mobile2 = ['old_sb_ganning', 'old_zhouchu', 'old_xunchen', 'old_sp_kongrong', 'old_zhangzhongjing', 'oldx_zhangzhongjing', 'old_zhangyì', 'old_yj_ganning', 'old_yanghuiyu', 'old_liuzhang', 'old_sp_sunshao', 'old_wangling', 'old_sp_huaxin', 'old_sp_mifuren'];
	lib.characterSort.old.bilibili_buchong_menfashizu = ['old_clan_xunshu', 'old_clan_xunchen', 'old_clan_xuncai', 'old_clan_xuncan', 'oldx_clan_xuncai'];
	lib.characterSort.old.bilibili_buchong_extra = ['old_shen_sunce', 'old_shen_taishici', 'old_shen_simayi', 'old_shen_xunyu'];
	game.HDaddCharacter('old_clan_xunshu', ['male', 'qun', 3, ['old_shenjun', 'old_balong', 'clandaojie'], ['clan:颍川荀氏', 'ext:活动武将/image/character/old_clan_xunshu.jpg', 'tempname:clan_xunshu']], 'old');
	game.HDaddCharacter('old_clan_xunchen', ['male', 'qun', 3, ['old_sankuang', 'old_beishi', 'clandaojie'], ['clan:颍川荀氏', 'ext:活动武将/image/character/old_clan_xunchen.jpg', 'tempname:clan_xunchen']], 'old');
	game.HDaddCharacter('old_clan_xuncai', ['female', 'qun', 3, ['old_lieshi', 'old_dianzhan', 'old_huanyin', 'clandaojie'], ['clan:颍川荀氏', 'ext:活动武将/image/character/old_clan_xuncai.jpg', 'tempname:clan_xuncai']], 'old');
	game.HDaddCharacter('old_clan_xuncan', ['male', 'wei', 3, ['old_yunshen', 'old_shangshen', 'old_fenchai', 'clandaojie'], ['clan:颍川荀氏', 'tempname:clan_xuncan']], 'old');
	game.HDaddCharacter('oldx_clan_xuncai', ['female', 'qun', 3, ['oldx_lieshi', 'oldx_dianzhan', 'clanhuanyin', 'clandaojie'], ['clan:颍川荀氏', 'tempname:clan_xuncai']], 'old');
	game.HDaddCharacter('lusu', ['male', 'wu', 3, ['haoshi', 'redimeng'], ['ext:活动武将/image/character/lusu.jpg']], 'old');
	game.HDaddCharacter('yuanshao', ['male', 'qun', 4, ['oldluanji', 'xueyi'], ['ext:活动武将/image/character/yuanshao.jpg', 'zhu']], 'old');
	game.HDaddCharacter('old_yj_jushou', ['male', 'qun', 3, ['jianying', 'oldshibei'], ['ext:活动武将/image/character/old_yj_jushou.jpg']], 'old');
	game.HDaddCharacter('old_shen_xunyu', ['male', 'shen', 3, ['old_tianzuo', 'old_lingce', 'old_dinghan'], ['wei', 'ext:活动武将/image/character/old_shen_xunyu.jpg']], 'old');
	game.HDaddCharacter('old_shen_simayi', ['male', 'shen', 3, ['reguicai', 'fangzhu', 'rewansha', 'rezhiheng', 'rejizhi'], ['wei', 'ext:活动武将/image/character/old_shen_simayi.jpg']], 'old');
	game.HDaddCharacter('old_shen_taishici', ['male', 'shen', 4, ['olddulie', 'oldpowei', 'dangmo'], ['wu', 'ext:活动武将/image/character/old_shen_taishici.jpg']], 'old');
	game.HDaddCharacter('old_shen_sunce', ['male', 'shen', '1/6', ['old_yingba', 'old_fuhai', 'old_pinghe'], ['wu', 'ext:活动武将/image/character/old_shen_sunce.jpg']], 'old');
	game.HDaddCharacter('old_zhangyì', ['male', 'shu', 4, ['zhiyi'], ['ext:活动武将/image/character/old_zhangyi.jpg']], 'old');
	game.HDaddCharacter('old_xunchen', ['male', 'qun', 3, ['jianzhan', 'reduoji'], ['ext:活动武将/image/character/old_xunchen.jpg']], 'old');
	game.HDaddCharacter('old_zhangzhongjing', ['male', 'qun', 3, ['old_jishi', 'liaoyi', 'binglun'], ['ext:活动武将/image/character/old_zhangzhongjing.jpg']], 'old');
	game.HDaddCharacter('oldx_zhangzhongjing', ['male', 'qun', 3, ['jishi', 'old_liaoyi', 'binglun'], ['ext:活动武将/image/character/oldx_zhangzhongjing.jpg']], 'old');
	game.HDaddCharacter('old_yanghuiyu', ['female', 'wei', 3, ['oldhongyi', 'quanfeng'], ['ext:活动武将/image/character/old_yanghuiyu.jpg']], 'old');
	game.HDaddCharacter('old_zhoufei', ['female', 'wu', 3, ['liangyin', 'kongsheng'], ['ext:活动武将/image/character/old_zhoufei.jpg']], 'old');
	game.HDaddCharacter('old_dengai', ['male', 'wei', 3, ['bilibili_zhenggong', 'bilibili_toudu'], ['ext:活动武将/image/character/old_dengai.jpg']], 'old');
	game.HDaddCharacter('old_yj_ganning', ['male', 'qun', 4, ['bilibili_jinfan', 'bilibili_sheque'], ['ext:活动武将/image/character/old_yj_ganning.jpg']], 'old');
	game.HDaddCharacter('old_zhangbao', ['male', 'qun', 3, ['old_zhoufu', 'old_yingbing'], ['ext:活动武将/image/character/old_zhangbao.jpg']], 'old');
	game.HDaddCharacter('old_sunluyu', ['female', 'wu', 3, ['meibu', 'mumu'], ['ext:活动武将/image/character/old_sunluyu.jpg']], 'old');
	game.HDaddCharacter('old_pangtong', ['male', 'qun', 3, ['manjuan', 'zuixiang'], ['unseen', 'character:sp_pangtong', 'die:sp_pangtong']], 'old');
	game.HDaddCharacter('ol_manchong', ['male', 'wei', 3, ['xinjunxing', 'yuce'], ['ext:活动武将/image/character/ol_manchong.jpg']], 'old');
	game.HDaddCharacter('old_xushao', ['male', 'qun', 3, [], ['unseen', 'ext:活动武将/image/character/old_xushao.jpg']], 'old');
	game.HDaddCharacter('old_sp_sunshao', ['male', 'wu', 3, ['refubi', 'rezuici'], ['ext:活动武将/image/character/old_sp_sunshao.jpg']], 'old');
	game.HDaddCharacter('old_liuzhang', ['male', 'qun', 3, ['xiusheng', 'yinlang', 'huaibi'], ['zhu', 'ext:活动武将/image/character/old_liuzhang.jpg']], 'old');
	game.HDaddCharacter('old_wangling', ['male', 'wei', 4, ['mouli', 'zifu'], ['ext:活动武将/image/character/old_wangling.jpg']], 'old');
	game.HDaddCharacter('old_sp_huaxin', ['male', 'wei', 3, ['hxrenshi', 'debao', 'buqi'], ['ext:活动武将/image/character/old_sp_huaxin.jpg']], 'old');
	game.HDaddCharacter('old_sp_kongrong', ['male', 'qun', 3, ['spmingshi', 'splirang'], ['ext:活动武将/image/character/old_sp_kongrong.jpg']], 'old');
	game.HDaddCharacter('old_sp_mifuren', ['female', 'shu', 3, ['spguixiu', 'spcunsi'], ['ext:活动武将/image/character/old_sp_mifuren.jpg']], 'old');
	game.HDaddCharacter('old_zhouchu', ['male', 'wu', 4, ['xianghai', 'chuhai'], ['ext:活动武将/image/character/old_zhouchu.jpg']], 'old');
	game.HDaddCharacter('old_sb_ganning', ['male', 'wu', 4, ['old_qixi', 'old_fenwei'], ['ext:活动武将/image/character/old_sb_ganning.jpg']], 'old');
	game.HDaddCharacter('junk_duanwei', ['male', 'qun', 4, ['langmie'], []], 'old');
	game.HDaddCharacter('old_yuanji', ['female', 'wu', 3, ['dcmengchi', 'dcjiexing'], ['ext:活动武将/image/character/old_yuanji.jpg']], 'old');

	//DIY
	lib.characterSort.diy.diy_trashbin.addArray(['bol_zhangzhongjing', 'bol_sp_huaxin', 'bfake_zuoci', 'bfake_yangfu', 'bfake_chengpu', 'bfake_sundeng', 'old_shen_sunquan', 'old_shen_ganning', 'bfake_chengui', 'old_ol_xiaoqiao', 'old_zhanghe', 'old_zhugejin', 'oldx_zhangfei', 'oldx_guanyu', 'oldx_zhaoyun', 'oldx_yujin']);
	game.HDdeleteCharacter('ol_guohuai');
	game.HDaddCharacter('bfake_yangfu', ['male', 'wei', 4, ['old_jiebing', 'old_kuzhan'], ['ext:活动武将/image/character/bfake_yangfu.jpg']], 'diy');
	game.HDaddCharacter('bfake_zuoci', ['male', 'qun', 3, ['BThuashen', 'BTxinsheng'], ['ext:活动武将/image/character/bfake_zuoci.jpg']], 'diy');
	game.HDaddCharacter('bfake_chengpu', ['male', 'wu', 4, ['bollihuo', 'bolchunlao'], ['ext:活动武将/image/character/bfake_chengpu.jpg']], 'diy');
	game.HDaddCharacter('bfake_sundeng', ['male', 'wu', 4, ['bolkuangbi'], ['ext:活动武将/image/character/bfake_sundeng.jpg']], 'diy');
	game.HDaddCharacter('old_shen_sunquan', ['male', 'shen', 4, ['shen_sunquan_skill'], ['wu', 'ext:活动武将/image/character/old_shen_sunquan.jpg']], 'diy');
	game.HDaddCharacter('old_shen_ganning', ['male', 'shen', 1, ['old_jieying', 'old_tongling'], ['wu', 'ext:活动武将/image/character/old_shen_ganning.jpg']], 'diy');
	game.HDaddCharacter('bfake_chengui', ['male', 'qun', 3, ['bolyingtu', 'bolcongshi'], ['ext:活动武将/image/character/bfake_chengui.jpg']], 'diy');
	if (lib.config.connect_nickname == '萌新（转型中）') {
		game.HDaddCharacter('bol_sp_huaxin', ['male', 'wei', 3, ['bolyuanqing', 'bolshuchen', 'bolxiezheng'], []], 'diy');
		game.HDaddCharacter('bol_zhangzhongjing', ['male', 'qun', 3, ['bolliaoyi', 'bolbinglun'], []], 'diy');
	}
	game.HDaddCharacter('old_ol_xiaoqiao', ['female', 'wu', 3, ['oltianxiang', 'rehongyan'], ['ext:活动武将/image/character/old_ol_xiaoqiao.jpg']], 'diy');
	game.HDaddCharacter('old_zhanghe', ['male', 'wei', 4, ['qiaobian', 'bilibili_zhiyinxian'], ['ext:活动武将/image/character/old_zhanghe.jpg']], 'diy');
	game.HDaddCharacter('old_zhugejin', ['male', 'wu', 3, ['olhongyuan', 'bolhuanshi', 'olmingzhe'], ['ext:活动武将/image/character/old_zhugejin.jpg']], 'diy');
	game.HDaddCharacter('oldx_zhangfei', ['male', 'shu', 4, ['paoxiao', 'bilibili_tannang'], ['character:zhangfei']], 'diy');
	game.HDaddCharacter('oldx_guanyu', ['male', 'shu', 4, ['wusheng', 'bilibili_yishi'], ['character:guanyu']], 'diy');
	game.HDaddCharacter('oldx_zhaoyun', ['male', 'shu', 4, ['longdan', 'yicong'], ['character:zhaoyun']], 'diy');
	game.HDaddCharacter('oldx_yujin', ['male', 'wei', 4, ['bilibili_zhengjun'], ['character:yujin']], 'diy');

	//precS
	//技能修改
	//范疆张达
	lib.skill.juesheng.subSkill.counter.direct = true;
	//谋黄忠
	lib.skill.sbliegong.subSkill.block.direct = true;
	lib.skill.sbliegong.subSkill.count.direct = true;
	lib.skill.sbliegong.subSkill.count.locked = false;
	//司马师
	lib.skill.tairan.content = function () {
		'step 0'
		player.addSkill('tairan2');
		player.storage.tairan2 = 0;
		var num = player.maxHp - player.hp;
		if (num > 0) {
			player.storage.tairan2 += num;
			player.recover(num);
		}
		'step 1'
		if (player.countCards('h') < player.maxHp) player.drawTo(player.maxHp).gaintag = ['tairan'];
	};
	lib.translate.tairan_info = '锁定技，回合结束时，你将体力回复至体力上限，并将手牌摸至体力上限（获得的牌称为“泰然”牌）。然后你的下一个出牌阶段开始时，你失去上次以此法回复的体力值的体力，弃置所有“泰然”牌。';
	//魅步
	lib.skill.meibu.content = function () {
		var target = trigger.player;
		target.addTempSkill('meibu_range');
		target.storage.meibu_range = player;
		target.markSkillCharacter('meibu_range', player, '魅步', '锦囊牌均视为【杀】且' + get.translation(player) + '视为在攻击范围内');
	};
	lib.skill.meibu.subSkill.range = {
		charlotte: true,
		onremove: true,
		mod: {
			cardname: function (card) {
				if (get.itemtype(card) == 'card' && (get.type(card, null, false) == 'trick' || get.type(card, null, false) == 'delay')) return 'sha';
			},
			targetInRange: function (card, player, target) {
				if (!player.storage.meibu_range) return;
				if (target == player.storage.meibu_range) return true;
			},
		},
	};
	lib.translate.meibu_info = '其他角色的出牌阶段开始时，若你不在其攻击范围内，你可以令该角色的锦囊牌均视为【杀】直到回合结束。若如此做，本回合你视为在其攻击范围内。';
	//贾诩
	lib.skill.weimu.filter = function (event, player) {
		if (event.player == player) return false;
		if (get.color(event.card) != 'black' || get.type(event.card) != 'trick') return false;
		var info = get.info(event.card.name);
		return info && info.selectTarget && info.selectTarget == -1 && !info.toself;
	};
	lib.skill._reweimu = {
		charlotte: true,
		trigger: { global: 'useCard1' },
		filter: function (event, player) {
			if (!player.hasSkill('reweimu') || event.player == player || get.is.blocked('reweimu', player)) return false;
			if (get.color(event.card) != 'black' || get.type(event.card) != 'trick') return false;
			var info = get.info(event.card.name);
			return info && info.selectTarget && info.selectTarget == -1 && !info.toself;
		},
		priority: 15,
		direct: true,
		content: function () { player.logSkill('reweimu') },
	};
	//周处
	lib.skill._xianghai = {
		charlotte: true,
		trigger: { player: ['useCard1', 'respond'] },
		filter: function (event, player) {
			if (!player.hasSkill('xianghai') || get.is.blocked('xianghai', player)) return false;
			return event.card.name == 'jiu' && !event.skill && event.cards && event.cards.length == 1 && get.type(event.cards[0]) == 'equip';
		},
		priority: 15,
		direct: true,
		content: function () { player.logSkill('xianghai') },
	};
	//刘辩
	lib.skill._dushi = {
		charlotte: true,
		sourceSkill: 'dushi',
		audio: 'dushi',
		trigger: { player: 'dying' },
		filter: function (event, player) {
			return player.hasSkill('dushi') && !get.is.blocked('dushi', player);
		},
		priority: 15,
		forced: true,
		content: function () { },
	};
	lib.translate._dushi = '毒誓';
	//暴怒战神
	lib.skill._shenji = {
		charlotte: true,
		trigger: { player: 'useCard1' },
		filter: function (event, player) {
			if (!player.hasSkill('shenji') || get.is.blocked('shenji', player)) return false;
			return event.card.name == 'sha' && (event.targets.length > 1 || player.countUsed('sha', true) > 1);
		},
		priority: 15,
		direct: true,
		content: function () { player.logSkill('shenji') },
	};
	//水淹七军
	lib.card.shuiyanqijunx.filterTarget = function (card, player, target) {
		return target != player && ((get.mode() == 'single' && _status.mode && _status.mode == 'normal') || target.countCards('e'));
	};
	lib.translate.shuiyanqijunx_info = '出牌阶段，对一名' + ((get.mode() == 'single' && _status.mode && _status.mode == 'normal') ? '' : '装备区里有牌的') + '其他角色使用。目标角色选择一项：1、弃置装备区里的所有牌；2、受到你对其造成的1点雷电伤害。';
	//族吴苋
	lib.skill.clanyirong.prompt = function () {
		var player = _status.event.player;
		var num1 = player.countCards('h'), num2 = player.getHandcardLimit();
		var str = '<span class="text center">';
		if (num1 > num2) str += ('弃置' + get.cnNumber(num1 - num2) + '张牌，然后手牌上限+1。');
		else str += ('摸' + get.cnNumber(num2 - num1) + '张牌，然后手牌上限-1。');
		str += ('<br>※当前手牌上限：' + num2);
		str += '</span>';
		return str;
	};
	lib.skill.clanyirong.content = function () {
		'step 0'
		if (cards.length) {
			lib.skill.chenliuwushi.change(player, 1);
			event.finish();
		}
		else {
			var num1 = player.countCards('h'), num2 = player.getHandcardLimit();
			if (num1 < num2) player.draw(num2 - num1);
		}
		'step 1'
		lib.skill.chenliuwushi.change(player, -1);
	};
	lib.translate.clanyirong_info = '出牌阶段限两次。你可以将你的手牌数摸至/弃至你的手牌上限，然后你的手牌上限-1/+1。';
	//族吴班
	lib.skill.clanzhanding.subSkill.effect.content = function () {
		if (player.hasHistory('sourceDamage', evt => evt.card == trigger.card)) {
			var num1 = player.countCards('h'), num2 = player.getHandcardLimit();
			if (num1 < num2) player.draw(num2 - num1);
		}
		else if (trigger.addCount !== false) {
			trigger.addCount = false;
			player.getStat().card.sha--;
		}
	};
	lib.translate.clanzhanding_info = '你可以将任意张牌当做【杀】使用并你令你的手牌上限-1。你以此法使用的【杀】结算结束后，若你因此【杀】造成过伤害，则你将手牌摸至手牌上限，否则你令此【杀】不计入次数限制。';
	//神张角
	delete lib.skill.yizhao.intro.markcount;
	lib.skill.yizhao.filter = function (event, player) {
		return typeof get.number(event.card) == 'number' && (player.countMark('yizhao') < 184 || !lib.config.extension_活动武将_ShenZhangJiao);
	};
	lib.skill.yizhao.content = function () {
		'step 0'
		event.num = player.countMark('yizhao');
		player.addMark('yizhao', Math.min(get.number(trigger.card), (lib.config.extension_活动武将_ShenZhangJiao ? 184 - player.countMark('yizhao') : get.number(trigger.card))));
		'step 1'
		var num = Math.floor(num / 10) % 10, num2 = Math.floor(player.countMark('yizhao') / 10) % 10;
		if (num != num2) {
			var card = get.cardPile2(card => {
				return get.number(card, false) == num2;
			});
			if (card) player.gain(card, 'gain2');
			else {
				player.chat('无牌可得？！');
				game.log('但是牌堆中已经没有点数为', '#y' + num2, '的牌了！');
			}
		}
	};
	//族荀谌
	lib.skill._sankuang_prompt = {
		charlotte: true,
		ruleSkill: true,
		trigger: { player: 'clansankuangBegin' },
		direct: true,
		content: function () {
			var func = function () {
				game.countPlayer(function (target) {
					if (target != player) target.prompt('三恇' + lib.skill.clansankuang.getNum(target));
				});
			};
			if (event.player == game.me) func();
			else if (event.isOnline()) player.send(func);
		},
	};
	//卢氏
	lib.skill._olzhuyan_prompt = {
		charlotte: true,
		ruleSkill: true,
		trigger: { player: 'olzhuyanBegin' },
		direct: true,
		content: function () {
			var func = function () {
				game.countPlayer(function (target) {
					var str = '';
					str += '体力值';
					if (player.getStorage('olzhuyan_false').includes(target)) str += '--<br>';
					else {
						var num = lib.skill.olzhuyan.getNum(target, false);
						str += ((num >= 0 ? '+' : '') + num + '<br>');
					}
					str += '手牌数';
					if (player.getStorage('olzhuyan_true').includes(target)) str += '--<br>';
					else {
						var num = lib.skill.olzhuyan.getNum(target, true);
						str += ((num >= 0 ? '+' : '') + num + '<br>');
					}
					target.prompt(str);
				});
			};
			if (event.player == game.me) func();
			else if (event.isOnline()) player.send(func);
		},
	};
	//陈琳
	lib.skill.songci.selectTarget = function () {
		var player = _status.event.player;
		for (var target of game.filterPlayer()) {
			if (player.getStorage('songci').includes(target)) continue;
			var bool = target.countCards('h') > target.hp;
			target.prompt('<span class=\"texiaotext\" style=\"color:' + (bool ? '#FF0000' : '#00FF00') + '\">' + (bool ? '弃牌' : '摸牌') + '</span>');
		}
		return 1;
	};
	//神郭嘉
	lib.skill.resghuishi.selectTarget = function () {
		var player = _status.event.player;
		if (player.maxHp >= game.players.length) {
			for (var target of game.filterPlayer()) {
				var list = target.getSkills(null, false, false).filter(function (skill) {
					var info = lib.skill[skill];
					return info && info.juexingji && !target.awakenedSkills.includes(skill);
				});
				target.prompt(list.length ? '可觉醒' : '可摸牌');
			}
		}
		return 1;
	};
	lib.skill.sghuishi.selectTarget = function () {
		var player = _status.event.player;
		for (var target of game.filterPlayer()) {
			if (player == target) continue;
			var list = target.getSkills(null, false, false).filter(function (skill) {
				var info = lib.skill[skill];
				return info && info.juexingji && !target.awakenedSkills.includes(skill);
			});
			target.prompt(list.length ? '可觉醒' : '可摸牌');
		}
		return 1;
	};
	//二曹
	lib.skill.huamu.filter = function (event, player) {
		var color = get.color(event.card);
		if (!player.hasHistory('lose', function (evt) {
			return evt.hs.length > 0 && evt.getParent() == event;
		}) || !event.cards.filterInD('oe').length) return false;
		var history = game.getGlobalHistory('useCard');
		var index = history.indexOf(event);
		if (index < 1) return false;
		var evt = history[index - 1], color2 = get.color(evt.card);
		return color != color2;
	};
	lib.skill.huamu.mod.aiOrder = function (player, card, num) {
		if (typeof card == 'object') {
			var history = game.getGlobalHistory('useCard');
			if (!history.length) return;
			var evt = history[history.length - 1];
			if (evt && evt.card && get.color(evt.card) != get.color(card)) return num + 4;
		}
	};
	//左慈
	lib.skill.rehuashen.drawCharacter = function (player, list) {
		game.broadcastAll(function (player, list) {
			player.$draw(list.map(function (name) {
				if (!player.isUnderControl(true)) return game.createCard('huashen_unknown', ' ', ' ');
				var cardname = 'huashen_card_' + name;
				lib.card[cardname] = {
					fullimage: true,
					image: 'character:' + name
				}
				lib.translate[cardname] = get.rawName2(name);
				return game.createCard(cardname, ' ', ' ');
			}), 'nobroadcast');
		}, player, list);
	};
	//许靖
	var content = '' + lib.skill.dccaixia.content;
	eval('lib.skill.dccaixia.content=' + content.replace("player.addMark('dccaixia_clear',num)", "player.addMark('dccaixia_clear',num,false)"));
	lib.skill.dccaixia.subSkill.clear.content = function () {
		player.removeMark('dccaixia_clear', 1, false);
	};
	lib.translate.dccaixia_info = '当你造成或受到伤害后，你可以摸至多X张牌，然后你不能发动〖才暇〗直到你使用等量张牌（X为本局游戏人数且至多为5）。';
	//经典孙权
	lib.skill.dczhiheng.subSkill.add.direct = true;
	lib.skill.dczhiheng.subSkill.add.filter = function (event, player) {
		if (event.player == player) return false;
		return !player.getStorage('dczhiheng_hit').includes(event.player);
	};
	lib.skill.dczhiheng.init = function (player) {
		var history = player.getHistory('sourceDamage', evt => evt.player != player);
		if (history.length) {
			player.addTempSkill('dczhiheng_hit');
			player.markAuto('dczhiheng_hit', history.reduce((list, evt) => list.add(evt.player), []));
		}
	};
	//经典曹操
	lib.skill.dcjianxiong.mark = true;
	//朱铁雄
	lib.skill.dcbianzhuang.subSkill.refresh.content = function () {
		var stat = player.getStat('skill');
		delete stat.dcbianzhuang;
		game.log(player, '重置了技能', '#g【变装】');
	};
	//神张飞
	lib.skill.shencai.init = (player) => player.markSkill('shencai');
	lib.skill.shencai.intro = {
		markcount: (storage, player) => player.countMark('shencai') + 1,
		content: (storage, player) => '当前最大发动次数：' + (player.countMark('shencai') + 1),
	};
	//YYDSの蔡阳
	lib.skill.yinka.charlotte = true;
	lib.skill.yinka.trigger = { global: ['drawBegin', 'judgeBegin'] };
	lib.skill.yinka.firstDo = true;
	lib.skill.yinka.group = 'yinka_view';
	lib.skill.yinka.subSkill = { view: { ai: { viewHandcard: true, skillTagFilter: (player, arg, target) => target != player } } };
	//星黄忠
	lib.skill.spshidi.intro.markcount = storage => (storage || 0) % 2 == 0 ? '攻' : '守';

	//precT
	//翻译
	//Prefix添加
	lib.namePrefix.set('废案', {
		color: '#a4a4a4',
		nature: 'black',
		showName: '废',
	});
	lib.namePrefix.set('废案神', {
		getSpan: (prefix, name) => `${get.prefixSpan('废案')}${get.prefixSpan('神')}`,
	});
	//删除翻译
	delete lib.translate.sp_shenpei_prefix;
	delete lib.translate.jin_xiahouhui_prefix;
	const hdpj_translate = {
		//修改武将翻译
		//手杀前缀
		re_sunben: '手杀界孙策',
		re_sunben_prefix: '手杀界',
		shenpei: '手杀审配',
		shenpei_prefix: '手杀',
		//新杀前缀
		dc_zhuling: '新杀朱灵',
		dc_zhuling_prefix: '新杀',
		//其他前缀
		jsrg_sunlubansunluyu: '合孙鲁班孙鲁育',
		jsrg_sunlubansunluyu_ab: '合大小虎',
		//取消前缀
		sp_shenpei: '审配',
		gz_dengzhi: '邓芝',
		gz_miheng: '祢衡',
		jin_xiahouhui: '夏侯徽',
		gz_huangzu: '黄祖',
		gz_liuba: '刘巴',

		//添加武将翻译
		old_clan_xunshu: '旧荀淑',
		old_clan_xunshu_prefix: '旧',
		old_clan_xunchen: '旧荀谌',
		old_clan_xunchen_prefix: '旧',
		old_clan_xuncai: '旧荀采',
		old_clan_xuncai_prefix: '旧',
		old_clan_xuncan: '旧荀粲',
		old_clan_xuncan_prefix: '旧',
		oldx_clan_xuncai: '旧荀采',
		oldx_clan_xuncai_prefix: '旧',
		old_qiaozhou: 'TW谯周',
		old_qiaozhou_prefix: 'TW',
		old_yj_zhanghe: 'TW张郃',
		old_yj_zhanghe_prefix: 'TW',
		old_yj_jushou: '旧沮授',
		old_yj_jushou_prefix: '旧',
		old_shen_xunyu: '旧神荀彧',
		old_shen_xunyu_prefix: '旧神',
		old_shen_simayi: '单机神司马懿',
		old_shen_simayi_ab: '神司马懿',
		old_shen_taishici: '旧神太史慈',
		old_shen_taishici_prefix: '旧神',
		old_shen_sunce: '旧神孙策',
		old_shen_sunce_prefix: '旧神',
		old_zhangyì: '旧张翼',
		old_zhangyì_prefix: '旧',
		old_yanghuiyu: '旧羊徽瑜',
		old_yanghuiyu_prefix: '旧',
		old_jiakui: 'TW贾逵',
		old_jiakui_prefix: 'TW',
		junk_zhangrang: '新杀张让',
		junk_zhangrang_prefix: '新杀',
		old_zhangqiying: '手杀张琪瑛',
		old_zhangqiying_prefix: '手杀',
		bolx_jsp_guanyu: '★SP关羽',
		bolx_jsp_guanyu_prefix: '★SP',
		bol_sunluban: '用间孙鲁班',
		bol_sunluban_prefix: '用间',
		old_zhoufei: '旧周妃',
		old_zhoufei_prefix: '旧',
		old_dengai: '邓士载',
		old_yj_ganning: '旧甘宁',
		old_yj_ganning_prefix: '旧',
		old_xunchen: '旧荀谌',
		old_xunchen_prefix: '旧',
		old_liuzhang: '旧刘璋',
		old_liuzhang_prefix: '旧',
		old_sp_sunshao: '旧孙邵',
		old_sp_sunshao_prefix: '旧',
		old_zhaoxiang: '手杀赵襄',
		old_zhaoxiang_prefix: '手杀',
		old_bulianshi: '手杀步练师',
		old_bulianshi_prefix: '手杀',
		ol_yuanshu: '手杀袁术',
		ol_yuanshu_prefix: '手杀',
		old_yuanshu: '手杀界袁术',
		old_yuanshu_prefix: '手杀界',
		old_wangling: '旧王淩',
		old_wangling_prefix: '旧',
		old_sp_huaxin: '旧华歆',
		old_sp_huaxin_prefix: '旧',
		old_sp_kongrong: '旧孔融',
		old_sp_kongrong_prefix: '旧',
		old_sp_mifuren: '旧糜夫人',
		old_sp_mifuren_prefix: '旧',
		old_zhouchu: '旧周处',
		old_zhouchu_prefix: '旧',
		old_sb_ganning: '旧甘宁',
		old_sb_ganning_prefix: '旧',
		old_zhangbao: '旧张宝',
		old_zhangbao_prefix: '旧',
		old_sunluyu: '旧孙鲁育',
		old_sunluyu_prefix: '旧',
		old_pangtong: '旧庞统',
		old_pangtong_prefix: '旧',
		ol_manchong: '旧满宠',
		ol_manchong_prefix: '旧',
		old_xushao: '旧许劭',
		old_xushao_prefix: '旧',
		old_ol_xiaoqiao: '小乔',
		old_zhanghe: '张郃',
		old_zhugejin: '诸葛瑾',
		ol_maliang: '手杀马良',
		ol_maliang_prefix: '手杀',
		junk_duanwei: '旧段煨',
		junk_duanwei_prefix: '旧',
		oldx_zhangfei: '张翼德',
		oldx_guanyu: '关云长',
		oldx_zhaoyun: '赵子龙',
		oldx_yujin: '于文则',
		bol_xin_sunluban: 'TW孙鲁班',
		bol_xin_sunluban_prefix: 'TW',
		bol_mazhong: 'TW马忠',
		bol_mazhong_prefix: 'TW',
		old_yuanji: '旧袁姬',
		old_yuanji_prefix: '旧',
		bfake_yangfu: '废案杨阜',
		bfake_yangfu_prefix: '废案',
		bfake_zuoci: '谋左慈',
		bfake_zuoci_prefix: '谋',
		bfake_chengpu: '废案程普',
		bfake_chengpu_prefix: '废案',
		bfake_sundeng: '废案孙登',
		bfake_sundeng_prefix: '废案',
		old_shen_sunquan: '废案神孙权',
		old_shen_sunquan_prefix: '废案神',
		old_shen_ganning: '废案神甘宁',
		old_shen_ganning_prefix: '废案神',
		bol_sp_huaxin: '废案华歆',
		bol_sp_huaxin_prefix: '废案',
		bol_jsp_guanyu: 'TW关羽',
		bol_jsp_guanyu_prefix: 'TW',
		bfake_chengui: '废案陈珪',
		bfake_chengui_prefix: '废案',
		old_zhangzhongjing_prefix: '旧',
		oldx_zhangzhongjing_prefix: '旧',
		bol_zhangzhongjing_prefix: '废案',
		bol_fuhuanghou_prefix: 'TW',

		//武将分包翻译
		bilibili_buchong_shenhua: '武将补充·神话再临',
		bilibili_buchong_yijiang: '武将补充·一将成名',
		bilibili_buchong_menfashizu: '武将补充·门阀士族',
		bilibili_buchong_extra: '武将补充·神武将',
		bilibili_buchong_sp: '武将补充·SP',
		bilibili_buchong_szn2: '武将补充·十周年服',
		bilibili_buchong_mobile: '武将补充·移动服',
		bilibili_buchong_mobile2: '武将补充·移动服',
		bilibili_buchong_tw: '武将补充·海外服',
		bilibili_buchong_onlyOL: '武将补充·OL',

		//技能翻译
		weipo: '横虑',
		dcliuzhuan_tag: '流转',
		dcliuzhuan_info: '锁定技，其他角色的回合内，其于摸牌阶段外获得的牌无法对你使用，这些牌本回合进入弃牌堆后，你获得之。',
		zunwei_info: '出牌阶段限一次，你可以：①将体力值回复至与一名其他角色相同；②将手牌数摸至与一名其他角色相同（至多摸五张）；③为空装备栏使用牌堆中的装备牌直至你装备区里的牌数与一名其他角色相等。（每个选项每局限选择一次）',
		olpaoxiao_info: '锁定技。①你使用【杀】无次数限制。②当你使用的【杀】被【闪】抵消后，你令本回合下一次因【杀】造成的伤害+X（X为造成伤害前的抵消次数）。',
		sbliegong_info: '若你的装备区内没有武器牌，则你手牌区内所有【杀】的属性视为无属性。当你使用牌时或成为其他角色使用牌的目标后，若此牌有花色且你未记录此牌的花色，你记录此牌的花色。当你使用【杀】指定唯一目标后，若〖烈弓〗存在记录花色，则你可亮出牌堆顶的X张牌（X为〖烈弓〗记录过的花色数-1），令此【杀】的伤害值基数+Y（Y为亮出牌中被〖烈弓〗记录过花色的牌的数量），且目标角色不能使用〖烈弓〗记录过花色的牌响应此【杀】。此【杀】使用结算结束后，你清除〖烈弓〗记录的的花色。',
	};
	for (const i in hdpj_translate) lib.translate[i] = hdpj_translate[i];

	//precCT
	//武将前缀
	const hdpj_characterTitle = {
		bol_sunluban: '测试专用，问题居多<br>仅供参考，娱乐为上',
		old_zhangzhongjing: '第一版张仲景',
		oldx_zhangzhongjing: '第三版张仲景',
		bol_zhangzhongjing: '仁望值弃稿',
		bol_sp_huaxin: '仁望值弃稿',
	};
	for (const i in hdpj_characterTitle) lib.characterTitle[i] = hdpj_characterTitle[i];
}