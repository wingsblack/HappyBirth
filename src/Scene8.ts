class Scene8 extends IScene {

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
        tmp2 = Utils.getText("p8_1");
        this.list.push(tmp2);

        tmp = new egret.Bitmap(RES.getRes("sp_4.img_8_1"));
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_4.img_8_2"));
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_4.img_8_3"));
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_4.img_8_4"));
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_1.logo"));
        tmp.width = 127;
        tmp.height = 127;
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
        tmp.x = 83;
        tmp.y = 53 + 25;
        tmp.wait = 500;
        tmp.to = {
            y: 53,
            alpha: 1
        }
        tmp.alpha = 0;



        tmp = this.list[1];
        tmp.x = -tmp.width;
        tmp.y = 281 - 150;
        tmp.wait = 1300;
        tmp.to = {
            x: 35
        }

        tmp = this.list[2];
        tmp.x = this.stage.stageWidth;
        tmp.y = 455 - 150;
        tmp.wait = 1800;
        tmp.to = {
            x: 203
        }

        tmp = this.list[3];
        tmp.x = -tmp.width;
        tmp.y = 645 - 150;
        tmp.wait = 2300;
        tmp.to = {
            x: 52
        }

        tmp = this.list[4];
        tmp.x = this.stage.stageWidth;
        tmp.y = 820 - 150;
        tmp.wait = 2800;
        tmp.to = {
            x: 289
        }

        tmp = this.list[5];
        tmp.x = 417;
        tmp.y = -tmp.height;
     
    }




    public onstart() {
        this.list.forEach((value: any, index: number, array: egret.DisplayObject[]) => {
            this.addChild(value);

            if (value.to) {
                var tw: egret.Tween = egret.Tween.get(value);
                value.wait && tw.wait(value.wait);
                tw.to(value.to, value.speed ? value.speed :800);

            }
        });



        egret.Tween.get(this.list[5]).to({
            y: 145
        }, 1000, egret.Ease.bounceOut);

    }





}