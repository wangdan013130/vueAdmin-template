const gameType= {
    git:{
        loginImg:'avatar.png',
        name:'皮皮麻将会员管理后台',
        agentname:'皮皮麻将会员代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,
        h5PayZFB:false,
        h5PayWX:true,
        zhifutong:true,
        jumpToNew:true,
        unionBtn:true,
        additionalorder:false,
        dmtk:true,
        weixinPublicKeFu:true,
        faceConfig:true,
        diamondExchangeGold:true,
        memberBindPhone:true,//添加会员绑定手机号
        agentBind:true,//俱乐部配置
        bspz:true,  //比赛配置
        gold:true,//金卡
        coin2:true,//元宝
        shxx:true,//跑胡子用户管理收货信息
        ownPlayer:true,//我的玩家
        hyjfdhtj:true,//会员积分兑换统计
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/git.jpg',
        //countervail:true,//底分配置开关
        emoj:true,//表情直充配置
       // addDiamond:true,//4级添加钻石
        erCode:true,//我的二维码
        agentRebate:true,//跑得快返利隐藏
        addMemberBtn:true,//添加会员按钮控制
        //chargeclose:true,//关闭充值接口  记得if判断要加载getMyInfo多种判断里边
      //  bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
       // agentRebate:true,//跑得快返利隐藏
       // recommandNew:true,//新返利，和老返利不共存，代理我的会员会换页面
        setSms:true,// 手机验证
        banDay:300,
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
            t10:'跑胡子',
            t11:'株洲跑胡子',
            yyphz:'岳阳跑胡子',
            lz:'娄底',
            '16p':'16人'
        },
        gameid: {
            pphnqp:'皮皮湖南棋牌',
            ddz:'斗地主',
            kwx:'卡五星',
            fjmj: '福建麻将',
            scmj: '血战血流',
            gdmj: '推到胡',
            ssp: '四色牌',
            pdk: '跑得快',
            pphnnn: '拼十',
            sss: '十三张'
        }

    },
    jpgdmj:{
        loginImg:'jpgdmj.png',
        name:'星悦精品广东麻将管理后台',
        agentname:'星悦精品广东麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加星悦广东麻将麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        faceConfig:true,//表情配置
        baiduPacket:true,//百度钱包开关
        rechargeOpen:true,
        wxScanPay:false,
        //  h5Pay:true,
        //bridgeUrl:'https://hm.baidu.com/hm.js?c43db902dcc8ad0a4d8a10ab111f46e3',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        bannerurl:'../img/xylzmj.jpg',
        weixinPublicKeFu:true,//跑马灯微信公众号客服健康公告开关
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        setSms:true,// 手机验证
        countervail:true,
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice: {
        }
    },
    xylzmj:{
        loginImg:'xylzmj.png',
        name:'星悦柳州麻将会员管理后台',
        agentname:'星悦柳州麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加星悦柳州麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        faceConfig:true,//表情配置
        baiduPacket:true,//百度钱包开关
        rechargeOpen:true,
        wxScanPay:false,
        //  h5Pay:true,
        //bridgeUrl:'https://hm.baidu.com/hm.js?c43db902dcc8ad0a4d8a10ab111f46e3',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        bannerurl:'../img/xylzmj.jpg',
        weixinPublicKeFu:true,//跑马灯微信公众号客服健康公告开关
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        setSms:true,// 手机验证
        countervail:true,
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice: {
            gxmj:'广西麻将',
            gx0:'南宁',
            gx1:'桂林',
            gx2:'河池',
            gx3:'柳州',
            gx4:'玉林',
            gx5:'百色',
            gx6:'贵港',
            gx7:'钦州',
            gx8:'转转',
            gx9:'推倒胡',
            gx10:'北海',
            gx11:'来宾',
            gx12:'横县',
            gx13:'都安',
            j4:'4局',
            j8:'8局',
            f0:'不带风',
            f1:'带风',
            c0:'不可以吃',
            c1:'可以吃',
            p0:'不封胡',
            p1:'可封胡'
        }
    },
    syzp:{
        loginImg:'syzp.png',
        name:'皮皮邵阳字牌',
        agentname:'皮皮邵阳字牌代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        faceConfig:true,
        bannerurl:'../img/banner.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        dicStatistice:{

        }
    },
    gxpp:{
        loginImg:'gxpp.png',
        name:'爱星悦拼牌',
        agentname:'爱星悦拼牌代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        faceConfig:true,
        bannerurl:'../img/banner.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        dicStatistice:{

        }
    },
    xygdmjnew:{
        loginImg:'xygdmjnew.png',
        name:'皮皮梅州麻将会员管理后台',
        agentname:'皮皮星悦梅州麻将代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        weixinPublicKeFu:true,//系统设置-微信
        timeMarquee:true,
        faceConfig:true,
        bannerurl:'../img/banner.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        dicStatistice:{
            t1:'广州推倒胡',
            t2:'惠州庄麻将',
            t3:'香港麻将',
            t9:'深圳麻将',
            t4:'东莞麻将',
            t5:'鸡平胡',
            t6:'100张',
            r4:'4局',
            r8:'8局',
            g0:'无鬼',
            g1:'红中鬼',
            g2:'翻鬼',
            b0:'无爆炸马',
            b1:'爆炸马',
            s3:'三人推倒胡',
            s4:'四人玩法',
            j0:'无节节高',
            j1:'节节高',
            nj0:'无惠州不可鸡胡',
            nj1:'惠州不可鸡胡',
            m0:'无惠州马跟底',
            m1:'惠州马跟底',
            mq0:'无惠州门清',
            mq1:'惠州门清',
            md0:'无惠州马跟对对胡',
            md1:'惠州马跟对对胡',
            h2:'2马',
            h4:'4马',
            h6:'6马',
            f0:'无风牌',
            f1:'有风牌',
            d0:'不可胡七对',
            d1:'可胡七对',
            c0:'不可吃',
            c1:'可吃',
            p0:'可点炮',
            p1:'不可点炮',
            t10:'做牌推倒胡',
            t12:'二人推到胡',
            t7:'河源麻将',
            t8:'潮汕麻将',
            t11:'红中宝',
            t13:'博罗庄',
            t100:'代开房',
            zjn:'炸金牛',
            sg:'三公',
            psz:'拼三张',
            nnsz:'牛牛上庄',
            zyqz:'自由抢庄',
            mpqz:'名牌抢庄',
            gdzj:'固定庄家',
            tbnn:'通比牛牛',
            jd:'经典',
            fk:'疯狂',
            d:'斗地主',
            nn:'牛牛',
            t14:'广东晃晃'
        }
    },
    ryqp:{
        loginImg:'avatar.png',
        name:'荣耀棋牌',
        agentname:'荣耀棋牌代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        faceConfig:true,
        bannerurl:'../img/banner.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        dicStatistice:{

        }
    },
    hyzp:{
        loginImg:'hyzp.png',
        name:'衡阳字牌会员管理后台',
        agentname:'衡阳字牌代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        faceConfig:true,
        bannerurl:'../img/banner.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        dicStatistice:{
                t6:'衡阳六胡抢',
                t15:'衡阳十胡卡',
                t18:'祁东落叶扫',
                r6:'6局',
                r10:'10局',
                r15:'15局',
                t5:'衡阳十五胡'
            }
    },
    coinroom:{
        loginImg:'coinroom.png',
        name:'休闲场-会员管理后台',
        agentname:'休闲场-会员代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/banner.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
        }

    },
    ppylc:{
        loginImg:'ppylc.png',
        name:'皮皮娱乐城会员管理后台',
        agentname:'皮皮娱乐城会员代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
    //    h5Pay:true,//钻石的h5充值通道开关
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ppylc.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?4ed923e8e95ac30d2e00135864e5516d',//商桥
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        erCode:true,//我的二维码
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
        }

    },
    ttnn:{
        loginImg:'ttnn.png',
        name:'天天牛牛会员管理后台',
        agentname:'天天牛牛代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ttnn.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
        }

    },
    webniuniu:{
        loginImg:'webniuniu.png',
        name:'皮皮斗牌会员管理后台',
        agentname:'皮皮斗牌代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/webniuniu.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
        }

    },
    phztv:{
        loginImg:'phztv.png',
        name:'跑胡子TV比赛版',
        agentname:'跑胡子TV比赛版代理后台',
        color:'background-color:white',
        addDiamondName:'添加元宝',
        rechargeOpen:true,
        wxScanPay:true,
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/phztv.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
        }

    },
    webnn:{
        loginImg:'webnn.png',
        name:'皮皮斗牌管理后台',
        agentname:'皮皮斗牌代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/webnn.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
        }

    },
    hlphz:{
        loginImg:'hlphz.png',
        name:'皮皮欢乐跑胡子',
        agentname:'皮皮欢乐跑胡子代理后台',
        color:'background-color:white',
        addDiamondName:'添加金币',
        rechargeOpen:true,
        wxScanPay:true,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        faceConfig:true,//表情配置
        diamondExchangeGold:true,//钻石兑换金币
        jbcBtn:true,//休闲场通道开关
        countervail:true,//休闲场低分配置
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/hlphz.jpg',
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
            t2:'娄底放炮罚 ',
            t3:' 邵阳剥皮',
            t14:'VIP二人跑胡子',
            t11:'岳阳歪胡子',
            t4:'怀化红拐弯',
            t6:'衡阳六胡抢',
            r6:'6局',
            r10:'10局',
            r16:'16局',
            r1:'1局',
            r10002:'满百结束',
            r10003:'满百结束'
        }
    },
    shisanzhang:{
        loginImg:'shisanzhang.png',
        name:'星悦十三张会员管理后台',
        agentname:'星悦十三张会员代理后台',
        color:'background-color:white',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:true,
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/shisanzhang.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
            shisanzhang:'十三张',
            jingDian:'经典玩法',
            zuoZhuang:'坐庄玩法',
            playerNumber2:'2人',
            playerNumber3:'3人',
            playerNumber4:'4人',
            playerNumber5:'5人',
            playerNumber6:'6人',
            playerNumber7:'7人',
            maPai:'马牌',
            fuQing:'福清',
            round10:'10局',
            round20:'20局',
            round30:'30局'
        }

    },
    sgscmj:{
        loginImg:'sgscmj.png',
        name:'三国四川麻将会员管理后台',
        agentname:'三国四川麻将会员代理后台',
        color:'background-color:white',
        addDiamondName:'添加房卡',
        rechargeOpen:true,
        wxScanPay:true,
        jbcBtn:true,//休闲场通道开关
        //h5Pay:true,//钻石的h5充值通道开关
        jumpToNew:true,//跳转至新后台的开关
        countervail:true,//底分配置开关
        alipayTextTip:'请在浏览器里面操作充值',
        bannerurl:'../img/sgscmj.jpg',
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        baiduPacket:true,//百度钱包开关
        emoj:true,//表情直充配置
        wxScanPayTextTip:'充值完成后请重新加载页面 ',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
            'z':'血战到底',
            'n':'内江麻将',
            'e':'二人玩法',
            'b':'血流成河',
            's':'三人麻将',
            'j4':'4局',
            'j8':'8局',
            'a0':'不换三张',
            'a1':'换三张',
            'e2':'2人2房',
            's3':'3人3房',
            'e3':'2人3房',
            's2':'3人2房',
            'c1':'初级场',
            'c2':'中级场',
            'c3':'高级场',
            'c4':'专家场',

        }

    },
    xyzjqp:{
        loginImg:'xyzjqp.png',
        name:'星乐嘉兴麻将会员管理后台',
        agentname:'星乐嘉兴麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加钻石',
        rechargeOpen:true,
        wxScanPay:false,
        unionBtn:true,//添加工会账号开关
   //     h5Pay:true,//钻石的h5充值通道开关
        jumpToNew:true,//跳转至新后台的开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/xyzjqp.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        diamondExchangeGold:true,
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
			'4':'4局',
			'6':'6局',
			'8':'8局',
			'10':'10局',
			'16':'16局',
			'20':'20局',
			'30':'30局',
			'maxm':'无限制',
			'60m':'60秒',
			'30m':'30秒',
			'mpqz':'明牌抢庄',
			'nnsz':'牛牛上庄',
			'gdzj':'固定庄家',
			'zyqz':'自由抢庄',
			'tbnn':'通比牛牛',
			'fk':'疯狂',
			'nn':'牛牛',
			'pdk':'跑得快',
			'16z':'16张',
			'15z':'15张',
			's0':'不显示',
			's1':'显示',
			'f0':'非必出',
			'f1':'必出',
			'fw':'赢家先',
			'f3':'黑3先',
			'd':'斗地主',
			'jd':'经典',
			'hl':'欢乐',
			'sc':'四川',
			'sr':'四人',
			'lz':'癞子',
			'er':'二人',
			'gdy':'干瞪眼',
			'2z':'2炸',
			'3z':'3炸',
			'4z':'4炸',
			'2r':'2人',
			'3r':'3人',
			'4r':'4人',
			'5r':'5人',
			'6r':'6人',
			'7r':'7人',
			'psz':'拼三张',
			'hta':'黑桃A',
			'tb':'通比',
			'gcy':'公苍蝇',
			'ls':'罗松',
			'zz':'坐庄',
			'dr':'多人',
			'maPai':'马牌',
			'fuQing':'福清',
			'guiPai':'鬼牌',
			'xyls':'星悦罗松',
			'lunz':'轮流坐庄',
			'nbnn':'宁波拼十',
			'hs':' 红十',
			'5f':' 5分',
			'10f':' 10分',
			'15f':' 15分',
			'dxian':' 谁大谁先出',
			'lunliu':' 轮流先手'
        }
    },
    niubihh:{
        loginImg:'niubihh.png',
        name:'皮皮牛币轰轰会员管理后台',
        agentname:'皮皮牛币轰轰会员管理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加牛币轰轰牛币',
        rechargeOpen:true,
        wxScanPay:false,
        unionBtn:true,//添加工会账号开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/niubihh.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            d:'代开房',
            nbhh:'牛币轰轰',
            mpqz:'明牌抢庄',
            fk:'疯狂',
            zyqz:'自由抢庄',
            jd:'经典',
            gdzj:'固定庄家',
            nnsz:'牛牛上庄',
            10:'10局',
            20:'20局'
        }
    },
    phzvip:{
        loginImg:'phzvip.png',
        name:'跑胡子至尊版管理后台',
        agentname:'跑胡子至尊版管理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加跑胡子至尊版元宝',
        rechargeOpen:true,
        wxScanPay:false,
        unionBtn:true,//添加工会账号开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/phzvip.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    pphnqp:{
        loginImg:'pphnqp.png',
        name:'湖南棋牌会员管理后台',
        agentname:'湖南棋牌会员管理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加湖南棋牌钻石',
        rechargeOpen:true,
        wxScanPay:false,
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        jbcBtn:true,//休闲场通道开关
        faceConfig:true,//表情配置
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/pphnqp.jpg',
        //bridgeUrl:'https://hm.baidu.com/hm.js?99a353109bb1833b345530972baa9904',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    yldlmj:{
        loginImg:'yldlmj.png',
        name:'云岭大理麻将会员管理后台',
        agentname:'云岭大理麻将会员管理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加云岭大理麻将钻石',
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/yldlmj.jpg',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    ppcdqp:{
        loginImg:'ppcdqp.png',
        name:'皮皮常德棋牌会员管理后台',
        agentname:'皮皮常德棋牌会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加皮皮常德棋牌钻石',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        unionBtn:true,//添加工会账号开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ppcdqp.jpg',
        bridgeUrl:'https://hm.baidu.com/hm.js?d00b912cefb17cd8f0276f039231c83b',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    ylqp:{
        loginImg:'ylqp.png',
        name:'弈乐棋牌会员管理后台',
        agentname:'弈乐棋牌会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加弈乐棋牌钻石',
        rechargeOpen:true,
        wxScanPay:false,
        unionBtn:true,//添加工会账号开关
        alipayTextTip:'请在浏览器里面操作充值',
        weixinPublicKeFu:true,//跑马灯微信公众号客服健康公告开关
        countervail:true,//底分配置开关
        bannerurl:'../img/ylqp.jpg',
       // gold:true,//金卡
       jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        wxScanPayTextTip:'充值完成后请重新加载页面',
        bridgeUrl:'https://hm.baidu.com/hm.js?46b33d3356d87d60c3113774798c87dd',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            nn:'牛牛',
            nnsz:'牛牛上庄',
            zyqz:'自由抢庄',
            mpqz:'名牌抢庄',
            gdzj:'固定庄家',
            jd:'经典牛牛',
            fk:'疯狂牛牛',
            dz:'德州牛牛',
            '10':'10局',
            '20':'20局',
            nnCoinVIP:'牛牛vip场',


            psz:'拼三张',
            '8':'8局',
            '16':'16局',
            sdxs:'谁大谁先手',
            llxs:'轮流先手',

            tg:'推拱',
            '30':'30局',

            j:'经典斗地主',
            h:'欢乐斗地主',
            l:'癞子斗地主',
            '6':'6局',
            '12':'12局',
            '18':'18局',
            '2z':'2炸',
            '3z':'3炸',
            '4z':'4炸',
            dbz:'打板子',
            nnCoinRoom:'牛牛休闲场',
            nnCoinVip:'牛牛vip场'
        }
    },
    hnyiyangmj:{
        loginImg:'hnyiyangmj.png',
        name:'湖南益阳会员管理后台',
        agentname:'湖南益阳会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加湖南益阳元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        bridgeUrl:'https://hm.baidu.com/hm.js?a724aa00edf5746fce6b7e488307e679',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/git.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    ntcp:{
        loginImg:'ntcp.png',
        name:'南通长牌会员管理后台',
        agentname:'南通长牌会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加南通长牌元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ntcp.jpg',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            t0:'双将',
            t1:'单将',
            t2:'皋单',
            j4:'4局',
            j8:'8局'
        }
    },
    zhuzhouphz:{
        loginImg:'zhuzhouphz.png',
        name:'皮皮好手气娱乐会员管理后台',
        agentname:'皮皮好手气娱乐会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加好手气元宝',
        rechargeOpen:true,
        wxScanPay:false,
        unionBtn:true,//添加工会账号开关
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        bridgeUrl:'https://hm.baidu.com/hm.js?6468b6f2d785604716c85d036c1d2245',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/zhuzhouphz.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            t10:' 碰胡',
            r8:' 8局',
            r16:'16局',
            r24:'24局',
            r9999:'包房',
            d:'牛',
            nn:'牛',
            nnsz:'牛牛上庄',
            zyqz:'自由抢庄',
            mpqz:'明牌抢在',
            gdzj:'固定庄家',
            tbnn:'通比牛牛',
            fk: '疯狂',
            jd:'经典',
            10:'10局',
            20:'20局',
            30:'30局',
            rt3:'公会',
            ppk:'跑得快',
            s0:'不显示牌数',
            s1:'显示牌数',
            f0:'非强制出牌',
            f1:'强制出牌',
            fw:'庄家先出',
            f3:'黑桃三先出',
            15:'15张',
            16:'16张'
        }
    },
    hnyymj:{
        loginImg:'hnyymj.png',
        name:'岳阳棋牌会员管理后台',
        agentname:'岳阳棋牌会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加岳阳麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        jumpToNew:true,//跳转至新后台的开关
        unionBtn:true,//添加工会账号开关
        jbcBtn:true,//休闲场通道开关
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        bridgeUrl:'https://hm.baidu.com/hm.js?6262be9af15030191b96483f6b9899c5',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/hnyymj.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    psz:{
        loginImg:'psz.png',
        name:'热血海南会员管理后台',
        agentname:'热血海南会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加热血海南元宝',
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,//休闲场通道开关
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/psz.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            ddz:'斗地主',
            j:'经典',
            h:'欢乐',
            s:'四川',
            r:'四人',
            l:'癞子',
            e:'二人',
            5:'5局',
            10:'10局',
            2:'2炸',
            3:'3炸',
            4:'4炸',
            j4:'4局',
            j8:'8局',
            z:'推到胡',
            hn:'海南麻将',
            w2:'2人',
            w3:'3人',
            w4:'4人',
            gold:'休闲场',
            nn:'斗牛',
            l1:'初级场',
            l2:'中级场',
            l3:'高级场',
            l4:'专家场',
            l5:'大师场',
            l6:'宗师场',
            d:'普通场',
            6:'6局',
            12:'12局',
            psz:'拼三张',
            sg:'三公'
        }
    },
    ylgymj:{
        loginImg:'ylgymj.png',
        name:'弈乐贵阳麻将会员管理后台',
        agentname:'弈乐贵阳麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加弈乐贵阳麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,//休闲场通道开关
        unionBtn:true,//添加工会账号开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ylgymj.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    dzpk:{
        loginImg:'dzpk.png',
        name:'德州扑克会员管理后台',
        agentname:'德州扑克会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加德州扑克元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/dzpk.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    ljmj:{
        loginImg:'ljmj.png',
        name:'辽宁麻将会员管理后台',
        agentname:'辽宁麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加辽宁麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ljmj.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    guandan:{
        loginImg:'guandan.png',
        name:'掼蛋麻将会员管理后台',
        agentname:'掼蛋麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加掼蛋麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/guandan.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    hbmj:{
        loginImg:'hbmj.png',
        name:'河北麻将会员管理后台',
        agentname:'河北麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加河北麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/hbmj.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    gsmj:{
        loginImg:'gsmj.png',
        name:'甘肃麻将会员管理后台',
        agentname:'甘肃麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加甘肃麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
    //    h5Pay:true,//钻石的h5充值通道开关
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        //bridgeUrl:'https://hm.baidu.com/hm.js?7967626b9dbd59eee6e621b9af6ee4ec',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        bannerurl:'../img/gsmj.jpg',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        baiduPacket:true,//百度钱包开关
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                gsmj:'甘肃麻将',
                tdh:'推倒胡',
                xa:'西安',
                bj:'宝鸡',
                yl:'榆林',
                hs:'滑水',
                lz:'兰州',
                ts:'天水',
                gg:'甘谷',
                4:'4局',
                8:'8局',
                c0:'不吃',
                c1:'吃',
                f0:'不带风',
                f1:'带风',
                p0:'不吃胡',
                p1:'吃胡',
                lz0:'无勒子',
                lz1:'有勒子',
                per2:'2人',
                per3:'3人',
                per4:'4人',
                lnbj:'陇南摆叫',
                tb:'二报',
                tper:'二人'
            }
    },
    nxmj:{
        loginImg:'nxmj.png',
        name:'宁夏麻将会员管理后台',
        agentname:'宁夏麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加宁夏麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
  //      h5Pay:true,//钻石的h5充值通道开关
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/nxmj.jpg',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            fanghu:'可以放胡',
            jiang258:'258做将',
            nd1:'可胡七对',
            Nod1:'不可胡七对',
            zhong:'红中赖子',
            Nozhong:'不带红中赖子',
            wind:'带风牌',
            Nowind:'不带风牌',
            sixCards:'甩六张',
            NosixCards:'不甩六张',
            NoFish:'不下鱼',
            twoFish:'下2鱼',
            fiveFish:'下5鱼',
            eightFish:'下8鱼'
        }

    },
    shmj:{
        loginImg:'shmj.png',
        name:'上海麻将会员管理后台',
        agentname:'上海麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加上海麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/shmj.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    gxphz:{
        loginImg:'gxphz.png',
        name:'广西跑胡子会员管理后台',
        agentname:'广西跑胡子会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加广西跑胡子元宝',
        rechargeOpen:true,
        wxScanPay:false,
   //     h5Pay:true,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        //bridgeUrl:'https://hm.baidu.com/hm.js?7de08856c9732c8b05e0c51fd371ad3d',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/gxphz.jpg',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        gold:true,//金卡
        faceConfig:true,
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice: {
            t0: '桂林',
            t1: '河池',
            r6: '6局',
            r10: '10局',
            r15: '15局',
            r16: '16局',
            r20: '20局',
            r106: '6局',
            r110: '10局',
            r115: '15局',
            r116: '16局',
            r120: '20局'
        }

    },
    henmj:{
        loginImg:'henmj.png',
        name:'河南麻将会员管理后台',
        agentname:'河南麻将会员代理后台',
        agentBind:true,//俱乐部开关
        color:'background-color:#F5F5DC',
        addDiamondName:'添加河南麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,
        bspz:true,  //比赛配置
        faceConfig:true,//表情配置
        zhifutong:true,//钻石的支付通充值通道开关
        //h5Pay:true,//钻石的h5充值通道开关
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        //selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        //bridgeUrl:'https://hm.baidu.com/hm.js?05d088c71411da7144e7805868c0d160',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/henmj.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            zz: '郑州',
            zz2: '郑州2人',
            zz3: '郑州3人',
            ln: '洛宁',
            ln3: '洛宁3人',
            ln2: '洛宁2人',
            kf: '开封',
            ly: '洛阳',
            jz: '焦作',
            xy: '信阳',
            ay: '安阳',
            tdh: '推倒胡',
            zmd: '驻马店',
            zmd3: '驻马店3人',
            xymtp: '信阳满堂跑',
            ny: '南阳',
            zk: '周口',
            sq: '商丘',

            j01: '1局',
            j04: '4局',
            j06: '6局',
            j08: '8局',
            j10: '10局',
            j15: '15局',
            j16: '16局',
            j20: '20局',

            df: '带风',
            dp: '点炮胡',
            zm: '自摸胡',
            hun: '带混',
            zfb: '庄翻倍',
            bc: '包次',
            xytdh: '信阳推倒胡',
            zui4: '四公嘴',
            zui7: '七公嘴',
            zui10: '十公嘴',
            fen1: '底分1',
            fen2: '底分2',
            fen5: '底分5',
            fen10: '底分10',
            w258j: '258将',
            quem: '缺门',
            dt: '独听',
            bz: '包庄',
            lllj: '连6连9',
            dxp: '带下跑',
            qysfb: '清一色翻倍',
            agss: '暗杠锁死',
            qh: '弃胡',
            yk: '硬抠',
            lsdy: '亮四打一',
            jm: '绝门',
            qz: '掐张',
            mq: '门清',
            ak: '暗卡',
            zmjz: '自摸加嘴',
            w0h0c: '大众麻将',
            w0h1c: '有财无花',
            w1h0c: '有花无财',
            gz: '跟张',
            np: '禁止碰'
        }
    },
    ahmj:{
        loginImg:'ahmj.png',
        name:'安徽麻将会员管理后台',
        agentname:'安徽麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加安徽麻将元宝',
        rechargeOpen:true,
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理ecommend:0, recharge:0},
        //h5Pay:true,//钻石的h5充值通道开关
        //chargeclose:true,//关闭充值接口
        baiduPacket:true,//百度钱包开关
        addMemberBtn:true,//代理添加会员开关
        wxScanPay:false,
        jbcBtn:true,
        bridgeUrl:'https://hm.baidu.com/hm.js?503c4eb6422b8194cee18fa43bfce02c',
        bannerurl:'../img/ahmj.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            'j4':'4局',
            'j8':'8局',
            'c0':'不可以吃',
            'c1':'可以吃',
            'f0':'不带风',
            'f1':'带风',
            'p0':'不可以点炮',
            'p1':'可以点炮',
            'h0':'不带混儿',
            'h1':'带混儿',
            'hp71':'混儿牌是红中',
            'q0':'不可以胡7对',
            'q1':'可以胡7对',
            'hua0':'不可以补花',
            'hua1':'可以补花',
            'ag0':'不可以暗杠',
            'ag1':'可以暗杠',
            'mg0':'不可以明杠',
            'mg1':'可以明杠',
            'dp0':'不可以一炮多响',
            'dp1':'可以一炮多响',
            'gp0':'不可以杠上炮',
            'gp1':'可以杠上炮',
            'qg0':'不可以抢杠胡',
            'qg1':'可以抢杠胡',
            'bao0':'不计算包牌',
            'bao1':'计算包牌',
            'guop0':'不可以过碰不碰',
            'guop1':'可以过碰不碰',
            'm1':'合肥麻将',
            'm2':'红中赖子麻将',
            'm3':'安庆麻将',
            'm4':'淮南麻将',
            'm5':'阜阳麻将'
        }
    },
    xynmmj: {
        loginImg: 'xynmmj.png',
        name: '内蒙麻将会员管理后台',
        agentname: '内蒙麻将会员代理后台',
        color: 'background-color:#F5F5DC',
        addDiamondName: '添加内蒙麻将元宝',
        rechargeOpen: true,
        wxScanPay: false,
        alipayTextTip: '请在浏览器里面操作充值',
        wxScanPayTextTip: '充值完成后请重新加载页面',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        bspz:true,  //比赛配置
        emoj:true,
        //h5Pay: true,//钻石的h5充值通道开关
        //bridgeUrl: 'https://hm.baidu.com/hm.js?650ca4af9c6b0f783cb5c00b47c0fccd',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/xynnmj.jpg',
        rebate: {
            basic: {sca: 0.16, recommend: 0, recharge: 0},
            firstLevel: {sca: 0.2, recommend: 4, recharge: 1000},
            secondLevel: {sca: 0.24, recommend: 10, recharge: 1000}
        },
        rebate2: {
            basic: {sca: 0.16, recommend: 0, recharge: 0},
            firstLevel: {sca: 0.2, recommend: 4, recharge: 1000},
            secondLevel: {sca: 0.24, recommend: 10, recharge: 1000}
        },
        dicStatistice: {
            'dda4': '打大A4局',
            'dda8': '打大A8局',
            'dda12': '打大A12局',
            'bt':'包头',
            'd': '斗地主',
            'j': '经典',
            'h': '欢乐',
            's': '四川',
            'l': '癞子',
            'e': '二人',
            'tbz': '推对子',
            'j4': '4局',
            'j8': '8局',
            'j16': '16局',
            'z1': '定庄',
            'z2': '抢庄',
            '36z': '36张',
            '40z': '40张',
            'ykx': '一口香',
            'df1': '带风',
            'df2': '不带风',
            '2r': '二人',
            '3r': '三人',
            '4r': '四人',
            'zmh1': '自摸胡',
            'zmh2': '吃胡',
            'zm1': '自摸胡',
            'zm2': '吃胡',
            'bkcp': '不可吃碰',
            'lp': '乱碰',
            'bkp': '不可碰',
            'dp0': '一炮单响',
            'dp1': '一炮多响',
            'sx99999': '无上限',
            'sx50': '上限50',
            'sx20': '上限20',
            'sx100': '上限100',
            'tdh': '推倒胡',
            'dt1': '带听',
            'dt2': '不带听',
            'eeds': '鄂尔多斯',
            'yz1': '带跑拉蹲',
            'yz2': '不带跑拉蹲',
            'qg1': '抢杠胡',
            'qg2': '不可抢杠胡',
            'cftdh': '赤峰推倒胡',
            'tl': '通辽',
            'pjh1': '是票夹胡',
            'pjh2': '不是票夹胡',
            'bt':'包头'
        }
    },
    ynmj:{
        loginImg:'ynmj.png',
        name:'云南麻将会员管理后台',
        agentname:'云南麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加云南麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,
    //    h5Pay:true,
        gold:true,
      //  bridgeUrl:'https://hm.baidu.com/hm.js?9637f872177f6689694b4d3a40316101',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ynmj.jpg',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理ecommend:0, recharge:0},
        rebate:{
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            kxw:'卡心五',
            qjmj:'曲靖',
            ket:'卡二条',
            puermj:'普洱',
            hongHmj:'红河',
            yuximj:'玉溪',
            cxmj:'楚雄',
            dali:'剑川',
            wensh:'文山',
            kunmi:'昆明',
            baoshan:'保山',
            binc:'宾川',
            gandy:'干瞪眼',
            people4:'4人',
            people3:'3人',
            ju4:'4局',
            ju8:'8局',
            ju16:'16局',
            s:'',
            z:'',
            c0:'不可吃',
            c1:'可吃',
            f0:'不带风',
            f1:'带风',
            p0:'不可吃胡',
            p1:'可吃胡'
        }
    },
    hanmj:{
        loginImg:'hanmj.png',
        name:'海南麻将会员管理后台',
        agentname:'海南麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加海南麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/hanmj.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
                j4:'4局',
                j8:'8局',
                z:'推到胡',
                s:'海南',
                c0:'不可以吃',
                c1:'可以吃',
                f0:'不带风',
                f1:'带风',
                p0:'不可吃胡',
                p1:'可以吃胡',
                r0:'不带红中',
                r1:'红中赖子',
                q0:'无七对',
                q1:'可胡七对',
                g0:'不叫',
                g1:'叫嘎',
                w2:'2人玩',
                w3:'3人玩',
                w4:'4人玩'
            }
    },
    fjmj:{
        loginImg:'fjmj.png',
        name:'福建麻将会员管理后台',
        agentname:'福建麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加福建麻将元宝',
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,
  //      h5Pay:true,//钻石的h5充值通道开关
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        //selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        //bridgeUrl:'https://hm.baidu.com/hm.js?5af4761c5bc4d122a98e074feb74854c',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        baiduPacket:true,//百度钱包开关
        countervail:true,//底分配置开关
        bannerurl:'../img/fjmj.jpg',
        gold:true,//金卡
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                qz:'泉州麻将',
                mq:'闽清麻将',
                zz:'漳州麻将',
                hz:'红中麻将',
                xm:'厦门麻将',
                nd:'宁德麻将',
                pt:'莆田麻将',
                4:'4局',
                8:'8局',
                TG:'托管模式',
                p4:'4人房间',
                p3:'3人房间',
                p2:'2人房间',
                t1:'广式推倒胡',
                t10:'做牌推倒胡',
                t12:'二人推倒胡',
                r4:'4局',
                r8:'8局',
                s4:'4人房',
                s3:'3人房',
                s2:'2人房'
            },
        gameid: {
            fjmj: '福建麻将',
            scmj: '血战血流',
            gdmj: '推到胡',
            ssp: '四色牌',
            pdk: '跑得快',
            ddz: '斗地主',
            pphnnn: '拼十',
            pphnqp: '拼三张',
            sss: '十三张'
        }
    },
    jsmj:{
        loginImg:'jsmj.png',
        name:'江苏麻将会员管理后台',
        agentname:'江苏麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加江苏麻将元宝',
        rechargeOpen:true,
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        wxScanPay:false,
    //    h5Pay:true,//钻石的h5充值通道开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/jsmj.jpg',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                jsmj:'江苏麻将',
                nj:'南京',
                yz:'扬州',
                xh:'兴化',
                sz:'苏州',
                yc:'盐城',
                j01:'1局',
                j04:'4局',
                j06:'6局',
                j08:'8局',
                j10:'10局',
                j15:'15局',
                j16:'16局',
                j20:'20局',
                js100:'上限100',
                js200:'上限200',
                js500:'上限500',
                js999:'上限不限',
                qh9:'9番起胡',
                qh13:'13番起胡',
                qh18:'18番起胡',
                m3c4:'3摸4冲',
                m2c3:'2摸3冲',
                qd1:'可胡七对',
                qd2:'不可胡七对'
            }
    },
    phz:{
        loginImg:'phz.png',
        name:'跑胡子会员管理后台',
        agentname:'跑胡子会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加跑胡子元宝',
        jump:{
            tip:{url:'tip', name:'选择游戏后台'},
            phz:{url:'http://pdk.coolgamebox.com:88/login.html', name:'跑得快会员管理后台'}
        },
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,
        shxx:true,//跑胡子用户管理收货信息
        faceConfig:true,//表情配置
        ownPlayer:true,//我的玩家
        diamondExchangeGold:true,//钻石兑换金币
        memberBindPhone:true,//添加会员绑定手机号
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/phz.jpg',
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        agentRebate:true,//跑得快返利隐藏
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                t1: '邵阳',
                t2: '娄底',
                t3: '剥皮',
                t4: '怀化',
                t5: '常德',
                t6: '衡阳',
                t7: '长沙',
                t8: '湘乡',
                t9: '永州',
                t10: '攸县',
                t11: '岳阳',
                t12: '耒阳',
                t13: '郴州',
                r6: '6局',
                r10: '10局',
                r16: '16局',
                r1000: '',
                r1001: '',
                r1002: '',
                r106: '6局',
                r110: '10局',
                r116: '16局',
                r206: '6局',
                r210: '10局',
                r216: '16局'
            }
    },
    symj:{
        loginImg:'avatar.png',
        name:'湖南麻将会员管理后台',
        agentname:'湖南麻将会员代理后台',
        color:'background-color:white',
        addDiamondName:'添加湖南麻将钻石',
        rechargeOpen:true,
        wxScanPay:false,
        bspz:true,  //比赛配置
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,
        baiduPacket:true,//百度钱包开关
        zhifutong:true,//钻石的支付通充值通道开关
        bannerurl:'../img/symj.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{

        }
    },
    scmj:{
        loginImg:'scmj.png',
        name:'四川麻将会员管理后台',
        agentname:'四川麻将会员代理后台',
        color:'background-color:#F0F8FF',
        addDiamondName:'添加四川麻将钻石',
        emoj:true,//表情直充配置
        gold:true,//金卡
        jump:{//http://ddz.coolgamebox.com:88/login.html  coolgamebox 改为 happyplaygame
            tip:{url:'tip', name:'选择游戏后台'},
            ddz:{url:'http://ddz.happyplaygame.net/login.html', name:'斗地主会员管理后台'}
        },
        gameIds: ['scmj', 'ddz'],
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,
        countervail:true,//底分配置开关
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        faceConfig:true,//表情配置
        bspz:true,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        bannerurl:'../img/scmj.jpg',
        baiduPacket:true,//百度钱包开关
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice:{
            z:'血战到底',
            n:'内江麻将',
            e:'二人玩法',
            d:'倒倒胡',
            b:'血流成河',
            y:'德阳麻将',
            s:'三人麻将',
            j4:'4局',
            j8:'8局',
            a0:'不换三张',
            a1:'换三张',
            wz: '万州',
            e2:'2人2房',
            s3:'3人3房',
            e3:'2人3房',
            s2:'3人2房',
            c1:'初级场',
            c2:'中级场',
            c3:'高级场',
            c4:'专家场',
            c5:'大师场',
            c6:'宗师场'
        }
    },
    jxmj:{
        loginImg:'jxmj.png',
        name:'江西麻将会员管理后台',
        agentname:'江西麻将会员代理后台',
        color:'background-color:#F5F5DC',
        addDiamondName:'添加江西麻将钻石',
        agentBind:true,//俱乐部开关
    //    h5Pay:true,//钻石的h5充值通道开关
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rechargeOpen:true,
        wxScanPay:false,
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/jxmj.jpg',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                'area0' : '转转麻将',
                'area1' : '南昌麻将',
                'area2' : '上饶麻将',
                'area3' : '贵溪麻将',
                'area4' : '景德镇麻将',
                'area5' : '鹰潭麻将',
                'area6' : '博精麻将',
                'area7' : '跳跳麻将',
                'area8' : '乐平麻将',
                'area9' : '南城麻将',
                'mpqz' : '明牌抢庄',
                'nnsz' : '牛牛上庄',
                'gdzj' : '固定庄家',
                'tbnn' : '通比牛牛',
                'zyqz' : '自由抢庄',
                'mplz' : '顺序轮庄',
                'fk' : '疯狂牛牛',
                'jd' : '经典牛牛',
                'round4' : '四局',
                'round8' : '八局',
                'round12' : '十二局',
                'round16' : '十六局',
                'playnum2' : '两人',
                'playnum3' : '三人',
                'playnum4' : '四人',
                'nanchangType0' : '翻精自摸',
                'nanchangType1' : '翻精点炮',
                'nanchangType2' : '无下精',
                'nanchangType3' : '埋地雷',
                'nanchangType4' : '回头一笑',
                'nanchangType5' : '同一首歌',
                'dianPaoSanFu0' : '点炮一家付',
                'dianPaoSanFu1' : '点炮多家付',
                'mingGangSanFu0' : '明杠一家付',
                'mingGangSanFu1' : '明杠多家付',
                'canEatHu0' : '自摸',
                'canEatHu1' : '点炮',
                'isHongZhong' : '红中癞子',
                'isJiang258' : '258将',
                'withWind' : '带风',
                'zhuaniaoType0' : '抓2鸟',
                'zhuaniaoType1' : '抓4鸟',
                'zhuaniaoType2' : '抓6鸟',
                'zhuaniaoType3' : '窝窝鸟',
                'zhuaniaoType4' : '上中下鸟',
                'danDiaoScore3' : '贵溪单调3分',
                'danDiaoScore4' : '贵溪单调4分',
                'fengDing16' : '16分封顶', //鹰潭
                'fengDing32' : '32分封顶', //鹰潭
                'fengDing64' : '64分封顶', //鹰潭
                'isWithJingDiao' : '转转麻将是否有精调',
                'withXiaoSaHu' : '潇洒胡',
                //'isBaoYiFu1' : '包牌一家付',
                //'isBaoYiFu3' : '包牌三家付',//胡牌分三家付，明摆分一个人付
                'withHuBao' : '胡宝算分',
                'withBaoDingMing' : '抱定明摆',//???
                'withDaiBen' : '庄家带本'
    }
    },
    sxmj:{
        loginImg:'sxmj.png',
        name:'陕西麻将会员管理后台',
        agentname:'陕西麻将会员代理后台',
        color:'background-color:#F0F8FF',
        addDiamondName:'添加陕西麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rechargeOpen:true,
        wxScanPay:false,
        jbcBtn:true,//休闲场通道开关
   //     h5Pay:true,//钻石的h5充值通道开关
        faceConfig:true,//表情配置
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/sxmj.jpg',
        //bridgeUrl:'https://hm.baidu.com/hm.js?ff2ce290df6a14b2903d31e7805a4af3',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        //selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                tdh:'推倒胡',
                xa:'西安',
                bj:'宝鸡',
                yl:'榆林',
                hs:'滑水',
                ls:'两色',
                wn:'渭南',
                gz:'锅子',

                j04:'4局',
                j08:'8局',

                c0:'不吃',
                c1:'吃',

                f0:'不带风',
                f1:'带风',

                p0:'不带吃胡（只炸不胡）',
                p1:'吃胡',

                lz0:'无赖子',
                lz1:'有赖子',

                f:'带风',
                p:'只炸不糊',
                258:'258做将',
                qd:'七对',
                lz:'红中癞子',
                xp:'带下炮',
                ypdx:'一炮多响',
                gsh:'杠随胡',
                c:'吃',

                ts:'特殊牌型2番',
                fb:'庄家翻倍',
                dy6:'大于6听',
                dg:'点杠三家赔',
                xq:'开局选缺',
                '1q':'缺一门',

                '1dc':'单查底分1分',
                '3dc':'单查底分3分',

                '147':'147/258/369',
                '159':'159/26/37/48',

                m4:'买4码',
                m6:'买6码',
                m1:'一码全中',

                n9:'窝窝鸟',
                n1:'上中下鸟',
                n2:'抓2鸟',
                n4:'抓4鸟',
                n6:'抓6鸟',

                h3:'换三张',
                d19:'带幺九将对',

                f3:'3番',
                f4:'4番',
                f5:'5番',

                j2:'2金',
                j3:'3金',
                j4:'无封顶',

                s5:'5分',
                s10:'10分',
                s15:'15分',

                df1:'1分',
                df5:'5分',

                gt1:'硬金',
                gt2:'软金',
                gt3:'软硬金',

                hz:'汉中摆叫',
                ak:'安康',
                zz:'转转',
                xz:'血战',
                wntj:'渭南贴金',
                lr:'两人',
                sr:'三人',

                2580:'非258做将',
                2581:'258做将',

                qd0:'非七对',
                qd1:'七对',

                ypdx0:'非一炮多响',
                ypdx1:'一炮多响',

                gsh0:'非杠随胡',
                gsh1:'杠随胡',

                ts0:'非特殊牌型2番',
                ts1:'特殊牌型2番',

                fb0:'非庄家翻倍',
                fb1:'庄家翻倍',

                dy60:'非大于6听',
                dy61:'大于6听',

                dg0:'非点杠三家赔',

                xq0:'非开局选缺',
                xq1:'开局选缺',

                '1q0':'非缺一门',
                '1q1':'缺一门',

                h30:'非换三张',
                h31:'换三张',

                d190:'非带幺九将对',
                d191:'带幺九将对',

                ysd0:'非硬三代',
                ysd1:'硬三代',

                '32A0':'非33320A',
                '32A1':'33320A',

                j:'经典',
                z:'炸弹',
                jbc:'休闲场',

                gj:'高级',
                zj:'中级',
                cj:'初级',
                zhuanja:'专家',
                ds:'大师',
                zs:'宗师',

                mpqz:'明牌抢庄',
                nnsz:'牛牛上庄',
                gdzj:'固定庄家',
                zyqz:'自由抢庄',
                tbnn:'通比牛牛',

                psz:'拼三张',
                wk:'挖坑',
                sd:'三代',
                zlmz:'捉老麻子',
                nn:'牛牛',
                'gdp-1':'自由炮',
                gdp0:'0炮',
                gdp1:'1炮',
                gdp2:'2炮',
                gdp3:'3炮',
                gdp4:'4炮'
            }
    },
    gzmj:{
        loginImg:'gzmj.png',
        name:'贵州麻将会员管理后台',
        agentname:'贵州麻将会员代理后台',
        color:'background-color:#F0F8FF',
        addDiamondName:'添加贵州麻将钻石',
        additionalorder:false,//补单功能
        rechargeOpen:true,
        wxScanPay:false,
        coin2:true,//元宝
        bspz:true,  //比赛配置
        jbcBtn:true,//休闲场通道开关
        unionBtn:true,//添加工会账号开关
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/gzmj.jpg',
      //  bridgeUrl:'https://hm.baidu.com/hm.js?83565170d8ddff3fe0c50748dfcac792',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        setSms:true,// 手机验证
        rebate:{
            basic:{sca:0.2, recommend:0, recharge:0},
            firstLevel:{sca:0.3, recommend:4, recharge:1000},
            secondLevel:{sca:0.4, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.2, recommend:0, recharge:0},
            firstLevel:{sca:0.3, recommend:4, recharge:1000},
            secondLevel:{sca:0.4, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                gy:'贵阳',
                zy:'遵义',
                sdg:'三丁拐',
                tr:'铜仁',
                ash:'安顺',
                edg:'二丁拐',
                4:'4局',
                8:'8局',
                12:'12局',
                t1:'贵阳麻将',
                t2:'遵义麻将',
                t3:'三丁拐',
                t4:'安顺麻将',
                t5:'铜仁麻将',
                t6:'二丁拐',
                t7:'兴义麻将',
                t8:'两房',
                t9:'六盘水',
                t10:'新贵阳麻将',
                t11:'十胡十一',
                t12:'仁怀麻将'

            }
    },
    pdk:{
        loginImg:'pdk.png',
        name:'跑得快会员管理后台',
        agentname:'跑得快会员代理后台',
        color:'background-color:#F8F8FF',
        addDiamondName:'添加跑得快红宝石',
     //   h5Pay:true,
        faceConfig:true,
        //bridgeUrl:'https://hm.baidu.com/hm.js?1c1a721137581c45276cd5c37f3eecbe',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/pdk.jpg',
        jbcBtn:true,//休闲场通道开关
        bspz:true,  //比赛配置
        jump:{
            tip:{url:'tip', name:'选择游戏后台'},
            phz:{url:'http://phz.coolgamebox.com:88/login.html', name:'跑胡子会员管理后台'}
        },
        //gameIds: ['phz', 'pdk'],//会员管理页面 权限添加
        disableAddMember:false,//会员管理页面 添加会员按钮不显示
		unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        agentRebate:true,//跑得快返利隐藏
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                16:'经典',
                27:'2副牌',
                15:'15张',
                18:'赖子',
                33:'打筒子',
                j10:'10局',
                j20:'20局',
                j30:'30局',
                j1000:'1000分',
                j600:'600分',
                s0:'不显示',
                s1:'显示',
                f0:'非必出',
                f1:'必出',
                fw:'赢家先',
                f3:'黑3先',
                rw100:'终局100分',
                rw200:'终局200分',
                rw300:'终局300分'
            }
    },
    ddz:{
        loginImg:'ddz.png',
        name:'斗地主会员管理后台',
        agentname:'斗地主会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加斗地主红钻',
        jbcBtn:true,//休闲场通道开关
        gold:true,//金卡
        faceConfig:true,//表情配置
        emoj:true,//表情直充配置
        jump:{//http://scmj.coolgamebox.com:89/login.html
            tip:{url:'tip', name:'选择游戏后台'},
            scmj:{url:'http://scmj.coolgamebox.com:89/login.html', name:'四川麻将会员管理后台'}
        },
   //     h5Pay:true,
        rechargeOpen:true,
        wxScanPay:false,
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/ddz.jpg',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        rebate:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.3, recommend:0, recharge:0},
            firstLevel:{sca:0.4, recommend:4, recharge:1000},
            secondLevel:{sca:0.5, recommend:10, recharge:1000}
        },
        dicStatistice :
            {
                d:'斗地主',

                j:'经典',
                s:'四川',
                r:'四人',
                l:'癞子',
                h:'欢乐',
                e:'二人',

                8:'8局',
                10:'10局',
                20:'20局',

                2:'2炸',
                3:'3炸',
                4:'4炸'
            }
    },
    gxmj:{
        loginImg:'gxmj.png',
        name:'广西麻将会员管理后台',
        agentname:'广西麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加广西麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        faceConfig:true,//表情配置
        baiduPacket:true,//百度钱包开关
        rechargeOpen:true,
        wxScanPay:false,
      //  h5Pay:true,
        //bridgeUrl:'https://hm.baidu.com/hm.js?c43db902dcc8ad0a4d8a10ab111f46e3',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        bannerurl:'../img/gxmj.jpg',
        weixinPublicKeFu:true,//跑马灯微信公众号客服健康公告开关
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        setSms:true,// 手机验证
        countervail:true,
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice: {
            gxmj:'广西麻将',
            gx0:'南宁',
            gx1:'桂林',
            gx2:'河池',
            gx3:'柳州',
            gx4:'玉林',
            gx5:'百色',
            gx6:'贵港',
            gx7:'钦州',
            gx8:'转转',
            gx9:'推倒胡',
            gx10:'北海',
            gx11:'来宾',
            gx12:'横县',
            gx13:'都安',
            j4:'4局',
            j8:'8局',
            f0:'不带风',
            f1:'带风',
            c0:'不可以吃',
            c1:'可以吃',
            p0:'不封胡',
            p1:'可封胡'
        }
    },
    kwx:{
        loginImg:'kwx.png',
        name:'卡五星会员管理后台',
        agentname:'卡五星会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加卡五星钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'每个二维码只能用于一次支付,充值完成后请重新加载页面',
        rechargeOpen:true,
        additionalorder:false,//补单功能
        baiduPacket:true,//百度钱包开关
        //h5Pay:true,//钻石的h5充值通道开关
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        bannerurl:'../img/kwx.jpg',
        //bridgeUrl:'https://hm.baidu.com/hm.js?0b6f59f666b00ccb5b5741aadcf979d3',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        ownPlayer:true,
        dmtk:true,
        faceConfig:true,//表情配置
        h5PayZFB:false,//钻石的h5充值通道开关
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                SGM0:'无游戏模式',
                SGM1:'襄阳卡五星',
                SGM2:'武汉麻将',
                SGM3:'孝感卡五星',
                SGM4:'十堰卡五星',
                R8:'8局',
                R16:'16局',
                IP1:'带漂',
                IP0:'不带漂',
                MM0:'无买马',
                MM1:'自摸买马',
                MM2:'亮牌自摸买马',
                IKK1:'开口番',
                IKK0:'口口番',
                CE1:'可吃牌',
                CE0:'不可吃牌',
                WW1:'带风',
                WW0:'不带风',
                CEH1:'可吃胡',
                CEH0:'不可吃胡'
            }
    },
    kwxclass:{
        loginImg:'kwxclass.png',
        name:'乐游湖北麻将会员管理后台',
        agentname:'乐游湖北麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加乐游湖北麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'每个二维码只能用于一次支付,充值完成后请重新加载页面',
        rechargeOpen:true,
        additionalorder:false,//补单功能
        baiduPacket:true,//百度钱包开关
        //h5Pay:true,//钻石的h5充值通道开关
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        bannerurl:'../img/kwxclass.jpg',
        //bridgeUrl:'https://hm.baidu.com/hm.js?0b6f59f666b00ccb5b5741aadcf979d3',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        ownPlayer:true,
        dmtk:true,
        faceConfig:true,//表情配置
        h5PayZFB:false,//钻石的h5充值通道开关
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:
            {
                SGM0:'无游戏模式',
                SGM1:'襄阳卡五星',
                SGM2:'武汉麻将',
                SGM3:'孝感卡五星',
                SGM4:'十堰卡五星',
                R8:'8局',
                R16:'16局',
                IP1:'带漂',
                IP0:'不带漂',
                MM0:'无买马',
                MM1:'自摸买马',
                MM2:'亮牌自摸买马',
                IKK1:'开口番',
                IKK0:'口口番',
                CE1:'可吃牌',
                CE0:'不可吃牌',
                WW1:'带风',
                WW0:'不带风',
                CEH1:'可吃胡',
                CEH0:'不可吃胡'
            }
    },
    zjmj:{
        loginImg:'zjmj.png',
        name:'浙江麻将会员管理后台',
        agentname:'浙江麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加浙江麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rechargeOpen:true,
        diamondExchangeGold:true,
        bspz:true,
        wxScanPay:false,
        jbcBtn:true,//休闲场通道开关
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/zjmj.jpg',
   //     h5Pay:true,
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        //bridgeUrl:'https://hm.baidu.com/hm.js?238eef1b0365f94c0bc62da32070d136',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice :{
            hz:'杭州',
            nb:'宁波',
            tz:'台州',
            wz:'温州',
            sx:'绍兴',
            j4:'4局',
            j8:'8局',
            j16:'16局',
            t4:'4台',
            f8:'8番',
            f16:'16番',
            hu300:'300糊',
            hu500:'500糊',
            baida3:'3百搭',
            baida7:'7百搭',
            cx: '慈溪',
            tdh: '推倒胡',
            yy: '余姚',
            jx:'嘉兴',
            js:'嘉善',
            lg:'龙港',
            dq:'德清',
            fh:'奉化',
            py:'平阳'
        }
    },
    gdmj:{
        loginImg:'gdmj.png',
        name:'广东麻将会员管理后台',
        agentname:'广东麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加广东麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rechargeOpen:true,
        wxScanPay:false,
        weixinPublicKeFu:true,//跑马灯微信公众号客服开关
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/gdmj.jpg',
        zhifutong:true,//钻石的支付通充值通道开关
        unionBtn:true,//添加工会账号开关
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限
        erCode:true,
        agentRebate:true,//跑得快返利隐藏
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice :{
            t1:'广州推倒胡',
            t2:'惠州庄麻将',
            t3:'香港麻将',
            t9:'深圳麻将',
            t4:'东莞麻将',
            t5:'鸡平胡',
            t6:'100张',
            r4:'4局',
            r8:'8局',
            g0:'无鬼',
            g1:'红中鬼',
            g2:'翻鬼',
            b0:'无爆炸马',
            b1:'爆炸马',
            s3:'三人推倒胡',
            s4:'四人玩法',
            j0:'无节节高',
            j1:'节节高',
            nj0:'无惠州不可鸡胡',
            nj1:'惠州不可鸡胡',
            m0:'无惠州马跟底',
            m1:'惠州马跟底',
            mq0:'无惠州门清',
            mq1:'惠州门清',
            md0:'无惠州马跟对对胡',
            md1:'惠州马跟对对胡',
            h2:'2马',
            h4:'4马',
            h6:'6马',
            f0:'无风牌',
            f1:'有风牌',
            d0:'不可胡七对',
            d1:'可胡七对',
            c0:'不可吃',
            c1:'可吃',
            p0:'可点炮',
            p1:'不可点炮',
            t10:'做牌推倒胡',
            t12:'二人推到胡',
            t7:'河源麻将',
            t8:'潮汕麻将',
            t11:'红中宝',
            t13:'博罗庄',
            t100:'代开房',
            zjn:'炸金牛',
            sg:'三公',
            psz:'拼三张',
            nnsz:'牛牛上庄',
            zyqz:'自由抢庄',
            mpqz:'名牌抢庄',
            gdzj:'固定庄家',
            tbnn:'通比牛牛',
            jd:'经典',
            fk:'疯狂',
            d:'斗地主',
            nn:'牛牛',
            t14:'广东晃晃'
        }
    },
    sdmj:{
        loginImg:'sdmj.png',
        name:'山东麻将会员管理后台',
        agentname:'山东麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加山东麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rechargeOpen:true,
        wxScanPay:false,
        //h5Pay:true,//钻石的h5充值通道开关
        zhifutong:true,//钻石的支付通充值通道开关
        //bridgeUrl:'https://hm.baidu.com/hm.js?c87fb9ab8764b0d622a78f73ef88abbf',
        zhichi:'https://www.sobot.com/chat/frame/js/entrance.js?sysNum=62ed839f5fdd4cf59ed56cb4f2f952ff',//智齿
        baiduPacket:true,//百度钱包开关
        bannerurl:'../img/sdmj.jpg',
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限
        selfBuildUnion:true,//用户自建群模式， 只允许3、10 有查看权限  隐藏代理的群管理
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
            'jn':'济南麻将',
            'j4':'4局',
            'j8':'8局',
            'zj1':'258做将',
            'zj2':'不是258做将',
            'df1':'带风',
            'df2':'不带风',
            'dh1':'带花',
            'dh2':'不带花',
            'ml1':'明楼',
            'ml2':'不明楼',
            'sby':'手把一',
            'j6':'6局',
            'j12':'12局',
            'bp1':'包牌',
            'bp2':'不包牌',
            'byw1':'把一是大小王',
            'byw2':'把一不是大小王',
            'wz1':'大小王可以炸',
            'wz2':'大小王不可以炸'
        }
    },
    shxmj:{
        loginImg:'shxmj.png',
        name:'山西麻将会员管理后台',
        agentname:'山西麻将会员代理后台',
        color:'background-color:#FFFFFF',
        addDiamondName:'添加山西麻将钻石',
        alipayTextTip:'请在浏览器里面操作充值',
        wxScanPayTextTip:'充值完成后请重新加载页面',
        rechargeOpen:true,
        wxScanPay:false,
        baiduPacket:true,//百度钱包开关
        unionBtn:true,//添加工会账号开关  代理开群主模式， 0级有群主管理界面， 3、10有管理权限  用户管理资料互换开关
        bannerurl:'../img/shxmj.jpg',
        rebate:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        rebate2:{
            basic:{sca:0.16, recommend:0, recharge:0},
            firstLevel:{sca:0.2, recommend:4, recharge:1000},
            secondLevel:{sca:0.24, recommend:10, recharge:1000}
        },
        dicStatistice:{
        }
    }
}
export default gameType
