class Scene1 extends IScene {

    private bg: egret.Bitmap; //背景
    private logo: egret.Bitmap; //LOGO标志
    private txt1: egret.Bitmap;
    private txt2: egret.TextField;
    private txt3: egret.Bitmap;
    private list: egret.DisplayObject[];

    public init() {
        this.list = [];

        var tmp: egret.Bitmap;
        this.bg = new egret.Bitmap(RES.getRes("bg_1"));
        this.bg.y = -100;
        tmp = new egret.Bitmap(RES.getRes("sp_1.logo"));
        this.list.push(tmp);
        this.logo = tmp;

      
        tmp = new egret.Bitmap(RES.getRes("sp_1.txt_1_1"));

        this.list.push(tmp);
        this.txt1 = tmp;


       
        tmp = new egret.Bitmap(RES.getRes("sp_1.txt_1_2"));
        tmp.x = (this.stage.stageWidth - tmp.width) / 2;
        tmp.y = 900;
        this.txt3 = tmp;
        


        this.txt2 = Utils.getText("p1_1");
        this.txt2.textAlign = "center";
        this.txt2.lineSpacing = 14
        this.list.push(this.txt2);


    }



    public beginstart() {
        egret.Tween.removeAllTweens();
        this.removeChildren();
        this.addChild(this.bg);
        this.addChild(this.txt3);
        var tmp: any;

        tmp = this.logo;
        tmp.width = 266;
        tmp.height = 266;
        tmp.anchorOffsetX = tmp.width / 2;
        tmp.anchorOffsetY = tmp.height / 2;
        tmp.x = 640 + tmp.anchorOffsetX;
        tmp.y = 60 + tmp.anchorOffsetY;
        tmp.rotation = 180;

        tmp = this.txt1;
        tmp.alpha = 0;
        tmp.x = 61;
        tmp.y = 402 + 50;

        tmp = this.txt2;
        tmp.x = 232;
        tmp.y = 630 + 50;
        tmp.alpha = 0;

    }
    public onstart() {

        egret.Tween.get(this.logo).wait(2100)
            .to({
            x: 187 + this.logo.anchorOffsetX,
            rotation: 0
        }, 1500);

        egret.Tween.get(this.txt1).wait(500)
            .to({
            y: 402,
            alpha: 1
        }, 800);

        egret.Tween.get(this.txt2).wait(1300)
            .to({
            y: 630,
            alpha: 1
        }, 800);


        this.list.forEach((value: egret.DisplayObject, index: number, array: egret.DisplayObject[]) => {
            this.addChild(value);
        });


    }



}