//game.import(name: "活动武将",
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { config } from './js/config.js';
import { precontent } from './js/precontent/index.js';
import { content } from './js/content/index.js';
import { help } from './js/help.js';

lib.init.css(lib.assetURL + 'extension/活动武将', 'extension');

//更新公告
game.bolShowNewPack = function () {
	//更新告示
	var HuoDong_update = [
		'/setPlayer/',
		'部分素材替换',
		'微信三国杀武将技能调整',
		'添加欢杀武将念周瑜、管宁、谋姜维、韩遂、毌丘俭、精卫、潘璋马忠、阚泽、界太史慈、管辂',
		'To be continued...',
	];
	//更新武将
	var HuoDong_players = [
		'Mnian_zhouyu', 'Mbaby_guanning', 'Mbaby_ol_sb_jiangwei', 'Mbaby_re_hansui', 'Mbaby_guanqiujian',
		'Mbaby_jingwei', 'Mbaby_panzhangmazhong', 'Mbaby_kanze', 'Mbaby_taishici', 'Mbaby_guanlu',
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

let extensionPackage = {
	name: "活动武将",
	editable: false,
	content: content,
	precontent: precontent,
	config: config,
	help: help,
	package: {
		intro: '新人制作扩展，希望大家支持。' +
			'<br>新人技术不足，希望大家包涵。' +
			'<br><a href="https://github.com/mengxinzxz/HuoDong-update.git">点击前往活动武将Github仓库</a>' +
			'<br><li>欢迎大家进群支持活动武将' +
			//入群二维码图片
			'<br><img style=width:238px src=' + lib.assetURL + 'extension/活动武将/HuoDong_QQ.png>' +
			'',
		author: '萌新（转型中）',
		diskURL: '',
		forumURL: '',
		version: '0.3.4 - 待定',
		//新人制作扩展，希望大家支持。
		//新人技术不足，希望大家包涵。
		//壹、贰、叁、肆、伍、陆、柒、捌、玖、拾
	},
	files: {}
};

export let type = 'extension';
export default extensionPackage;