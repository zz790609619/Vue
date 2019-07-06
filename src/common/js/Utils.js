import {Navigator} from './Navigator.js'
// 这是工具的相关js操作
export const Utils = {
	// 设置多个元素的统一样式
	// selectors： document.querySelectorAll 的参数 如 div.div_img, div.content span,可添加多个 逗号隔开
	// callback (dom): 回调函数  dom是回调的参数 表示需要操作的这些dom
	setMoreEleStyle (selectors, callback) {
		Array.prototype.forEach.call(document.querySelectorAll(`${selectors}`), dom => {
			if (callback && typeof callback === 'function') {
				callback(dom)
			}
		})
	},
	// 设置console  带有自定义美化的功能
	// text： 内容;
	// isOneLine：  是否一行显示（1行相当于3行log的高度 所以不能换行）;
	// author：用户名称 ；
	setConsole (text = 'this is console!', isOneLine = 1, author = 'ww') {
		if (isOneLine) {
			console.log('')
			console.log('HelloQ')
			console.log('')
		} else {
			console.log('HelloQ')
					}
	},

	// 一个promise  通过手机自带的设备传感器感应xyz方向的角度实现移动端背景图片视差显示效果
	moveImage () {
		const deviceVersion = Navigator.deviceVersion()
		return new Promise((resolve, reject) => {
			if (deviceVersion.ios) {
				resolve()
			} else if (deviceVersion.android) {
				reject()
			}
		})
	},

	// 格式化日期工具
	formatDate (data, fmt) {
		var o = {
			// 'y+': data.getFullYear() + 1,                 // 月份
			'M+': data.getMonth() + 1,                 // 月份
			'd+': data.getDate(),                    // 日
			'h+': data.getHours() + 8,                   // 小时
			'm+': data.getMinutes(),                 // 分
			's+': data.getSeconds(),                 // 秒
			'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
			'S': data.getMilliseconds()             // 毫秒
		}
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
		}
		for (var k in o) {
			if (new RegExp('(' + k + ')').test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
			}
		}
		return fmt
		}
	}
