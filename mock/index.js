

// 随机获取数组中的n个元素
function random(list, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(list[Math.floor(Math.random() * (list.length - 0))]);
    }
    return arr;
}

// 随机生成一个范围内的数字
function randomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}

// 随机生成一个摘要
function creatMark() {
    let contentStr = `已是提前半年便开始采购各种装备与物资，因为缺乏超长途骑行的经验，所以购买的各类物资只能凭借自己的猜想去选购，
    以至于买了很多不实用的东西，出发前一天还在为怎么把想带的行李塞满行李包而发愁。科哥是我的一个好朋友，同样也是一位摩托车爱好者，
    平时EMO的工作日之余我们经常相约一起骑摩托车探索 重庆 的农村，以此来让EMO的日子充满一些阳光。这次的环 中国 骑行本来想忽悠他陪我跑 滇藏线 
    的其中一段，也算圆他自己的一个摩旅进藏梦，但已是两个孩子父亲的他看了看自己的银行卡账户余额，无奈地说:“你还是个人走吧，但我支持你。”他的支持
    并不仅仅是精神与口头上的支持，而是实打实送了我一些他平时闲置着的摩旅装备。虽说是一座县城，但可别小看这座城市，我们所熟知的北上广深只是名义上
    的一线城市，“一线”这个定义也只是人们根据城市大小而赋予的一个城市等级的称谓罢了，而 盐津 这座城市则是正儿八经的“一线”城市，因为它真的是一条线啊。
    我一直相信摄影是减法的原则，但如果只拍摄风景的话总感觉照片过于单调，缺少一些元素来点缀眼前的美景。所以呢，我在拍摄风光的时候还喜欢给风光
    照做一些适当的加法，以此增加照片的故事性。就 比如 ，现在眼前有两位小姐姐也在拍摄邛海的日落，而且还是互相给对方拍，那么她们便是此时我想
    在风光照中增加的元素。只不过，因为是将镜头拉到最长焦距进行拍摄的原因，没有事先征求人家的同意，拍摄过后即使觉得照片拍得还不错，但还是没
    有与她们沟通是否需要这些照片，万一遇到个极其在意自己无缘无故被别人拍摄的人呢？但其实每次给别人拍到一张还不错的照片后，我其实很想把这些照片给到他们。
    此时的北方还在报道着下大雪的新闻，但早春时节的 西昌 气候早已温暖宜人。但即使如此，因为是淡季中淡季的原因，还是使得整个 西昌 陷入了“游客荒”，
    这也使得此地靠开客栈为生的商家相竞在自家客栈门口招揽游客，住宿的价格也在相互竞争之下降得非常具有性价比。但因为出于情怀的原因，我还是选择入
    住青旅，即使青旅的床位房和客栈的单人间价格相差不大。但我不太喜欢旅行到了一个城市后，到了夜晚就只剩自己和床，毕竟旅途的路上也需要与其他游人聊天。
    入住的青旅在邛 海东 岸，几乎没什么人住，更是没有以前住青旅的那种氛围，同房间只有一位长期背包的“浪人”，此人价值观比较极端，所以我也不愿与其搭话。
    之前已在高处拍过邛海全景的落日景别。为了避免照片重复，这次拍摄便选择在水面的位置拍摄近距离的邛海日落。但因为没有提前规划，我只能在邛 海东 北岸及
    西岸寻找理想中能够贴近水面的拍摄点，最好是带前景的那种。最后在绕了一个又一个不知名的小村庄以及多个不知名的小路之后，终于找到了一个名为“邛海国家湿
    地公园”的景区作为拍摄点。从 西昌到攀枝花 的国道路况很好，比穿越大 凉山 的那段国道好太多，特别是刚出 西昌 城的那一段，这样的路况骑起来心情都感到无比愉悦，就是要如此路况才能感受到摩旅的乐趣嘛。中途还遇到一个骑250小仿赛的伙计，车的排量比我的车小，但骑起来的速度与气势还比我快不少。只见他拧了下油门，很快便把超过，可能他以为我会加速，然后和他互相对“蹦”。只可惜，我没有骑快的习惯，甚至极其BS在道路上相互竞速的人，更是不理解为什么一些骑车的人喜欢所谓的“蹦”。此时的他故意放下速度，可能还是希望我加速追赶他，但我依然无动于衷，依旧以休闲骑的姿态悠闲行驶，他见我如此视而不见，便一个油门往前继续横窜。只不过，前面便到了一个检查点后，他被拦在那里扫码，我慢慢从后面起来后，他便问我到哪？要不要一起骑一段？我回答不用，我倾向于自己一个人骑，并嘱咐他注意安全。这里吧，也就不太分享自己的观点了，我也不算是所为的“骑士”或是“骑友”，因为除了摩旅之外我平时确实很少骑车的。
    `
    let startNum = randomNum(0, contentStr.length - 1000);
    let cutNum = randomNum(5, 500);
    // console.log('startNum-cutNum', startNum, cutNum);
    if ((startNum + cutNum) > contentStr.length) {
        let resContent = contentStr.slice(startNum, contentStr.length);
        // console.log('resContent', resContent);
        return resContent;
    }
    else {
        let resMark = contentStr.slice(startNum, startNum + cutNum)
        // console.log('resMark', resMark);
        return resMark;
    }
}

