// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database();
const jwt = require('jsonwebtoken');
const JWT_SECRET ="ilove@%##$#$dewer";

const TOKEN_EXPIRES_IN = 86400;
const userDb = db.collection('userlogin');
const bcrypt = require('bcryptjs');
const dayjs = require('dayjs');
module.exports = {
	_before: function () { // 通用预处理器

	},
	// testObj(){
	// 	return {
	// 		code:403,
	// 		message:"用户名或者密码错误"
	// 	}
	// },
	async generateTokenLogin(event, context)
	{
		try {
			let {userName,passWord,_id} = event;

			const existingUser = await userDb.where({userName}).get();
			if(existingUser.data.length===0)
			{
				return {
					code:401,
					message:"暂无账号信息，请先注册",

				}
			}
			const user = existingUser.data[0];
			const isPasswordValid = await bcrypt.compare(passWord,user.passWord);

			if(!isPasswordValid)
			{
				return {
					code:401,
					message:"密码错误",

				}
			}
			const token = jwt.sign(
				{userId:user._id,
				userName:user.userName},
				JWT_SECRET,
				{ expiresIn: TOKEN_EXPIRES_IN }
			);
			return {
				code:200,
				message:'登录成功',
				data:{
					userId:_id,
					userName:user.userName,
					token,
				}
			}
		} catch (error) {
			//TODO handle the exception
			return {
				code:500,
				message:'登录失败'
			}
		}

	},
	async generateRegisterToken(event,context)
	{
		try {
			let {userName,passWord} = event;
			const existingUser = await userDb.where({userName}).get();
			if(existingUser.data.length>0)
			{
				return {
					code:409,
					message:'该用户名已存在！请重新创建账号'
				}
			}
			// 获取盐值
			const salt = await bcrypt.genSalt(10);
			// 加密后的密码
			const password = await bcrypt.hash(passWord,salt);
			let res = await userDb.add({
				userName,
				passWord:password,
				createTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
			})

			// const user = res
				// return {
				// 		code:500,
				// 		message:'添加用户失败',
				// 		errorMassage:res,
				// 	}
			// console.log("resxxx",res)
			if(!res)
			{
				return {
					code:500,
					message:'添加用户失败',
					errorMassage:res,
				}
			}

			const token = jwt.sign(
				{userId:res,
				userName:userName},
				JWT_SECRET,
				{ expiresIn: TOKEN_EXPIRES_IN },
			)
			// console.log("xxxx111")
			return{
				code:200,
				message:"注册成功",
				data: {
				        userId: res,
				        userName,
				        token // 返回生成的 Token
				      }
			}
		} catch (error) {
			//TODO handle the exception
			return {
				 code: 500,
			     message: '服务器错误，添加用户失败',
				 error:error,

			}
		}

	},

	/*
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑

		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
}
