class Scene7 extends IScene {

    private bg: egret.Bitmap; //背景
    private list: egret.DisplayObject[];
    private txt3: egret.Bitmap;


    public init() {
        this.list = [];

        var tmp: egret.Bitmap;
        this.bg = new egret.Bitmap(RES.getRes("bg_1"));

        tmp = new egret.Bitmap(RES.getRes("sp_1.txt_1_2"));
        tmp.x = (this.stage.stageWidth - tmp.width) / 2;
        tmp.y = 900;
        this.txt3 = tmp;

        var tmp2: egret.TextField;

        tmp2 = Utils.getText("p7_1");
        this.list.push(tmp2);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_1"))
        tmp.width = 152;
        tmp.height = 116;
        tmp.touchEnabled = true;
        tmp.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            location.href = 'http://www.kankanews.com/a/2015-10-15/0017161025.shtml';
        }, tmp);
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_2"))
        tmp.width = 152;
        tmp.height = 95;
        tmp.touchEnabled = true;
        tmp.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var sound: egret.Sound = <egret.Sound>RES.getRes("soud");
            sound.stop();
            sound.play(false, 0);
        }, tmp);
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_3"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_4"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_5"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_6"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_7"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_8"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_9"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_10"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_11"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.img_7_12"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.shou"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.shou"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.5_07"))
        tmp.touchEnabled = true;
        tmp.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            location.href = 'http://v.qq.com/page/e/d/z/e0170uie4dz.html';
        }, tmp);
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_3.shou"))
        this.list.push(tmp);
    }

    private CommonStyle(tmp2: egret.TextField) {
        tmp2.multiline = true;
        tmp2.width = 526;
        tmp2.lineSpacing = 12;
    }





    public beginstart() {
        this.removeChildren();
        this.addChild(this.bg);
        this.addChild(this.txt3);
        var tmp: any;



        tmp = <egret.TextField>this.list[0];
        tmp.x = 0;
        tmp.y = 53 + 25;
        tmp.wait = 500;
        tmp.width = this.stage.stageWidth;
        tmp.to = {
            y: 53,
            alpha: 1
        }
        tmp.speed = 800;
        tmp.alpha = 0;
        tmp.textAlign = "center";



        tmp = this.list[1];
        tmp.x = this.stage.stageWidth;
        tmp.y = 138 - 150;
        tmp.to = {
            x: 60,
            y: 309 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[2];
        tmp.x = 45;
        tmp.y = 0 - tmp.height;
        tmp.to = {
            x: 440,
            y: 343 - 175
        }
        tmp.wait = 1300;

        tmp = this.list[3];
        tmp.x = -tmp.width;
        tmp.y = 579;
        tmp.to = {
            x: 107,
            y: 579 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[15];
        tmp.x = 242 - 150;
        tmp.y = this.stage.stageHeight;
        tmp.to = {
            x: 252,
            y: 338 - 175
        }
        tmp.wait = 1300;


        tmp = this.list[4];
        tmp.x = this.stage.stageWidth;
        tmp.y = 559;
        tmp.to = {
            x: 312,
            y: 559 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[5];
        tmp.x = 51;
        tmp.y = this.stage.stageHeight;
        tmp.to = {
            x: 151,
            y: 674 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[6];
        tmp.x = -tmp.width;
        tmp.y = this.stage.stageHeight - 100;
        tmp.to = {
            x: 389,
            y: 664 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[7];
        tmp.x = this.stage.stageWidth;
        tmp.y = 424;
        tmp.to = {
            x: 91,
            y: 774 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[8];
        tmp.x = 234;
        tmp.y = this.stage.stageHeight;
        tmp.to = {
            x: 234,
            y: 756 - 150
        }
        tmp.wait = 1300;


        tmp = this.list[9];
        tmp.x = this.stage.stageWidth;
        tmp.y = 771;
        tmp.to = {
            x: 433,
            y: 771 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[10];
        tmp.x = 432;
        tmp.y = this.stage.stageHeight;
        tmp.to = {
            x: 232,
            y: 881 - 150
        }
        tmp.wait = 1300;

        tmp = this.list[11];
        tmp.x = this.stage.stageWidth;
        tmp.y = 1029;
        tmp.to = {
            x: 407,
            y: 929 - 150
        }
        tmp.wait = 1300;



        tmp = this.list[12];
        tmp.x = 402;
        tmp.y = -tmp.height;
        tmp.to = {
            x: 92,
            y: 954 - 150
        }
        tmp.wait = 1300;


        tmp = this.list[13];
        tmp.x = 497;
        tmp.y = 259;
        tmp.width = 50;
        tmp.height = 50;
        tmp.alpha = 0;


        tmp = this.list[14];
        tmp.x = 131;
        tmp.y = 259;
        tmp.width = 50;
        tmp.height = 50;
        tmp.alpha = 0;

        tmp = this.list[16];
        tmp.x = 321;
        tmp.y = 259;
        tmp.width = 50;
        tmp.height = 50;
        tmp.alpha = 0;
    }




    public onstart() {
        this.list.forEach((value: any, index: number, array: egret.DisplayObject[]) => {
            this.addChild(value);

            if (value.to) {
                var tw: egret.Tween = egret.Tween.get(value);
                value.wait && tw.wait(value.wait);
                tw.to(value.to, value.speed ? value.speed : 500);
            }
        });

        var _me = this;

        egret.Tween.get({}).wait(2300).to({}).call(function () {

            egret.Tween.get(_me.list[13], { loop: true })
                .to({
                alpha: 1
                }, 1000).to({
                alpha: 0
                }, 1000).wait(1000);

            egret.Tween.get(_me.list[14], { loop: true })
                .to({
                alpha: 1
            }, 1000).to({
                alpha: 0
                }, 1000).wait(1000);

            egret.Tween.get(_me.list[16], { loop: true })
                .to({
                    alpha: 1
                }, 1000).to({
                    alpha: 0
                }, 1000).wait(1000);

        })




    }





}