// 随机产出10片文章
function creatArticle(num) {
    let articleList = [
        {
            title: "果然在机场你能遇见各式各样的人儿",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/539ee665a9a7bfc58303467aa27421fe.jpeg"
        },
        {
            title: "老大爷正在剪羊毛，不是推子推的那种，而是传统的用剪刀剪",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/ac93190e2cdf199f74676eb31b4f9d93.jpeg"
        },
        {
            title: "Vue框架使用Mock随机生成数据详细方法",
            imgSrc: "https://img-blog.csdnimg.cn/21f45d1bdd2c4976bf691edfe2b26614.png"
        },
        {
            title: "我们这种初级小白不知道啥时候能尝试~先许个愿",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/083a2793a43d8d5e464cdaf84920f44f.jpeg"
        },
        {
            title: "有事儿的是心里——继续爬坡，前面一群人在上游洗脚",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/d68bfd16267d7990c087211c9d457c46.jpeg"
        }, {
            title: "坡陡、漫长、碎石、口渴、体力不支、大口喘气不止",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/90b506bcb5292d0a7bea32800284a1e5.jpeg"
        }, {
            title: "连看到美景都没力气拿出手机拍照的我第一天就果断放弃了通讯",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/6dc85341604fce1a6ef01ac3bd8532ec.jpeg"
        }, {
            title: "就是拼了命的往前走，远远的走在前头",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/c89509758ce09b1357921c929604ed54.jpeg"
        }, {
            title: "这里的马儿需要我们给拍照",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/2d72a0bca545d4ecf928538d16830572.jpeg"
        }, {
            title: "唱的啥完全没听懂 反正是哈萨克民族歌曲",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/ba5a399bb05a6369412a23c795633bfb.jpeg"
        }, {
            title: "校长跑回去重新端起了“大炮” 一顿咔嚓咔嚓 操作猛如虎",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/53fdecc96eeaadbdaa7b66e9335549bc.jpeg"
        }, {
            title: "留下来不舍时光流逝的证据",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/d9c2754f899752750a59225222da2492.jpeg"
        }, {
            title: "带上的雨衣果然还是派上用场了少林寺小哥哥亲身尝试",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/413e6a748612469dc697e1f0049d4795.jpeg"
        }, {
            title: "然后毡房里又开始乌苏+羊肉串+酒鬼花生",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/6cd94c8a0352f0c34519c01bc675edbd.jpeg"
        }, {
            title: "不过昨晚拍了那么多少数民族的美丽姑娘",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/7dc3ff45faaa3172cb3c2aa5007b599a.jpeg"
        }, {
            title: "这有着4000万年演化历史的雪岭云杉",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/6309f4691091ba89b6a8b82067433f1e.jpeg"
        }, {
            title: "空地处正好可以搭建个小木屋",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/1c37e9293d969591419c9a966da28479.jpeg"
        }, {
            title: "这也造成了我后面的遗憾女生们都选择了骑马",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/76f2601e313cea6b0cd65aa9289e8288.jpeg"
        }, {
            title: "看着我们是不是像一群逃难的天空得够蓝 湖水得够蓝够清 花儿得够多",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/9c3ddd837c0ec38bfb202a95e60df3ff.jpeg"
        }, {
            title: "拍婚纱照的新婚燕尔很多这样幸福吗",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/7f600b5415933f80dd5765f63f73da10.jpeg  "
        }, {
            title: "不情愿地加了微信好友 因为会被那人步数霸屏的",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/9deb8667be89d63a5cafe37e676a6c6c.jpeg"
        }, {
            title: "大巴扎的美食城在装修关门了",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/9dbb8c0d3c00824b52e9246b5a8c7806.jpeg"
        }, {
            title: "乘坐10分钟才一趟的地铁回去我这种这么好甜品的 都没馋冰激凌",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/dfd5113fc3008dd550405e5459c42755.jpeg"
        }, {
            title: "说是坎儿井可以和都江堰 比肩",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/567541312f399e76339a76953dd069ef.jpeg"
        }, {
            title: "曾经有一张如此可口的肉馕摆在我的面前",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/640448b1d1922b476fade090c41b7785.jpeg"
        }, {
            title: "散漫的一天 各种小插曲 也令人难忘的",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/d50f4394c114e5b48a6442775c4f363c.jpeg"
        }, {
            title: "独山子 -乔尔玛-唐布拉大草原-巴音布鲁克",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/f8a4c98d3c561a0714be54c454a4409e.jpeg"
        }, {
            title: "这个定义也只是人们根据城市大小而赋予的一个城市等级的称谓罢了",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/baac58516a70e32c5aa525572187ab5a.jpeg"
        }, {
            title: "抵达盐津的时候，正好是这座城市的日落时分",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/14412146eb9cfe433f5aba058a86fbff.jpeg"
        }, {
            title: "虽说是一座县城，但可别小看这座城市，我们所熟知的北上广深只是名义上的一线城市",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/49a4ab3618d614f7011430041f26b906.jpeg"
        }, {
            title: "从高处俯瞰这座城市，整个城市基本上是沿着河流与峡谷而修建",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/42c98553a7e0703f4d508a615946cfff.jpeg"
        }, {
            title: "这座城市的发展因为受到两侧峡谷的影响，所以在后期的发展中无法横向发展，只能沿着河流纵向修建",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/8c4003a5e8859a0365c35a6a36e0c217.jpeg"
        }, {
            title: "从无人机拍摄的画面可以清晰的看出，整个城市就像一条线一样盘踞在峡谷之中",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/177c178391147047c2f0a245c49cb5c8.jpeg"
        }, {
            title: "可不知道是不是太唐突的原因，飞了很久也拍不出自己想要拍出的效果，一直飞到无人机即将自动返航都没能拍出这座城市的",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/caf84bd9a19d115e349866fcc4215ae6.jpeg"
        }, {
            title: " 盐津 毕竟只是这万里骑行路中的其中一站，我坚信前方依然有更多的风景等着我来探索与记录",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/9ea3ffee3dfd65dfdbd62274f0f80cd4.jpeg"
        }, {
            title: "我相信我会是一个三有青年：“有魄力，有勇气，有创造力！”",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/2bc167939cafaa11772d228bb15f596d.jpeg"
        }, {
            title: "闷闷不乐的日子总会过去，骑行的时候不津在思考过去与未来。这天的行程从一开始就不太轻松",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/15d39ccfaa64047e97ddd3c655b693d1.jpeg"
        }, {
            title: "路上坑坑洼洼且满是灰尘，山路的弯道还特多。早上出发得早都还好，大车都还没开始跑",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/7786791e6afb4056b3792dc3794bb27d.jpeg"
        }, {
            title: "路上坑坑洼洼且满是灰尘，山路的弯道还特多。早上出发得早都还好，大车都还没开始跑",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/6db0322ffe45478c156ec38857cd2711.jpeg"
        }, {
            title: "之前被“困”在井里的我仅仅只是在那两部纪录片中得以知晓",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/122d5120d007bae732fa36a49f0731b8.jpeg"
        }, {
            title: "本来在出发前幻想自己也能一路沿着悬崖步道爬上传说中的“悬崖村”",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/c612549abb78a4bcc0fd9af63a465cae.jpeg"
        }, {
            title: "而且在出发之前也听说过游客在大 凉山 附近地区，压到当地村民的一只鸡鸭鹅就要被索要至少2K的故事",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/8e2106d4dd470adb6ffdfc735ce69808.jpeg"
        }, {
            title: "更是让我迫不及待地停下车来给自己拍照。当然了，更重要的是展示我此行身披的",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/68b3f3249c31b233326500e2cd773975.jpeg"
        }, {
            title: "使用单反拍摄，最后拼接而成的邛海落日全景图",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/2e0b79b6f5bae85524c0f13e27225ce0.jpeg"
        }, {
            title: "我一直相信摄影是减法的原则，但如果只拍摄风景的话总感觉照片过于单调，缺少一些元素来点缀眼前的美景",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/c2c227c4a48d171b80a01634c0040ee5.jpeg"
        },
        {
            title: "我们再去一趟 南京 吧，上次还留有了一些遗憾没能完成",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/31e1bedc46adf2d5448f18dfd60e0b70.gif"
        },
        {
            title: "他不解的问，特别是这个我们去过很多次的城市。",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/4316fc942598ba04071dbe96fe49c9ca.gif"
        }, {
            title: "他不解的问，特别是这个我们去过很多次的城市。",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/4eccdc4270a2ba8d139907733b032705.gif"
        }, {
            title: "一九年的十一月我们去了 南京 的青奥中心， 我一直念念不忘那一晚途经建邺区的夜景",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/f68662e4c5ce5a19a873ef9747d34fe3.gif"
        }, {
            title: "我一直在思考如何写好「城市」，也就是繁华都市，这不同于自然人文历史等篇章，由于无史可循，无故事可听。",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/d441d4c59a0f5541841986c74d0a97b7.gif"
        }, {
            title: "城市是我们的庇护所，这让我们对它感到熟悉且陌生。每一个人的日常都在城市中度过",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/7547b76ceb347bcabdaafa2525397002.gif"
        }, {
            title: "似乎只要融入到高楼大厦和便捷交通工具的保护之中，就能很快习惯当地生活",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/7be3024c5e626d76a6a9ee6b0e5ff59b.gif"
        }, {
            title: "当去过许多的地方，就会发现每一个现代城市在看似相同的外表下，都有着自己独特的魅力。",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/c602cea2ec13f8762726b4a900f9ba9a.gif"
        }, {
            title: "当我第一次走近 上海 陆家嘴的城市快节奏，即使还未工作，心底里都会油然而生“不努力就会",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/01c85c92f77e7f2064a2c07bc84f33fc.gif"
        }, {
            title: "武汉 城市是忙乱的，就像热干面拌过后酱料分布各处； 苏州 工业园区是文艺且绚烂的，即使是",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/6f4e8fd6f3cffefbfd9f7f8370397db6.gif"
        }, {
            title: "贝聿铭先生说过：“对于一个城市来说，最重要的不是建筑，而是规划",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/ab58b2f62f3d497b5a1ff8af566847ba.gif"
        }, {
            title: "旅行前我会最先看地图，因为可以从上帝视角“解剖”一个城市，了解一个城市的”五脏六腑“。",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/9dc965926eb7f6e7db5d43dc36be9957.gif"
        }, {
            title: "与老城区错综复杂的道路相比，这里的道路更加清晰，城市规划师在草图上勾勒出一个个方格，方格构成街道，街道串联成面，整座城市像一面折扇徐徐展开。",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/7363360a011223d060b35c20b7421f3b.gif"
        }, {
            title: "宽达七八个车道的江东大道作为主干道，它横穿过整个区域，像项链般串联起了两旁星星点点的高楼",
            imgSrc: "https://img-blog.csdnimg.cn/img_convert/be6f73241cb7e26d8ac25f0cd8330805.gif"
        },
    ]
    let randomArticle = random(articleList, num)
    randomArticle.forEach((item) => {
        item["mark"] = creatMark()
    })
    return randomArticle
}

const Mock = require("mockjs"); //mockjs 导入依赖模块
// 返回一个函数
module.exports = function (app) {
    // 监听 http 请求
    app.get('/user/userinfo', function (rep, res) {
        // 设置要返回的数据
        let json = {
            id: "@id()",                    // 得到随机的id
            username: "@cname()",           // 随机生成中文名字
            date: "@date()",                // 随机生成日期
            // avatar: "@image('200x200','red','#fff','avatar')",  // 生成图片                  
            avatar: "@/assets/common/mylogo.jpg",  // 生成图片                  
            description: "@paragraph()",    // 描述
            ip: "@ip()",                    // ip地址
            email: "@email()",              // email
            code: "200"
        }
        let response = {
            success: true,
            message: "成功",
            data: json
        }
        res.json(Mock.mock(response));
    });

    // 监听文章请求
    app.get("/articles", function (rep, res) {
        let randomArticles = creatArticle(10)
        let response = {
            success: true,
            message: "成功",
            data: randomArticles
        }
        res.json(Mock.mock(response));
    })
}